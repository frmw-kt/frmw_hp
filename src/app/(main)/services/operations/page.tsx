import Link from "next/link";
import type { Metadata } from "next";
import ServicePageAnimations from "@/components/ServicePageAnimations";

export const metadata: Metadata = {
  title: "運用代行",
  description: "SNS・広告・メールなどのマーケティング施策の運用を丸ごと代行。専任担当者が継続的に成果を出します。",
};

const features = [
  {
    number: "01",
    title: "広告運用代行",
    description: "Google・Meta・LINE・Yahoo!・TikTokなどの広告プラットフォームの設計・入稿・最適化を一貫して担当。費用対効果を最大化する運用で、CPAの継続的な改善を実現します。",
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
  { step: "03", title: "運用開始", desc: "専任担当者が施策を実行" },
  { step: "04", title: "報告・改善", desc: "月次レポートと改善提案でPDCA" },
];

const painPoints = [
  "広告を出しているがCPAが高く、費用対効果が出ていない",
  "社内に広告・SNS運用の専門人材がおらず、担当者が手探りで運用している",
  "代理店に任せているが、レポートが分かりにくく改善提案がない",
  "複数のチャネルを管理しきれず、施策がバラバラになっている",
  "運用業務に時間を取られ、本来のコア業務に集中できていない",
  "月々の広告費が適切かどうか判断できない",
];

const platforms = [
  { name: "Google広告", tags: ["検索", "P-MAX", "ディスプレイ", "YouTube"] },
  { name: "Meta広告", tags: ["Facebook", "Instagram", "リール"] },
  { name: "LINE広告", tags: ["タイムライン", "トークリスト"] },
  { name: "Yahoo!広告", tags: ["検索", "ディスプレイ"] },
  { name: "TikTok広告", tags: ["インフィード", "TopView"] },
  { name: "その他", tags: ["X(Twitter)", "Pinterest", "Smartnews"] },
];

const pricing = [
  {
    type: "スタート",
    fee: "広告費の20%",
    min: "月額5万円〜",
    desc: "初めて運用代行を依頼する方向け。小規模でも成果にこだわったPDCAを提供します。",
    items: ["月次レポート", "改善提案", "広告入稿・最適化", "月1回定例MTG"],
  },
  {
    type: "スタンダード",
    fee: "広告費の15〜18%",
    min: "月額15万円〜",
    desc: "複数媒体の横断管理と戦略的な運用改善を求める事業者向け。",
    items: ["全媒体横断レポート", "クリエイティブ改善提案", "LP改善提案", "月2回定例MTG", "Slack連携サポート"],
    recommended: true,
  },
  {
    type: "フルサポート",
    fee: "要相談",
    min: "月額30万円〜",
    desc: "大規模広告費の運用・戦略コンサル・クリエイティブ制作を統合した完全支援プラン。",
    items: ["戦略コンサルティング込み", "クリエイティブ制作込み", "LP制作・改善込み", "週次進捗共有", "担当PM専任"],
  },
];

const faqs = [
  { q: "代行費用はいくらですか？", a: "月額5万円〜対応しています。広告費・運用規模に応じてプランをご提案します。まずはご相談ください。" },
  { q: "広告費はいくらから対応できますか？", a: "月額10万円の広告費からご対応しています。少額予算でも効果的な運用プランをご提案します。" },
  { q: "現在他の代理店に依頼中ですが、乗り換えは可能ですか？", a: "可能です。アカウントの引き継ぎから過去データの分析まで丁寧にサポートします。切り替えのタイミングについても相談に応じます。" },
  { q: "どのくらいの期間で成果が出ますか？", a: "広告の最適化には一般的に3ヶ月程度必要です。ただし業種・予算・競合環境によって異なるため、初回ヒアリングで目安をお伝えします。" },
  { q: "レポートはどのくらいの頻度でもらえますか？", a: "月次レポートを基本としていますが、プランによって週次レポートや随時Slackでの数値共有にも対応しています。" },
  { q: "クリエイティブ（バナー・動画）の制作も依頼できますか？", a: "はい。制作チームと連携したクリエイティブ制作にも対応しています。広告運用と制作をセットで依頼いただくことでより高い効果が期待できます。" },
];

export default function OperationsPage() {
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
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">Operations</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-2xl">
            <span>運用代行</span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl">
            SNS・広告・SEO・CRMの運用をプロに任せ、コア業務に集中してください。月間8,000万円超の広告運用経験を持つ専任担当者が、継続的に成果を追い求めます。
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">代行できること</h2>
          </div>
          <div className="gsap-cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.number}
                className="gsap-card group relative p-8 bg-white border border-[#e5e5e5] rounded-2xl hover:border-[#0a0a0a] transition-all duration-300 overflow-hidden"
              >
                <p className="text-4xl font-bold text-[#e5e5e5] mb-4 leading-none">{f.number}</p>
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3">{f.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Platforms</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">対応媒体</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {platforms.map((p) => (
              <div key={p.name} className="p-6 bg-[#fafafa] border border-[#e5e5e5] rounded-2xl">
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3">{p.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-white border border-[#e5e5e5] rounded-full text-[#737373]">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">料金プランの目安</h2>
            <p className="text-sm text-[#737373] mt-3">※ 広告費・支援範囲によって変動します。詳細はお問い合わせください。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricing.map((p) => (
              <div key={p.type} className={`relative p-8 rounded-2xl border ${p.recommended ? "border-[#C9A84C] bg-white shadow-lg" : "border-[#e5e5e5] bg-white"}`}>
                {p.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-4 py-1 rounded-full text-black font-semibold" style={{ background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 100%)" }}>
                    人気プラン
                  </span>
                )}
                <p className="text-xs text-[#737373] uppercase tracking-widest mb-2">{p.type}</p>
                <p className="text-2xl font-bold text-[#0a0a0a] mb-1">{p.fee}</p>
                <p className="text-sm text-[#C9A84C] font-medium mb-4">{p.min}</p>
                <p className="text-sm text-[#737373] leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#0a0a0a]">
                      <svg className="w-4 h-4 shrink-0" style={{ color: "#C9A84C" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-reveal mb-16">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">開始までの流れ</h2>
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

      {/* FAQ */}
      <section className="py-24 bg-[#fafafa]">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">運用工数を削減しませんか？</h2>
            <p className="text-white/40 mb-10 leading-relaxed">現在の運用状況や課題をお聞かせください。最適な運用体制をご提案します。初回相談は無料です。</p>
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
