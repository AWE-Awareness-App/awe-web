import type { NextApiRequest, NextApiResponse } from 'next';
import { API_BASE_URL, /*USE_MOCK_DATA*/ } from "@config/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    /*if (USE_MOCK_DATA) {
        console.log("Using mock data for workshops.");
        return res.status(200).json({ workshops });
    }*/

    try {
        const response = await fetch(API_BASE_URL + '/workshops');
        if (!response.ok) {
            throw new Error("Failed to fetch workshops");
        }
        const data = await response.json();

        // Optionally shape the data if needed
        const formatted = data.workshops.map((workshop: any) => ({
            type: workshop.type.toLowerCase(),
            title: workshop.title,
            description: workshop.description,
            price: workshop.price,
            features: workshop.features,
            startDate: workshop.startDate,
            endDate: workshop.endDate,
            imageSrc: workshop.imageSrc,
            schedulingLink: workshop.schedulingLink
        }));

        return res.status(200).json({ workshops: formatted });
    } catch (error) {
        console.error("Error fetching workshops:", error);
        return res.status(500).json({error: "Server error. Using fallback data." });
    }
}
