import Link from "next/link";
import type { Metadata } from "next";
import ServicePageAnimations from "@/components/ServicePageAnimations";

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
    description: "STP分析・4P設計・KPI設定など体系的なフレームワークを用いて、調査結果に基づいた実行可能なマーケティング戦略の策定、WHO WHAT HOWを明確にします。",
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

const painPoints = [
  "広告費をかけているのに問い合わせ・売上に繋がらない",
  "「なんとなく」でマーケティング施策を実施しており、根拠がない",
  "ターゲットや強みが整理されておらず、誰に何を届けているか不明確",
  "競合と差別化できていない・価格競争に巻き込まれている",
  "施策を実行しても効果検証ができず、改善が進まない",
  "マーケティングと営業が連携できておらず、リードが無駄になっている",
];

const deliverables = [
  { title: "市場・競合調査レポート", desc: "業界トレンド・競合ポジショニング・顧客インサイトを整理したレポート" },
  { title: "マーケティング戦略書", desc: "STP分析・4P設計・KPI体系・施策ロードマップを含む戦略ドキュメント" },
  { title: "施策実行プラン", desc: "チャネル別の具体的な施策・予算・スケジュールを明記したプランニングシート" },
  { title: "月次効果検証レポート", desc: "KPI達成状況・改善施策・次月アクションを含む定期レポート" },
];

const faqs = [
  { q: "料金はどのくらいですか？", a: "月額5万円〜対応しています。事業規模・支援内容によって異なりますので、まずはお気軽にご相談ください。" },
  { q: "コンサルティングだけの依頼は可能ですか？", a: "可能です。戦略立案のみ、特定フェーズのみのスポット対応にも対応しています。" },
  { q: "どのくらいの頻度で打ち合わせがありますか？", a: "基本は月2回（戦略確認・効果検証）ですが、プロジェクト状況に応じて柔軟に対応します。" },
  { q: "マーケティング担当者がいなくても依頼できますか？", a: "はい。担当者不在の状態から支援を開始するケースが最も多いです。社内体制の整備もあわせてご提案します。" },
  { q: "契約期間はどのくらいですか？", a: "最短3ヶ月からのご契約です。成果を出すために一定期間の継続が必要なため、基本は6ヶ月〜1年を推奨しています。" },
];

export default function ConsultingPage() {
  return (
    <>
      <ServicePageAnimations />

      {/* Hero */}
      <section className="service-hero relative bg-[#0a0a0a] text-white overflow-hidden py-32 md:py-44">
        <div className="service-hero-content relative max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/30 text-sm hover:text-white transition-colors mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            トップへ戻る
          </Link>
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">Consulting</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-2xl">
            マーケティング<br />
            <span>コンサルティング</span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl">
            戦略設計から実行支援まで一気通貫。データに基づく分析で、あなたのビジネスのマーケティング課題を解決し、持続的な成長を実現します。
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-reveal mb-12">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Challenges</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">こんなお悩みありませんか？</h2>
          </div>
          <div className="gsap-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((text, i) => (
              <div key={i} className="gsap-card flex items-start gap-3 p-6 bg-[#fafafa] border border-[#e5e5e5] rounded-2xl">
                <span className="w-5 h-5 rounded-full border-2 border-[#C9A84C] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                </span>
                <p className="text-sm text-[#0a0a0a] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-reveal mb-16">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">サービス内容</h2>
          </div>
          <div className="gsap-cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {features.map((f) => (
              <Link
                key={f.number}
                href={f.href}
                className="gsap-card group relative p-7 bg-white border border-[#e5e5e5] rounded-2xl hover:border-[#0a0a0a] transition-all duration-300 overflow-hidden"
              >
                <p className="text-4xl font-bold text-[#e5e5e5] mb-4 leading-none">{f.number}</p>
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{f.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "#C9A84C" }}>
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-reveal mb-16">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">支援の流れ</h2>
          </div>
          <div className="gsap-process grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={i} className="gsap-step relative group">
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

      {/* Deliverables */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-reveal mb-12">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Deliverables</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">提供する成果物</h2>
          </div>
          <div className="gsap-cards grid grid-cols-1 md:grid-cols-2 gap-5">
            {deliverables.map((d, i) => (
              <div key={i} className="gsap-card p-8 bg-white border border-[#e5e5e5] rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-[#A8892E]">0{i + 1}</span>
                  <h3 className="text-base font-semibold text-[#0a0a0a]">{d.title}</h3>
                </div>
                <p className="text-sm text-[#737373] leading-relaxed pl-7">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="gsap-reveal mb-12">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">よくある質問</h2>
          </div>
          <div className="divide-y divide-[#e5e5e5]">
            {faqs.map((faq, i) => (
              <div key={i} className="gsap-reveal py-7">
                <p className="text-base font-semibold text-[#0a0a0a] mb-3">Q. {faq.q}</p>
                <p className="text-sm text-[#737373] leading-relaxed pl-4 border-l-2 border-[#C9A84C]">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden bg-[#0a0a0a]">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="gsap-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
              マーケティング戦略の見直しを<br />検討中ですか？
            </h2>
            <p className="text-white/40 mb-10 leading-relaxed">まずは現状の課題をお聞かせください。初回相談は無料です。</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)" }}
            >
              無料相談を申し込む
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
