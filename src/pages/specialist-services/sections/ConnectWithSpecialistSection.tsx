import React, { useState, useEffect } from "react";
import ConnectWithSpecialistCard from "@components/ConnectWithSpecialistCard";
import SpecialistCard from "@components/SpecialistCard";
import { trackEvent } from "@services/Analytics";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

type CareType = "individual" | "family";
type CalendlyUrlEndType = "/family-couples" | "/individual_care";

interface SpecialistInfo {
    name: string;
    role: string;
    languages: string;
    imageSrc: string;
    linkedInUrl?: string;
    calendlyUrl: string;
}

const mockData = [
    {
        name: "Christian Dominique",
        role: "Addiction Coach, Family and Couples",
        languages: "English, French, Spanish",
        imageSrc: "/images/ChristianDominique.png",
        linkedInUrl: "https://www.linkedin.com/in/dominiquemba/",
        calendlyUrl: "https://calendly.com/christian-awedigitalwellness",
    },
];

const IndividualCareFeatures = [
    "Private 1-1 Coaching with Professional",
    "Goal Setting, Planning and Tracking",
    "Actionable Tools and Teaching",
    "Find Your Purpose and Motivation"
];

const FamilyCouplesCareFeatures = [
    "Private 1-2+ Coaching",
    "Enhance Effective Communication",
    "Reduce Conflict",
    "Build Connection",
    "Maintain Commitments"
];

const SpecialistSlider: React.FC<{
    specialistsList: SpecialistInfo[];
    slideIndex: number;
    prevSlide: () => void;
    nextSlide: () => void;
    canLeft: boolean;
    canRight: boolean;
    calendlyUrlEnd: CalendlyUrlEndType | null;
    totalSpecs: number;
    simpleMode: boolean;
}> = ({
    specialistsList,
    slideIndex,
    prevSlide,
    nextSlide,
    canLeft,
    canRight,
    calendlyUrlEnd,
    totalSpecs,
    simpleMode,
}) => {
    return (
        <div className="flex items-center justify-center">
            {/* Left arrow */}
            <button
                onClick={prevSlide}
                disabled={!canLeft}
                className={`p-3 rounded-full mr-4 ${canLeft
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
            >
                <FaArrowLeft size={20} />
            </button>
            {/* Slider window */}
            <div className="overflow-hidden w-full max-w-4xl">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                        width: simpleMode
                            ? "100%"
                            : `${(totalSpecs / 3) * 100}%`,
                        transform: `translateX(-${(slideIndex * 100) / 3}%)`,
                    }}
                >
                    {specialistsList.map((spec) => (
                        <div key={spec.name} className="w-1/3 px-2">
                            <SpecialistCard
                                name={spec.name}
                                role={spec.role}
                                languages={spec.languages}
                                imageSrc={spec.imageSrc}
                                linkedInUrl={spec.linkedInUrl}
                                onClick={() => {
                                    trackEvent({
                                        category: "User Actions",
                                        action: `Book Now – ${spec.name}`,
                                        label: "Specialist Booking",
                                    });
                                    window.open(spec.calendlyUrl + calendlyUrlEnd, "_blank", "noopener");
                                }}
                            />
                        </div>
                    ))}
                    {/* Pad with empty slots for simple mode */}
                    {simpleMode &&
                        Array.from({ length: 3 - specialistsList.length }).map((_, i) => (
                            <div key={`empty-${i}`} className="w-1/3 px-2" />
                        ))}
                </div>
            </div>
            {/* Right arrow */}
            <button
                onClick={nextSlide}
                disabled={!canRight}
                className={`p-3 rounded-full ml-4 ${canRight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
            >
                <FaArrowRight size={20} />
            </button>
        </div>
    );
};

const ConnectWithSpecialistSection: React.FC = () => {
    const [selectedService, setSelectedService] = useState<CareType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [counsellors, setCounsellors] = useState<SpecialistInfo[]>([]);
    const [slideIndex, setSlideIndex] = useState(0);
    const [calendlyUrlEnd, setCalendlyUrlEnd] = useState<CalendlyUrlEndType | null>(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const openModal = (service: CareType) => {
        trackEvent({
            category: "User Actions",
            action: `Select Service – ${service}`,
            label: "Specialist Service",
        });
        setSelectedService(service);
        setSlideIndex(0);
        setIsModalOpen(true);
        setCalendlyUrlEnd(service === "individual" ? "/individual_care" : "/family-couples");
    };

    useEffect(() => {
        if (!isModalOpen || counsellors.length) return;

        setLoading(true);
        fetch("/api/users/get-counsellors")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load specialists");
                return res.json();
            })
            .then((data) => {
                const formatted: SpecialistInfo[] = data.counsellors.map((u: any) => ({
                    name: `${u.firstName} ${u.lastName}`,
                    role: u.role,
                    languages: "English, French, Spanish",
                    imageSrc: u.profileImageUrl || "/default-avatar.png",
                    linkedInUrl: u.linkedIn,
                    calendlyUrl: u.calendlyUrl,
                }));
                if (counsellors.length === 0) setCounsellors(formatted);
                setCounsellors(prev => [...prev, ...mockData]);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [isModalOpen, counsellors.length]);

    let specialistsList = counsellors;

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
        setSlideIndex(0);
        setCounsellors([]);
    };

    const totalSpecs = specialistsList.length;
    const maxSlideIndex = Math.max(0, totalSpecs - 3);

    const canLeft = slideIndex > 0;
    const canRight = slideIndex < maxSlideIndex;

    const prevSlide = () => {
        if (canLeft) setSlideIndex((prev) => prev - 1);
    };
    const nextSlide = () => {
        if (canRight) setSlideIndex((prev) => prev + 1);
    };

    return (
        <>
            {/* 1) Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 py-4">
                <ConnectWithSpecialistCard
                    title="Individual Care"
                    description="Personalized for specific needs but systemic/holistic…"
                    referenceDiscount="Refer someone for a 50% discount"
                    price="$119"
                    features={IndividualCareFeatures}
                    onClick={() => openModal("individual")}
                    isSelected={selectedService === "individual"}
                />

                <ConnectWithSpecialistCard
                    title="Family & Couples"
                    description="For couples of all ages and families…"
                    referenceDiscount="Refer a couple or family for a 60% discount"
                    price="$169"
                    features={FamilyCouplesCareFeatures}
                    onClick={() => openModal("family")}
                    isSelected={selectedService === "family"}
                />
            </div>

            {/* Modal */}
            {isModalOpen && selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white rounded-lg shadow-xl w-11/12 max-w-4xl p-6">
                        {/* Close */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                        >
                            <FaTimes size={20} />
                        </button>

                        <h2 className="text-2xl font-semibold mb-6 text-center">
                            {selectedService === "individual"
                                ? "Choose Your Individual Specialist"
                                : "Choose Your Family & Couples Specialist"}
                        </h2>

                        <SpecialistSlider
                            specialistsList={specialistsList}
                            slideIndex={slideIndex}
                            prevSlide={prevSlide}
                            nextSlide={nextSlide}
                            canLeft={canLeft}
                            canRight={canRight}
                            calendlyUrlEnd={calendlyUrlEnd}
                            totalSpecs={totalSpecs}
                            simpleMode={totalSpecs <= 3}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ConnectWithSpecialistSection;