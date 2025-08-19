import { Workshop, WorkshopsApi, WorkshopBookingsApi, Configuration, WorkshopsPostRequest } from '../generated';

// Create a configuration with the base path
const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
});

// Create the API client
const workshopApi = new WorkshopsApi(config);
const workshopBookingsApi = new WorkshopBookingsApi(config);

/**
 * Transforms API workshop data to our local Workshop interface
 */
const transformWorkshop = (apiWorkshop: Workshop): Workshop => {
  // Ensure all required fields are present
  return {
    id: apiWorkshop.id || '',
    name: apiWorkshop.name,
    description: apiWorkshop.description,
    imageUrl: apiWorkshop.imageUrl || null,
    duration: apiWorkshop.duration,
    maxSeats: apiWorkshop.maxSeats || 0, // Default value if not provided
    startDate: apiWorkshop.startDate,
    price: typeof apiWorkshop.price === 'string' ? parseFloat(apiWorkshop.price) : apiWorkshop.price,
    bookingUrl: apiWorkshop.bookingUrl,
    type: apiWorkshop.type,
    counsellor: apiWorkshop.counsellor,
    createdAt: apiWorkshop.createdAt,
    updatedAt: apiWorkshop.updatedAt,
    
    // Add any additional fields that might be needed for backward compatibility
    ...(apiWorkshop as any) // Preserve any other fields that might be present
  };
};

/**
 * Fetches all workshops
 */
export const fetchWorkshops = async (): Promise<Workshop[]> => {
  try {
    const response = await workshopApi.workshopsGet();
    return response.data.map(transformWorkshop);
  } catch (error) {
    console.error('Error fetching workshops:', error);
    throw new Error('Failed to fetch workshops');
  }
};

/**
 * Fetches a single workshop by ID
 */
export const fetchWorkshopById = async (id: string): Promise<Workshop | null> => {
  try {
    const response = await workshopApi.workshopsIdGet(id);
    return transformWorkshop(response.data);
  } catch (error) {
    console.error(`Error fetching workshop with ID ${id}:`, error);
    return null;
  }
};

/**
 * Creates a new workshop
 */
export const createWorkshop = async (workshopData: Omit<Workshop, 'id'>): Promise<Workshop> => {
  try {
    const workshopRequest: WorkshopsPostRequest = {
      name: workshopData.name,
      description: workshopData.description,
      imageUrl: workshopData.imageUrl || null,
      duration: workshopData.duration,
      startDate: workshopData.startDate,
      price: typeof workshopData.price === 'string' ? parseFloat(workshopData.price) : workshopData.price,
      bookingUrl: workshopData.bookingUrl,
      type: workshopData.type as any,
    };
    
    const response = await workshopApi.workshopsPost(workshopRequest);
    return transformWorkshop(response.data);
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
    // Create a new object with only the fields that are allowed in WorkshopsPostRequest
    const updateData: Partial<WorkshopsPostRequest> = {};
    
    // Copy allowed fields
    if (workshopData.name !== undefined) updateData.name = workshopData.name;
    if (workshopData.description !== undefined) updateData.description = workshopData.description;
    if (workshopData.imageUrl !== undefined) updateData.imageUrl = workshopData.imageUrl || null;
    if (workshopData.duration !== undefined) updateData.duration = workshopData.duration;
    if (workshopData.startDate !== undefined) updateData.startDate = workshopData.startDate;
    if (workshopData.bookingUrl !== undefined) updateData.bookingUrl = workshopData.bookingUrl;
    
    // Handle price conversion
    if (workshopData.price !== undefined) {
      updateData.price = typeof workshopData.price === 'string' 
        ? parseFloat(workshopData.price) 
        : workshopData.price;
    }
    
    // Handle type conversion if needed
    if (workshopData.type !== undefined) {
      updateData.type = workshopData.type as any; // Type assertion since both enums should have the same values
    }
    
    const response = await workshopApi.workshopsIdPut(id, updateData as WorkshopsPostRequest);
    return transformWorkshop(response.data);
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
    await workshopApi.workshopsIdDelete(id);
    return true;
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
    await workshopBookingsApi.workshopBookingsPost({
      workshopId,
      userId,
      nbSeats
    });
    return true;
  } catch (error) {
    console.error('Error booking workshop:', error);
    return false;
  }
};
