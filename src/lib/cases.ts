export interface CaseResult {
  label: string;
  before: string;
  after: string;
  delta: string;
  positive: boolean;
}

export interface CaseStudy {
  slug: string;
  industry: string;
  tag: string;
  company: string;
  challenge: string;
  approach: string[];
  services: string[];
  budget: string;
  period: string;
  results: CaseResult[];
  /**
   * カード見出し。metric は value が「何の数値か」を示すラベル（例: 月間広告費）。
   * points は支援範囲・成果物のチップ。flow が true なら矢印でつなぎ、工程の流れとして見せる。
   */
  highlight: {
    metric?: string;
    value: string;
    label?: string;
    points?: string[];
    flow?: boolean;
  };
  /** Public production case — link out to the live site (anonymized cases omit this). */
  url?: string;
  /** 公開サイトのファーストビューのスクリーンショット（public/ 配下） */
  screenshot?: { src: string; width: number; height: number };
}

export const cases: CaseStudy[] = [
  {
    slug: "real-estate",
    industry: "不動産",
    tag: "不動産",
    company: "売買仲介会社（従業員30名規模）",
    challenge:
      "Meta広告を自社運用していたが問い合わせCPAが1.5万円を超え、質の低いリードが多く営業工数を圧迫。広告費300万円/月を投下しているにもかかわらず成約件数が伸び悩んでいた。",
    approach: [
      "既存顧客データをもとに類似オーディエンスを再構築",
      "クリエイティブを20パターン同時テストし、勝ちパターンを特定",
      "LP導線を成約率最重視で全面リニューアル",
      "追客メールシナリオを設計し商談化率を底上げ",
    ],
    services: ["Meta広告運用代行", "LP制作", "CRM設計"],
    budget: "300万円/月",
    period: "支援開始から3ヶ月",
    results: [
      {
        label: "問い合わせCPA",
        before: "15,200円",
        after: "4,800円",
        delta: "-68%",
        positive: true,
      },
      {
        label: "月間成約件数",
        before: "8件",
        after: "27件",
        delta: "+238%",
        positive: true,
      },
      {
        label: "商談化率",
        before: "12%",
        after: "31%",
        delta: "+19pt",
        positive: true,
      },
    ],
    highlight: { value: "-68%", label: "CPA改善" },
  },
  {
    slug: "online-school",
    industry: "スクール",
    tag: "オンラインスクール",
    company: "プログラミング・マーケティングスクール（受講生500名規模）",
    challenge:
      "競合スクールの増加により受講生獲得コスト（CPO）が急騰。広告費500万円/月を使っても月間新規受講生が伸び悩み、LTVも低下傾向。ファネル全体の再設計が急務だった。",
    approach: [
      "無料体験会の申込から受講契約までの全導線を可視化・改善",
      "Meta/Google/TikTokの媒体ミックスを最適化",
      "無料体験参加者向けのフォローアップLINE配信シナリオを構築",
      "既存受講生のアップセル・継続率改善施策を並行実施",
    ],
    services: [
      "マーケティングコンサルティング",
      "広告運用代行（Meta/Google）",
      "CRM・LINE設計",
    ],
    budget: "500万円/月",
    period: "支援開始から6ヶ月",
    results: [
      {
        label: "月間新規受講生",
        before: "22名",
        after: "78名",
        delta: "+255%",
        positive: true,
      },
      {
        label: "受講生獲得CPO",
        before: "23万円",
        after: "9.4万円",
        delta: "-59%",
        positive: true,
      },
      {
        label: "受講生継続率（3ヶ月）",
        before: "51%",
        after: "79%",
        delta: "+28pt",
        positive: true,
      },
    ],
    highlight: { value: "3.5倍", label: "受講生数" },
  },
  {
    slug: "remodeling",
    industry: "リフォーム",
    tag: "リフォーム・外壁塗装",
    company: "外壁塗装・屋根リフォーム会社（地域密着、従業員15名）",
    challenge:
      "集客をポスティングと紹介に100%依存。デジタル広告の知見がなく、どこから始めればよいか分からない状態。季節変動が大きく、閑散期の売上が読めないことも課題だった。",
    approach: [
      "Meta広告をゼロから設計・運用（初月は少額テストから開始）",
      "「外壁の劣化診断」を訴求する無料オファー型LPを制作",
      "地域・住宅所有者属性に絞ったターゲティングを精緻化",
      "問い合わせから見積もり、契約までの営業フローも整備",
    ],
    services: ["Meta広告運用代行", "LP制作", "マーケティングコンサルティング"],
    budget: "80万円/月",
    period: "支援開始から4ヶ月",
    results: [
      {
        label: "月間問い合わせ数",
        before: "3件（紹介のみ）",
        after: "48件",
        delta: "+1,500%",
        positive: true,
      },
      {
        label: "月商",
        before: "基準月比",
        after: "+310%",
        delta: "+310%",
        positive: true,
      },
      {
        label: "広告ROI",
        before: "—",
        after: "620%",
        delta: "新規達成",
        positive: true,
      },
    ],
    highlight: { value: "620%", label: "広告ROI" },
  },
  {
    slug: "tax-accountant",
    industry: "士業",
    tag: "士業",
    company: "税理士法人（スタッフ8名、相続税専門）",
    challenge:
      "顧問先からの紹介が売上の95%を占め、新規開拓に課題。デジタルへの投資経験がなく「何をすれば良いかわからない」状態。年間の新規顧問契約件数を3倍にする目標を設定。",
    approach: [
      "相続税申告・生前対策をテーマにしたSEO記事を月4本制作",
      "Googleビジネスプロフィールを最適化し地域検索での表示を強化",
      "「相続税シミュレーター」の無料ツールをLP内に実装しリード獲得",
      "メルマガシナリオで潜在客を育成し相談予約につなげる設計",
    ],
    services: [
      "SEO・コンテンツマーケティング",
      "LP制作",
      "マーケティングコンサルティング",
    ],
    budget: "50万円/月",
    period: "支援開始から8ヶ月",
    results: [
      {
        label: "自然検索流入",
        before: "月120PV",
        after: "月4,800PV",
        delta: "+3,900%",
        positive: true,
      },
      {
        label: "デジタル経由の相談",
        before: "0件/月",
        after: "22件/月",
        delta: "新規達成",
        positive: true,
      },
      {
        label: "年間新規顧問契約",
        before: "12件",
        after: "41件",
        delta: "+242%",
        positive: true,
      },
    ],
    highlight: { value: "+242%", label: "新規顧問契約" },
  },
  {
    slug: "d2c",
    industry: "EC・通販",
    tag: "EC・D2C",
    company: "サプリメント・健康食品D2Cブランド（自社EC）",
    challenge:
      "広告費1,200万円/月を投下しているが、新規獲得コストの上昇とLTVの低下が同時進行。ROAS180%と収益性が悪化し、このままでは赤字転落が目前の状態だった。",
    approach: [
      "広告アカウント全体を監査し、採算割れのキャンペーンを停止・予算を集中",
      "Meta/Google/アフィリエイトの媒体別ROASを可視化し配分を最適化",
      "定期購入移行率を上げるためのLINE・メール自動配信を設計",
      "同梱物・解約阻止フロー・アップセルシナリオを一から再構築",
    ],
    services: [
      "広告運用代行（Meta/Google）",
      "アフィリエイト管理",
      "CRM・LTV改善",
    ],
    budget: "1,200万円/月",
    period: "支援開始から5ヶ月",
    results: [
      {
        label: "ROAS",
        before: "180%",
        after: "510%",
        delta: "+330pt",
        positive: true,
      },
      {
        label: "定期継続率（3ヶ月）",
        before: "38%",
        after: "67%",
        delta: "+29pt",
        positive: true,
      },
      {
        label: "月次営業利益",
        before: "赤字",
        after: "黒字転換",
        delta: "黒字転換",
        positive: true,
      },
    ],
    highlight: { value: "510%", label: "ROAS達成" },
  },
  // TODO(仮): 課題・施策の文面は推測で書いた仮のもの。実際の内容を確認して差し替える。
  // 確定している事実は「不動産事業」「広告運用」「LP制作」「月間予算6倍・CPA 1/3・リード数18倍」のみ。
  {
    slug: "real-estate-ads",
    industry: "不動産",
    tag: "不動産",
    company: "不動産会社",
    challenge:
      "広告からの問い合わせ獲得単価が高止まりしており、広告予算を増やしても獲得数が比例して伸びない状態だった。効率を保ったまま、配信規模を拡大できる運用体制が求められていた。",
    approach: [
      "広告アカウントの構成とコンバージョン計測を見直し、リード獲得までの成果を正しく追える状態に整備",
      "広告の訴求と一貫したLPを制作し、問い合わせまでの導線を設計",
      "訴求軸ごとにクリエイティブを検証し、獲得効率の高い訴求とターゲットを特定",
      "CPAが下がった配信から段階的に予算を拡大し、効率を保ったまま月間予算を6倍まで引き上げ",
    ],
    services: ["広告運用", "LP制作"],
    budget: "非公開",
    period: "非公開",
    results: [
      {
        label: "月間広告予算",
        before: "基準（支援前）",
        after: "6倍",
        delta: "6倍",
        positive: true,
      },
      {
        label: "CPA（リード獲得単価）",
        before: "基準（支援前）",
        after: "1/3",
        delta: "1/3に低減",
        positive: true,
      },
      {
        label: "リード数",
        before: "基準（支援前）",
        after: "18倍",
        delta: "18倍",
        positive: true,
      },
    ],
    highlight: {
      metric: "リード数",
      value: "18倍",
      points: ["月間予算 6倍", "CPA 1/3"],
    },
  },
  {
    slug: "real-estate-investment",
    industry: "不動産投資",
    tag: "不動産投資",
    company: "業界最大手の不動産投資会社",
    challenge:
      "業界最大手の不動産投資会社として大規模な広告予算を投下しており、月間4,000万円以上の広告を、戦略の検討から日々の運用まで一貫して担い、成果を確認しながら動かし続ける体制が求められていた。",
    approach: [
      "マーケティングコンサルティングとして、広告施策の方針検討から支援",
      "方針に沿って、月間4,000万円以上の広告運用を実行まで担当",
      "大規模予算の配信と予算配分を継続的に管理し、成果を確認しながら改善",
    ],
    services: ["マーケティングコンサルティング", "広告運用"],
    budget: "4,000万円/月〜",
    period: "非公開",
    results: [],
    highlight: {
      metric: "月間広告費",
      value: "4,000万円〜",
      points: ["コンサルティング", "広告運用"],
      flow: true,
    },
  },
  {
    slug: "video-streaming",
    industry: "エンタメ・動画配信",
    tag: "動画配信",
    company: "業界最大手の動画配信サービス",
    challenge:
      "業界最大手の動画配信サービスとして大規模な広告予算を投下しており、月間3,000万円以上の広告を、戦略の検討から日々の運用まで一貫して担い、成果を確認しながら動かし続ける体制が求められていた。",
    approach: [
      "マーケティングコンサルティングとして、広告施策の方針検討から支援",
      "方針に沿って、月間3,000万円以上の広告運用を実行まで担当",
      "大規模予算の配信と予算配分を継続的に管理し、成果を確認しながら改善",
    ],
    services: ["マーケティングコンサルティング", "広告運用"],
    budget: "3,000万円/月〜",
    period: "非公開",
    results: [],
    highlight: {
      metric: "月間広告費",
      value: "3,000万円〜",
      points: ["コンサルティング", "広告運用"],
      flow: true,
    },
  },
  {
    slug: "nikoestate",
    industry: "不動産（注文住宅）",
    tag: "不動産",
    company: "NIKO ESTATE（株式会社LBC）",
    challenge:
      "「低年収・借入あり・頭金なしでも注文住宅を建てられる」という独自の強みを伝えるWebサイトを、ゼロから立ち上げる必要があった。住宅ローン審査に不安を抱える層は会社紹介だけでは相談に踏み切りにくく、不安を解消する情報と、自分の条件で試せる仕組みを備えたサイトが求められていた。",
    approach: [
      "ターゲットと訴求の整理から、サイト構成・デザイン・コーディング・公開まで、Webサイト全体をゼロから一貫して制作（公開ページ28）",
      "サービス・施工事例・よくある質問・会社概要・お問い合わせに加え、審査・借入・頭金をテーマにした記事コンテンツ（3カテゴリ・11記事）を制作",
      "借入可能額・返済額・借り換えの3種のシミュレーターと住宅ローン審査診断を組み込み、条件を試してから相談できる導線を設計",
      "全ページに構造化データとOGP画像を整備し、記事を追加しやすい構成で公開。公開後も運用・改善を継続",
    ],
    services: ["Webサイト制作", "UI/UXデザイン", "コンテンツ設計・SEO"],
    budget: "非公開",
    period: "2026年8月〜（制作・公開後も運用継続中）",
    results: [
      {
        label: "Webサイト",
        before: "新規立ち上げ",
        after: "全28ページを公開",
        delta: "ゼロから制作",
        positive: true,
      },
      {
        label: "コンテンツ",
        before: "新規立ち上げ",
        after: "記事・施工事例・FAQ",
        delta: "3カテゴリ・11記事",
        positive: true,
      },
      {
        label: "相談導線",
        before: "新規立ち上げ",
        after: "シミュレーター3種＋審査診断",
        delta: "条件を試して相談",
        positive: true,
      },
    ],
    highlight: {
      metric: "制作",
      value: "ブランドサイトを新規制作",
      points: ["サイト制作", "シミュレーター3種", "記事11本"],
    },
    url: "https://nikoestate.jp/",
    screenshot: {
      src: "/images/cases/nikoestate-fv.webp",
      width: 2000,
      height: 1250,
    },
  },
  {
    slug: "frmw",
    industry: "マーケティング支援（自社サイト）",
    tag: "自社サイト",
    company: "Framework（frmw.jp）",
    challenge:
      "戦略・広告運用・Web制作を一体で支援するという事業の全体像を、初めて訪れた経営者にも短時間で理解してもらう必要があった。サービスの範囲が広い分、何を頼めるのか・どう進むのかが伝わらないと、問い合わせにつながりにくい状態だった。",
    approach: [
      "事業とサービスの整理から、サイト構成・コピー・デザイン・実装・公開まで、自社サイトをゼロから一貫して制作（公開ページ25）",
      "12のサービスページに加え、支援事例・コラム・よくある質問（13問）を制作し、依頼内容と進め方を具体的に伝える構成に",
      "Canvasによるヒーローの演出、全画面メニュー、黒と白のセクションを交互に配したレイアウトで、情報量が多くても読み進めやすいデザインに",
      "全ページに構造化データ・OGP画像・サイトマップを整備し、問い合わせフォームにはメール通知を実装。公開後も改善を継続",
    ],
    services: ["Webサイト制作", "UI/UXデザイン", "コンテンツ設計・SEO"],
    budget: "自社案件",
    period: "2026年3月〜（制作・公開後も改善継続中）",
    results: [
      {
        label: "Webサイト",
        before: "新規立ち上げ",
        after: "全25ページを公開",
        delta: "ゼロから制作",
        positive: true,
      },
      {
        label: "コンテンツ",
        before: "新規立ち上げ",
        after: "サービス・事例・コラム・FAQ",
        delta: "12サービスを掲載",
        positive: true,
      },
      {
        label: "問い合わせ導線",
        before: "新規立ち上げ",
        after: "全ページから無料相談へ",
        delta: "フォーム＋通知",
        positive: true,
      },
    ],
    highlight: {
      metric: "制作",
      value: "自社サイトを新規制作",
      points: ["サイト制作", "サービス12ページ", "FAQ13問"],
    },
    url: "https://frmw.jp/",
    screenshot: {
      src: "/images/cases/frmw-fv.webp",
      width: 2000,
      height: 1250,
    },
  },
];

