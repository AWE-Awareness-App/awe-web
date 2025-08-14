// /pages/api/get-bookings-by-workshop.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { API_BASE_URL, API_ENDPOINTS } from '@config/api';

type WorkshopBooking = {
  id: string;
  workshopId?: string;
  userId?: string;
  nbSeats: number;
  createdAt?: string;
  updatedAt?: string;
  user?: unknown;
  workshop?: unknown;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const workshopId = (req.query.workshopId || req.query.id) as string | undefined;
    if (!workshopId) return res.status(400).json({ error: 'workshopId is required' });
    if (!API_BASE_URL) return res.status(500).json({ error: 'API base URL not configured' });

    const url = `${API_BASE_URL}${API_ENDPOINTS.WORKSHOP_BOOKINGS}/by-workshop/${encodeURIComponent(workshopId)}`;
    const r = await fetch(url, { next: { revalidate: 10 } });

    if (!r.ok) {
      const txt = await r.text().catch(() => '');
      return res.status(r.status).send(txt || `Upstream error ${r.status}`);
    }

    const data = await r.json();
    // Backend returns a plain array for this endpoint
    const bookings: WorkshopBooking[] = Array.isArray(data) ? data : (data?.bookings ?? []);
    if (!Array.isArray(bookings)) return res.status(502).json({ error: 'Invalid bookings payload' });

    // (Optional) sort newest first
    bookings.sort((a, b) => (Date.parse(b.createdAt || '') || 0) - (Date.parse(a.createdAt || '') || 0));

    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=10, stale-while-revalidate=10');
    return res.status(200).json({ bookings });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Error fetching bookings' });
  }
}
