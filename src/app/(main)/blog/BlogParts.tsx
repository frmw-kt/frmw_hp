import Link from "next/link";
import type { Article } from "@/lib/articles";
import { categoryPath, getActiveCategories, getCategoryByName } from "@/lib/categories";

/** コラム一覧・カテゴリページの記事カード。柱記事には「まず読む記事」を付ける */
export function ArticleCard({ a, pillar = false }: { a: Article; pillar?: boolean }) {
  const c = getCategoryByName(a.category);
  return (
    <article className="m-task-card">
      <p className="m-eyebrow">
        {pillar ? "まず読む記事" : c ? <Link href={categoryPath(c)}>{a.category}</Link> : a.category}
      </p>
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
  );
}

/** カテゴリの一覧（記事のあるカテゴリだけ）。current は表示中のカテゴリの slug */
export function CategoryNav({ current }: { current?: string }) {
  return (
    <nav aria-label="コラムのカテゴリ" className="m-cat-nav">
      <Link href="/blog" aria-current={current ? undefined : "page"}>
        すべて
      </Link>
      {getActiveCategories().map(({ category: c, articles }) => (
        <Link key={c.slug} href={categoryPath(c)} aria-current={current === c.slug ? "page" : undefined}>
          {c.name}（{articles.length}）
        </Link>
      ))}
    </nav>
  );
}