/**
 * サイトに掲載する事例の slug。ここに無い事例はデータを残したまま非公開になる
 * （一覧・詳細ページは404、ナビ・トップ・サービス詳細・FAQ・サイトマップからも除外）。
 * 2026-10-04: 事例整理のため一旦すべて非公開にし、制作実績（NIKO ESTATE・自社サイト）と
 * 不動産投資・動画配信のコンサルティング〜広告運用（いずれも匿名）のみ公開。
 */
const publishedSlugs: string[] = [
  "real-estate-ads",
  "real-estate-investment",
  "video-streaming",
  "nikoestate",
  "frmw",
];

export const publicCases: CaseStudy[] = cases.filter((c) =>
  publishedSlugs.includes(c.slug),
);
export const hasPublicCases = publicCases.length > 0;
export const isPublicCase = (slug: string) => publishedSlugs.includes(slug);

export function getCase(slug: string): CaseStudy | undefined {
  return publicCases.find((c) => c.slug === slug);
}

/** Short editorial summaries of the approved cases above; no additional claims. */
export const caseSummaries: Record<
  string,
  { challenge: string; approach: string }
> = {
  "real-estate": {
    challenge: "CPAが1.5万円超。問い合わせの質も低く、営業工数を圧迫。",
    approach: "顧客データ・広告訴求・LP・追客の4領域を再設計。",
  },
  "online-school": {
    challenge: "受講生の獲得コストが上昇し、新規獲得と継続率に課題。",
    approach: "体験会から契約までの導線と、広告・LINE配信を見直し。",
  },
  remodeling: {
    challenge: "ポスティングと紹介に依存し、安定した集客が難しい。",
    approach: "地域向け広告・診断型LP・問い合わせ後の営業フローを整備。",
  },
  "tax-accountant": {
    challenge: "紹介に偏った集客から、デジタル経由の新規開拓へ。",
    approach: "SEO記事・地域検索・シミュレーター・メール配信を設計。",
  },
  d2c: {
    challenge: "獲得コスト上昇とLTV低下が重なり、収益性が悪化。",
    approach: "媒体別の広告配分と、定期購入・継続の仕組みを見直し。",
  },
  // TODO(仮): 実際の課題・施策に合わせて差し替える
  "real-estate-ads": {
    challenge: "獲得単価が高く、予算を増やしても成果が比例して伸びない状態。",
    approach: "LP制作と広告運用を一体で見直し、効率を保ったまま予算を6倍に拡大。",
  },
  "real-estate-investment": {
    challenge: "業界最大手として、大規模な広告予算を安定して運用する体制が必要。",
    approach: "コンサルティングから、月間4,000万円以上の広告運用まで一貫して担当。",
  },
  "video-streaming": {
    challenge: "業界最大手として、大規模な広告予算を安定して運用する体制が必要。",
    approach: "コンサルティングから、月間3,000万円以上の広告運用まで一貫して担当。",
  },
  frmw: {
    challenge: "広い支援範囲を、初めての経営者にも短時間で伝える必要があった。",
    approach: "構成・コピー・デザイン・実装まで、自社サイトをゼロから制作。",
  },
  nikoestate: {
    challenge: "独自の強みを伝え、ローン審査に不安を持つ層の相談につなげるサイトが必要。",
    approach: "企画・デザイン・実装・記事まで、Webサイト全体をゼロから制作。",
  },
};

export function getAllCases(): CaseStudy[] {
  return publicCases;
}
