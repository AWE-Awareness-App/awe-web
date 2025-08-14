import React from "react";
import Layout from "../../components/DefaultLayout.tsx";
import ConnectWithSpecialistSection from "../../components/specialist-services/ConnectWithSpecialistSection.tsx";

const SpecialistServicesPage: React.FC = () => {
    return (
        <Layout activePage="specialistServices">
            <div className="mx-auto max-w-6xl">
                <section className="py-8 px-4 text-center">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">Connect With A Specialist</h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        If you or someone you know needs additional help dealing with digital wellness and general well-being, we are always a click away.
                    </p>
                </section>
                <ConnectWithSpecialistSection />
                <p className="text-center text-3xl py-6 mb-8">We care and are here to help with our expertise and enhance your daily joy by helping remove what is in the way with clarity and conviction.</p>
            </div>
        </Layout>
    );
};

export default SpecialistServicesPage;
