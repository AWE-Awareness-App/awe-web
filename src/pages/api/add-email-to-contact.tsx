import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const apiKey = process.env.BREVO_API_KEY!;
    console.log(apiKey);
    const listIds = [parseInt(process.env.BREVO_CONTACT_LIST_ID!)];
    console.log(parseInt(process.env.BREVO_CONTACT_LIST_ID!));

    const bodyContent = JSON.stringify({
        email,
        listIds: listIds,
        updateEnabled: true,
        attributes: {
            CONSENT: true,
        },
    });
    console.log(bodyContent);

    try {
        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'api-key': apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: bodyContent,
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Brevo API error:', data);
            return res.status(response.status).json({ error: data.message || 'Failed to add contact' });
        }

        res.status(200).json({ success: true, data });
    } catch (error: any) {
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'Unexpected server error' });
    }
}