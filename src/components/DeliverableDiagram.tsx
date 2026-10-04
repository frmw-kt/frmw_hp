import type { Service } from "@/lib/services";
import { Deliverables } from "@/components/Marketing";

/** Schematic artifacts, not customer materials or a fixed delivery specification. */
export default function DeliverableDiagram({
  service: s,
}: {
  service: Service;
}) {
  if (s.slug === "consulting") return <Deliverables />;
  const production = ["production", "lp", "web"].includes(s.slug);
  const product = ["app-development", "ai"].includes(s.slug);
  return (
    <div className="m-split m-delivery-diagram">
      <figure className="m-delivery-preview">
        <figcaption>
          {production
            ? "PAGE BLUEPRINT"
            : product
              ? "WORKFLOW BLUEPRINT"
              : "WORKING DOCUMENT"}
        </figcaption>
        {production ? (
          <div className="m-wireframe">
            <div>
              <span>01 / FIRST VIEW</span>
              <strong>誰に、何を届けるか</strong>
              <i>相談の入り口</i>
            </div>
            <div>
              <span>02 / EVIDENCE</span>
              <strong>課題 → 支援内容 → 根拠</strong>
              <div className="m-wireframe-grid">
                <b>サービス</b>
                <b>事例</b>
                <b>FAQ</b>
              </div>
            </div>
            <div>
              <span>03 / ACTION</span>
              <strong>不安を解消し、次の行動へ</strong>
            </div>
          </div>
        ) : product ? (
          <ol className="m-workflow-preview">
            {(s.slug === "ai"
              ? [
                  "入力・参照資料",
                  "AIで下書きを生成",
                  "人が確認・修正",
                  "承認後に業務へ反映",
                ]
              : [
                  "業務の入力",
                  "権限・ルールを確認",
                  "データ処理・API連携",
                  "画面・レポートに出力",
                ]
            ).map((t, i) => (
              <li key={t}>
                <span>0{i + 1}</span>
                <strong>{t}</strong>
                {i < 3 && <b aria-hidden="true">↓</b>}
              </li>
            ))}
          </ol>
        ) : (
          <div className="m-document-preview">
            <div className="m-document-heading">
              {s.name} / 判断と実行の記録
            </div>
            {s.tasks.map((t, i) => (
              <div key={t.title}>
                <span>0{i + 1}</span>
                <strong>{t.output}</strong>
                <div className="m-paper-line" />
                <div className="m-paper-line short" />
              </div>
            ))}
          </div>
        )}
        <p className="m-small">構成イメージ・実データではありません</p>
      </figure>
      <div>
        <h3 className="m-subheading">
          {production
            ? "構成から、訪問者の疑問に答える"
            : product
              ? "入力から、人の確認と出力まで"
              : "何が分かり、次に何をするかを残す"}
        </h3>
        <p className="m-lead">
          {production
            ? "左の図はページの情報構造の例です。実際はターゲットや流入元、サービス内容に合わせて構成を変えます。"
            : product
              ? "図は実装を考えるための業務フロー例です。利用者、入力データ、例外処理、承認が必要な場面を整理してから機能を決めます。"
              : "左の図は共有資料に含める項目の例です。事実、考察、次のアクションを分け、会議後も判断の根拠をたどれる形にします。"}
        </p>
        <dl className="m-glance">
          {s.tasks.slice(0, 3).map((t) => (
            <div key={t.title}>
              <dt>{t.title}</dt>
              <dd>{t.output}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
