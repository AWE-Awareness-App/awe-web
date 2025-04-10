import React from "react";
import FeatureCard from "@components/FeatureCard";

const FeatureSection: React.FC = () => {
    return (
        <div className="mx-auto max-w-6xl py-8 mb-8">
            <h2 className="text-blue-800 font-extrabold text-6xl text-center py-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-0 px-8">
                <FeatureCard
                    title="Consult with an expert"
                    description="Quickly assess how best we can help you or a loved one"
                    ctaText="Book Free Consult Now"
                    imageSrc="/images/consultation.png"
                />
                <FeatureCard
                    title="Take our Digital Balance Test"
                    description="Find our your digital balance score"
                    imageSrc="/images/wellness-coach.png"
                    ctaText="Start Test"
                />
                <FeatureCard
                    title="Join the AWE Community"
                    description="Follow our Socials to more digital awareness, tips and features"
                    imageSrc="/images/community.png"
                    ctaText="Follow"
                />
            </div>
        </div>
    );
};

export default FeatureSection;
