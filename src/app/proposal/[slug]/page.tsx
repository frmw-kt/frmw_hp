import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "提案書 | Framework",
  robots: { index: false, follow: false },
};

const GOLD = "#C9A84C";
const GOLD_DARK = "#A8892E";

// クライアントごとにランダムトークンとクライアント情報を登録
// トークン生成: node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
const proposals: Record<string, { client: string; date: string }> = {
  e919798695a4968d61035b059ec8fff9: { client: "Tplus株式会社", date: "2026年4月" },
};

const issues = [
  {
    title: "フロントエンド（HappyTry掲載）の獲得数が伸び悩んでいる",
    desc: "ポータルサイトへの店舗掲載数を増やすためのリード獲得施策が確立できておらず、営業効率・新規開拓に課題がある。",
  },
  {
    title: "フロント→バックエンドへのアップセル率が低い",
    desc: "HappyTryへ掲載した店舗に対して、MEO対策・LP制作などのバックエンド商材を提案するタイミングや訴求が最適化されておらず、LTV向上の機会を逃している。",
  },
  {
    title: "自社サービスのWeb上での認知・信頼が不足している",
    desc: "見込み店舗がHappyTryや提供サービスを検索した際に、比較検討に耐えうる情報量・訴求力のあるWeb資産が整備されていない。",
  },
];

const solutions = [
  {
    number: "01",
    title: "リード獲得支援",
    subtitle: "掲載店舗数を増やす新規開拓の仕組みをつくる",
    points: [
      "ターゲット業種・エリアを絞った広告運用（Meta・Google）で見込み店舗にリーチ",
      "HappyTry掲載のメリットを訴求するLP制作でリード獲得率を向上",
      "問い合わせ〜商談化までのメール・LINE自動フォローシーケンスを構築",
      "月次でリード数・商談数・掲載数を可視化しPDCAを回す",
    ],
    highlight: "掲載店舗数の安定的な増加を実現",
  },
  {
    number: "02",
    title: "アップセルファネル設計",
    subtitle: "掲載後の店舗をMEO・LP制作へ自然に誘導する",
    points: [
      "HappyTry掲載後の効果レポートを活用し、MEO・LP制作の必要性を数値で説明できるトーク設計",
      "掲載から30・60・90日のタイミングでバックエンド提案を行うステップメール設計",
      "「掲載＋MEO＋LP」パッケージプランの価格・訴求の最適化支援",
      "成約率向上のための営業資料・提案テンプレートの作成",
      "HP制作・集客コンサルティング・予約サイト運用代行等の新規バックエンドの構築・運用",
    ],
    highlight: "1社あたりのLTVを最大化するフローを確立",
  },
  {
    number: "03",
    title: "自社マーケティング強化",
    subtitle: "サービスの認知・信頼を高めるWeb資産を整備する",
    points: [
      "HappyTry・MEO・LP制作の実績・事例を掲載したコーポレートサイト／サービスページの改善",
      "SEO記事・MEO対策の解説コンテンツで自然流入を獲得",
      "ホワイトペーパーの導入による自然流入のCVポイントを追加",
      "導入事例インタビュー記事の制作で商談時の説得力を強化",
    ],
    highlight: "営業しなくても問い合わせが来る状態をつくる",
  },
];

const schedule = [
  {
    phase: "Phase 1",
    period: "1ヶ月目",
    title: "現状把握・設計",
    tasks: [
      "リード獲得・商談・成約データのヒアリング",
      "ターゲット業種・エリアの整理",
      "広告・LP・ステップメールの設計",
    ],
  },
  {
    phase: "Phase 2",
    period: "2〜3ヶ月目",
    title: "実行・立ち上げ",
    tasks: [
      "リード獲得LP・広告の公開・運用開始",
      "アップセル用ステップメール・営業資料の整備",
      "コーポレートサイト改善・SEOコンテンツ初稿",
    ],
  },
  {
    phase: "Phase 3",
    period: "4ヶ月目〜",
    title: "改善・継続",
    tasks: [
      "月次レポートをもとに広告・LPをチューニング",
      "アップセル率・LTV推移を継続モニタリング",
      "追加コンテンツ・施策の拡張",
    ],
  },
];


