import React, { useEffect, useState } from "react";
import BigWorkshopCard from "@components/BigWorkshopCard";
import { Workshop } from "@interfaces/Workshop";

const WorkshopBigCardsSection: React.FC = () => {
    const [workshops, setWorkshops] = useState<Workshop[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchWorkshops = async () => {
            try {
                const response = await fetch('/api/get-workshops');
                const data = await response.json();
                setWorkshops(data.workshops);
            } catch (err) {
                console.error("Failed to fetch workshops:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchWorkshops();
    }, []);

    const groupedWorkshops = workshops.reduce((acc, workshop) => {
        if (!acc[workshop.type]) {
            acc[workshop.type] = [];
        }
        acc[workshop.type].push(workshop);
        return acc;
    }, {} as Record<string, Workshop[]>);

    const typeOrder = ["individual", "couples", "family", "communities", "organization"];

    const sortedTypes = Object.keys(groupedWorkshops).sort(
        (a, b) => typeOrder.indexOf(a) - typeOrder.indexOf(b)
    );

    

    return (
        <div className="max-w-6xl mx-auto py-8">
            {loading ? (
                <p className="text-gray-500 mx-8">Loading workshops...</p>
            ) : (
                <div className="space-y-8">
                    {sortedTypes.map((type, index) => (
                        <div key={type}>
                            <h3 className="text-3xl font-bold text-blue-800 mb-4 md-mx-0 mx-4 capitalize">
                                {index + 1}. {type} Workshops
                            </h3>
                            <div className="grid grid-cols-1 gap-6">
                                {groupedWorkshops[type].map((workshop, index) => (
                                    <BigWorkshopCard key={index} workshop={workshop} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WorkshopBigCardsSection;
