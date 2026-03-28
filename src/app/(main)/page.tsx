import Link from "next/link";
import type { Metadata } from "next";
import HeroBackground from "@/components/HeroBackground";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Framework | マーケティング支援",
  description: "コンサルティング・運用代行・制作・スクールの4つのサービスでマーケティングを支援します。",
};

const stats = [
  { value: "+400%", label: "平均売上高" },
  { value: "-80%",  label: "平均CPA" },
  { value: "100%",  label: "継続率" },
  { value: "+50%",  label: "平均ROI" },
];

const services = [
  {
    number: "01",
    title: "マーケティングコンサルティング",
    description: "調査分析から戦略立案・施策設計・改善提案まで。データに基づく一気通貫のコンサルティングで、売上・リードを最大化します。",
    href: "/services/consulting",
  },
  {
    number: "02",
    title: "運用代行",
    description: "広告・SNS・SEO・アフィリエイト・CRMの運用を丸ごと代行。専門チームが継続的に成果を追い求めます。",
    href: "/services/operations",
  },
  {
    number: "03",
    title: "制作",
    description: "LP・サイト・バナー・動画など、成果につながるクリエイティブを制作。ブランドを強化するビジュアルを届けます。",
    href: "/services/production",
  },
  {
    number: "04",
    title: "スクール",
    description: "現役プロが教える実践的なマーケティングスクール。個人の学習から企業研修まで幅広く対応します。",
    href: "/services/school",
  },
];

const reasons = [
  {
    number: "01",
    title: "戦略から実行まで一貫支援",
    description: "単なる施策提案にとどまらず、戦略立案から実行・改善まで一気通貫でサポート。社内リソース不足を補いながら成果を出します。",
  },
  {
    number: "02",
    title: "データドリブンなアプローチ",
    description: "感覚ではなくデータと分析に基づいた意思決定で、確実に成果につながる施策を実行。ROIを常に可視化します。",
  },
  {
    number: "03",
    title: "サービスのワンストップ対応",
    description: "コンサル・運用・制作・教育を社内で完結。複数の外部委託先を管理するコスト・手間を解消します。",
  },
];

const process = [
  { step: "01", title: "ヒアリング",   desc: "貴社の現状・課題・目標を丁寧にお聞きします。" },
  { step: "02", title: "提案",         desc: "課題に最適なサービスと施策プランをご提案します。" },
  { step: "03", title: "実行",         desc: "専門チームが迅速かつ丁寧に施策を実行します。" },
  { step: "04", title: "改善",         desc: "データを基に継続的に検証・改善サイクルを回します。" },
];

const marqueeItems = ["Consulting", "Operations", "Production", "School", "Strategy", "Analytics", "Creative", "Growth"];

