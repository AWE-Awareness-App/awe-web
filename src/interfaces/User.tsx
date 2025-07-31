export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    isCounsellor: boolean;
    profileImageUrl: string | null;
    linkedIn: string | null;
    reference: string | null;
    stripeId: string | null;
    phoneNumber: string | null;
    gender: string | null;
    occupation: string | null;
    certification: string | null;
    calendlyUrl: string | null;
    createdAt: string;
    updatedAt: string;
}