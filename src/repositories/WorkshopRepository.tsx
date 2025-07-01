import { Workshop } from "@interfaces/Workshop";
import { createMinimalWorkshop, validateWorkshop } from "@utils/workshopUtils";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://your-api-url.com';

// Import mock data for development
let mockDataImported: { mockWorkshops: Workshop[] } | null = null;

if (process.env.NODE_ENV === 'development') {
    try {
        // Dynamic import to avoid including mock data in production
        mockDataImported = require('./__mocks__/workshopData');
    } catch (error) {
        console.warn('Failed to load mock workshop data:', error);
    }
}

/**
 * Transforms API response data into a valid Workshop object
 * Handles both new API format and legacy format
 */
const transformWorkshopData = (apiWorkshop: any): Workshop => {
    try {
        // Handle both string and object counsellor formats
        let counsellor = apiWorkshop.counsellor;
        if (typeof counsellor === 'string') {
            // Convert string counsellor to object
            const [firstName = '', ...lastNameParts] = counsellor.split(' ');
            const lastName = lastNameParts.join(' ');
            counsellor = {
                id: `temp-${Math.random().toString(36).substr(2, 9)}`,
                firstName,
                lastName,
                email: '',
                role: 'Counsellor'
            };
        }

        // Create a minimal valid workshop with proper typing
        const workshop = createMinimalWorkshop({
            ...apiWorkshop,
            counsellor,
            // Map legacy field names to new field names
            ...(apiWorkshop.imageSrc && !apiWorkshop.imageUrl && { imageUrl: apiWorkshop.imageSrc }),
            ...(apiWorkshop.schedulingLink && !apiWorkshop.bookingUrl && { bookingUrl: apiWorkshop.schedulingLink }),
            // Ensure type is one of the allowed values
            type: ['INDIVIDUAL', 'FAMILY', 'ORGANIZATION'].includes(apiWorkshop.type?.toUpperCase())
                ? apiWorkshop.type.toUpperCase() as 'INDIVIDUAL' | 'FAMILY' | 'ORGANIZATION'
                : 'INDIVIDUAL', // Default to INDIVIDUAL if invalid
            // Ensure duration is a number
            duration: typeof apiWorkshop.duration === 'number' 
                ? apiWorkshop.duration 
                : Number(apiWorkshop.duration) || 0,
            // Ensure price is a string with 2 decimal places
            price: typeof apiWorkshop.price === 'string' 
                ? apiWorkshop.price 
                : typeof apiWorkshop.price === 'number' 
                    ? apiWorkshop.price.toFixed(2)
                    : '0.00'
        });

        // Validate the transformed workshop
        const missingFields = validateWorkshop(workshop);
        if (missingFields.length > 0) {
            console.warn('Workshop is missing required fields:', missingFields, workshop);
        }

        return workshop;
    } catch (error) {
        console.error('Error transforming workshop data:', error, apiWorkshop);
        // Return a minimal valid workshop to prevent crashes
        return createMinimalWorkshop({
            id: `error-${Math.random().toString(36).substr(2, 9)}`,
            name: 'Error loading workshop',
            description: 'There was an error loading this workshop data.'
        });
    }
};

// Fetch workshops from API
export const fetchWorkshops = async (): Promise<Workshop[]> => {
    try {
        // Use mock data in development if available and not explicitly disabled
        if (process.env.NODE_ENV === 'development' && 
            !process.env.NEXT_PUBLIC_USE_REAL_API && 
            mockDataImported?.mockWorkshops) {
            console.warn('Using mock workshop data in development mode');
            return mockDataImported.mockWorkshops.map(workshop => {
                // Transform each mock workshop through our standard transformation
                // This ensures consistency between mock and real data
                return transformWorkshopData({
                    ...workshop,
                    // Add any mock-specific overrides here
                    id: workshop.id || `mock-${Math.random().toString(36).substr(2, 9)}`,
                    description: workshop.description || 'This is a mock workshop for development purposes.'
                });
            });
        }

        const response = await fetch(`${API_URL}/workshops`, {
            headers: {
                'Content-Type': 'application/json',
                // Add any authentication headers if needed
                // 'Authorization': `Bearer ${process.env.API_TOKEN}`
            },
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Failed to fetch workshops:', {
                status: response.status,
                statusText: response.statusText,
                error: errorData
            });
            throw new Error(`Failed to fetch workshops: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        // Ensure data is an array
        if (!Array.isArray(data)) {
            console.error('Unexpected API response format:', data);
            throw new Error('Invalid workshops data format received from server');
        }

        return data.map(workshop => {
            try {
                return transformWorkshopData(workshop);
            } catch (error) {
                console.error('Error transforming workshop data:', error, workshop);
                // Return a minimal valid workshop object to prevent app crashes
                return {
                    id: workshop.id || 'error-' + Math.random().toString(36).substr(2, 9),
                    name: 'Error loading workshop',
                    description: 'There was an error loading this workshop.',
                    imageUrl: '',
                    duration: 0,
                    startDate: new Date().toISOString(),
                    price: '0.00',
                    bookingUrl: '#',
                    type: 'INDIVIDUAL',
                    counsellor: { id: '', firstName: '', lastName: '', email: '', role: '' },
                    title: 'Error loading workshop',
                    imageSrc: '',
                    schedulingLink: '#',
                    features: [],
                    location: 'Online',
                    format: 'Workshop',
                    endDate: new Date().toISOString(),
                    counsellorName: 'AWE Counsellor'
                };
            }
        });
    } catch (error) {
        console.error('Error in fetchWorkshops:', error);
        // Return an empty array instead of throwing to prevent UI crashes
        // You might want to implement error boundaries in your components
        // to handle these cases gracefully
        return [];
    }
};

// Get workshops by type
export const getWorkshopsByType = async (type: string): Promise<Workshop[]> => {
    const workshops = await fetchWorkshops();
    return workshops.filter(workshop => workshop.type.toLowerCase() === type.toLowerCase());
};

// Get workshop by ID
export const getWorkshopById = async (id: string): Promise<Workshop | undefined> => {
    const workshops = await fetchWorkshops();
    return workshops.find(workshop => workshop.id === id);
};
