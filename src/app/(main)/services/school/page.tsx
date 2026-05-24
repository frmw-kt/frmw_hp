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
    duration: "全8回（約2ヶ月）",
    format: "オンライン",
    description: "STP・4P・カスタマージャーニーなどの基本フレームワークをゼロから学べる入門コース。マーケティング思考を身につけます。",
    targets: ["マーケティング初心者", "営業・企画職の方", "副業・転職を検討中の方"],
  },
  {
    number: "02",
    title: "デジタルマーケティング実践",
    duration: "全12回（約3ヶ月）",
    format: "オンライン＋課題提出",
    description: "SNS運用・Web広告・SEO・メールマーケティングの実務スキルを、ハンズオン形式で習得します。実際に広告アカウントを触りながら学びます。",
    targets: ["マーケ担当者", "広告運用を始めたい方", "社内マーケ内製化を目指す企業"],
  },
  {
    number: "03",
    title: "コンテンツ・ライティング",
    duration: "全8回（約2ヶ月）",
    format: "オンライン",
    description: "成果につながるコピーライティング・SEOライティングを学ぶコース。実際の制作物を通じてスキルを磨きます。添削フィードバック付き。",
    targets: ["ライター志望の方", "集客コンテンツを自社で作りたい方", "SNS発信力を高めたい方"],
  },
  {
    number: "04",
    title: "企業向け研修プログラム",
    duration: "カスタム設計",
    format: "オンライン・対面どちらも対応",
    description: "チーム単位・全社研修に対応したカスタムプログラム。事業の課題や目標に合わせたオリジナルカリキュラムを設計します。人数・期間・内容は柔軟に相談可能です。",
    targets: ["マーケ部門の底上げを図りたい企業", "新入社員・若手育成", "デジタルシフトを推進したい経営層"],
  },
];

const points = [
  { number: "01", title: "現役プロが講師", desc: "実際に月間8,000万円の広告運用・マーケティング支援に携わる現役メンバーが直接指導。教科書ではなく、現場のリアルを学べます。" },
  { number: "02", title: "実践重視のカリキュラム", desc: "インプットだけでなく、課題・フィードバックを通じた実践学習で定着させます。「やってみて分かる」体験を積み重ねます。" },
  { number: "03", title: "個人〜法人まで対応", desc: "個人受講からチーム研修まで、ニーズに合わせた受講形式を選べます。法人の場合は請求書払い・オーダーメイドカリキュラムにも対応します。" },
  { number: "04", title: "受講後もサポート", desc: "受講終了後も、卒業生コミュニティへの参加・質問対応（3ヶ月間）・転職・副業相談など継続的なサポートを提供します。" },
];

const learningOutcomes = [
  "広告アカウントの設計・運用・改善ができるようになる",
  "KPI設計からPDCAを自走できるデータ分析力が身につく",
  "SNSコンテンツの企画・制作・分析ができるようになる",
  "SEOを意識したライティング・コンテンツ制作ができる",
  "マーケティング戦略を社内で立案・提案できるようになる",
  "外部の代理店・制作会社をディレクションする力が身につく",
];

const faqs = [
  { q: "マーケティング未経験でも受講できますか？", a: "はい。基礎講座はゼロからスタートする前提で設計されています。PCの基本操作ができれば問題ありません。" },
  { q: "受講はオンラインのみですか？", a: "基本はオンライン（Zoom）での開催です。企業研修の場合は対面での実施にも対応しています。" },
  { q: "受講中に質問はできますか？", a: "はい。各回終了後のQ&Aタイムに加え、Slackでのテキスト質問も可能です（平日回答）。" },
  { q: "企業研修として複数名で申し込めますか？", a: "可能です。5名以上から法人プランをご用意しており、カリキュラムのカスタマイズにも対応します。" },
  { q: "受講料の支払い方法は？", a: "クレジットカード・銀行振込に対応しています。法人の場合は請求書払いも可能です。分割払いについてはご相談ください。" },
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
            マーケティングを学びたい個人から、社内育成に取り組む企業まで。月間8,000万円超の広告を動かす現役プロが直接教える実践的カリキュラムで、即戦力スキルを習得できます。
          </p>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Outcomes</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">受講後にできるようになること</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningOutcomes.map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-6 bg-[#fafafa] border border-[#e5e5e5] rounded-2xl">
                <svg className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#C9A84C" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-[#0a0a0a] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
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
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-2">{f.title}</h3>
                <div className="flex gap-3 mb-4">
                  <span className="text-xs px-3 py-1 bg-[#fafafa] border border-[#e5e5e5] rounded-full text-[#737373]">{f.duration}</span>
                  <span className="text-xs px-3 py-1 bg-[#fafafa] border border-[#e5e5e5] rounded-full text-[#737373]">{f.format}</span>
                </div>
                <p className="text-sm text-[#737373] leading-relaxed mb-4">{f.description}</p>
                <div className="border-t border-[#e5e5e5] pt-4">
                  <p className="text-xs text-[#737373] uppercase tracking-wider mb-2">こんな方に</p>
                  <div className="flex flex-wrap gap-2">
                    {f.targets.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full text-[#0a0a0a]" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Why Our School</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">スクールの特徴</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {points.map((p) => (
              <div key={p.number} className="group bg-[#fafafa] border border-[#e5e5e5] p-8 rounded-2xl hover:border-[#0a0a0a]/20 hover:bg-white hover:shadow-sm transition-all duration-300">
                <p className="text-xs font-mono text-[#A8892E] mb-4">{p.number}</p>
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3">{p.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">よくある質問</h2>
          </div>
          <div className="divide-y divide-[#e5e5e5]">
            {faqs.map((faq, i) => (
              <div key={i} className="py-7">
                <p className="text-base font-semibold text-[#0a0a0a] mb-3">Q. {faq.q}</p>
                <p className="text-sm text-[#737373] leading-relaxed pl-4 border-l-2 border-[#C9A84C]">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden bg-slate-100">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-5 tracking-tight">まずは受講相談から</h2>
          <p className="text-[#737373] mb-10 leading-relaxed">目標・レベル・受講形式などをお聞きし、最適なコースをご案内します。初回相談は無料です。</p>
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
