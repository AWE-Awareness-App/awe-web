import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 py-6 text-center">
      {/* Thin horizontal line */}
      <div className="border-t border-gray-800 mx-auto mb-4"></div>

      {/* Copyright text */}
      <p className="text-sm text-gray-800">All rights reserved © AWE | Terms and conditions apply!</p>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-4">
        <FaFacebook className="text-gray-900 hover:text-gray-600 transition" size={24} />
        <FaInstagram className="text-gray-900 hover:text-gray-600 transition" size={24} />
        <FaYoutube className="text-gray-900 hover:text-gray-600 transition" size={24} />
        <FaLinkedin className="text-gray-900 hover:text-gray-600 transition" size={24} />
        <FaTwitter className="text-gray-900 hover:text-gray-600 transition" size={24} />
      </div>
    </footer>
  );
};

export default Footer;
