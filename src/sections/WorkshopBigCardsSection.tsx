import React, { useEffect, useState } from "react";
import BigWorkshopCard from "../components/BigWorkshopCard";
import { GetWorkshops } from "../services/GetWorkshops";

const WorkshopBigCardsSection: React.FC = () => {
    const [workshops, setWorkshops] = useState<Workshop[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchWorkshops = async () => {
            const data = await GetWorkshops();
            setWorkshops(data);
            setLoading(false);
        };

        fetchWorkshops();
    }, []);

    // **Group workshops by type**
    const groupedWorkshops = workshops.reduce((acc, workshop) => {
        if (!acc[workshop.type]) {
            acc[workshop.type] = [];
        }
        acc[workshop.type].push(workshop);
        return acc;
    }, {} as Record<string, Workshop[]>);

    // **Define custom order for workshop types**
    const typeOrder = ["individual", "couples", "family", "communities", "organization"];

    // **Sort types based on predefined order**
    const sortedTypes = Object.keys(groupedWorkshops).sort(
        (a, b) => typeOrder.indexOf(a) - typeOrder.indexOf(b)
    );

    return (
        <div className="max-w-6xl mx-auto py-8">
            {loading ? (
                <p className="text-gray-500">Loading workshops...</p>
            ) : (
                <div className="space-y-8">
                    {sortedTypes.map((type, index) => (
                        <div key={type}>
                            <h3 className="text-xl font-bold text-blue-900 mb-4 capitalize">{index + 1}. {type} Workshops</h3>
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
