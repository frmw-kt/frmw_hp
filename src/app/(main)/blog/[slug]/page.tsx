import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles, getArticle } from "@/lib/articles";
import {
  Breadcrumb,
  Section,
  ContactCTA,
  JsonLd,
  pageMeta,
} from "@/components/Marketing";
import { SITE_URL } from "@/lib/site";
export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  return a ? pageMeta(a.title, a.description, "/blog/" + slug) : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const service = slug.includes("landing")
    ? ["LP制作", "/services/production/lp"]
    : slug.includes("content")
      ? ["施策立案", "/services/consulting/planning"]
      : ["運用代行", "/services/operations"];
  const headings = [...a.content.matchAll(/<h2>(.*?)<\/h2>/g)].map((m) => m[1]);
  let i = 0;
  const body = a.content.replace(
    /<h2>/g,
    () => '<h2 id="section-' + ++i + '">',
  );
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.description,
          datePublished: a.date,
          dateModified: a.updatedAt ?? a.date,
          author: {
            "@type": "Organization",
            name: "Framework",
            url: SITE_URL + "/about",
          },
          publisher: {
            "@type": "Organization",
            name: "Framework",
            url: SITE_URL,
          },
          mainEntityOfPage: SITE_URL + "/blog/" + slug,
        }}
      />
      <article>
        <header className="m-service-hero">
          <div className="m-container m-article-width">
            <Breadcrumb
              name="記事"
              path={"/blog/" + slug}
              parent={{ name: "コラム", path: "/blog" }}
            />
            <p className="m-eyebrow">{a.category}</p>
            <h1 style={{ fontSize: "clamp(26px,3vw,40px)" }}>{a.title}</h1>
            <p className="m-lead">{a.description}</p>
            <p className="m-small" style={{ marginTop: 20 }}>
              公開：<time dateTime={a.date}>{a.date}</time> / 更新：
              <time dateTime={a.updatedAt ?? a.date}>
                {a.updatedAt ?? a.date}
              </time>
              <br />
              編集：
              <Link href="/about" className="m-text-link">
                Framework
              </Link>
            </p>
          </div>
        </header>
        <div className="m-section">
          <div className="m-container m-article-width">
            <nav className="m-article-toc" aria-label="記事の目次">
              <h2>この記事の内容</h2>
              <ol>
                {headings.map((h, k) => (
                  <li key={h}>
                    <a href={"#section-" + (k + 1)}>{h}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
        </div>
      </article>
      <Section
        eyebrow="RELATED SUPPORT"
        title="実行について相談したい方へ。"
        tone="m-tint"
      >
        <div className="m-related">
          <Link href={service[1]}>{service[0]}の支援内容 →</Link>
          <Link href="/cases">支援事例を見る →</Link>
          <Link href="/blog">ほかのコラムを見る →</Link>
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}
