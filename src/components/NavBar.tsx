import { useSession, signOut } from "next-auth/react";
import React, { useState } from "react";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import AuthSection from "src/pages/sections/AuthSection";

interface NavBarProps {
  logoPath: string;
  activePage: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoPath, activePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const { data: session, status } = useSession();
  const isSignIn = status === "authenticated";
  console.log(isSignIn);

  const healthcareOptions = [
    {
      name: "Specialist Services",
      title: "Specialist Services",
      description: "Personalized support for your journey.",
      href: "/specialist-services",
      key: "specialistServices",
    },
    {
      name: "Corporate Services",
      title: "Corporate Services",
      description: "Tailored programs for remote-first teams.",
      href: "/corporate-services",
      key: "corporateServices",
    },
    {
      name: "Workshops",
      title: "Workshop Services",
      description: "Engaging sessions to help you navigate the digital world.",
      href: "/workshop-services",
      key: "workshopServices",
    },
  ];

  const navItems = [
    { name: "Home", href: "/", key: "home" },
    { name: "Services", href: "#", key: "healthcareServices", type: "service" },
    { name: "Blogs", href: "/blogs", key: "blogs" },
    { name: "About Us", href: "/about", key: "about" },
  ];

  const logo = (
    <a href="/" className="flex items-center space-x-3 group">
      <img
        src={logoPath}
        alt="AWE Logo"
        className="h-10 w-10 transition-transform group-hover:scale-105"
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">
          AWE
        </span>
        <span className="text-xs text-gray-500 -mt-1">
          Awareness • Wellness • Enjoyment
        </span>
      </div>
    </a>
  );

  const signInButtonSection = (
    <span>
      {isSignIn && (
        <button
          className="text-gray-700"
          type="button"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      )}
      {!isSignIn && (
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 transition-colors rounded-md whitespace-nowrap"
          type="button"
          onClick={() => setIsSignInModalOpen(true)}
        >
          Sign In
        </button>
      )}
    </span>
  );

  const signInModalSection = (
    <div>
      {isSignInModalOpen && (
        <AuthSection onClose={() => setIsSignInModalOpen(false)} />
      )}
    </div>
  );

  const languageAndSignInSection = (
    <div className="hidden md:flex items-center space-x-4">
      {signInButtonSection}
    </div>
  );

  var mobileBurgerMenuButton = (
    <button
      onClick={toggleMobileMenu}
      className="md:hidden p-2 -mr-2 text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
      aria-label="Toggle menu"
    >
      {mobileMenuOpen ? (
        <FaTimes className="text-xl" />
      ) : (
        <FaBars className="text-xl" />
      )}
    </button>
  );

  var desktopNavigation = (
    <ul className="hidden md:flex items-center space-x-4">
      {navItems.map((item) =>
        item.type === "service" ? (
          <li key={item.key} className="relative">
            <button
              onClick={toggleDropdown}
              className={`flex items-center px-4 py-2.5 mx-1 rounded-lg transition-colors ${
                activePage === item.key
                  ? "text-orange-600 bg-orange-50 font-medium"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {item.name}
              <svg
                className={`w-3 h-3 ms-2 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-80 p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 px-2">
                  Explore Our Services
                </h3>
                <div className="space-y-3">
                  {healthcareOptions.map((option) => (
                    <a
                      key={option.key}
                      href={option.href}
                      className={`block p-3 rounded-lg transition-colors ${
                        activePage === option.key
                          ? "bg-orange-50 border-l-4 border-orange-500"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <h4 className="font-medium text-gray-900">
                        {option.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {option.description}
                      </p>
                      <span className="inline-block mt-1 text-xs font-medium text-orange-600">
                        Learn more →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>
        ) : (
          <li key={item.key}>
            <a
              href={item.href}
              className={`flex items-center px-4 py-2.5 mx-1 rounded-lg transition-colors ${
                activePage === item.key
                  ? "text-orange-600 bg-orange-50 font-medium"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {item.name}
              {activePage === item.key && (
                <MdCheckCircle className="ml-1.5 text-orange-500" />
              )}
            </a>
          </li>
        )
      )}
    </ul>
  );

  var mobileNavigation = (
    <div
      className={`md:hidden ${
        mobileMenuOpen ? "" : "hidden"
      } bg-gray-50 shadow-md rounded-b-xl px-4 py-3`}
    >
      <div className="flex flex-col space-y-3">
        {navItems.map((item) =>
          item.type === "service" ? (
            <div key={item.key}>
              <button
                onClick={toggleDropdown}
                className={`flex items-center justify-between w-full text-left px-4 py-3 my-1 rounded-lg transition-colors ${
                  activePage === item.key
                    ? "text-orange-600 bg-orange-50 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>{item.name}</span>
                <svg
                  className={`w-3 h-3 ms-2 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="mt-2 bg-white text-gray-700 shadow-lg rounded-lg w-full p-3">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 px-2">
                    Our Services
                  </h3>
                  <div className="space-y-3">
                    {healthcareOptions.map((option) => (
                      <a
                        key={option.key}
                        href={option.href}
                        className={`block p-3 rounded-lg transition-colors ${
                          activePage === option.key
                            ? "bg-orange-50 border-l-4 border-orange-500"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <h4 className="font-medium text-gray-900">
                          {option.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {option.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <a
              key={item.key}
              href={item.href}
              className={`block px-4 py-2 ${
                activePage === item.key
                  ? "text-orange-500 font-bold"
                  : "hover:text-gray-600"
              }`}
            >
              {item.name}
            </a>
          )
        )}
        {/* ✅ Added Sign In/Sign Out in mobile */}
        <div className="mt-3">{signInButtonSection}</div>
      </div>
    </div>
  );

  return (
  <>
    {/* Navbar */}
    <nav
      className="relative w-full z-50"
    >
      <div className="flex items-center md:h-20 h-16 w-full bg-gray-50 shadow-md rounded-b-xl px-6 py-4">
        <div className="flex items-center w-full">
          {logo}
          <div className="hidden md:flex items-center ml-8">
            {desktopNavigation}
          </div>
        </div>
        <div className="flex items-center ml-auto">
          {languageAndSignInSection}
          {mobileBurgerMenuButton}
        </div>
      </div>
      {signInModalSection}
      {mobileNavigation}
    </nav>
    <div className="mt-0 md:mt-0"></div>
  </>
);

};

export default NavBar;
