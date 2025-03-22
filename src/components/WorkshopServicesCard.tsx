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
      {/* Title */}
      <div>
        <h3 className="text text-black h-9">{title}</h3>
      </div>
      {/* Features */}
      <ul className="space-y-2 p-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FaPlus className="text-black mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Session Apply Now */}
      <div className="mt-4 mb-4">
        <button className="p-3 bg-blue-950 text-white rounded-lg w-[75%] hover:bg-blue-700 transition mt-4 center">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default WorkshopServicesCard;
