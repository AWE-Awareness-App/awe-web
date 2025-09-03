import DefaultLayout from '@components/DefaultLayout';
import FreeResetSection from './section/FreeResetSection';
import Head from 'next/head';

export default function FreeResetPage() {
  return (
    <DefaultLayout activePage="resetProgram">
        <Head>
            <title>Free Reset | 25-Minute Guided Nervous System Reset Program | AWE Digital Wellness</title>
            <meta name="description" content="Join AWE’s Free Reset. A 25-minute guided nervous system reset session. Live online, no camera or mic required. Reduce stress and restore focus. Free." />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="Free Reset | 25-Minute Guided Nervous System Reset Program | AWE Digital Wellness" />
            <meta property="og:description" content="Join AWE’s Free Reset. A 25-minute guided nervous system reset session. Live online, no camera or mic required. Reduce stress and restore focus. Free." />
            <meta property="og:url" content="https://awedigitalwellness.com/free-reset" />
        </Head>
      <FreeResetSection />
    </DefaultLayout>
  );
}