import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import { getCase, getAllCases } from "@/lib/cases";
import { SITE_NAME } from "@/lib/site";

const GOLD = "#C9A84C";
const GOLD_DARK = "#A8892E";

export function generateStaticParams() {
  return getAllCases().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return {
    title: `${c.company}の支援事例｜${c.highlight.label}${c.highlight.value} | ${SITE_NAME}`,
    description: c.challenge,
  };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] text-white py-32 border-b border-white/8">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateIn>
            <Link
              href="/cases"
              className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors duration-200 mb-8"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              支援事例一覧に戻る
            </Link>
          </AnimateIn>
          <AnimateIn delay={1}>
            <span
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] mb-6"
              style={{ border: "1px solid rgba(201,168,76,0.2)", color: GOLD }}
            >
              {c.tag}
            </span>
          </AnimateIn>
          <AnimateIn delay={2}>
            <h1 className="text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold leading-[1.25] tracking-tight mb-4">
              {c.company}
            </h1>
          </AnimateIn>
          <AnimateIn delay={3}>
            <div className="flex items-baseline gap-3">
              <p className="text-5xl font-bold tracking-tight" style={{ color: GOLD }}>{c.highlight.value}</p>
              <p className="text-sm text-white/40">{c.highlight.label}（{c.period}）</p>
            </div>
          </AnimateIn>
          {c.url && (
            <AnimateIn delay={4} className="mt-8">
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/60 border border-white/15 rounded-full px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors duration-200"
              >
                公開サイトを見る
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </AnimateIn>
          )}
        </div>
      </section>

      <div className="h-1" style={{ background: "linear-gradient(90deg, #E2C16A 0%, #C9A84C 50%, #A8892E 100%)" }} />

      {/* Overview */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateIn className="grid sm:grid-cols-3 gap-6 mb-16 pb-10 border-b border-[#e5e5e5]">
            <div>
              <p className="text-[11px] text-[#737373] uppercase tracking-[0.15em] mb-2">業種</p>
              <p className="text-sm text-[#0a0a0a] font-medium">{c.industry}</p>
            </div>
            <div>
              <p className="text-[11px] text-[#737373] uppercase tracking-[0.15em] mb-2">広告費</p>
              <p className="text-sm text-[#0a0a0a] font-medium">{c.budget}</p>
            </div>
            <div>
              <p className="text-[11px] text-[#737373] uppercase tracking-[0.15em] mb-2">支援期間</p>
              <p className="text-sm text-[#0a0a0a] font-medium">{c.period}</p>
            </div>
          </AnimateIn>

          {/* Challenge */}
          <AnimateIn delay={1} className="mb-16">
            <p className="text-[11px] font-mono mb-3" style={{ color: GOLD_DARK }}>Challenge</p>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-5">課題</h2>
            <p className="text-sm text-[#737373] leading-[2] max-w-2xl">{c.challenge}</p>
          </AnimateIn>

          {/* Approach */}
          <AnimateIn delay={2} className="mb-16">
            <p className="text-[11px] font-mono mb-3" style={{ color: GOLD_DARK }}>Approach</p>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-6">実施した施策</h2>
            <ul className="space-y-4">
              {c.approach.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#0a0a0a] leading-relaxed">
                  <span
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "linear-gradient(135deg, #E2C16A, #A8892E)" }}
                  >
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </AnimateIn>

          {/* Results */}
          <AnimateIn delay={3} className="mb-16">
            <p className="text-[11px] font-mono mb-3" style={{ color: GOLD_DARK }}>Results</p>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-6">成果</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {c.results.map((r) => (
                <div key={r.label} className="bg-[#fafafa] border border-[#e5e5e5] rounded-xl p-6">
                  <p className="text-xs text-[#737373] mb-4">{r.label}</p>
                  <div className="flex items-end gap-3 mb-3">
                    <div>
                      <p className="text-xs text-[#737373]/60 mb-0.5">Before</p>
                      <p className="text-sm text-[#0a0a0a] font-medium">{r.before}</p>
                    </div>
                    <svg className="w-4 h-4 text-[#737373]/30 mb-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div>
                      <p className="text-xs text-[#737373]/60 mb-0.5">After</p>
                      <p className="text-sm text-[#0a0a0a] font-medium">{r.after}</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold" style={{ color: GOLD_DARK }}>{r.delta}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Services used */}
          <AnimateIn delay={4}>
            <p className="text-[11px] text-[#737373] uppercase tracking-[0.15em] mb-3 font-medium">使用サービス</p>
            <div className="flex flex-wrap gap-2">
              {c.services.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-[#e5e5e5] text-[#737373]">
                  {s}
                </span>
              ))}
            </div>
          </AnimateIn>

          <p className="mt-16 text-xs text-[#737373]/50 leading-relaxed">
            ※ 掲載の事例はクライアントの許諾を得た上で、一部情報を匿名化して掲載しています。成果は各社の状況・期間によって異なります。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-28 border-t border-white/8">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="text-white font-bold text-2xl md:text-3xl mb-4">
              貴社の課題、一度ご相談ください
            </h2>
          </AnimateIn>
          <AnimateIn delay={1}>
            <p className="text-white/50 text-sm mb-8 leading-relaxed">
              業種・規模・予算に関わらず、まずは現状をお聞きした上で最適なご提案をします。初回相談は無料です。
            </p>
          </AnimateIn>
          <AnimateIn delay={2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <Link href="/cases" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                他の事例を見る
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
