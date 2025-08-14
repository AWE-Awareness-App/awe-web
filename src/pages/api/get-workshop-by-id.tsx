// /pages/api/get-workshop-by-id.tsx
import type { NextApiRequest, NextApiResponse } from 'next';
import { API_BASE_URL, API_ENDPOINTS } from '@config/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Workshop ID is required' });
    }

    if (!API_BASE_URL) {
      throw new Error('API base URL is not configured');
    }

    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.WORKSHOPS}/${encodeURIComponent(id)}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }, // cache hint for Next.js
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API Error:', {
        status: response.status,
        statusText: response.statusText,
        errorData,
      });
      return res.status(response.status).json({ error: `Failed to fetch workshop: ${response.status} ${response.statusText}` });
    }

    const workshop = await response.json();

    if (!workshop || typeof workshop !== 'object') {
      console.error('Invalid workshop data format:', workshop);
      return res.status(500).json({ error: 'Invalid workshop data format' });
    }

    // Normalize the workshop data
    const formatted = {
      id: workshop.id,
      name: workshop.name,
      description: workshop.description,
      imageUrl: workshop.imageUrl || workshop.imageSrc || null,
      duration: workshop.duration || '',
      startDate: workshop.startDate,
      endDate: workshop.endDate,
      maxSeats: workshop.maxSeats || 0,
      price: typeof workshop.price === 'string' ? parseFloat(workshop.price.replace(/[^0-9.]/g, '')) : workshop.price,
      bookingUrl: workshop.bookingUrl || workshop.schedulingLink || null,
      counsellor: workshop.counsellor || workshop.facilitator || null,
      type: workshop.type?.toLowerCase() || '',
      workshop_type: workshop.workshop_type,
      payment_status: workshop.payment_status,
      transaction_id: workshop.transaction_id,
      location: workshop.location,
      format: workshop.format,
      capacity: workshop.capacity,
      facilitator: workshop.facilitator,
      // Backward compatibility fields
      title: workshop.name,
      imageSrc: workshop.imageUrl || workshop.imageSrc || null,
      schedulingLink: workshop.bookingUrl || workshop.schedulingLink || null,
      features: workshop.features || [],
    };

    return res.status(200).json({ workshop: formatted });
  } catch (error) {
    console.error('Error fetching workshop by ID:', error);
    return res.status(500).json({ error: 'Error fetching workshop by ID' });
  }
}
