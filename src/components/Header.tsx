"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { name: "マーケティングコンサルティング", href: "/services/consulting" },
  { name: "運用代行", href: "/services/operations" },
  { name: "制作", href: "/services/production" },
  { name: "スクール", href: "/services/school" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/8">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <span className="text-white text-base font-bold tracking-tight">Framework</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors duration-200 underline-draw">
            トップ
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1.5">
              サービス
              <svg className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 transition-all duration-200 origin-top ${servicesOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}>
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl py-1.5 shadow-2xl">
                {services.map((s) => (
                  <Link key={s.href} href={s.href}
                    className="flex items-center justify-between px-5 py-3 text-sm text-white/50 hover:text-white hover:bg-white/5 transition-colors duration-150">
                    {s.name}
                    <svg className="w-3.5 h-3.5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/contact"
            className="text-sm text-white border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200">
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile */}
        <button className="md:hidden text-white/60 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/8 px-6 py-5 space-y-0.5">
          <Link href="/" className="block py-3 text-sm text-white/50 hover:text-white" onClick={() => setMenuOpen(false)}>トップ</Link>
          <p className="pt-4 pb-2 text-xs text-white/20 uppercase tracking-widest">Services</p>
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="block py-3 text-sm text-white/50 hover:text-white pl-2" onClick={() => setMenuOpen(false)}>
              {s.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link href="/contact" className="block text-center text-sm text-white border border-white/20 px-5 py-3 rounded-full" onClick={() => setMenuOpen(false)}>
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
