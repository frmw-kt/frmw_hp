"use client";
import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
const subscribe = () => () => {};
export default function ContactForm({
  initialService = "",
}: {
  initialService?: string;
}) {
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    service: initialService,
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
      setError(
        "送信に失敗しました。入力内容は保持されています。時間をおいて再度お試しください。",
      );
    } finally {
      setSending(false);
    }
  };
  if (submitted)
    return (
      <div role="status" className="m-contact-success">
        <h2>送信が完了しました</h2>
        <p>
          お問い合わせありがとうございます。内容を確認し、ご記入のメールアドレスへご連絡します。
        </p>
        <Link href="/" className="m-text-link">
          ホームへ戻る →
        </Link>
      </div>
    );
  return (
    <form
      onSubmit={handleSubmit}
      className="m-contact-form"
      aria-busy={sending}
    >
      <fieldset disabled={!hydrated || sending} className="m-contact-fields">
        <p className="m-small">「必須」の項目をご入力ください。</p>
        {(["company", "name", "email"] as const).map((key) => (
          <div key={key}>
            <label htmlFor={key}>
              {
                { company: "会社名", name: "お名前", email: "メールアドレス" }[
                  key
                ]
              }{" "}
              <span>{key === "company" ? "任意" : "必須"}</span>
            </label>
            <input
              id={key}
              name={key}
              type={key === "email" ? "email" : "text"}
              autoComplete={
                { company: "organization", name: "name", email: "email" }[key]
              }
              required={key !== "company"}
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              maxLength={key === "email" ? 254 : 200}
            />
          </div>
        ))}
        <div>
          <label htmlFor="service">
            ご興味のあるサービス <span>任意</span>
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            <option value="">選択してください</option>
            {[
              ["business-improvement", "業務改善支援"],
              ["consulting", "マーケティングコンサルティング"],
              ["operations", "運用代行"],
              ["production", "制作"],
              ["app-development", "アプリ開発"],
              ["ai", "AI活用支援"],
              ["other", "その他・未定"],
            ].map(([v, t]) => (
              <option key={v} value={v}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message">
            お問い合わせ内容 <span>必須</span>
          </label>
          <p id="message-hint" className="m-small">
            現在の課題、目標、希望する支援、予算感や開始時期を、分かる範囲でお書きください。
          </p>
          <textarea
            id="message"
            name="message"
            required
            rows={7}
            maxLength={10000}
            aria-describedby="message-hint"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        {error && (
          <p role="alert" className="m-form-error">
            {error}
          </p>
        )}
        <button type="submit" disabled={sending} className="m-button">
          {sending ? "送信中…" : "この内容で送信する"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className="m-small">
          送信いただいた情報は、お問い合わせへの返答にのみ使用します。
        </p>
      </fieldset>
      <noscript>
        <p className="m-form-error">
          フォームの送信にはJavaScriptが必要です。ブラウザの設定で有効にしてください。サービス内容やご相談の準備は、このままお読みいただけます。
        </p>
      </noscript>
    </form>
  );
}
