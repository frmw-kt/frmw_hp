import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マーケティングコンサルティング",
  description: "データに基づく戦略設計から実行支援まで。売上・リードを最大化するマーケティング戦略を構築します。",
};

const features = [
  {
    number: "01",
    title: "調査分析",
    description: "市場・競合・顧客・自社の多角的な調査・分析を行い、ビジネス成長の機会と課題を明確にします。定量・定性の両面からデータを収集し、意思決定の精度を高めます。",
    href: "/services/consulting/research",
  },
  {
    number: "02",
    title: "マーケティング戦略立案",
    description: "STP分析・4P設計・KPI設定など体系的なフレームワークを用いて、調査結果に基づいた実行可能なマーケティング戦略を策定します。",
    href: "/services/consulting/strategy",
  },
  {
    number: "03",
    title: "施策立案",
    description: "戦略に基づき、チャネル・予算・スケジュールを考慮した具体的な施策プランを立案します。優先順位を明確にし、最大のROIを生む施策ポートフォリオを設計します。",
    href: "/services/consulting/planning",
  },
  {
    number: "04",
    title: "効果検証・分析",
    description: "実行した施策の効果をKPIに照らして定量的に検証します。数値データを深掘りし、成果の要因と課題を明確に可視化します。",
    href: "/services/consulting/analysis",
  },
  {
    number: "05",
    title: "改善提案",
    description: "効果検証の結果をもとに、次の打ち手を具体的に提案します。PDCAサイクルを継続的に回すことで、マーケティング施策を常に最適化し続けます。",
    href: "/services/consulting/improvement",
  },
];

const steps = [
  { step: "01", title: "ヒアリング", desc: "現状・目標・課題をお聞きします" },
  { step: "02", title: "分析・診断", desc: "データをもとに現状を多角的に分析" },
  { step: "03", title: "戦略提案", desc: "優先施策と実行ロードマップを提示" },
  { step: "04", title: "実行支援", desc: "施策実行から改善まで伴走します" },
];

export default function ConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-32 md:py-44">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[100px] -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-slate-300 transition-colors mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            トップへ戻る
          </Link>
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5">Consulting</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-2xl">
            マーケティング<br />
            <span className="gradient-text">コンサルティング</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            戦略設計から実行支援まで一気通貫。データに基づく分析で、貴社マーケティングの課題を解決し、持続的な成長を実現します。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">サービス内容</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {features.map((f) => (
              <Link
                key={f.number}
                href={f.href}
                className="group relative p-7 bg-white border border-slate-200 rounded-3xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity" />
                <p className="text-4xl font-black text-slate-200 mb-4 leading-none">{f.number}</p>
                <h3 className="text-base font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{f.description}</p>
                <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                  <span>詳しく見る</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">支援の流れ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="bg-slate-50 border border-slate-100 p-7 rounded-3xl h-full hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                  <p className="text-5xl font-black text-slate-100 mb-4 leading-none group-hover:text-blue-50 transition-colors">{s.step}</p>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2.5 transform -translate-y-1/2 text-slate-300 z-10 bg-white">
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

      {/* CTA */}
      <section className="py-28 relative overflow-hidden bg-slate-100">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5 tracking-tight">
            マーケティング戦略の見直しを<br />検討中ですか？
          </h2>
          <p className="text-slate-500 mb-10 leading-relaxed">まずは現状の課題をお聞かせください。初回相談は無料です。</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
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
