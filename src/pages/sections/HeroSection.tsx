import React from 'react';

interface HeroSectionProps {
  logoPath: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ logoPath }) => {
  return (
    <section className="mx-auto max-w-6xl py-6 flex items-center justify-center">
      <img src={logoPath} alt="Logo" />
    </section>
  );
};

export default HeroSection;
