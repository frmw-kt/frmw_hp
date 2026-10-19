import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { categoryPath, getActiveCategories } from "@/lib/categories";
import {
  Breadcrumb,
  Section,
  ContactCTA,
  pageMeta,
} from "@/components/Marketing";
import { ArticleCard, CategoryNav } from "./BlogParts";
export const metadata = pageMeta(
  "マーケティングコラム",
  "広告運用、LP制作、SNS、コンテンツ戦略について。施策や支援会社の選び方を検討するための基本を解説します。",
  "/blog",
);
/** カテゴリごとに一覧に出す本数（残りはカテゴリページで見る） */
const PER_CATEGORY = 6;
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
          <CategoryNav />
        </div>
      </section>
      {getActiveCategories().map(({ category: c, articles }, i) => (
        <Section
          key={c.slug}
          eyebrow={"CATEGORY " + String(i + 1).padStart(2, "0")}
          title={c.name}
          text={c.intro}
          tone={i % 2 ? "m-tint" : ""}
        >
          <div className="m-grid-3">
            {articles.slice(0, PER_CATEGORY).map((a) => (
              <ArticleCard key={a.slug} a={a} pillar={a.slug === c.pillar} />
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link className="m-text-link" href={categoryPath(c)}>
              {c.name}の記事一覧（{articles.length}本）→
            </Link>
          </p>
        </Section>
      ))}
      <p className="m-container m-small" style={{ padding: "24px 0" }}>
        全{getAllArticles().length}本
      </p>
      <ContactCTA />
    </>
  );
}
