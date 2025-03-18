import React from "react";
import PromoCard from "../components/PromoCard";
import EventCard from "../components/EventCard";
import StatCard from "../components/StatCard";

const PromoSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-12">
        {/* Large Promo Card */}
        <PromoCard
          title="Want to Become Our Partner or Digital Wellness Coach"
          description="Verify your credentials or get specialized training for you or your team in no time. Evidence-based approach to digital health and habits."
          imageSrc="/images/partners.png"
          bgColor="bg-yellow-200"
        />

        {/* Right Column */}
        <div className="flex flex-col space-y-4">
          <EventCard
            title="Healthy Habits for a Happy Heart"
            imageSrc="/images/healthy-habits.png"
            bgColor="bg-blue-900"
          />
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              stat="100+"
              label="Years Experience."
              imageSrc="/images/experience.png"
              bgColor="bg-green-200"
            />
            <StatCard
              stat="100+"
              label="Happy Customers."
              imageSrc="/images/customers.png"
              bgColor="bg-pink-200"
            />
          </div>
        </div>
      </div>
      {/* Journalist Section */}
      <div className="py-4">
        <p className="text-3xl text-center font-bold text-blue-900">We’re welcoming new patients and can’t wait to meet you.</p>
        <p className="text-s text-center font-bold text-blue-950">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
      </div>
    </div>
  );
};

export default PromoSection;
