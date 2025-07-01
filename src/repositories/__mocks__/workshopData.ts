import { Workshop } from "@interfaces/Workshop";

export const mockWorkshops: Workshop[] = [
    {
        id: '1',
        name: '3-Day Happiness Retreat',
        description: 'Experience a transformative 3-day retreat focused on happiness and well-being.',
        imageUrl: '/images/3day-happiness-retreat.jpg',
        duration: 24, // hours
        startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
        price: '999.00',
        bookingUrl: '#',
        type: 'INDIVIDUAL',
        counsellor: {
            id: 'c1',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            role: 'Lead Counsellor'
        },
        // Backward compatibility fields
        title: '3-Day Happiness Retreat',
        imageSrc: '/images/3day-happiness-retreat.jpg',
        schedulingLink: '#',
        features: [
            '3 days of guided sessions',
            'Mindfulness practices',
            'Group activities',
            'Personal reflection time'
        ],
        location: 'Online',
        format: 'Retreat',
        endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days from now
        counsellorName: 'John Doe'
    },
    // Add more mock workshops as needed
];
