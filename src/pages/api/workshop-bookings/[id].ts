import type { NextApiRequest, NextApiResponse } from "next";
import { API_BASE_URL, API_ENDPOINTS } from "@config/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!API_BASE_URL) return res.status(500).json({ error: "API base URL not configured" });

  const { id } = req.query;
  const bookingId = Array.isArray(id) ? id[0] : id;
  if (!bookingId) return res.status(400).json({ error: "id is required" });

  if (req.method !== "PUT" && req.method !== "DELETE") {
    res.setHeader("Allow", "PUT, DELETE");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 15_000);

    const r = await fetch(`${API_BASE_URL}${API_ENDPOINTS.WORKSHOP_BOOKINGS}/${encodeURIComponent(bookingId)}`, {
      method: req.method,
      headers: { "Content-Type": "application/json" },
      body: req.method === "PUT" ? JSON.stringify(req.body) : undefined,
      signal: controller.signal,
    }).finally(() => clearTimeout(t));

    const text = await r.text().catch(() => "");
    try {
      const json = text ? JSON.parse(text) : null;
      return res.status(r.status).json(json ?? null);
    } catch {
      return res.status(r.status).send(text || null);
    }
  } catch (e: any) {
    if (e?.name === "AbortError") return res.status(504).json({ error: "Timeout calling booking service" });
    return res.status(502).json({ error: "Booking service unavailable" });
  }
}
