"use client";

import { useState } from "react";
import Link from "next/link";

const GOLD = "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)";

const risks = [
  {
    number: "01",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
    title: "得意領域しか提案されない",
    desc: "代理店には必ず「強い手法」と「弱い手法」があります。1社に任せきりにすると、その会社が得意な施策だけが繰り返し提案され、本当に効果的な打ち手が見逃され続けます。たとえばリスティング広告に強い代理店は、SEOやSNSの可能性を過小評価しがちです。",
    symptoms: [
      "毎回似たような施策しか提案されない",
      "「それは対応外です」と断られることがある",
      "提案書の内容がいつも同じ方向性",
    ],
  },
  {
    number: "02",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "競争原理が働かず、コストが最適化されない",
    desc: "情報の非対称性から広告費の無駄を指摘することは難しく、予算が非効率なまま消費されていたり、市場感よりも高い顧客獲得単価になっていても気づくのが困難。契約を継続してもらうことが代理店の目標になりがちな構造的な問題があります。",
    symptoms: [
      "広告費の内訳について深く説明されたことがない",
      "費用対効果の改善提案がほとんどない",
      "毎月の報告が「現状維持」で終わっている",
    ],
  },
  {
    number: "03",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "チャネルをまたいだ一貫戦略が立てられない",
    desc: "広告・SNS・SEO・制作がそれぞれ別の会社に分かれていると、施策同士が連携せず、ブランドメッセージもバラバラになります。広告でAというメッセージを出しながら、SNSではBを訴求する——そんな矛盾が顧客体験を損ない、成果を下げます。",
    symptoms: [
      "広告とSNSで伝えているメッセージが違う",
      "LPと広告のトンマナが合っていない",
      "どの施策が売上に貢献しているか把握できない",
    ],
  },
  {
    number: "04",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "担当者ガチャ——誰が来るかで成果が変わる",
    desc: "代理店に依頼するとき、実際に動くのは「会社」ではなく「担当者個人」です。経験豊富な人が担当になれば成果は出ますが、新人や相性の合わない担当者に当たると、同じ費用を払っていても結果が大きく変わります。しかも担当者の選択権はほぼありません。異動・退職による引き継ぎのたびに、積み上げたノウハウと関係性がリセットされます。",
    symptoms: [
      "担当者が変わってから成果が落ちた経験がある",
      "担当者のレベルにばらつきがあると感じる",
      "誰が担当になるか事前に選べなかった",
    ],
  },
  {
    number: "05",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "自社にノウハウが蓄積されない",
    desc: "代理店に運用を任せるほど、マーケティングの知識・データ・判断軸が社外に蓄積されていきます。代理店を変更したり、内製化しようとしたときに「何も残っていない」という状況に陥りがちです。事業の重要資産が自社の外に置かれたままになります。",
    symptoms: [
      "代理店なしでは何もできないと感じる",
      "マーケティングの数値を自分で読み解けない",
      "もし代理店が倒産したらと思うと不安になる",
    ],
  },
];


const services = [
  {
    number: "01",
    title: "マーケティングコンサルティング",
    description: "全チャネルを横断した一貫戦略を立案。複数代理店では実現できない統合的なマーケティング設計を行います。",
  },
  {
    number: "02",
    title: "広告・SNS・SEO 運用代行",
    description: "リスティング・SNS・SEOをワンチームが担当。チャネル間の連携を最大化し、費用対効果を高めます。",
  },
  {
    number: "03",
    title: "LP・Web制作",
    description: "戦略に基づいたクリエイティブ制作。広告・SEOと一気通貫で設計するため、成果につながるデザインを実現します。",
  },
  {
    number: "04",
    title: "マーケティング研修・インハウス支援",
    description: "社内にマーケティング知識を蓄積。外部依存を減らしながら、自走できる組織づくりを支援します。",
  },
];

const stats = [
  { value: "+400%", label: "平均売上向上率" },
  { value: "-80%",  label: "平均CPA改善率" },
  { value: "100%",  label: "顧客継続率" },
  { value: "1社",   label: "窓口はFrameworkだけ" },
];

const steps = [
  { step: "01", title: "無料相談・現状診断", desc: "現在の代理店構成・費用・課題を整理。最適な体制をご提案します。" },
  { step: "02", title: "移行プランの設計", desc: "既存契約への影響を最小化しながら、Frameworkへの切り替えプランを策定します。" },
  { step: "03", title: "一括サポート開始", desc: "窓口はFramework1社に集約。戦略・運用・制作をシームレスに連携します。" },
];

