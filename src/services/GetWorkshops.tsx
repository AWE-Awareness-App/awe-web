import { workshops } from "@repositories/WorkshopRepository";

export const GetWorkshops = async (): Promise<Workshop[]> => {
    return workshops;
};