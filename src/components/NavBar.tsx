import React, { useState } from "react";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

interface NavBarProps {
  logoPath: string;
  activePage: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoPath, activePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const healthcareOptions = [
    { name: "Specialist", href: "/specialist-services", key: "specialistServices" },
    { name: "Workshop", href: "/workshop-services", key: "workshopService" },
  ];

  const navItems = [
    { name: "Home", href: "/", key: "home" },
    { name: "Healthcare Services", href: "#", key: "healthcareServices", type: "service" },
    { name: "About Us", href: "/about-us", key: "aboutus" },
  ];

  return (
    <nav className="mx-auto max-w-6xl px-6 py-4 bg-gray-200 shadow-md rounded-xl md:mt-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logoPath} alt="Logo" className="h-10 w-10" />
          <span className="md:text-lg font-bold text-blue-900">AWE | Awareness, Wellness, Enjoyment</span>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-gray-700 text-2xl">
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-700">
          {navItems.map((item) => (
            item.type === "service" ? (
              <li key={item.key} className="relative">
                <button onClick={toggleDropdown} className={`flex items-center ${activePage === item.key ? "text-orange-500 font-bold" : "hover:text-gray-600"}`}>
                  {item.name}
                  <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                    {healthcareOptions.map((option) => (
                      <li key={option.key}>
                        <a href={option.href} className={`block px-4 py-2 ${activePage === option.key ? "text-orange-500 font-bold" : "hover:text-gray-600"}`}>
                          {option.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.key}>
                <a href={item.href} className={`flex items-center ${activePage === item.key ? "text-orange-500 font-bold" : "hover:text-gray-600"}`}>
                  {item.name}
                  {activePage === item.key && <MdCheckCircle className="ml-1" />}
                </a>
              </li>
            )
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="text-gray-700 hover:text-gray-900 cursor-pointer">EN ⌄</div>
          <FaRegUserCircle className="text-gray-700 text-xl hover:text-gray-900 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {navItems.map((item) => (
            item.type === "service" ? (
              <div key={item.key}>
                <button onClick={toggleDropdown} className={`block w-full text-left px-4 py-2 ${activePage === item.key ? "text-orange-500 font-bold" : "hover:text-gray-600"}`}>
                  {item.name}
                </button>
                {dropdownOpen && (
                  <ul className="mt-2 space-y-2 bg-white text-gray-700 shadow-lg rounded-lg w-full">
                    {healthcareOptions.map((option) => (
                      <li key={option.key}>
                        <a href={option.href} className={`block px-4 py-2 ${activePage === option.key ? "text-orange-500 font-bold" : "hover:text-gray-600"}`}>
                          {option.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a key={item.key} href={item.href} className={`block px-4 py-2 ${activePage === item.key ? "text-orange-500 font-bold" : "hover:text-gray-600"}`}>
                {item.name}
              </a>
            )
          ))}
          {/* Right Section for Mobile */}
          <div className="flex items-center space-x-4 px-4">
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">EN ⌄</div>
            <FaRegUserCircle className="text-gray-700 text-xl hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
