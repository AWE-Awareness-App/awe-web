import React from "react";
import { FaLinkedin } from "react-icons/fa";

interface SpecialistCardProps {
    name: string;
    role: string;
    languages: string;
    imageSrc: string;
    linkedInUrl: string | undefined;
    onClick?: () => void;
}

const SpecialistCard: React.FC<SpecialistCardProps> = ({ name, role, languages, imageSrc, linkedInUrl, onClick }) => {
    return (
        <div
            {...(onClick ? { onClick } : {})}
            className={`
            relative rounded-lg shadow-lg overflow-hidden cursor-pointer
            transition-opacity duration-300
            ${onClick ? "cursor-pointer hover:opacity-70" : ""}
            `}
        >
            {/* Profile Image */}
            <img src={imageSrc} alt={name} className="w-full h-80 object-cover" />

            {/* LinkedIn Icon */}
            {linkedInUrl && (<a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
                <FaLinkedin className="text-blue-600 p-1 w-12 h-12" />
            </a>)}

            {/* Overlay for Name & Role */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-4 text-white">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-sm">{role}</p>
                <p className="text-xs opacity-80">{languages}</p>
            </div>
        </div>
    );
};

export default SpecialistCard;
