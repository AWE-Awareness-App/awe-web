import type { NextApiRequest, NextApiResponse } from 'next'
import { API_BASE_URL, API_ENDPOINTS } from "@config/api";
import { User } from "@interfaces/User";

interface RegisterResponse {
    token: string
    [key: string]: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (!API_BASE_URL) {
        throw new Error('API base URL is not configured');
    }

    try {
        const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.GET_COUNSELLORS}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 3600 },
        });

        const data: RegisterResponse = await response.json()

        if (!response.ok) {
            // Forward error message from underlying API
            return res.status(response.status).json({ message: data.message || 'Failed to fetch counsellors' })
        }

        const counsellors = Array.isArray(data) ? data : (data.counsellors || []);

        if (!counsellors || !Array.isArray(counsellors)) {
            console.error('Invalid workshops data format:', data);
            return res.status(500).json({ error: 'Invalid workshops data format' });
        }

        const formatted: User[] = counsellors.map((counsellor: any): User => ({
            id: counsellor.id,
            firstName: counsellor.firstName,
            lastName: counsellor.lastName,
            email: counsellor.email,
            role: counsellor.role,
            isCounsellor: counsellor.isCounsellor,
            profileImageUrl: counsellor.profileImageUrl,
            linkedIn: counsellor.linkedIn,
            reference: counsellor.reference,
            stripeId: counsellor.stripeId,
            phoneNumber: counsellor.phoneNumber,
            gender: counsellor.gender,
            occupation: counsellor.occupation,
            certification: counsellor.certification,
            calendlyUrl: counsellor.calendlyUrl,
            createdAt: counsellor.createdAt,
            updatedAt: counsellor.updatedAt,
        }));

        // On success, return the token (and any other data)
        return res.status(200).json({ counsellors: formatted })
    } catch (error: any) {
        console.error('Register API error:', error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}
