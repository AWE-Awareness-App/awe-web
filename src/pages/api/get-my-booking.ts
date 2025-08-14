// pages/api/get-my-booking.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { API_BASE_URL, API_ENDPOINTS } from "@config/api";

// Expect ?workshopId=...&userId=...
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const workshopId = String(req.query.workshopId || "");
    const userId = String(req.query.userId || ""); // pass-through required
    if (!workshopId || !userId) {
      return res.status(400).json({ error: "workshopId and userId are required" });
    }

    const url = `${API_BASE_URL}${API_ENDPOINTS.WORKSHOP_BOOKINGS}/by-workshop/${encodeURIComponent(
      workshopId
    )}/user/${encodeURIComponent(userId)}`;

    // optional: don't cache
    res.setHeader("Cache-Control", "no-store");

    const r = await fetch(url, { headers: { "Content-Type": "application/json" } });
    const text = await r.text().catch(() => "");

    // pass-through status & JSON if possible
    try {
      const json = text ? JSON.parse(text) : null;
      return res.status(r.status).json(json ?? null);
    } catch {
      return res.status(r.status).send(text || null);
    }
  } catch (e: any) {
    return res.status(502).json({ error: "Booking service unavailable" });
  }
}
