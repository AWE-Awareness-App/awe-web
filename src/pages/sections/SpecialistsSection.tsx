import React, { useState } from "react";
import SpecialistCard from "@components/SpecialistCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const specialists = [
    {
        name: "Marc Ritter",
        role: "Addiction Coach and Trainer",
        languages: "English, German",
        imageSrc: "/images/MarcRitter.png",
        linkedInUrl: "https://www.linkedin.com/in/marc-d-ritter-58112a82/",
    },
    {
        name: "Christian Dominique",
        role: "Addiction Coach, Family and Couples",
        languages: "English, French, Spanish",
        imageSrc: "/images/ChristianDominique.png",
        linkedInUrl: "https://www.linkedin.com/in/dominiquemba/",
    },
    {
        name: "Dr. Clara Dawkins",
        role: "Medical Doctor and Teacher",
        languages: "English, Spanish",
        imageSrc: "/images/ClaraDawkins.png",
        linkedInUrl: "https://www.linkedin.com/in/clara-dawkins-8726394/",
    },
    {
        name: "Dr. Bonnie Lee",
        role: "Psychologist and Teacher",
        languages: "English, Mandarin",
        imageSrc: "/images/BonnieLee.png",
        linkedInUrl: undefined
    },
];

const SpecialistsSection: React.FC = () => {
    const [index, setIndex] = useState(0);
    const showNavigation = specialists.length > 4;

    // Handle navigation
    const prevSlide = () => setIndex((prev) => (prev === 0 ? specialists.length - 1 : prev - 1));
    const nextSlide = () => setIndex((prev) => (prev === specialists.length - 1 ? 0 : prev + 1));

    return (
        <section className="py-12 px-8 ">
            {/* Section Title */}
            <h2 className="text-blue-800 font-extrabold text-6xl text-center py-8">Meet our Specialists</h2>
            <p className="text-center text-gray-700 mb-8">
                Our specialists can coach or train you. Contact us for a consultation or to join our team.
            </p>

            {/* Specialists Slider */}
            <div className="flex items-center justify-center space-x-4">
                {showNavigation && (
                    <button onClick={prevSlide} className="bg-blue-900 text-white p-3 rounded-full hover:bg-blue-700">
                        <FaArrowLeft />
                    </button>
                )}

                <div className="overflow-hidden w-full max-w-4xl">
                    <div
                        className="grid grid-cols-1 md:grid-cols-4 gap-4 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {specialists.map((specialist, i) => (
                            <SpecialistCard key={i} {...specialist} />
                        ))}
                    </div>
                </div>

                {showNavigation && (
                    <button onClick={nextSlide} className="bg-blue-900 text-white p-3 rounded-full hover:bg-blue-700">
                        <FaArrowRight />
                    </button>
                )}
            </div>
        </section>
    );
};


export default SpecialistsSection;
