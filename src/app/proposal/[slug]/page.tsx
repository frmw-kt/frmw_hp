import { Fragment } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { proposals } from "../data";

export const metadata: Metadata = {
  title: "提案書 | Framework",
  robots: { index: false, follow: false },
};

const GOLD = "#C9A84C";
const GOLD_DARK = "#A8892E";


export default async function ProposalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proposal = proposals[slug];

  if (!proposal) notFound();

  const {
    client: clientName,
    date,
    heading,
    subheading,
    businessModel,
    issues,
    solutions,
    schedule,
  } = proposal;

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* ヘッダー */}
      <header className="bg-[#0a0a0a] border-b border-white/8 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-base font-bold tracking-tight" style={{ color: GOLD }}>
            Framework
          </span>
          <span className="text-xs text-white/30 uppercase tracking-widest">Confidential</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* ── タイトルブロック ── */}
        <div className="mb-16 pb-10 border-b border-[#e5e5e5]">
          <span
            className="inline-flex items-center border rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] mb-6"
            style={{ borderColor: "rgba(201,168,76,0.3)", color: GOLD }}
          >
            Proposal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight mb-3 whitespace-pre-line">
            {heading}
          </h1>
          <p className="text-sm text-[#737373] mb-6 leading-relaxed whitespace-pre-line">
            {subheading}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#737373]">
            <span>{clientName} 御中</span>
            <span className="w-px h-4 bg-[#e5e5e5]" />
            <span>{date}</span>
            <span className="w-px h-4 bg-[#e5e5e5]" />
            <span>Framework</span>
          </div>
        </div>

        {/* ── 00 前提理解 ── */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono" style={{ color: GOLD_DARK }}>00</span>
            <h2 className="text-xl font-semibold text-[#0a0a0a]">貴社ビジネスモデルの理解</h2>
          </div>
          <div className="pl-10">
            <div className="border border-[#e5e5e5] rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-[#b0b0b0] mb-5">Sales Funnel</p>
              <div className="flex items-center gap-2 flex-wrap text-sm">
                {businessModel.funnel.map((step, i) => (
                  <Fragment key={step.label}>
                    {i > 0 && (
                      <svg className="w-5 h-5 text-[#d0d0d0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                    <div
                      className="border rounded-xl px-5 py-3 text-center"
                      style={
                        step.type === "back"
                          ? { borderColor: "rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.05)" }
                          : { borderColor: "#e5e5e5", background: "#fff" }
                      }
                    >
                      <p
                        className="text-[10px] uppercase tracking-widest mb-1"
                        style={step.type === "back" ? { color: GOLD } : { color: "#b0b0b0" }}
                      >
                        {step.type === "back" ? "Back-end" : "Front-end"}
                      </p>
                      <p className="font-semibold text-[#0a0a0a]">{step.label}</p>
                      <p className="text-xs text-[#737373] mt-0.5">{step.sublabel}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
              <p className="mt-5 text-sm text-[#737373] leading-relaxed">
                {businessModel.description}
                {" "}Frameworkは
                <span className="font-semibold text-[#0a0a0a]">{businessModel.highlight}</span>
                の3点を支援します。
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-[#e5e5e5] mb-14" />

        {/* ── 01 課題認識 ── */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-mono" style={{ color: GOLD_DARK }}>01</span>
            <h2 className="text-xl font-semibold text-[#0a0a0a]">現状の課題（推定）</h2>
          </div>
          <div className="pl-10 space-y-4">
            {issues.map((issue) => (
              <div key={issue.title} className="border border-[#e5e5e5] rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 w-4 h-4 shrink-0 rounded-full border-2 border-red-300 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 block" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0a0a0a] mb-1">{issue.title}</h3>
                    <p className="text-sm text-[#737373] leading-relaxed">{issue.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#e5e5e5] mb-14" />

        {/* ── 02 提案内容 ── */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-mono" style={{ color: GOLD_DARK }}>02</span>
            <h2 className="text-xl font-semibold text-[#0a0a0a]">提案内容</h2>
          </div>
          <div className="pl-10 space-y-6">
            {solutions.map((sol) => (
              <div
                key={sol.number}
                className="border border-[#e5e5e5] rounded-2xl p-8 hover:border-[#0a0a0a]/20 hover:shadow-sm transition-all duration-300"
              >
                <div className="mb-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-[#b0b0b0]">{sol.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0a0a0a]">{sol.title}</h3>
                  <p className="text-sm text-[#737373] mt-0.5">{sol.subtitle}</p>
                </div>
                <ul className="space-y-2 mb-5">
                  {sol.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-[#555]">
                      <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <div
                  className="rounded-xl px-5 py-3 text-sm font-semibold text-[#0a0a0a]"
                  style={{ background: "rgba(201,168,76,0.1)" }}
                >
                  ▶ {sol.highlight}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#e5e5e5] mb-14" />

        {/* ── 03 スケジュール ── */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-mono" style={{ color: GOLD_DARK }}>03</span>
            <h2 className="text-xl font-semibold text-[#0a0a0a]">スケジュール</h2>
          </div>
          <div className="pl-10">
            <div className={`grid grid-cols-1 gap-4 ${schedule.length === 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3"}`}>
              {schedule.map((s) => (
                <div key={s.phase} className="border border-[#e5e5e5] rounded-2xl p-6">
                  <p className="text-[11px] uppercase tracking-widest mb-1" style={{ color: GOLD }}>
                    {s.phase}
                  </p>
                  <p className="text-xs text-[#b0b0b0] mb-3">{s.period}</p>
                  <p className="text-sm font-semibold text-[#0a0a0a] mb-4">{s.title}</p>
                  <ul className="space-y-2">
                    {s.tasks.map((task) => (
                      <li key={task} className="text-xs text-[#737373] flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#d0d0d0] shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-[#e5e5e5] mt-16 py-8 text-center">
        <p className="text-xs text-[#737373]">
          {slug === "demo"
            ? "© Framework — これはポートフォリオ用のサンプル提案書です。"
            : `© Framework — 本資料は${clientName}様限定の資料です。第三者への転送はご遠慮ください。`}
        </p>
      </footer>
    </div>
  );
}
