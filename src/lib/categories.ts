import data from "./blog-categories.json";
import { getAllArticles, type Article } from "./articles";

/**
 * コラムのカテゴリ。定義は blog-categories.json（scripts/check-articles.mjs も同じファイルを読む）。
 * clusters は docs/editorial/topic-map.md の「群」。記事の category にはカテゴリ名（name）を入れる。
 */
export type BlogCategory = {
  slug: string;
  name: string;
  clusters: string[];
  /** 柱記事の slug（まだ無ければ null） */
  pillar: string | null;
  intro: string;
  /** 関連する支援内容 [表示名, パス] */
  service: [string, string];
};

export const CATEGORIES = data as BlogCategory[];

/** この本数以上の記事があるカテゴリだけ検索エンジンに出す（それ未満は noindex・サイトマップに載せない） */
export const MIN_INDEXABLE = 2;

export const getCategoryByName = (name: string) => CATEGORIES.find((c) => c.name === name);
export const getCategoryBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const categoryPath = (c: BlogCategory) => "/blog/category/" + c.slug;

/** カテゴリの記事（柱記事を先頭に、残りは新しい順） */
export function getCategoryArticles(c: BlogCategory): Article[] {
  const list = getAllArticles().filter((a) => a.category === c.name);
  return [...list.filter((a) => a.slug === c.pillar), ...list.filter((a) => a.slug !== c.pillar)];
}

/** 記事が1本以上あるカテゴリ（定義順） */
export const getActiveCategories = () =>
  CATEGORIES.map((c) => ({ category: c, articles: getCategoryArticles(c) })).filter((x) => x.articles.length > 0);
