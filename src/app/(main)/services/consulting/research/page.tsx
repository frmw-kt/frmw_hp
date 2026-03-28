import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "調査分析",
  description: "市場・競合・顧客・自社を多角的に調査・分析。データに基づく意思決定で、戦略の土台を構築します。",
};

const stats = [
  { value: "4軸", label: "市場・競合・顧客・自社を網羅" },
  { value: "定量×定性", label: "両面からのアプローチ" },
  { value: "課題特定", label: "本質的な問題を明確化" },
  { value: "即実行", label: "アクション直結のアウトプット" },
];

const whats = [
  { title: "市場調査", desc: "TAM/SAM/SOMの試算、市場トレンドの把握、成長機会の特定。定量データと定性情報を組み合わせ、参入余地と優先市場を明らかにします。" },
  { title: "競合分析", desc: "主要競合のポジショニング・強み・弱みを体系的に整理。競合マップの作成と差別化ポイントの発見で、自社の立ち位置を明確にします。" },
  { title: "顧客調査", desc: "ペルソナ設計、カスタマージャーニー分析、インタビュー・アンケート設計・実施。顧客のジョブ・ペイン・ゲインを深く理解します。" },
  { title: "自社分析", desc: "SWOT分析、既存顧客データ分析、チャネル別パフォーマンス評価。現状のマーケティング活動の強みと改善余地を可視化します。" },
];

const strengths = [
  {
    number: "01",
    title: "定量×定性の両立",
    desc: "数値データの分析だけでなく、インタビューやエスノグラフィーなど定性調査も組み合わせます。「数字の背景にある理由」まで掘り下げることで、表面的ではない本質的な示唆を導きます。",
  },
  {
    number: "02",
    title: "アクション直結のアウトプット",
    desc: "調査結果を「きれいなレポート」で終わらせません。発見した課題と機会を優先順位付けし、次の戦略・施策へ直接つながるインサイトとして整理します。",
  },
  {
    number: "03",
    title: "業種・業界を問わない対応力",
    desc: "BtoB・BtoC・SaaS・製造業・小売など、幅広い業種の調査実績があります。業界固有の調査手法や情報源を活用し、精度の高い分析を実現します。",
  },
];

const steps = [
  { step: "01", title: "目的設定", desc: "調査の目的・仮説・アウトプットイメージを合意" },
  { step: "02", title: "調査設計", desc: "手法・対象・スケジュール・質問設計" },
  { step: "03", title: "調査実施", desc: "デスクリサーチ・インタビュー・アンケート等" },
  { step: "04", title: "分析・示唆抽出", desc: "データ統合・パターン発見・インサイト化" },
  { step: "05", title: "レポーティング", desc: "優先課題と次のアクションを提示" },
];

const faqs = [
  { q: "調査の対象や規模に応じて費用は変わりますか？", a: "はい。調査対象の範囲・手法（デスクリサーチのみ / インタビュー含む等）・納期によって費用は異なります。まずはご相談ください。" },
  { q: "インタビュー対象者の確保は依頼できますか？", a: "はい。リサーチパネルの活用や、クライアントの既存顧客へのリクルーティング支援も対応しています。" },
  { q: "競合他社の情報はどこまで調査できますか？", a: "公開情報（IR・プレスリリース・SNS・SEO等）を中心に網羅的に収集・分析します。非公開情報の取得は対象外です。" },
  { q: "調査結果の活用方法もサポートしてもらえますか？", a: "はい。調査・分析後、戦略立案や施策立案フェーズへシームレスに移行することも可能です。一気通貫での支援を推奨しています。" },
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden py-32 md:py-44">
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/services/consulting" className="inline-flex items-center gap-2 text-white/30 text-sm hover:text-white transition-colors mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            コンサルティングへ戻る
          </Link>
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">Research & Analysis</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 max-w-3xl">
            データから、<br />
            <span>戦略の土台を築く。</span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl mb-14">
            市場・競合・顧客・自社の4軸を多角的に調査・分析。感覚ではなくデータに基づく意思決定で、マーケティング戦略の精度を高めます。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl md:text-2xl font-black gradient-text mb-1">{s.value}</p>
                <p className="text-white/50 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">調査分析の全体像</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              4つの調査軸を組み合わせることで、ビジネス成長の機会と課題を多角的に捉えます。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whats.map((w, i) => (
              <div key={i} className="group p-8 bg-[#fafafa] border border-[#e5e5e5] rounded-2xl hover:bg-white hover:border-[#0a0a0a] transition-all duration-300">
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#0a0a0a] text-white text-xs font-bold flex items-center justify-center shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  {w.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed pl-10">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Our Strengths</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">選ばれる3つの理由</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {strengths.map((s) => (
              <div key={s.number} className="group bg-[#fafafa] border border-[#e5e5e5] p-8 rounded-2xl hover:border-[#0a0a0a] hover:bg-white transition-all duration-300">
                <p className="text-5xl font-bold text-[#e5e5e5] mb-4 leading-none">{s.number}</p>
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3">{s.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">進め方</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="bg-[#fafafa] border border-[#e5e5e5] p-6 rounded-2xl h-full hover:border-[#0a0a0a] hover:bg-white transition-all duration-300 text-center">
                  <p className="text-4xl font-bold text-[#e5e5e5] mb-3 leading-none">{s.step}</p>
                  <h3 className="text-sm font-semibold text-[#0a0a0a] mb-1.5">{s.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 text-[#d4d4d4] z-10 bg-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">よくあるご質問</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-[#e5e5e5] rounded-2xl p-6 hover:border-[#0a0a0a] transition-colors">
                <p className="font-semibold text-[#0a0a0a] mb-3 flex items-start gap-3">
                  <span className="text-[#0a0a0a] font-bold shrink-0">Q.</span>{f.q}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#fafafa] border-t border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-5 tracking-tight">調査分析のご相談はお気軽に</h2>
          <p className="text-[#737373] mb-10 leading-relaxed">
            「何を調べればいいかわからない」という段階からご相談いただけます。<br />初回相談は無料です。
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-white bg-[#0a0a0a] px-8 py-4 rounded-full hover:bg-[#1a1a1a] transition-colors duration-200">
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
