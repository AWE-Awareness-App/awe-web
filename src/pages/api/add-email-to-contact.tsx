import type { NextApiRequest, NextApiResponse } from 'next';
import { BREVO_API_KEY } from "@config/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const listIds = [parseInt(process.env.BREVO_CONTACT_LIST_ID!)]!;
    const bodyContent = JSON.stringify({
        email,
        listIds,
        updateEnabled: true,
        attributes: {
            CONSENT: true,
        },
    });

    try {
        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'api-key': BREVO_API_KEY,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: bodyContent,
        });

        const responseText = await response.text();

        if (!response.ok) {
            console.error('Brevo API error:', responseText);
            return res.status(response.status).json({ error: responseText || 'Failed to add contact' });
        }

        let data;
        if (responseText) {
            data = JSON.parse(responseText);
        }

        res.status(200).json({ success: true, data });
    } catch (error: any) {
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'Unexpected server error' });
    }
}
