export const SITE_CONFIG = {
  name: "Lucky Link LLC",
  domain: "luckylink.click",
  description:
    "Digital advertising & promotional services platform providing rewards-based engagement programs and marketing solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://luckylink.click",
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
    supportEmail: "sup@luckylink.click",
    businessEmail: "sup@luckylink.click",
    phoneNumbers: [
      { label: "United States", value: "+13072257838" },
      { label: "Ukraine", value: "+380660011300" },
    ],
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
