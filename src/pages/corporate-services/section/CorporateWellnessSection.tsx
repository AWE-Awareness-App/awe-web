import React from "react";
import ConnectWithSpecialistCard from "@components/ConnectWithSpecialistCard";
import { trackEvent } from "@services/Analytics";

const CorporateWellnessFeatures = [
    "Live Virtual or On-Site Workshops",
    "Attention, Absenteeism, Burnout, & Digital Wellness Topics",
    "Optional Coaching Add-Ons",
    "Custom Plans"];


const handleCorporateWellnessButtonClicked = async () => {
    trackEvent({
        category: "User Actions",
        action: "Book Now - Corporate Wellness",
        label: "Corporate Wellness",
    });
    window.open('https://calendly.com/marcdaritter', '_blank', 'noopener noreferrer');
};

const CorporateWellnessSection: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <ConnectWithSpecialistCard
                title="Our Corporate Wellness Program"
                description="A comprehensive solution for hybrid or remote-first teams struggling with digital distraction, disconnection and disengagement."
                referenceDiscount="Free 15-Min Strategy Call"
                price=" $1,299"
                features={CorporateWellnessFeatures}
                handleOnClick={handleCorporateWellnessButtonClicked}
            />
        </div>
    );
};

export default CorporateWellnessSection;
