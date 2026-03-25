import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "制作",
  description: "LP・サイト・バナー・動画など、成果につながるクリエイティブ制作。ブランドを強化するビジュアルを届けます。",
};

const features = [
  {
    number: "01",
    title: "ランディングページ（LP）制作",
    description: "コンバージョンを最大化するLP設計・デザイン・コーディングを一貫して対応。ABテストにも対応します。",
    href: "/services/production/lp",
  },
  {
    number: "02",
    title: "Webサイト制作",
    description: "コーポレートサイト・サービスサイトなど、目的に応じたWebサイトを設計・制作します。SEOも考慮した構造で設計します。",
    href: "/services/production/web",
  },
  {
    number: "03",
    title: "バナー・広告クリエイティブ",
    description: "SNS広告・ディスプレイ広告向けのバナー制作。クリック率・転換率を意識したクリエイティブを提供します。",
    href: null,
  },
  {
    number: "04",
    title: "動画・モーション制作",
    description: "SNS動画・広告動画・インフォグラフィックなど、視覚的に訴求力の高いコンテンツを制作します。",
    href: null,
  },
];

const steps = [
  { step: "01", title: "要件ヒアリング", desc: "目的・ターゲット・納期を確認" },
  { step: "02", title: "企画・設計", desc: "構成・ワイヤーフレーム作成" },
  { step: "03", title: "デザイン・制作", desc: "デザイン提案〜修正〜完成" },
  { step: "04", title: "納品・検証", desc: "公開後の効果測定も支援" },
];

export default function ProductionPage() {
  return (
    <>
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden py-32 md:py-44">
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/30 text-sm hover:text-white transition-colors mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            トップへ戻る
          </Link>
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">Production</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-2xl">
            <span>制作</span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl">
            LP・サイト・バナー・動画など、「成果につながるクリエイティブ」を制作します。デザインの美しさだけでなく、ビジネス目標の達成を常に意識した制作を行います。
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">制作メニュー</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f) => {
              const inner = (
                <>
                  
                  <p className="text-4xl font-bold text-[#e5e5e5] mb-4 leading-none">{f.number}</p>
                  <h3 className="text-base font-semibold text-[#0a0a0a] mb-3">{f.title}</h3>
                  <p className="text-sm text-[#737373] leading-relaxed">{f.description}</p>
                  {f.href && (
                    <div className="mt-5 flex items-center gap-2 text-blue-600 text-sm font-medium">
                      <span>詳しく見る</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </>
              );
              return f.href ? (
                <Link
                  key={f.number}
                  href={f.href}
                  className="group relative p-8 bg-white border border-[#e5e5e5] rounded-2xl hover:border-[#0a0a0a] transition-all duration-300 overflow-hidden"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={f.number}
                  className="group relative p-8 bg-white border border-[#e5e5e5] rounded-2xl hover:border-[#0a0a0a] transition-all duration-300 overflow-hidden"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">制作の流れ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="bg-[#fafafa] border border-[#e5e5e5] p-7 rounded-2xl h-full hover:border-[#0a0a0a] hover:bg-white transition-all duration-300">
                  <p className="text-5xl font-bold text-[#e5e5e5] mb-4 leading-none">{s.step}</p>
                  <h3 className="text-base font-semibold text-[#0a0a0a] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#737373] leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 text-[#d4d4d4] z-10 bg-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden bg-slate-100">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-5 tracking-tight">制作のご相談はお気軽に</h2>
          <p className="text-[#737373] mb-10 leading-relaxed">制作物の種類・目的・予算感をお聞かせいただければ、最適なプランをご提案します。</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-white bg-[#0a0a0a] px-8 py-4 rounded-full hover:bg-[#1a1a1a] transition-colors duration-200"
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
