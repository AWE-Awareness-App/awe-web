import { useEffect, useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { initializeAnalytics, trackPageView } from '../services/Analytics';
import GoogleAnalyticsProvider from '../services/GoogleAnalytics';
import UnderConstruction from './under-construction'; // Path to your maintenance page
import '../styles/globals.css';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    const [isUnderMaintenance, setIsUnderMaintenance] = useState(false);

    useEffect(() => {
        initializeAnalytics(GoogleAnalyticsProvider);

        const handlePageChange = () => {
            trackPageView(window.location.pathname);
        };
        handlePageChange();

        // Listen for future route changes
        const handlePopState = () => {
            handlePageChange();
        };
        window.addEventListener('popstate', handlePopState);

        // Clean up event listener
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') { // Ensure it's client-side
            const getQueryParam = (param: string) => {
                const urlParams = new URLSearchParams(window.location.search);
                return urlParams.get(param);
            };

            const envMaintenance = process.env.NEXT_PUBLIC_UNDER_MAINTENANCE === 'true';
            const queryMaintenance = getQueryParam('underMaintenance');
            setIsUnderMaintenance(queryMaintenance === 'true' ? true : queryMaintenance === 'false' ? false : envMaintenance);
        }
    }, []);

    return (
        <SessionProvider session={session}>
            {isUnderMaintenance
                ? <UnderConstruction />
                : <Component {...pageProps} />
            }
        </SessionProvider>
    );
};

export default MyApp;