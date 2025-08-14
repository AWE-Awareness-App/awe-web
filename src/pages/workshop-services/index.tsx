import React from "react";
import Layout from "../../components/DefaultLayout.tsx";
import WorkshopBigCardsSection from "../../components/workshop-services/WorkshopBigCardsSection.tsx";

const WorkshopServicesPage: React.FC = () => {
  return (
    <Layout activePage="workshopServices">
      <div className="mx-auto max-w-6xl">
        <section className="py-8 px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Workshops Services</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            If you or someone you know needs additional help dealing with digital
            wellness and general well-being, we are always a click away.
          </p>
        </section>
        {/*<WorkshopServicesSection />*/}
        <WorkshopBigCardsSection />
      </div>
    </Layout>
  );
};

export default WorkshopServicesPage;
