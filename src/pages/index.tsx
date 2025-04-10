import React from 'react';
import Layout from "../components/DefaultLayout.tsx";
import HeroSection from './sections/HeroSection.tsx';
import FeatureSection from './sections/FeatureSection.tsx';
import PromoSection from './sections/PromoSection.tsx';
import VideoSection from './sections/VideoSection.tsx';
import SpecialistsSection from './sections/SpecialistsSection.tsx';
const HomePage: React.FC = () => {
    return (
        <Layout activePage="home">
            <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-white to-indigo-500 z-[-1]" />
            <HeroSection heroImageSrc="/images/AWE_Chic_Couple_phone_alpha_bottom.png" />
            <PromoSection />
            <FeatureSection />
            <VideoSection videoSrc="https://www.youtube.com/embed/q7HZl-Du4nA" />
            <SpecialistsSection />
        </Layout>
    );
}

export default HomePage;