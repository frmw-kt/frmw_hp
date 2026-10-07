/** 架空データだけを使う商談デモ。外部サービスには接続しない。 */
export const sampleRows = [
  { id: "A-001", team: "営業A", amount: 120000 },
  { id: "A-002", team: "営業A", amount: 80000 },
  { id: "B-001", team: "営業B", amount: 150000 },
];

/** @param {{id: string, team: string, amount: number}[]} rows */
export function aggregateReport(rows, connectionAvailable = true) {
  if (!connectionAvailable) throw new Error("連携に失敗しました。処理を停止し、元データを確認して手作業へ切り替えてください。");
  const seen = new Set();
  const totals = new Map();
  for (const row of rows) {
    if (!row.id?.trim() || !row.team?.trim() || !Number.isFinite(row.amount) || row.amount < 0) {
      throw new Error("入力不足または金額の不備があります。処理を停止しました。元データを修正してください。");
    }
    const id = row.id.trim();
    if (seen.has(id)) throw new Error("重複した明細IDがあります。二重集計を防ぐため処理を停止しました。");
    seen.add(id);
    const team = row.team.trim();
    totals.set(team, (totals.get(team) ?? 0) + row.amount);
  }
  return Array.from(totals, ([team, amount]) => ({ team, amount }));
}
