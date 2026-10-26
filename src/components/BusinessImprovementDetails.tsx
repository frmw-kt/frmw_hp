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
          <p className="m-eyebrow">作業時間の試算例</p>
          <h3>月30時間 → 月8時間</h3>
          <p>確認作業を含めて、月22時間を削減する想定。</p>
          <dl className="m-glance">
            <div><dt>改善前</dt><dd>月30時間</dd></div>
            <div><dt>改善後（確認・修正を含む）</dt><dd>月8時間</dd></div>
            <div><dt>削減時間</dt><dd>月22時間</dd></div>
          </dl>
          <p className="m-small">この例には顧客側の移行・教育工数を含めていません。実際の評価では、それらの負担も確認します。時間の削減が、そのまま支出の削減になるわけではありません。</p>
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

