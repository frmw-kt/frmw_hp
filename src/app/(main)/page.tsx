import Link from "next/link";
import type { Metadata } from "next";
import HeroBackground from "@/components/HeroBackground";
import AnimateIn from "@/components/AnimateIn";
import ServiceCarousel from "@/components/ServiceCarousel";
import ScrollScene from "@/components/ScrollScene";
import HomeAnimations from "@/components/HomeAnimations";

export const metadata: Metadata = {
  title: "Framework | マーケティング支援",
  description: "マーケティングの戦略設計から実行まで、コンサルティング・運用代行・制作・スクール・アプリ開発をワンストップで提供します。",
};

const stats = [
  { value: "8,000", unit: "万円", label: "運用経験・月間広告費" },
  { value: "-68",     unit: "%",  label: "平均CPA改善" },
  { value: "100",     unit: "%",  label: "継続率" },
  { value: "+255",    unit: "%",  label: "平均CV数改善" },
];

const serviceCategories = [
  {
    category: "Marketing",
    label: "マーケティング事業",
    items: [
      {
        number: "01",
        title: "マーケティングコンサルティング",
        description: "調査分析から戦略立案・施策設計・改善提案まで。データに基づく一気通貫のコンサルティングで、売上・リードを最大化します。",
        href: "/services/consulting",
      },
      {
        number: "02",
        title: "運用代行",
        description: "広告・SNS・SEO・アフィリエイト・CRMの運用を丸ごと代行。専任担当者が継続的に成果を追い求めます。",
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
      {
        number: "05",
        title: "広告運用管理（adops）",
        description: "Meta・Google広告のデータをリアルタイムで可視化・自動化。レポート集計の工数をゼロにし、改善サイクルを加速するSaaSツール。",
        href: "/services/adops",
      },
    ],
  },
  {
    category: "Product",
    label: "プロダクト事業",
    items: [
      {
        number: "01",
        title: "アプリ開発",
        description: "業務効率化・SaaS・データ活用など、ビジネス課題を解決するWebアプリをスモールスタートで開発します。MVPから本格プロダクトまで対応。",
        href: "/services/app-development",
      },
      {
        number: "02",
        title: "AI活用支援",
        description: "AI営業メール生成・チャットボット・コンテンツ自動化など、ビジネスの各工程にAIを実装。反復作業を自動化し、人的コストを削減しながら成果を最大化します。",
        href: "/services/ai",
      },
    ],
  },
];

const carouselServices = [
  ...serviceCategories[0].items.map((s) => ({ ...s, category: "Marketing" })),
  ...serviceCategories[1].items.map((s) => ({ ...s, category: "Product" })),
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

const marqueeItems = ["Consulting", "Operations", "Production", "School", "adops", "App Development", "Strategy", "Analytics", "Creative", "Growth"];

const GOLD = "#C9A84C";
const GOLD_DARK = "#A8892E";

export default function HomePage() {
  return (
    <>
      <HomeAnimations />

      {/* ── Hero ── */}
      <section id="hero-section" className="relative bg-[#0a0a0a] text-white overflow-hidden min-h-screen flex items-center">
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/70" />
        <div id="hero-inner" className="relative max-w-7xl mx-auto px-6 py-32 w-full">
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
              マーケティングの戦略設計から実行まで、
              一気通貫で支援します。
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

      {/* ── Service Carousel (horizontal scroll) ── */}
      <ServiceCarousel services={carouselServices} />

      {/* ── Stats ── */}
      <section className="bg-[#111] border-b border-white/8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/8">
            {stats.map((s, i) => {
              const hasSign = s.value.startsWith('+') || s.value.startsWith('-');
              const sign = hasSign ? s.value[0] : '';
              const num = hasSign ? s.value.slice(1) : s.value;
              return (
                <AnimateIn key={s.label} delay={(i + 1) as 1|2|3|4} className="py-14 px-8 text-center">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-3 whitespace-nowrap" style={{ color: GOLD }}>
                    {sign && <span className="text-[0.65em]">{sign}</span>}
                    {num}
                    {s.unit && <span className="text-[0.55em]">{s.unit}</span>}
                  </p>
                  <p className="text-xs text-white/25 uppercase tracking-[0.2em]">{s.label}</p>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services">
        {/* Section intro */}
        <div className="bg-white pt-24 pb-12 border-b border-[#e5e5e5]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="gsap-reveal flex items-end justify-between">
              <div>
                <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
                  Services
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                  2つの事業領域
                </h2>
              </div>
              <p className="hidden md:block text-sm text-[#737373] max-w-xs text-right leading-relaxed">
                マーケティング支援に必要なすべてを、<br />ワンストップで提供します。
              </p>
            </div>
          </div>
        </div>

        {/* Block 01 — Marketing (light) */}
        <div className="relative bg-white py-16 overflow-hidden" style={{
          backgroundImage: [
            "radial-gradient(ellipse 55% 45% at 100% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
            "radial-gradient(ellipse 40% 35% at 0% 100%, rgba(201,168,76,0.05) 0%, transparent 55%)",
            "linear-gradient(rgba(0,0,0,0.028) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(0,0,0,0.028) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "auto, auto, 52px 52px, 52px 52px",
        }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="gsap-reveal flex items-start gap-6 md:gap-10 mb-10">
              <span className="text-[5rem] md:text-[7rem] font-black leading-none select-none" style={{ color: "#f0f0f0" }}>01</span>
              <div className="pt-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] mb-2" style={{ color: GOLD }}>Marketing</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-2">マーケティング事業</h3>
                <p className="text-sm text-[#737373]">戦略設計から運用・制作・教育まで、売上を伸ばす仕組みをワンストップで構築します。</p>
              </div>
            </div>
            <div className="divide-y divide-[#e5e5e5] border-t border-[#e5e5e5]">
              {serviceCategories[0].items.map((s, i) => (
                <AnimateIn key={s.href} delay={(Math.min(i + 1, 5)) as 1|2|3|4|5}>
                  <Link href={s.href} className="service-row group block py-7 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-8">
                        <span className="text-xs font-mono w-6 shrink-0" style={{ color: GOLD_DARK }}>{s.number}</span>
                        <h4 className="text-xl md:text-2xl font-semibold text-[#0a0a0a] group-hover:translate-x-1.5 transition-transform duration-300">
                          {s.title}
                        </h4>
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
        </div>

        {/* Block 02 — Product (dark) */}
        <div className="relative bg-[#0a0a0a] py-16 overflow-hidden" style={{
          backgroundImage: [
            "radial-gradient(ellipse 75% 55% at 50% -5%, rgba(201,168,76,0.13) 0%, transparent 65%)",
            "linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(255,255,255,0.032) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "auto, 52px 52px, 52px 52px",
        }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="gsap-reveal flex items-start gap-6 md:gap-10 mb-10">
              <span className="text-[5rem] md:text-[7rem] font-black leading-none select-none text-white/5">02</span>
              <div className="pt-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] mb-2" style={{ color: GOLD }}>Product</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">プロダクト事業</h3>
                <p className="text-sm text-white/40">WebアプリとAIツールをスモールスタートで開発・実装します。</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* アプリ開発 */}
              <AnimateIn delay={1}>
                <Link href="/services/app-development"
                  className="group block border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/25 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="text-xs font-mono" style={{ color: GOLD }}>01</span>
                      <h4 className="text-xl md:text-2xl font-bold text-white mt-2 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                        アプリ開発
                      </h4>
                      <p className="text-sm text-white/50 leading-relaxed">
                        業務効率化・SaaS・データ活用など、ビジネス課題を解決するWebアプリをスモールスタートで開発。MVPから本格プロダクトまで対応します。
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-white shrink-0 opacity-20 group-hover:opacity-80 group-hover:translate-x-1 transition-all duration-300 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="border-t border-white/8 pt-6 grid grid-cols-2 gap-3">
                    {[
                      { label: "Webアプリ・SaaS", desc: "Next.js / React" },
                      { label: "業務効率化システム", desc: "API連携・自動化" },
                      { label: "データ活用・ML", desc: "Python / 機械学習" },
                      { label: "スモールスタート", desc: "MVP → スケール" },
                    ].map((item) => (
                      <div key={item.label} className="border border-white/8 rounded-xl p-3">
                        <p className="text-xs font-medium text-white/70 mb-1">{item.label}</p>
                        <p className="text-[11px] text-white/30">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </Link>
              </AnimateIn>

              {/* AI活用支援 */}
              <AnimateIn delay={2}>
                <Link href="/services/ai"
                  className="group block border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/25 transition-all duration-300 h-full"
                  style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%)" }}>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="text-xs font-mono" style={{ color: GOLD }}>02</span>
                      <h4 className="text-xl md:text-2xl font-bold text-white mt-2 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                        AI活用支援
                      </h4>
                      <p className="text-sm text-white/50 leading-relaxed">
                        AI営業メール生成・チャットボット・コンテンツ自動化など、ビジネスの各工程にAIを実装。反復作業を自動化し、人的コストを削減しながら成果を最大化します。
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-white shrink-0 opacity-20 group-hover:opacity-80 group-hover:translate-x-1 transition-all duration-300 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="border-t border-white/8 pt-6 grid grid-cols-2 gap-3">
                    {[
                      { label: "AI営業メール生成", desc: "Groq / LLM" },
                      { label: "チャットボット構築", desc: "RAG / 自然言語処理" },
                      { label: "コンテンツ自動生成", desc: "マーケティングAI" },
                      { label: "データ分析・予測", desc: "機械学習 / 可視化" },
                    ].map((item) => (
                      <div key={item.label} className="border border-white/8 rounded-xl p-3">
                        <p className="text-xs font-medium text-white/70 mb-1">{item.label}</p>
                        <p className="text-[11px] text-white/30">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </Link>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-white py-24 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-reveal flex items-end justify-between mb-16 pb-6 border-b border-[#e5e5e5]">
            <div>
              <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                支援の流れ
              </h2>
            </div>
            <p className="hidden md:block text-sm text-[#737373] max-w-xs text-right leading-relaxed">
              ヒアリングから改善まで、<br />一貫してサポートします。
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e5e5e5]">
            {process.map((p, i) => (
              <AnimateIn key={p.step} delay={(i + 1) as 1|2|3|4} className="bg-white p-8 md:p-10 hover:bg-[#fafafa] transition-colors duration-300">
                <p className="text-xs font-mono mb-8" style={{ color: GOLD_DARK }}>{p.step}</p>
                <h3 className="text-lg font-semibold text-[#0a0a0a] mb-3">{p.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{p.desc}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us — dark with 3D particle scene ── */}
      <section className="relative bg-[#0a0a0a] py-24 border-t border-white/8 overflow-hidden">
        <ScrollScene />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="gsap-reveal flex items-end justify-between mb-12 pb-6 border-b border-white/8">
            <div>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] text-white/30 uppercase tracking-[0.2em] mb-4"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                Why Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                選ばれる理由
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 01 — wide */}
            <AnimateIn delay={1} className="md:col-span-2 border border-white/8 rounded-2xl p-10 hover:border-white/20 hover:bg-white/2 transition-all duration-300"
              style={{ backdropFilter: "blur(8px)" }}>
              <p className="text-xs font-mono mb-8" style={{ color: GOLD_DARK }}>{reasons[0].number}</p>
              <h3 className="text-xl font-semibold text-white mb-4">{reasons[0].title}</h3>
              <p className="text-sm text-white/40 leading-relaxed max-w-md">{reasons[0].description}</p>
            </AnimateIn>

            {/* Card 02 */}
            <AnimateIn delay={2} className="border border-white/8 rounded-2xl p-10 hover:border-white/20 hover:bg-white/2 transition-all duration-300"
              style={{ backdropFilter: "blur(8px)" }}>
              <p className="text-xs font-mono mb-8" style={{ color: GOLD_DARK }}>{reasons[1].number}</p>
              <h3 className="text-xl font-semibold text-white mb-4">{reasons[1].title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{reasons[1].description}</p>
            </AnimateIn>

            {/* Card 03 — full width, horizontal */}
            <AnimateIn delay={3} className="md:col-span-3 border border-white/8 rounded-2xl p-10 hover:border-white/20 hover:bg-white/2 transition-all duration-300"
              style={{ backdropFilter: "blur(8px)" }}>
              <div className="md:flex md:items-center md:gap-16">
                <div className="shrink-0">
                  <p className="text-xs font-mono mb-6" style={{ color: GOLD_DARK }}>{reasons[2].number}</p>
                  <h3 className="text-xl font-semibold text-white">{reasons[2].title}</h3>
                </div>
                <div className="mt-4 md:mt-0 md:border-l md:border-white/8 md:pl-16">
                  <p className="text-sm text-white/40 leading-relaxed max-w-xl">{reasons[2].description}</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] bg-dot-grid py-36 border-t border-white/8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="gsap-reveal">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] mb-8"
              style={{ border: "1px solid rgba(201,168,76,0.2)", color: GOLD }}>
              Contact
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              まずは<br />
              <span className="text-white/30">お気軽にご相談ください</span>
            </h2>
            <p className="text-white/35 text-base mb-12 max-w-md mx-auto leading-relaxed">
              現状と課題をお聞きし、最適なプランをご提案します。月5万円〜対応可能。初回相談は無料です。
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)" }}>
              無料相談を申し込む
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
