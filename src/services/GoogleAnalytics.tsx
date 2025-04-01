import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-DGCWX967K3";

const GoogleAnalyticsProvider = {
    initialize: () => {
        ReactGA.initialize(GA_MEASUREMENT_ID);
    },
    trackPageView: (path: string) => {
        ReactGA.event("page_view", { page_path: path });
    },
    trackEvent: (category: string, action: string, label?: string) => {
        ReactGA.event(action, {
            event_category: category,
            event_label: label,
        });
    },
};

export default GoogleAnalyticsProvider;
