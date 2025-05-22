import React, { MouseEventHandler } from "react";
import { Workshop } from "@interfaces/Workshop";
import { trackEvent } from "@services/Analytics";

interface BigWorkshopCardProps {
    workshop: Workshop;
}

const handleWorkshopClicked = async (workshop: Workshop) => {
    trackEvent({
        category: "User Actions",
        action: "Book Now - " + workshop.title,
        label: "Specialist Service",
    });
    window.open(workshop.schedulingLink, '_blank', 'noopener noreferrer');
};

const BigWorkshopCard: React.FC<BigWorkshopCardProps> = ({ workshop }) => {
    return (
        <div className="bg-white shadow-xl rounded-2xl border p-8 mx-4 text-left hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left side */}
                <div className="flex flex-col space-y-4 py-2 px-8">

                    <h3 className="text-2xl font-semibold text-blue-800 md-h-9">{workshop.title}</h3>
                    <h2 className="text-3xl font-bold text-black">{workshop.price}</h2>

                    {/* Features */}
                    <ul className="space-y-2 p-4 list-disc pl-5">
                        {workshop.features.map((feature, index) => (
                            <li key={index} className="text-blue-950">
                                {feature}
                            </li>
                        ))}
                    </ul>

                    
                    {/* Dates */}
                    {/*}
                    <div className="mt-4 mb-4">
                        <p>
                            <span className="text-black font-semibold">Start Date:</span>
                            <span className="text-gray-500 ml-2">{workshop.startDate}</span>
                        </p>
                        <p>
                            <span className="text-black font-semibold">End Date:</span>
                            <span className="text-gray-500 ml-2">{workshop.endDate}</span>
                        </p>
                    </div>
                    {*/}

                    {/* Session Book Now */}
                    <div className="mt-4 mb-4">
                        <button
                            className="p-3 bg-blue-800 text-white rounded-lg w-[75%] hover:bg-blue-500 transition-colors mt-4"
                            onClick={() => handleWorkshopClicked(workshop)}
                        >
                            Book Now
                        </button>
                    </div>

                </div>

                {/* Right side */}
                <div className="rounded-2xl">
                    <img src={workshop.imageSrc} alt="Workshop" className="w-34 h-34 object-contain rounded-2xl" />
                </div>
            </div>

        </div>
    );
};

export default BigWorkshopCard;
