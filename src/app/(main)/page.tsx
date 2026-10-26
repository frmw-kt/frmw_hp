import ServiceOffers from "@/components/ServiceOffers";
import Link from "next/link";
import HomeHero3D from "@/components/HomeHero3D";
import styles from "./home-hero.module.css";
import {
  Button,
  Section,
  ServiceCards,
  CaseCards,
  Process,
  Deliverables,
  FaqList,
  ContactCTA,
  Funnel,
  pageMeta,
} from "@/components/Marketing";
import { faqs } from "@/lib/faq";
import { hasPublicCases } from "@/lib/cases";

// 削除した課題セクションと非表示の事例を除いて連番にする
const shown = (n: number) => n - 1 - (!hasPublicCases && n > 4 ? 1 : 0);
const no = (n: number) => String(shown(n)).padStart(2, "0");
// 白黒の交互を保つため、偶数番のセクションを .m-tint にする
const tone = (n: number) => (shown(n) % 2 === 0 ? "m-tint" : "");
export const metadata = pageMeta(
  "マーケティング・業務改善支援",
  "売上を伸ばす。日々の業務を軽くする。Frameworkがマーケティングと業務改善で事業の成長を支援。集計・レポート自動化は、導入前の効果試算から実装・測定まで。",
  "/",
);
export default function HomePage() {
  return (
    <>
      <section className={`m-hero ${styles.hero}`}>
        <HomeHero3D />
        <div className="m-container">
          <div className="m-hero-grid">
            <div>
              <p className="m-eyebrow">MARKETING × EXECUTION</p>
              <h1>
                事業の課題を、
                <br />
                <em>動く施策</em>に<br className="s-hero-break" />変える
              </h1>
              <p className="m-hero-intro">
                マーケティングに、手が回らない企業へ。
                <br />
                戦略・広告運用・Web制作をつなぎ、
                <br />
                集客から問い合わせ、その先の改善まで支援します。
              </p>
              <div className={`m-actions ${styles.desktopActions}`}>
                <Button>運用について無料で相談する</Button>
                <Button href="#services" secondary>
                  支援内容を見る
                </Button>
              </div>
            </div>
            <div className={styles.panel}>
              <p className={styles.label}>START WITH FRAMEWORK</p>
              <h2>必要な支援を、<br />始めやすい条件で。</h2>
              <div>
                {[
                  ["マーケティング相談", "何度でも無料"],
                  ["SNS運用", "完全成果報酬"],
                  ["広告・SEO運用", "初月運用費無料"],
                  ["LP・Web制作", "他サービス契約で0円〜"],
                ].map(([name, value]) => (
                  <div className={styles.panelRow} key={name}>
                    <span>{name}</span><strong>{value}</strong>
                  </div>
                ))}
              </div>
              <p className={styles.note}>広告費は別途必要です。SNSの成果条件・報酬額・計測方法、制作0円〜の対象・範囲、広告・SEOの翌月以降の費用・契約条件は、開始前の打ち合わせで決定します。</p>
              <div className={`m-actions ${styles.mobileActions}`}><Button>無料で相談する</Button></div>
            </div>
          </div>
          <div className="m-hero-foot">
            <span>年商数千万円〜数億円規模の事業者へ</span>
            <span>必要な領域から、一貫した支援まで</span>
            <span>名古屋を拠点に、全国オンライン対応</span>
          </div>
        </div>
      </section>
      <section className="m-stats" aria-label="マーケティング支援実績">
        <div className="m-container">
          <div className={`m-stat-grid ${styles.stats}`}>
            {[
              ["8,000", "万円", "運用経験・月間広告費"],
              ["68", "%", "平均CPA改善"],
              ["255", "%", "平均CV数改善"],
            ].map(([v, u, l]) => (
              <div key={l}>
                <p>{l}</p>
                <strong>
                  {v}
                  <small>{u}</small>
                </strong>
              </div>
            ))}
          </div>
          <p className="m-small">
            マーケティング支援の実績です。業務改善の削減実績ではありません。CPA＝1件の成果獲得にかかった費用、CV＝問い合わせ等の成果。掲載数値はこれまでの実績であり、将来の成果を保証するものではありません。{hasPublicCases && "個別の条件は事例をご覧ください。"}
          </p>
        </div>
      </section>
      <Section
        id="services"
        eyebrow={`${no(2)} / SERVICES`}
        title="売上と業務、二つの側面から支える"
        text="集客・受注の改善と、日々の作業・支出の削減。目的に合わせた入口からご相談いただけます。"
        tone={tone(2)}
      >
        <div id="marketing-services" className="bi-marketing-services">
          <h3 className="m-subheading">Marketing support</h3>
          <ServiceCards />
        </div>
        <div id="business-services" className="bi-marketing-services">
          <h3 className="m-subheading">Process Improvement</h3>
          <ServiceCards slugs={["business-improvement", "app-development", "ai"]} />
        </div>
      </Section>
      <Section
        eyebrow={`${no(3)} / OUR APPROACH`}
        title="一つの数字だけで、判断しない"
        tone={tone(3)}
        text="マーケティングは商談・成約への貢献を、業務改善は削減時間と実際の支出を分けて評価します。"
      >
        <div className="m-split">
          <Funnel />
          <div className="m-reasons">
            {[
              [
                "目標から、逆算する",
                "売上目標と現状の差を整理。問い合わせ数だけでなく、商談や成約への貢献も確認します。",
              ],
              [
                "時間と支出を、分けて測る",
                "業務改善では確認・修正の時間も含めて比較。時間が減ったことと、現金支出が減ったことを区別します。",
              ],
              [
                "次のアクションを、共有する",
                "結果と考察に、次に変えることを添えて報告。担当と優先順位が分かる状態をつくります。",
              ],
            ].map(([t, d], i) => (
              <div className="m-reason" key={t}>
                <span className="m-num">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {hasPublicCases && (
        <Section
          eyebrow={`${no(4)} / CASE STUDIES`}
          title="課題と施策を、事例で見る"
          text="同じ施策でも、事業の条件で成果は変わります。取り組みの背景と合わせてご紹介します。"
          tone={tone(4)}
        >
          <CaseCards />
          <div className="m-section-bottom">
            <Button href="/cases" secondary>
              すべての支援事例を見る
            </Button>
          </div>
        </Section>
      )}
      <Section
        eyebrow={`${no(5)} / DELIVERABLES`}
        title="何を考え、何をするかが、手元に残る"
        text="支援の中で共有する成果物の構成イメージです。実際の納品内容は、ご契約の範囲に合わせて設計します。"
        tone={tone(5)}
      >
        <Deliverables />
      </Section>
      <Section
        eyebrow={`${no(6)} / HOW WE WORK`}
        title="相談から、改善が続く状態まで"
        tone={tone(6)}
      >
        <Process />
      </Section>
      <Section eyebrow={`${no(7)} / START WITH US`} title="相談から、始めやすい支援へ" tone={tone(7)}>
        <ServiceOffers />
      </Section>
      <Section
        eyebrow={`${no(8)} / FAQ`}
        title="相談する前に、気になること"
        tone={tone(8)}
      >
        <FaqList items={faqs.slice(0, 6)} />
        <div className="m-section-bottom">
          <Link className="m-text-link" href="/faq">
            よくある質問をすべて見る →
          </Link>
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}
