"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { hasPublicCases } from "@/lib/cases";

const links = [
  ["サービス", "/#services"],
  ["業務改善支援", "/services/business-improvement"],
  ["支援事例", "/cases"],
  ["Frameworkについて", "/about"],
  ["コラム", "/blog"],
  ["よくある質問", "/faq"],
].filter(([, h]) => hasPublicCases || h !== "/cases");

const isActive = (pathname: string, href: string) =>
  !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

/** 極小ヘッダー＋全画面メニュー。メニューは番号付きの大きなナビがスタッガー表示される。 */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 開いている間は本文スクロールを止め、Escで閉じてトリガーへフォーカスを戻す
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="hx-overlay" data-scrolled={scrolled} data-open={open}>
      <div className="m-container hx-overlay-inner">
        <Link href="/" className="hx-logo" aria-label="Framework ホーム">
          Framework<span>.</span>
        </Link>
        <div className="hx-overlay-actions">
          <Link href="/contact" className="hx-overlay-cta">
            無料相談
          </Link>
          <button
            ref={trigger}
            type="button"
            className="hx-overlay-toggle"
            aria-expanded={open}
            aria-controls="hx-overlay-panel"
            onClick={() => setOpen(!open)}
          >
            <span className="hx-overlay-label">{open ? "Close" : "Menu"}</span>
            <span className="hx-overlay-icon" aria-hidden>
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>
      <div id="hx-overlay-panel" className="hx-overlay-panel" inert={!open}>
        <div className="m-container hx-overlay-grid">
          <nav aria-label="メインナビゲーション">
            <ol>
              {links.map(([n, h], i) => (
                <li key={h} style={{ "--i": i } as React.CSSProperties}>
                  <Link
                    href={h}
                    aria-current={isActive(pathname, h) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <small>{String(i + 1).padStart(2, "0")}</small>
                    {n}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <aside>
            <p className="hx-overlay-eyebrow">Contact</p>
            <p>マーケティング・業務改善の相談を受け付けています。</p>
            <Link href="/contact" className="hx-overlay-big-cta" onClick={() => setOpen(false)}>
              無料相談をする ↗
            </Link>
            <p className="hx-overlay-meta">Nagoya, Aichi — frmw.jp</p>
          </aside>
        </div>
      </div>
    </header>
  );
}
