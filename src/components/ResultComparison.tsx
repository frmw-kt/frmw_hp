import type { CaseResult } from "@/lib/cases";
// Draw only comparable pairs; do not infer missing baselines or growth percentages.
export function ResultComparison({ results }: { results: CaseResult[] }) {
  return (
    <div className="m-result-grid">
      {results.map((r) => {
        const parse = (v: string) =>
          Number(v.replace(/,/g, "").match(/\d+(?:\.\d+)?/)?.[0]);
        const b = parse(r.before),
          a = parse(r.after);
        const comparable =
          /\d/.test(r.before) &&
          /\d/.test(r.after) &&
          !r.before.includes("基準") &&
          !r.after.startsWith("+");
        const max = Math.max(b, a);
        return (
          <figure className="m-result-card" key={r.label}>
            <figcaption>
              <h3>{r.label}</h3>
            </figcaption>
            {[
              [r.before, b, "支援前"],
              [r.after, a, "支援後"],
            ].map(([text, value, label]) => (
              <div key={String(label)}>
                <div className="m-result-row">
                  <span>{label}</span>
                  <span>{text}</span>
                </div>
                {comparable && max > 0 && (
                  <div className="m-result-bar" aria-hidden="true">
                    <span
                      style={{ width: (Number(value) / max) * 100 + "%" }}
                    />
                  </div>
                )}
              </div>
            ))}
            <strong style={{ fontSize: r.delta.length > 7 ? 24 : 31 }}>
              {r.delta}
            </strong>
            {comparable && (
              <p className="m-small">棒は指標ごとの相対比較（0基準）</p>
            )}
          </figure>
        );
      })}
    </div>
  );
}
