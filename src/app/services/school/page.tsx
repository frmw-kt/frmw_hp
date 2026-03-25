import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "スクール",
  description: "マーケティングスキルを体系的に学べるスクール。実践的なカリキュラムで即戦力の人材を育成します。",
};

const features = [
  {
    number: "01",
    title: "マーケティング基礎講座",
    description: "STP・4P・カスタマージャーニーなどの基本フレームワークをゼロから学べる入門コース。マーケティング思考を身につけます。",
  },
  {
    number: "02",
    title: "デジタルマーケティング実践",
    description: "SNS運用・Web広告・SEO・メールマーケティングの実務スキルを、ハンズオン形式で習得します。",
  },
  {
    number: "03",
    title: "コンテンツ・ライティング",
    description: "成果につながるコピーライティング・SEOライティングを学ぶコース。実際の制作物を通じてスキルを磨きます。",
  },
  {
    number: "04",
    title: "企業向け研修プログラム",
    description: "チーム単位・全社研修に対応したカスタムプログラム。貴社の課題や目標に合わせたオリジナルカリキュラムを設計します。",
  },
];

const points = [
  { number: "01", title: "現役プロが講師", desc: "実際にマーケティング支援に携わる現役メンバーが直接指導します。" },
  { number: "02", title: "実践重視のカリキュラム", desc: "インプットだけでなく、課題・フィードバックを通じた実践学習で定着させます。" },
  { number: "03", title: "個人〜法人まで対応", desc: "個人受講からチーム研修まで、ニーズに合わせた受講形式を選べます。" },
];

export default function SchoolPage() {
  return (
    <>
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden py-32 md:py-44">
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/30 text-sm hover:text-white transition-colors mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            トップへ戻る
          </Link>
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">School</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-2xl">
            <span>スクール</span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl">
            マーケティングを学びたい個人から、社内育成に取り組む企業まで。現役プロが教える実践的なカリキュラムで、即戦力スキルを習得できます。
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Curriculum</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">コース一覧</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.number}
                className="group relative p-8 bg-white border border-[#e5e5e5] rounded-2xl hover:border-[#0a0a0a] transition-all duration-300 overflow-hidden"
              >
                
                <p className="text-4xl font-bold text-[#e5e5e5] mb-4 leading-none">{f.number}</p>
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3">{f.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Why Our School</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">スクールの特徴</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {points.map((p) => (
              <div key={p.number} className="group bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <p className="text-5xl font-bold text-[#e5e5e5] mb-4 leading-none">{p.number}</p>
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3">{p.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden bg-slate-100">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-5 tracking-tight">まずは受講相談から</h2>
          <p className="text-[#737373] mb-10 leading-relaxed">目標・レベル・受講形式などをお聞きし、最適なコースをご案内します。</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-white bg-[#0a0a0a] px-8 py-4 rounded-full hover:bg-[#1a1a1a] transition-colors duration-200"
          >
            受講相談を申し込む
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
