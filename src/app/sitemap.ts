import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllArticles } from "@/lib/articles";
import { getAllCases, hasPublicCases } from "@/lib/cases";

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
  "/services/app-development",
  "/services/ai",
];

// 更新日（lastModified）は実際に内容が変わった日だけを出す。ビルド日時を入れると全ページが毎回更新されたように見えるため、
// 記事以外の固定ページには付けない（/blog だけは最新記事の日付）。
export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const newestArticle = articles
    .map((a) => a.updatedAt ?? a.date)
    .sort()
    .at(-1);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes
    .filter((path) => hasPublicCases || path !== "/cases")
    .map((path) => ({
    url: `${SITE_URL}${path}`,
    ...(path === "/blog" && newestArticle ? { lastModified: new Date(newestArticle) } : {}),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.updatedAt ?? a.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const caseEntries: MetadataRoute.Sitemap = getAllCases().map((c) => ({
    url: `${SITE_URL}/cases/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries, ...caseEntries];
}
