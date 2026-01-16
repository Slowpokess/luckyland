export const SITE_CONFIG = {
  name: "Lucky Link LLC",
  domain: "luckylink.com",
  description:
    "Digital advertising & promotional services platform providing rewards-based engagement programs and marketing solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://luckylink.com",
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
    supportEmail: "support@luckylink.com",
    businessEmail: "business@luckylink.com",
  },
  seo: {
    ogImage: "/og-image.png",
  },
} as const;

export const NAVIGATION_CONFIG = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Programs", href: "/programs" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Official Rules", href: "/rules" },
  ],
} as const;

export const LOCALES = {
  en: "English",
  ua: "Українська",
} as const;

export type Locale = keyof typeof LOCALES;
