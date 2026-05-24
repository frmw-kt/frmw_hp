import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "広告運用管理（adops）| Framework",
  description: "Meta・Google広告の運用データをリアルタイムで可視化・分析。レポート自動化・クリエイティブ管理・アラート設定を一元管理するSaaSツール。",
};

const GOLD = "#C9A84C";
const GOLD_DARK = "#A8892E";

const features = [
  {
    number: "01",
    title: "リアルタイムダッシュボード",
    description: "Meta・Google広告の消化額・CPA・CVR・ROASをリアルタイムで一元表示。複数媒体のデータを横断して比較でき、意思決定のスピードが上がります。",
  },
  {
    number: "02",
    title: "レポート自動化",
    description: "日次・週次・月次レポートを自動生成。手動集計の工数をゼロにし、分析・改善に集中できる環境を実現します。クライアントへの共有用レポートにも対応します。",
  },
  {
    number: "03",
    title: "クリエイティブ管理",
    description: "バナー・動画などの広告クリエイティブをパフォーマンスデータと紐づけて管理。勝ちパターンの特定と素材の改善サイクルを高速化します。",
  },
  {
    number: "04",
    title: "アラート・異常検知",
    description: "CPA悪化・予算超過・配信停止などの異常を自動検知してアラート通知。見逃しや対応遅延による広告費の無駄を防ぎます。",
  },
];

const painPoints = [
  "複数の広告媒体のデータをスプレッドシートで手動集計しており、時間がかかる",
  "CPAが突然悪化しても気づくのが遅く、無駄な広告費が発生している",
  "クリエイティブごとのパフォーマンスが把握できず、改善が進まない",
  "クライアントへのレポート作成に毎月数時間かかっている",
  "広告アカウントが複数あり、全体像を把握しにくい",
  "担当者が変わるたびに運用ノウハウが失われている",
];

const steps = [
  { step: "01", title: "ヒアリング", desc: "運用中の媒体・アカウント構成・課題を確認" },
  { step: "02", title: "初期設定", desc: "広告アカウントとの連携・ダッシュボード設定" },
  { step: "03", title: "運用開始", desc: "データ自動取得・アラート設定・レポート自動化" },
  { step: "04", title: "改善サポート", desc: "データを基にした改善提案・設定最適化" },
];

const faqs = [
  { q: "料金はどのくらいですか？", a: "月額5万円〜対応しています。管理アカウント数・連携媒体数によって異なりますので、まずはご相談ください。" },
  { q: "対応している広告媒体はどれですか？", a: "Meta（Facebook/Instagram）・Google広告に対応しています。その他の媒体は順次対応予定です。" },
  { q: "既存の広告代理店と並行して使えますか？", a: "はい。データの可視化・管理ツールとして、既存の運用体制と並行して導入できます。" },
  { q: "広告運用の知識がなくても使えますか？", a: "基本的な指標（CPA・CVR等）の理解があれば使いこなせます。初期設定・操作レクチャーもサポートします。" },
];

export default function AdopsPage() {
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
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">adops</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-2xl">
            広告運用管理
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl">
            Meta・Google広告のデータをリアルタイムで可視化・自動化。手動集計の無駄をなくし、改善サイクルを加速します。
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
                Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                主な機能
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

      {/* Process */}
      <section className="bg-[#0a0a0a] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 pb-6 border-b border-white/8">
            <div>
              <span className="inline-flex items-center border border-white/10 rounded-full px-3 py-1 text-[11px] text-white/30 uppercase tracking-[0.2em] mb-4">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">導入の流れ</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8">
            {steps.map((p, i) => (
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
            現在の運用環境・課題をお聞きし、最適な導入プランをご提案します。初回相談は無料です。
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
