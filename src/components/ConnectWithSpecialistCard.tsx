import React, { MouseEventHandler } from "react";
import { FaPlus } from "react-icons/fa";

interface ConnectWithSpecialistCardProps {
    title: string;
    description: string;
    referenceDiscount: string;
    price: string;
    features: string[];
    handleOnClick: MouseEventHandler
}

const ConnectWithSpecialistCard: React.FC<ConnectWithSpecialistCardProps> = ({ title, description, referenceDiscount, price, features, handleOnClick }) => {
    return (
        <div className="bg-white shadow-xl rounded-2xl border p-8 m-4 text-left hover:shadow-2xl transition-shadow duration-300">
            {/* Title & Description */}
            <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-800">{title}</h3>
                <p className="text-gray-600 h-20 flex items-center text-sm">{description}</p>

                {/* Thin horizontal line */}
                <div className="border-t border-gray-800 mx-auto mb-4"></div>

                <p className="text-black mt-2 text-sm">{referenceDiscount}</p>
            </div>

            {/* Session Book Now */}
            <div className="mt-4 mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">{price}</h2>
                <p className="text-gray-600">Per Session</p>
                <button onClick={handleOnClick} className="p-3 bg-blue-800 text-white rounded-lg w-[75%] hover:bg-blue-500 transition-colors mt-4">
                    Book Now
                </button>
            </div>

            {/* Features */}
            <ul className="space-y-4 py-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex gap-2 items-center text-gray-700">
                        <FaPlus className="text-black mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default ConnectWithSpecialistCard;
