import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const specialists = [
  {
    name: "Marc Ritter",
    role: "Addiction Coach and Therapist",
    description: "Specializing in internet addiction recovery and holistic wellness strategies.",
    image: "/images/MarcRitter.png",
    linkedInUrl: "https://www.linkedin.com/in/marc-d-ritter-58112a82/"
  },
  {
    name: "Christian Dominique",
    role: "Addiction Coach, Family and Couples",
    description: "Helps clients find balance in their digital and personal lives.",
    image: "/images/ChristianDominique.png",
    linkedInUrl: "https://www.linkedin.com/in/dominiquemba/"
  },
  {
    name: "Dr. Clara Dawkins",
    role: "Medical Doctor and Teacher",
    description: "Leads engaging workshops on mindfulness and technology use.",
    image: "/images/ClaraDawkins.png",
    linkedInUrl: "https://www.linkedin.com/in/clara-dawkins-8726394/"
  },
  {
    name: "Dr. Bonnie Lee",
    role: "Psychologist and Teacher",
    description: "Empowers audiences with insights on overcoming digital dependency.",
    image: "/images/BonnieLee.png",
    linkedInUrl: undefined
  }
];

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedInUrl?: string;
}

const TeamMemberCard = ({ name, role, description, image, linkedInUrl }: TeamMemberCardProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-72 h-72 rounded-lg overflow-hidden mb-6 border border-gray-200 shadow-md">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
    <p className="text-blue-600 font-medium text-sm mt-1">{role}</p>
    <p className="text-gray-600 mt-2 text-sm max-w-xs">{description}</p>
    
    {linkedInUrl && (
      <a 
        href={linkedInUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
        aria-label={`Connect with ${name} on LinkedIn`}
      >
        <FaLinkedin className="mr-1" size={42} />
      </a>
    )}
  </div>
);

const SpecialistsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals guiding your journey.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {specialists.map((specialist, index) => (
            <TeamMemberCard key={index} {...specialist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
