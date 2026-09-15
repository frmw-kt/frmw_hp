"use client";
import Link from "next/link";
import { useRef } from "react";
const links = [
  ["サービス", "/#services"],
  ["支援事例", "/cases"],
  ["Frameworkについて", "/about"],
  ["コラム", "/blog"],
  ["よくある質問", "/faq"],
];
export default function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <header className="m-header">
      <div className="m-container m-header-inner">
        <Link href="/" className="m-logo" aria-label="Framework ホーム">
          Framework<span>.</span>
        </Link>
        <nav aria-label="メインナビゲーション" className="m-desktop-nav">
          {links.map(([n, h]) => (
            <Link href={h} key={h}>
              {n}
            </Link>
          ))}
          <Link href="/contact" className="m-button">
            無料相談 ↗
          </Link>
        </nav>
        <details
          className="m-mobile-menu"
          ref={menu}
          onKeyDown={(e) => {
            if (e.key === "Escape" && menu.current) {
              menu.current.open = false;
              menu.current.querySelector("summary")?.focus();
            }
          }}
        >
          <summary>メニュー</summary>
          <nav aria-label="モバイルナビゲーション">
            {[...links, ["無料相談", "/contact"]].map(([n, h]) => (
              <Link
                href={h}
                key={h}
                onClick={() => {
                  if (menu.current) menu.current.open = false;
                }}
              >
                {n}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
