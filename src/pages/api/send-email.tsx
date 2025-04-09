import type { NextApiRequest, NextApiResponse } from 'next';
import { BREVO_API_KEY, BREVO_EMAIL_SENDER } from "@config/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { recipientEmail, subject, message } = req.body;

    try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': BREVO_API_KEY,
            },
            body: JSON.stringify({
                sender: {
                    email: BREVO_EMAIL_SENDER,
                },
                to: [
                    {
                        email: recipientEmail,
                    },
                ],
                subject: subject,
                htmlContent: message,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to send email');
        }

        const data = await response.json();
        res.status(200).json({ success: true, message: 'Email sent successfully!', data });
    } catch (error) {
        console.error('Unexpected error - Failed to send email:', error);
        res.status(500).json({ error: 'Unexpected server error - Failed to send email' });
    }
}
