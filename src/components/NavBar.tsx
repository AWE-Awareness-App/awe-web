import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

interface NavBarProps {
  logoPath: string;
  activePage: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoPath, activePage }) => {
  const healthcareOptions = [
    { name: "Specialist", href: "/specialist-services", key: "specialistServices" },
    { name: "Workshop", href: "/workshop-services", key: "workshopService" }
  ];

  const navItems = [
    { name: "Home", href: "/", key: "home" },
    { name: "Healthcare Services", href: "#", key: "healthcareServices", type: "service" },
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
        {navItems.map((item) => {
          // If the item is "Healthcare Services", render the dropdown
          if (item.type === "service") {
            return (
              <li key={item.key} className="relative group">
                <a
                  href={item.href}
                  className={`flex items-center ${activePage === item.key ? "text-orange-500 font-bold" : "hover:text-gray-600"}`}
                >
                  {item.name}
                </a>
                {/* Dropdown */}
                <ul className="absolute left-0 mt-2 space-y-2 bg-white text-gray-700 shadow-lg rounded-lg w-48 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                  {healthcareOptions.map((option) => (
                    <li key={option.key}>
                      <a
                        href={option.href}
                        className={`block px-4 py-2 ${activePage === option.key ? "text-orange-500 font-bold" : "hover:text-gray-600"}`}
                      >
                        {option.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          // Otherwise, render a regular nav item
          return (
            <li key={item.key}>
              <a
                href={item.href}
                className={`flex items-center ${activePage === item.key ? "text-orange-500 font-bold" : "hover:text-gray-600"}`}
              >
                {item.name}
                {activePage === item.key && <MdCheckCircle className="ml-1" />}
              </a>
            </li>
          );
        })}
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
