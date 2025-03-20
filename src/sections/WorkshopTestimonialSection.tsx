import React, { useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const workshopTestimonials = [
    {
        name: "Vic Foster",
        imageSrc: "/images/vic-foster.jpg",
        rating: 5,
        review:
            "The workshop combines theory and practice and helped change my hardest habit. Thank you to the AWE team!",
    },
    {
        name: "Adri & Trevor",
        imageSrc: "/images/adri-trevor.jpg",
        rating: 4,
        review:
            "We reconnected like never before while welcoming changes and challenges with anger, resentment and reactivity. We now appreciate and admire each other.",
    },
    {
        name: "Sanjana Das",
        imageSrc: "/images/sanjana-das.jpg",
        rating: 5,
        review:
            "The workshop manages to free me from doing the same thing without result and regained my life and time with new purpose.",
    },
    {
        name: "Tom Daniel",
        imageSrc: "/images/tom-daniel.jpg",
        rating: 5,
        review:
            "Gained a new understanding of science, myself, my habits, my whys and the world.",
    },
];

const WorkshopTestimonialSection: React.FC = () => {
    const [index, setIndex] = useState(0);

    // Handle navigation
    const prevSlide = () => setIndex((prev) => (prev === 0 ? workshopTestimonials.length - 1 : prev - 1));
    const nextSlide = () => setIndex((prev) => (prev === workshopTestimonials.length - 1 ? 0 : prev + 1));

    return (
        <section className="mx-auto max-w-6xl py-12 px-8">
            {/* Workshop Testimonials Slider */}
            <div className="flex items-center justify-center space-x-4">
                <button onClick={prevSlide} className="bg-blue-900 text-white p-3 rounded-full hover:bg-blue-700">
                    <FaArrowLeft />
                </button>

                <div className="overflow-hidden w-full max-w-4xl">
                    <div
                        className="flex space-x-6 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {workshopTestimonials.map((testimonial, i) => (
                            <TestimonialCard key={i} {...testimonial} />
                        ))}
                    </div>
                </div>

                <button onClick={nextSlide} className="bg-blue-900 text-white p-3 rounded-full hover:bg-blue-700">
                    <FaArrowRight />
                </button>
            </div>

        </section>
    );
};

export default WorkshopTestimonialSection;
