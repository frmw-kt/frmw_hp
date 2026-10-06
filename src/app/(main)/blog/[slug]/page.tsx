import Link from "next/link";
import { notFound } from "next/navigation";
import { hasPublicCases } from "@/lib/cases";
import { getAllArticles, getArticle } from "@/lib/articles";
import {
  Breadcrumb,
  Section,
  ContactCTA,
  JsonLd,
  pageMeta,
} from "@/components/Marketing";
import { SITE_URL } from "@/lib/site";
/** 記事のカテゴリ → 関連する支援内容（記事末尾のリンク） */
const CATEGORY_SERVICE: Record<string, [string, string]> = {
  広告運用: ["運用代行", "/services/operations"],
  SNSマーケティング: ["施策立案", "/services/consulting/planning"],
  "制作・クリエイティブ": ["LP制作", "/services/production/lp"],
  コンテンツマーケティング: ["施策立案", "/services/consulting/planning"],
  Web集客: ["改善提案", "/services/consulting/improvement"],
  マーケティング戦略: ["戦略立案", "/services/consulting/strategy"],
};
const ogImage = (slug: string) => "/blog/" + slug + "/og-image";
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
  return a
    ? pageMeta(a.title, a.description, "/blog/" + slug, {
        image: ogImage(slug),
        article: { publishedTime: a.date, modifiedTime: a.updatedAt, section: a.category },
      })
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const service = CATEGORY_SERVICE[a.category] ?? ["運用代行", "/services/operations"];
  // 関連記事: 同じカテゴリの新しい順に最大3本（足りなければ他カテゴリの新しい記事で補う）
  const others = getAllArticles().filter((x) => x.slug !== slug);
  const related = [
    ...others.filter((x) => x.category === a.category),
    ...others.filter((x) => x.category !== a.category),
  ].slice(0, 3);
  const headings = [...a.content.matchAll(/<h2>(.*?)<\/h2>/g)].map((m) => m[1]);
  let i = 0;
  const body = a.content
    .replace(/<h2>/g, () => '<h2 id="section-' + ++i + '">')
    // 本文の図はタップで画像単体を開ける（スマホで拡大して読めるように）
    .replace(
      /<img ([^>]*?)src="(\/images\/blog\/[^"]+)"([^>]*)>/g,
      '<a href="$2" target="_blank" rel="noopener" class="article-figure-link"><img loading="lazy" decoding="async" $1src="$2"$3></a>',
    )
    // 表はスマホで横スクロールできるように囲む
    .replace(/<table>/g, '<div class="article-table-wrap"><table>')
    .replace(/<\/table>/g, "</table></div>");
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.description,
          image: [SITE_URL + ogImage(slug)],
          articleSection: a.category,
          inLanguage: "ja",
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
            {a.sources && a.sources.length > 0 && (
              <section className="article-sources" aria-labelledby="sources-heading">
                <h2 id="sources-heading">出典</h2>
                <ol>
                  {a.sources.map((s) => (
                    <li key={s.id} id={"source-" + s.id}>
                      {s.publisher}「
                      <a href={s.url} target="_blank" rel="noopener noreferrer">
                        {s.title}
                      </a>
                      」（{s.accessedAt} 確認）
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </div>
      </article>
      {related.length > 0 && (
        <Section eyebrow="RELATED ARTICLES" title="関連するコラム">
          <div className="m-grid-3">
            {related.map((r) => (
              <article className="m-task-card" key={r.slug}>
                <p className="m-eyebrow">{r.category}</p>
                <h3 style={{ fontSize: 19, lineHeight: 1.6 }}>
                  <Link href={"/blog/" + r.slug}>{r.title}</Link>
                </h3>
                <p style={{ marginTop: 12, fontSize: 14 }}>{r.description}</p>
              </article>
            ))}
          </div>
        </Section>
      )}
      <Section
        eyebrow="RELATED SUPPORT"
        title="実行について相談したい方へ"
        tone="m-tint"
      >
        <div className="m-related">
          <Link href={service[1]}>{service[0]}の支援内容 →</Link>
          {hasPublicCases && <Link href="/cases">支援事例を見る →</Link>}
          <Link href="/blog">ほかのコラムを見る →</Link>
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}
