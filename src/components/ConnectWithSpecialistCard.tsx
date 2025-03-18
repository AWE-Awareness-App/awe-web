import React from "react";
import { FaPlus } from "react-icons/fa";

interface ConnectWithSpecialistCardProps {
    title: string;
    description: string;
    referenceDiscount: string;
    price: string;
    features: string[];
    bgColor: string; // Tailwind background color class
}

const ConnectWithSpecialistCard: React.FC<ConnectWithSpecialistCardProps> = ({ title, description, referenceDiscount, price, features, bgColor }) => {
    return (
        <div className={`rounded-xl p-6 ${bgColor} flex flex-col shadow-md`}>
            {/* Title & Description */}
            <div>
                <h3 className="text-xl text-black h-9">{title}</h3>
                <p className="text-black h-20 flex items-center text-sm">{description}</p>

                {/* Thin horizontal line */}
                <div className="border-t border-gray-800 mx-auto mb-4"></div>

                <p className="text-black mt-2 text-sm">{referenceDiscount}</p>
            </div>

            {/* Session Book Now */}
            <div className="mt-4 mb-4">
                <h2 className="text-3xl font-bold text-black">{price}</h2>
                <p className="text-gray-600">Per Session</p>
                <button className="p-3 bg-blue-950 text-white rounded-lg w-[75%] hover:bg-blue-700 transition mt-4">
                    Book Now
                </button>
            </div>

            {/* Features */}
            <ul className="space-y-4 p-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <FaPlus className="text-black mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default ConnectWithSpecialistCard;