export default function Lp2Page() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service: "LP2からの問い合わせ（複数代理店）" }),
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
          Marketing Efficiency
        </p>
        <h1
          className="font-bold leading-tight mb-6"
          style={{ fontSize: "clamp(1.9rem, 5.5vw, 3.8rem)" }}
        >
          広告代理店、<br />
          <span style={{ background: GOLD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            複数社に依頼
          </span>
          しませんか？
        </h1>
        <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-4">
          既存の代理店を活用しながら、<br />
          複数社体制による圧倒的成長を実現しませんか？<br className="hidden sm:block" />
          <span className="text-white/80 font-medium">セカンドオピニオンにFrameworkを。</span>
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
        <p className="mt-3 text-xs text-white/30">相談・提案書作成、すべて無料です</p>
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

      {/* ── 1社依存のリスク ── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-3 text-center" style={{ color: "#C9A84C" }}>Risk</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            1社依存が生む、5つのリスク
          </h2>
          <p className="text-[#737373] text-sm text-center mb-16 max-w-xl mx-auto leading-relaxed">
            「代理店に任せているのに成果が出ない」——その原因のほとんどは、ここにあります。<br />
            心当たりのある項目が多いほど、見直しのタイミングかもしれません。
          </p>

          <div className="space-y-5">
            {risks.map((r, i) => (
              <div key={i} className="bg-[#fafafa] border border-[#e5e5e5] rounded-2xl overflow-hidden">
                {/* カードヘッダー */}
                <div className="flex items-start gap-5 p-7">
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                      style={{ background: GOLD }}
                    >
                      {r.icon}
                    </span>
                    <span className="text-xs font-mono font-bold" style={{ color: "#C9A84C" }}>{r.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base mb-2 text-[#0a0a0a]">{r.title}</h3>
                    <p className="text-[#737373] text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
                {/* 症状リスト */}
                <div className="border-t border-[#e5e5e5] bg-white px-7 py-4">
                  <p className="text-xs font-bold text-[#0a0a0a] mb-2">こんな症状はありませんか？</p>
                  <ul className="space-y-1.5">
                    {r.symptoms.map((s, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[#737373]">
                        <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center text-[10px] font-bold" style={{ borderColor: "#C9A84C", color: "#C9A84C" }}>✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* チェックリストCTA */}
          <div className="mt-14 bg-[#0a0a0a] rounded-2xl p-8 text-center">
            <p className="text-white font-bold text-lg mb-2">3つ以上当てはまった方へ</p>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              代理店の見直しを検討するタイミングです。Frameworkが現状を無料で診断し、<br className="hidden sm:block" />
              最適な体制をご提案します。費用も手間もかかりません。
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0a0a0a] px-8 py-4 rounded-full transition-opacity hover:opacity-80"
              style={{ background: GOLD }}
            >
              無料で現状診断を受ける
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── 予算配分でリスクゼロスタート ── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-3 text-center" style={{ color: "#C9A84C" }}>Low Risk Start</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            既存の代理店はそのまま。<br />予算の一部から始められます。
          </h2>
          <p className="text-[#737373] text-sm text-center mb-14 max-w-xl mx-auto leading-relaxed">
            「今の代理店を切るのは怖い」——その不安は正しい判断です。<br />
            Frameworkは、既存の代理店契約を維持しながら並走できます。<br />
            まず予算の一部をFrameworkに配分し、成果を比較してから判断してください。
          </p>

          {/* 予算配分イメージ */}
          <div className="bg-[#fafafa] border border-[#e5e5e5] rounded-2xl p-8 mb-8">
            <p className="text-xs font-bold text-[#737373] uppercase tracking-widest mb-6 text-center">予算配分イメージ</p>
            <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-6">
              {/* 既存代理店 */}
              <div className="flex-1 bg-white border border-[#e5e5e5] rounded-xl p-5 text-center">
                <p className="text-xs text-[#737373] mb-2">既存の代理店</p>
                <p className="text-3xl font-bold text-[#0a0a0a] mb-1">80<span className="text-lg">%</span></p>
                <p className="text-xs text-[#737373]">現状維持・継続運用</p>
              </div>
              {/* 矢印 */}
              <div className="flex items-center justify-center text-[#e5e5e5] text-2xl font-light sm:flex-col">
                <span className="hidden sm:block">＋</span>
                <span className="sm:hidden">＋</span>
              </div>
              {/* Framework */}
              <div className="flex-1 border rounded-xl p-5 text-center text-white" style={{ background: GOLD }}>
                <p className="text-xs text-white/80 mb-2">Framework</p>
                <p className="text-3xl font-bold mb-1">20<span className="text-lg">%</span></p>
                <p className="text-xs text-white/80">まずここから試す</p>
              </div>
            </div>
            <p className="text-xs text-[#737373] text-center">
              ※配分はご予算・施策内容に応じて柔軟に設計します。10〜15%からでもスタート可能です。
            </p>
          </div>

          {/* 3ステップ比較 */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                phase: "Phase 1",
                title: "並走開始",
                desc: "既存代理店はそのまま継続。Frameworkに一部施策を担当させ、同じ期間・同じ指標で成果を計測します。",
                color: "#e5e5e5",
                textColor: "#737373",
              },
              {
                phase: "Phase 2",
                title: "成果を比較",
                desc: "CPA・CVR・売上への貢献度を数値で比較。感覚ではなくデータで判断できるため、意思決定に迷いがなくなります。",
                color: "#C9A84C44",
                textColor: "#C9A84C",
              },
              {
                phase: "Phase 3",
                title: "最適配分に移行",
                desc: "成果が出ている側に予算を移行。無理に全切り替えをする必要はなく、あなたのペースで体制を最適化できます。",
                color: GOLD,
                textColor: "#0a0a0a",
              },
            ].map((p) => (
              <div key={p.phase} className="bg-[#fafafa] border border-[#e5e5e5] rounded-2xl overflow-hidden">
                <div className="h-1.5" style={{ background: p.phase === "Phase 3" ? GOLD : p.phase === "Phase 2" ? "#C9A84C" : "#e5e5e5" }} />
                <div className="p-6">
                  <p className="text-xs font-bold mb-2" style={{ color: p.phase === "Phase 1" ? "#737373" : "#C9A84C" }}>{p.phase}</p>
                  <h3 className="font-bold text-base mb-2 text-[#0a0a0a]">{p.title}</h3>
                  <p className="text-[#737373] text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 安心ポイント */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "既存契約への影響", value: "なし" },
              { label: "最低発注予算", value: "相談可能" },
              { label: "いつでも終了", value: "縛りなし" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 bg-[#fafafa] border border-[#e5e5e5] rounded-xl px-6 py-4">
                <span className="text-lg font-bold flex-shrink-0" style={{ color: "#C9A84C" }}>✓</span>
                <div>
                  <p className="text-xs text-[#737373]">{item.label}</p>
                  <p className="font-bold text-sm text-[#0a0a0a]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── サービス ── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-3 text-center" style={{ color: "#C9A84C" }}>Services</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">複数社分を、1社でカバー</h2>
          <p className="text-[#737373] text-sm text-center mb-12">
            Frameworkの4サービスが連携することで、戦略から実行まで一気通貫を実現します。
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div key={s.number} className="bg-[#fafafa] border border-[#e5e5e5] rounded-2xl p-8 hover:shadow-md transition-shadow duration-200">
                <span
                  className="text-xs font-bold text-white px-2.5 py-1 rounded-full inline-block mb-4"
                  style={{ background: GOLD }}
                >
                  {s.number}
                </span>
                <h3 className="font-bold text-base mb-3 text-[#0a0a0a]">{s.title}</h3>
                <p className="text-[#737373] text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 切り替えの流れ ── */}
      <section className="bg-[#fafafa] border-y border-[#e5e5e5] px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-3 text-center" style={{ color: "#C9A84C" }}>Flow</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">切り替えまでの流れ</h2>
          <p className="text-[#737373] text-sm text-center mb-12">
            既存の代理店契約を確認しながら、無理のないスケジュールで移行をサポートします。
          </p>
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
            現在の代理店構成・課題・ご予算などをお聞かせください。<br />
            最適な体制を3営業日以内にご提案します。
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
              <p className="text-white/40 text-sm">3営業日以内にご連絡いたします。</p>
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
                  現在の代理店状況・ご相談内容 <span style={{ color: "#C9A84C" }}>*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="例：現在2社に依頼しているが、連携がうまくいっておらず成果が出ていない。広告費は月〇〇万円程度。"
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
