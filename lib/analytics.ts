// Analytics placeholders for GA4 and Meta Pixel
// Replace placeholder values with actual measurement IDs when ready

export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || "";

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export const analyticsConfig = {
  ga4: {
    enabled: !!process.env.NEXT_PUBLIC_GA4_ID,
    measurementId: GA4_MEASUREMENT_ID,
  },
  metaPixel: {
    enabled: !!process.env.NEXT_PUBLIC_META_PIXEL_ID,
    pixelId: META_PIXEL_ID,
  },
};

// Type declarations for global window objects
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Track page view
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA4_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Track custom event
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Meta Pixel track
export const trackMetaEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
};
