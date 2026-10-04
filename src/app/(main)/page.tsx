import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import StrategyVisual from "@/components/StrategyVisual";
import {
  Button,
  Section,
  ServiceCards,
  CaseCards,
  Process,
  Deliverables,
  Pricing,
  FaqList,
  ContactCTA,
  Funnel,
  pageMeta,
} from "@/components/Marketing";
import { faqs } from "@/lib/faq";
import { hasPublicCases } from "@/lib/cases";

// 事例セクション（04）を出さない間は、以降のセクション番号を詰める
const shown = (n: number) => (hasPublicCases || n < 4 ? n : n - 1);
const no = (n: number) => String(shown(n)).padStart(2, "0");
// 白黒の交互を保つため、偶数番のセクションを .m-tint にする
const tone = (n: number) => (shown(n) % 2 === 0 ? "m-tint" : "");
export const metadata = pageMeta(
  "マーケティング支援｜戦略・広告運用・Web制作",
  "マーケティングに手が回らない企業へ。Frameworkが戦略・広告運用・Web制作をつなぎ、集客から問い合わせ、その先の改善まで支援します。",
  "/",
);
export default function HomePage() {
  return (
    <>
      <section className="m-hero">
        <HeroBackground />
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
              <div className="m-actions">
                <Button />
                <Button href="#services" secondary>
                  支援内容を見る
                </Button>
              </div>
            </div>
            <StrategyVisual />
          </div>
          <div className="m-hero-foot">
            <span>年商数千万円〜数億円規模の事業者へ</span>
            <span>必要な領域から、一貫した支援まで</span>
            <span>名古屋を拠点に、全国オンライン対応</span>
          </div>
        </div>
      </section>
      <section className="m-stats" aria-label="支援実績">
        <div className="m-container">
          <div className="m-stat-grid">
            {[
              ["8,000", "万円", "運用経験・月間広告費"],
              ["68", "%", "平均CPA改善"],
              ["100", "%", "継続率"],
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
            CPA＝1件の成果獲得にかかった費用、CV＝問い合わせ等の成果。掲載数値はこれまでの実績であり、将来の成果を保証するものではありません。{hasPublicCases && "個別の条件は事例をご覧ください。"}
          </p>
        </div>
      </section>
      <Section
        eyebrow="01 / YOUR CHALLENGES"
        title="いま、どこで止まっていますか？"
        text="課題がひとつに絞れなくても大丈夫です。必要な支援からご相談いただけます。"
      >
        <div className="m-challenges">
          {[
            ["施策を決められない", "優先順位・ターゲットを整理", "consulting"],
            [
              "広告の成果が伸びない",
              "配信と問い合わせ導線を改善",
              "operations",
            ],
            [
              "サイトが伝わらない",
              "構成・コピー・デザインを再設計",
              "production",
            ],
            ["手作業が減らない", "業務をアプリ・AIで効率化", "app-development"],
          ].map(([t, d, s], i) => (
            <Link key={s} href={"/services/" + s}>
              <span className="m-num">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </Section>
      <Section
        id="services"
        eyebrow="02 / SERVICES"
        title="戦略を描き、実行し、改善する"
        text="施策を別々に考えず、同じ目標につなげる。3つの領域で事業の前進を支えます。"
        tone="m-tint"
      >
        <ServiceCards />
        <div className="m-product-strip">
          <div>
            <p className="m-eyebrow">PRODUCT & AUTOMATION</p>
            <h3>事業を動かす仕組みも、つくる</h3>
          </div>
          <Link href="/services/app-development">アプリ開発 ↗</Link>
          <Link href="/services/ai">AI活用支援 ↗</Link>
        </div>
      </Section>
      <Section
        eyebrow="03 / OUR APPROACH"
        title="一つの数字だけで、判断しない"
        text="広告のクリックから、比較・検討、問い合わせ、成約へ。事業の流れに沿って改善点を探します。"
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
                "広告と制作を、つなげる",
                "広告の約束とサイトの内容をそろえ、流入後の比較・検討まで一緒に設計します。",
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
          eyebrow="04 / CASE STUDIES"
          title="課題と施策を、事例で見る"
          text="同じ施策でも、事業の条件で成果は変わります。取り組みの背景と合わせてご紹介します。"
          tone="m-tint"
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
      <Section
        eyebrow={`${no(7)} / PRICING`}
        title="予算と課題に合わせた支援設計"
        tone={tone(7)}
      >
        <Pricing />
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
