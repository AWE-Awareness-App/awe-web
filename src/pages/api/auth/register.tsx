import type { NextApiRequest, NextApiResponse } from 'next'
import { API_BASE_URL, API_ENDPOINTS } from "@config/api";

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

    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({ message: `Method ${req.method} Not Allowed` })
    }

    const { email, password, firstName, lastName, role } = req.body

    if (!email || !password || !firstName || !lastName || !role) {
        return res.status(400).json({ message: 'Missing required fields' })
    }

    try {
        const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.REGISTER}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, firstName, lastName, role }),
        })

        const data: RegisterResponse = await response.json()

        if (!response.ok) {
            // Forward error message from underlying API
            return res.status(response.status).json({ message: data.message || 'Registration failed' })
        }

        // On success, return the token (and any other data)
        return res.status(200).json({ token: data.token })
    } catch (error: any) {
        console.error('Register API error:', error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}
