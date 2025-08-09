import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { API_BASE_URL, API_ENDPOINTS } from "@config/api";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.LOGIN}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password
                        })
                    });

                    //if error 
                    if (!res.ok) {
                        return null
                    }

                    const data = await res.json();
                    // Suppose your API returns { token: string, user: { id, name, email, … } }

                    const user = data.user;

                    return {
                        id: user.id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        role: user.role,
                        accessToken: data.token
                    }
                } catch (err) {
                    console.error('Credentials authorize error:', err);
                    // throw so NextAuth returns a generic CredentialsSignin error
                    throw new Error('CredentialsSignin');
                }
            }
        })
    ],
    callbacks: {
        // Persist the API token into NextAuth's JWT
        async jwt({ token, user }) {
            return token;
        },

        // Make the token available on the client via useSession()
        async session({ session, token }) {
            session.accessToken = token.accessToken as string;
            return session;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
    },
    session: {
        strategy: 'jwt'
    },
});
