import Link from "next/link";
import type { Metadata } from "next";
import HeroBackground from "@/components/HeroBackground";

export const metadata: Metadata = {
  title: "Framework | マーケティング支援",
  description: "コンサルティング・運用代行・制作・スクールの4つのサービスでマーケティングを支援します。",
};

const services = [
  {
    title: "マーケティング\nコンサルティング",
    description: "調査分析から戦略立案・施策設計・改善提案まで。データに基づく一気通貫のコンサルティングで、売上・リードを最大化します。",
    href: "/services/consulting",
    tag: "Consulting",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "運用代行",
    description: "SNS・広告・メールなどのマーケティング施策の運用をプロに任せる。専門チームが継続的に成果を追い求めます。",
    href: "/services/operations",
    tag: "Operations",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "制作",
    description: "LP・サイト・バナー・動画など、成果につながるクリエイティブを制作。ブランドを強化するビジュアルを届けます。",
    href: "/services/production",
    tag: "Production",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "スクール",
    description: "現役プロが教える実践的なマーケティングスクール。個人の学習から企業研修まで幅広く対応します。",
    href: "/services/school",
    tag: "School",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const stats = [
  { value: "+400%", label: "平均売上高" },
  { value: "-80%", label: "平均CPA" },
  { value: "100%", label: "継続率" },
  { value: "+50%", label: "平均ROI" },
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
    description: "感覚ではなく、データと分析に基づいた意思決定で確実に成果につながる施策を実行。ROIを常に可視化します。",
  },
  {
    number: "03",
    title: "サービスのワンストップ対応",
    description: "コンサル・運用・制作・教育を社内で完結。複数の外部委託先を管理するコスト・手間を解消します。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated canvas background */}
        <HeroBackground />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,_rgba(37,99,235,0.12),_transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_10%_80%,_rgba(6,182,212,0.07),_transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded-full px-4 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-300 text-xs font-medium tracking-wider uppercase">Marketing Support Company</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8 max-w-4xl">
            マーケティングで、<br />
            ビジネスを<br />
            <span className="gradient-text">加速させる。</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg mb-14">
            コンサルティングから運用代行・制作・スクールまで。<br />
            貴社の課題に合わせた最適なマーケティング支援を提供します。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all shadow-xl shadow-blue-900/40"
            >
              無料相談を申し込む
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-slate-300 px-8 py-4 rounded-full text-base font-semibold hover:border-white/30 hover:text-white hover:bg-white/5 transition-all"
            >
              サービスを見る
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 pt-10 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-black gradient-text mb-1">{s.value}</p>
                <p className="text-slate-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Services</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">4つのサービス</h2>
            </div>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              マーケティング支援に必要なすべてを、ワンストップで提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative p-8 bg-white border border-slate-200 rounded-3xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="text-xs font-medium text-slate-400 border border-slate-200 rounded-full px-3 py-1">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 whitespace-pre-line leading-snug">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>
                  <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                    <span>詳しく見る</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Why Us</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">選ばれる理由</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.number} className="relative group">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-50/80 transition-all duration-300 h-full">
                  <p className="text-6xl font-black text-slate-100 mb-4 leading-none group-hover:text-blue-50 transition-colors">{reason.number}</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{reason.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 relative overflow-hidden bg-slate-100">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-6">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-6">
            まずは、<br className="md:hidden" />
            お気軽にご相談ください。
          </h2>
          <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            貴社の現状と課題をお聞きし、最適なサービスをご提案します。初回相談は無料です。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            無料相談を申し込む
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
