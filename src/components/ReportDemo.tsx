"use client";
import { useState } from "react";
import { aggregateReport, sampleRows } from "@/lib/report-demo.mjs";

export default function ReportDemo() {
  const [scenario, setScenario] = useState("normal");
  const [result, setResult] = useState<{ team: string; amount: number }[] | null>(null);
  const [error, setError] = useState("");
  function run() {
    setResult(null);
    setError("");
    const rows = scenario === "duplicate" ? [...sampleRows, sampleRows[0]] : scenario === "missing" ? [...sampleRows, { id: "X", team: "", amount: 100 }] : sampleRows;
    try { setResult(aggregateReport(rows, scenario !== "offline")); }
    catch (e) { setError(e instanceof Error ? e.message : "処理を停止しました。"); }
  }
  return <div className="bi-demo m-task-card">
    <p className="m-eyebrow">SAMPLE DEMO / 架空データ</p>
    <h3>二つの明細を、一つの集計へ</h3>
    <p>明細A：営業A 12万円＋8万円 ／ 明細B：営業B 15万円</p>
    <p className="m-small">ブラウザ内のサンプル処理です。実データの送信・外部ツールへの接続は行いません。導入効果や連携実績を示すものではありません。</p>
    <label htmlFor="report-scenario">試す処理</label>
    <select id="report-scenario" value={scenario} onChange={(e) => { setScenario(e.target.value); setResult(null); setError(""); }}>
      <option value="normal">正常な明細を集計</option>
      <option value="missing">入力不足の明細を含める</option>
      <option value="duplicate">重複する明細を含める</option>
      <option value="offline">連携失敗を想定する</option>
    </select>
    <button type="button" className="m-button" onClick={run}>サンプルを集計する</button>
    <div aria-live="polite" aria-atomic="true">
      {error && <p className="m-form-error">{error} 元データは変更されていません。</p>}
      {result && <div className="bi-note"><p>集計が完了しました。</p><dl className="m-glance">{result.map((r) => <div key={r.team}><dt>{r.team}</dt><dd>{r.amount.toLocaleString("ja-JP")}円</dd></div>)}<div><dt>合計</dt><dd>{result.reduce((n, r) => n + r.amount, 0).toLocaleString("ja-JP")}円</dd></div></dl></div>}
    </div>
    <noscript><p>デモの操作にはJavaScriptが必要です。正常時の集計結果は営業Aが20万円、営業Bが15万円、合計35万円です。</p></noscript>
  </div>;
}
