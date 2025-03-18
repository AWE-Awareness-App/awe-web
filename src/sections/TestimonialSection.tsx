import React, { useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
    {
        name: "Thomas Austin",
        imageSrc: "/images/thomas.jpg",
        rating: 5,
        review:
            "Helped me achieve a new perspective on my place in the world. I was heavily struggling with ADHD, and the impact that it had on my life and career.",
    },
    {
        name: "Alena Park",
        imageSrc: "/images/alena.jpg",
        rating: 5,
        review: "Made me aware of my unconscious habits and their roots. This led me to change them into positive attitudes and actions.",
    },
    {
        name: "Jonathon Edison",
        imageSrc: "/images/jonathon.jpg",
        rating: 5,
        review: "My coaching saved my couple and allowed me to connect like never before.",
    },
    {
        name: "Tom Daniel",
        imageSrc: "/images/tom.jpg",
        rating: 5,
        review: "The attention and care was unparalleled. It gave me back my self-worth and sense of living.",
    },
];

const TestimonialSection: React.FC = () => {
    const [index, setIndex] = useState(0);

    // Handle navigation
    const prevSlide = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const nextSlide = () => setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

    return (
        <section className="mx-auto max-w-6xl py-12 px-8">
            {/* Section Title and Feedback Button */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                    Our <span className="underline decoration-blue-600">Happy Clients</span>
                </h2>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                    Share your feedback
                </button>
            </div>

            {/* Testimonials Slider */}
            <div className="flex items-center justify-center space-x-4">
                <button onClick={prevSlide} className="bg-blue-900 text-white p-3 rounded-full hover:bg-blue-700">
                    <FaArrowLeft />
                </button>

                <div className="overflow-hidden w-full max-w-4xl">
                    <div
                        className="flex space-x-6 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {testimonials.map((testimonial, i) => (
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

export default TestimonialSection;
