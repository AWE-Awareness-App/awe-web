import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface FeatureCardProps {
    title: string;
    description: string;
    imageSrc: string;
    bgColor: string; // Tailwind background color class
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc, bgColor }) => {
    return (
        <div className={`rounded-xl p-6 ${bgColor} flex flex-col justify-between shadow-md`}>
            {/* Title & Description */}
            <div>
                <h3 className="text-xl font-bold text-blue-900">{title}</h3>
                <p className="text-gray-700 mt-2">{description}</p>
            </div>

            {/* Image */}
            <div className="mt-4 flex justify-end">
                <img src={imageSrc} alt="Illustration" className="w-28 h-28 object-contain mix-blend-multiply" />
            </div>

            {/* Arrow Button */}
            <div className="mt-4">
                <button className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default FeatureCard;
