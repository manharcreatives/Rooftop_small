import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rooftophaveli.com";
  const routes = [
    "",
    "/about",
    "/menu",
    "/gallery",
    "/reviews",
    "/reservation",
    "/events",
    "/contact",
    "/admin",
    "/privacy-policy"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
