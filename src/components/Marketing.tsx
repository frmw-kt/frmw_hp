import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import {
  publicCases as cases,
  caseSummaries,
  type CaseStudy,
} from "@/lib/cases";
import { services, processSteps } from "@/lib/services";
import { SITE_URL } from "@/lib/site";
import { MethodDiagram, RhythmDiagram, ConsultingDeliverables } from "@/components/diagrams/Diagrams";

/**
 * ページごとのメタデータ。openGraph / twitter はレイアウトの値を丸ごと置き換えるため、
 * type・siteName・locale・画像・カード種別もここで必ず指定する（指定しないと共有時に画像やタイトルが欠ける）。
 */
export function pageMeta(
  title: string,
  description: string,
  path: string,
  opts: {
    /** OGP画像のパス（既定はサイト共通の /opengraph-image） */
    image?: string;
    /** 記事ページ用 */
    article?: { publishedTime: string; modifiedTime?: string; section?: string };
    /** 検索結果に出さない（リンクはたどらせる） */
    noindex?: boolean;
  } = {},
): Metadata {
  const image = opts.image ?? "/opengraph-image";
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Framework",
      locale: "ja_JP",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(opts.article
        ? {
            type: "article",
            publishedTime: opts.article.publishedTime,
            modifiedTime: opts.article.modifiedTime ?? opts.article.publishedTime,
            section: opts.article.section,
          }
        : { type: "website" }),
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function Breadcrumb({
  name,
  path,
  parent,
  parents,
}: {
  name: string;
  path: string;
  parent?: { name: string; path: string };
  /** 階層が2段以上のとき（ホームの次から順に） */
  parents?: { name: string; path: string }[];
}) {
  const items = [
    { name: "ホーム", path: "/" },
    ...(parents ?? (parent ? [parent] : [])),
    { name, path },
  ];
  return (
    <>
      <nav aria-label="パンくず" className="m-breadcrumb">
        {items.map((x, i) => (
          <span key={x.path}>
            {i > 0 && <span aria-hidden="true"> / </span>}
            {i === items.length - 1 ? (
              <span aria-current="page">{x.name}</span>
            ) : (
              <Link href={x.path}>{x.name}</Link>
            )}
          </span>
        ))}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((x, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: x.name,
            item: SITE_URL + x.path,
          })),
        }}
      />
    </>
  );
}
export function Section({
  eyebrow,
  title,
  text,
  children,
  id,
  tone = "",
  className = "",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  children: ReactNode;
  id?: string;
  tone?: string;
  className?: string;
}) {
  // 「01 / SCOPE」は番号と英字ラベルに分けて表示する
  const numbered = eyebrow.match(/^(\d+)\s*\/\s*(.+)$/);
  return (
    <section id={id} className={`m-section ${tone} ${className}`}>
      <div className="m-container">
        <div className="m-section-head">
          <p className="m-eyebrow">
            {numbered ? (
              <>
                <b>{numbered[1]}</b>
                {numbered[2]}
              </>
            ) : (
              eyebrow
            )}
          </p>
          <h2>{title}</h2>
          {text && <p className="m-lead">{text}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
export function Button({
  href = "/contact",
  children = "無料相談を申し込む",
  secondary = false,
}: {
  href?: string;
  children?: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`m-button ${secondary ? "m-button-secondary" : ""}`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
/** トップページと同じ、横に流れる英字の帯（飾りなので読み上げない） */
export function Ticker({
  text,
  tone = "dark",
}: {
  text: string;
  tone?: "dark" | "purple";
}) {
  const items = Array.from({ length: 12 }, () => text);
  return (
    <div className={`m-ticker m-ticker-${tone}`} aria-hidden="true">
      <div>
        {[...items, ...items].map((t, i) => (
          <span key={i}>{t} ✳&nbsp;</span>
        ))}
      </div>
    </div>
  );
}
export function ContactCTA() {
  return (
    <section className="m-cta">
      <Ticker text="LET’S MOVE YOUR BUSINESS." tone="purple" />
      <div className="m-container m-cta-inner">
        <p className="m-eyebrow">LET’S TALK</p>
        <span className="m-cta-mark" aria-hidden="true">
          ↗
        </span>
        <h2>
          まだ整理できていない課題も、
          <br />
          <em>そのままお聞かせください。</em>
        </h2>
        <p>
          現状・目標・予算感を伺い、必要な支援の範囲を一緒に整理します。
          <br />
          マーケティングのご相談は何度でも無料です。
        </p>
        <Link href="/contact" className="m-cta-button">
          <small>まずは、課題の整理から。</small>
          無料で相談する
          <b aria-hidden="true">↗</b>
        </Link>
      </div>
    </section>
  );
}

export function SystemDiagram({ business = false }: { compact?: boolean; business?: boolean }) {
  return <MethodDiagram business={business} />;
}
export function Cycle() {
  return <RhythmDiagram />;
}
export function Deliverables() {
  return <ConsultingDeliverables />;
}
export function Process() {
  return (
    <ol className="m-process">
      {processSteps.map((s, i) => (
        <li key={s.title}>
          <span className="m-num">0{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
export function FaqList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="m-faq">
      {items.map((f) => (
        <details key={f.question}>
          <summary>
            <span>Q.</span>
            {f.question}
          </summary>
          <p>{f.answer}</p>
        </details>
      ))}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
    </div>
  );
}
/** 事例の見出し: 「何の数値か」のラベル＋値＋支援範囲チップ。カードと事例詳細で共用。 */
export function CaseHighlight({
  highlight: h,
}: {
  highlight: CaseStudy["highlight"];
}) {
  return (
    <div className="m-case-result">
      {h.metric && <span className="m-case-metric">{h.metric}</span>}
      <strong>{h.value}</strong>
      {h.points ? (
        <ul
          className={h.flow ? "m-case-points is-flow" : "m-case-points"}
          aria-label={h.flow ? "支援の流れ" : "主な成果物"}
        >
          {h.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      ) : (
        h.label && <span>{h.label}</span>
      )}
    </div>
  );
}
export function CaseCards({
  slugs = cases.slice(0, 3).map((c) => c.slug),
}: {
  slugs?: string[];
}) {
  return (
    <div className="m-grid-3">
      {slugs
        .map((slug) => cases.find((c) => c.slug === slug))
        .filter((c) => !!c)
        .map((c) => (
          <article className="m-case-card" key={c.slug}>
            <div className="m-case-top">
              <span>{c.tag}</span>
              <span aria-hidden="true">↗</span>
            </div>
            <Link href={`/cases/${c.slug}`}>
              <h3>{c.company}</h3>
              <CaseHighlight highlight={c.highlight} />
            </Link>
            <dl>
              <dt>課題</dt>
              <dd>{caseSummaries[c.slug]?.challenge ?? c.challenge}</dd>
              <dt>施策</dt>
              <dd>{caseSummaries[c.slug]?.approach ?? c.approach[0]}</dd>
            </dl>
            <p className="m-small">
              {c.period === "非公開" ? "期間非公開" : c.period} /{" "}
              {c.budget === "非公開"
                ? "予算非公開"
                : c.url
                  ? c.budget
                  : `広告費 ${c.budget}`}
            </p>
            <Link className="m-text-link" href={`/cases/${c.slug}`}>
              {c.results.length > 0 ? "施策と成果を見る →" : "詳しく見る →"}
            </Link>
          </article>
        ))}
    </div>
  );
}
export function ServiceCards({ slugs = ["consulting", "operations", "production"] }: { slugs?: string[] }) {
  return (
    <div className="m-service-list">
      {services.filter((s) => slugs.includes(s.slug)).map((s, i) => (
        <article key={s.slug}>
          <span className="m-num">0{i + 1}</span>
          <div>
            <p className="m-eyebrow">{s.en}</p>
            <h3>
              <Link href={`/services/${s.slug}`}>{s.name}</Link>
            </h3>
            <p>{s.intro}</p>
            <div className="m-service-detail">
              <span>主な成果物</span>
              <strong>{s.deliverable}</strong>
            </div>
            <div className="m-service-detail">
              <span>進め方・期間</span>
              <span>{s.timeframe}</span>
            </div>
            {cases.some((c) => c.slug === s.cases[0]) && (
              <div className="m-service-detail">
                <span>関連事例</span>
                <Link className="m-text-link" href={"/cases/" + s.cases[0]}>
                  {cases.find((c) => c.slug === s.cases[0])?.tag}の支援事例 →
                </Link>
              </div>
            )}
          </div>
          <Link
            className="m-round-link"
            href={`/services/${s.slug}`}
            aria-label={`${s.name}を詳しく見る`}
          >
            ↗
          </Link>
        </article>
      ))}
    </div>
  );
}
