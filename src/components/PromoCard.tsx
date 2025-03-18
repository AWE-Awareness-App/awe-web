import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface PromoCardProps {
    title: string;
    description: string;
    imageSrc: string;
    bgColor: string;
}

const PromoCard: React.FC<PromoCardProps> = ({ title, description, imageSrc, bgColor }) => {
    return (
        <div className={`rounded-xl p-6 ${bgColor} flex flex-col justify-between shadow-md w-full`}>
            <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
            <p className="text-gray-700 mt-2">{description}</p>

            <div className="flex items-center justify-between mt-4">
                <img src={imageSrc} alt="Promo" className="w-24 h-24 object-contain" />
                <button className="p-3 bg-white text-blue-900 rounded-full shadow-md hover:bg-gray-200 transition">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default PromoCard;
