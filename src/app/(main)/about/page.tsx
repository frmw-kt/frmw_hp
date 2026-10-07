import {
  Breadcrumb,
  Section,
  SystemDiagram,
  ContactCTA,
  pageMeta,
} from "@/components/Marketing";
import { COMPANY } from "@/lib/site";
export const metadata = pageMeta(
  "Frameworkについて｜代表・支援方針",
  "愛知県名古屋市を拠点に、寺本一真が代表を務めるFramework。戦略、運用、制作をつなぎ、マーケティングと業務改善を実行まで支援します。",
  "/about",
);
export default function Page() {
  return (
    <>
      <section className="m-service-hero">
        <div className="m-container">
          <Breadcrumb name="Frameworkについて" path="/about" />
          <p className="m-eyebrow">ABOUT FRAMEWORK</p>
          <h1>
            小さくても強い事業を、
            <br />
            マーケティングと業務改善で
          </h1>
          <p className="m-lead">
            専任人材や実行リソースが足りない企業に、戦略と実務をつなぐパートナーを。
            <br />
            必要な領域から、事業の前進を支えます。
          </p>
        </div>
      </section>
      <Section
        eyebrow="01 / OUR WORK"
        title="提案を、実行できる状態にする"
        text="年商数千万円〜数億円規模の事業者を中心に、調査・戦略、広告運用、Web制作を支援。もう一つの柱である業務改善では、集計・転記の削減を支援。既存ツールの設定・連携を優先し、必要に応じてアプリ開発やAI活用を組み合わせます。"
      >
        <SystemDiagram />
      </Section>
      <Section
        eyebrow="02 / REPRESENTATIVE"
        title="代表について"
        tone="m-tint"
      >
        <div className="m-split">
          <div>
            <p className="m-eyebrow">FOUNDER / MARKETING & PRODUCT</p>
            <h3 className="m-subheading">{COMPANY.representative}</h3>
            <p className="m-lead">
              広告運用・マーケティング支援の経験をもとに、2026年3月にFrameworkを開業。月間8,000万円規模の広告運用経験を活かし、事業ごとの課題に向き合います。
            </p>
          </div>
          <div>
            <h3 className="m-subheading">価値を、必要な人へ届ける</h3>
            <p className="m-lead">
              優れた商品やサービスも、伝え方や届け方が整理されていなければ選ばれにくくなります。だからこそ、広告、サイト、問い合わせ後の対応を別々にせず、同じ目標につなげて考えます。
            </p>
            <p className="m-lead">
              Frameworkは代表を主体とする個人事業です。担当する業務、連携が必要な範囲、窓口と役割分担を提案時に明確にします。
            </p>
          </div>
        </div>
      </Section>
      <Section
        eyebrow="03 / WORKING PRINCIPLES"
        title="支援で大切にする、3つのこと"
      >
        <div className="m-grid-3">
          {[
            [
              "目標と指標をそろえる",
              "流入だけでなく、商談や成約を含む事業の流れから評価する指標を決めます。",
            ],
            [
              "事実と仮説を分ける",
              "確認できた数値と、まだ検証していない見立てを分け、判断の根拠を共有します。",
            ],
            [
              "次の行動を残す",
              "結果の報告に加え、改善の優先順位、担当、進め方を整理します。",
            ],
          ].map(([t, d], i) => (
            <article className="m-task-card" key={t}>
              <span className="m-num">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="04 / PROFILE" title="事業概要" tone="m-tint">
        <dl className="m-company">
          {[
            ["屋号", COMPANY.legalName],
            ["事業形態", "個人事業"],
            ["代表", COMPANY.representative],
            ["開業", "2026年3月"],
            ["拠点", "愛知県名古屋市"],
            [
              "事業内容",
              "マーケティング支援（コンサルティング・運用代行・制作）／業務改善支援（診断・自動化・保守）",
            ],
            ["対応方法", "全国オンライン対応。対面は個別に相談"],
          ].map(([t, d]) => (
            <div key={t}>
              <dt>{t}</dt>
              <dd>{d}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <ContactCTA />
    </>
  );
}