const GOLD = "#C9A84C";
const GOLD_DARK = "#A8892E";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden min-h-screen flex items-center">
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/70" />
        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="hero-line">
            <span className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.25em]"
              style={{ border: "1px solid rgba(201,168,76,0.2)", color: `${GOLD}` }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)" }} />
              Marketing Support
            </span>
          </div>
          <h1 className="mt-8 mb-0">
            <div className="hero-line text-[clamp(2rem,7.2vw,5.8rem)] font-bold leading-[1.13] tracking-tight text-white">
              マーケティングで、
            </div>
            <div className="hero-line text-[clamp(2rem,7.2vw,5.8rem)] font-bold leading-[1.13] tracking-tight bg-gradient-to-r from-white/60 via-white/25 to-white/5 bg-clip-text text-transparent">
              ビジネスを
            </div>
            <div className="hero-line text-[clamp(2rem,7.2vw,5.8rem)] font-bold leading-[1.13] tracking-tight text-white">
              加速させる。
            </div>
          </h1>
          <div className="hero-line mt-10">
            <p className="text-white/40 text-base max-w-xs leading-relaxed">
              コンサルティングから運用代行・制作・スクールまで。
              貴社の課題に合わせた最適なマーケティング支援を提供します。
            </p>
          </div>
          <div className="hero-line mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black px-7 py-3.5 rounded-full transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)" }}>
              無料相談を申し込む
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="#services"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 px-2 py-3.5 underline-draw">
              サービスを見る
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-[fadeIn_1s_1.2s_forwards]">
          <div className="scroll-mouse" />
          <span className="text-[10px] text-white/20 uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="bg-[#0a0a0a] border-y border-white/8 overflow-hidden py-4 select-none">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="px-8 text-sm text-white/20 uppercase tracking-[0.2em] whitespace-nowrap">
              {item} <span className="text-white/10 mx-4">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <section className="bg-[#111] border-b border-white/8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/8">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={(i + 1) as 1|2|3|4} className="py-14 px-8 text-center">
                <p className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-3" style={{ color: GOLD }}>
                  {(() => {
                    const hasSign = s.value.startsWith('+') || s.value.startsWith('-');
                    const sign = hasSign ? s.value[0] : '';
                    const rest = hasSign ? s.value.slice(1) : s.value;
                    const num = rest.replace('%', '');
                    const hasPct = rest.includes('%');
                    return <>{sign && <span className="text-[0.6em]">{sign}</span>}{num}{hasPct && <span className="text-[0.6em]">%</span>}</>;
                  })()}
                </p>
                <p className="text-xs text-white/25 uppercase tracking-[0.2em]">{s.label}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="bg-[#fafafa] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="flex items-end justify-between mb-12 pb-6 border-b border-[#e5e5e5]">
            <div>
              <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
                Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                4つのサービス
              </h2>
            </div>
            <p className="hidden md:block text-sm text-[#737373] max-w-xs text-right leading-relaxed">
              マーケティング支援に必要なすべてを、<br />ワンストップで提供します。
            </p>
          </AnimateIn>

          <div className="divide-y divide-[#e5e5e5]">
            {services.map((s, i) => (
              <AnimateIn key={s.href} delay={(Math.min(i + 1, 5)) as 1|2|3|4|5}>
                <Link href={s.href} className="service-row group block py-8 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <span className="text-xs font-mono w-6 shrink-0" style={{ color: GOLD_DARK }}>{s.number}</span>
                      <h3 className="text-xl md:text-2xl font-semibold text-[#0a0a0a] group-hover:translate-x-1.5 transition-transform duration-300">
                        {s.title}
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-[#0a0a0a] shrink-0 opacity-20 group-hover:opacity-80 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="service-desc-wrap pl-14">
                    <div className="service-desc-inner">
                      <p className="text-sm text-[#737373] leading-relaxed pt-3 pb-1 max-w-xl">{s.description}</p>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-[#0a0a0a] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="flex items-end justify-between mb-16 pb-6 border-b border-white/8">
            <div>
              <span className="inline-flex items-center border border-white/10 rounded-full px-3 py-1 text-[11px] text-white/30 uppercase tracking-[0.2em] mb-4">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                支援の流れ
              </h2>
            </div>
            <p className="hidden md:block text-sm text-white/30 max-w-xs text-right leading-relaxed">
              ヒアリングから改善まで、<br />一貫してサポートします。
            </p>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8">
            {process.map((p, i) => (
              <AnimateIn key={p.step} delay={(i + 1) as 1|2|3|4} className="bg-[#0a0a0a] p-8 md:p-10 hover:bg-white/4 transition-colors duration-300">
                <p className="text-xs font-mono mb-8" style={{ color: GOLD }}>{p.step}</p>
                <h3 className="text-lg font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{p.desc}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="bg-[#fafafa] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="flex items-end justify-between mb-12 pb-6 border-b border-[#e5e5e5]">
            <div>
              <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
                Why Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                選ばれる理由
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 01 — wide */}
            <AnimateIn delay={1} className="md:col-span-2 border border-[#e5e5e5] rounded-2xl p-10 hover:border-[#0a0a0a]/25 hover:shadow-sm transition-all duration-300">
              <p className="text-xs font-mono mb-8" style={{ color: GOLD_DARK }}>{reasons[0].number}</p>
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4">{reasons[0].title}</h3>
              <p className="text-sm text-[#737373] leading-relaxed max-w-md">{reasons[0].description}</p>
            </AnimateIn>

            {/* Card 02 */}
            <AnimateIn delay={2} className="border border-[#e5e5e5] rounded-2xl p-10 hover:border-[#0a0a0a]/25 hover:shadow-sm transition-all duration-300">
              <p className="text-xs font-mono mb-8" style={{ color: GOLD_DARK }}>{reasons[1].number}</p>
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4">{reasons[1].title}</h3>
              <p className="text-sm text-[#737373] leading-relaxed">{reasons[1].description}</p>
            </AnimateIn>

            {/* Card 03 — full width, horizontal */}
            <AnimateIn delay={3} className="md:col-span-3 border border-[#e5e5e5] rounded-2xl p-10 hover:border-[#0a0a0a]/25 hover:shadow-sm transition-all duration-300">
              <div className="md:flex md:items-center md:gap-16">
                <div className="shrink-0">
                  <p className="text-xs font-mono mb-6" style={{ color: GOLD_DARK }}>{reasons[2].number}</p>
                  <h3 className="text-xl font-semibold text-[#0a0a0a]">{reasons[2].title}</h3>
                </div>
                <div className="mt-4 md:mt-0 md:border-l md:border-[#e5e5e5] md:pl-16">
                  <p className="text-sm text-[#737373] leading-relaxed max-w-xl">{reasons[2].description}</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] bg-dot-grid py-36 border-t border-white/8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] mb-8"
              style={{ border: "1px solid rgba(201,168,76,0.2)", color: GOLD }}>
              Contact
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              まずは<br />
              <span className="text-white/30">お気軽にご相談ください</span>
            </h2>
            <p className="text-white/35 text-base mb-12 max-w-md mx-auto leading-relaxed">
              貴社の現状と課題をお聞きし、最適なサービスをご提案します。初回相談は無料です。
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)" }}>
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
