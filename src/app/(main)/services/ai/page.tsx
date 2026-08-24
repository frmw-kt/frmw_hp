import Link from "next/link";
import type { Metadata } from "next";
import ServicePageAnimations from "@/components/ServicePageAnimations";

export const metadata: Metadata = {
  title: "AI活用支援",
  description: "AI営業メール生成・チャットボット・コンテンツ自動化など、ビジネスの各工程にAIを実装。反復作業を自動化し、人的コストを削減しながら成果を最大化します。",
};

const GOLD = "#C9A84C";
const GOLD_DARK = "#A8892E";

const features = [
  {
    number: "01",
    title: "AI営業メール自動生成",
    description: "企業情報・担当者情報をもとに、LLMがパーソナライズされた営業メールを自動生成。手動で1通ずつ書いていた作業を数秒に短縮し、件数を数十倍に拡大できます。",
  },
  {
    number: "02",
    title: "AIチャットボット構築",
    description: "自社の製品・サービス情報をナレッジベース化し、問い合わせ対応・リード獲得を自動化するカスタムAIチャットボットを構築します。RAG（検索拡張生成）で高精度な回答を実現します。",
  },
  {
    number: "03",
    title: "AIコンテンツ制作支援",
    description: "ブログ記事・SNS投稿・広告コピー・メルマガなど、マーケティングコンテンツをAIで高速生成。ブランドの文体・トーンを学習させることで、高品質なコンテンツを大量に制作できます。",
  },
  {
    number: "04",
    title: "AIデータ分析・予測",
    description: "広告データ・売上データ・顧客データをAIが自動分析し、インサイト抽出・改善提案・売上予測レポートを生成します。スプレッドシート集計から脱却し、データドリブンな意思決定を実現します。",
  },
];

const painPoints = [
  "営業メール作成に時間がかかり、アプローチ件数を増やせない",
  "問い合わせ対応・FAQ回答に人手とコストがかかっている",
  "コンテンツ制作が追いつかず、SNS・ブログの更新が止まっている",
  "データはあるが集計・分析に時間がかかり、活用できていない",
  "AIを導入したいが何から始めればいいか分からない",
  "社内にAI・エンジニアリングの知識がなく、独自ツールを作れない",
];

const works = [
  {
    title: "AI営業支援システム（autosales）",
    desc: "リード管理・AI営業メール生成・一括送信・キャンペーン管理を統合した営業自動化システム。Groq APIでリアルタイム生成。",
    tags: ["Groq API", "LLM", "Next.js", "Gmail API"],
  },
  {
    title: "競馬予測AIアプリ",
    desc: "過去のレースデータ・オッズデータを機械学習モデルで分析し、期待値ベースの馬券最適化を実現するWebアプリ。",
    tags: ["Python", "機械学習", "スクレイピング", "Next.js"],
  },
  {
    title: "広告データ自動分析（adops）",
    desc: "Meta・Google広告のデータを自動取得・可視化し、異常検知・改善提案をダッシュボードで提供するSaaSツール。",
    tags: ["データ分析", "自動化", "Next.js", "SQLite"],
  },
];

const steps = [
  { step: "01", title: "課題ヒアリング", desc: "現状の業務フロー・課題・目標を確認。AIで解決すべき工程を特定します" },
  { step: "02", title: "AI設計・提案", desc: "最適なAIモデル・ツール・システム構成を設計。費用・期間を提示します" },
  { step: "03", title: "開発・実装", desc: "AIツール・システムを開発・テスト。実業務に合わせてカスタマイズします" },
  { step: "04", title: "運用・改善", desc: "本番稼働後の精度モニタリング・改善・機能追加を継続サポートします" },
];

