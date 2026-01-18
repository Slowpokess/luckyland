export const SITE_CONFIG = {
  name: "Lucky Link LLC",
  domain: "lucky1ink.com",
  description:
    "Digital advertising & promotional services platform providing rewards-based engagement programs and marketing solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lucky1ink.com",
  urls: {
    legal: {
      terms: "/terms",
      privacy: "/privacy",
      rules: "/rules",
    },
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  company: {
    name: "Lucky Link LLC",
    state: "Wyoming",
    country: "USA",
    supportEmail: "support@lucky1ink.com",
    businessEmail: "seo@cchanse.life",
    phoneNumber: "+1 307 225 78 38",
  },
  seo: {
    ogImage: "/og-image.png",
  },
} as const;

export const NAVIGATION_CONFIG = {
  main: [
    { key: "home", href: "/" },
    { key: "services", href: "/services" },
    { key: "programs", href: "/programs" },
    { key: "about", href: "/about" },
    { key: "blog", href: "/blog" },
    { key: "contact", href: "/contact" },
  ],
  legal: [
    { key: "termsOfService", href: "/terms" },
    { key: "privacyPolicy", href: "/privacy" },
    { key: "officialRules", href: "/rules" },
  ],
} as const;

export const LOCALES = {
  en: "English",
  uk: "Українська",
} as const;

export type Locale = keyof typeof LOCALES;
