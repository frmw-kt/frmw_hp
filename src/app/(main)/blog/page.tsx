import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import {
  Breadcrumb,
  Section,
  ContactCTA,
  pageMeta,
} from "@/components/Marketing";
export const metadata = pageMeta(
  "マーケティングコラム",
  "広告運用、LP制作、SNS、コンテンツ戦略について。施策や支援会社の選び方を検討するための基本を解説します。",
  "/blog",
);
export default function Page() {
  return (
    <>
      <section className="m-service-hero">
        <div className="m-container">
          <Breadcrumb name="コラム" path="/blog" />
          <p className="m-eyebrow">MARKETING COLUMN</p>
          <h1>
            次の判断に役立つ、
            <br />
            マーケティングの基本
          </h1>
          <p className="m-lead">
            施策を考えるとき、支援会社を選ぶとき。押さえておきたい視点をまとめました。
          </p>
        </div>
      </section>
      <Section eyebrow="ARTICLES" title="コラム一覧">
        <div className="m-grid-3">
          {getAllArticles().map((a) => (
            <article className="m-task-card" key={a.slug}>
              <p className="m-eyebrow">{a.category}</p>
              <h2 style={{ fontSize: 21 }}>
                <Link href={"/blog/" + a.slug}>{a.title}</Link>
              </h2>
              <p style={{ marginTop: 15 }}>{a.description}</p>
              <p className="m-small" style={{ marginTop: 20 }}>
                公開：<time dateTime={a.date}>{a.date}</time>
              </p>
              <Link className="m-text-link" href={"/blog/" + a.slug}>
                記事を読む →
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}
