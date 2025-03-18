interface Workshop {
    type: "individual" | "couples" | "family" | "communities" | "organization";
    title: string;
    description: string;
    price: string;
    features: string[];
    startDate: string;
    endDate: string;
    imageSrc: string;
}