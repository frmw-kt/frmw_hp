import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "効果検証・分析",
  description: "施策の成果をKPIで定量的に検証。データを深掘りし、成果の要因と課題を可視化します。",
};

const stats = [
  { value: "KPI可視化", label: "成果を数値で把握" },
  { value: "要因分析", label: "成果・非成果の原因を特定" },
  { value: "月次報告", label: "定期レポーティング対応" },
  { value: "改善連動", label: "次のアクションへ直結" },
];

const whats = [
  { title: "KPI計測・モニタリング", desc: "設定したKPIの達成状況をGA4・広告管理画面・CRMなど各種ツールから収集・統合します。ダッシュボード設計により、成果をリアルタイムで把握できる環境を構築します。" },
  { title: "定量分析・深掘り", desc: "表面の数値だけでなく、セグメント別・チャネル別・コンテンツ別などの切り口でデータを深掘りします。「何が成果を生んでいるか」「なぜ目標に届いていないか」を明確にします。" },
  { title: "アトリビューション分析", desc: "コンバージョンに至るまでの複数タッチポイントの貢献度を分析します。ラストクリック偏重ではなく、各チャネルの真の貢献を可視化し、予算配分の最適化につなげます。" },
  { title: "レポーティング", desc: "経営層・現場担当者それぞれに最適な粒度のレポートを作成します。数字の羅列ではなく、「何を意味するのか・次に何をすべきか」まで明確に伝わるレポートを提供します。" },
];

const strengths = [
  {
    number: "01",
    title: "「何を測るか」の設計から支援",
    desc: "計測設計の段階から関与します。施策実行前にKPI・計測方法・データ収集環境を整備することで、検証精度を高め、後から「測れなかった」を防ぎます。",
  },
  {
    number: "02",
    title: "示唆・解釈まで踏み込む分析",
    desc: "「CVRが下がりました」で終わらず、「なぜ下がったか」「どこを改善すべきか」まで踏み込んで分析します。データを意思決定につながる示唆に変換します。",
  },
  {
    number: "03",
    title: "改善提案とのシームレスな連携",
    desc: "効果検証の結果は、そのまま次の改善提案フェーズへ引き継ぎます。分析→改善→実行→再検証のPDCAを高速で回し、継続的な成果向上を実現します。",
  },
];

const steps = [
  { step: "01", title: "計測設計", desc: "KPI・ツール・タグ設定を整備" },
  { step: "02", title: "データ収集", desc: "各種ツールからデータを統合" },
  { step: "03", title: "分析・示唆抽出", desc: "多角的な切り口で深掘り分析" },
  { step: "04", title: "レポーティング", desc: "成果と課題を分かりやすく報告" },
  { step: "05", title: "改善提案へ連携", desc: "次のアクションをセットで提示" },
];

const faqs = [
  { q: "どのような分析ツールに対応していますか？", a: "GA4・Google Search Console・各種広告管理画面（Google/Meta/LINE等）・HubSpot・Salesforceなど主要ツールに対応しています。" },
  { q: "既存のレポートを改善してもらうことはできますか？", a: "はい。既存レポートの見直し・改善や、ダッシュボードの再設計にも対応しています。" },
  { q: "月次レポートの作成を代行してもらえますか？", a: "はい。定期レポーティングの代行・提供も可能です。頻度・フォーマットはご要望に合わせてカスタマイズします。" },
  { q: "計測環境の整備（GTM・GA4設定）から依頼できますか？", a: "はい。タグ設定・GTM構築・GA4移行など計測インフラの整備から対応可能です。" },
];

export default function AnalysisPage() {
  return (
    <>
      <section className="relative bg-slate-950 text-white overflow-hidden py-32 md:py-44">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[100px] -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/services/consulting" className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-slate-300 transition-colors mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            コンサルティングへ戻る
          </Link>
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5">Measurement & Analysis</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-3xl">
            数字で語る、<br />
            <span className="gradient-text">成果の可視化。</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-14">
            KPIを計測・分析し、「何が成果を生んでいるか」「何が課題か」を明確に可視化します。データを意思決定につながる示唆へ変換します。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl md:text-2xl font-black gradient-text mb-1">{s.value}</p>
                <p className="text-slate-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">効果検証・分析の全体像</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">計測設計から深掘り分析・レポーティングまで、成果を正確に把握する仕組みを構築します。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whats.map((w, i) => (
              <div key={i} className="group p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  {w.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed pl-10">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Strengths</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">選ばれる3つの理由</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {strengths.map((s) => (
              <div key={s.number} className="group bg-white border border-slate-200 p-8 rounded-3xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <p className="text-5xl font-black text-slate-100 mb-4 leading-none group-hover:text-blue-50 transition-colors">{s.number}</p>
                <h3 className="text-base font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">進め方</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl h-full hover:border-blue-100 hover:bg-white hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 text-center">
                  <p className="text-4xl font-black text-slate-100 mb-3 leading-none group-hover:text-blue-50 transition-colors">{s.step}</p>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{s.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 text-slate-300 z-10 bg-white">
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

      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">よくあるご質問</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6">
                <p className="font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 font-black shrink-0">Q.</span>{f.q}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">Contact</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5 tracking-tight">効果検証・分析のご相談はお気軽に</h2>
          <p className="text-slate-500 mb-10 leading-relaxed">「数字を見てもよくわからない」という段階からご相談いただけます。初回相談は無料です。</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
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
