import React from "react";
import ConnectWithSpecialistCard from "@components/ConnectWithSpecialistCard";
import { trackEvent } from "@services/Analytics";

const IndividualCareFeatures = [
    "Private 1-1 Coaching with Professional",
    "Goal Setting, Planning and Tracking",
    "Actionable Tools and Teaching",
    "Find Your Purpose and Motivation"];

const FamilyCouplesCareFeatures = [
    "Private 1-2+ Coaching",
    "Enhance Effective Communication",
    "Reduce Conflict",
    "Build Connection",
    "Maintain Commitments"];

const handleIndividualCareButtonClicked = async () => {
    trackEvent({
        category: "User Actions",
        action: "Book Now - Individual Care",
        label: "Specialist Service",
    });
    window.open('https://calendly.com/christian-awedigitalwellness/individual_care', '_blank', 'noopener noreferrer');
};

const handleFamilyCoupleButtonClicked = async () => {
    trackEvent({
        category: "User Actions",
        action: "Book Now - Family Couple",
        label: "Specialist Service",
    });
    window.open('https://calendly.com/christian-awedigitalwellness/family-couples', '_blank', 'noopener noreferrer');
};

const ConnectWithSpecialistSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 py-4">
            <ConnectWithSpecialistCard
                title="Individual Care"
                description="Personalized for specific needs but systemic/holistic, therefore useful to foster better connections and relationships."
                referenceDiscount="Refer someone for a 50% discount"
                price="$119"
                features={IndividualCareFeatures}
                handleOnClick={handleIndividualCareButtonClicked}
            />
            <ConnectWithSpecialistCard
                title="Family & Couples"
                description="For couples of all ages and families of all configurations."
                referenceDiscount="Refer a couple or family for a 60% discount"
                price="$169"
                features={FamilyCouplesCareFeatures}
                handleOnClick={handleFamilyCoupleButtonClicked}
            />
        </div>
    );
};

export default ConnectWithSpecialistSection;
