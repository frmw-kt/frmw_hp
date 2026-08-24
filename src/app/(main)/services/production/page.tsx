import Link from "next/link";
import type { Metadata } from "next";
import ServicePageAnimations from "@/components/ServicePageAnimations";

export const metadata: Metadata = {
  title: "制作",
  description: "LP・サイト・バナー・動画など、成果につながるクリエイティブ制作。ブランドを強化するビジュアルを届けます。",
};

const features = [
  {
    number: "01",
    title: "ランディングページ（LP）制作",
    description: "コンバージョンを最大化するLP設計・デザイン・コーディングを一貫して対応。顧客心理に沿った構成でCV率向上を実現します。ABテスト設計にも対応します。",
    href: "/services/production/lp",
  },
  {
    number: "02",
    title: "Webサイト制作",
    description: "コーポレートサイト・サービスサイトなど、目的に応じたWebサイトを設計・制作します。SEOも考慮した構造で設計し、集客から問い合わせまでの導線を最適化します。",
    href: "/services/production/web",
  },
  {
    number: "03",
    title: "バナー・広告クリエイティブ",
    description: "SNS広告・ディスプレイ広告向けのバナー制作。クリック率・転換率を意識したクリエイティブを提供します。複数パターンのABテスト素材にも対応します。",
    href: null,
  },
  {
    number: "04",
    title: "動画・モーション制作",
    description: "SNS動画・広告動画・インフォグラフィックなど、視覚的に訴求力の高いコンテンツを制作します。縦型・横型・正方形など各媒体に最適なフォーマットで納品します。",
    href: null,
  },
];

const steps = [
  { step: "01", title: "要件ヒアリング", desc: "目的・ターゲット・納期・予算を確認" },
  { step: "02", title: "企画・設計", desc: "構成・ワイヤーフレーム作成" },
  { step: "03", title: "デザイン・制作", desc: "デザイン提案〜修正〜完成" },
  { step: "04", title: "納品・検証", desc: "公開後の効果測定も支援" },
];

const painPoints = [
  "LPやサイトを作ったが問い合わせ・購入に繋がらない",
  "デザインは綺麗だが、ビジネス成果に繋がっていない",
  "制作会社にお任せしたら、意図と違うものが上がってきた",
  "バナーやクリエイティブが古くなってきたが更新できていない",
  "広告を出しているがLP自体の品質が低くCVRが改善しない",
  "動画コンテンツを始めたいが、何から手をつければいいか分からない",
];

const productionPoints = [
  { title: "マーケティング視点の設計", desc: "見た目だけでなく、ユーザー心理・購買導線・CV設計を重視したクリエイティブを制作します。" },
  { title: "広告運用との一体化", desc: "広告運用チームと連携し、クリック後のCV率も含めて最適化します。制作単体で終わらせません。" },
  { title: "改善を前提とした納品", desc: "公開後のデータを見ながら継続的に改善できる体制を提供します。ABテスト設計も対応可能です。" },
];

const faqs = [
  { q: "制作のみの依頼は可能ですか？", a: "可能です。ただし広告運用・コンサルティングとセットでご依頼いただくことで、より高い成果が期待できます。" },
  { q: "修正は何回まで対応してもらえますか？", a: "基本2〜3回の修正まで含まれています。追加修正は別途お見積もりとなります。" },
  { q: "納品までの期間はどのくらいですか？", a: "LPで約3〜4週間、コーポレートサイトで約6〜8週間が目安です。お急ぎの場合はご相談ください。" },
  { q: "既存サイトの改修も対応できますか？", a: "はい。既存サイトの部分改修・リニューアルにも対応しています。現状の課題をヒアリングした上でご提案します。" },
];

export default function ProductionPage() {
  return (
    <>
      <ServicePageAnimations />
      <section className="service-hero relative bg-[#0a0a0a] text-white overflow-hidden py-32 md:py-44">
        <div className="service-hero-content relative max-w-7xl mx-auto px-6">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">制作メニュー</h2>
          </div>
          <div className="gsap-cards grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f) => {
              const inner = (
                <>
                  <p className="text-4xl font-bold text-[#e5e5e5] mb-4 leading-none">{f.number}</p>
                  <h3 className="text-base font-semibold text-[#0a0a0a] mb-3">{f.title}</h3>
                  <p className="text-sm text-[#737373] leading-relaxed">{f.description}</p>
                  {f.href && (
                    <div className="mt-5 flex items-center gap-2 text-sm font-medium" style={{ color: "#C9A84C" }}>
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
                  className="gsap-card group relative p-8 bg-white border border-[#e5e5e5] rounded-2xl hover:border-[#0a0a0a] transition-all duration-300 overflow-hidden"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={f.number}
                  className="gsap-card group relative p-8 bg-white border border-[#e5e5e5] rounded-2xl hover:border-[#0a0a0a] transition-all duration-300 overflow-hidden"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Points */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-reveal mb-12">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">Frameworkの制作が選ばれる理由</h2>
          </div>
          <div className="gsap-cards grid grid-cols-1 md:grid-cols-3 gap-5">
            {productionPoints.map((p, i) => (
              <div key={i} className="gsap-card p-8 bg-[#fafafa] border border-[#e5e5e5] rounded-2xl">
                <p className="text-xs font-mono text-[#A8892E] mb-4">0{i + 1}</p>
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3">{p.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-reveal mb-16">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">制作の流れ</h2>
          </div>
          <div className="gsap-process grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={i} className="gsap-step relative group">
                <div className="bg-white border border-[#e5e5e5] p-7 rounded-2xl h-full hover:border-[#0a0a0a] transition-all duration-300">
                  <p className="text-5xl font-bold text-[#e5e5e5] mb-4 leading-none">{s.step}</p>
                  <h3 className="text-base font-semibold text-[#0a0a0a] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#737373] leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 text-[#d4d4d4] z-10 bg-[#fafafa]">
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

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">よくある質問</h2>
          </div>
          <div className="divide-y divide-[#e5e5e5]">
            {faqs.map((faq, i) => (
              <div key={i} className="py-7">
                <p className="text-base font-semibold text-[#0a0a0a] mb-3">Q. {faq.q}</p>
                <p className="text-sm text-[#737373] leading-relaxed pl-4 border-l-2 border-[#C9A84C]">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden bg-[#0a0a0a]">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="gsap-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">制作のご相談はお気軽に</h2>
            <p className="text-white/40 mb-10 leading-relaxed">制作物の種類・目的・予算感をお聞かせいただければ、最適なプランをご提案します。初回相談は無料です。</p>
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
