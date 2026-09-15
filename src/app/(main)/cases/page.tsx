import {
  Breadcrumb,
  Section,
  ContactCTA,
  pageMeta,
} from "@/components/Marketing";
import CaseExplorer from "@/components/CaseExplorer";
export const metadata = pageMeta(
  "支援事例｜課題・施策・成果から探す",
  "不動産、スクール、リフォーム、士業、EC・D2C。広告運用・戦略・Web制作の事例を、実施内容、期間、成果から比較できます。",
  "/cases",
);
export default function Page() {
  return (
    <>
      <section className="m-service-hero">
        <div className="m-container">
          <Breadcrumb name="支援事例" path="/cases" />
          <p className="m-eyebrow">CASE STUDIES</p>
          <h1>
            成果の数字と、
            <br />
            そこまでの取り組み。
          </h1>
          <p className="m-lead">
            50社以上の支援実績から、掲載許諾済みの6事例をご紹介します。
            <br />
            事業の条件、課題、実施した施策を合わせてご覧ください。
          </p>
        </div>
      </section>
      <Section
        eyebrow="SELECT A CASE"
        title="近い課題の事例を探す。"
        text="一部の事例は顧客情報の保護のため匿名化しています。成果は個別の条件下での実績であり、同等の結果を保証するものではありません。"
      >
        <CaseExplorer />
      </Section>
      <ContactCTA />
    </>
  );
}
