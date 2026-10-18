import { Breadcrumb, pageMeta } from "@/components/Marketing";
import { services } from "@/lib/services";
import { subServices } from "@/lib/sub-services";
import ContactModal from "@/components/ContactModal";
import { bookingUrl } from "@/lib/booking";
import styles from "./contact.module.css";
export const metadata = pageMeta(
  "無料相談・お問い合わせ",
  "現在の課題、目標、予算感から支援範囲を整理します。マーケティング・業務改善・アプリ開発・AI活用のご相談はこちら。",
  "/contact",
);
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const booking = bookingUrl();
  const selected =
    (service === "business-improvement" || service === "業務改善支援" ? "business-improvement" : undefined) ??
    services.find((s) => s.name === service || s.slug === service)?.slug ??
    Object.entries(subServices)
      .find(([, s]) => s.name === service)?.[0]
      .split("/")[0] ??
    "";
  return (
    <>
      <section className={`m-service-hero ${styles.hero}`}>
        <div className="m-container">
          <Breadcrumb name="無料相談・お問い合わせ" path="/contact" />
          <p className="m-eyebrow">CONTACT</p>
          <h1>ご相談方法をお選びください</h1>
          <p className="m-lead">日時を決めて話したい方も、まずは文章で相談したい方も。<br />ご都合に合わせて、どちらか一つの方法でお問い合わせください。</p>
        </div>
      </section>
      <section className={`m-section ${styles.choicesSection}`} aria-label="ご相談方法">
        <div className="m-container">
          <div className={styles.choices}>
            {booking && (
              <article className={styles.card}>
                <p className={styles.badge}>日時を決めて話したい方</p>
                <h2>オンライン相談を予約</h2>
                <p className={styles.summary}>空き日時を選んで、30分の無料相談を予約できます。</p>
                <ul className={styles.facts}><li>Google Meetで相談</li><li>予約時に相談内容も入力できます</li></ul>
                <p className={styles.flow}>日時を選ぶ → 必要事項を入力 → 予約完了</p>
                <a className="m-button" href={booking} target="_blank" rel="noopener noreferrer">空き日時を選んで予約する <span aria-hidden="true">↗</span></a>
                <p className={styles.note}>Googleカレンダーが別タブで開きます。<br />このページのフォームへの入力は不要です。</p>
              </article>
            )}
            <article className={styles.card}>
              <p className={styles.badge}>まずは文章で相談したい方</p>
              <h2>フォームで相談を送る</h2>
              <p className={styles.summary}>相談したいことを送信いただくと、内容を確認してメールでお返事します。</p>
              <ul className={styles.facts}><li>面談日時を決めずに相談できます</li><li>支援内容が未定でも大丈夫です</li></ul>
              <p className={styles.flow}>フォームに入力 → 送信 → メールでお返事</p>
              <ContactModal initialService={selected} />
              <p className={styles.note}>メールでのご連絡：<a href="mailto:teramoto@frmw.jp">teramoto@frmw.jp</a></p>
              <p className={styles.note}>入力フォームがポップアップで開きます。<br />送信だけで面談が予約されることはありません。</p>
            </article>
          </div>
        </div>
      </section>

    </>
  );
}