export default async function ProposalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proposal = proposals[slug];

  if (!proposal) notFound();

  const clientName = proposal.client;
  const date = proposal.date;

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* ヘッダー */}
      <header className="bg-[#0a0a0a] border-b border-white/8 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-base font-bold tracking-tight" style={{ color: GOLD }}>
            Framework
          </span>
          <span className="text-xs text-white/30 uppercase tracking-widest">Confidential</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* ── タイトルブロック ── */}
        <div className="mb-16 pb-10 border-b border-[#e5e5e5]">
          <span
            className="inline-flex items-center border rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] mb-6"
            style={{ borderColor: "rgba(201,168,76,0.3)", color: GOLD }}
          >
            Proposal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight mb-3">
            掲載数・LTV・認知を同時に伸ばす<br />
            マーケティング支援のご提案
          </h1>
          <p className="text-sm text-[#737373] mb-6 leading-relaxed">
            HappyTryへの新規掲載獲得から、MEO・LP制作へのアップセル率向上、<br className="hidden md:block" />
            自社サービスの認知拡大まで、一気通貫でご支援します。
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#737373]">
            <span>{clientName} 御中</span>
            <span className="w-px h-4 bg-[#e5e5e5]" />
            <span>{date}</span>
            <span className="w-px h-4 bg-[#e5e5e5]" />
            <span>Framework</span>
          </div>
        </div>

        {/* ── 前提理解 ── */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono" style={{ color: GOLD_DARK }}>00</span>
            <h2 className="text-xl font-semibold text-[#0a0a0a]">貴社ビジネスモデルの理解</h2>
          </div>
          <div className="pl-10">
            <div className="border border-[#e5e5e5] rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-[#b0b0b0] mb-5">Sales Funnel</p>
              <div className="flex items-center gap-2 flex-wrap text-sm">
                <div className="border border-[#e5e5e5] rounded-xl px-5 py-3 bg-white text-center">
                  <p className="text-[10px] text-[#b0b0b0] uppercase tracking-widest mb-1">Front-end</p>
                  <p className="font-semibold text-[#0a0a0a]">HappyTry 掲載</p>
                  <p className="text-xs text-[#737373] mt-0.5">店舗との接点をつくる</p>
                </div>
                <svg className="w-5 h-5 text-[#d0d0d0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="border rounded-xl px-5 py-3 text-center" style={{ borderColor: "rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.05)" }}>
                  <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: GOLD }}>Back-end</p>
                  <p className="font-semibold text-[#0a0a0a]">MEO対策</p>
                  <p className="text-xs text-[#737373] mt-0.5">Googleマップ上位表示</p>
                </div>
                <svg className="w-5 h-5 text-[#d0d0d0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="border rounded-xl px-5 py-3 text-center" style={{ borderColor: "rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.05)" }}>
                  <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: GOLD }}>Back-end</p>
                  <p className="font-semibold text-[#0a0a0a]">LP制作</p>
                  <p className="text-xs text-[#737373] mt-0.5">成約率の高いページ制作</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-[#737373] leading-relaxed">
                HappyTryへの掲載を入口に、集客に課題を持つ店舗へMEO対策・LP制作をアップセルするモデル。
                フロントエンドで接点をつくり、バックエンドでLTVを最大化する構造。
                Frameworkは<span className="font-semibold text-[#0a0a0a]">「掲載数の増加」「アップセル率の向上」「自社認知の拡大」</span>の3点を支援します。
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-[#e5e5e5] mb-14" />

        {/* ── 01 課題認識 ── */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-mono" style={{ color: GOLD_DARK }}>01</span>
            <h2 className="text-xl font-semibold text-[#0a0a0a]">現状の課題（推定）</h2>
          </div>
          <div className="pl-10 space-y-4">
            {issues.map((issue) => (
              <div key={issue.title} className="border border-[#e5e5e5] rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 w-4 h-4 shrink-0 rounded-full border-2 border-red-300 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 block" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0a0a0a] mb-1">{issue.title}</h3>
                    <p className="text-sm text-[#737373] leading-relaxed">{issue.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#e5e5e5] mb-14" />

        {/* ── 02 提案内容 ── */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-mono" style={{ color: GOLD_DARK }}>02</span>
            <h2 className="text-xl font-semibold text-[#0a0a0a]">提案内容</h2>
          </div>
          <div className="pl-10 space-y-6">
            {solutions.map((sol) => (
              <div
                key={sol.number}
                className="border border-[#e5e5e5] rounded-2xl p-8 hover:border-[#0a0a0a]/20 hover:shadow-sm transition-all duration-300"
              >
                <div className="mb-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-[#b0b0b0]">{sol.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0a0a0a]">{sol.title}</h3>
                  <p className="text-sm text-[#737373] mt-0.5">{sol.subtitle}</p>
                </div>
                <ul className="space-y-2 mb-5">
                  {sol.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-[#555]">
                      <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <div
                  className="rounded-xl px-5 py-3 text-sm font-semibold text-[#0a0a0a]"
                  style={{ background: "rgba(201,168,76,0.1)" }}
                >
                  ▶ {sol.highlight}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#e5e5e5] mb-14" />

        {/* ── 03 スケジュール ── */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-mono" style={{ color: GOLD_DARK }}>03</span>
            <h2 className="text-xl font-semibold text-[#0a0a0a]">スケジュール</h2>
          </div>
          <div className="pl-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {schedule.map((s) => (
                <div key={s.phase} className="border border-[#e5e5e5] rounded-2xl p-6">
                  <p className="text-[11px] uppercase tracking-widest mb-1" style={{ color: GOLD }}>
                    {s.phase}
                  </p>
                  <p className="text-xs text-[#b0b0b0] mb-3">{s.period}</p>
                  <p className="text-sm font-semibold text-[#0a0a0a] mb-4">{s.title}</p>
                  <ul className="space-y-2">
                    {s.tasks.map((task) => (
                      <li key={task} className="text-xs text-[#737373] flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#d0d0d0] shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-[#e5e5e5] mt-16 py-8 text-center">
        <p className="text-xs text-[#737373]">
          © Framework — 本資料は{clientName}様限定の資料です。第三者への転送はご遠慮ください。
        </p>
      </footer>
    </div>
  );
}
