export interface Workshop {
    _id:string;
    type: "individual" | "couples" | "family" | "communities" | "organization";
    title: string;
    description: string;
    price: string;
    features: string[];
    startDate: string;
    endDate: string;
    imageSrc: string;
}

export interface MainWorkshopsProps {
    id: number;
    type: "individual" | "couples" | "family" | "communities" | "organization";
    title: string;
    workshops: Workshop[];
}