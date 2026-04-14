import { notFound } from "next/navigation";
import { proposals } from "./data";

export default function ProposalIndexPage() {
  if (process.env.NODE_ENV !== "development") notFound();

  const entries = Object.entries(proposals);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="bg-[#0a0a0a] px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="text-base font-bold tracking-tight text-[#C9A84C]">Framework</span>
          <span className="text-xs text-white/30 uppercase tracking-widest">Dev only</span>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-xl font-bold text-[#0a0a0a] mb-2">提案ページ一覧</h1>
        <p className="text-xs text-[#b0b0b0] mb-8">このページは開発環境でのみ表示されます</p>
        <ul className="space-y-3">
          {entries.map(([slug, proposal]) => (
            <li key={slug}>
              <a
                href={`/proposal/${slug}`}
                className="flex items-center justify-between border border-[#e5e5e5] rounded-xl px-5 py-4 hover:border-[#0a0a0a]/30 hover:shadow-sm transition-all duration-200 bg-white"
              >
                <div>
                  <p className="text-sm font-semibold text-[#0a0a0a]">{proposal.client}</p>
                  <p className="text-xs text-[#b0b0b0] mt-0.5 font-mono">/proposal/{slug}</p>
                </div>
                <span className="text-xs text-[#b0b0b0]">{proposal.date}</span>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
