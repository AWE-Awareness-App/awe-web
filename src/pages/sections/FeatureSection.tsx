import React from "react";
import FeatureCard from "@components/FeatureCard";
import { useRouter } from "next/router";
import { trackEvent } from "@services/Analytics";

const FeatureSection: React.FC = () => {
    const router = useRouter();
    
    const handleBookFreeConsultClicked = () => {
        trackEvent({ category: "User Actions", action: "Clicked Book Free Consultations", label: "HomePage-Features" });
        window.open('https://calendly.com/marcdaritter', '_blank', 'noopener noreferrer');
    };

    const handleTakeTestClicked = () => {
        trackEvent({ category: "User Actions", action: "Clicked Online Wellness Test", label: "HomePage-Features" });
        router.push('/online-wellness-test');
    };

    const handleFollowClicked = () => {
        router.push('/online-wellness-test');
    };

    return (
        <div className="mx-auto max-w-6xl py-8 mb-8">
            <h2 className="text-blue-800 font-extrabold text-6xl text-center py-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-0 px-8">
                <FeatureCard
                    title="Consult with an expert"
                    description="Quickly assess how best we can help you or a loved one"
                    ctaText="Book Free Consult Now"
                    imageSrc="/images/consultation.png"
                    onCtaClick={handleBookFreeConsultClicked}
                />
                <FeatureCard
                    title="Take our Digital Balance Test"
                    description="Find our your digital balance score"
                    imageSrc="/images/wellness-coach.png"
                    ctaText="Start Test"
                    onCtaClick={handleTakeTestClicked}
                />
                <FeatureCard
                    title="Join the AWE Community"
                    description="Follow our Socials to more digital awareness, tips and features"
                    imageSrc="/images/community.png"
                    ctaText="Follow"
                    onCtaClick={handleFollowClicked}
                />
            </div>
        </div>
    );
};

export default FeatureSection;
