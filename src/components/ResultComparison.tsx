import type { CaseResult } from "@/lib/cases";
import { ResultBars } from "@/components/diagrams/Diagrams";

// Draw only comparable pairs; do not infer missing baselines or growth percentages.
export function ResultComparison({ results }: { results: CaseResult[] }) {
  return <ResultBars results={results} />;
}
