import React from "react";
import Layout from "../../components/DefaultLayout.tsx";
import WorkshopBigCardsSection from "./sections/WorkshopBigCardsSection.tsx";
import WorkshopServicesSection from "./sections/WorkshopServicesSection.tsx";
import WorkshopTestimonialSection from "./sections/WorkshopTestimonialSection.tsx";

const WorkshopServicesPage: React.FC = () => {
  return (
    <Layout activePage="workshopServices">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-blue-900 text-center py-8">
          Workshops Services
        </h1>
        <p className="text-center max-w-96 mx-auto pb-10 text-sm">
          If you or someone you know needs additional help dealing with digital
          wellness and general well-being, we are always a click away.
        </p>
        <WorkshopServicesSection />
        <WorkshopTestimonialSection />
        <WorkshopBigCardsSection />
      </div>
    </Layout>
  );
};

export default WorkshopServicesPage;
