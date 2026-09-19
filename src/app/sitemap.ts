import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0 },
    { path: "/despre-noi", priority: 0.8 },
    { path: "/dotari-facilitati", priority: 0.8 },
    { path: "/galerie-foto", priority: 0.7 },
    { path: "/promotii", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
