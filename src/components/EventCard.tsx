import React from "react";

interface EventCardProps {
    title: string;
    imageSrc: string;
    bgColor: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, imageSrc, bgColor }) => {
    return (
        <div className={`rounded-xl p-4 ${bgColor} shadow-md w-full`}>
            <span className="bg-white text-blue-900 px-2 py-1 text-xs font-bold rounded-md">Live event</span>
            <h3 className="text-lg font-bold text-white mt-2">{title}</h3>
            <img src={imageSrc} alt="Event" className="w-20 h-20 object-contain mt-2" />
        </div>
    );
};

export default EventCard;
