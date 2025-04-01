import React from "react";
import FeatureCard from "@components/FeatureCard";

const FeatureSection: React.FC = () => {
    return (
        <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-0 px-8">
                <FeatureCard
                    title="Instant Free Intro Video Consultation"
                    description="Quickly assess how best we can help you or a loved one."
                    imageSrc="/images/consultation.png"
                    bgColor="bg-green-200"
                />
                <FeatureCard
                    title="Find the right Digital Wellness Coach for individual, couple or family."
                    description="Confirmed Appointments."
                    imageSrc="/images/wellness-coach.png"
                    bgColor="bg-yellow-200"
                />
                <FeatureCard
                    title="Join the AWE Community that brings enjoyment back to technology"
                    description="Get a free eBook and early access to our app launch."
                    imageSrc="/images/community.png"
                    bgColor="bg-pink-200"
                />
            </div>
            <p className="text-3xl text-center font-bold text-blue-900 py-4">Here are some of our highlighted features.</p>
        </div>
    );
};

export default FeatureSection;
