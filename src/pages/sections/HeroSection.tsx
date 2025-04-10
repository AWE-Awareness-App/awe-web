import { useRouter } from 'next/router';
import React from 'react';

interface HeroSectionProps {
  heroImageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroImageSrc }) => {
  const router = useRouter();

  const handleStartTest = () => {
    router.push('/online-wellness-test');
  };

  return (
    <section className="relative mx-auto max-w-6xl h-[600px]  flex flex-col text-center space-y-6">
      <img src={heroImageSrc} alt="Logo" className="absolute top-[100px] left-0 w-full h-[550px] z-0 overflow-hidden object-contain" />
      <div className="relative z-10 space-y-6">
        <h1 className="text-5xl font-extrabold text-white mb-4 text-center">
          Is Your Screen Time Taking Over?
        </h1>
        <p className="text-2xl text-white mb-8 text-center font-bold">
          Take our quick Digital Balance Test to find out.
        </p>
        <button
          onClick={handleStartTest}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full text-2xl shadow-lg transition-all duration-300">
          Start Test
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
