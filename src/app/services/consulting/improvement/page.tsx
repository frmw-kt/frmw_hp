import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "改善提案",
  description: "効果検証の結果をもとに具体的な改善策を提案。PDCAを高速で回し、マーケティング施策を継続的に最適化します。",
};

const stats = [
  { value: "PDCA高速化", label: "継続的な改善サイクル" },
  { value: "根拠ある提案", desc: "データドリブンな改善策" },
  { value: "優先順位付き", label: "インパクト順に整理" },
  { value: "実行まで伴走", label: "提案で終わらない支援" },
];

const whats = [
  { title: "課題の優先順位整理", desc: "効果検証で発見した課題を、インパクト・実現容易性・緊急性の3軸で評価。「今すぐ取り組むべき改善」と「中長期で対処すべき課題」を明確に分類します。" },
  { title: "改善仮説の立案", desc: "課題の根本原因を分析し、具体的な改善仮説を立案します。「なぜそうなっているか」を深掘りした上で、複数の改善アプローチを提示します。" },
  { title: "A/Bテスト・検証設計", desc: "改善仮説を検証するためのA/Bテストや実験設計を行います。正確な検証のためのサンプルサイズ設計・期間設定・指標定義まで丁寧にサポートします。" },
  { title: "次期施策への反映", desc: "改善の成果と知見を体系的に蓄積し、次の施策立案・予算配分に反映します。改善を繰り返すことで、マーケティングの精度を継続的に高めていきます。" },
];

const strengths = [
  {
    number: "01",
    title: "提案で終わらない伴走支援",
    desc: "改善提案を「レポート」として渡して終わりにしません。改善の実行フェーズまで伴走し、実際に成果が出るまでサポートします。実行力のある改善支援を提供します。",
  },
  {
    number: "02",
    title: "データに基づく根拠ある提案",
    desc: "「なんとなくこちらの方が良さそう」ではなく、データと分析に裏付けられた改善提案を行います。改善の根拠を明確にすることで、社内の合意形成もスムーズになります。",
  },
  {
    number: "03",
    title: "PDCAサイクルの仕組み化",
    desc: "単発の改善提案にとどまらず、継続的にPDCAを回せる仕組みを組織に根付かせます。定期的なレビュー体制・KPIモニタリング・改善プロセスの標準化まで支援します。",
  },
];

const steps = [
  { step: "01", title: "課題の整理", desc: "検証結果から改善すべき課題を抽出" },
  { step: "02", title: "原因分析", desc: "課題の根本原因を深掘り" },
  { step: "03", title: "改善仮説立案", desc: "具体的な改善策と優先順位を設定" },
  { step: "04", title: "検証・実行", desc: "A/Bテスト等で仮説を検証・実行" },
  { step: "05", title: "次期計画へ反映", desc: "成果・知見を次の施策設計に活用" },
];

const faqs = [
  { q: "改善提案だけ依頼できますか？", a: "はい。既存の施策データや分析結果をお持ちであれば、改善提案フェーズからのご依頼も可能です。" },
  { q: "A/Bテストの実行も支援してもらえますか？", a: "はい。テスト設計・実装支援・結果分析・次のアクション提案まで一貫して対応します。" },
  { q: "改善の成果はどのくらいの期間で出ますか？", a: "施策の種類によって異なりますが、クイックウィン施策は1〜2ヶ月以内に成果を確認できる場合が多いです。継続的な改善で中長期の成果最大化を目指します。" },
  { q: "定期的な改善レビューをお願いできますか？", a: "はい。月次・四半期ごとの定期レビュー体制を整えることも可能です。継続的な伴走支援プランをご用意しています。" },
];

export default function ImprovementPage() {
  return (
    <>
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden py-32 md:py-44">
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/services/consulting" className="inline-flex items-center gap-2 text-white/30 text-sm hover:text-white transition-colors mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            コンサルティングへ戻る
          </Link>
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">Improvement</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 max-w-3xl">
            PDCAを回し続け、<br />
            <span>成果を最大化する。</span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl mb-14">
            効果検証の結果をもとに、根拠ある改善策を提案します。提案で終わらず、実行・再検証まで伴走し、マーケティングの精度を継続的に高めます。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/8">
            {stats.map((s) => (
              <div key={s.value}>
                <p className="text-xl md:text-2xl font-black gradient-text mb-1">{s.value}</p>
                <p className="text-white/50 text-sm">{s.label ?? s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">改善提案の全体像</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">課題の優先順位整理から改善仮説・検証設計・次期施策への反映まで、一貫して支援します。</p>
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

      <section className="py-24 bg-[#fafafa] border-t border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-5 tracking-tight">改善提案のご相談はお気軽に</h2>
          <p className="text-[#737373] mb-10 leading-relaxed">現在の施策の課題感や改善したい数値をお聞かせください。初回相談は無料です。</p>
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
