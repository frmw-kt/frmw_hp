import type { ReactNode } from "react";
import type { CaseResult } from "@/lib/cases";
import d from "./Diagrams.module.css";

/**
 * 下層ページの図解。トップページ（components/home）と同じ部品・色で統一する。
 * 実績・事例の数値以外はすべて概念図で、計測データではない。
 */

type Tone = "purple" | "lime" | "orange";

export function Frame({ label, tone = "purple", children, foot, className = "", note }: { label: string; tone?: Tone; children: ReactNode; foot?: ReactNode; className?: string; note?: string }) {
  return <div className={`${d.root} ${d.frame} ${d[tone]} ${className}`}>
    <div className={d.window} aria-hidden="true"><i /><i /><i /><span>{label}</span></div>
    <div className={d.body}>{children}</div>
    {foot && <div className={d.foot}>{foot}</div>}
    {note && <p className={d.note}>{note}</p>}
  </div>;
}

/* ---------- アイコン（線画で統一） ---------- */
const icons = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  plan: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>,
  build: <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />,
  chart: <><path d="M4 20V4M4 20h16" /><path d="m7 15 4-4 3 3 5-6" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  calc: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 11h2M12 11h2M8 15h2M12 15h2M16 11v4" /></>,
  up: <><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  ai: <><rect x="5" y="7" width="14" height="12" rx="3" /><path d="M12 3v4M9 12h.01M15 12h.01M9.5 16h5" /></>,
  system: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>,
  doc: <><path d="M6 3h9l4 4v14H6z" /><path d="M14 3v5h5M9 12h7M9 16h5" /></>,
  loop: <><path d="M20 12a8 8 0 0 1-14 5.3M4 12A8 8 0 0 1 18 6.7" /><path d="M18 3v4h-4M6 21v-4h4" /></>,
} as const;
export function Icon({ name, className = d.icon }: { name: keyof typeof icons; className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}

/* ---------- 支援の流れ（4ステップ＋改善ループ） ---------- */
export function MethodDiagram({ business = false }: { business?: boolean }) {
  const steps = business ? [
    ["check", "業務診断", "作業と負担を把握する"],
    ["calc", "設計・試算", "範囲と効果を確かめる"],
    ["build", "実装・導入", "小さく作り、運用する"],
    ["up", "測定・改善", "時間・支出・品質を測る"],
  ] as const : [
    ["search", "調査・戦略", "誰に、何を届けるか"],
    ["plan", "施策設計", "優先順位と予算を決める"],
    ["build", "運用・制作", "広告と導線をつくる"],
    ["chart", "計測・分析", "どこで離れるかを知る"],
  ] as const;
  return <figure className={d.figure} aria-label={`支援の流れ：${steps.map(s => s[1]).join("、")}。結果を次のサイクルに戻して改善を続けます。`}>
    <Frame label="FRAMEWORK METHOD" tone={business ? "lime" : "purple"} foot={<><Icon name="loop" className={d.footIcon} /><span><b>改善して、次の一手へ</b>{business ? "測定した結果を、業務・仕組み・運用に戻す" : "検証した結果を、戦略・予算・制作に戻す"}</span></>}>
      <p className={d.lead} aria-hidden="true">戦略と実行を、ひとつの流れに</p>
      <ol className={d.method} aria-hidden="true">{steps.map(([icon, title, text], i) => <li key={title}>
        <span className={d.stepIcon}><Icon name={icon} /></span>
        <b className={d.stepNum}>STEP {String(i + 1).padStart(2, "0")}</b>
        <strong>{title}</strong>
        <small>{text}</small>
      </li>)}</ol>
      <div className={d.loopBack} aria-hidden="true"><span>次のサイクルへ</span></div>
    </Frame>
  </figure>;
}

/* ---------- 運用代行：日次・週次・月次のリズム ---------- */
export function RhythmDiagram() {
  const rows = [
    ["daily", "日次", "変化を捉える", "予算消化・配信エラー・投稿や検索の急な数値変動"],
    ["weekly", "週次", "仮説を試す", "訴求・クリエイティブ・投稿・記事・LPの改善"],
    ["monthly", "月次", "判断をそろえる", "KPIの振り返り・次月の施策と配分"],
  ] as const;
  return <figure className={d.figure}>
    <Frame label="OPERATION RHYTHM" tone="purple" note="運用サイクルの設計例。実施頻度・報告範囲はプランにより異なります。">
      <p className={d.subLabel} aria-hidden="true">1か月の運用イメージ</p>
      <div className={d.track} aria-hidden="true">
        {Array.from({ length: 28 }, (_, i) => <i key={i} className={i === 27 ? d.tMonthly : (i + 1) % 7 === 0 ? d.tWeekly : d.tDaily} />)}
      </div>
      <div className={d.trackScale} aria-hidden="true"><span>1日</span><span>1週</span><span>2週</span><span>3週</span><span>月末</span></div>
      <ul className={d.rhythm}>{rows.map(([key, term, title, text]) => <li key={key}>
        <i className={d[`m_${key}`]} aria-hidden="true" />
        <span className={d.rhythmTerm}>{term}</span>
        <div><strong>{title}</strong><p>{text}</p></div>
      </li>)}</ul>
    </Frame>
  </figure>;
}

/* ---------- コンサルティングの成果物（3つの資料） ---------- */
export function ConsultingDeliverables() {
  const docs = [
    { en: "STRATEGY NOTE", title: "戦略を、判断できる形に", text: "ターゲット・提供価値・優先課題を整理。社内で共通の判断軸を持てる戦略書へ。" },
    { en: "ACTION ROADMAP", title: "計画を、動ける形に", text: "施策ごとの担当・期限・指標を一覧化。今やることと後でやることを明確に。" },
    { en: "REVIEW & NEXT", title: "数字を、次の一手に", text: "実施したこと、結果、考察、次の改善案をセットに。報告を意思決定につなげます。" },
  ];
  return <div className={d.docGrid}>{docs.map((doc, i) => <article key={doc.en} className={d.docItem}>
    <Frame label={doc.en} tone={(["purple", "lime", "orange"] as const)[i]} note="構成イメージ・実データではありません" className={d.docFrame}>
      <div aria-hidden="true">
        {i === 0 ? <ol className={d.whoWhat}>{[["誰に", "顧客の課題"], ["何を", "届ける価値"], ["どうやって", "優先する施策"]].map(([k, v]) => <li key={k}><b>{k}</b><span>{v}</span></li>)}</ol>
          : i === 1 ? <div className={d.gantt}>
            <span /><span>設計</span><span>実行</span><span>検証</span>
            {["計測整備", "広告改善", "LP改善"].map((task, k) => <div key={task} className={d.ganttRow}><span>{task}</span><i style={{ gridColumn: `${k + 2} / span ${k === 0 ? 1 : 2}` }} /></div>)}
          </div>
            : <div className={d.review}>
              <svg viewBox="0 0 200 60" fill="none"><path d="M0 55H200M0 30H200M0 5H200" stroke="#1c191718" /><path className={d.reviewLine} d="M6 50 40 38 74 43 108 24 142 29 176 12 194 15" pathLength="1" /><circle cx="194" cy="15" r="4" className={d.reviewDot} /></svg>
              <ol>{["結果", "考察", "次のアクション"].map(t => <li key={t}>{t}</li>)}</ol>
            </div>}
      </div>
    </Frame>
    <h3>{doc.title}</h3>
    <p>{doc.text}</p>
  </article>)}</div>;
}

/* ---------- 制作：ページ構成の設計図 ---------- */
export function PageBlueprint() {
  return <Frame label="PAGE BLUEPRINT" tone="purple" className={d.blueprint}>
    <div className={d.browser} aria-label="ページ構成の例：ファーストビューで誰に何を届けるかを示し、サービス・事例・FAQで根拠を示し、最後に次の行動へ案内する。">
      <div className={d.browserBar} aria-hidden="true"><i /><i /><i /><span>your-site.jp</span></div>
      <section className={d.bpFv} aria-hidden="true">
        <b className={d.bpTag}>01 FIRST VIEW</b>
        <div><strong>誰に、何を届けるか</strong><span className={d.bpLine} /><span className={d.bpLine} style={{ width: "60%" }} /><em className={d.bpCta}>相談の入り口</em></div>
        <i className={d.bpImage} />
      </section>
      <section className={d.bpEvidence} aria-hidden="true">
        <b className={d.bpTag}>02 EVIDENCE</b>
        <strong>課題 → 支援内容 → 根拠</strong>
        <div>{["サービス", "事例", "FAQ"].map(t => <span key={t}>{t}</span>)}</div>
      </section>
      <section className={d.bpAction} aria-hidden="true">
        <b className={d.bpTag}>03 ACTION</b>
        <strong>不安を解消し、次の行動へ</strong>
        <em className={d.bpCta}>お問い合わせ</em>
      </section>
    </div>
  </Frame>;
}

/* ---------- 業務改善・アプリ・AI：業務フローの設計図 ---------- */
export function WorkflowBlueprint({ ai = false }: { ai?: boolean }) {
  const steps = ai ? [
    ["user", "人", "入力・参照資料"], ["ai", "AI", "AIで下書きを生成"], ["user", "人", "人が確認・修正"], ["system", "システム", "承認後に業務へ反映"],
  ] as const : [
    ["user", "人", "業務の入力"], ["system", "システム", "権限・ルールを確認"], ["system", "システム", "データ処理・API連携"], ["system", "システム", "画面・レポートに出力"],
  ] as const;
  return <Frame label="WORKFLOW BLUEPRINT" tone="lime" className={d.blueprint}>
    <div className={d.legend} aria-hidden="true"><span className={d.a_user}>人</span>{ai && <span className={d.a_ai}>AI</span>}<span className={d.a_system}>システム</span></div>
    <ol className={d.flow}>{steps.map(([icon, actor, label], i) => <li key={label} className={d[`a_${icon}`]}>
      <span className={d.flowIcon} aria-hidden="true"><Icon name={icon} /></span>
      <span className={d.flowNum} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
      <strong>{label}</strong>
      <em>{actor}</em>
    </li>)}</ol>
  </Frame>;
}

/* ---------- 運用・その他：共有資料の構成 ---------- */
export function DocumentBlueprint({ title, items }: { title: string; items: string[] }) {
  return <Frame label="WORKING DOCUMENT" tone="orange" className={d.blueprint}>
    <div className={d.doc}>
      <p className={d.docHead}><Icon name="doc" />{title} / 判断と実行の記録</p>
      <ol>{items.map(item => <li key={item}><strong>{item}</strong><span aria-hidden="true" className={d.bpLine} /><span aria-hidden="true" className={d.bpLine} style={{ width: "55%" }} /></li>)}</ol>
      <p className={d.docNext} aria-hidden="true">事実 → 考察 → 次のアクション</p>
    </div>
  </Frame>;
}

/* ---------- 業務改善：作業時間の試算（説明用の仮定） ---------- */
export function TimeSavingChart({ before, after }: { before: number; after: number }) {
  const max = Math.ceil(before / 10) * 10;
  const pct = (v: number) => `${(v / max) * 100}%`;
  return <div className={`${d.root} ${d.timeChart}`} role="img" aria-label={`作業時間の試算例：改善前は月${before}時間、改善後は確認・修正を含めて月${after}時間。月${before - after}時間の削減を想定。`}>
    <div className={d.tcRow}><span>改善前</span><div className={d.tcTrack}><i className={d.tcBefore} style={{ width: pct(before) }}><b>{before}h</b></i></div></div>
    <div className={d.tcRow}><span>改善後</span><div className={d.tcTrack}>
      <i className={d.tcAfter} style={{ width: pct(after) }}><b>{after}h</b></i>
      <i className={d.tcSaved} style={{ left: pct(after), width: pct(before - after) }}><b>削減 {before - after}h</b></i>
    </div></div>
    <div className={d.tcScale} aria-hidden="true">{[0, max / 3, (max * 2) / 3, max].map(v => <span key={v}>{Math.round(v)}h</span>)}</div>
  </div>;
}

/* ---------- 業務改善：計算式 ---------- */
export function Formula({ terms, result }: { terms: [string, string][]; result: string }) {
  return <div className={`${d.root} ${d.formula}`}>
    {terms.map(([op, term], i) => <span key={term} className={d.fTermWrap}>{i > 0 && <b className={d.fOp}>{op}</b>}<span className={d.fTerm}>{term}</span></span>)}
    <span className={d.fTermWrap}><b className={d.fOp}>＝</b><span className={`${d.fTerm} ${d.fResult}`}>{result}</span></span>
  </div>;
}

/* ---------- 事例：支援前後の比較 ---------- */
// 比較できる組だけ棒を描く。基準値のない増加率などは推測しない。
export function ResultBars({ results }: { results: CaseResult[] }) {
  const parse = (v: string) => Number(v.replace(/,/g, "").match(/\d+(?:\.\d+)?/)?.[0]);
  return <div className={d.resultGrid}>{results.map(r => {
    const b = parse(r.before), a = parse(r.after);
    const comparable = /\d/.test(r.before) && /\d/.test(r.after) && !r.before.includes("基準") && !r.after.startsWith("+");
    const max = Math.max(b, a);
    const showBars = comparable && max > 0;
    return <figure key={r.label} className={`${d.root} ${d.frame} ${d.resultCard}`}>
      <figcaption className={d.resultHead}><h3>{r.label}</h3><strong className={r.positive ? d.good : ""}>{r.delta}</strong></figcaption>
      <div className={d.body}>
        {([[r.before, b, "支援前"], [r.after, a, "支援後"]] as const).map(([text, value, label]) => <div key={label} className={d.resultRow}>
          <div><span>{label}</span><b>{text}</b></div>
          {showBars && <div className={d.resultTrack} aria-hidden="true"><i className={label === "支援後" ? d.resultAfter : d.resultBefore} style={{ width: `${(Number(value) / max) * 100}%` }} /></div>}
        </div>)}
      </div>
      {showBars && <p className={d.note}>棒は指標ごとの相対比較（0基準）</p>}
    </figure>;
  })}</div>;
}
