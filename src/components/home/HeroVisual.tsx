import s from "./HeroVisual.module.css";

/** FVの図解: 課題 → Frameworkの支援 → 二つの成果。数値データではなく概念図。 */
const tracks = [
  {
    key: "marketing",
    en: "マーケティング支援",
    issue: "集客が伸びない",
    title: <>売上を<em>伸ばす</em></>,
    steps: ["集客", "問い合わせ", "受注"],
    mark: "↗",
    metric: "売上",
  },
  {
    key: "process",
    en: "業務改善支援",
    issue: "手作業に追われる",
    title: <>業務を<em>軽くする</em></>,
    steps: ["手作業の整理", "仕組み化", "時間をつくる"],
    mark: "↘",
    metric: "作業時間",
  },
] as const;

function Chart({ kind }: { kind: "marketing" | "process" }) {
  const up = kind === "marketing";
  return <svg className={s.chart} viewBox="0 0 160 44" fill="none" aria-hidden="true">
    <path d="M2 43H158" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.5" />
    {[0, 1, 2, 3].map(i => {
      const h = up ? 10 + i * 8 : 34 - i * 8;
      return <rect key={i} className={s.bar} x={10 + i * 38} y={42 - h} width="18" height={h} rx="2" style={{ animationDelay: `${i * 90}ms` }} />;
    })}
    <path className={s.line} d={up ? "M19 28L57 20L95 13L133 7L148 5" : "M19 6L57 14L95 22L133 30L148 33"} pathLength="1" />
    <circle className={s.dot} cx="148" cy={up ? 5 : 33} r="4" />
  </svg>;
}

export default function HeroVisual() {
  return <figure className={s.root} aria-label="Frameworkの支援の全体像。集客が伸びない・手作業に追われるといった課題を、考える・つくる・動かすの3段階で、売上を伸ばす施策と業務を軽くする仕組みに変えます。">
    <div className={s.window} aria-hidden="true"><i /><i /><i /><span>HOW FRAMEWORK WORKS</span></div>
    <div className={s.body} aria-hidden="true">
      <p className={s.rowLabel}><b>01</b>いまの課題</p>
      <div className={s.issues}>{tracks.map(t => <span key={t.key} className={s[t.key]}>{t.issue}</span>)}</div>
      <div className={s.links}><i /><i /></div>

      <div className={s.hub}>
        <p className={s.hubName}><span>Framework<i>.</i></span><small>伴走支援</small></p>
        <ol>{["考える", "つくる", "動かす"].map((step, i) => <li key={step}><b>{String(i + 1).padStart(2, "0")}</b>{step}</li>)}</ol>
      </div>

      <div className={s.links}><i /><i /></div>
      <p className={s.rowLabel}><b>02</b>変わること</p>
      <div className={s.outcomes}>{tracks.map(t => <div key={t.key} className={`${s.outcome} ${s[t.key]}`}>
        <div className={s.outcomeHead}><span>{t.en}</span><b>{t.mark}</b></div>
        <p className={s.outcomeTitle}>{t.title}</p>
        <div className={s.chartBox}><span className={s.chartLabel}>{t.metric}<b>{t.mark}</b></span><Chart kind={t.key} /></div>
        <ol className={s.steps}>{t.steps.map(step => <li key={step}>{step}</li>)}</ol>
      </div>)}</div>
    </div>
    <figcaption className={s.caption}>※ 支援の流れを示したイメージ図です</figcaption>
  </figure>;
}
