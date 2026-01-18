import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luckylink.click";

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

  const localePrefixes = ["", "/uk"];

  const staticRoutes = localePrefixes.flatMap((prefix) =>
    routes.map((route) => ({
      url: `${baseUrl}${prefix}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );

  const blogRoutes = localePrefixes.flatMap((prefix) =>
    blogPosts.map((slug) => ({
      url: `${baseUrl}${prefix}${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...blogRoutes];
}