const faqs = [
  { q: "どんな業務にAIを活用できますか？", a: "営業・マーケティング・カスタマーサポート・データ分析・コンテンツ制作など、繰り返し発生する作業を中心に幅広く活用できます。まずはヒアリングでボトルネックを特定します。" },
  { q: "開発費用の目安を教えてください。", a: "小規模なAIツール（メール生成・チャットボット等）で30〜100万円・2〜4週間が目安です。要件・精度・連携システムによって異なりますのでご相談ください。" },
  { q: "既存のシステムやツールと連携できますか？", a: "はい。CRM・スプレッドシート・Slack・Gmail・各種SaaSとのAPI連携に対応しています。既存ワークフローを大きく変えずにAIを組み込めます。" },
  { q: "社内にエンジニアがいなくても導入できますか？", a: "問題ありません。設計から開発・運用まで一貫して対応します。導入後の操作レクチャー・マニュアル整備もサポートします。" },
];

export default function AIPage() {
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
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">AI Solutions</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-2xl">
            AI活用支援
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl">
            AI営業メール生成・チャットボット・コンテンツ自動化など、ビジネスの各工程にAIを実装。反復作業を自動化し、人的コストを削減しながら成果を最大化します。
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-reveal mb-12">
            <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
              For You
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
              こんな課題を抱えていませんか？
            </h2>
          </div>
          <div className="gsap-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {painPoints.map((text, i) => (
              <div key={i} className="gsap-card flex items-start gap-3 p-5 border border-[#e5e5e5] rounded-xl">
                <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: GOLD }} />
                <p className="text-sm text-[#0a0a0a] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#fafafa] border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-reveal flex items-end justify-between mb-12 pb-6 border-b border-[#e5e5e5]">
            <div>
              <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                AI活用の主なメニュー
              </h2>
            </div>
          </div>
          <div className="gsap-cards grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.number} className="gsap-card border border-[#e5e5e5] rounded-2xl p-10 hover:border-[#0a0a0a]/25 hover:shadow-sm transition-all duration-300">
                <p className="text-xs font-mono mb-6" style={{ color: GOLD_DARK }}>{f.number}</p>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4">{f.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="py-24 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-reveal mb-12 pb-6 border-b border-[#e5e5e5]">
            <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
              Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">自社開発・AI実績</h2>
          </div>
          <div className="gsap-cards grid grid-cols-1 md:grid-cols-3 gap-4">
            {works.map((w) => (
              <div key={w.title} className="gsap-card border border-[#e5e5e5] rounded-2xl p-8 hover:border-[#0a0a0a]/25 hover:shadow-sm transition-all duration-300">
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3">{w.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed mb-5">{w.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {w.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full border border-[#e5e5e5] text-[#737373]">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#0a0a0a] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-reveal flex items-end justify-between mb-16 pb-6 border-b border-white/8">
            <div>
              <span className="inline-flex items-center border border-white/10 rounded-full px-3 py-1 text-[11px] text-white/30 uppercase tracking-[0.2em] mb-4">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">導入の流れ</h2>
            </div>
          </div>
          <div className="gsap-process grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8">
            {steps.map((p) => (
              <div key={p.step} className="gsap-step bg-[#0a0a0a] p-8 md:p-10">
                <p className="text-xs font-mono mb-8" style={{ color: GOLD }}>{p.step}</p>
                <h3 className="text-lg font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fafafa] py-24 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 pb-6 border-b border-[#e5e5e5]">
            <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">よくある質問</h2>
          </div>
          <div className="max-w-3xl space-y-0 divide-y divide-[#e5e5e5]">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-8">
                <p className="text-base font-semibold text-[#0a0a0a] mb-3">{faq.q}</p>
                <p className="text-sm text-[#737373] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] bg-dot-grid py-36 border-t border-white/8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] mb-8"
            style={{ border: "1px solid rgba(201,168,76,0.2)", color: GOLD }}>
            Contact
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
            まずは<br />
            <span className="text-white/30">お気軽にご相談ください</span>
          </h2>
          <p className="text-white/35 text-base mb-12 max-w-md mx-auto leading-relaxed">
            どの業務にAIを活用できるか、一緒に考えます。初回相談は無料です。
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)" }}>
            無料相談を申し込む
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
