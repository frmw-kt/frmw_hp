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
  } = {},
): Metadata {
  const image = opts.image ?? "/opengraph-image";
  return {
    title,
    description,
    alternates: { canonical: path },
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
}: {
  name: string;
  path: string;
  parent?: { name: string; path: string };
}) {
  const items = [
    { name: "ホーム", path: "/" },
    ...(parent ? [parent] : []),
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
  return (
    <section id={id} className={`m-section ${tone} ${className}`}>
      <div className="m-container">
        <div className="m-section-head">
          <p className="m-eyebrow">{eyebrow}</p>
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
export function ContactCTA() {
  return (
    <section className="m-cta">
      <div className="m-container m-split">
        <div>
          <p className="m-eyebrow">LET’S FRAME YOUR NEXT STEP</p>
          <h2>
            まだ整理できていない課題も、
            <br />
            そのままお聞かせください
          </h2>
          <p>
            現状・目標・予算感を伺い、必要な支援の範囲を一緒に整理します。
            <br />
            初回相談は無料です。
          </p>
        </div>
        <div>
          <Button />
          <p className="m-small">相談内容に合わせて進め方をご案内します。</p>
        </div>
      </div>
    </section>
  );
}

export function SystemDiagram({ compact = false }: { compact?: boolean }) {
  const steps = [
    ["01", "調査・戦略", "誰に、何を届けるか"],
    ["02", "施策設計", "優先順位と予算を決める"],
    ["03", "運用・制作", "広告と導線をつくる"],
    ["04", "計測・分析", "どこで離れるかを知る"],
  ];
  return (
    <figure className={`m-system ${compact ? "m-system-compact" : ""}`}>
      <figcaption>
        <span>FRAMEWORK METHOD</span>
        <span>戦略と実行を、ひとつの流れに</span>
      </figcaption>
      <ol className="m-system-grid">
        {steps.map(([n, t, d]) => (
          <li key={n}>
            <span className="m-num">{n}</span>
            <strong>{t}</strong>
            <small>{d}</small>
            <span className="m-node-arrow" aria-hidden="true">
              ↗
            </span>
          </li>
        ))}
      </ol>
      <div className="m-loop">
        <span aria-hidden="true">↶</span>
        <div>
          <strong>改善して、次の一手へ</strong>
          <span>検証した結果を、戦略・予算・制作に戻す</span>
        </div>
        <span className="m-loop-line" aria-hidden="true" />
      </div>
    </figure>
  );
}
export function Funnel() {
  const rows = [
    ["認知・流入", "広告 / SNS / SEO", "何が届いているか"],
    ["比較・検討", "LP / Webサイト", "何が伝わっているか"],
    ["問い合わせ・商談", "フォーム / CRM", "相談が成約につながるか"],
    ["成約・継続", "顧客分析 / 配信設計", "継続して選ばれるか"],
  ];
  return (
    <figure className="m-funnel">
      <figcaption>集客の先まで、つなげて見る。</figcaption>
      {rows.map(([t, s, q], i) => (
        <div key={t} className="m-funnel-row">
          <div className={`m-funnel-step m-funnel-step-${i}`}>
            <b>{t}</b>
          </div>
          <div>
            <strong>{s}</strong>
            <p>{q}</p>
          </div>
        </div>
      ))}
      <p className="m-small">
        流入数だけでなく、商談・成約・継続も評価指標に。
      </p>
    </figure>
  );
}
export function Cycle() {
  return (
    <div className="m-cycle">
      {[
        ["日次", "変化を捉える", "予算消化・配信エラー・急な数値変動"],
        ["週次", "仮説を試す", "訴求・クリエイティブ・LPの改善"],
        ["月次", "判断をそろえる", "KPIの振り返り・次月の施策と配分"],
      ].map(([t, h, d]) => (
        <div key={t}>
          <span>{t}</span>
          <h3>{h}</h3>
          <p>{d}</p>
        </div>
      ))}
      <p className="m-small">
        運用サイクルの設計例。実施頻度・報告範囲はプランにより異なります。
      </p>
    </div>
  );
}
export function Deliverables() {
  return (
    <div className="m-grid-3 m-artifacts">
      {[
        [
          "STRATEGY NOTE",
          "戦略を、判断できる形に",
          "ターゲット・提供価値・優先課題を整理。社内で共通の判断軸を持てる戦略書へ。",
        ],
        [
          "ACTION ROADMAP",
          "計画を、動ける形に",
          "施策ごとの担当・期限・指標を一覧化。今やることと後でやることを明確に。",
        ],
        [
          "REVIEW & NEXT",
          "数字を、次の一手に",
          "実施したこと、結果、考察、次の改善案をセットに。報告を意思決定につなげます。",
        ],
      ].map(([en, title, desc], i) => (
        <article key={en}>
          <div className="m-artifact">
            <div className="m-paper-top">
              <b>f.</b>
              <span>{en}</span>
              <span>01 / 03</span>
            </div>
            {i === 0 ? (
              <>
                <div className="m-paper-title">WHO → WHAT → HOW</div>
                <div className="m-paper-cells">
                  <span>顧客の課題</span>
                  <span>届ける価値</span>
                </div>
                <div className="m-paper-rule" />
                <div className="m-paper-line" />
                <div className="m-paper-line short" />
                <div className="m-paper-note">優先課題 → 施策へ</div>
              </>
            ) : i === 1 ? (
              <>
                <div className="m-roadmap-head">
                  <span>施策</span>
                  <span>設計</span>
                  <span>実行</span>
                  <span>検証</span>
                </div>
                {["計測整備", "広告改善", "LP改善"].map((s, k) => (
                  <div className="m-roadmap" key={s}>
                    <span>{s}</span>
                    <i
                      style={{
                        gridColumn: `${k + 2} / span ${k === 0 ? 1 : 2}`,
                      }}
                    />
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="m-review-label">施策と結果を照合</div>
                <svg viewBox="0 0 280 84" aria-hidden="true">
                  <path
                    d="M0 70H280M0 40H280M0 10H280"
                    stroke="#dedbd2"
                    fill="none"
                  />
                  <path
                    d="M5 65L50 49L95 55L140 29L185 35L230 15L275 20"
                    fill="none"
                    stroke="#8c6c24"
                    strokeWidth="3"
                  />
                  <circle cx="275" cy="20" r="4" fill="#8c6c24" />
                </svg>
                <div className="m-paper-note">結果 → 考察 → 次のアクション</div>
              </>
            )}
            <span className="m-sample-label">
              構成イメージ・実データではありません
            </span>
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </article>
      ))}
    </div>
  );
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
export function Pricing() {
  return (
    <div className="m-pricing">
      <div>
        <p className="m-eyebrow">SCOPE FIRST</p>
        <h3>
          必要な支援を整理して、
          <br />
          費用を組み立てます
        </h3>
        <p>
          戦略のみ、運用のみ、制作を含めた支援など、事業の状況に合わせて見積もります。
        </p>
        <Link href="/contact" className="m-text-link">
          支援範囲と費用を相談する ↗
        </Link>
      </div>
      <div>
        <ol className="m-price-factors">
          {[
            ["支援の範囲", "戦略 / 運用 / 制作 / 開発"],
            ["実施する量", "媒体数 / 制作本数 / ページ数"],
            ["期間・体制", "検証期間 / 定例 / 保守・改善"],
          ].map(([t, d]) => (
            <li key={t}>
              <strong>{t}</strong>
              <span>{d}</span>
            </li>
          ))}
        </ol>
        <p className="m-small">
          広告費・制作費・ツール利用料・追加対応の扱い、税込／税別、最低契約期間は見積もり時に明記します。
        </p>
      </div>
    </div>
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
export function ServiceCards() {
  return (
    <div className="m-service-list">
      {services.slice(0, 3).map((s, i) => (
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
