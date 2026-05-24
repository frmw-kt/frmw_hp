import Link from "next/link";
import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import NeuralNetworkAvatar from "@/components/NeuralNetworkAvatar";

export const metadata: Metadata = {
  title: "About | Framework",
  description: "Framework代表・寺本一真のプロフィール。中小企業・個人事業主・フリーランス向けマーケティング支援を個人事業主として行っています。",
};

const GOLD = "#C9A84C";
const GOLD_DARK = "#A8892E";

const values = [
  {
    number: "01",
    title: "Results First",
    description: "見栄えのある提案より、数字で語れる成果を追求します。すべての施策はROIから逆算して設計します。",
  },
  {
    number: "02",
    title: "Data Driven",
    description: "勘や経験だけに頼らず、データを根拠に意思決定します。再現性のある成功を積み重ねることが強みです。",
  },
  {
    number: "03",
    title: "Full Ownership",
    description: "「提案して終わり」はしません。戦略から実行・改善まで責任をもって伴走し、クライアントと共に成果を出します。",
  },
  {
    number: "04",
    title: "Relentless Growth",
    description: "マーケティングの潮流は常に変化します。最新の知見とテクノロジーを常に現場に取り入れ続けます。",
  },
];

const companyInfo = [
  { label: "屋号",     value: "Framework（frmw）" },
  { label: "開業",     value: "2026年3月" },
  { label: "代表",     value: "寺本 一真" },
  { label: "所在地",   value: "愛知県名古屋市" },
  { label: "事業形態", value: "個人事業主" },
  { label: "事業内容", value: "マーケティングコンサルティング・運用代行・制作・オンラインスクール" },
  { label: "対応規模", value: "年商数千万〜数億円規模の中小企業・個人事業主・フリーランス" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden py-32 md:py-44">
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/30 text-sm hover:text-white transition-colors mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            トップへ戻る
          </Link>
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">About Us</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-2xl">
            小さくても強い事業を、<br />
            <span className="text-white/30">マーケティングで実現する。</span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl">
            個人事業主として、中小企業・フリーランス・個人事業主のマーケティング課題に向き合います。
            大手代理店では断られる規模感でも、成果にこだわった支援を提供します。
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#fafafa] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="flex items-end justify-between mb-16 pb-6 border-b border-[#e5e5e5]">
            <div>
              <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
                Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                私たちのミッション
              </h2>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateIn delay={1}>
              <p className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-bold text-[#0a0a0a] leading-snug tracking-tight">
                「売れる仕組み」を<br />小さな事業にこそ。
              </p>
            </AnimateIn>
            <AnimateIn delay={2}>
              <p className="text-[#737373] text-base leading-[2] max-w-md">
                年商数千万〜数億円規模の中小企業・個人事業主・フリーランスが、大手と戦えるマーケティング力を持てるように——それが Framework の使命です。
                コンサルティング・運用・制作・教育という4つの軸で、売上を伸ばすために必要なすべてをワンストップで支援します。
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="bg-[#0a0a0a] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="mb-16 pb-6 border-b border-white/8">
            <span className="inline-flex items-center border border-white/10 rounded-full px-3 py-1 text-[11px] text-white/30 uppercase tracking-[0.2em] mb-4">
              Message
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">代表メッセージ</h2>
          </AnimateIn>

          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <AnimateIn delay={1}>
              <div className="relative border border-white/8 rounded-2xl aspect-[3/4] overflow-hidden">
                <NeuralNetworkAvatar />
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-2">Founder</p>
                    <p className="text-xl font-bold text-white">Teramoto Kazuma</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={2} className="flex flex-col justify-center">
              <blockquote className="text-white/70 text-base leading-[2.2] space-y-6">
                <p>
                  マーケティングは「売る技術」ではなく、「価値を届ける技術」だと考えています。
                  どれほど優れた製品やサービスも、正しく届けられなければ存在しないも同然です。
                </p>
                <p>
                  Framework は個人事業として2026年3月に開業しました。大手代理店での経験を経て、むしろ支援が手薄になりがちな中小・個人規模のビジネスにこそ、本質的なマーケティング支援が必要だという確信から立ち上げました。
                  月間8,000万円規模の広告運用経験と、データドリブンなアプローチを月5万円〜の手の届く価格で提供します。
                </p>
                <p>
                  「マーケティングで困ったら Framework」——そう言っていただけるパートナーであり続けることが誇りです。
                </p>
              </blockquote>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#fafafa] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="flex items-end justify-between mb-12 pb-6 border-b border-[#e5e5e5]">
            <div>
              <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
                Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
                私たちの価値観
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <AnimateIn key={v.number} delay={(Math.min(i + 1, 4)) as 1|2|3|4}
                className="border border-[#e5e5e5] rounded-2xl p-10 hover:border-[#0a0a0a]/25 hover:shadow-sm transition-all duration-300">
                <p className="text-xs font-mono mb-6" style={{ color: GOLD_DARK }}>{v.number}</p>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4">{v.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{v.description}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-white py-24 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="mb-16 pb-6 border-b border-[#e5e5e5]">
            <span className="inline-flex items-center border border-[#e5e5e5] rounded-full px-3 py-1 text-[11px] text-[#737373] uppercase tracking-[0.2em] mb-4">
              Profile
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">プロフィール</h2>
          </AnimateIn>

          <AnimateIn delay={1} className="max-w-3xl">
            <dl className="divide-y divide-[#e5e5e5]">
              {companyInfo.map((item) => (
                <div key={item.label} className="grid grid-cols-[10rem_1fr] py-6 gap-8">
                  <dt className="text-sm text-[#737373]">{item.label}</dt>
                  <dd className="text-sm text-[#0a0a0a] font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] bg-dot-grid py-36 border-t border-white/8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] mb-8"
              style={{ border: "1px solid rgba(201,168,76,0.2)", color: GOLD }}>
              Contact
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              まずは<br />
              <span className="text-white/30">お気軽にご相談ください</span>
            </h2>
            <p className="text-white/35 text-base mb-12 max-w-md mx-auto leading-relaxed">
              現状と課題をお聞きし、最適なプランをご提案します。月5万円〜対応可能。初回相談は無料です。
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)" }}>
              無料相談を申し込む
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
