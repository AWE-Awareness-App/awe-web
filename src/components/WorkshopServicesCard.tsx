import React, { useState } from "react";
import { FaPlus, FaCalendarAlt, FaMapMarkerAlt, FaUserTie, FaSpinner } from "react-icons/fa";
import { cn, formatDate, formatCurrency } from "@lib/utils";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { isDateBeforeNow } from "@utils/dateUtils";
import { Workshop } from "@generated/api";

export interface WorkshopServicesCardProps {
  workshop: Workshop;
  className?: string;
  bgColor?: string;
  onPurchaseInitiated?: (workshop: Workshop) => Promise<void>;
  onBookNow?: (workshop: Workshop) => void;
}

const WorkshopServicesCard: React.FC<WorkshopServicesCardProps> = ({
  workshop,
  className = "",
  bgColor = "bg-white",
  onBookNow,
  onPurchaseInitiated,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  const handleBookNow = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // For backward compatibility
    if (onBookNow) {
      onBookNow(workshop);
      return;
    }

    setIsProcessing(true);
    
    try {
      if (onPurchaseInitiated) {
        await onPurchaseInitiated(workshop);
      } else {
        // Default behavior if no handler is provided
        if (status === 'unauthenticated') {
          // Redirect to sign in with a return URL
          router.push(`/auth/signin?callbackUrl=${encodeURIComponent(router.asPath)}`);
          return;
        }
        
        // Fallback to booking URL if no purchase handler
        if (workshop.bookingUrl) {
          window.open(workshop.bookingUrl, '_blank', 'noopener,noreferrer');
        } else {
          console.error('No purchase handler or booking URL provided for workshop:', workshop.id);
          alert('Booking functionality is not properly configured.');
        }
      }
    } catch (error) {
      console.error('Error initiating booking:', error);
      alert('Failed to initiate booking. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Format price with currency using the utility function
  const formatPrice = (price: string | number | undefined) => {
    if (!price) return 'Free';
    return formatCurrency(typeof price === 'string' ? parseFloat(price) || 0 : price);
  };



  // Get counsellor name
  const getCounsellorName = (workshop: Workshop) => {
    if (workshop.counsellor) return workshop.counsellor.firstName + ' ' + workshop.counsellor.lastName;
    return 'AWE Counsellor';
  };

  // Get the image URL, falling back to a default image if none is provided
  const imageUrl = workshop.imageUrl || '/images/workshop-default.jpg';

  return (
    <div
      className={`rounded-xl overflow-hidden ${bgColor} flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300 h-full w-full ${className}`}
    >
      {/* Workshop Image */}
      <div className="w-full h-48 bg-gray-200 overflow-hidden">
        <img 
          src={imageUrl}
          alt={workshop.name}
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
          {workshop.name}
        </h3>

        {/* Price */}
        <div className="text-2xl font-bold text-blue-950 mb-4">
          {workshop.price === 0 ? (
            <span className="text-green-600 font-semibold">Free</span>
          ) : (
            formatCurrency(workshop.price, 'USD')
          )}
        </div>

        {/* Workshop details */}
        <div className="space-y-3 mb-4">
          {/* Duration */}
          <div className="flex items-center text-gray-700">
            <FaCalendarAlt className="mr-2 text-blue-600 flex-shrink-0" />
            <div>
              <div className="font-medium">Duration:</div>
              <div>{workshop.durationText}</div>
              {workshop.startDate && !isDateBeforeNow(workshop.startDate) && (
                <div className="text-sm text-gray-600">
                  Date: {formatDate(workshop.startDate, { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              )}
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
        {(workshop.description) && (
          <div className="mb-4">
            {workshop.description ? (
              (workshop.description.includes('\n') || workshop.description.includes('\\n')) ? (
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {workshop.description
                    .replace(/\\n/g, '\n')  // Replace escaped newlines with actual newlines
                    .split('\n')
                    .filter((line: string) => line.trim() !== '')
                    .map((line: string, index: number) => (
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
      </div>

      {/* Book Now Button */}
      <div className="mt-auto px-6 pb-6 pt-4">
        <button
          onClick={handleBookNow}
          disabled={isProcessing}
          className={cn(
            "w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2",
            {
              'bg-purple-600 hover:bg-purple-700': workshop.price === 0,
              'bg-blue-600 hover:bg-blue-700': workshop.price > 0,
            }
          )}
        >
          {isProcessing ? (
            <>
              <FaSpinner className="animate-spin" />
              <span>Processing...</span>
            </>
          ) : workshop.bookingUrl || onBookNow ? (
            workshop.type === 'INDIVIDUAL' ? 'Book Session' : 'Register Now'
          ) : (
            'Coming Soon'
          )}
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
