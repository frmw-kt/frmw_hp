"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const serviceCategories = [
  {
    label: "マーケティング",
    items: [
      { name: "マーケティングコンサルティング", href: "/services/consulting" },
      { name: "運用代行", href: "/services/operations" },
      { name: "制作", href: "/services/production" },
    ],
  },
  {
    label: "プロダクト",
    items: [
      { name: "アプリ開発", href: "/services/app-development" },
      { name: "AI活用支援", href: "/services/ai" },
    ],
  },
];

type NavItem = { name: string; href: string | null };

const navItems: NavItem[] = [
  { name: "Top", href: "/" },
  { name: "Services", href: null },
  { name: "Cases", href: "/cases" },
  { name: "Column", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setServicesExpanded(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[88px] flex items-center justify-between px-6 md:px-10 transition-colors duration-300 border-b ${
          scrolled && !open
            ? "bg-[#0a0a0a]/85 backdrop-blur-md border-white/8"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link href="/" onClick={close} className="relative z-10">
          <span className="text-base font-bold tracking-tight" style={{ color: "#C9A84C" }}>Framework</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          className="relative z-10 flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200"
        >
          <span className="text-[11px] uppercase tracking-[0.15em]">{open ? "Close" : "Menu"}</span>
          <span className="flex flex-col justify-center w-[22px] h-[13px]">
            <span
              className={`block h-[1.5px] w-full rounded-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[5.75px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full rounded-full bg-current mt-[10px] transition-transform duration-300 ${
                open ? "-translate-y-[5.75px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </header>

      <div
        inert={!open}
        className={`fixed inset-0 z-40 bg-[#0a0a0a] transition-[clip-path] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open
            ? "duration-[1300ms] pointer-events-auto [clip-path:circle(150%_at_calc(100%-48px)_44px)]"
            : "duration-[650ms] pointer-events-none [clip-path:circle(0%_at_calc(100%-48px)_44px)]"
        }`}
      >
        <div
          className={`h-full flex flex-col justify-center px-6 md:px-16 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-4"
          }`}
        >
          <nav className="flex flex-col">
            {navItems.map((item, i) => (
              <div key={item.name}>
                <div className="flex items-baseline gap-4 md:gap-5">
                  <span className="text-xs font-medium text-white/25 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={close}
                      className="text-3xl md:text-5xl font-bold tracking-tight text-white/85 hover:text-[#C9A84C] hover:translate-x-2 transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setServicesExpanded((s) => !s)}
                      className="text-3xl md:text-5xl font-bold tracking-tight text-white/85 hover:text-[#C9A84C] hover:translate-x-2 transition-all duration-200"
                    >
                      {item.name}
                    </button>
                  )}
                </div>

                {!item.href && (
                  <div
                    className={`grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                      servicesExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="pl-10 md:pl-12 pt-4 pb-2 flex flex-wrap gap-x-10 gap-y-1">
                        {serviceCategories.map((cat) => (
                          <div key={cat.label} className="flex flex-col">
                            <p className="text-[10px] uppercase tracking-[0.15em] text-white/20 mb-1 mt-2">
                              {cat.label}
                            </p>
                            {cat.items.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                onClick={close}
                                className="text-sm md:text-base text-white/45 hover:text-white py-1.5 transition-colors duration-200"
                              >
                                {s.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {i < navItems.length - 1 && <div className="h-px bg-white/8 my-4 md:my-5" />}
              </div>
            ))}
          </nav>

          <div className="mt-8 md:mt-10">
            <Link
              href="/contact"
              onClick={close}
              className="inline-flex items-center gap-2 text-sm font-semibold text-black px-7 py-3.5 rounded-full transition-all duration-300 hover:opacity-80"
              style={{ background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)" }}
            >
              お問い合わせ
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
