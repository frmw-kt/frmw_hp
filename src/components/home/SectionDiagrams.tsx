import type { CSSProperties, ReactNode } from "react";
import d from "./SectionDiagrams.module.css";

/**
 * トップページの図解（FVの HeroVisual と同じ部品・色で統一）。
 * 実績の数値以外はすべて概念図で、計測データではない。
 */

type Tone = "purple" | "lime" | "orange";

function Frame({ label, tone = "purple", children, foot, className = "" }: { label: string; tone?: Tone; children: ReactNode; foot?: ReactNode; className?: string }) {
  return <div className={`${d.frame} ${d[tone]} ${className}`} data-home-reveal>
    <div className={d.window} aria-hidden="true"><i /><i /><i /><span>{label}</span></div>
    <div className={d.body}>{children}</div>
    {foot && <div className={d.foot}>{foot}</div>}
  </div>;
}

/* ---------- アイコン（線画で統一） ---------- */
const icons: Record<string, ReactNode> = {
  input: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
  sum: <path d="M17 4H6l6 8-6 8h11" />,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  share: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
  plan: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>,
  build: <><path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" /></>,
  run: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4z" /></>,
  chat: <><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9.5h8M8 12.5h5" /></>,
  doc: <><path d="M6 3h9l4 4v14H6z" /><path d="M14 3v5h5M9 12h7M9 16h5" /></>,
  gear: <><circle cx="12" cy="12" r="3.2" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" /></>,
  loop: <><path d="M20 12a8 8 0 0 1-14 5.3M4 12A8 8 0 0 1 18 6.7" /><path d="M18 3v4h-4M6 21v-4h4" /></>,
  yen: <><circle cx="12" cy="12" r="9" /><path d="m8 7 4 5 4-5M12 12v6M8.5 13h7M8.5 16h7" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>,
  up: <><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
};
export function Icon({ name, className = d.icon }: { name: keyof typeof icons; className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}

/* ---------- 02 サービス：二つの支援領域 ---------- */
export function ServiceDiagram({ business = false }: { business?: boolean }) {
  if (!business) {
    const rows = [["集客", "広告運用・SEO・SNS"], ["問い合わせ", "LP・Webサイト制作"], ["受注", "商談につながる改善"]];
    return <Frame label="MARKETING FLOW" tone="purple" className={d.pillar} foot={<><Icon name="loop" className={d.footIcon} />数字を測って、次の打ち手へ</>}>
      <div className={d.colHead} aria-hidden="true"><span>お客様の流れ</span><span>Frameworkがやること</span></div>
      <ol className={d.funnel}>{rows.map(([stage, action], i) => <li key={stage} style={{ "--w": `${100 - i * 6}%` } as CSSProperties}>
        <span className={d.funnelStage}><b>{String(i + 1).padStart(2, "0")}</b>{stage}</span>
        <span className={d.funnelAction}>{action}</span>
      </li>)}</ol>
    </Frame>;
  }
  const rows = [["集計・レポート", "毎月、手作業", "自動で集計"], ["問い合わせ対応", "毎回ゼロから", "AIで下書き"], ["情報の管理", "人に依存", "アプリで一元化"]];
  return <Frame label="BEFORE → AFTER" tone="lime" className={d.pillar} foot={<><span className={d.footStar} aria-hidden="true">✳</span>生まれた時間を、本来の仕事へ</>}>
    <div className={d.colHead} aria-hidden="true"><span>いま</span><span>これから</span></div>
    <ul className={d.beforeAfter}>{rows.map(([task, before, after]) => <li key={task}>
      <p>{task}</p>
      <div><span className={d.before}>{before}</span><b aria-hidden="true">→</b><span className={d.after}>{after}</span></div>
    </li>)}</ul>
  </Frame>;
}

/* ---------- 04 支援の考え方：3つのステージ ---------- */
export function StageDiagram({ stage }: { stage: number }) {
  if (stage === 0) {
    return <Frame label="FIND THE FOCUS" tone="orange" className={d.stage}>
      <div className={d.gapChart} aria-label="目標と現状の差を課題として整理し、優先順位をつける">
        <div className={d.gapRow}><span>目標</span><i className={d.goal} /></div>
        <div className={d.gapRow}><span>現状</span><i className={d.now}><em>差＝課題</em></i></div>
      </div>
      <p className={d.subLabel}>優先順位</p>
      <ol className={d.priority}>{[["課題 A", "最優先"], ["課題 B", "次に"], ["課題 C", "あとで"]].map(([name, rank]) => <li key={name}><span>{name}</span><b>{rank}</b></li>)}</ol>
    </Frame>;
  }
  if (stage === 1) {
    return <Frame label="BUILD THE SYSTEM" tone="purple" className={d.stage}>
      <ol className={d.pipeline}>{([["plan", "設計"], ["build", "制作・実装"], ["run", "運用"]] as const).map(([icon, label]) => <li key={label}><Icon name={icon} />{label}</li>)}</ol>
      <p className={d.subLabel}>つくるもの（例）</p>
      <div className={d.chips}>{["広告", "Webサイト", "業務フロー", "自動化"].map(c => <span key={c}>{c}</span>)}</div>
    </Frame>;
  }
  return <Frame label="KEEP IMPROVING" tone="lime" className={d.stage}>
    <div className={d.cycle} aria-label="計測、振り返り、次の改善を繰り返す">
      <svg viewBox="0 0 300 150" fill="none" aria-hidden="true">
        <ellipse className={d.cycleTrack} cx="150" cy="75" rx="104" ry="52" />
        <path d="M245 70l9 11 9-11" className={d.cycleHead} />
        <path d="M37 80l9-11 9 11" className={d.cycleHead} />
      </svg>
      <span className={d.node} style={{ left: "50%", top: "12%" }}>計測</span>
      <span className={d.node} style={{ left: "82%", top: "84%" }}>振り返り</span>
      <span className={`${d.node} ${d.nodeHot}`} style={{ left: "18%", top: "84%" }}>次の改善</span>
      <span className={d.cycleCenter}>回すほど<br />前へ <b>↗</b></span>
    </div>
  </Frame>;
}

/* ---------- 05 実績：数値パネル ---------- */
export function ResultMetrics() {
  const items = [
    { icon: "yen", label: "運用経験・月間広告費", value: "8,000", unit: "万円", en: "MONTHLY AD SPEND", wide: true },
    { icon: "target", label: "平均CPA改善", value: "68", unit: "%", en: "COST PER ACQUISITION" },
    { icon: "up", label: "平均CV数改善", value: "255", unit: "%", en: "CONVERSIONS" },
  ] as const;
  return <Frame label="MARKETING RESULTS" tone="purple">
    <div className={d.metrics}>{items.map(m => <div key={m.label} className={`${d.metric} ${"wide" in m ? d.metricWide : ""}`}>
      <p><Icon name={m.icon} />{m.label}</p>
      <strong>{m.value}<small>{m.unit}</small></strong>
      <span>{m.en}</span>
    </div>)}</div>
  </Frame>;
}

/* ---------- 05 成果物：業務フローの Before / After ---------- */
export function WorkflowDiagram() {
  const steps = [["input", "入力"], ["sum", "集計"], ["check", "確認"], ["share", "共有"]] as const;
  const auto = new Set(["集計", "共有"]);
  return <div className={d.workflow} aria-label="入力・集計・確認・共有の業務フロー例。改善前はすべて手作業、改善後は集計と共有を自動化し、人は入力と確認に集中する。">
    <div className={d.flowRow} aria-hidden="true">
      <p><b className={d.tagGray}>BEFORE</b>すべて手作業</p>
      <ol>{steps.map(([icon, label]) => <li key={label}><Icon name={icon} />{label}<em>手作業</em></li>)}</ol>
    </div>
    <div className={d.flowArrow} aria-hidden="true">仕組み化 ↓</div>
    <div className={`${d.flowRow} ${d.flowAfter}`} aria-hidden="true">
      <p><b>AFTER</b>人は判断に集中</p>
      <ol>{steps.map(([icon, label]) => <li key={label} className={auto.has(label) ? d.auto : ""}><Icon name={icon} />{label}<em>{auto.has(label) ? "自動" : "人"}</em></li>)}</ol>
    </div>
  </div>;
}

/* ---------- 06 ご相談の流れのアイコン ---------- */
export function ProcessIcon({ step }: { step: number }) {
  return <Icon name={(["chat", "doc", "gear", "loop"] as const)[step]} className={d.processIcon} />;
}

/* ---------- 08 FAQ の導入 ---------- */
export function ChatVisual() {
  return <div className={d.chat} aria-hidden="true">
    <p className={d.ask}><span>YOU</span>課題がまとまっていなくても、相談していい？</p>
    <p className={d.answer}><span>FRAMEWORK</span>もちろんです。一緒に整理するところから。</p>
  </div>;
}
