import type { Metadata } from 'next';
import HeroBackground from '@/components/HeroBackground';
import StrategyVisual from '@/components/StrategyVisual';
import { Button } from '@/components/Marketing';
import styles from './preview.module.css';
export const metadata: Metadata = { title: 'トップFV デザイン比較', robots: { index: false, follow: false } };
const offers = [ ['マーケティング相談', '何度でも無料'], ['SNS運用', '完全成果報酬'], ['広告・SEO運用', '初月運用費無料'], ['LP・Web制作', '他サービス契約で0円〜'] ];
const note = '広告費は別途必要です。SNSの成果条件・報酬額・計測方法、制作0円〜の対象・範囲、広告・SEOの翌月以降の費用・契約条件は、開始前の打ち合わせで決定します。';
export default async function HeroPreview({searchParams}:{searchParams:Promise<{variant?:string}>}) {
 const {variant}=await searchParams; const v=variant==='2'?2:variant==='3'?3:1;
 return <>
 <section className={`m-hero ${styles.hero}`}><HeroBackground /><div className="m-container">
 <div className="m-hero-grid">
 <div>
 <p className="m-eyebrow">MARKETING × EXECUTION</p>
 <h1>事業の課題を、<br/><em>動く施策</em>に<br className="s-hero-break"/>変える</h1>
 {v===3 && <div className={styles.statement}><p>SNS運用は、<strong>完全成果報酬。</strong></p><p>広告・SEO運用は、<strong>初月運用費無料。</strong></p></div>}
 <p className="m-hero-intro">{v===3?<>戦略・運用・制作をつなぎ、<br/>集客から問い合わせ、その先の改善まで。</>:<>マーケティングに、手が回らない企業へ。<br/>戦略・広告運用・Web制作をつなぎ、<br/>集客から問い合わせ、その先の改善まで支援します。</>}</p>
 {v===1&&<div className={`${styles.band} ${styles.mobileBand}`}>{offers.map(([name,value])=><div key={name}><span>{name}</span><strong>{value}</strong></div>)}</div>}
 <div className={`m-actions ${v===2?styles.desktopActions:''}`}><Button>{v===1?'何度でも無料で相談する':'運用について無料で相談する'}</Button><Button href="/#services" secondary>支援内容を見る</Button></div>
 {v===3&&<p className={styles.small}>マーケティングのご相談は何度でも無料です。</p>}
 </div>
 {v===2?<div className={styles.panel}><p className={styles.label}>START WITH FRAMEWORK</p><h2>必要な支援を、<br/>始めやすい条件で。</h2><div>{offers.map(([name,value])=><div className={styles.panelRow} key={name}><span>{name}</span><strong>{value}</strong></div>)}</div><p className={styles.note}>{note}</p><div className={`m-actions ${styles.mobileActions}`}><Button>無料で相談する</Button></div></div>:<StrategyVisual/>}
 </div>
 {v===1?<><div className={`${styles.band} ${styles.desktopBand}`}>{offers.map(([name,value])=><div key={name}><span>{name}</span><strong>{value}</strong></div>)}</div><p className={styles.note}>{note}</p></>:v===3?<><div className={styles.production}><span>LP・Web制作</span><strong>他サービスとの契約で制作費0円〜</strong><span>対象・制作範囲は打ち合わせで決定</span></div><p className={styles.note}>{note}</p></>:<div className="m-hero-foot"><span>年商数千万円〜数億円規模の事業者へ</span><span>必要な領域から、一貫した支援まで</span><span>名古屋を拠点に、全国オンライン対応</span></div>}
 </div></section>
 <section className={styles.next}><p>YOUR CHALLENGES</p><h2>いま、どこで止まっていますか？</h2><p>課題がひとつに絞れなくても大丈夫です。必要な支援からご相談いただけます。</p></section>
 </>;
}
