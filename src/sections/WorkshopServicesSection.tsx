import react from "react";
import WorkshopServicesCard from "../components/WorkshopServicesCard";

const IndividualWorkshopsFeatures = [
  "3-Day Happiness Retreat Workshop",
  "30-Day Digital Boot camp",
  "12-Week Digital Recovery",
];

const CouplesWorkshopsFeatures = [
  "Addiction & Couples",
  "Communication",
  "Sex & Intimacy 101",
  "Parenting 101",
  "Parenting 201",
];

const FamilyWorkshopFeatures = [
  "Better Digitality in Family Workshop",
  "Single Parent Workshop",
  "Co-parenting Facilitation",
];

const CommunitiesWorkshopFeatures = [
  "Youth & Schools (12–18yr)",
  "Neurodiversity",
  "Cultural Diversity",
  "University (18–25yr)",
];

const OrganizationWorkshopFeatures = [
  "Business",
  "Government",
  "NGO / Nonprofit",
];

const WorkshopServicesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-x-28 py-2 items-center justify-items-center">
      <WorkshopServicesCard
        title="1. Individual Workshops"
        features={IndividualWorkshopsFeatures}
        bgColor="bg-green-400"
      />
      <WorkshopServicesCard
        title="2. Couples Workshops"
        features={CouplesWorkshopsFeatures}
        bgColor="bg-yellow-400"
      />
      <WorkshopServicesCard
        title="3. Family Workshops"
        features={FamilyWorkshopFeatures}
        bgColor="bg-pink-200"
      />
      <WorkshopServicesCard
        title="4. Communities Workshops"
        features={CommunitiesWorkshopFeatures}
        bgColor="bg-yellow-400"
      />
      <WorkshopServicesCard
        title="5. Organization Workshops"
        features={OrganizationWorkshopFeatures}
        bgColor="bg-pink-200"
      />
    </div>
  );
};

export default WorkshopServicesSection;
