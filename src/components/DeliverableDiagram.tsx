import type { Service } from "@/lib/services";
import { Deliverables } from "@/components/Marketing";
import { PageBlueprint, WorkflowBlueprint, DocumentBlueprint } from "@/components/diagrams/Diagrams";

/** Schematic artifacts, not customer materials or a fixed delivery specification. */
export default function DeliverableDiagram({
  service: s,
}: {
  service: Service;
}) {
  if (s.slug === "consulting") return <Deliverables />;
  const production = ["production", "lp", "web"].includes(s.slug);
  const product = ["business-improvement", "app-development", "ai"].includes(s.slug);
  return (
    <div className="m-split m-delivery-diagram">
      <figure className="m-delivery-figure" style={{ margin: 0, minWidth: 0 }}>
        {production ? (
          <PageBlueprint />
        ) : product ? (
          <WorkflowBlueprint ai={s.slug === "ai"} />
        ) : (
          <DocumentBlueprint title={s.name} items={s.tasks.map((t) => t.output)} />
        )}
        <figcaption className="m-small" style={{ marginTop: 12 }}>構成イメージ・実データではありません</figcaption>
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
