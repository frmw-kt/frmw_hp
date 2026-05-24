"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const GOLD = "#C9A84C";
const GOLD_DARK = "#A8892E";

const overallStats = [
  { value: "8,000万円", unit: "/月", label: "運用広告費" },
  { value: "50+",       unit: "",    label: "支援実績" },
  { value: "100%",      unit: "",    label: "継続率" },
  { value: "-68%",      unit: "",    label: "平均CPA改善" },
];

type Case = {
  id: string;
  industry: string;
  tag: string;
  company: string;
  challenge: string;
  approach: string[];
  services: string[];
  budget: string;
  period: string;
  results: { label: string; before: string; after: string; delta: string; positive: boolean }[];
  highlight: { value: string; label: string };
};

const cases: Case[] = [
  {
    id: "real-estate",
    industry: "不動産",
    tag: "不動産",
    company: "売買仲介会社（従業員30名規模）",
    challenge:
      "Meta広告を自社運用していたが問い合わせCPAが1.5万円を超え、質の低いリードが多く営業工数を圧迫。広告費300万円/月を投下しているにもかかわらず成約件数が伸び悩んでいた。",
    approach: [
      "既存顧客データをもとに類似オーディエンスを再構築",
      "クリエイティブを20パターン同時テストし、勝ちパターンを特定",
      "LP導線を成約率最重視で全面リニューアル",
      "追客メールシナリオを設計し商談化率を底上げ",
    ],
    services: ["Meta広告運用代行", "LP制作", "CRM設計"],
    budget: "300万円/月",
    period: "支援開始から3ヶ月",
    results: [
      { label: "問い合わせCPA", before: "15,200円", after: "4,800円", delta: "-68%", positive: true },
      { label: "月間成約件数",  before: "8件",        after: "27件",    delta: "+238%", positive: true },
      { label: "商談化率",      before: "12%",        after: "31%",     delta: "+19pt", positive: true },
    ],
    highlight: { value: "-68%", label: "CPA改善" },
  },
  {
    id: "online-school",
    industry: "スクール",
    tag: "オンラインスクール",
    company: "プログラミング・マーケティングスクール（受講生500名規模）",
    challenge:
      "競合スクールの増加により受講生獲得コスト（CPO）が急騰。広告費500万円/月を使っても月間新規受講生が伸び悩み、LTVも低下傾向。ファネル全体の再設計が急務だった。",
    approach: [
      "無料体験会の申込から受講契約までの全導線を可視化・改善",
      "Meta/Google/TikTokの媒体ミックスを最適化",
      "無料体験参加者向けのフォローアップLINE配信シナリオを構築",
      "既存受講生のアップセル・継続率改善施策を並行実施",
    ],
    services: ["マーケティングコンサルティング", "広告運用代行（Meta/Google）", "CRM・LINE設計"],
    budget: "500万円/月",
    period: "支援開始から6ヶ月",
    results: [
      { label: "月間新規受講生",    before: "22名",  after: "78名",   delta: "+255%", positive: true },
      { label: "受講生獲得CPO",     before: "23万円", after: "9.4万円", delta: "-59%",  positive: true },
      { label: "受講生継続率（3ヶ月）", before: "51%", after: "79%",  delta: "+28pt", positive: true },
    ],
    highlight: { value: "3.5倍", label: "受講生数" },
  },
  {
    id: "remodeling",
    industry: "リフォーム",
    tag: "リフォーム・外壁塗装",
    company: "外壁塗装・屋根リフォーム会社（地域密着、従業員15名）",
    challenge:
      "集客をポスティングと紹介に100%依存。デジタル広告の知見がなく、どこから始めればよいか分からない状態。季節変動が大きく、閑散期の売上が読めないことも課題だった。",
    approach: [
      "Meta広告をゼロから設計・運用（初月は少額テストから開始）",
      "「外壁の劣化診断」を訴求する無料オファー型LPを制作",
      "地域・住宅所有者属性に絞ったターゲティングを精緻化",
      "問い合わせから見積もり、契約までの営業フローも整備",
    ],
    services: ["Meta広告運用代行", "LP制作", "マーケティングコンサルティング"],
    budget: "80万円/月",
    period: "支援開始から4ヶ月",
    results: [
      { label: "月間問い合わせ数", before: "3件（紹介のみ）", after: "48件", delta: "+1,500%", positive: true },
      { label: "月商",            before: "基準月比",        after: "+310%", delta: "+310%",  positive: true },
      { label: "広告ROI",         before: "—",              after: "620%",  delta: "新規達成", positive: true },
    ],
    highlight: { value: "620%", label: "広告ROI" },
  },
  {
    id: "tax-accountant",
    industry: "士業",
    tag: "士業",
    company: "税理士法人（スタッフ8名、相続税専門）",
    challenge:
      "顧問先からの紹介が売上の95%を占め、新規開拓に課題。デジタルへの投資経験がなく「何をすれば良いかわからない」状態。年間の新規顧問契約件数を3倍にする目標を設定。",
    approach: [
      "相続税申告・生前対策をテーマにしたSEO記事を月4本制作",
      "Googleビジネスプロフィールを最適化し地域検索での表示を強化",
      "「相続税シミュレーター」の無料ツールをLP内に実装しリード獲得",
      "メルマガシナリオで潜在客を育成し相談予約につなげる設計",
    ],
    services: ["SEO・コンテンツマーケティング", "LP制作", "マーケティングコンサルティング"],
    budget: "50万円/月",
    period: "支援開始から8ヶ月",
    results: [
      { label: "自然検索流入",      before: "月120PV",  after: "月4,800PV", delta: "+3,900%", positive: true },
      { label: "デジタル経由の相談", before: "0件/月",   after: "22件/月",   delta: "新規達成", positive: true },
      { label: "年間新規顧問契約",  before: "12件",      after: "41件",      delta: "+242%",   positive: true },
    ],
    highlight: { value: "+242%", label: "新規顧問契約" },
  },
  {
    id: "d2c",
    industry: "EC・通販",
    tag: "EC・D2C",
    company: "サプリメント・健康食品D2Cブランド（自社EC）",
    challenge:
      "広告費1,200万円/月を投下しているが、新規獲得コストの上昇とLTVの低下が同時進行。ROAS180%と収益性が悪化し、このままでは赤字転落が目前の状態だった。",
    approach: [
      "広告アカウント全体を監査し、採算割れのキャンペーンを停止・予算を集中",
      "Meta/Google/アフィリエイトの媒体別ROASを可視化し配分を最適化",
      "定期購入移行率を上げるためのLINE・メール自動配信を設計",
      "同梱物・解約阻止フロー・アップセルシナリオを一から再構築",
    ],
    services: ["広告運用代行（Meta/Google）", "アフィリエイト管理", "CRM・LTV改善"],
    budget: "1,200万円/月",
    period: "支援開始から5ヶ月",
    results: [
      { label: "ROAS",            before: "180%",  after: "510%",  delta: "+330pt",  positive: true },
      { label: "定期継続率（3ヶ月）", before: "38%", after: "67%",  delta: "+29pt",   positive: true },
      { label: "月次営業利益",     before: "赤字",  after: "黒字転換", delta: "黒字転換", positive: true },
    ],
    highlight: { value: "510%", label: "ROAS達成" },
  },
];

