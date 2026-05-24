import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アプリ開発 | Framework",
  description: "Webアプリ・業務システム・SaaSプロダクトの開発。マーケティング視点でビジネス課題を解決するプロダクト開発を提供します。",
};

const GOLD = "#C9A84C";
const GOLD_DARK = "#A8892E";

const features = [
  {
    number: "01",
    title: "Webアプリ・SaaS開発",
    description: "Next.js・React・Node.jsを中心としたモダンなWebアプリケーション開発。業務効率化ツール・顧客向けSaaSプロダクトなど、スピーディーに開発します。",
  },
  {
    number: "02",
    title: "業務効率化システム",
    description: "営業支援・広告管理・データ集計など、既存業務のボトルネックを解消するシステムを開発。手作業・スプレッドシート管理からの脱却を支援します。",
  },
  {
    number: "03",
    title: "データ活用・自動化",
    description: "スクレイピング・API連携・機械学習モデルの組み込みなど、データを活用した自動化プロダクトの開発が得意です。繰り返し業務をシステムで置き換えます。",
  },
  {
    number: "04",
    title: "スモールスタート開発",
    description: "大規模投資なしに検証できるMVP（最小構成プロダクト）の開発に特化。小さく始めて、成果を見ながら機能を拡張するアジャイルな進め方で対応します。",
  },
];

const works = [
  {
    title: "広告運用管理ツール（adops）",
    desc: "Meta・Google広告のデータをリアルタイムで可視化・自動化するSaaSプロダクト。自社開発・運用中。",
    tags: ["Next.js", "SQLite", "Meta API", "Google Ads API"],
  },
  {
    title: "営業支援システム（autosales）",
    desc: "リード管理・AI営業メール生成・一括送信・キャンペーン管理を統合した営業自動化システム。",
    tags: ["Next.js", "Groq API", "Gmail API", "SQLite"],
  },
  {
    title: "競馬予測アプリ",
    desc: "オッズデータと過去成績をもとに期待値ベースで馬券を最適化するWebアプリ。機械学習モデルを内蔵。",
    tags: ["Next.js", "Python", "ML", "スクレイピング"],
  },
];

const painPoints = [
  "業務がスプレッドシートや手作業に依存しており、スケールできない",
  "欲しいシステムがあるが、大手SIerに頼むと費用が高すぎる",
  "ノーコードツールでは限界があり、カスタム開発が必要",
  "アイデアはあるが、技術的な部分を任せられる人が見つからない",
  "既存ツールでは対応できない業務フローを自動化したい",
  "MVP（試作品）を素早く作って市場検証したい",
];

const steps = [
  { step: "01", title: "要件ヒアリング", desc: "解決したい課題・必要な機能・予算・納期を確認" },
  { step: "02", title: "設計・見積もり", desc: "技術スタック・開発スコープ・スケジュールを提示" },
  { step: "03", title: "開発・レビュー", desc: "アジャイルに開発・定期的に進捗確認" },
  { step: "04", title: "リリース・保守", desc: "本番リリース後の運用・改善サポートも対応" },
];

const faqs = [
  { q: "料金・期間の目安は？", a: "小規模なWebアプリで50〜150万円・1〜2ヶ月が目安です。規模・要件によって大きく異なりますので、まずはご相談ください。" },
  { q: "どんな技術スタックで開発しますか？", a: "フロントエンドはNext.js・React、バックエンドはNode.js・Python、DBはSQLite・PostgreSQL・Supabaseを主に使用します。" },
  { q: "リリース後の保守・改善も対応してもらえますか？", a: "はい。月次保守契約での対応も可能です。機能追加・バグ対応・パフォーマンス改善まで継続してサポートします。" },
  { q: "アイデア段階でも相談できますか？", a: "もちろんです。「こういうものを作りたい」という段階からヒアリングし、実現方法と必要な工数をご提案します。" },
];

export default function AppDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden py-32 md:py-44">
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/30 text-sm hover:text-white transition-colors mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            トップへ戻る
          </Link>
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">App Development</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-2xl">
            アプリ開発
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl">
            業務効率化・SaaS・データ活用など、ビジネス課題を解決するWebアプリをスモールスタートで開発します。
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
              For You
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
              こんな課題を抱えていませんか？
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {painPoints.map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-5 border border-[#e5e5e5] rounded-xl">
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
          <div className="flex items-end justify-between mb-12 pb-6 border-b border-[#e5e5e5]">
            <div>
              <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                対応できること
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.number} className="border border-[#e5e5e5] rounded-2xl p-10 hover:border-[#0a0a0a]/25 hover:shadow-sm transition-all duration-300">
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
          <div className="mb-12 pb-6 border-b border-[#e5e5e5]">
            <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
              Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">自社開発実績</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {works.map((w) => (
              <div key={w.title} className="border border-[#e5e5e5] rounded-2xl p-8 hover:border-[#0a0a0a]/25 hover:shadow-sm transition-all duration-300">
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
          <div className="flex items-end justify-between mb-16 pb-6 border-b border-white/8">
            <div>
              <span className="inline-flex items-center border border-white/10 rounded-full px-3 py-1 text-[11px] text-white/30 uppercase tracking-[0.2em] mb-4">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">開発の流れ</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8">
            {steps.map((p) => (
              <div key={p.step} className="bg-[#0a0a0a] p-8 md:p-10">
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
            アイデア段階でも構いません。作りたいものをお聞かせください。初回相談は無料です。
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
