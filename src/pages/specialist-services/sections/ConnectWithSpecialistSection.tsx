import React from "react";
import ConnectWithSpecialistCard from "@components/ConnectWithSpecialistCard";

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

const ConnectWithSpecialistSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 py-8">
            <ConnectWithSpecialistCard
                title="Individual Care"
                description="Personalized for specific needs but systemic/holistic, therefore useful to foster better connections and relationships."
                referenceDiscount="Refer someone for a 50% discount"
                price="$119"
                features={IndividualCareFeatures}
                bgColor="bg-pink-200"
            />
            <ConnectWithSpecialistCard
                title="Family & Couples"
                description="For couples of all ages and families of all configurations."
                referenceDiscount="Refer a couple or family for a 60% discount"
                price="$169"
                features={FamilyCouplesCareFeatures}
                bgColor="bg-green-200"
            />
        </div>
    );
};

export default ConnectWithSpecialistSection;
