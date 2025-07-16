import DefaultLayout from '@components/DefaultLayout';
import CorporateWellnessSection from './section/CorporateWellnessSection';

const CorporateServicesPage = () => {
  return (
    <DefaultLayout activePage="corporateServices">
      <div className="bg-white p-8 max-w-6xl mx-auto">
        <section className="py-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">AWE Corporate Wellness</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Tailored for hybrid or remote-first teams struggling with digital distraction, disconnection and disengagement.
            Boost performance by helping your employees reclaim their focus, motivation, and mental health.
          </p>
        </section>
        <CorporateWellnessSection />
      </div>
    </DefaultLayout>
  );
};

export default CorporateServicesPage;
