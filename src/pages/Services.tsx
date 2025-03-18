import React from "react";
import Layout from "../components/DefaultLayout.tsx";
import ConnectWithSpecialistSection from "../sections/ConnectWithSpecialistSection.tsx";

const ServicesPage: React.FC = () => {
    return (
        <Layout activePage="services">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-4xl font-bold text-blue-900 text-center py-8">Connect With A Specialist</h1>
                <p className="text-center max-w-96 mx-auto pb-10 text-sm">If you or someone you know needs additional help dealing with digital wellness and general well-being, we are always a click away.</p>
                <ConnectWithSpecialistSection />
                <p className="text-center text-3xl py-6 mb-8">We care and are here to help with our expertise and enhance your daily joy by helping remove what is in the way with clarity and conviction.</p>
            </div>
        </Layout>
    );
};

export default ServicesPage;
