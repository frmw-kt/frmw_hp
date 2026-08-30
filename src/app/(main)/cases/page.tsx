"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { cases } from "@/lib/cases";

const GOLD = "#C9A84C";

const overallStats = [
  { value: "8,000万円", unit: "/月", label: "運用広告費" },
  { value: "50+",       unit: "",    label: "支援実績" },
  { value: "100%",      unit: "",    label: "継続率" },
  { value: "-68%",      unit: "",    label: "平均CPA改善" },
];

const industries = ["すべて", "不動産", "スクール", "リフォーム・外壁塗装", "士業", "EC・D2C"];

export default function CasesPage() {
  const [active, setActive] = useState("すべて");

  const filtered = active === "すべて" ? cases : cases.filter((c) => c.tag === active);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] text-white py-32 border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <span
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] mb-8"
              style={{ border: "1px solid rgba(201,168,76,0.2)", color: GOLD }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: `linear-gradient(135deg, #E2C16A, #A8892E)` }} />
              Case Studies
            </span>
            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight mb-8">
              数字で語る、
              <br />
              <span className="text-white/30">支援の実績。</span>
            </h1>
            <p className="text-white/40 text-base max-w-lg leading-relaxed">
              月間8,000万円超の広告費を運用してきた経験をもとに、各社の課題に合わせた戦略で確実な成果を出してきました。
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Overall Stats ── */}
      <section className="bg-[#111] border-b border-white/8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/8">
            {overallStats.map((s, i) => (
              <AnimateIn key={s.label} delay={(i + 1) as 1 | 2 | 3 | 4} className="py-12 px-8 text-center">
                <p className="text-4xl md:text-5xl font-semibold tracking-tight mb-1" style={{ color: GOLD }}>
                  {s.value}
                  {s.unit && <span className="text-2xl">{s.unit}</span>}
                </p>
                <p className="text-xs text-white/25 uppercase tracking-[0.2em] mt-2">{s.label}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cases ── */}
      <section className="bg-[#fafafa] py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <AnimateIn className="flex items-end justify-between mb-12 pb-6 border-b border-[#e5e5e5]">
            <div>
              <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
                Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                支援事例
              </h2>
            </div>
            <p className="hidden md:block text-sm text-[#737373] max-w-xs text-right leading-relaxed">
              業種・規模・課題はさまざまですが、<br />
              いずれも数字で成果を出してきました。
            </p>
          </AnimateIn>

          {/* Filter */}
          <AnimateIn className="flex flex-wrap gap-2 mb-12">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setActive(ind)}
                className={`text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                  active === ind
                    ? "text-black border-transparent font-semibold"
                    : "border-[#e5e5e5] text-[#737373] hover:border-[#0a0a0a]/30 hover:text-[#0a0a0a]"
                }`}
                style={active === ind ? { background: `linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)` } : {}}
              >
                {ind}
              </button>
            ))}
          </AnimateIn>

          {/* Case cards */}
          <div className="space-y-6">
            {filtered.map((c, i) => (
              <AnimateIn key={c.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <Link
                  href={`/cases/${c.slug}`}
                  className="group block border border-[#e5e5e5] rounded-2xl overflow-hidden hover:border-[#0a0a0a]/20 hover:shadow-md transition-all duration-300"
                >
                  {/* Card header */}
                  <div className="bg-[#0a0a0a] px-8 pt-8 pb-7">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <span
                          className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border mb-4 inline-block"
                          style={{ border: "1px solid rgba(201,168,76,0.25)", color: GOLD }}
                        >
                          {c.tag}
                        </span>
                        <p className="text-white/40 text-sm">{c.company}</p>
                      </div>
                      {/* Highlight metric */}
                      <div className="text-right shrink-0">
                        <p className="text-4xl font-bold tracking-tight" style={{ color: GOLD }}>{c.highlight.value}</p>
                        <p className="text-xs text-white/30 mt-1">{c.highlight.label}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-8">
                    <p className="text-[11px] text-[#737373] uppercase tracking-[0.15em] mb-3 font-medium">課題</p>
                    <p className="text-sm text-[#0a0a0a] leading-relaxed max-w-2xl">{c.challenge}</p>

                    <div className="mt-6 flex flex-wrap gap-1.5 items-center">
                      {c.services.map((s) => (
                        <span key={s} className="text-[11px] px-2.5 py-1 rounded-full border border-[#e5e5e5] text-[#737373]">
                          {s}
                        </span>
                      ))}
                      <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a0a0a]">
                        詳しく見る
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Note ── */}
      <section className="bg-[#fafafa] pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs text-[#737373]/50 leading-relaxed">
            ※ 掲載の事例はクライアントの許諾を得た上で、一部情報を匿名化して掲載しています。成果は各社の状況・期間によって異なります。
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-32 border-t border-white/8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <span
              className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] mb-8"
              style={{ border: "1px solid rgba(201,168,76,0.2)", color: GOLD }}
            >
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              貴社の課題、<br />
              <span className="text-white/30">一度ご相談ください。</span>
            </h2>
            <p className="text-white/35 text-base mb-12 max-w-md mx-auto leading-relaxed">
              業種・規模・予算に関わらず、まずは現状をお聞きした上で最適なご提案をします。初回相談は無料です。
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
