import { Workshop, WorkshopCounsellor } from "@generated/api";

/**
 * Creates a minimal valid Workshop object with all required fields
 * This ensures type safety and prevents runtime errors from missing fields
 */
export const createMinimalWorkshop = (overrides: Partial<Workshop> = {}): Workshop => {
    const now = new Date().toISOString();
    const defaultCounsellor: WorkshopCounsellor = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        role: 'COACH',
        stripeId: null
    };

    return {
        // Required fields with defaults
        id: overrides.id || `workshop-${Math.random().toString(36).substr(2, 9)}`,
        name: overrides.name || 'Untitled Workshop',
        description: overrides.description || '',
        imageUrl: overrides.imageUrl || null,
        duration: overrides.duration || 60, // Default to 60 minutes
        maxSeats: overrides.maxSeats || 10, // Default to 10 seats
        startDate: overrides.startDate || now,
        price: overrides.price || 0,
        bookingUrl: overrides.bookingUrl || '#',
        type: overrides.type || 'INDIVIDUAL',
        counsellor: overrides.counsellor || defaultCounsellor,
        createdAt: overrides.createdAt || now,
        updatedAt: overrides.updatedAt || now,
        
        // Spread any additional overrides last to ensure they take precedence
        ...overrides
    };
};

/**
 * Validates that a Workshop object has all required fields
 * Returns an array of missing fields, or an empty array if valid
 */
export const validateWorkshop = (workshop: Partial<Workshop>): string[] => {
    const requiredFields: (keyof Workshop)[] = [
        'name', 'description', 'duration', 'maxSeats',
        'startDate', 'price', 'bookingUrl', 'type', 'counsellor'
    ];
    
    return requiredFields.filter((field) => {
        const value = workshop[field];
        return value === undefined || value === null || 
               (Array.isArray(value) && value.length === 0) ||
               (typeof value === 'string' && value.trim() === '') ||
               (value && typeof value === 'object' && Object.keys(value).length === 0);
    });
};

/**
 * Creates a default counsellor object with the given name
 */
export const createDefaultCounsellor = (name: string = ''): WorkshopCounsellor => {
    const [firstName = '', ...lastNameParts] = name.split(' ');
    const lastName = lastNameParts.join(' ');
    
    return {
        id: `counsellor-${Math.random().toString(36).substr(2, 9)}`,
        firstName,
        lastName,
        email: '',
        role: 'COACH',
        stripeId: null
    };
};
