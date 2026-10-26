'use client';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import SchoolProfile from './SchoolProfile';
import { schools } from './schools';
import s from './programming.module.css';

type Purpose = '' | 'job' | 'side' | 'skill';
type Priority = 'balanced' | 'personal' | 'classroom' | 'practice';
const purposes = [['job', '転職したい', 'IT業界・Webエンジニアへ'], ['side', '副業をしたい', '制作スキルを身につけたい'], ['skill', '仕事で活用したい', '基礎・Python・IT知識']] as const;
const traits: Record<string, { purpose: Purpose[]; priority: Priority[]; reason: string }> = {
  'programmer-college': { purpose: ['job'], priority: ['balanced'], reason: '費用を抑えてIT就職を目指す方に' },
  ninjacode: { purpose: ['side'], priority: ['balanced'], reason: '自分のペースでWeb制作・副業を学びたい方に' },
  potepan: { purpose: ['job'], priority: ['practice'], reason: '29歳以下でWeb開発への転職を目指す方に' },
  winschool: { purpose: ['skill'], priority: ['personal', 'classroom'], reason: '個別指導でPythonを学びたい方に' },
  codecamp: { purpose: ['job'], priority: ['personal'], reason: 'マンツーマンで転職に向けて学びたい方に' },
  runteq: { purpose: ['job'], priority: ['practice'], reason: 'Webアプリ制作にじっくり取り組みたい方に' },
  raretech: { purpose: ['job', 'skill'], priority: ['practice'], reason: '2年間かけてITの基礎と開発を学びたい方に' },
  'internet-academy': { purpose: ['side', 'skill'], priority: ['classroom'], reason: '通学も使ってWeb制作の基礎を学びたい方に' },
};
function track(action: string, schoolId?: string) {
  window.dispatchEvent(new CustomEvent('programming-lp:event', { detail: { action, schoolId, time: Date.now() } }));
}
const Context = createContext<{ opened: boolean; setOpened: (value: boolean) => void; candidates: string[]; setCandidates: (ids: string[]) => void } | null>(null);
function useSelection() { const value = useContext(Context); if (!value) throw new Error('SchoolExperience is required'); return value; }
export function SchoolExperience({ children }: { children: ReactNode }) {
  const [opened, setOpened] = useState(false);
  const [candidates, setCandidates] = useState<string[]>([]);
  return <Context.Provider value={{ opened, setOpened, candidates, setCandidates }}>{children}</Context.Provider>;
}
export function SchoolAction({ id, placement = 'card' }: { id: string; placement?: string }) {
  const school = schools.find(x => x.id === id)!;
  return <a className={s.cta} href={school.href} target="_blank" rel="sponsored noopener noreferrer" onClick={() => track(`outbound_${placement}`, id)}>{school.name}の相談・受講案内を見る <span>↗</span></a>;
}
export default function SchoolFinder() {
  const [purpose, setPurpose] = useState<Purpose>('');
  const [priority, setPriority] = useState<Priority>('balanced');
  const [age, setAge] = useState('unknown');
  const [showAll, setShowAll] = useState(false);
  const [searchRequest, setSearchRequest] = useState(0);
  const resultsRef = useRef<HTMLElement>(null);
  const { setCandidates, setOpened, opened } = useSelection();
  useEffect(() => {
    if (!opened || searchRequest === 0) return;
    const frame = requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
    return () => cancelAnimationFrame(frame);
  }, [opened, searchRequest]);
  const matching = schools.filter(x => (!purpose || traits[x.id].purpose.includes(purpose)) && !(age === '30plus' && x.id === 'potepan'));
  const ranked = [...matching].sort((a, b) => Number(traits[b.id].priority.includes(priority)) - Number(traits[a.id].priority.includes(priority)));
  const visible = showAll || !purpose ? (showAll ? schools.slice(0, 3) : []) : ranked.slice(0, 3);
  const candidateKey = visible.map(x => x.id).join(',');
  useEffect(() => { setCandidates(candidateKey.split(',').filter(Boolean)); }, [candidateKey, setCandidates]);
  return <>
    <section id="finder" className={s.finderSection}>
      <div className={s.sectionTitle}><span>まずは、学んだ先の目的から</span><h2>あなたは、何を実現したい？</h2></div>
      <div className={s.choiceBody}><div className={s.purposeGrid}>{purposes.map(([id, title, sub]) => <button key={id} type="button" aria-pressed={purpose === id} onClick={() => { setPurpose(id); setShowAll(false); setOpened(false); track(`purpose_${id}`); }}><span className={s.purposeIcon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{id === 'job' ? <><rect x="3" y="7" width="18" height="14" rx="3" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12c6 4 12 4 18 0M10 13h4" /></> : id === 'side' ? <><rect x="2" y="4" width="20" height="14" rx="3" /><path d="m9 8-3 3 3 3m6-6 3 3-3 3M8 22h8m-4-4v4" /></> : <><path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" /></>}</svg></span><span className={s.purposeCopy}><strong>{title}</strong><span>{sub}</span></span>{purpose === id && <span className={s.purposeIndicator} aria-hidden="true">✓</span>}</button>)}</div>
      {purpose && <div className={s.refine}><label>学び方の希望<select value={priority} onChange={e => { setPriority(e.target.value as Priority); setOpened(false); }}><option value="balanced">指定しない</option><option value="personal">個別指導を重視</option><option value="classroom">通学も使いたい</option><option value="practice">開発の実践を重視</option></select></label>{purpose === 'job' && <label>年齢の目安（任意）<select value={age} onChange={e => { setAge(e.target.value); setOpened(false); }}><option value="unknown">回答しない</option><option value="under30">29歳以下</option><option value="30plus">30歳以上</option></select></label>}<p>希望に近い学び方を優先表示します。受講資格を判定するものではありません。</p></div>}
      <button className={s.searchSchoolsButton} type="button" disabled={!purpose} onClick={() => { setShowAll(false); setOpened(true); setSearchRequest(value => value + 1); track('search_submit'); }}>この条件でスクールを探す <span aria-hidden="true">↓</span></button>
      <button className={s.textButton} onClick={() => { setPurpose(''); setShowAll(true); setOpened(true); setSearchRequest(value => value + 1); }}>まだ決まっていない・8校から候補を見る →</button>
      </div>
    </section>
    <section ref={resultsRef} id="pickups" className={s.pickups} aria-label="目的別スクール比較" hidden={!opened || visible.length === 0}><div aria-live="polite"><h2 className={s.resultTitle}>{showAll ? '8校から比較したい3校' : purpose ? 'あなたの目的で比較したい候補' : '目的を選ぶと、候補を絞れます'}</h2><p className={s.note}>{purpose && !showAll ? `該当${matching.length}校から${visible.length}校を表示。` : ''}掲載順は人気・品質の順位ではありません。</p></div>
      <div className={s.compactGrid}>{visible.map(x => <article id={x.id} className={s.compactCard} key={x.id}><p className={s.fitReason}>{traits[x.id].reason}</p><header><h3>{x.name}</h3><small>PR</small></header><p className={s.courseNote}>{x.course}</p><div className={s.candidateOverview}><figure className={s.candidateVisual}><a href={x.href} target="_blank" rel="sponsored noopener noreferrer" onClick={() => track("outbound_card_image", x.id)}><Image src={x.banner} alt={`${x.name}の広告サンプル`} width={x.bannerWidth} height={x.bannerHeight} unoptimized /></a><figcaption>{x.bannerNote}</figcaption></figure><div className={s.candidateFacts}><p className={s.difference}>{x.support}</p><dl><div><dt>受講料</dt><dd><strong>{x.price}</strong><small>{x.unit}</small></dd></div><div><dt>期間</dt><dd>{x.period}</dd></div><div><dt>形式</dt><dd>{x.format}</dd></div></dl></div></div><SchoolProfile id={x.id} name={x.name} /><div className={s.schoolFeatures}><h4>特徴・学習サポート</h4><ul>{x.points.map(point => <li key={point}>{point}</li>)}</ul><p>{x.description}</p></div><details className={s.schoolConditions}><summary>対象条件・費用の詳細を確認する <span aria-hidden="true">＋</span></summary><p>{x.caution}</p><a className={s.source} href={x.source} target="_blank" rel="noopener noreferrer">出典：{x.sourceLabel} ↗</a></details><SchoolAction id={x.id} /></article>)}</div>

    </section>

  </>;
}
export function StickyCta() {
  const [active, setActive] = useState<string>('');
  const { opened } = useSelection();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id); }, { rootMargin: '-15% 0px -55% 0px' });
    schools.forEach(x => { const el = document.getElementById(x.id); if (el) observer.observe(el); });
    const clear = new IntersectionObserver(entries => { if (entries.some(e => e.isIntersecting)) setActive(''); });
    for (const id of ['finder', 'pickups']) { const el = document.getElementById(id); if (el) clear.observe(el); }
    return () => { observer.disconnect(); clear.disconnect(); };
  }, [opened]);
  if (!opened) return null;
  return <div className={s.contextBar}><a href="#finder">条件を変更</a>{active ? <SchoolAction id={active} placement="sticky" /> : <a href="#finder">目的から候補を選ぶ ↑</a>}</div>;
}

