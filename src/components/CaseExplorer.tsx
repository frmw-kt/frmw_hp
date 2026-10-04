"use client";
import { useState } from "react";
import { publicCases as cases } from "@/lib/cases";
import { CaseCards } from "@/components/Marketing";
export default function CaseExplorer() {
  const [industry, setIndustry] = useState("すべて");
  const [service, setService] = useState("すべて");
  const inIndustry = (c: (typeof cases)[number], g: string) =>
    g === "すべて" || c.industry.includes(g);
  const inScope = (c: (typeof cases)[number], g: string) =>
    g === "すべて" ||
    c.services.some((s) =>
      g === "戦略"
        ? s.includes("コンサル")
        : g === "運用"
          ? /運用|SEO|CRM|アフィリエイト/.test(s)
          : /制作|デザイン/.test(s),
    );
  // 公開中の事例が1件もない選択肢は出さない
  const groups = [
    "すべて",
    "不動産",
    "スクール",
    "リフォーム",
    "士業",
    "EC・通販",
  ].filter((g) => cases.some((c) => inIndustry(c, g)));
  const scopes = ["すべて", "戦略", "運用", "制作"].filter((g) =>
    cases.some((c) => inScope(c, g)),
  );
  const selected = cases.filter(
    (c) => inIndustry(c, industry) && inScope(c, service),
  );
  return (
    <>
      {groups.length > 2 && (
        <>
          <p className="m-eyebrow">業種から選ぶ</p>
          <div
            className="m-case-filters"
            role="group"
            aria-label="業種で絞り込み"
          >
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
        </>
      )}
      {scopes.length > 2 && (
        <>
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
        </>
      )}
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
