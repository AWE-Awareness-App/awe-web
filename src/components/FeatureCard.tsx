import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface FeatureCardProps {
    title: string;
    description: string;
    ctaText: string;
    imageSrc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, ctaText, imageSrc }) => {
    return (
        <div className={`rounded-xl p-6 flex flex-col justify-between border-2 shadow-md relative h-[320px]`}>
            <div className="absolute bottom-2 right-2">
                <img src={imageSrc} alt="Illustration" className="md:w-32 md:h-32 w-32 h-32 object-contain mix-blend-multiply" />
            </div>
            <div>
                <h3 className="text-3xl font-bold text-blue-800">{title}</h3>
                <p className="text-gray-700 mt-4">{description}</p>
            </div>
            <div className="md:mt-4">
                <button className="p-3 text-blue-700 rounded-full hover:bg-gray-200 hover:text-orange-500 transition flex items-center gap-2">
                    {ctaText} <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default FeatureCard;