const industries = ["すべて", "不動産", "スクール", "リフォーム・外壁塗装", "士業", "EC・D2C"];

export default function CasesPage() {
  const [active, setActive] = useState("すべて");

  const filtered = active === "すべて" ? cases : cases.filter((c) => c.tag === active);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] text-white py-32 border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <span
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] mb-8"
              style={{ border: "1px solid rgba(201,168,76,0.2)", color: GOLD }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: `linear-gradient(135deg, #E2C16A, #A8892E)` }} />
              Case Studies
            </span>
            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight mb-8">
              数字で語る、
              <br />
              <span className="text-white/30">支援の実績。</span>
            </h1>
            <p className="text-white/40 text-base max-w-lg leading-relaxed">
              月間8,000万円超の広告費を運用してきた経験をもとに、各社の課題に合わせた戦略で確実な成果を出してきました。
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Overall Stats ── */}
      <section className="bg-[#111] border-b border-white/8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/8">
            {overallStats.map((s, i) => (
              <AnimateIn key={s.label} delay={(i + 1) as 1 | 2 | 3 | 4} className="py-12 px-8 text-center">
                <p className="text-4xl md:text-5xl font-semibold tracking-tight mb-1" style={{ color: GOLD }}>
                  {s.value}
                  {s.unit && <span className="text-2xl">{s.unit}</span>}
                </p>
                <p className="text-xs text-white/25 uppercase tracking-[0.2em] mt-2">{s.label}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cases ── */}
      <section className="bg-[#fafafa] py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <AnimateIn className="flex items-end justify-between mb-12 pb-6 border-b border-[#e5e5e5]">
            <div>
              <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
                Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                支援事例
              </h2>
            </div>
            <p className="hidden md:block text-sm text-[#737373] max-w-xs text-right leading-relaxed">
              業種・規模・課題はさまざまですが、<br />
              いずれも数字で成果を出してきました。
            </p>
          </AnimateIn>

          {/* Filter */}
          <AnimateIn className="flex flex-wrap gap-2 mb-12">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setActive(ind)}
                className={`text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                  active === ind
                    ? "text-black border-transparent font-semibold"
                    : "border-[#e5e5e5] text-[#737373] hover:border-[#0a0a0a]/30 hover:text-[#0a0a0a]"
                }`}
                style={active === ind ? { background: `linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)` } : {}}
              >
                {ind}
              </button>
            ))}
          </AnimateIn>

          {/* Case cards */}
          <div className="space-y-6">
            {filtered.map((c, i) => (
              <AnimateIn key={c.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="border border-[#e5e5e5] rounded-2xl overflow-hidden hover:border-[#0a0a0a]/20 hover:shadow-md transition-all duration-300">

                  {/* Card header */}
                  <div className="bg-[#0a0a0a] px-8 pt-8 pb-7">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <span
                          className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border mb-4 inline-block"
                          style={{ border: "1px solid rgba(201,168,76,0.25)", color: GOLD }}
                        >
                          {c.tag}
                        </span>
                        <p className="text-white/40 text-sm">{c.company}</p>
                      </div>
                      {/* Highlight metric */}
                      <div className="text-right shrink-0">
                        <p className="text-4xl font-bold tracking-tight" style={{ color: GOLD }}>{c.highlight.value}</p>
                        <p className="text-xs text-white/30 mt-1">{c.highlight.label}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Challenge */}
                      <div>
                        <p className="text-[11px] text-[#737373] uppercase tracking-[0.15em] mb-3 font-medium">課題</p>
                        <p className="text-sm text-[#0a0a0a] leading-relaxed">{c.challenge}</p>
                      </div>

                      {/* Approach */}
                      <div>
                        <p className="text-[11px] text-[#737373] uppercase tracking-[0.15em] mb-3 font-medium">施策</p>
                        <ul className="space-y-2">
                          {c.approach.map((a, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-sm text-[#0a0a0a]">
                              <span className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5" style={{ background: `linear-gradient(135deg, #E2C16A, #A8892E)` }}>
                                <svg className="w-2.5 h-2.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="border-t border-[#e5e5e5] pt-8">
                      <p className="text-[11px] text-[#737373] uppercase tracking-[0.15em] mb-5 font-medium">成果（{c.period}）</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {c.results.map((r) => (
                          <div key={r.label} className="bg-[#fafafa] border border-[#e5e5e5] rounded-xl p-5">
                            <p className="text-xs text-[#737373] mb-3">{r.label}</p>
                            <div className="flex items-end gap-3">
                              <div>
                                <p className="text-xs text-[#737373]/60 mb-0.5">Before</p>
                                <p className="text-sm text-[#0a0a0a] font-medium">{r.before}</p>
                              </div>
                              <svg className="w-4 h-4 text-[#737373]/30 mb-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                              <div>
                                <p className="text-xs text-[#737373]/60 mb-0.5">After</p>
                                <p className="text-sm text-[#0a0a0a] font-medium">{r.after}</p>
                              </div>
                            </div>
                            <p
                              className="text-base font-bold mt-3"
                              style={{ color: GOLD_DARK }}
                            >
                              {r.delta}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Services used */}
                    <div className="mt-5 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[11px] text-[#737373] mr-1">使用サービス:</span>
                      {c.services.map((s) => (
                        <span key={s} className="text-[11px] px-2.5 py-1 rounded-full border border-[#e5e5e5] text-[#737373]">
                          {s}
                        </span>
                      ))}
                      <span className="text-[11px] text-[#737373] ml-auto">広告費: {c.budget}</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Note ── */}
      <section className="bg-[#fafafa] pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs text-[#737373]/50 leading-relaxed">
            ※ 掲載の事例はクライアントの許諾を得た上で、一部情報を匿名化して掲載しています。成果は各社の状況・期間によって異なります。
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-32 border-t border-white/8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <span
              className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] mb-8"
              style={{ border: "1px solid rgba(201,168,76,0.2)", color: GOLD }}
            >
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              貴社の課題、<br />
              <span className="text-white/30">一度ご相談ください。</span>
            </h2>
            <p className="text-white/35 text-base mb-12 max-w-md mx-auto leading-relaxed">
              業種・規模・予算に関わらず、まずは現状をお聞きした上で最適なご提案をします。初回相談は無料です。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)" }}
            >
              無料相談を申し込む
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
