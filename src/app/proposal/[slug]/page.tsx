import { Fragment } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "提案書 | Framework",
  robots: { index: false, follow: false },
};

const GOLD = "#C9A84C";
const GOLD_DARK = "#A8892E";

type FunnelStep = { label: string; sublabel: string; type: "front" | "back" };

type BusinessModel = {
  description: string;
  highlight: string;
  funnel: FunnelStep[];
};

type Issue = { title: string; desc: string };
type Solution = {
  number: string;
  title: string;
  subtitle: string;
  points: string[];
  highlight: string;
};
type Phase = { phase: string; period: string; title: string; tasks: string[] };

type Proposal = {
  client: string;
  date: string;
  heading: string;
  subheading: string;
  businessModel: BusinessModel;
  issues: Issue[];
  solutions: Solution[];
  schedule: Phase[];
};

// クライアントごとにランダムトークンとクライアント情報を登録
// トークン生成: node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
const proposals: Record<string, Proposal> = {
  e919798695a4968d61035b059ec8fff9: {
    client: "Tplus株式会社",
    date: "2026年4月",
    heading: "掲載数・LTV・認知を同時に伸ばす\nマーケティング支援のご提案",
    subheading:
      "HappyTryへの新規掲載獲得から、MEO・LP制作へのアップセル率向上、\n自社サービスの認知拡大まで、一気通貫でご支援します。",
    businessModel: {
      funnel: [
        { label: "HappyTry 掲載", sublabel: "店舗との接点をつくる", type: "front" },
        { label: "MEO対策", sublabel: "Googleマップ上位表示", type: "back" },
        { label: "LP制作", sublabel: "成約率の高いページ制作", type: "back" },
      ],
      description:
        "HappyTryへの掲載を入口に、集客に課題を持つ店舗へMEO対策・LP制作をアップセルするモデル。フロントエンドで接点をつくり、バックエンドでLTVを最大化する構造。",
      highlight: "「掲載数の増加」「アップセル率の向上」「自社認知の拡大」",
    },
    issues: [
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
    ],
    solutions: [
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
    ],
    schedule: [
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
    ],
  },

  e706ce9c8b71647eb449fd79cadd75ff: {
    client: "株式会社SBS",
    date: "2026年4月",
    heading: "OEM問い合わせ・実績訴求・業種開拓を\n同時に強化するマーケティング支援のご提案",
    subheading:
      "広告LPのリード獲得改善から、700件超の開発実績・600種原料の強みをコンテンツ化、\nクリニック・ジム・エステへの業種特化施策まで、一気通貫でご支援します。",
    businessModel: {
      funnel: [
        { label: "広告LP", sublabel: "OEM問い合わせの獲得", type: "front" },
        { label: "サプリ・健康食品OEM", sublabel: "企画〜製造のトータル支援", type: "back" },
        { label: "機能性表示・化粧品OEM", sublabel: "エビデンス構築・差別化開発", type: "back" },
      ],
      description:
        "広告LPを入口にOEM開発を検討する事業者と接点をつくり、サプリ・健康食品から機能性表示食品・化粧品まで幅広い開発ニーズに対応するモデル。企画から製造まで一気通貫で支援し、クライアントのロングセラー商品づくりを実現する構造。",
      highlight: "「OEM問い合わせの増加」「実績訴求力の強化」「新規業種顧客の開拓」",
    },
    issues: [
      {
        title: "広告LPからのOEM問い合わせ数・質に課題がある",
        desc: "リード獲得が広告LP一本頼りになっており、流入数や問い合わせ転換率の最適化が進んでいない。また業種・規模によって訴求すべき価値が異なるにもかかわらず、訴求が均一化されているため、本質的な検討層に刺さりにくい状態になっている。",
      },
      {
        title: "700件超の実績・600種原料の差別化強みがWeb上で伝わりきっていない",
        desc: "単品年商10億円達成・リピート率75%・日本初原料など競合と明確に差別化できる強みを持ちながら、それをコンテンツとして積み上げる設計ができておらず、比較検討フェーズで選ばれる仕組みが弱い。",
      },
      {
        title: "クリニック・ジム・エステなど業種別の顧客開拓が十分でない",
        desc: "OEM開発のニーズはチャネルを持つ事業者（クリニック・ジム・エステ・EC）によって課題が異なるが、業種特化の訴求ページやコンテンツが整備されておらず、各業種への認知獲得が広告以外に確立されていない。",
      },
    ],
    solutions: [
      {
        number: "01",
        title: "LP改善・広告最適化でOEM問い合わせを増やす",
        subtitle: "検討層に刺さる訴求設計で獲得効率を高める",
        points: [
          "成功事例（単品10億・リピート75%）を前面に出したLPの構成見直しとCVR改善",
          "業種別（クリニック・ジム・エステ・EC）のLP分岐で訴求精度を向上",
          "広告クリエイティブのA/Bテストを継続実施し、獲得単価を最適化",
          "問い合わせ後のメール・LINE自動フォローで商談化率を向上",
        ],
        highlight: "広告費あたりのOEM商談数を最大化する獲得導線を確立",
      },
      {
        number: "02",
        title: "差別化コンテンツの整備で比較検討フェーズを攻略",
        subtitle: "実績・原料力・専門性をWeb資産として積み上げる",
        points: [
          "「600種原料」「機能性表示食品」「日本初原料」などの専門性をSEOコンテンツ化",
          "開発実績700件・成功事例を読み物コンテンツとして制作し、信頼性を可視化",
          "サプリOEM完全ガイド等のホワイトペーパーでリードを獲得・育成",
          "医師・大学との連携実績を活用したエビデンスページで信頼スコアを向上",
        ],
        highlight: "指名検索・比較検討フェーズでSBSが選ばれる体制を構築",
      },
      {
        number: "03",
        title: "業種特化施策で新規顧客層を開拓",
        subtitle: "クリニック・ジム・エステ向けに専門訴求を展開する",
        points: [
          "クリニック・ジム・エステ・ペット事業者向けの業種別課題解決ページを制作",
          "各業種に特化した広告配信とリターゲティングで見込み顧客にリーチ",
          "展示会・セミナーと連動したオフライン⇔オンラインのリード獲得フローを設計",
          "SNS（Instagram・X）で各業種のターゲット層へのブランド接点を拡大",
        ],
        highlight: "特定業種からの問い合わせを安定的に創出する仕組みを確立",
      },
    ],
    schedule: [
      {
        phase: "Phase 1",
        period: "1ヶ月目",
        title: "現状把握・設計",
        tasks: [
          "LP・広告データおよびリード〜成約の数値ヒアリング",
          "業種別の顧客属性と訴求課題の整理",
          "LP改善案・コンテンツ計画・業種別施策の設計",
        ],
      },
      {
        phase: "Phase 2",
        period: "2〜3ヶ月目",
        title: "実行・立ち上げ",
        tasks: [
          "LP改善・業種別広告配信の開始",
          "SEOコンテンツ初稿・成功事例ページ・ホワイトペーパーの制作",
          "メール・LINEフォローシーケンスの構築と運用開始",
        ],
      },
      {
        phase: "Phase 3",
        period: "4ヶ月目〜",
        title: "改善・継続",
        tasks: [
          "月次レポートをもとにLP・広告をチューニング",
          "業種別流入・成約率を継続モニタリング",
          "コンテンツ追加・新業種への施策拡張",
        ],
      },
    ],
  },

  demo: {
    client: "サンプル（D2Cブランド想定）",
    date: "2026年4月",
    heading: "広告依存を脱し、LTV・ブランド・データを\n同時に強化するマーケティング支援のご提案",
    subheading:
      "CPAが高騰するMeta広告の最適化から、定期購入転換率の改善、\nブランドコンテンツの構築、データ活用基盤の整備まで、一気通貫でご支援します。",
    businessModel: {
      funnel: [
        { label: "Meta / Google広告", sublabel: "新規顧客との最初の接点", type: "front" },
        { label: "初回購入 → 定期転換", sublabel: "継続率・LTVの最大化", type: "back" },
        { label: "クロスセル・アップセル", sublabel: "顧客単価の引き上げ", type: "back" },
      ],
      description:
        "SNS広告を入口に潜在顧客と接点をつくり、LP → 初回購入 → 定期購入へと自然に誘導するD2C型のビジネスモデル。しかし現状は「広告 → 初回購入」のフロントエンド最適化に集中しており、初回購入後のリテンション設計・クロスセル設計が十分に機能していない。結果として広告費を増やしても利益率が伸びない構造になっている。",
      highlight: "「広告CPAの改善」「定期転換率の向上」「LTVの最大化」",
    },
    issues: [
      {
        title: "Meta広告のCPAが1年で約40%高騰しており、広告依存の集客構造に限界が見えている",
        desc: "主力チャネルのMeta広告はクリエイティブの疲弊・競合増加・iOS計測制限により獲得単価が継続的に上昇。月間広告費200万円に対してCPAは1万円を超えており、オーガニック流入（SEO・SNS）がほぼゼロのため、広告停止 ＝ 集客停止という脆弱な構造になっている。プラットフォームのアルゴリズム変更のたびに売上が不安定になるリスクを抱えた状態が続いている。",
      },
      {
        title: "初回購入後の定期転換率が業界平均を大きく下回り、顧客LTVが伸び悩んでいる",
        desc: "初回購入から2回目購入への転換率は約28%で、D2Cサプリ業界平均の50%前後を大幅に下回っている。定期購入プランへの転換設計・ナーチャリングメール・解約防止フローが整備されておらず、獲得した顧客の大半を1〜2回の購入で失っている。LTVが低いためCACを回収できず、スケールすればするほど利益率が悪化する構造になっている。",
      },
      {
        title: "「なぜ自社を選ぶか」の訴求が弱く、価格競争・広告量競争に晒されやすい",
        desc: "市場には類似成分・類似価格帯の競合商品が多数存在するにもかかわらず、独自成分・エビデンス・製造へのこだわりを体系的に訴求するコンテンツが不足している。顧客インタビュー・使用前後の変化・専門家監修コンテンツなどの信頼性訴求が弱く、比較検討フェーズで価格競争に引き込まれやすい状態が続いている。",
      },
      {
        title: "施策の効果が可視化されておらず、意思決定が属人的・勘頼りになっている",
        desc: "どの広告クリエイティブ・どのメール施策・どのLPが最終的な売上に貢献しているかを横断的に追跡できていない。購買データはECシステムに、広告データは各媒体管理画面に分散しており、統合されたダッシュボードが存在しない。LTVの高い顧客セグメントが特定できていないため、優良顧客へのリソース集中や類似オーディエンス活用が進んでいない。",
      },
    ],
    solutions: [
      {
        number: "01",
        title: "広告LPの抜本改善と多チャネル化",
        subtitle: "広告CPAを下げ、オーガニック流入を立ち上げる",
        points: [
          "Meta広告のクリエイティブ刷新（動画/静止画A/Bテスト継続）とターゲティング最適化でCPA40%削減を目指す",
          "Google検索広告（購入意向キーワード）へのチャネル分散でリスク低減と新規層開拓",
          "LPのファーストビュー・エビデンス訴求・CTA配置を見直し、CVRを現状の1.5倍に改善",
          "「成分名＋効果」「悩み＋解決法」キーワードを中心にSEOコンテンツを月4本制作し自然流入を確立",
          "Instagramのオーガニック運用設計（コンテンツ軸・投稿頻度・ハッシュタグ戦略）を整備",
          "月次でチャネル別CPA・ROASをレポートし、予算配分を最適化するPDCAを回す",
        ],
        highlight: "広告費あたりの獲得効率を改善し、広告停止リスクに依存しない集客構造へ移行",
      },
      {
        number: "02",
        title: "CRM・リテンション設計でLTVを最大化",
        subtitle: "初回購入後の顧客を定期購入・リピーターへ育てる仕組みをつくる",
        points: [
          "初回購入直後〜30日のウェルカムシーケンス（5通）で商品理解・継続動機を醸成",
          "定期購入への移行を促すタイミング別オファー設計（初回購入後14日・30日の2段階）",
          "解約申し出時のリテンションフロー構築（一時停止・容量変更・特別割引の提案）",
          "休眠顧客（90日以上未購入）向けウィンバックメール配信で取りこぼしを最小化",
          "購入頻度・購入額に応じたセグメント別クロスセルオファー設計",
          "LINEを活用したポイント通知・お試し情報配信でエンゲージメントを維持",
        ],
        highlight: "初回→定期転換率を28%から50%へ引き上げ、顧客LTVを1.8倍に向上",
      },
      {
        number: "03",
        title: "ブランドコンテンツ戦略で比較検討フェーズを攻略",
        subtitle: "「なぜ選ぶか」を証明するWeb資産をつくる",
        points: [
          "独自成分・製造工程・品質基準を詳細解説した「ブランドストーリーページ」を制作",
          "購入者インタビュー・使用前後の体験談を月2本制作し、リアルな変化を可視化",
          "皮膚科医・栄養士などの専門家監修コンテンツでエビデンス訴求を強化",
          "「〇〇の選び方」「成分の基礎知識」等のホワイトペーパーでリード獲得と育成を設計",
          "UGCキャンペーンで購入者の投稿を増やし、SNS上の社会的証明を積み上げる",
          "競合比較ページ・成分比較表で「選ばれる理由」を論理的に可視化",
        ],
        highlight: "ブランド指名検索数と自然流入を増やし、広告なしでも選ばれる体制を構築",
      },
      {
        number: "04",
        title: "データ基盤の整備とKPI設計",
        subtitle: "数字で意思決定できる環境を整える",
        points: [
          "GA4・広告媒体・ECシステムのデータを統合したダッシュボードを構築（Looker Studio）",
          "チャネル別CPA・LTV・定期転換率・ROAS等のKPIを週次でトラッキング",
          "RFM分析による優良顧客セグメントの特定と、その属性をMeta広告の類似オーディエンスに活用",
          "施策ごとの貢献売上を計測できるアトリビューション設計を整備",
          "月次レポートで施策別効果を可視化し、予算配分・優先順位の意思決定を高速化",
        ],
        highlight: "勘ではなくデータで施策を判断できる組織・環境をつくる",
      },
    ],
    schedule: [
      {
        phase: "Phase 1",
        period: "1ヶ月目",
        title: "現状診断・設計",
        tasks: [
          "広告・LP・EC・メールのデータ一式をヒアリング",
          "顧客セグメント・購買行動・LTV分布を分析",
          "4施策の優先順位と実行計画を策定",
          "KPI・ダッシュボード設計の確定",
        ],
      },
      {
        phase: "Phase 2",
        period: "2〜3ヶ月目",
        title: "立ち上げ・実装",
        tasks: [
          "LP改善・広告クリエイティブ刷新・Google広告の開始",
          "ウェルカムシーケンス・定期転換メールの実装",
          "ブランドコンテンツ初稿・SEO記事の公開",
          "Looker Studioダッシュボードの構築と運用開始",
        ],
      },
      {
        phase: "Phase 3",
        period: "4〜6ヶ月目",
        title: "改善・最適化",
        tasks: [
          "広告クリエイティブのA/BテストとLP改善を継続",
          "メールシーケンスの開封率・転換率をもとに最適化",
          "SEOコンテンツの蓄積とオーガニック流入をトラッキング",
          "RFM分析をもとに優良顧客向け施策を強化",
        ],
      },
      {
        phase: "Phase 4",
        period: "7ヶ月目〜",
        title: "拡張・自走化",
        tasks: [
          "新商品・新ターゲットへの施策展開",
          "社内マーケチームへのノウハウ移転・自走化支援",
          "中長期のブランド戦略の見直しと施策拡張",
        ],
      },
    ],
  },

  f1323870ff3f617f6a55daff708bda0f: {
    client: "株式会社Grow Real",
    date: "2026年4月",
    heading: "リード品質・クロスセル・ブランド認知を\n同時に強化するマーケティング支援のご提案",
    subheading:
      "広告LPのリード品質改善から、不動産×SESのクロスセル設計、\nGrow Realブランドの認知拡大まで、一気通貫でご支援します。",
    businessModel: {
      funnel: [
        { label: "広告LP", sublabel: "面談予約の獲得", type: "front" },
        { label: "不動産投資支援", sublabel: "資産形成・家賃収入", type: "back" },
        { label: "SES・独立支援", sublabel: "エンジニアのキャリア", type: "back" },
      ],
      description:
        "広告LPを入口に資産形成・キャリアに課題を持つ見込み客と接点をつくり、不動産投資支援とSES事業へ誘導するモデル。両事業のクロスセルでLTVを最大化する構造。",
      highlight: "「リード品質の向上」「クロスセル率の向上」「自社認知の拡大」",
    },
    issues: [
      {
        title: "広告LPからのリード品質にばらつきがある",
        desc: "インセンティブ（ギフト券）訴求による集客は初期接触のハードルを下げる一方、本質的な資産形成ニーズを持たない層が混在しやすく、面談後の成約率が伸び悩む要因になっている。",
      },
      {
        title: "不動産事業とSES事業の相乗効果が活かせていない",
        desc: "SES事業で接点を持つエンジニア層は収入・節税ニーズが高く、不動産投資との親和性が極めて高い。しかし両事業間のクロスセル設計が整備されておらず、LTV向上の大きな機会を逃している。",
      },
      {
        title: "Grow Realブランドの認知・信頼が広告頼りになっている",
        desc: "現状のリード獲得が広告に依存しているため、運用停止時の集客が見込めない。オウンドメディアや実績コンテンツが不足しており、検索・比較検討フェーズでの訴求力が弱い。",
      },
    ],
    solutions: [
      {
        number: "01",
        title: "LPと広告のリード品質改善",
        subtitle: "成約につながる見込み客を効率よく獲得する",
        points: [
          "インセンティブ設計の見直しと訴求軸の最適化でリード品質を向上",
          "正社員・公務員層に刺さるクリエイティブのA/Bテストを継続実施",
          "面談前のLINE・メールナーチャリングで成約意欲を高めてから商談へ",
          "フォーム離脱・面談キャンセル要因を分析し、歩留まりを改善",
        ],
        highlight: "広告費あたりの成約数を最大化する獲得導線を確立",
      },
      {
        number: "02",
        title: "不動産×SESのクロスセルファネル設計",
        subtitle: "エンジニア層への資産形成提案でLTVを引き上げる",
        points: [
          "SES事業の接触顧客へ不動産投資を提案するステップメール・トーク設計",
          "エンジニアの収入・節税ニーズと不動産投資の親和性を訴求する営業資料の制作",
          "確定申告・税務相談を入口にしたバックエンド誘導フローの構築",
          "クロスセル成約率をトラッキングし、月次でPDCAを回す",
        ],
        highlight: "1顧客あたりのLTVを最大化するセールスフローを確立",
      },
      {
        number: "03",
        title: "Grow Realブランドのオウンドメディア強化",
        subtitle: "広告に頼らず問い合わせが来るWeb資産をつくる",
        points: [
          "不動産投資・フリーランス・資産形成をテーマにしたSEOコンテンツで自然流入を獲得",
          "導入事例・実績インタビューを制作し、検討フェーズでの信頼性を強化",
          "X・InstagramでエンジニアLayer・資産形成層へのブランド接点を構築",
          "Googleビジネスプロフィールの整備と口コミ獲得施策で信頼スコアを向上",
        ],
        highlight: "広告停止後もリードが継続的に生まれる体制を構築",
      },
    ],
    schedule: [
      {
        phase: "Phase 1",
        period: "1ヶ月目",
        title: "現状把握・設計",
        tasks: [
          "LP・広告データおよびリード〜成約の数値ヒアリング",
          "不動産・SES両事業の顧客属性とクロスセル機会の整理",
          "LP改善案・クロスセルフロー・コンテンツ計画の設計",
        ],
      },
      {
        phase: "Phase 2",
        period: "2〜3ヶ月目",
        title: "実行・立ち上げ",
        tasks: [
          "LP改善・広告クリエイティブのテストと運用開始",
          "クロスセル用ステップメール・営業資料の整備",
          "SEOコンテンツ初稿・事例インタビュー制作・SNS運用開始",
        ],
      },
      {
        phase: "Phase 3",
        period: "4ヶ月目〜",
        title: "改善・継続",
        tasks: [
          "月次レポートをもとにLP・広告をチューニング",
          "クロスセル率・LTV推移を継続モニタリング",
          "SEOコンテンツの追加とブランド施策の拡張",
        ],
      },
    ],
  },
};

