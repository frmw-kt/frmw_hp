import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { getAllArticles } from "@/lib/articles";

export const metadata = {
  title: "マーケティングコラム | Framework",
  description: "マーケティングに役立つ知識・事例・戦略を発信するコラムページです。",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#C9A84C" }}>
              Marketing Column
            </p>
          </AnimateIn>
          <AnimateIn delay={1}>
            <h1
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              マーケティング
              <br />
              コラム
            </h1>
          </AnimateIn>
          <AnimateIn delay={2}>
            <p className="mt-6 text-white/50 text-base max-w-xl leading-relaxed">
              マーケティングに関する知識・戦略・事例を定期的に発信しています。
              実務で使えるノウハウをお届けします。
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-[#fafafa] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {articles.length === 0 ? (
            <p className="text-[#737373] text-center py-20">記事はまだありません。</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, i) => (
                <AnimateIn key={article.slug} delay={(i % 3) as 0 | 1 | 2 | 3 | 4 | 5}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group block bg-white border border-[#e5e5e5] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                  >
                    {/* Card header bar */}
                    <div className="h-1" style={{ background: "linear-gradient(90deg, #E2C16A 0%, #C9A84C 50%, #A8892E 100%)" }} />
                    <div className="p-8 flex flex-col h-[calc(100%-4px)]">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="text-xs font-medium px-3 py-1 rounded-full border"
                          style={{ color: "#C9A84C", borderColor: "#C9A84C33", background: "#C9A84C0D" }}
                        >
                          {article.category}
                        </span>
                        <span className="text-xs text-[#737373]">{article.readTime}で読める</span>
                      </div>
                      <h2 className="text-[#0a0a0a] font-bold text-lg leading-snug mb-3 group-hover:opacity-70 transition-opacity duration-200">
                        {article.title}
                      </h2>
                      <p className="text-[#737373] text-sm leading-relaxed flex-1">
                        {article.description}
                      </p>
                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-xs text-[#737373]">{formatDate(article.date)}</span>
                        <span className="text-xs font-medium flex items-center gap-1 transition-colors duration-200" style={{ color: "#C9A84C" }}>
                          続きを読む
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          )}
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
              コラムの内容についてのご質問や、自社のマーケティング課題についてのご相談はお気軽にどうぞ。
            </p>
          </AnimateIn>
          <AnimateIn delay={2}>
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
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
