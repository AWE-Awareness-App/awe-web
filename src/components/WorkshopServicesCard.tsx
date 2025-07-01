import React from "react";
import { FaPlus, FaCalendarAlt, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import { Workshop } from "@interfaces/Workshop";
import { cn, formatDate, formatCurrency, formatDuration } from "@lib/utils";

interface WorkshopServicesCardProps {
  workshop: Workshop;
  className?: string;
  bgColor?: string; // Tailwind background color class
  onBookNow?: (workshop: Workshop) => void;
}

const WorkshopServicesCard: React.FC<WorkshopServicesCardProps> = ({
  workshop,
  className = "",
  bgColor = "bg-white",
  onBookNow,
}) => {
  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBookNow) {
      onBookNow(workshop);
    } else if (workshop.bookingUrl) {
      window.open(workshop.bookingUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Format price with currency using the utility function
  const formatPrice = (price: string | number | undefined) => {
    if (!price) return 'Free';
    return formatCurrency(typeof price === 'string' ? parseFloat(price) || 0 : price);
  };



  // Get counsellor name
  const getCounsellorName = (workshop: Workshop) => {
    if (workshop.counsellorName) return workshop.counsellorName;
    if (typeof workshop.counsellor === 'string') return workshop.counsellor;
    if (workshop.counsellor?.firstName || workshop.counsellor?.lastName) {
      return `${workshop.counsellor.firstName || ''} ${workshop.counsellor.lastName || ''}`.trim();
    }
    return 'AWE Counsellor';
  };

  // Get the image URL, falling back to a default image if none is provided
  const imageUrl = workshop.imageUrl || workshop.imageSrc || '/images/workshop-default.jpg';

  return (
    <div
      className={`rounded-xl overflow-hidden ${bgColor} flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300 h-full w-full ${className}`}
    >
      {/* Workshop Image */}
      <div className="w-full h-48 bg-gray-200 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={workshop.title || workshop.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to a default image if the provided one fails to load
            const target = e.target as HTMLImageElement;
            target.src = '/images/workshop-default.jpg';
          }}
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        {/* Title - Use title if available, fallback to name */}
        <h3 className="font-bold text-2xl text-blue-800 mb-2">
          {workshop.title || workshop.name}
        </h3>
        
        {/* Price */}
        <div className="text-2xl font-bold text-blue-950 mb-4">
          {formatPrice(workshop.price)}
        </div>

        {/* Workshop details */}
        <div className="space-y-3 mb-4">
          {/* Duration */}
          <div className="flex items-center text-gray-700">
            <FaCalendarAlt className="mr-2 text-blue-600 flex-shrink-0" />
            <div>
              <div className="font-medium">Duration:</div>
              <div>{formatDuration(workshop.duration)}</div>
              {workshop.startDate && (
                <div className="text-sm text-gray-600">
                  Starts: {formatDate(workshop.startDate, { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              )}
              {workshop.endDate && workshop.endDate !== workshop.startDate && (
                <div className="text-sm text-gray-600">
                  Ends: {formatDate(workshop.endDate, { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              )}
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-start text-gray-700">
            <FaMapMarkerAlt className="mr-2 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <div className="font-medium">Location:</div>
              <div>{workshop.location || 'Online'}</div>
              <div className="text-sm text-gray-600">{workshop.format || 'Workshop'}</div>
            </div>
          </div>
          
          {/* Counsellor */}
          <div className="flex items-start text-gray-700">
            <FaUserTie className="mr-2 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <div className="font-medium">Facilitator:</div>
              <div>{getCounsellorName(workshop)}</div>
            </div>
          </div>
        </div>

        {/* Description */}
        {(workshop.description || workshop.features?.length === 0) && (
          <div className="mb-4">
            {workshop.description ? (
              (workshop.description.includes('\n') || workshop.description.includes('\\n')) ? (
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {workshop.description
                    .replace(/\\n/g, '\n')  // Replace escaped newlines with actual newlines
                    .split('\n')
                    .filter(line => line.trim() !== '')
                    .map((line, index) => (
                      <li key={index} className="text-gray-700">
                        {line.trim()}
                      </li>
                    ))}
                </ul>
              ) : (
                <p className="text-gray-700">
                  {workshop.description.length > 200 
                    ? `${workshop.description.substring(0, 200).replace(/\\n/g, ' ')}...` 
                    : workshop.description.replace(/\\n/g, ' ')}
                </p>
              )
            ) : (
              <p className="text-gray-700">No description available.</p>
            )}
          </div>
        )}

        {/* Features */}
        {workshop.features && workshop.features.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold text-blue-900 mb-2">
              {workshop.type === 'INDIVIDUAL' ? 'What\'s included:' : 'Key Features:'}
            </h4>
            <ul className="space-y-2">
              {workshop.features.slice(0, 5).map((feature, index) => (
                <li key={index} className="flex items-start text-blue-950">
                  <FaPlus className="mt-1 mr-2 text-blue-600 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
              {workshop.features.length > 5 && (
                <li className="text-sm text-blue-700 mt-2">
                  +{workshop.features.length - 5} more features
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Book Now Button */}
      <div className="mt-8 mb-2 mx-8">
        <button
          onClick={handleBookNow}
          className={cn(
            "w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-200 shadow-md hover:shadow-lg",
            {
              'bg-blue-600 hover:bg-blue-700': Boolean(workshop.bookingUrl) || Boolean(onBookNow),
              'bg-gray-400 cursor-not-allowed': !workshop.bookingUrl && !onBookNow,
              'animate-pulse': !workshop.bookingUrl && !onBookNow,
            }
          )}
          disabled={!workshop.bookingUrl && !onBookNow}
        >
          {workshop.bookingUrl || onBookNow 
            ? workshop.type === 'INDIVIDUAL' ? 'Book Session' : 'Register Now'
            : 'Coming Soon'}
        </button>
        {workshop.bookingUrl && (
          <p className="text-xs text-gray-500 mt-2 text-center">
            You'll be redirected to our booking system
          </p>
        )}
      </div>
    </div>
  );
};

export default WorkshopServicesCard;
