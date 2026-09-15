import Link from "next/link";
import { services } from "@/lib/services";
export default function Footer() {
  return (
    <footer className="m-footer">
      <div className="m-container">
        <div className="m-footer-grid">
          <div>
            <Link href="/" className="m-logo">
              Framework<span>.</span>
            </Link>
            <p>
              戦略と実行を、ひとつの流れに。
              <br />
              マーケティング支援・Web制作・アプリ開発
              <br />
              愛知県名古屋市 / 全国オンライン対応
            </p>
          </div>
          <nav aria-label="サービス一覧">
            {services.map((s) => (
              <Link href={"/services/" + s.slug} key={s.slug}>
                {s.name}
              </Link>
            ))}
          </nav>
          <nav aria-label="フッターナビゲーション">
            {[
              ["支援事例", "/cases"],
              ["Frameworkについて", "/about"],
              ["コラム", "/blog"],
              ["よくある質問", "/faq"],
              ["無料相談・お問い合わせ", "/contact"],
            ].map(([n, h]) => (
              <Link key={h} href={h}>
                {n}
              </Link>
            ))}
          </nav>
        </div>
        <small>
          © {new Date().getFullYear()} Framework. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
