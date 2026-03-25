import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webサイト制作",
  description: "コーポレートサイト・サービスサイトなど、目的に応じたWebサイトを設計・制作します。",
};

const problems = [
  { label: "コーポレート", text: "サイトが古く、企業の信頼感・ブランドイメージが損なわれている" },
  { label: "サービスサイト", text: "サービスの価値が伝わらず、問い合わせや資料請求につながらない" },
  { label: "採用サイト", text: "求職者に響くコンテンツがなく、エントリー数が伸び悩んでいる" },
  { label: "EC・通販", text: "スマホ対応が不十分で、モバイルユーザーの離脱率が高い" },
  { label: "BtoB企業", text: "SEOが考慮されておらず、検索経由の流入がほとんどない" },
  { label: "リニューアル", text: "リニューアルしたいが、どこから手をつければいいか整理できていない" },
];

const features = [
  {
    number: "01",
    title: "目的・KPI設計",
    description: "「なぜこのサイトを作るのか」から設計します。問い合わせ獲得・採用強化・ブランディングなど目的に応じたKPIを明確にし、制作の方向性を定めます。",
  },
  {
    number: "02",
    title: "情報設計・UX設計",
    description: "ユーザーがサイト内で迷わないよう、サイトマップ・導線・コンテンツ構造を設計。ターゲットの行動パターンに沿ったUXを実現します。",
  },
  {
    number: "03",
    title: "SEOを考慮した構造設計",
    description: "技術的SEO（サイト構造・メタ情報・Core Web Vitals）を制作段階から組み込み、検索エンジンからの流入を最大化する設計を行います。",
  },
  {
    number: "04",
    title: "ブランドに沿ったUI設計",
    description: "企業のブランドトーン・ターゲット像に合わせたデザインを制作。信頼感・先進性・親しみやすさなど、伝えたい印象を視覚的に表現します。",
  },
  {
    number: "05",
    title: "CMS導入・運用サポート",
    description: "WordPressなどのCMSを活用し、公開後も社内で更新・運用できる体制を構築。運用マニュアルの作成や初期研修も対応します。",
  },
  {
    number: "06",
    title: "公開後の効果測定・改善",
    description: "GA4・サーチコンソールによるデータ分析を継続実施。ユーザー行動データをもとに改善提案を行い、サイトの成果を高め続けます。",
  },
];

const steps = [
  { step: "01", title: "要件定義", desc: "目的・KPI・ターゲット・予算を整理" },
  { step: "02", title: "情報設計", desc: "サイトマップ・導線・コンテンツ設計" },
  { step: "03", title: "デザイン", desc: "ワイヤー→デザイン→レビュー" },
  { step: "04", title: "実装・公開", desc: "コーディング・CMS構築・公開" },
  { step: "05", title: "運用・改善", desc: "データ分析・コンテンツ更新・SEO改善" },
];

const stats = [
  { value: "SEO対応", label: "制作段階から組み込み" },
  { value: "最短4週間", label: "スピード納品" },
  { value: "全端末対応", label: "レスポンシブデザイン" },
  { value: "公開後も", label: "継続運用サポート" },
];

export default function WebPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-32 md:py-44">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[100px] -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/services/production" className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-slate-300 transition-colors mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            制作サービスへ戻る
          </Link>
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5">Web Production</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-3xl">
            見た目だけでなく、<br />
            <span className="gradient-text">成果につながる</span><br />
            Webサイトを。
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-14">
            デザインの美しさはもちろん、SEO・UX・コンバージョンを三位一体で設計。公開後の運用・改善まで一気通貫でサポートします。
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl md:text-2xl font-black gradient-text mb-1">{s.value}</p>
                <p className="text-slate-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Problems</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
              こんな課題、抱えていませんか？
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              「サイトを作ったのに成果が出ない」多くの場合、原因は制作前の設計段階にあります。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p, i) => (
              <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="shrink-0 inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full h-fit">{p.label}</span>
                <p className="text-slate-700 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-8 bg-blue-50 border border-blue-100 rounded-3xl text-center">
            <p className="text-slate-800 text-lg font-bold mb-2">
              解決のカギは、<span className="text-blue-600">「目的→設計→制作→改善」</span>の一貫したプロセスにあります。
            </p>
            <p className="text-slate-500 text-sm">制作前の要件定義と情報設計を丁寧に行うことで、公開後に成果を出し続けるサイトが生まれます。</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              成果を生み出す<br />6つの取り組み
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.number} className="group bg-white border border-slate-200 p-7 rounded-3xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <p className="text-5xl font-black text-slate-100 mb-4 leading-none group-hover:text-blue-50 transition-colors">{f.number}</p>
                <h3 className="text-base font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">制作の流れ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl h-full hover:border-blue-100 hover:bg-white hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 text-center">
                  <p className="text-4xl font-black text-slate-100 mb-3 leading-none group-hover:text-blue-50 transition-colors">{s.step}</p>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{s.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 text-slate-300 z-10 bg-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-100 relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">Contact</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5 tracking-tight">
            Webサイト制作のご相談はお気軽に
          </h2>
          <p className="text-slate-500 mb-10 leading-relaxed">
            目的・規模・ご予算などをお聞かせください。<br />最適なプランをご提案します。初回相談は無料です。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            無料相談を申し込む
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
