import Link from "next/link";
import { Breadcrumb, pageMeta } from "@/components/Marketing";
import { COMPANY } from "@/lib/site";
export const metadata = pageMeta(
  "プライバシーポリシー",
  "Framework（frmw）における個人情報と、Google APIから取得する情報の取り扱いについて。",
  "/privacy",
);
export default function Page() {
  return (
    <>
      <section className="m-service-hero">
        <div className="m-container">
          <Breadcrumb name="プライバシーポリシー" path="/privacy" />
          <p className="m-eyebrow">PRIVACY POLICY</p>
          <h1>プライバシーポリシー</h1>
          <p className="m-lead">
            {COMPANY.legalName}（以下「当事業者」）は、お預かりする個人情報を次のとおり取り扱います。
          </p>
        </div>
      </section>
      <div className="m-section">
        <div className="m-container m-article-width">
          <div className="article-body">
            <h2>1. 事業者</h2>
            <ul>
              <li>屋号：{COMPANY.legalName}</li>
              <li>代表：{COMPANY.representative}</li>
              <li>
                所在地：{COMPANY.addressRegion}
                {COMPANY.addressLocality}
              </li>
              <li>
                お問い合わせ窓口：本サイトの
                <Link href="/contact">お問い合わせフォーム</Link>
              </li>
            </ul>

            <h2>2. 取得する情報</h2>
            <ul>
              <li>
                <strong>お問い合わせフォーム</strong>
                ：会社名、お名前、メールアドレス、ご相談の種類、お問い合わせ内容
              </li>
              <li>
                <strong>相談予約</strong>
                ：Googleカレンダーの予約ページでご入力いただいたお名前、メールアドレス、ご予約の日時
              </li>
              <li>
                <strong>アクセス情報</strong>
                ：アクセス解析ツールを使う場合は、Cookieなどを通じて閲覧したページ、使用した端末やブラウザの種類などの情報を取得します。個人を特定する情報は含みません。
              </li>
            </ul>

            <h2>3. 利用目的</h2>
            <ul>
              <li>お問い合わせ・ご相談への回答、ご連絡</li>
              <li>ご相談の日程調整</li>
              <li>提案、見積もり、契約、業務の遂行</li>
              <li>サイトの改善のための利用状況の分析</li>
            </ul>

            <h2>4. 第三者への提供</h2>
            <p>
              法令に基づく場合を除き、ご本人の同意なく第三者に提供しません。
            </p>

            <h2>5. 外部サービスの利用</h2>
            <p>業務に必要な範囲で、次のサービスを利用します。</p>
            <ul>
              <li>Vercel（サイトの公開）</li>
              <li>Resend（お問い合わせ内容のメール送信）</li>
              <li>Google（カレンダーの予約、アクセス解析）</li>
            </ul>

            <h2>6. Google APIから取得する情報</h2>
            <p>
              当事業者が業務で使う社内ツールは、Google広告のAPIを通じて、許可を得た広告アカウントの成果データ（費用、表示回数、クリック数、コンバージョンなど）を読み取ります。
            </p>
            <ul>
              <li>読み取ったデータは、広告成果のレポート作成と分析だけに使います。</li>
              <li>第三者への提供や販売はしません。広告の配信にも使いません。</li>
              <li>
                Google APIから受け取った情報の利用と他のアプリへの受け渡しは、
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google API サービスのユーザーデータに関するポリシー
                </a>
                （Limited Use の要件を含む）に従います。
              </li>
              <li>アクセスの許可は、Googleアカウントの設定からいつでも取り消せます。</li>
            </ul>

            <h2>7. 安全管理</h2>
            <p>
              不正アクセス、紛失、漏えいなどを防ぐため、必要かつ適切な安全管理を行います。
            </p>

            <h2>8. 開示・訂正・削除などのご請求</h2>
            <p>
              ご本人から個人情報の開示、訂正、利用停止、削除のご請求があった場合は、本人確認のうえ、法令に従って対応します。
              <Link href="/contact">お問い合わせフォーム</Link>からご連絡ください。
            </p>

            <h2>9. 改定</h2>
            <p>
              必要に応じて本ポリシーを改定します。改定後の内容は本ページに掲載した時点から有効とします。
            </p>

            <p style={{ marginTop: 40 }}>2026年10月14日 制定</p>
          </div>
        </div>
      </div>
    </>
  );
}
