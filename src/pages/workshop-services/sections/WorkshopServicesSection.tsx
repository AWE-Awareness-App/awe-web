import WorkshopServicesCard from "@components/WorkshopServicesCard";

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
    <div className="flex flex-col gap-6 py-2">
      <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
        <WorkshopServicesCard
          className=""
          title="1. Individual Workshops"
          features={IndividualWorkshopsFeatures}
          bgColor="bg-green-200"
        />
        <WorkshopServicesCard
          className=""
          title="2. Couples Workshops"
          features={CouplesWorkshopsFeatures}
          bgColor="bg-yellow-200"
        />
        <WorkshopServicesCard
          className=""
          title="3. Family Workshops"
          features={FamilyWorkshopFeatures}
          bgColor="bg-pink-200"
        />
      </div>
      {/* Making this section 6 columns wide, each content will take 2 spaces and we will have an empty div of 1 space each side to center it */ }
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-1" />
        <WorkshopServicesCard
          className="col-span-2"
          title="4. Communities Workshops"
          features={CommunitiesWorkshopFeatures}
          bgColor="bg-yellow-200"
        />
        <WorkshopServicesCard
          className="col-span-2"
          title="5. Organization Workshops"
          features={OrganizationWorkshopFeatures}
          bgColor="bg-pink-200"
        />
        <div className="col-span-1" />
      </div>
    </div>
  );
};

export default WorkshopServicesSection;
