import Link from "next/link";
import type { Metadata } from "next";
import ServicePatterns from "./ServicePatterns";
import styles from "./patterns.module.css";

export const metadata: Metadata = {
  title: "サービスセクション｜既存デザインを活かす5案",
  robots: { index: false, follow: false },
};

const patterns = [
  ["01", "縦並び・余白調整", "現在の構成を維持し、各サービスの上下余白を調整。読み慣れた形のまま全体を短くまとめます。"],
  ["02", "事業別の2列", "二つの事業を左右に配置。それぞれの3サービスを縦に並べ、事業ごとの内容を比較できます。"],
  ["03", "見出しを左に固定配置", "事業の見出しを左列、サービス一覧を右列に配置。分類と説明の位置を分けて読みやすくします。"],
  ["04", "サービスを3列", "事業ごとに3サービスを横並びに配置。現在の罫線・番号・丸い矢印を使い、一覧性を高めます。"],
  ["05", "名称と説明を左右に分割", "現在の横長の行を活かし、サービス名を左、説明・成果物・期間を右にまとめます。"],
];

export default async function Page({ searchParams }: { searchParams: Promise<{ pattern?: string }> }) {
  const { pattern } = await searchParams;
  const selected = /^[1-5]$/.test(pattern ?? "") ? Number(pattern) : 1;
  const current = patterns[selected - 1];
  return (
    <>
      <header className={`m-container ${styles.toolbar}`}>
        <div className={styles.toolbarTop}>
          <div><p className="m-eyebrow">DESIGN STUDIES / FRMW</p><h1 className="m-subheading">既存デザインを活かす、5つの配置案</h1></div>
          <Link href="/#services" className="m-text-link">現在のデザインを見る ↗</Link>
        </div>
        <nav className={styles.patternNav} aria-label="デザインパターン">
          {patterns.map(([number, name], i) => (
            <Link key={number} className="m-text-link" href={`/design/services?pattern=${i + 1}`} scroll={false} aria-current={selected === i + 1 ? "page" : undefined}>
              <span className="m-num">{number}</span><span>{name}</span>
            </Link>
          ))}
        </nav>
        <p className="m-small">{current[2]}</p>
        <p className={`m-small ${styles.previewNote}`}>全案で公開サイトと同じ配色・書体・見出し・罫線・丸い矢印を使用。説明・成果物・期間・関連事例も共通です。トップページは変更していません。</p>
      </header>
      <ServicePatterns pattern={selected} />
      <p className={`m-container m-small ${styles.endNote}`}>PATTERN {current[0]} / {current[1]}</p>
    </>
  );
}
