import MainWorkshops from "../components/SmallWorkshopCard";
import { Workshop } from "../interfaces/Workshop";
import { workshops } from "../repositories/WorkshopRepository";

const groupedWorkshops: Record<"individual" | "couples" | "family" | "communities" | "organization", Workshop[]> = {
    individual: workshops.filter((w) => w.type === "individual"),
    couples: workshops.filter((w) => w.type === "couples"),
    family: workshops.filter((w) => w.type === "family"),
    communities: workshops.filter((w) => w.type === "communities"),
    organization: workshops.filter((w) => w.type === "organization"),
};

const WorkshopSmallCardSection = () => {
    const workegories = [
        { id: 1, type: "individual" as const, title: "Individual Workshops" },
        { id: 2, type: "couples" as const, title: "Couples Workshops" },
        { id: 3, type: "family" as const, title: "Family Workshops" },
        { id: 4, type: "communities" as const, title: "Communities Workshops" },
        { id: 5, type: "organization" as const, title: "Organization Workshops" },
    ];

    return (
        <div className="flex flex-wrap justify-center min-w-full min-h-screen gap-8 mx-10 p-10">
            {workegories.map((work) => (
                    <MainWorkshops
                        id={work.id}
                        type={work.type as any}
                        title={work.title}
                        workshops={groupedWorkshops[work.type]}
                    />
            ))}
        </div>
    );
};

export default WorkshopSmallCardSection;
