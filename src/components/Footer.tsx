import Link from "next/link";

const services = [
  { name: "マーケティングコンサルティング", href: "/services/consulting" },
  { name: "運用代行", href: "/services/operations" },
  { name: "制作", href: "/services/production" },
  { name: "スクール", href: "/services/school" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/8">
          <div>
            <div className="mb-5">
              <span className="text-base font-bold tracking-tight" style={{ color: "#C9A84C" }}>Framework</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              マーケティングの力で、<br />クライアントの成長を支援します。
            </p>
          </div>

          <div>
            <p className="text-xs text-white/20 uppercase tracking-widest mb-5">Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/40 hover:text-white transition-colors duration-200 underline-draw">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs text-white/20 uppercase tracking-widest mb-5">Contact</p>
            <p className="text-sm text-white/40 mb-6 leading-relaxed">
              サービスに関するご質問・ご相談はお気軽にどうぞ。
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-sm text-white border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-200">
              お問い合わせはこちら
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="pt-8 text-xs text-white/20 text-center">
          © {new Date().getFullYear()} Framework. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
