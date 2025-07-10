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
                    const { message } = await res.json().catch(() => ({}));
                    throw new Error(message || 'Invalid credentials');
                }

                const data = await res.json();
                // Suppose your API returns { token: string, user: { id, name, email, … } }

                const user = { id: '1', name: 'admin', email: credentials?.email, accessToken: data.token };

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    accessToken: data.token
                }
            }
        })
    ],
    callbacks: {
        // Persist the API token into NextAuth's JWT
        async jwt({ token, user }) {
            if (user?.accessToken) {
                token.accessToken = user.accessToken;
            }
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
