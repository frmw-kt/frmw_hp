export default function StrategyVisual() {
  return (
    <figure
      className="s-visual"
      aria-label="戦略から実行・改善までの支援プロセス"
    >
      <div className="s-console">
        <div className="s-console-bar">
          <span>f. / FRAMEWORK</span>
          <span>STRATEGY → EXECUTION</span>
        </div>
        <div className="s-console-body">
          <aside aria-hidden="true">
            <b>WORKSPACE</b>
            <span>Overview</span>
            <span>Strategy</span>
            <span>Execution</span>
            <span>Review</span>
            <i>f.</i>
          </aside>
          <div className="s-console-content">
            <p className="s-kicker">THE BIG PICTURE</p>
            <h2>
              戦略を、
              <br />
              動き出す仕組みに。
            </h2>
            <div className="s-orbit" aria-hidden="true">
              <i />
              <i />
              <i />
              <b>f.</b>
            </div>
            <div className="s-console-tags">
              <span>調査・戦略</span>
              <span>施策設計</span>
              <span>運用・制作</span>
            </div>
          </div>
        </div>
      </div>
      <div className="s-review">
        <p className="s-kicker">REVIEW & NEXT ACTION</p>
        <strong>検証を、次の一手へ。</strong>
        <div>
          <span>計測・分析</span>
          <span aria-hidden="true">↗</span>
          <span>戦略・予算・制作に戻す</span>
        </div>
        <div className="s-signal" aria-hidden="true">
          {[24, 40, 32, 58, 46, 72, 62, 90, 78, 100, 86, 116].map((h, i) => (
            <i key={i} style={{ height: h }} />
          ))}
        </div>
      </div>
      <figcaption>
        支援プロセスのコンセプト図 / 実際の管理画面・実績データではありません
      </figcaption>
    </figure>
  );
}
