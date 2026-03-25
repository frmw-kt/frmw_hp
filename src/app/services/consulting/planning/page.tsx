import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "施策立案",
  description: "戦略を実行可能な施策に落とし込む。チャネル選定・予算配分・スケジュールを最適化し、ROIを最大化します。",
};

const stats = [
  { value: "ROI最大化", label: "施策ポートフォリオ設計" },
  { value: "優先順位", label: "インパクト×難易度で整理" },
  { value: "全チャネル", label: "横断的な施策設計" },
  { value: "即実行", label: "アクションプラン形式で納品" },
];

const whats = [
  { title: "チャネル選定・施策設計", desc: "SEO・SNS・Web広告・メール・オウンドメディア・イベントなど、目標とターゲットに最適なチャネルを選定。各チャネルの施策内容を具体的に設計します。" },
  { title: "予算配分の最適化", desc: "限られた予算の中で最大のROIを生むための配分を設計します。インパクト・コスト・実現性を総合的に評価し、投資対効果の高い施策に優先的にリソースを配分します。" },
  { title: "実行スケジュール策定", desc: "施策の依存関係・リードタイム・社内リソースを考慮した実行スケジュールを策定。「いつ・誰が・何を・どのように」実行するかを明確にします。" },
  { title: "施策優先順位の決定", desc: "インパクト×実現容易性×緊急性の3軸で施策の優先順位を可視化。クイックウィン（短期成果）と中長期施策のバランスを最適化します。" },
];

const strengths = [
  {
    number: "01",
    title: "戦略から施策への一貫性",
    desc: "戦略で定義したターゲット・KPI・ポジショニングと整合した施策のみを立案します。「なぜこの施策か」の根拠が常に明確で、社内説明にも活用できます。",
  },
  {
    number: "02",
    title: "全チャネル横断の俯瞰視点",
    desc: "SNS・広告・SEO・CRM・イベントなど、特定チャネルに偏らず全体を俯瞰して最適な施策ポートフォリオを設計します。チャネル間のシナジーを最大化します。",
  },
  {
    number: "03",
    title: "実行可能性を重視した設計",
    desc: "理想論ではなく、クライアントのリソース・組織・予算・タイムラインを踏まえた現実的な施策プランを作成します。実行できる計画だからこそ成果につながります。",
  },
];

const steps = [
  { step: "01", title: "戦略インプット確認", desc: "KPI・ターゲット・予算上限を整理" },
  { step: "02", title: "施策候補の洗い出し", desc: "全チャネルから施策アイデアを抽出" },
  { step: "03", title: "優先順位付け", desc: "インパクト×難易度で評価・絞り込み" },
  { step: "04", title: "詳細設計", desc: "各施策の内容・KPI・担当・予算を定義" },
  { step: "05", title: "アクションプラン提示", desc: "実行可能なロードマップとして納品" },
];

const faqs = [
  { q: "どのチャネルの施策に対応していますか？", a: "SEO・SNS・Web広告・メール・LP・コンテンツ・イベント・PR など、デジタル全チャネルに対応しています。オフライン施策の立案も可能です。" },
  { q: "施策の実行まで依頼できますか？", a: "はい。施策立案後、運用代行サービスとして実行フェーズもご支援可能です。一気通貫で対応します。" },
  { q: "予算が少ない場合でも対応できますか？", a: "はい。予算規模に関わらず、現状リソースの中で最もROIが高い施策に集中する計画を設計します。" },
  { q: "既存の施策リストを見直してもらうことはできますか？", a: "はい。既存施策の評価・整理・優先順位の再設計も対応可能です。" },
];

export default function PlanningPage() {
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
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">Action Planning</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 max-w-3xl">
            戦略を、<br />
            <span>動かせる施策へ。</span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl mb-14">
            優れた戦略も、実行されなければ意味がありません。チャネル選定・予算配分・優先順位を最適化し、ROIを最大化する施策ポートフォリオを設計します。
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">施策立案の全体像</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">戦略を実行可能な具体的アクションに分解し、最大のROIを生む計画を設計します。</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-5 tracking-tight">施策立案のご相談はお気軽に</h2>
          <p className="text-[#737373] mb-10 leading-relaxed">現在の施策状況や課題をお聞かせください。初回相談は無料です。</p>
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
