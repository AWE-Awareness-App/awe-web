import React from "react";
import { FaStar } from "react-icons/fa";

interface TestimonialCardProps {
    name: string;
    imageSrc: string;
    rating: number;
    review: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, imageSrc, rating, review }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-80 flex flex-col">
            {/* Profile Image & Name */}
            <div className="flex items-center space-x-4">
                <img src={imageSrc} alt={name} className="w-12 h-12 rounded-full" />
                <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
            </div>

            {/* Star Rating */}
            <div className="flex mt-2 text-yellow-500">
                {[...Array(rating)].map((_, index) => (
                    <FaStar key={index} />
                ))}
            </div>

            {/* Review */}
            <p className="text-gray-700 mt-2">{review}</p>

            {/* CTA Button (optional) */}
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md self-start hover:bg-purple-700">
                See More
            </button>
        </div>
    );
};

export default TestimonialCard;
