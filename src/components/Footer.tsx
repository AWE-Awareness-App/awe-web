import { trackEvent } from "@services/Analytics";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter, FaReddit, FaQuora } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const handleLinkedOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    trackEvent({ category: "User Actions", action: "Clicked Linked-In", label: "Homepage-Footer" });
    window.open('https://www.linkedin.com/company/awe-digital-wellness/', '_blank', 'noopener noreferrer');
  };

  const handleInstagramOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    trackEvent({ category: "User Actions", action: "Clicked Instragram", label: "Homepage-Footer" });
    window.open('https://www.instagram.com/awe.wellness?fbclid=IwY2xjawLguOpleHRuA2FlbQIxMAABHqKlzmWU6hQFN0JuOdLwXH1H2If5UQ3M881d2JhnBOeIA0VK8EfZgxPmRKlC_aem_1eUNnYFNG09RYZeTKKbVIA', '_blank', 'noopener noreferrer');
  };

  const handleYoutubeOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    trackEvent({ category: "User Actions", action: "Clicked YouTube", label: "Homepage-Footer" });
    window.open('https://www.youtube.com/@awe_digital_wellness', '_blank', 'noopener noreferrer');
  };

  const handleTwitterOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    trackEvent({ category: "User Actions", action: "Clicked Twitter", label: "Homepage-Footer" });
    window.open('https://x.com/awe_wellness', '_blank', 'noopener noreferrer');
  };

  const handleRedditOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    trackEvent({ category: "User Actions", action: "Clicked Reddit", label: "Homepage-Footer" });
    window.open('https://www.reddit.com/r/awe_digital_wellness/', '_blank', 'noopener noreferrer');
  };

  const handleQuoraOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    trackEvent({ category: "User Actions", action: "Clicked Quora", label: "Homepage-Footer" });
    window.open('https://www.reddit.com/r/awe_digital_wellness/', '_blank', 'noopener noreferrer');
  };

  const handleFacebookOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    trackEvent({ category: "User Actions", action: "Clicked Facebook", label: "Homepage-Footer" });
    window.open('https://www.facebook.com/p/AWE-Digital-Wellness-61566595893728/', '_blank', 'noopener noreferrer');
  };


  return (
    <footer className="bg-white text-gray-900 py-6 text-center">
      {/* Thin horizontal line */}
      <div className="border-t border-gray-800 mx-auto mb-4"></div>

      {/* Copyright text */}
      <p className="text-sm text-gray-800">All rights reserved © AWE | <a href="/privacy" className="cursor-pointer text-blue-800">Terms and conditions apply!</a></p>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={handleLinkedOnClick}
          className="text-[#1168AD] hover:text-blue-800 cursor-pointer transition"
          aria-label="LinkedIn">
          <FaLinkedin size={48} />
        </button>
        <button
          onClick={handleInstagramOnClick}
          className="text-pink-500 hover:text-pink-700 cursor-pointer transition"
          aria-label="Instagram">
          <FaInstagram size={48} />
        </button>
        <button
          onClick={handleYoutubeOnClick}
          className="text-red-600 hover:text-red-900 cursor-pointer transition"
          aria-label="YouTube">
          <FaYoutube size={48} />
        </button>
        <button
          onClick={handleTwitterOnClick}
          className="text-black hover:text-gray-800 cursor-pointer transition"
          aria-label="X">
          <FaXTwitter size={48} />
        </button>
        <button
          onClick={handleFacebookOnClick}
          className="text-blue-600 hover:text-blue-800 cursor-pointer transition"
          aria-label="Reddit">
          <FaFacebook size={48} />
        </button>
        <button
          onClick={handleRedditOnClick}
          className="text-orange-600 hover:text-orange-800 cursor-pointer transition"
          aria-label="Reddit">
          <FaReddit size={48} />
        </button>
        <button
          onClick={handleQuoraOnClick}
          className="hidden text-red-700 hover:text-red-900 cursor-pointer transition"
          aria-label="Quora">
          <FaQuora size={48} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
