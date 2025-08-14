import type { NextApiRequest, NextApiResponse } from "next";
import { API_BASE_URL, API_ENDPOINTS } from "@config/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!API_BASE_URL) return res.status(500).json({ error: "API base URL not configured" });

  if (req.method === "POST") {
    try {
      const controller = new AbortController();
      const t = setTimeout(() => controller.abort(), 15_000);

      const r = await fetch(`${API_BASE_URL}${API_ENDPOINTS.WORKSHOP_BOOKINGS}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
        signal: controller.signal,
      }).finally(() => clearTimeout(t));

      const text = await r.text().catch(() => "");
      // pass-through status and body (prefer JSON if possible)
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

  res.setHeader("Allow", "POST");
  return res.status(405).json({ error: "Method not allowed" });
}
