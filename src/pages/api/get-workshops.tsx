import type { NextApiRequest, NextApiResponse } from 'next';
import { API_BASE_URL, API_ENDPOINTS } from "@config/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (!API_BASE_URL) {
            throw new Error('API base URL is not configured');
        }

        const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.WORKSHOPS}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('API Error:', {
                status: response.status,
                statusText: response.statusText,
                errorData
            });
            throw new Error(`Failed to fetch workshops: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        
        // Handle case where workshops might be directly in the response or under a 'workshops' property
        const workshops = Array.isArray(data) ? data : (data.workshops || []);
        
        if (!workshops || !Array.isArray(workshops)) {
            console.error('Invalid workshops data format:', data);
            return res.status(500).json({ error: 'Invalid workshops data format' });
        }

        // Format the data to match our frontend Workshop interface
        const formatted = workshops.map((workshop: any) => ({
            id: workshop.id,
            name: workshop.name,
            description: workshop.description,
            imageUrl: workshop.imageUrl || workshop.imageSrc, // Fallback to imageSrc for backward compatibility
            duration: workshop.duration || '',
            startDate: workshop.startDate,
            endDate: workshop.endDate,
            price: typeof workshop.price === 'string' ? parseFloat(workshop.price.replace(/[^0-9.]/g, '')) : workshop.price,
            bookingUrl: workshop.bookingUrl || workshop.schedulingLink, // Map schedulingLink to bookingUrl
            counsellor: workshop.counsellor || workshop.facilitator || '',
            type: workshop.type?.toLowerCase() || '',
            // Additional fields
            workshop_type: workshop.workshop_type,
            payment_status: workshop.payment_status,
            transaction_id: workshop.transaction_id,
            location: workshop.location,
            format: workshop.format,
            capacity: workshop.capacity,
            facilitator: workshop.facilitator,
            // Backward compatibility for any components still using these fields
            title: workshop.name, // Map name to title for backward compatibility
            imageSrc: workshop.imageUrl || workshop.imageSrc, // Keep imageSrc for backward compatibility
            schedulingLink: workshop.bookingUrl || workshop.schedulingLink, // Keep schedulingLink for backward compatibility
            features: workshop.features || [] // Keep features array for backward compatibility
        }));

        return res.status(200).json({ workshops: formatted });
    } catch (error) {
        console.error("Error fetching workshops:", error);
        // Return empty array to allow frontend to use fallback data
        return res.status(200).json({ workshops: [] });
    }
}
