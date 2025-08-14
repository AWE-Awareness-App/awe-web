import React, { useEffect, useState } from "react";
import WorkshopServicesCard from "@components/WorkshopServicesCard";
import { Workshop } from "@interfaces/Workshop";

// Define workshop type display names and colors
const WORKSHOP_TYPES = [
    { id: "individual", name: "Individual Workshops", bgColor: "bg-blue-50" },
    { id: "couples", name: "Couples Workshops", bgColor: "bg-green-50" },
    { id: "family", name: "Family Workshops", bgColor: "bg-purple-50" },
    { id: "communities", name: "Community Programs", bgColor: "bg-yellow-50" },
    { id: "organization", name: "Corporate Solutions", bgColor: "bg-indigo-50" },
];

const WorkshopBigCardsSection: React.FC = () => {
    const [workshops, setWorkshops] = useState<Workshop[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        
        const fetchWorkshops = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/get-workshops');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                if (isMounted) {
                    setWorkshops(data.workshops || []);
                    setError(null);
                }
            } catch (err) {
                console.error("Failed to fetch workshops:", err);
                if (isMounted) {
                    setError("Failed to load workshops. Please try again later.");
                    // Fallback to local data if API fails
                    //try {
                    //    const localWorkshops = [];
                    //    for (const type of WORKSHOP_TYPES) {
                    //        const typeWorkshops = await getWorkshopsByType(type.id);
                    //        localWorkshops.push(...typeWorkshops);
                    //    }
                    //    if (isMounted) {
                    //        setWorkshops(localWorkshops);
                    //    }
                    //} catch (e) {
                    //    console.error("Failed to load local workshops:", e);
                    //    if (isMounted) {
                    //        setError("Failed to load workshops. Please refresh the page to try again.");
                    //    }
                    //}
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchWorkshops();

        // Cleanup function to prevent state updates after unmount
        return () => {
            isMounted = false;
        };
    }, []);

    // Group workshops by type
    const groupedWorkshops = workshops?.reduce((acc, workshop) => {
        if (!acc[workshop.type]) {
            acc[workshop.type] = [];
        }
        acc[workshop.type].push(workshop);
        return acc;
    }, {} as Record<string, Workshop[]>);

    // Handle workshop booking
    const handleBookNow = (workshop: Workshop) => {
        if (workshop.bookingUrl) {
            window.open(workshop.bookingUrl, '_blank', 'noopener,noreferrer');
        } else {
            // Fallback to a contact form or show a modal
            alert(`Please contact us to book the ${workshop.name} workshop.`);
        }
    };

    // Show loading state
    if (loading) {
        return (
            <div className="max-w-6xl mx-auto py-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading workshops...</p>
            </div>
        );
    }

    // Show error state if no workshops are available
    if (workshops.length === 0) {
        return (
            <div className="max-w-6xl mx-auto py-12 text-center">
                <p className="text-red-600 mb-4">
                    {error || "No workshops available at the moment."}
                </p>
                <button 
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700 transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-blue-800 sm:text-4xl">
                    Our Workshop Programs
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                    Join our expert-led workshops designed to inspire, educate, and transform.
                </p>
            </div>

            {error && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                                {error} Using cached data.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className="space-y-16">
                {WORKSHOP_TYPES.map((type) => {
                    const typeWorkshops = groupedWorkshops[type.id] || [];
                    if (typeWorkshops.length === 0) return null;

                    return (
                        <section key={type.id} className={`${type.bgColor} rounded-2xl p-6 sm:p-8`}>
                            <div className="max-w-3xl mx-auto text-center mb-8">
                                <h2 className="text-3xl font-bold text-blue-800 mb-4">{type.name}</h2>
                                <p className="text-lg text-gray-600">
                                    {type.id === 'individual' && 'Personal growth and self-improvement workshops.'}
                                    {type.id === 'couples' && 'Strengthen your relationship through guided sessions.'}
                                    {type.id === 'family' && 'Programs designed for the whole family to grow together.'}
                                    {type.id === 'communities' && 'Engaging programs for schools and community groups.'}
                                    {type.id === 'organization' && 'Corporate wellness and team-building solutions.'}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {typeWorkshops.map((workshop) => (
                                    <WorkshopServicesCard
                                        key={workshop.id}
                                        workshop={workshop}
                                        className="h-full"
                                        onBookNow={handleBookNow}
                                    />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
};

export default WorkshopBigCardsSection;
