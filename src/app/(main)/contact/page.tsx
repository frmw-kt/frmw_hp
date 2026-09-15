import { Breadcrumb, pageMeta } from "@/components/Marketing";
import { services } from "@/lib/services";
import { subServices } from "@/lib/sub-services";
import ContactForm from "@/components/ContactForm";
export const metadata = pageMeta(
  "無料相談・お問い合わせ",
  "現在の課題、目標、予算感から支援範囲を整理します。戦略・広告運用・Web制作・アプリ開発・AI活用のご相談はこちら。",
  "/contact",
);
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const selected =
    services.find((s) => s.name === service)?.slug ??
    Object.entries(subServices)
      .find(([, s]) => s.name === service)?.[0]
      .split("/")[0] ??
    "";
  return (
    <>
      <section className="m-service-hero">
        <div className="m-container">
          <Breadcrumb name="無料相談・お問い合わせ" path="/contact" />
          <p className="m-eyebrow">CONTACT</p>
          <h1>次の一歩を、一緒に整理する。</h1>
          <p className="m-lead">
            まだ支援内容が決まっていなくても構いません。
            <br />
            事業の現状と、いま困っていることをお聞かせください。
          </p>
        </div>
      </section>
      <section className="m-section">
        <div className="m-container m-split">
          <aside>
            <p className="m-eyebrow">YOUR FIRST CONSULTATION</p>
            <h2 className="m-subheading">初回相談で整理すること</h2>
            <ol className="m-checklist">
              <li>事業の目標と、現状の課題</li>
              <li>必要な支援と、優先して取り組むこと</li>
              <li>予算感・開始時期・次の進め方</li>
            </ol>
            <p className="m-lead">
              初回相談は無料です。所要時間や相談方法は、日程調整時にご案内します。
            </p>
            <p className="m-small" style={{ marginTop: 24 }}>
              資料が揃っていなくても相談できます。顧客の個人情報やパスワードなど、機密情報の入力はお控えください。
            </p>
          </aside>
          <ContactForm initialService={selected} />
        </div>
      </section>
    </>
  );
}
