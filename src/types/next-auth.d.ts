import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';

// 1) Extend the built-in Session interface
declare module 'next-auth' {
    interface Session extends DefaultSession {
        accessToken?: string;
        user: {
            /** Include the default User fields (name, email, image) */
            id: string;
            firstName?: string | null;
            lastName?: string | null;
            email?: string | null;
            role?: string | null;
            /** And our custom field: */
            accessToken?: string;
        } & DefaultSession['user'];
    }

    // (Optional) You can also extend the User type
    interface User extends DefaultUser {
        accessToken?: string;
    }
}

// 2) Extend the JWT payload type
declare module 'next-auth/jwt' {
    interface JWT {
        accessToken?: string;
    }
}