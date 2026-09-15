"use client";
import { useState } from "react";
import { cases } from "@/lib/cases";
import { CaseCards } from "@/components/Marketing";
export default function CaseExplorer() {
  const [industry, setIndustry] = useState("すべて");
  const [service, setService] = useState("すべて");
  const groups = [
    "すべて",
    "不動産",
    "スクール",
    "リフォーム",
    "士業",
    "EC・通販",
  ];
  const scopes = ["すべて", "戦略", "運用", "制作"];
  const selected = cases.filter(
    (c) =>
      (industry === "すべて" || c.industry.includes(industry)) &&
      (service === "すべて" ||
        c.services.some((s) =>
          service === "戦略"
            ? s.includes("コンサル")
            : service === "運用"
              ? /運用|SEO|CRM|アフィリエイト/.test(s)
              : /制作|デザイン/.test(s),
        )),
  );
  return (
    <>
      <p className="m-eyebrow">業種から選ぶ</p>
      <div className="m-case-filters" role="group" aria-label="業種で絞り込み">
        {groups.map((g) => (
          <button
            key={g}
            aria-pressed={industry === g}
            onClick={() => setIndustry(g)}
          >
            {g}
          </button>
        ))}
      </div>
      <p className="m-eyebrow">支援領域から選ぶ</p>
      <div
        className="m-case-filters"
        role="group"
        aria-label="支援領域で絞り込み"
      >
        {scopes.map((g) => (
          <button
            key={g}
            aria-pressed={service === g}
            onClick={() => setService(g)}
          >
            {g}
          </button>
        ))}
      </div>
      <p role="status" className="m-small" style={{ marginBottom: 20 }}>
        {selected.length}件の事例
      </p>
      <CaseCards slugs={selected.map((c) => c.slug)} />
      {selected.length === 0 && (
        <p>条件に一致する事例はありません。条件を変更してご覧ください。</p>
      )}
    </>
  );
}
