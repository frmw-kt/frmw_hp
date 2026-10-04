import Link from "next/link";
import {
  Breadcrumb,
  Button,
  Section,
  SystemDiagram,
  Cycle,
  CaseCards,
  Pricing,
  FaqList,
  ContactCTA,
  JsonLd,
} from "@/components/Marketing";
import DeliverableDiagram from "@/components/DeliverableDiagram";
import { getService, type Service } from "@/lib/services";
import { faqs } from "@/lib/faq";
import { isPublicCase } from "@/lib/cases";
import { SITE_URL } from "@/lib/site";
export default function ServiceDetail({
  slug,
  service,
  path,
  parent,
}: {
  slug?: string;
  service?: Service;
  path?: string;
  parent?: { name: string; path: string };
}) {
  const s = service ?? getService(slug!);
  const url = path ?? "/services/" + s.slug;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          description: s.intro,
          url: SITE_URL + url,
          provider: {
            "@type": "Organization",
            name: "Framework",
            url: SITE_URL,
          },
          areaServed: { "@type": "Country", name: "日本" },
        }}
      />
      <section className="m-service-hero">
        <div className="m-container">
          <Breadcrumb name={s.name} path={url} parent={parent} />
          <div className="m-split">
            <div>
              <p className="m-eyebrow">{s.en}</p>
              <p className="m-service-name">{s.name}</p>
              <h1>{s.headline}</h1>
              <p className="m-lead">{s.intro}</p>
              <div className="m-actions">
                <Button href={"/contact?service=" + encodeURIComponent(s.name)}>
                  この支援について相談する
                </Button>
              </div>
            </div>
            <dl className="m-glance">
              {[
                ["こんな方へ", s.audience],
                ["主な成果物", s.deliverable],
                ["期間・進め方", s.timeframe],
              ].map(([t, d]) => (
                <div key={t}>
                  <dt>{t}</dt>
                  <dd>{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <div className="m-container">
        <nav className="m-jump" aria-label="このページの内容">
          <a href="#scope">支援内容</a>
          <a href="#outputs">成果物</a>
          <a href="#workflow">進め方</a>
          <a href="#preparation">役割分担</a>
          <a href="#pricing">費用</a>
        </nav>
      </div>
      <Section
        id="scope"
        eyebrow="01 / SCOPE"
        title="課題を整理し、実行することを明確に"
        text={s.issue}
      >
        <div className="m-task-grid">
          {s.tasks.map((t, i) => (
            <article key={t.title} className="m-task-card">
              <span className="m-num">0{i + 1}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <div className="m-output">
                <span>OUTPUT</span>
                {t.output}
              </div>
            </article>
          ))}
        </div>
        {s.links && (
          <div className="m-related">
            {s.links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.name} →
              </Link>
            ))}
          </div>
        )}
      </Section>
      <Section
        id="outputs"
        eyebrow="02 / DELIVERABLES"
        title="成果物は、次の判断と実行のために"
        text={
          "主な成果物：" +
          s.deliverable +
          "。以下は構成イメージであり、実データや一律の納品仕様ではありません。"
        }
        tone="m-tint"
      >
        <DeliverableDiagram service={s} />
      </Section>
      <Section
        id="workflow"
        eyebrow="03 / WORKFLOW"
        title="開始時から、通常の運用まで"
        text={s.cadence}
      >
        <ol className="m-process">
          {s.stages.map((t, i) => (
            <li key={t.title}>
              <span className="m-num">0{i + 1}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </li>
          ))}
        </ol>
        <div className="m-section-bottom">
          {s.slug === "operations" ? <Cycle /> : <SystemDiagram />}
        </div>
      </Section>
      <Section
        id="preparation"
        eyebrow="04 / COLLABORATION"
        title="役割と範囲を、事前にそろえる"
        tone="m-tint"
      >
        <div className="m-split">
          <div>
            <h3 className="m-subheading">お客様にお願いすること</h3>
            <ul className="m-checklist">
              {s.prepare.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="m-small">
              資料やデータが不足している場合も、準備方法からご相談いただけます。
            </p>
          </div>
          <div>
            <h3 className="m-subheading">契約前に確認すること</h3>
            <ul className="m-checklist">
              {s.boundaries.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      {s.cases.some(isPublicCase) && (
        <Section eyebrow="05 / RELATED CASES" title="関連する支援事例">
          <CaseCards slugs={s.cases.filter(isPublicCase)} />
          <p className="m-small" style={{ marginTop: 20 }}>
            掲載事例は取り組みの一例です。サービスの全範囲を実施したことや同等の成果を保証するものではありません。
          </p>
        </Section>
      )}
      <Section
        id="pricing"
        eyebrow="06 / PRICING"
        title="内容に合わせて、個別にお見積もり"
        tone="m-tint"
      >
        <Pricing />
      </Section>
      <Section eyebrow="07 / FAQ" title="ご依頼前のよくある質問">
        <FaqList
          items={faqs.filter(
            (f) =>
              f.category === "料金・契約について" ||
              f.question === "無料相談では何を話しますか？",
          )}
        />
      </Section>
      <ContactCTA />
    </>
  );
}
