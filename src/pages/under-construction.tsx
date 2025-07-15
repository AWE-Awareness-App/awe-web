import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { trackEvent } from "../services/Analytics";

const UnderConstruction: React.FC = () => {
    const handleLinkedInClick = (event: React.MouseEvent) => {
        event.preventDefault();
        trackEvent({ category: "User Actions", action: "Clicked Linked-In", label: "Homepage" });
        window.open('https://www.linkedin.com/company/awe-digital-wellness/', '_blank', 'noopener noreferrer');
    };

    const handleInstagramInClick = (event: React.MouseEvent) => {
        event.preventDefault();
        trackEvent({ category: "User Actions", action: "Clicked Instragram", label: "Homepage" });
        window.open('https://www.instagram.com/awe.wellness?fbclid=IwY2xjawLguOpleHRuA2FlbQIxMAABHqKlzmWU6hQFN0JuOdLwXH1H2If5UQ3M881d2JhnBOeIA0VK8EfZgxPmRKlC_aem_1eUNnYFNG09RYZeTKKbVIA', '_blank', 'noopener noreferrer');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
            <h1 className="text-6xl font-extrabold text-[#1168AD] mb-4">🚧 Under Construction 🚧</h1>
            <div className="flex items-center space-x-4 p-4 border-b-4 border-[#1168AD] mb-8">
                <img src="/images/awe-1.jpg" alt="Logo" className="h-20 w-20 rounded-full border-4 border-[#1168AD]" />
                <span className="text-3xl font-bold text-[#1168AD]">AWE | Awareness, Wellness, Enjoyment</span>
            </div>
            <p className="text-xl text-gray-800 mb-6">We're working hard to bring you something amazing. Stay tuned!</p>
            <p className="text-lg text-gray-800 mb-8">In the meantime, you can follow us on our socials!</p>
            <div className="flex space-x-8">
                <button
                    onClick={handleLinkedInClick}
                    className="text-[#1168AD] hover:text-blue-800 cursor-pointer"
                    aria-label="LinkedIn">
                    <FaLinkedin size={72} />
                </button>
                <button
                    onClick={handleInstagramInClick}
                    className="text-pink-500 hover:text-pink-700 cursor-pointer"
                    aria-label="Instagram">
                    <FaInstagram size={72} />
                </button>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hidden text-blue-600 hover:text-blue-800 cursor-pointer">
                    <FaFacebook size={48} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hidden text-blue-400 hover:text-blue-600 cursor-pointer">
                    <FaTwitter size={48} />
                </a>
            </div>
        </div>
    );
};

export default UnderConstruction;
