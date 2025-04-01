import React, { useState, useEffect } from "react";
import TestimonialCard from "@components/TestimonialCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
    { name: "Thomas Austin", imageSrc: "/images/thomas.png", rating: 5, review: "Helped me achieve a new perspective..." },
    { name: "Alena Park", imageSrc: "/images/alena.png", rating: 5, review: "Made me aware of my unconscious habits..." },
    { name: "Jonathon Edison", imageSrc: "/images/jonathon.png", rating: 5, review: "My coaching saved my couple..." },
    { name: "Tom Daniel", imageSrc: "/images/tom.png", rating: 5, review: "The attention and care was unparalleled..." },
];

const TestimonialSection: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(2); // Default to 2 for mobile

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(4); // Show 4 on large screens
            } else if (window.innerWidth >= 768) {
                setItemsPerView(3); // Show 3 on medium screens
            } else {
                setItemsPerView(2); // Show 2 on small screens
            }
        };

        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);
        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    // Handle navigation
    const prevSlide = () => setIndex((prev) => (prev === 0 ? testimonials.length - itemsPerView : prev - 1));
    const nextSlide = () => setIndex((prev) => (prev >= testimonials.length - itemsPerView ? 0 : prev + 1));

    return (
        <section className="mx-auto max-w-6xl py-12 px-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                    Our <span className="underline decoration-blue-600">Happy Clients</span>
                </h2>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                    Share your feedback
                </button>
            </div>

            <div className="flex items-center justify-center space-x-4">
                <button onClick={prevSlide} className="bg-blue-900 text-white p-3 rounded-full hover:bg-blue-700">
                    <FaArrowLeft />
                </button>

                <div className="overflow-hidden w-full max-w-4xl">
                    <div
                        className="flex space-x-6 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * (100 / itemsPerView)}%)` }}
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
