import Link from "next/link";
import { notFound } from "next/navigation";
import { getCase, getAllCases } from "@/lib/cases";
import {
  Breadcrumb,
  Section,
  ContactCTA,
  CaseCards,
  pageMeta,
} from "@/components/Marketing";
import { ResultComparison } from "@/components/ResultComparison";
export function generateStaticParams() {
  return getAllCases().map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  return c
    ? pageMeta(c.company + "の支援事例", c.challenge, "/cases/" + slug)
    : {};
}
const serviceLink = (name: string) =>
  name.includes("コンサル")
    ? "/services/consulting"
    : name.includes("Webサイト")
      ? "/services/production/web"
      : name.includes("LP")
        ? "/services/production/lp"
        : name.includes("デザイン")
          ? "/services/production"
          : "/services/operations";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();
  return (
    <>
      <section className="m-service-hero">
        <div className="m-container">
          <Breadcrumb
            name={c.tag + "の事例"}
            path={"/cases/" + slug}
            parent={{ name: "支援事例", path: "/cases" }}
          />
          <p className="m-eyebrow">{c.tag} / CASE STUDY</p>
          <h1 style={{ fontSize: "clamp(27px,3.4vw,44px)" }}>{c.company}</h1>
          <div className="m-case-result">
            <strong>{c.highlight.value}</strong>
            <span>{c.highlight.label}</span>
          </div>
          <div className="m-case-overview">
            <span>業種：{c.industry}</span>
            <span>
              {c.url ? "予算" : "広告費"}：{c.budget}
            </span>
            <span>期間：{c.period}</span>
          </div>
          {c.url && (
            <a
              className="m-text-link"
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              公開サイトを見る（別タブ）↗
            </a>
          )}
        </div>
      </section>
      <Section
        eyebrow="01 / CHALLENGE"
        title="支援前の課題。"
        text={c.challenge}
      >
        <div className="m-related">
          {c.services.map((s) => (
            <Link key={s} href={serviceLink(s)}>
              {s} →
            </Link>
          ))}
        </div>
      </Section>
      <Section eyebrow="02 / APPROACH" title="実施した施策。" tone="m-tint">
        <ol className="m-process">
          {c.approach.map((a, i) => (
            <li key={a}>
              <span className="m-num">0{i + 1}</span>
              <p style={{ marginTop: 20 }}>{a}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section
        eyebrow="03 / BEFORE & AFTER"
        title={c.url ? "実装による変化。" : "支援前後の変化。"}
        text={c.period + "。掲載値を同じ指標ごとに比較しています。"}
      >
        <ResultComparison results={c.results} />
        <p className="m-small" style={{ marginTop: 24 }}>
          数値は掲載許諾済みの事例データです。増減率は丸めた表示を含み、ptは割合の差を示します。評価期間・対象・施策は事例により異なり、成果を保証するものではありません。
          {!c.url && "顧客情報を保護するため、社名等を匿名化しています。"}
        </p>
        {slug === "tax-accountant" && (
          <p className="m-small">
            支援期間と年間契約件数の集計期間は異なる指標です。年間件数を8ヶ月分の成果として読み替えないでください。
          </p>
        )}
        {slug === "remodeling" && (
          <p className="m-small">
            支援前の問い合わせは紹介のみ。広告導入後と流入条件が異なります。月商は基準月比、ROIは掲載値として表示し、比較可能な基準値のない指標は棒グラフにしていません。
          </p>
        )}
      </Section>
      <Section
        eyebrow="04 / MORE CASES"
        title="ほかの取り組みも見る。"
        tone="m-tint"
      >
        <CaseCards
          slugs={getAllCases()
            .filter((x) => x.slug !== slug)
            .slice(0, 3)
            .map((x) => x.slug)}
        />
      </Section>
      <ContactCTA />
    </>
  );
}
