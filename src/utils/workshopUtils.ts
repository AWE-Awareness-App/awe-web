import { Workshop, Counsellor } from "@interfaces/Workshop";

/**
 * Creates a minimal valid Workshop object with all required fields
 * This ensures type safety and prevents runtime errors from missing fields
 */
export const createMinimalWorkshop = (overrides: Partial<Workshop> = {}): Workshop => {
    const now = new Date().toISOString();
    const defaultCounsellor: Counsellor = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        role: ''
    };

    return {
        // Required fields with defaults
        id: overrides.id || `workshop-${Math.random().toString(36).substr(2, 9)}`,
        name: overrides.name || 'Untitled Workshop',
        description: overrides.description || '',
        imageUrl: overrides.imageUrl || '',
        duration: overrides.duration || 0,
        startDate: overrides.startDate || now,
        price: overrides.price || '0.00',
        bookingUrl: overrides.bookingUrl || '#',
        type: overrides.type || 'INDIVIDUAL',
        counsellor: overrides.counsellor || defaultCounsellor,
        
        // Backward compatibility fields with defaults
        title: overrides.title || overrides.name || 'Untitled Workshop',
        imageSrc: overrides.imageSrc || overrides.imageUrl || '',
        schedulingLink: overrides.schedulingLink || overrides.bookingUrl || '#',
        features: Array.isArray(overrides.features) ? overrides.features : [],
        location: overrides.location || 'Online',
        format: overrides.format || 'Workshop',
        endDate: overrides.endDate || new Date(
            new Date(overrides.startDate || now).getTime() + 24 * 60 * 60 * 1000
        ).toISOString(),
        counsellorName: overrides.counsellorName || (
            typeof overrides.counsellor === 'string' 
                ? overrides.counsellor 
                : `${overrides.counsellor?.firstName || ''} ${overrides.counsellor?.lastName || ''}`.trim() || 'AWE Counsellor'
        ),
        
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
        'id', 'name', 'description', 'imageUrl', 'duration', 
        'startDate', 'price', 'bookingUrl', 'type', 'counsellor',
        'title', 'imageSrc', 'schedulingLink', 'features', 
        'location', 'format', 'endDate', 'counsellorName'
    ];
    
    return requiredFields.filter(field => {
        const value = workshop[field];
        return value === undefined || value === null || 
               (Array.isArray(value) && value.length === 0) ||
               (typeof value === 'string' && value.trim() === '') ||
               (typeof value === 'object' && Object.keys(value).length === 0);
    });
};

/**
 * Creates a default counsellor object with the given name
 */
export const createDefaultCounsellor = (name: string = ''): Counsellor => {
    const [firstName = '', ...lastNameParts] = name.split(' ');
    const lastName = lastNameParts.join(' ');
    
    return {
        id: `counsellor-${Math.random().toString(36).substr(2, 9)}`,
        firstName,
        lastName,
        email: '',
        role: 'Counsellor'
    };
};
