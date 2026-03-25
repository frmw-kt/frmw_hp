import Link from "next/link";

const services = [
  { name: "マーケティングコンサルティング", href: "/services/consulting" },
  { name: "運用代行", href: "/services/operations" },
  { name: "制作", href: "/services/production" },
  { name: "スクール", href: "/services/school" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/5">
          <div>
            <div className="flex items-center gap-1 mb-5">
              <span className="text-xl font-black text-white tracking-tighter">Framework</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mb-0.5" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              マーケティングの力で、<br />
              クライアントの成長を支援します。
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-5">Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-slate-500 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500/60" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-5">Contact</p>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              サービスに関するご質問・ご相談はお気軽にどうぞ。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2.5 rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all font-medium shadow-lg shadow-blue-900/30"
            >
              お問い合わせはこちら
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Framework. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