export default async function ProposalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proposal = proposals[slug];

  if (!proposal) notFound();

  const {
    client: clientName,
    date,
    heading,
    subheading,
    businessModel,
    issues,
    solutions,
    schedule,
  } = proposal;

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
          <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight mb-3 whitespace-pre-line">
            {heading}
          </h1>
          <p className="text-sm text-[#737373] mb-6 leading-relaxed whitespace-pre-line">
            {subheading}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#737373]">
            <span>{clientName} 御中</span>
            <span className="w-px h-4 bg-[#e5e5e5]" />
            <span>{date}</span>
            <span className="w-px h-4 bg-[#e5e5e5]" />
            <span>Framework</span>
          </div>
        </div>

        {/* ── 00 前提理解 ── */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono" style={{ color: GOLD_DARK }}>00</span>
            <h2 className="text-xl font-semibold text-[#0a0a0a]">貴社ビジネスモデルの理解</h2>
          </div>
          <div className="pl-10">
            <div className="border border-[#e5e5e5] rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-[#b0b0b0] mb-5">Sales Funnel</p>
              <div className="flex items-center gap-2 flex-wrap text-sm">
                {businessModel.funnel.map((step, i) => (
                  <Fragment key={step.label}>
                    {i > 0 && (
                      <svg className="w-5 h-5 text-[#d0d0d0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                    <div
                      className="border rounded-xl px-5 py-3 text-center"
                      style={
                        step.type === "back"
                          ? { borderColor: "rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.05)" }
                          : { borderColor: "#e5e5e5", background: "#fff" }
                      }
                    >
                      <p
                        className="text-[10px] uppercase tracking-widest mb-1"
                        style={step.type === "back" ? { color: GOLD } : { color: "#b0b0b0" }}
                      >
                        {step.type === "back" ? "Back-end" : "Front-end"}
                      </p>
                      <p className="font-semibold text-[#0a0a0a]">{step.label}</p>
                      <p className="text-xs text-[#737373] mt-0.5">{step.sublabel}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
              <p className="mt-5 text-sm text-[#737373] leading-relaxed">
                {businessModel.description}
                {" "}Frameworkは
                <span className="font-semibold text-[#0a0a0a]">{businessModel.highlight}</span>
                の3点を支援します。
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
            <div className={`grid grid-cols-1 gap-4 ${schedule.length === 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3"}`}>
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
          {slug === "demo"
            ? "© Framework — これはポートフォリオ用のサンプル提案書です。"
            : `© Framework — 本資料は${clientName}様限定の資料です。第三者への転送はご遠慮ください。`}
        </p>
      </footer>
    </div>
  );
}
