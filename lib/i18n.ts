export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      programs: "Programs",
      about: "About",
      blog: "Blog",
      contact: "Contact",
    },
    common: {
      readMore: "Read More",
      learnMore: "Learn More",
      contactUs: "Contact Us",
      getStarted: "Get Started",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      officialRules: "Official Rules",
    },
    footer: {
      description:
        "Digital advertising & promotional services platform providing rewards-based engagement programs.",
      company: "Company",
      legal: "Legal",
      support: "Support",
      followUs: "Follow Us",
      allRightsReserved: "All rights reserved.",
    },
  },
  ua: {
    nav: {
      home: "Головна",
      services: "Послуги",
      programs: "Програми",
      about: "Про нас",
      blog: "Блог",
      contact: "Контакти",
    },
    common: {
      readMore: "Читати далі",
      learnMore: "Дізнатися більше",
      contactUs: "Зв'язатися",
      getStarted: "Почати",
      privacyPolicy: "Політика конфіденційності",
      termsOfService: "Умови використання",
      officialRules: "Офіційні правила",
    },
    footer: {
      description:
        "Платформа цифрової реклами та рекламних послуг з програмами залучення на основі винагород.",
      company: "Компанія",
      legal: "Юридична інформація",
      support: "Підтримка",
      followUs: "Підписуйтесь",
      allRightsReserved: "Всі права захищені.",
    },
  },
} as const;

export type Locale = keyof typeof translations;
