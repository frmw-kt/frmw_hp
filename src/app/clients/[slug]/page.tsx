import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { clients, Task, Report } from "../data";
import { getSheetData, SheetData } from "@/lib/sheets";

export const metadata: Metadata = {
  title: "ダッシュボード | Framework",
  robots: { index: false, follow: false },
};

export const revalidate = 300; // 5分キャッシュ

const GOLD = "#C9A84C";
const GOLD_DARK = "#A8892E";

const statusConfig = {
  todo:        { label: "未着手", bgClass: "bg-[#f4f4f5]", textClass: "text-[#71717a]", dotClass: "bg-[#a1a1aa]" },
  in_progress: { label: "進行中", bgClass: "bg-amber-50",  textClass: "text-amber-700",  dotClass: "bg-amber-400" },
  done:        { label: "完了",   bgClass: "bg-green-50",  textClass: "text-green-700",  dotClass: "bg-green-400" },
};

const reportTypeConfig: Record<string, { bgClass: string; textClass: string }> = {
  "月次レポート": { bgClass: "bg-blue-50",   textClass: "text-blue-600"   },
  "週次レポート": { bgClass: "bg-purple-50", textClass: "text-purple-600" },
  "分析レポート": { bgClass: "bg-orange-50", textClass: "text-orange-600" },
  "その他":       { bgClass: "bg-gray-100",  textClass: "text-gray-500"   },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

function TaskRow({ task }: { task: Task }) {
  const cfg = statusConfig[task.status];
  return (
    <div className="flex items-start gap-4 py-5 border-b border-[#f0f0f0] last:border-0">
      <span className={`mt-0.5 inline-flex items-center gap-1.5 shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${cfg.bgClass} ${cfg.textClass}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dotClass}`} />
        {cfg.label}
      </span>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${task.status === "done" ? "text-[#a0a0a0] line-through" : "text-[#0a0a0a]"}`}>
          {task.title}
        </p>
        {task.description && (
          <p className="text-xs text-[#a0a0a0] mt-0.5 leading-relaxed">{task.description}</p>
        )}
      </div>
      <div className="shrink-0 flex items-center gap-2 text-right">
        {task.category && (
          <span className="hidden sm:inline-flex text-[11px] text-[#b0b0b0] border border-[#ebebeb] rounded-full px-2.5 py-0.5">
            {task.category}
          </span>
        )}
        {task.dueDate && task.status !== "done" && (
          <span className="text-[11px] text-[#b0b0b0] whitespace-nowrap">
            {formatDate(task.dueDate)}
          </span>
        )}
      </div>
    </div>
  );
}

function ReportCard({ report, isLatest }: { report: Report; isLatest: boolean }) {
  const typeCfg = reportTypeConfig[report.type] ?? reportTypeConfig["その他"];
  return (
    <a
      href={report.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-[#e5e5e5] rounded-2xl p-6 hover:border-[#0a0a0a]/20 hover:shadow-sm transition-all duration-200 bg-white"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className={`inline-flex text-[11px] font-medium rounded-full px-2.5 py-1 ${typeCfg.bgClass} ${typeCfg.textClass}`}>
          {report.type}
        </span>
        {isLatest && (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium rounded-full px-2.5 py-1"
            style={{ background: "rgba(201,168,76,0.1)", color: GOLD_DARK }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            最新
          </span>
        )}
      </div>
      <p className="text-sm font-semibold text-[#0a0a0a] mb-1 group-hover:underline leading-snug">
        {report.title}
      </p>
      {report.description && (
        <p className="text-xs text-[#737373] mb-3 leading-relaxed">{report.description}</p>
      )}
      <div className="flex items-center justify-between mt-3">
        <span className="text-xs text-[#b0b0b0]">{formatDate(report.date)}</span>
        <span className="text-xs text-[#0a0a0a]/40 group-hover:text-[#0a0a0a]/70 transition-colors duration-200 flex items-center gap-1">
          開く
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      </div>
    </a>
  );
}

function SheetTable({ data, label }: { data: SheetData; label: string }) {
  if (data.headers.length === 0) {
    return (
      <div className="bg-white border border-[#e5e5e5] rounded-2xl p-8 text-center">
        <p className="text-sm text-[#b0b0b0]">データがありません</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#e5e5e5] rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-[#f0f0f0] flex items-center justify-between">
        <p className="text-sm font-semibold text-[#0a0a0a]">{label}</p>
        <span className="text-xs text-[#b0b0b0]">{data.rows.length}件</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#f0f0f0] bg-[#fafafa]">
              {data.headers.map((h) => (
                <th key={h} className="px-5 py-3 text-left text-[11px] font-medium text-[#a0a0a0] uppercase tracking-wide whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr key={i} className="border-b border-[#f7f7f7] last:border-0 hover:bg-[#fafafa] transition-colors duration-100">
                {row.map((cell, j) => (
                  <td key={j} className="px-5 py-3.5 text-[#333] whitespace-nowrap">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default async function ClientDashboardPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const client = clients[slug];
  if (!client) notFound();

  async function logout() {
    "use server";
    const cookieStore = await cookies();
    const current = cookieStore.get("client_auth")?.value;
    let authMap: Record<string, boolean> = {};
    try { authMap = JSON.parse(current || "{}"); } catch { /* ignore */ }
    delete authMap[slug];
    cookieStore.set("client_auth", JSON.stringify(authMap), { path: "/" });
    redirect(`/clients/${slug}/login`);
  }

  const { name, since, services, reports, tasks, sheets } = client;

  // シートデータを並列取得
  const sheetResults = sheets
    ? await Promise.all(
        sheets.map((s) => getSheetData(s.spreadsheetId, s.sheetName))
      )
    : [];

  const sortedReports = [...reports].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const sortedTasks = [...tasks].sort((a, b) => {
    const order = { in_progress: 0, todo: 1, done: 2 };
    return order[a.status] - order[b.status];
  });

  const doneCount = tasks.filter((t) => t.status === "done").length;
  const latestReportDate = sortedReports[0]?.date;

  return (
    <div className="min-h-screen bg-[#f7f7f7]">

      {/* ── Header ── */}
      <header className="bg-[#0a0a0a] border-b border-white/8 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-base font-bold tracking-tight" style={{ color: GOLD }}>
              Framework
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/15" />
            <span className="hidden sm:block text-sm text-white/40 truncate max-w-[200px]">
              {name}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-white/20 uppercase tracking-widest hidden sm:block">
              Client Portal
            </span>
            <form action={logout}>
              <button
                type="submit"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20"
              >
                ログアウト
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">

        {/* ── Overview ── */}
        <div className="mb-10">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] mb-4"
            style={{ border: "1px solid rgba(201,168,76,0.25)", color: GOLD }}
          >
            Client Dashboard
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] tracking-tight mb-2">
            {name}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-sm text-[#737373]">
            <span>契約開始：{since}</span>
            <span className="w-px h-4 bg-[#e5e5e5]" />
            {services.map((s) => (
              <span key={s} className="border border-[#e5e5e5] rounded-full px-2.5 py-0.5 text-xs bg-white">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── Quick stats ── */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { label: "タスク完了", value: `${doneCount} / ${tasks.length}` },
            { label: "レポート数", value: `${reports.length}件` },
            { label: "最新レポート", value: latestReportDate ? formatDate(latestReportDate) : "—" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-[#e5e5e5] rounded-2xl px-5 py-5">
              <p className="text-xs text-[#b0b0b0] mb-1.5">{s.label}</p>
              <p className="text-lg font-bold text-[#0a0a0a] tracking-tight">{s.value}</p>
            </div>
          ))}
        </div>

        {/* ── Google Sheets ── */}
        {sheets && sheets.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-base font-bold text-[#0a0a0a]">広告レポート</h2>
                <p className="text-xs text-[#b0b0b0] mt-0.5">スプレッドシートから取得（5分更新）</p>
              </div>
            </div>
            <div className="space-y-4">
              {sheets.map((sheetCfg, i) => {
                const data = sheetResults[i];
                if (!data) {
                  return (
                    <div key={i} className="bg-white border border-[#e5e5e5] rounded-2xl p-8 text-center">
                      <p className="text-sm text-[#b0b0b0]">データを取得できませんでした</p>
                    </div>
                  );
                }
                return (
                  <SheetTable
                    key={i}
                    data={data}
                    label={sheetCfg.label ?? sheetCfg.sheetName ?? "レポート"}
                  />
                );
              })}
            </div>
          </section>
        )}

        {/* ── Reports ── */}
        {sortedReports.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-base font-bold text-[#0a0a0a]">レポート</h2>
                <p className="text-xs text-[#b0b0b0] mt-0.5">共有済みのレポート一覧</p>
              </div>
              <span className="text-xs text-[#b0b0b0]">{reports.length}件</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedReports.map((report, i) => (
                <ReportCard key={report.title} report={report} isLatest={i === 0} />
              ))}
            </div>
          </section>
        )}

        {/* ── Tasks ── */}
        {sortedTasks.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-base font-bold text-[#0a0a0a]">タスク・進捗</h2>
                <p className="text-xs text-[#b0b0b0] mt-0.5">現在の施策・対応状況</p>
              </div>
              <span className="text-xs text-[#b0b0b0]">{doneCount}/{tasks.length} 完了</span>
            </div>
            <div className="bg-white border border-[#e5e5e5] rounded-2xl px-6 divide-y-0">
              {sortedTasks.map((task) => (
                <TaskRow key={task.id} task={task} />
              ))}
            </div>
          </section>
        )}

      </main>

      <footer className="border-t border-[#e5e5e5] mt-16 py-8 text-center">
        <p className="text-xs text-[#b0b0b0]">
          © Framework — 本ページは{name}様専用です。第三者への共有はご遠慮ください。
        </p>
      </footer>
    </div>
  );
}
