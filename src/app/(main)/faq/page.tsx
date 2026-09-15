import {
  Breadcrumb,
  Section,
  FaqList,
  ContactCTA,
  pageMeta,
} from "@/components/Marketing";
import { faqs, getFaqCategories } from "@/lib/faq";
export const metadata = pageMeta(
  "よくある質問｜料金・契約・準備",
  "支援範囲、料金、契約、アカウント所有権、社内の準備について。Frameworkへのご相談前によくある疑問にお答えします。",
  "/faq",
);
export default function Page() {
  return (
    <>
      <section className="m-service-hero">
        <div className="m-container">
          <Breadcrumb name="よくある質問" path="/faq" />
          <p className="m-eyebrow">FAQ</p>
          <h1>相談前の疑問を、ここで。</h1>
          <p className="m-lead">
            費用や進め方、社内で必要な準備などをまとめました。
          </p>
        </div>
      </section>
      {getFaqCategories().map((cat, i) => (
        <Section key={cat} eyebrow={"0" + (i + 1) + " / QUESTIONS"} title={cat}>
          <FaqList items={faqs.filter((f) => f.category === cat)} />
        </Section>
      ))}
      <ContactCTA />
    </>
  );
}
