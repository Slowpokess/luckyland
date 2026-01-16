import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luckylink.com";

  const routes = [
    "",
    "/services",
    "/programs",
    "/rules",
    "/terms",
    "/privacy",
    "/about",
    "/contact",
    "/blog",
  ];

  const blogPosts = [
    "/blog/understanding-promotional-giveaways-vs-gambling",
    "/blog/best-practices-promotional-marketing-2024",
    "/blog/importance-alternative-method-entry-amoe",
    "/blog/measuring-success-promotional-campaigns",
    "/blog/building-trust-promotional-marketing",
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((slug) => ({
    url: `${baseUrl}${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
