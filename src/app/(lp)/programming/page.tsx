import type { Metadata } from 'next';
import SchoolFinder, { SchoolExperience, StickyCta, AfterSelection, SchoolCarousel, CandidateOnly } from './SchoolFinder';
import { schools } from './schools';
import s from './programming.module.css';
export const metadata: Metadata = {
  title: 'プログラミングスクール8校を比較｜料金・就職・副業のサポート | frmw',
  description: 'CodeCamp・RUNTEQ・RareTECH・インターネット・アカデミーなど8校を料金、学習期間、サポートで比較。目的に合うスクール選びをお手伝いします。',
  robots: { index:false, follow:false }, alternates: { canonical:'https://programming.frmw.jp/' },
};
const faq = [
  ['未経験からでも学べますか？','掲載校は基礎から学べるカリキュラムを案内しています。必要な学習時間や受講条件は異なるため、現在のPC経験・職歴・希望する仕事を無料相談で伝えましょう。'],
  ['無料スクールと有料スクールは、何が違いますか？','費用に加えて、対象年齢・職歴、紹介される求人、就職活動の条件が異なります。無料という理由だけで決めず、希望する働き方につながるかを確認してください。'],
  ['仕事を続けながら受講できますか？','週に必要な学習時間、質問への回答時間、面談の時間帯を確認しましょう。平日と休日に確保できる時間を伝えると、無理のない計画を相談しやすくなります。'],
  ['広告にある給付金・還元は誰でも使えますか？','対象となるプランや受講者の条件があります。このページの比較表は給付金・還元を差し引く前の料金です。申し込み前に対象条件と受取時期を確認してください。'],
  ['無料相談で入会を決める必要はありますか？','相談の場で必ず入会を決める必要はありません。料金・カリキュラム・サポートの説明を聞き、比較したうえで判断しましょう。予約とキャンセルの条件は各校で確認してください。'],
];
export default function ProgrammingPage(){return <SchoolExperience><div className={s.page} id="top">
  <a className={s.skip} href="#main">本文へ移動</a>
  <header className={s.header}><div><a className={s.brand} href="#top"><span>未経験からの学びとキャリアを考える</span><strong>プログラミング<span>スクール比較</span></strong><small>by frmw</small></a><AfterSelection><nav aria-label="メインメニュー"><a href="#pickups">候補のスクールを見る</a><a href="#guide">スクールの選び方</a><a href="#faq">よくある質問</a></nav></AfterSelection></div></header>
  <div className={s.layout}>
    <main id="main" className={s.main}>
      <div className={s.articleHead}><p className={s.adDisclosure}>PR｜本ページは広告を掲載しています</p><h1>プログラミングスクール8校比較<br/>料金・サポート・対象条件で選ぶ</h1><p>情報確認日：2026年10月25日</p></div>
      <section className={s.hero} aria-label="プログラミングスクール比較ガイド"><div className={s.heroRibbon}>就職・転職 ／ 副業 ／ Web開発</div><p>未経験からのスクール選び</p><h2>あなたの目的に合う<br/><strong>プログラミングスクール</strong>を<br className={s.mobileBreak}/>見つけよう</h2><div className={s.heroBottom}>料金・学習内容・サポートをまとめて比較<br/><span><span className={s.yellow}>目的を選んで</span>、候補を比較！</span></div><div className={s.heroBadges}><span>オンラインで学べる</span><span>無料相談から検討</span><span>対象条件も確認</span></div></section>
      <SchoolCarousel />
      <SchoolFinder />
      <AfterSelection>
      <section className={s.section} id="guide"><div className={s.sectionTitle}><span>納得して選ぶためのチェックリスト</span><h2>スクール選びで確認したい3つのこと</h2></div><div className={s.sectionContent}>{[['学習の目的を明確にする','就職・転職、副業、Web開発など、学んだ先に何をしたいかを整理しましょう。希望する職種や働き方と、学べる内容が合っているかが大切です。'],['総額と学習時間を確認する','受講料に加えて、入会金・教材費・分割手数料も確認。平日と休日に確保できる時間を伝えて、学習計画を相談しましょう。'],['無料相談で条件を比べる','対象年齢・職歴、質問への対応、紹介求人の勤務地などを確認。気になるスクールの説明を聞いて、納得できる選択をしましょう。']].map(([t,d],i)=><article className={s.step} key={t}><span>STEP<strong>0{i+1}</strong></span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>
      <section className={s.section} id="faq"><div className={s.sectionTitle}><span>受講前の疑問を解消</span><h2>よくある質問</h2></div><div className={s.sectionContent}>{faq.map(([q,a])=><details className={s.faq} key={q}><summary><span>Q</span>{q}<b>＋</b></summary><p><strong>A</strong>{a}</p></details>)}</div></section>
      </AfterSelection>
    </main>
    <AfterSelection><aside className={s.sidebar}><div className={s.sideInner}><h2>スクール選びガイド</h2><nav aria-label="サイドメニュー"><a href="#finder">目的からスクールを探す <span>›</span></a><a href="#pickups">候補のスクールを見る <span>›</span></a><a href="#guide">選び方のポイント <span>›</span></a><a href="#faq">よくある質問 <span>›</span></a></nav><h3>掲載スクール <small>PR</small></h3>{schools.map(x=><CandidateOnly key={x.id} id={x.id}><a className={s.sideSchool} href={`#${x.id}`} key={x.id}><span><small>{x.tag}</small><strong>{x.name}</strong><b>詳しく見る ›</b></span></a></CandidateOnly>)}<div className={s.sideNote}><strong>比較のポイント</strong><p>受講料だけでなく、対象条件・学習時間・卒業後のサポートを確認しましょう。</p></div></div></aside></AfterSelection>
  </div>
  <footer className={s.footer}><strong>プログラミングスクール比較 <span>by frmw</span></strong><div><a href="https://frmw.jp/about">運営者情報</a><a href="https://frmw.jp/privacy">プライバシーポリシー</a><a href="https://frmw.jp/contact">お問い合わせ</a></div><p>本サイトはfrmwが運営する比較メディアです。各スクールの公式サイトではありません。掲載情報は公式サイトおよび広告主の案内をもとに編集しています。最新の料金・募集状況・契約条件は各公式サイトをご確認ください。</p><small>© 2026 frmw</small></footer>
  <StickyCta />
</div></SchoolExperience>;}
