import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

interface NavBarProps {
  logoPath: string;
  activePage: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoPath, activePage }) => {
  const navItems = [
    { name: "Home", href: "/", key: "home" },
    { name: "Healthcare Services", href: "/services", key: "services" },
    { name: "Analytics", href: "/analytics", key: "analytics" },
    { name: "FAQs", href: "/faqs", key: "faqs" },
  ];


  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-xl bg-gray-200 px-8 py-4 shadow-md my-6">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src={logoPath} alt="Logo" className="h-10 w-10" />
        <span className="text-lg font-bold text-blue-900">AWE | Awareness, Wellness, Enjoyment</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-6 text-gray-700">
        {navItems.map((item) => (
          <li key={item.key}>
            <a
              href={item.href}
              className={`flex items-center ${activePage === item.key ? "text-orange-500 font-bold" : "hover:text-gray-600"
                }`}
            >
              {item.name}
              {activePage === item.key && <MdCheckCircle className="ml-1" />}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <div className="text-gray-700 hover:text-gray-900 cursor-pointer">EN ⌄</div>
        {/* Login Icon */}
        <FaRegUserCircle className="text-gray-700 text-xl hover:text-gray-900 cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavBar;
