import Link from "next/link";
import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs, getFaqCategories } from "@/lib/faq";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description:
    "サービス内容・料金・契約の流れ・adopsについて、Frameworkによくいただくご質問にお答えします。",
};

const GOLD = "#C9A84C";

export default function FaqPage() {
  const categories = getFaqCategories();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden py-32 md:py-40">
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimateIn>
            <Link href="/" className="inline-flex items-center gap-2 text-white/30 text-sm hover:text-white transition-colors mb-10">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              トップへ戻る
            </Link>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">FAQ</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-2xl">
              よくあるご質問
            </h1>
            <p className="text-white/40 text-base leading-relaxed max-w-xl">
              サービス内容・料金・ご依頼の流れについて、よくいただくご質問にお答えします。
              こちらにない内容は、お問い合わせフォームからお気軽にご質問ください。
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ by category */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {categories.map((category, ci) => (
            <AnimateIn key={category} delay={(Math.min(ci + 1, 5)) as 1 | 2 | 3 | 4 | 5}>
              <p className="text-xs font-mono uppercase tracking-[0.2em] mb-3" style={{ color: GOLD }}>
                {String(ci + 1).padStart(2, "0")}
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-[#0a0a0a] mb-6">{category}</h2>
              <FaqAccordion items={faqs.filter((f) => f.category === category)} />
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] bg-dot-grid py-36 border-t border-white/8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <span
              className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] mb-8"
              style={{ border: "1px solid rgba(201,168,76,0.2)", color: GOLD }}
            >
              Contact
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              疑問が解消しない場合は
              <br />
              <span className="text-white/30">お気軽にご質問ください</span>
            </h2>
            <p className="text-white/35 text-base mb-12 max-w-md mx-auto leading-relaxed">
              初回相談は無料です。現状と課題をお聞きし、最適なプランをご提案します。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)" }}
            >
              無料相談を申し込む
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
