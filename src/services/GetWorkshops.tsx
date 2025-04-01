import { workshops } from "@repositories/WorkshopRepository";
import { API_BASE_URL, USE_MOCK_DATA } from "@config/api";
import { Workshop } from "@interfaces/Workshop";

export const GetWorkshops = async (): Promise<Workshop[]> => {
    if (USE_MOCK_DATA) {
        console.log("Using mock data for workshops.");
        return workshops;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/workshops`);
        if (!response.ok) {
            throw new Error("Failed to fetch workshops");
        }
        const data = await response.json();

        return data.workshops.map((workshop: any) => ({
            type: workshop.type.toLowerCase(), 
            title: workshop.title,
            description: workshop.description,
            price: workshop.price,
            features: workshop.features,
            startDate: workshop.startDate,
            endDate: workshop.endDate,
            imageSrc: workshop.imageSrc
        }));
    } catch (error) {
        console.error("Error fetching workshops:", error);
        return workshops;
    }
};