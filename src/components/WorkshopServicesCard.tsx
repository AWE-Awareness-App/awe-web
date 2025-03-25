import React from "react";
import { FaPlus } from "react-icons/fa";

interface WorkshopServicesCardProps {
  className: string;
  title: string;
  features: string[];
  bgColor: string; // Tailwind background color class
}

const WorkshopServicesCard: React.FC<WorkshopServicesCardProps> = ({
  className,
  title,
  features,
  bgColor,
}) => {
  return (
    <div
      className={`rounded-xl p-6 ${bgColor} flex flex-col shadow-md h-full w-full ${className}`}
    >

      <div className="flex-grow">
        {/* Title */}
        <h3 className="font-bold text-2xl text-blue-950 h-9">{title}</h3>
        {/* Features */}
        <ul className="space-y-2 p-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-blue-950">
              <FaPlus className="mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Session Apply Now */}
      <div className="mt-4 mb-4 flex justify-center">
        <button className="p-3 bg-blue-950 text-white rounded-lg w-[75%] hover:bg-blue-700 transition mt-4 center">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default WorkshopServicesCard;