export function AfterSelection({ children }: { children: ReactNode }) {
  const { opened } = useSelection();
  return <div className={s.revealContent} hidden={!opened}>{children}</div>;
}
export function SchoolCarousel() {
  const rail = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [edges, setEdges] = useState({ start: true, end: false });
  function updateEdges() {
    const el = rail.current;
    if (el) setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  }
  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const observer = new ResizeObserver(updateEdges);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (paused || interacting) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timer = window.setInterval(() => {
      const el = rail.current;
      if (!el || reduceMotion.matches || document.hidden) return;
      const bounds = el.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      const step = (el.firstElementChild?.getBoundingClientRect().width ?? 200) + 14;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 3) el.scrollTo({ left: 0, behavior: 'smooth' });
      else el.scrollBy({ left: step, behavior: 'smooth' });
    }, 3000);
    return () => window.clearInterval(timer);
  }, [paused, interacting]);
  function move(direction: number) {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  return <section className={s.schoolCarousel} aria-label="掲載スクールの広告画像" aria-roledescription="カルーセル" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false); }} onTouchStart={() => setPaused(true)}><div className={s.carouselHeading}><h2>掲載スクール <small>PR</small></h2><div><button type="button" aria-label={paused ? '自動送りを再開' : '自動送りを一時停止'} aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? '▶' : 'Ⅱ'}</button><button type="button" aria-label="前のスクール画像へ" aria-controls="school-image-rail" disabled={edges.start} onClick={() => move(-1)}>←</button><button type="button" aria-label="次のスクール画像へ" aria-controls="school-image-rail" disabled={edges.end} onClick={() => move(1)}>→</button></div></div><div id="school-image-rail" className={s.carouselRail} ref={rail} onScroll={updateEdges} tabIndex={0} aria-label="左右にスクロールして8校の画像を見る">{schools.map((x, index) => <figure key={x.id} className={s.carouselSlide} role="group" aria-label={`${index + 1}/8 ${x.name}`}><a href={x.href} target="_blank" rel="sponsored noopener noreferrer" onClick={() => track('outbound_carousel', x.id)}><Image src={x.banner} alt={`${x.name}の広告サンプル`} width={x.bannerWidth} height={x.bannerHeight} unoptimized /><strong>{x.name}<span aria-hidden="true"> ↗</span></strong></a><figcaption>{x.bannerNote}</figcaption></figure>)}</div><p className={s.carouselHint}>横にスワイプして8校をチェック →</p></section>;
}

export function CandidateOnly({ id, children }: { id: string; children: ReactNode }) {
  const { candidates } = useSelection();
  return candidates.includes(id) ? <>{children}</> : null;
}
