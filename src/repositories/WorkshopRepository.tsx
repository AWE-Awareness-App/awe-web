import { 
    fetchWorkshops as fetchWorkshopsFromApi, 
    fetchWorkshopById as fetchWorkshopByIdFromApi,
    createWorkshop as createWorkshopInApi,
    updateWorkshop as updateWorkshopInApi,
    deleteWorkshop as deleteWorkshopInApi,
    bookWorkshop as bookWorkshopInApi
} from "@services/workshopService";
import { createMinimalWorkshop } from "@utils/workshopUtils";
import { Workshop } from "@generated/api";

export type { Workshop };

/**
 * Fetches all workshops from the API
 */
export const fetchWorkshops = async (): Promise<Workshop[]> => {
    try {
        return await fetchWorkshopsFromApi();
    } catch (error) {
        console.error('Error fetching workshops:', error);
        // Return a minimal workshop to prevent crashes
        return [createMinimalWorkshop({
            id: 'error-no-workshops',
            name: 'Error loading workshops',
            description: 'There was an error loading the workshops. Please try again later.'
        })];
    }
};

/**
 * Fetches a single workshop by ID from the API
 */
export const getWorkshopById = async (id: string): Promise<Workshop | undefined> => {
    try {
        return await fetchWorkshopByIdFromApi(id) || undefined;
    } catch (error) {
        console.error(`Error fetching workshop with ID ${id}:`, error);
        // Return a minimal workshop to prevent crashes
        return createMinimalWorkshop({
            id: 'error-workshop-not-found',
            name: 'Error loading workshop',
            description: 'There was an error loading this workshop. Please try again later.'
        });
    }
};

/**
 * Gets workshops by type
 * For backward compatibility
 */
export const getWorkshopsByType = async (type: string): Promise<Workshop[]> => {
    const workshops = await fetchWorkshops();
    return workshops.filter(workshop => 
        workshop.type?.toLowerCase() === type.toLowerCase()
    );
};

/**
 * Creates a new workshop
 */
export const createWorkshop = async (workshopData: Omit<Workshop, 'id'>): Promise<Workshop> => {
    try {
        return await createWorkshopInApi(workshopData);
    } catch (error) {
        console.error('Error creating workshop:', error);
        throw new Error('Failed to create workshop');
    }
};

/**
 * Updates an existing workshop
 */
export const updateWorkshop = async (id: string, workshopData: Partial<Workshop>): Promise<Workshop | null> => {
    try {
        return await updateWorkshopInApi(id, workshopData);
    } catch (error) {
        console.error(`Error updating workshop with ID ${id}:`, error);
        return null;
    }
};

/**
 * Deletes a workshop
 */
export const deleteWorkshop = async (id: string): Promise<boolean> => {
    try {
        return await deleteWorkshopInApi(id);
    } catch (error) {
        console.error(`Error deleting workshop with ID ${id}:`, error);
        return false;
    }
};

/**
 * Books a workshop for a user
 */
export const bookWorkshop = async (workshopId: string, userId: string, nbSeats: number = 1): Promise<boolean> => {
    try {
        return await bookWorkshopInApi(workshopId, userId, nbSeats);
    } catch (error) {
        console.error('Error booking workshop:', error);
        return false;
    }
};
