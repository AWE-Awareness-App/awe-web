// /pages/api/get-workshops.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { API_BASE_URL, API_ENDPOINTS } from '@config/api';

// If you’re on the App Router, export an async function GET(req: Request) instead.

type RawWorkshop = {
  id?: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  imageSrc?: string;
  duration?: string | number | null;
  startDate?: string | null;
  endDate?: string | null;
  price?: string | number | null;
  maxSeats?: number | null;
  bookingUrl?: string | null;
  schedulingLink?: string | null;
  counsellor?: string | null;
  facilitator?: string | null;
  type?: string | null;
  workshop_type?: string | null;
  payment_status?: string | null;
  transaction_id?: string | null;
  location?: string | null;
  format?: string | null;
  capacity?: number | null;
  features?: unknown;
};

type Workshop = {
  id: string;
  name: string;
  description: string | null;
  imageUrl: string | null;
  duration: string | number | '';
  startDate: string | null;
  endDate: string | null;
  price: number | null;
  maxSeats: number | null;
  bookingUrl: string | null;
  counsellor: string | null;
  type: string | '';
  workshop_type?: string | null;
  payment_status?: string | null;
  transaction_id?: string | null;
  location?: string | null;
  format?: string | null;
  capacity?: number | null;
  facilitator?: string | null;
  // Back-compat:
  title: string;
  imageSrc: string | null;
  schedulingLink: string | null;
  features: unknown[]; // keep as provided if array; otherwise []
};

const parsePrice = (p: RawWorkshop['price']): number | null => {
  if (typeof p === 'number') return isFinite(p) ? p : null;
  if (typeof p === 'string') {
    const num = Number(p.replace(/[^\d.,-]/g, '').replace(',', '.'));
    return isFinite(num) ? num : null;
  }
  return null;
};

const normalizeType = (t: RawWorkshop['type']): string | '' =>
  typeof t === 'string' ? t.toLowerCase() : '';

const arrayOrEmpty = (x: unknown): unknown[] => (Array.isArray(x) ? x : []);

// Return a RELATIVE URL (no need for PUBLIC_BASE_URL)
const deriveBookingUrl = (id?: string): string | null => {
  if (!id) return null;
  return `/workshop-services/booking/${encodeURIComponent(id)}`;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!API_BASE_URL) {
      return res.status(500).json({ error: 'API base URL is not configured' });
    }

    // Add a timeout so this route can fail fast instead of hanging
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 15_000);

    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.WORKSHOPS}`, {
      headers: { /* no need for Content-Type on GET */ },
      // Next.js caching hint (works on server)
      next: { revalidate: 3600 },
      signal: controller.signal,
    }).finally(() => clearTimeout(t));

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API Error:', { status: response.status, statusText: response.statusText, errorData });
      return res
        .status(response.status)
        .json({ error: `Failed to fetch workshops: ${response.status} ${response.statusText}` });
    }

    const data = await response.json().catch(() => ({}));
    const workshopsRaw: unknown = Array.isArray(data) ? data : (data?.workshops ?? []);

    if (!Array.isArray(workshopsRaw)) {
      console.error('Invalid workshops data format:', data);
      return res.status(500).json({ error: 'Invalid workshops data format' });
    }

    const formatted: Workshop[] = (workshopsRaw as RawWorkshop[]).map((w) => {
      const id = w.id ?? '';
      const name = w.name ?? '';
      const description = w.description ?? null;
      const image = w.imageUrl ?? w.imageSrc ?? null;
      const booking = w.bookingUrl ?? w.schedulingLink ?? deriveBookingUrl(w.id);

      return {
        id,
        name,
        description,
        imageUrl: image,
        duration: w.duration ?? '',
        startDate: w.startDate ?? null,
        endDate: w.endDate ?? null,
        price: parsePrice(w.price),
        maxSeats: w.maxSeats ?? null,
        bookingUrl: booking,
        counsellor: w.counsellor ?? w.facilitator ?? null,
        type: normalizeType(w.type),
        workshop_type: w.workshop_type ?? null,
        payment_status: w.payment_status ?? null,
        transaction_id: w.transaction_id ?? null,
        location: w.location ?? null,
        format: w.format ?? null,
        capacity: typeof w.capacity === 'number' ? w.capacity : null,
        facilitator: w.facilitator ?? null,
        // Backward compatibility fields
        title: name,
        imageSrc: image,
        schedulingLink: booking,
        features: arrayOrEmpty(w.features),
      };
    });

    // Optional: cache at the CDN/proxy layer for 1 hour
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=300');

    return res.status(200).json({ workshops: formatted });
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.error('Timeout fetching workshops');
      return res.status(504).json({ error: 'Timeout fetching workshops' });
    }
    console.error('Error fetching workshops:', error);
    return res.status(500).json({ error: 'Error fetching workshops' });
  }
}
