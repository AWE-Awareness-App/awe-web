import React from "react";

interface StatCardProps {
    stat: string;
    label: string;
    imageSrc: string;
    bgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ stat, label, imageSrc, bgColor }) => {
    return (
        <div className={`rounded-xl p-4 ${bgColor} shadow-md flex items-center justify-between w-full`}>
            <div>
                <h3 className="text-2xl font-bold text-blue-900">{stat}</h3>
                <p className="text-gray-700">{label}</p>
            </div>
            <img src={imageSrc} alt="Stat" className="w-16 h-16 object-contain" />
        </div>
    );
};

export default StatCard;
