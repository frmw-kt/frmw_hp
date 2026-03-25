import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ランディングページ制作",
  description: "コンバージョンを最大化するLP制作。戦略設計からデザイン・コーディングまで一貫して対応します。",
};

const problems = [
  { label: "BtoB企業", text: "問い合わせフォームまで到達するユーザーが少なく、広告費が無駄になっている" },
  { label: "EC・通販", text: "商品の魅力は伝わっているはずなのに、購入率がなかなか上がらない" },
  { label: "SaaS・IT", text: "無料トライアルや資料請求のCVRを改善したいが、何を変えればいいかわからない" },
  { label: "スクール・講座", text: "認知はあるのに申込みにつながらない。LPのどこに問題があるか不明" },
  { label: "採用サイト", text: "求人票は出しているが応募が来ない。採用LPを強化したい" },
  { label: "新規事業", text: "新サービスのLPを作りたいが、ターゲットへの訴求方法から相談したい" },
];

const approaches = [
  {
    number: "01",
    title: "戦略・ターゲット設計",
    description: "誰に・何を・どう伝えるかを徹底的に整理。ペルソナ設計とジョブズ・トゥ・ビー・ダン分析で、ユーザーの心を動かすメッセージ軸を策定します。",
  },
  {
    number: "02",
    title: "コピーライティング",
    description: "ファーストビューのキャッチコピーから本文・CTAまで、コンバージョンを意識したコピーを設計。PASONAやAIDAなどのフレームワークを活用します。",
  },
  {
    number: "03",
    title: "UI/UXデザイン",
    description: "ユーザーの視線の流れ・離脱ポイントを意識したレイアウト設計。スクロールを促し、CTAへ自然に誘導するデザインを実現します。",
  },
  {
    number: "04",
    title: "コーディング・実装",
    description: "表示速度・モバイル対応・タグ設置まで一貫対応。GTM・GA4・広告タグの設定もサポートし、公開後すぐに計測を開始できます。",
  },
  {
    number: "05",
    title: "A/Bテスト・改善",
    description: "公開後もCVRデータを分析し、改善仮説を立案・実行。継続的なPDCAでコンバージョン率を引き上げます。",
  },
];

const steps = [
  { step: "01", title: "ヒアリング", desc: "目標・ターゲット・競合・予算を確認" },
  { step: "02", title: "戦略・設計", desc: "メッセージ軸・構成・コピー策定" },
  { step: "03", title: "デザイン", desc: "ワイヤー→デザイン→フィードバック" },
  { step: "04", title: "実装・公開", desc: "コーディング・タグ設定・公開" },
  { step: "05", title: "改善", desc: "データ分析・ABテスト・継続改善" },
];

const stats = [
  { value: "平均+180%", label: "CVR改善率" },
  { value: "最短2週間", label: "納品スピード" },
  { value: "100%", label: "モバイル対応" },
  { value: "公開後も", label: "継続改善サポート" },
];

export default function LpPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden py-32 md:py-44">
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/services/production" className="inline-flex items-center gap-2 text-white/30 text-sm hover:text-white transition-colors mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            制作サービスへ戻る
          </Link>
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5">Landing Page</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 max-w-3xl">
            "伝わる"から<br />
            <span>"売れる"LPへ。</span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl mb-14">
            デザインが綺麗なだけのLPでは成果は出ません。戦略・コピー・UXが三位一体となったLP制作で、コンバージョンを最大化します。
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-black gradient-text mb-1">{s.value}</p>
                <p className="text-white/50 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Problems</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
              こんな課題、抱えていませんか？
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              LP制作で成果が出ない原因の多くは、「デザインの問題」ではなく「戦略・訴求の問題」です。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p, i) => (
              <div key={i} className="flex gap-4 p-6 bg-[#fafafa] rounded-2xl border border-[#e5e5e5] hover:border-[#0a0a0a] transition-colors">
                <span className="shrink-0 inline-block bg-[#0a0a0a] text-white text-xs font-bold px-2.5 py-1 rounded-full h-fit">{p.label}</span>
                <p className="text-[#525252] text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-8 bg-[#0a0a0a] rounded-2xl text-center">
            <p className="text-white text-lg font-bold mb-2">
              これらはすべて、<span className="text-white font-bold">「戦略・構成・コピー」</span>を見直すことで解決できます。
            </p>
            <p className="text-white/50 text-sm">デザインの前に、"誰に・何を・どう伝えるか"を徹底的に設計することが成果への近道です。</p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
              成果を出すための<br />5つのアプローチ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {approaches.map((a) => (
              <div key={a.number} className="group bg-white border border-slate-200 p-7 rounded-3xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <p className="text-5xl font-bold text-[#e5e5e5] mb-4 leading-none">{a.number}</p>
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-3">{a.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">制作の流れ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="bg-[#fafafa] border border-[#e5e5e5] p-6 rounded-2xl h-full hover:border-[#0a0a0a] hover:bg-white transition-all duration-300 text-center">
                  <p className="text-4xl font-bold text-[#e5e5e5] mb-3 leading-none">{s.step}</p>
                  <h3 className="text-sm font-semibold text-[#0a0a0a] mb-1.5">{s.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 text-[#d4d4d4] z-10 bg-white">
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
      <section className="py-24 bg-[#fafafa] border-t border-[#e5e5e5]">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs text-[#737373] uppercase tracking-[0.25em] mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-5 tracking-tight">
            LP制作のご相談はお気軽に
          </h2>
          <p className="text-[#737373] mb-10 leading-relaxed">
            現在のLPの課題・目標CVR・ご予算などをお聞かせください。<br />最適なプランをご提案します。初回相談は無料です。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-white bg-[#0a0a0a] px-8 py-4 rounded-full hover:bg-[#1a1a1a] transition-colors duration-200"
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
