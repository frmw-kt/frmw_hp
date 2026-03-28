import Link from "next/link";
import { notFound } from "next/navigation";
import AnimateIn from "@/components/AnimateIn";
import { getArticle, getAllArticles } from "@/lib/articles";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Framework`,
    description: article.description,
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors duration-200 mb-8"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              コラム一覧に戻る
            </Link>
          </AnimateIn>
          <AnimateIn delay={1}>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs font-medium px-3 py-1 rounded-full border"
                style={{ color: "#C9A84C", borderColor: "#C9A84C44", background: "#C9A84C11" }}
              >
                {article.category}
              </span>
              <span className="text-xs text-white/30">{formatDate(article.date)}</span>
              <span className="text-xs text-white/30">{article.readTime}で読める</span>
            </div>
          </AnimateIn>
          <AnimateIn delay={2}>
            <h1
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}
            >
              {article.title}
            </h1>
          </AnimateIn>
          <AnimateIn delay={3}>
            <p className="mt-5 text-white/50 text-sm leading-relaxed">
              {article.description}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1" style={{ background: "linear-gradient(90deg, #E2C16A 0%, #C9A84C 50%, #A8892E 100%)" }} />

      {/* Content */}
      <section className="bg-[#fafafa] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateIn>
            <h2 className="text-white font-bold text-2xl mb-4">
              マーケティングについて相談する
            </h2>
          </AnimateIn>
          <AnimateIn delay={1}>
            <p className="text-white/50 text-sm mb-8 leading-relaxed">
              この記事の内容についてのご質問や、自社への適用についてのご相談はお気軽にどうぞ。
            </p>
          </AnimateIn>
          <AnimateIn delay={2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#0a0a0a] px-8 py-4 rounded-full transition-opacity duration-200 hover:opacity-80"
                style={{ background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)" }}
              >
                無料相談はこちら
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/blog"
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                他のコラムを読む
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
