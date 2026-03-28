import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "運用代行",
  description: "SNS・広告・メールなどのマーケティング施策の運用を丸ごと代行。専門チームが継続的に成果を出します。",
};

const features = [
  {
    number: "01",
    title: "広告運用代行",
    description: "Google・Meta・LINE・Yahoo!などの広告プラットフォームの設計・入稿・最適化を一貫して担当。費用対効果を最大化する運用で、CPAの継続的な改善を実現します。",
  },
  {
    number: "02",
    title: "SNS運用代行",
    description: "Instagram・X・LinkedIn・TikTokなど各プラットフォームに最適化したコンテンツ制作・投稿・エンゲージメント管理を代行します。ブランド認知とフォロワー獲得を継続的に推進します。",
  },
  {
    number: "03",
    title: "SEO対策代行",
    description: "技術的SEO・コンテンツSEO・外部対策を組み合わせた総合的な検索エンジン最適化を代行。検索流入の増加とオーガニックリードの獲得を実現します。",
  },
  {
    number: "04",
    title: "アフィリエイト運用代行",
    description: "アフィリエイトプログラムの設計・媒体開拓・パートナー管理・成果分析を代行します。成果報酬型のチャネルを活用し、効率的な顧客獲得を支援します。",
  },
  {
    number: "05",
    title: "CRM運用代行",
    description: "MA・CRMツールの設定・シナリオ構築・配信運用・効果分析を代行します。リードナーチャリングと顧客LTV向上を継続的に推進します。",
  },
];

const steps = [
  { step: "01", title: "現状ヒアリング", desc: "目標・ターゲット・既存施策を確認" },
  { step: "02", title: "運用設計", desc: "戦略・KPI・スケジュールを策定" },
  { step: "03", title: "運用開始", desc: "専任チームが施策を実行" },
  { step: "04", title: "報告・改善", desc: "月次レポートと改善提案でPDCA" },
];

export default function OperationsPage() {
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
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">Operations</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-2xl">
            <span>運用代行</span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl">
            SNS・広告・メールなどのマーケティング施策の運用をプロに任せ、コア業務に集中してください。専任チームが継続的に成果を追い求めます。
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">代行できること</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.number}
                className="group relative p-8 bg-white border border-[#e5e5e5] rounded-2xl hover:border-[#0a0a0a] transition-all duration-300 overflow-hidden"
              >
                
                <p className="text-4xl font-bold text-[#e5e5e5] mb-4 leading-none">{f.number}</p>
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3">{f.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">開始までの流れ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-5 tracking-tight">運用工数を削減しませんか？</h2>
          <p className="text-[#737373] mb-10 leading-relaxed">現在の運用状況や課題をお聞かせください。最適な運用体制をご提案します。</p>
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
