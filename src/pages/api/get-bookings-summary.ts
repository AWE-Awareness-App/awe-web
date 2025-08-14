// /pages/api/get-bookings-summary.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { API_BASE_URL, API_ENDPOINTS } from '@config/api';

type Booking = { nbSeats?: number };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const workshopId = req.query.workshopId as string | undefined;
  if (!workshopId) return res.status(400).json({ error: 'workshopId is required' });
  if (!API_BASE_URL) return res.status(500).json({ error: 'API base URL not configured' });

  try {
    const url = `${API_BASE_URL}${API_ENDPOINTS.WORKSHOP_BOOKINGS}/by-workshop/${encodeURIComponent(workshopId)}`;
    const r = await fetch(url, { next: { revalidate: 10 } });

    if (r.status === 204 || r.status === 404) {
      res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=10');
      return res.status(200).json({ reservedSeats: 0 });
    }
    if (!r.ok) {
      const txt = await r.text().catch(() => '');
      return res.status(r.status).send(txt || `Upstream error ${r.status}`);
    }

    const data = await r.json().catch(() => []);
    const list: Booking[] = Array.isArray(data) ? data : (data?.bookings ?? []);
    const reservedSeats = list.reduce((sum, b) => sum + (Number(b.nbSeats) || 0), 0);

    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=10');
    return res.status(200).json({ reservedSeats });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Error fetching summary' });
  }
}
