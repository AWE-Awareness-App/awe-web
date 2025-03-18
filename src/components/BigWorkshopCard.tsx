import React from "react";

interface BigWorkshopCardProps {
    workshop: Workshop;
}

const BigWorkshopCard: React.FC<BigWorkshopCardProps> = ({ workshop }) => {
    return (
        <div className={`rounded-xl p-6 flex flex-col shadow-md`}>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left side */}
                <div className="flex flex-col space-y-4 py-2 px-8">

                    <h3 className="text-xl text-blue-950 h-9">{workshop.title}</h3>
                    <h2 className="text-3xl font-bold text-black">{workshop.price}</h2>

                    {/* Features */}
                    <ul className="space-y-4 p-8 list-disc pl-5">
                        {workshop.features.map((feature, index) => (
                            <li key={index} className="text-blue-950">
                                {feature}
                            </li>
                        ))}
                    </ul>

                    { /* Dates */}
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

                    {/* Session Book Now */}
                    <div className="mt-4 mb-4">
                        <button className="p-3 bg-blue-950 text-white rounded-lg w-[75%] hover:bg-blue-700 transition mt-4">
                            Book Now
                        </button>
                    </div>

                </div>

                {/* Right side */}
                <div className="rounded-xl">
                    <img src={workshop.imageSrc} alt="Workshop Image" className="w-34 h-34 object-contain" />
                </div>
            </div>

        </div>
    );
};

export default BigWorkshopCard;
