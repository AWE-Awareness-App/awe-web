import DefaultLayout from '@components/DefaultLayout';
import ResetProgramSection from './section/ResetProgramsSection';
import ReadyToResetCard from '@/components/reset-programs/ReadyToResetCard';
import Head from 'next/head';

const ResetProgramsPage = () => {
  return (
    <DefaultLayout activePage="resetProgram">
      <Head>
        <title>Nervous System Reset Programs | AWE Digital Wellness</title>
        <meta name="description" content="Explore AWE’s nervous system reset programs: Free Reset, Starter Session, Reset Bundle, and Foundations. Live online (platform TBD), no camera required. Build calm, focus, and resilience." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Nervous System Reset Programs | AWE Digital Wellness" />
        <meta property="og:description" content="Explore AWE’s nervous system reset programs: Free Reset, Starter Session, Reset Bundle, and Foundations. Live online (platform TBD), no camera required. Build calm, focus, and resilience." />
        <meta property="og:url" content="https://awedigitalwellness.com//reset-programs" />
        {/* Add more Open Graph tags as needed, like og:image */}
      </Head>
      <div className="bg-white p-8 max-w-6xl mx-auto">
        <section className="py-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Find the Reset Program That’s Right for You</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From free sessions to personalized coaching<br />
            AWE offers simple ways to build nervous system resilience.<br />
            Live online. No camera required.
          </p>
        </section>
        <ResetProgramSection />
        <ReadyToResetCard />
      </div>
    </DefaultLayout>
  );
};

export default ResetProgramsPage;
