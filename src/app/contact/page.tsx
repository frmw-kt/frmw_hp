"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="bg-[#0a0a0a] text-white py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-white/40 text-sm hover:text-white transition-colors mb-8">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            トップへ戻る
          </Link>
          <span className="inline-flex items-center border border-white/10 rounded-full px-3 py-1 text-[11px] text-white/30 uppercase tracking-[0.2em] mb-6">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">お問い合わせ</h1>
          <p className="text-white/40 text-base max-w-md leading-relaxed">
            サービスに関するご質問・ご相談はこちらからお気軽にどうぞ。通常2営業日以内にご返答します。
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-2xl mx-auto px-6">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 border border-[#e5e5e5] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-3">送信完了しました</h2>
              <p className="text-[#737373] mb-8 leading-relaxed">
                お問い合わせいただきありがとうございます。<br />2営業日以内にご連絡いたします。
              </p>
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-white bg-[#0a0a0a] px-7 py-3.5 rounded-full hover:bg-[#1a1a1a] transition-colors">
                トップへ戻る
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#0a0a0a] mb-1.5">会社名</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="株式会社〇〇"
                  className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm text-[#0a0a0a] placeholder-[#a3a3a3] focus:outline-none focus:ring-1 focus:ring-[#0a0a0a] focus:border-[#0a0a0a] bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0a0a0a] mb-1.5">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="山田 太郎"
                  className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm text-[#0a0a0a] placeholder-[#a3a3a3] focus:outline-none focus:ring-1 focus:ring-[#0a0a0a] focus:border-[#0a0a0a] bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0a0a0a] mb-1.5">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="example@company.com"
                  className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm text-[#0a0a0a] placeholder-[#a3a3a3] focus:outline-none focus:ring-1 focus:ring-[#0a0a0a] focus:border-[#0a0a0a] bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0a0a0a] mb-1.5">ご興味のあるサービス</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm text-[#0a0a0a] focus:outline-none focus:ring-1 focus:ring-[#0a0a0a] focus:border-[#0a0a0a] bg-white transition-colors"
                >
                  <option value="">選択してください</option>
                  <option value="consulting">マーケティングコンサルティング</option>
                  <option value="operations">運用代行</option>
                  <option value="production">制作</option>
                  <option value="school">スクール</option>
                  <option value="other">その他・未定</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0a0a0a] mb-1.5">
                  お問い合わせ内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="ご相談内容・ご質問をご記入ください"
                  className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm text-[#0a0a0a] placeholder-[#a3a3a3] focus:outline-none focus:ring-1 focus:ring-[#0a0a0a] focus:border-[#0a0a0a] bg-white transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#0a0a0a] text-white py-4 rounded-xl font-semibold hover:bg-[#1a1a1a] transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "送信中..." : "送信する"}
              </button>
              <p className="text-xs text-[#a3a3a3] text-center">
                送信いただいた情報は、お問い合わせへの返答にのみ使用します。
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
