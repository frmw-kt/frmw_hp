import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import { faqs } from "@/lib/faq";
import { services } from "@/lib/services";
import { hasPublicCases } from "@/lib/cases";
import HomeIndex from "./HomeIndex";
import HeroVisual from "./HeroVisual";
import { ServiceDiagram, StageDiagram, ResultMetrics, WorkflowDiagram, ChatVisual } from "./SectionDiagrams";
import { CaseIndex, ProcessTimeline, OfferMenu, HeroPillars, PillarTags } from "./HomeSections";
import s from "./Home.module.css";

const homeSans = Noto_Sans_JP({ weight: ["500", "700", "900"], subsets: ["latin"], display: "swap", variable: "--font-home-sans", preload: false });

function Brand() { return <span className={s.brand}>Framework<span>.</span></span>; }
function CTA() { return <Link href="/contact" className={s.cta}><span><small>まずは、課題の整理から。</small>無料で相談する</span><b aria-hidden="true">↗</b></Link>; }
function Ticker({ text = "THINK. BUILD. IMPROVE.", orange = false }: { text?: string; orange?: boolean }) {
  return <div className={`${s.ticker} ${orange ? s.orangeTicker : ""}`} aria-hidden="true"><div>{[0, 1].map(i => <span key={i}>{Array.from({ length: 12 }, () => `${text} ✳ `).join("")}</span>)}</div></div>;
}
function Heading({ en, children }: { en: string; children: React.ReactNode }) { return <><p className={s.eyebrow}>{en}</p><h2 data-home-reveal className={s.heading}>{children}</h2></>; }
const groups = [
  { en: "MARKETING", name: "マーケティング支援", title: "売上を、伸ばす。", description: "届ける相手を見極め、集客から問い合わせ、その先の改善まで。戦略と実行をつなぎます。", slugs: ["consulting", "operations", "production"], business: false },
  { en: "PROCESS IMPROVEMENT", name: "業務改善支援", title: "業務を、軽くする。", description: "繰り返す作業を見直し、仕組みで支える。業務の整理から自動化・アプリ開発まで支援します。", slugs: ["business-improvement", "app-development", "ai"], business: true },
];
export default function Home() {
  return <div className={`${s.shell} ${homeSans.variable}`}>
    <div className={s.paper}>
      <div className={s.tags} aria-label="支援領域"><PillarTags /></div>
      <div className={s.desktopIndex}><HomeIndex /></div>
      <section id="top" className={s.hero}>
        <div className={s.heroCard}>
          <p className={s.heroLead}>＼ マーケティング支援 × 業務改善支援 ／</p>
          <h1><span>売上を<span className={s.orangeText}>伸ばす。</span></span><span>業務を<span className={s.orangeText}>軽くする。</span></span></h1>
          <p className={s.heroSub}>考える。つくる。<em>動かす。</em></p><HeroPillars />
          <HeroVisual />
        </div>
        <p className={s.heroIntro}>Frameworkは、<strong>マーケティング支援</strong>と<strong>業務改善支援</strong>の2本柱。戦略・広告・Web制作から、業務の整理・自動化まで、事業の課題を動く施策と仕組みに変えます。</p>
        <CTA />
        <p className={s.heroNote}>年商数千万円〜数億円規模の事業者へ</p>
      </section>
      <Ticker />
      <section id="about" className={`${s.section} ${s.about}`}>
        <Heading en="WHO WE ARE">Frameworkとは？</Heading>
        <div className={s.statement}><span>集客も、日々の仕事も。</span><span>考えるところから、</span><span><em>動くところ</em>まで。</span></div>
        <div className={s.aboutMark} aria-hidden="true"><span>戦略</span><b>×</b><span>実行</span></div>
        <p className={s.bodyCopy}>いいアイデアも、動かなければ変わらない。<br />だから、課題の整理だけで終わらせず、<br />施策と仕組みに落とし込むところまで。<br />事業の前進を、一緒につくります。</p>
      </section>
      <Ticker text="MARKETING × PROCESS IMPROVEMENT." orange />
      <section id="services" className={`${s.section} ${s.dark}`}>
        <Heading en="OUR SERVICES">マーケティング支援と、<br /><span>業務改善支援。</span></Heading>
        <p className={s.centerCopy}>Frameworkの支援は、この2本柱です。<br />売上をつくること。仕事を整えること。どちらも、事業を前に進める力です。</p>
        <div className={s.serviceCards}>{groups.map((g, i) => <article key={g.en} id={g.business ? "business-services" : "marketing-services"} className={`${s.serviceCard} ${g.business ? s.businessCard : ""}`}>
          <div className={s.serviceTop}><span>0{i + 1}</span><p className={s.pillarLabel}>{g.name}<small>{g.en}</small></p><b aria-hidden="true">{g.business ? "✳" : "↗"}</b></div>
          <h3>{g.title}</h3><ServiceDiagram business={g.business} /><p className={s.bodyCopy}>{g.description}</p>
          <div className={s.serviceLinks}>{g.slugs.map(slug => { const item = services.find(service => service.slug === slug); return item ? <Link key={slug} href={`/services/${slug}`}>{item.name}<span aria-hidden="true">↗</span></Link> : null; })}</div>
        </article>)}</div>
      </section>
      <section id="approach" className={s.section}>
        <Heading en="HOW WE THINK">「やって終わり」に<br />しないために。</Heading>
        <div className={s.approaches}>{[
          ["課題を整理する", "目標と現状の差を整理し、優先順位を決める。何を変えるべきか、まずは一緒に見極めます。"],
          ["施策・仕組みをつくる", "広告やWebサイト、業務フローや自動化。目的に合わせて、実際に使える形へ落とし込みます。"],
          ["結果を測り、改善する", "マーケティングは商談・成約への貢献を。業務改善は削減時間と実際の支出を分けて確認します。"],
        ].map(([title, text], i) => <article key={String(title)}><div className={s.approachNumber}><small>OUR APPROACH</small><b>0{i + 1}</b></div><h3>{title}</h3><StageDiagram stage={i} /><p className={s.bodyCopy}>{text}</p></article>)}</div>
      </section>
      <Ticker text="MAKE IT WORK. MAKE IT BETTER." />
      <section id="results" className={`${s.section} ${s.results}`}>
        <Heading en="RESULTS & OUTPUTS">変化を、<br />見える形に。</Heading>
        <div className={s.resultPanels}><div><p className={s.blockLabel}>MARKETING / マーケティング支援実績</p>
        <ResultMetrics />
        <p className={s.note}>マーケティング支援の実績です。業務改善の削減実績ではありません。CPA＝1件の成果獲得にかかった費用、CV＝問い合わせ等の成果。掲載数値は過去の実績であり、将来の成果を保証するものではありません。</p>
        </div><div><p className={s.blockLabel}>PROCESS / 業務改善の成果物イメージ</p>
        <div className={s.output}><div className={s.outputHead}><span>WORKFLOW DESIGN</span><span>構成例</span></div><h3>毎月の「手作業」を、<br />見直せる仕組みへ。</h3><WorkflowDiagram /><ol><li><b>01</b>業務の棚卸し・フロー整理</li><li><b>02</b>集計・レポートの自動化設計</li><li><b>03</b>確認手順・効果測定シート</li></ol></div>
        <p className={s.note}>成果物の構成例です。実際の納品内容は、ご契約の範囲に合わせて設計します。</p></div></div>
        {hasPublicCases && <CaseIndex />}
      </section>
      <section id="process" className={`${s.section} ${s.dark}`}>
        <Heading en="HOW WE WORK">相談から、<br />改善が続く状態まで。</Heading>
        <ProcessTimeline />
        <CTA />
      </section>
      <section id="offers" className={s.section}>
        <Heading en="START WITH US">相談から、<br />始めやすい支援へ。</Heading>
        <OfferMenu />
      </section>
      <section id="faq" className={`${s.section} ${s.faq}`}>
        <ChatVisual /><Heading en="QUESTIONS & ANSWERS">相談する前に、<br />気になること。</Heading>
        <div>{faqs.slice(0, 6).map(item => <details key={item.question}><summary><span>Q.</span>{item.question}<b aria-hidden="true">＋</b></summary><p>{item.answer}</p></details>)}</div>
        <Link href="/faq" className={s.textLink}>よくある質問をすべて見る ↗</Link>
      </section>
      <Ticker text="LET’S MOVE YOUR BUSINESS." orange />
      <section className={`${s.section} ${s.contact}`}><p className={s.eyebrow}>LET’S TALK</p><div className={s.contactConfetti} aria-hidden="true"><span>✳</span><span>↗</span><span>＋</span><span>✳</span></div><h2>売上のことも、<br />業務のことも。<br /><em>まずは相談から。</em></h2><p>まだ、課題がまとまっていなくても。<br />一緒に整理するところから始めましょう。</p><CTA /></section>
      <footer className={s.footer}><Link href="#top"><Brand /></Link><p>マーケティング支援・業務改善支援<br />名古屋を拠点に、全国オンライン対応</p><nav aria-label="フッターナビゲーション"><Link href="/about">Frameworkについて</Link><Link href="/blog">コラム</Link><Link href="/contact">お問い合わせ</Link><Link href="/privacy">プライバシーポリシー</Link></nav><small>© {new Date().getFullYear()} Framework.</small></footer>
    </div>
    <div className={s.mobileCta}><CTA /></div>
  </div>;
}
