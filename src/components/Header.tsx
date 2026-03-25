"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-xl font-black text-white tracking-tighter">Framework</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mb-0.5 group-hover:scale-150 transition-transform" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            トップ
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1">
              サービス
              <svg className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 transition-all duration-200 ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
              <div className="bg-slate-900 border border-white/10 rounded-2xl py-2 shadow-2xl shadow-black/40 overflow-hidden">
                <div className="shimmer-line mb-2" />
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-3 px-5 py-3 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-400" />
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="text-sm bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all font-medium shadow-lg shadow-blue-900/30"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-white/5 px-6 py-5 space-y-1">
          <Link href="/" className="block py-3 text-sm text-slate-400 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>トップ</Link>
          <p className="pt-3 pb-1 text-xs font-semibold text-slate-600 uppercase tracking-wider">サービス</p>
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="flex items-center gap-2 py-3 text-sm text-slate-400 hover:text-white transition-colors pl-1" onClick={() => setMenuOpen(false)}>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              {s.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              className="block text-center text-sm bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-3 rounded-full font-medium"
              onClick={() => setMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
