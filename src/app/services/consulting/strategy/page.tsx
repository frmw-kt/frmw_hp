import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マーケティング戦略立案",
  description: "データに基づき、勝てるマーケティング戦略を設計。STP・4P・KPI設計を一気通貫でサポートします。",
};

const stats = [
  { value: "STP×4P", label: "体系的フレームワーク" },
  { value: "KPI設計", label: "成果を数値で定義" },
  { value: "実行可能", label: "絵に描いた餅にしない" },
  { value: "伴走支援", label: "策定後も継続サポート" },
];

const whats = [
  { title: "STP分析・ターゲット設計", desc: "市場のセグメンテーション、狙うべきターゲットの選定、自社のポジショニング設計を行います。「誰に・何を・どう届けるか」の戦略軸を明確にします。" },
  { title: "4P・マーケティングミックス設計", desc: "Product（製品）・Price（価格）・Place（流通）・Promotion（プロモーション）の4Pを整合させ、一貫したマーケティング戦略に落とし込みます。" },
  { title: "KPI・目標設計", desc: "認知・流入・リード・成約・LTVなど各フェーズのKPIを設定。最終目標から逆算した数値計画を策定し、進捗管理の基準を作ります。" },
  { title: "実行ロードマップ策定", desc: "戦略を実行可能なアクションに分解し、優先順位と時系列を整理したロードマップを作成します。リソース・予算・体制も踏まえた現実的な計画を設計します。" },
];

const strengths = [
  {
    number: "01",
    title: "調査分析と一体化した戦略設計",
    desc: "市場調査・競合分析・顧客理解を起点に戦略を構築するため、現実から乖離した「机上の空論」になりません。データに裏付けられた戦略で、実行精度を高めます。",
  },
  {
    number: "02",
    title: "実行まで落とし込む具体性",
    desc: "「戦略は策定したが実行できない」という状態を防ぎます。施策レベルまで具体化し、誰が・何を・いつ・どのように行うかまで整理します。",
  },
  {
    number: "03",
    title: "社内合意形成のサポート",
    desc: "戦略の意図・背景・優先順位を経営層・現場双方に伝わる形で整理します。社内への説明資料作成や合意形成プロセスへの伴走も対応します。",
  },
];

const steps = [
  { step: "01", title: "現状整理", desc: "調査分析の結果を戦略インプットに整理" },
  { step: "02", title: "STP設計", desc: "セグメント・ターゲット・ポジション決定" },
  { step: "03", title: "4P設計", desc: "マーケティングミックスの策定" },
  { step: "04", title: "KPI・計画", desc: "数値目標とロードマップの策定" },
  { step: "05", title: "合意・展開", desc: "社内合意形成と実行体制の整備" },
];

const faqs = [
  { q: "戦略立案だけの依頼は可能ですか？", a: "はい、可能です。ただし調査分析フェーズから一貫して支援することで、より精度の高い戦略を策定できます。状況に応じてご提案します。" },
  { q: "既存の戦略を見直したい場合も対応できますか？", a: "はい。既存の戦略・施策のレビューから始め、課題を特定した上で改善・再設計を行います。" },
  { q: "どのような業種・規模に対応していますか？", a: "BtoB・BtoC問わず、スタートアップから中堅・大企業まで幅広く対応しています。業種・規模によって最適なアプローチをカスタマイズします。" },
  { q: "戦略策定後の実行支援もお願いできますか？", a: "はい。施策立案・運用代行・効果検証まで一貫した支援が可能です。部分的なご依頼にも対応します。" },
];

export default function StrategyPage() {
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
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5">Marketing Strategy</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-3xl">
            勝てる戦略を、<br />
            <span className="gradient-text">データで設計する。</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-14">
            感覚や慣習に頼らず、市場データ・顧客理解・競合分析を統合した戦略を設計します。絵に描いた餅ではなく、実行できる戦略を作ります。
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
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">戦略立案の全体像</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">STPからKPI設計まで、一貫した戦略フレームワークで「勝ち筋」を設計します。</p>
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
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5 tracking-tight">戦略立案のご相談はお気軽に</h2>
          <p className="text-slate-500 mb-10 leading-relaxed">現在の戦略の課題感や目標をお聞かせください。初回相談は無料です。</p>
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
