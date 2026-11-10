import Link from "next/link";
import { publicCases } from "@/lib/cases";
import { serviceOffers } from "@/lib/service-offers";
import { ProcessIcon } from "./SectionDiagrams";
import h from "./HomeSections.module.css";

/**
 * トップページの「事例」「相談の流れ」「始め方」。
 * どれもカードの格子にせず、一覧表・タイムライン・メニュー表とチケットの形で見せる。
 */

/* ---------- 2本柱（マーケティング支援／業務改善支援） ---------- */
export const pillars = [
  { no: "01", name: "マーケティング支援", goal: "売上を伸ばす", scope: ["戦略設計", "広告運用", "Web制作"], href: "#marketing-services" },
  { no: "02", name: "業務改善支援", goal: "業務を軽くする", scope: ["業務整理", "自動化", "AI活用"], href: "#business-services" },
] as const;

/** FVの見出し下：2本柱を名前で並べる */
export function HeroPillars() {
  return <nav className={h.pillars} aria-label="Frameworkの2つの支援">
    {pillars.map((p, i) => <a key={p.no} href={p.href} className={`${h.pillar} ${i ? h.pillarProcess : ""}`}>
      <span className={h.pillarNo} aria-hidden="true">{p.no}</span>
      <span className={h.pillarBody}>
        <strong>{p.name}</strong>
        <small>{p.goal}｜{p.scope.join("・")}</small>
      </span>
      <b aria-hidden="true">↓</b>
    </a>)}
  </nav>;
}

/** 最上部のタグ：2本柱ごとにまとめる */
export function PillarTags() {
  return <>{pillars.map((p, i) => <div key={p.no} className={`${h.tagGroup} ${i ? h.tagGroupProcess : ""}`}>
    <b>{p.name}</b>{p.scope.map(t => <span key={t}>#{t}</span>)}
  </div>)}</>;
}

/* ---------- 事例：目次のような一覧 ---------- */
export function CaseIndex() {
  return <div className={h.caseIndex} data-home-reveal>
    <div className={h.caseTitle}><p>CASE INDEX</p><h3>取り組みを、事例で見る。</h3></div>
    <div className={h.caseHead} aria-hidden="true"><span>NO.</span><span>業種</span><span>支援先</span><span>トピック</span></div>
    <ol>{publicCases.map((c, i) => <li key={c.slug}>
      <Link href={`/cases/${c.slug}`} className={h.caseRow}>
        <span className={h.caseNo}>{String(i + 1).padStart(2, "0")}</span>
        <span className={h.caseIndustry}>{c.industry}</span>
        <strong className={h.caseName}>{c.company}</strong>
        <span className={h.caseValue}>{c.highlight.metric && <small>{c.highlight.metric}</small>}{c.highlight.value}</span>
        <b className={h.caseArrow} aria-hidden="true">↗</b>
      </Link>
    </li>)}</ol>
    <Link href="/cases" className={h.caseAll}>すべての支援事例を見る ↗</Link>
  </div>;
}

/* ---------- 相談の流れ：線でつないだタイムライン ---------- */
const steps = [
  ["まずは、ご相談", "現状やお困りごとを伺います。資料が揃っていなくても大丈夫です。"],
  ["現状を整理し、ご提案", "目標・支援範囲・費用・進め方を整理。契約前に条件を確認します。"],
  ["施策・仕組みを実装", "必要な準備を整え、制作・実装・運用へ。役割分担を明確にします。"],
  ["測定し、改善を重ねる", "結果と考察、次に変えることを共有。改善を積み重ねます。"],
];
export function ProcessTimeline() {
  return <ol className={h.timeline} data-home-reveal>
    <i className={h.track} aria-hidden="true" />
    {steps.map(([title, text], i) => <li key={title}>
      <span className={h.node} aria-hidden="true"><ProcessIcon step={i} /></span>
      <p className={h.stepNo}>STEP {String(i + 1).padStart(2, "0")}{i === 3 && <span className={h.loop}>↻ 繰り返す</span>}</p>
      <h3>{title}</h3>
      <p className={h.stepText}>{text}</p>
    </li>)}
  </ol>;
}

/* ---------- 始め方：料金メニュー表＋業務改善のチケット ---------- */
const tags = ["TALK", "SNS", "ADS", "SEO", "WEB"];
export function OfferMenu() {
  return <>
    <div className={h.menu} data-home-reveal>
      <div className={h.menuHead}><span>MARKETING / はじめ方の条件</span><span aria-hidden="true">PRICE POLICY</span></div>
      <ul>{serviceOffers.map((offer, i) => <li key={offer.name}>
        <div className={h.menuLine}>
          <span className={h.menuTag} aria-hidden="true">{tags[i]}</span>
          <span className={h.menuName}>{offer.name}</span>
          <i className={h.leader} aria-hidden="true" />
          <strong className={h.menuPrice}>{offer.headline}</strong>
        </div>
        <p className={h.menuNote}>{offer.detail}</p>
      </li>)}</ul>
    </div>
    <div className={h.ticket} data-home-reveal>
      <div className={h.ticketMain}>
        <p className={h.ticketLabel}>業務改善×マーケティング支援のご相談</p>
        <p className={h.ticketTitle}>初回30分、無料。</p>
        <p className={h.ticketText}>まずは対象業務を一つ整理します。具体的な支援範囲・費用は、現状を伺ってご提案します。</p>
      </div>
      <div className={h.ticketStub}>
        <span aria-hidden="true">FREE</span>
        <b>30<small>分</small></b>
        <Link href="/contact?service=業務改善支援">相談する ↗</Link>
      </div>
    </div>
  </>;
}
