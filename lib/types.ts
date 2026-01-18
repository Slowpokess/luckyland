export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  locale: "en" | "uk";
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  outcomes: string[];
  engagementModel: string[];
}

export interface Program {
  id: string;
  name: string;
  description: string;
  eligibility: string;
  dates: string;
  status: "active" | "upcoming" | "ended";
  rulesLink: string;
}

export interface Locale {
  code: "en" | "uk";
  name: string;
}
