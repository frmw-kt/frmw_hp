"use client";

import { useState } from "react";
import Link from "next/link";

const problems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    text: "広告費をかけているのに売上が伸びない",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "マーケティング専門の人材が社内にいない",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    text: "何から手をつければいいかわからない",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "代理店に任せても成果が出ず、改善提案もない",
  },
];

const services = [
  {
    number: "01",
    title: "マーケティングコンサルティング",
    description: "調査・戦略立案・施策設計・効果検証まで一気通貫。データに基づいた確実な戦略で売上を底上げします。",
  },
  {
    number: "02",
    title: "運用代行",
    description: "広告・SNS・SEOの運用を専門チームが担当。継続的なPDCAで費用対効果を最大化します。",
  },
  {
    number: "03",
    title: "制作",
    description: "成果につながるLP・Webサイト・クリエイティブを制作。ブランド力と集客力を同時に高めます。",
  },
  {
    number: "04",
    title: "マーケティングスクール",
    description: "現役プロによる実践的な研修・スクール。社内マーケティング人材を育成します。",
  },
];

const stats = [
  { value: "+400%", label: "平均売上向上率" },
  { value: "-80%",  label: "平均CPA改善率" },
  { value: "100%",  label: "顧客継続率" },
  { value: "+50%",  label: "平均ROI改善" },
];

const steps = [
  { step: "01", title: "無料相談", desc: "現状・課題・ご要望をヒアリング。オンライン・対面どちらでも対応可能です。" },
  { step: "02", title: "課題の整理と提案", desc: "ヒアリング内容をもとに、最適な支援内容とプランをご提案します。" },
  { step: "03", title: "支援開始", desc: "ご契約後、最短1週間でスタート。スピーディに成果へ向けて動き出します。" },
];

const GOLD = "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)";

export default function LpPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service: "LPからの問い合わせ" }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white text-[#0a0a0a]">

      {/* ── ヘッダー ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5] px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-base font-bold tracking-tight" style={{ color: "#C9A84C" }}>Framework</span>
          <a
            href="#contact"
            className="text-sm font-medium text-white px-5 py-2.5 rounded-full transition-opacity hover:opacity-80"
            style={{ background: GOLD }}
          >
            無料相談する
          </a>
        </div>
      </header>

      {/* ── ヒーロー（ダーク） ── */}
      <section className="bg-[#0a0a0a] text-white px-6 pt-20 pb-24 text-center">
        <p className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: "#C9A84C" }}>
          Marketing Support
        </p>
        <h1
          className="font-bold leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
        >
          マーケティングの悩みを、<br />
          <span style={{ background: GOLD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            戦略から実行まで
          </span>
          <br />
          丸ごと解決します。
        </h1>
        <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-10">
          コンサルティング・運用代行・制作・スクールの4つのサービスで、
          中小企業のマーケティング課題を一気通貫でサポートします。
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0a0a0a] px-8 py-4 rounded-full transition-opacity hover:opacity-80"
          style={{ background: GOLD }}
        >
          まずは無料で相談する
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <p className="mt-3 text-xs text-white/30">相談料・資料送付・押し売り、すべて無料です</p>
      </section>

      {/* ── 実績数値 ── */}
      <section className="bg-[#fafafa] border-b border-[#e5e5e5] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className="text-4xl font-bold mb-1"
                style={{ background: GOLD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                {s.value}
              </p>
              <p className="text-xs text-[#737373]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── こんな悩みはありませんか ── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-3 text-center" style={{ color: "#C9A84C" }}>Problem</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            こんな悩みはありませんか？
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#fafafa] border border-[#e5e5e5] rounded-2xl p-6">
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white"
                  style={{ background: GOLD }}
                >
                  {p.icon}
                </span>
                <p className="text-[#0a0a0a] text-sm leading-relaxed pt-1.5">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-[#737373] text-sm mb-6">
              Frameworkはそのすべての課題に対して、<br className="hidden sm:block" />
              戦略立案から実行支援まで一気通貫でお応えします。
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-white px-8 py-4 rounded-full transition-opacity hover:opacity-80"
              style={{ background: GOLD }}
            >
              無料相談はこちら
            </a>
          </div>
        </div>
      </section>

      {/* ── サービス ── */}
      <section className="bg-[#fafafa] border-y border-[#e5e5e5] px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-3 text-center" style={{ color: "#C9A84C" }}>Services</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">4つのサービスで完全サポート</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div key={s.number} className="bg-white border border-[#e5e5e5] rounded-2xl p-8 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold text-white px-2.5 py-1 rounded-full"
                    style={{ background: GOLD }}
                  >
                    {s.number}
                  </span>
                </div>
                <h3 className="font-bold text-base mb-3 text-[#0a0a0a]">{s.title}</h3>
                <p className="text-[#737373] text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 支援の流れ ── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-3 text-center" style={{ color: "#C9A84C" }}>Flow</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">支援開始までの流れ</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold text-[#0a0a0a] mb-5"
                  style={{ background: GOLD }}
                >
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-7 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-[#e5e5e5]" />
                )}
                <h3 className="font-bold text-base mb-2 text-[#0a0a0a]">{s.title}</h3>
                <p className="text-[#737373] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-white px-8 py-4 rounded-full transition-opacity hover:opacity-80"
              style={{ background: GOLD }}
            >
              まずは無料で相談する
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── お問い合わせフォーム（ダーク） ── */}
      <section id="contact" className="bg-[#0a0a0a] px-6 py-24">
        <div className="max-w-xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-3 text-center" style={{ color: "#C9A84C" }}>Contact</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-3">まずは無料相談</h2>
          <p className="text-white/40 text-sm text-center mb-10 leading-relaxed">
            フォームにご記入いただければ、担当者より<br />1営業日以内にご連絡いたします。
          </p>

          {status === "sent" ? (
            <div className="text-center py-16">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: GOLD }}
              >
                <svg className="w-6 h-6 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-bold text-lg text-white mb-2">送信が完了しました</p>
              <p className="text-white/40 text-sm">1営業日以内にご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-white/50 mb-1.5">
                  お名前 <span style={{ color: "#C9A84C" }}>*</span>
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="山田 太郎"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5">会社名</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="株式会社〇〇"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5">
                  メールアドレス <span style={{ color: "#C9A84C" }}>*</span>
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="example@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5">
                  ご相談内容 <span style={{ color: "#C9A84C" }}>*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="現在の課題や、ご興味のあるサービスについてお気軽にご記入ください"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>
              {status === "error" && (
                <p className="text-red-400 text-xs">送信に失敗しました。時間をおいて再度お試しください。</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full text-sm font-medium text-[#0a0a0a] py-4 rounded-full transition-opacity hover:opacity-80 disabled:opacity-50"
                style={{ background: GOLD }}
              >
                {status === "sending" ? "送信中..." : "無料で相談する"}
              </button>
              <p className="text-center text-xs text-white/20 pt-1">
                送信することで、プライバシーポリシーに同意したものとみなします
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── フッター ── */}
      <footer className="bg-[#fafafa] border-t border-[#e5e5e5] px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-bold tracking-tight" style={{ color: "#C9A84C" }}>Framework</span>
          <Link href="/" className="text-xs text-[#737373] hover:text-[#0a0a0a] transition-colors">
            公式サイトはこちら
          </Link>
          <p className="text-xs text-[#737373]">© {new Date().getFullYear()} Framework. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
