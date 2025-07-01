export interface Counsellor {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

export interface Workshop {
    // New API fields
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    duration: number; // in hours
    startDate: string;
    price: string; // formatted as string with 2 decimal places
    bookingUrl: string;
    type: 'INDIVIDUAL' | 'FAMILY' | 'ORGANIZATION' | string; // Allow string for backward compatibility
    counsellor: Counsellor | string; // Allow string for backward compatibility
    
    // Backward compatibility fields
    title: string; // Alias for name
    imageSrc: string; // Alias for imageUrl
    schedulingLink: string; // Alias for bookingUrl
    features: string[]; // Array of feature descriptions
    location: string; // e.g., 'Online' or physical location
    format: string; // e.g., 'Workshop', 'Retreat', etc.
    endDate: string; // End date of the workshop
    counsellorName: string; // Full name of the counsellor
}