export type AnalyticsEvent = {
    category: string;
    action: string;
    label?: string;
};

class Analytics {
    private provider: any;

    constructor(provider: any) {
        this.provider = provider;
    }

    trackPageView(path: string) {
        this.provider.trackPageView(path);
    }

    trackEvent(event: AnalyticsEvent) {
        this.provider.trackEvent(event.category, event.action, event.label);
    }
}

// Singleton instance
let analyticsInstance: Analytics | null = null;

export const initializeAnalytics = (provider: any) => {
    analyticsInstance = new Analytics(provider);
};

export const trackPageView = (path: string) => {
    analyticsInstance?.trackPageView(path);
};

export const trackEvent = (event: AnalyticsEvent) => {
    analyticsInstance?.trackEvent(event);
};
