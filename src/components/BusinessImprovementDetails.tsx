import Link from "next/link";
import ReportDemo from "@/components/ReportDemo";

export function ImprovementEvidence() {
  return (
    <div className="m-improvement-evidence">
      <div id="effect" className="m-section-head">
        <p className="m-eyebrow">EFFECT ESTIMATE</p>
        <h3 className="m-subheading">時間の削減と、支出の削減を分けて見る</h3>
        <p className="m-lead">以下は説明用の仮定です。導入実績や成果の保証ではありません。処理件数と確認・修正時間を含めて試算します。</p>
      </div>
      <div className="m-split">
        <article className="m-task-card">
          <p className="m-eyebrow">時間価値換算の試算例</p>
          <h3>月30時間 → 月8時間</h3>
          <p>確認作業を含めて、月22時間を削減する想定。</p>
          <dl className="m-glance">
            <div><dt>時間単価（仮定）</dt><dd>3,000円 / 時間</dd></div>
            <div><dt>人件費相当額</dt><dd>22時間 × 3,000円 ＝ 月6.6万円</dd></div>
            <div><dt>ツール・保守の増分</dt><dd>月1.5万円</dd></div>
            <div><dt>差引効果（時間価値換算）</dt><dd>月5.1万円</dd></div>
            <div><dt>初期費用</dt><dd>30万円（診断料は導入費に充当）</dd></div>
            <div><dt>時間価値換算の回収目安</dt><dd>30万円 ÷ 5.1万円 ≒ 約5.9か月</dd></div>
          </dl>
          <p className="m-small">この例には顧客側の移行・教育工数を含めていません。実際の試算では初期負担に加算します。給与等の支払いが変わらなければ、上記は現金の回収期間ではありません。</p>
        </article>
        <article className="m-task-card">
          <p className="m-eyebrow">現金支出の確認</p>
          <h3>実際に減る支払いを測る</h3>
          <p>外注費・残業代・ツール利用料などの減少額から、新たに発生するツール・保守費等を差し引きます。</p>
          <div className="m-output">月間の純支出削減額<br />＝ 減る支出 − 新たな運用費</div>
          <div className="m-output">現金ベースの回収期間<br />＝ 初期の現金支出 ÷ 月間の純支出削減額</div>
          <p>純支出削減額がゼロ以下なら、現金ベースでは回収できません。同じ業務の外注費削減と時間価値を重ねて計上しません。</p>
          <p className="m-small">顧客側の移行・教育で追加支払いが発生する場合は初期の現金支出に含めます。既存社員の時間負担は別に計上し、時間価値換算の試算へ反映します。</p>
          <p className="m-small">「月22時間を別の仕事に使える」と「毎月の支払いが減る」は異なる効果です。どちらを目的にするか、診断で合意します。</p>
        </article>
      </div>

      <ReportDemo />
    </div>
  );
}

export function ImprovementPricing() {
  return (
    <div className="m-pricing">
      <div>
        <p className="m-eyebrow">SCOPE FIRST</p>
        <h3>一つの業務を、<br />範囲と料金を決めて改善</h3>
        <p>初期提供の料金目安です。すべて税別。正式な範囲・料金・納期は、対象業務を確認して固定見積もりで確定します。</p>
        <Link href="/contact?service=business-improvement" className="m-text-link">無料・30分の相談を申し込む ↗</Link>
      </div>
      <div>
        <ol className="m-price-factors">
          {[
            ["初回相談 / 無料・30分", "対象業務を一つ選び、改善できそうか整理します。"],
            ["業務改善診断 / 3万円", "現状工数・費用、改善案、効果試算、固定見積もり。導入時は診断料3万円を導入費から差し引きます。"],
            ["小規模導入 / 15万〜30万円", "一つの業務・最大二つの既存ツール間の連携。操作説明・効果測定・検収後30日間の仕様不適合修正を含みます。"],
            ["保守（任意） / 月1万〜2万円", "稼働確認・障害調査・月1時間までの軽微な調整。機能追加は別見積もりです。"],
          ].map(([title, text]) => <li key={title}><strong>{title}</strong><span>{text}</span></li>)}
        </ol>
        <p className="m-small">ツール利用料は別途明示。全社刷新・大規模移行・24時間対応は小規模導入に含みません。保守の更新・解約条件は契約前に確認します。</p>
      </div>
    </div>
  );
}
