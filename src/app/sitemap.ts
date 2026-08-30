import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllArticles } from "@/lib/articles";
import { getAllCases } from "@/lib/cases";

const staticRoutes = [
  "",
  "/about",
  "/cases",
  "/contact",
  "/faq",
  "/blog",
  "/services/consulting",
  "/services/consulting/analysis",
  "/services/consulting/improvement",
  "/services/consulting/planning",
  "/services/consulting/research",
  "/services/consulting/strategy",
  "/services/operations",
  "/services/production",
  "/services/production/lp",
  "/services/production/web",
  "/services/adops",
  "/services/app-development",
  "/services/ai",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const caseEntries: MetadataRoute.Sitemap = getAllCases().map((c) => ({
    url: `${SITE_URL}/cases/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries, ...caseEntries];
}
