import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categoryPath,
  getActiveCategories,
  getCategoryArticles,
  getCategoryBySlug,
  MIN_INDEXABLE,
} from "@/lib/categories";
import {
  Breadcrumb,
  Section,
  ContactCTA,
  JsonLd,
  pageMeta,
} from "@/components/Marketing";
import { SITE_URL } from "@/lib/site";
import { ArticleCard, CategoryNav } from "../../BlogParts";

// 記事のあるカテゴリだけページを作る（記事のないカテゴリは 404）
export const dynamicParams = false;
export function generateStaticParams() {
  return getActiveCategories().map(({ category }) => ({ category: category.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const c = getCategoryBySlug((await params).category);
  if (!c) return {};
  return pageMeta(c.name + "のコラム", c.intro, categoryPath(c), {
    noindex: getCategoryArticles(c).length < MIN_INDEXABLE,
  });
}
export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const c = getCategoryBySlug((await params).category);
  if (!c) notFound();
  const articles = getCategoryArticles(c);
  if (!articles.length) notFound();
  const path = categoryPath(c);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: c.name + "のコラム",
          description: c.intro,
          url: SITE_URL + path,
          inLanguage: "ja",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: articles.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: SITE_URL + "/blog/" + a.slug,
              name: a.title,
            })),
          },
        }}
      />
      <section className="m-service-hero">
        <div className="m-container">
          <Breadcrumb name={c.name} path={path} parent={{ name: "コラム", path: "/blog" }} />
          <p className="m-eyebrow">MARKETING COLUMN</p>
          <h1>{c.name}</h1>
          <p className="m-lead">{c.intro}</p>
          <CategoryNav current={c.slug} />
        </div>
      </section>
      <Section eyebrow="ARTICLES" title={c.name + "の記事（" + articles.length + "本）"}>
        <div className="m-grid-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} a={a} pillar={a.slug === c.pillar} />
          ))}
        </div>
        <p style={{ marginTop: 32 }}>
          関連する支援内容：
          <Link className="m-text-link" href={c.service[1]}>
            {c.service[0]}
          </Link>
        </p>
      </Section>
      <ContactCTA />
    </>
  );
}
