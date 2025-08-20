import NextAuth, { type AuthOptions, type User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { login, validateToken } from '../../../services/authService';
import { API_BASE_URL, API_ENDPOINTS } from '../../../config/api';

// Extend the User type to include our custom fields
declare module 'next-auth' {
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    accessToken?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
  }
  
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      firstName?: string;
      lastName?: string;
      role?: string;
    };
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required');
        }

        try {
          // First try the API login
          const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.LOGIN}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            })
          });

          if (res.ok) {
            const data = await res.json();
            const user = data.user;
            
            // Create a user object with the API response
            return {
              id: user.id,
              email: user.email,
              name: user.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : user.email?.split('@')[0] || '',
              firstName: user.firstName,
              lastName: user.lastName,
              role: user.role,
              accessToken: data.token
            };
          }

          // Fall back to the auth service if API login fails
          const authResponse = await login(credentials.email, credentials.password);
          
          // Ensure we have the required fields
          if (!authResponse.token || !authResponse.user?.id) {
            throw new Error('Invalid response from authentication server');
          }

          // Create a user object that matches our User type
          const user: User = {
            id: authResponse.user.id,
            email: authResponse.user.email || '',
            name: authResponse.user.firstName || authResponse.user.email?.split('@')[0] || '',
            accessToken: authResponse.token
          };
          
          return user;
        } catch (error) {
          console.error('Authentication error:', error);
          const errorMessage = error instanceof Error ? error.message : 'Authentication failed';
          throw new Error(errorMessage);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        // Set user data in the token
        token.id = user.id;
        token.accessToken = (user as any).accessToken;
        token.firstName = (user as any).firstName;
        token.lastName = (user as any).lastName;
        token.role = (user as any).role;
      }

      // In development, validate the token on each request
      if (process.env.NODE_ENV === 'development' && token.accessToken) {
        try {
          const { valid } = await validateToken(token.accessToken as string);
          if (!valid) {
            console.error('Token validation failed');
            return {}; // Force sign out
          }
        } catch (error) {
          console.error('Token validation error:', error);
          return {}; // Force sign out
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // Add the user data to the session
        session.user.id = token.sub || token.id as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.role = token.role as string;
        
        // Add the access token to the session
        (session as any).accessToken = token.accessToken as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  debug: process.env.NODE_ENV === 'development',
};

export default NextAuth(authOptions);
