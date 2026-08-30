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
  highlight: { value: string; label: string };
  /** Public production case — link out to the live site (anonymized cases omit this). */
  url?: string;
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
      { label: "問い合わせCPA", before: "15,200円", after: "4,800円", delta: "-68%", positive: true },
      { label: "月間成約件数", before: "8件", after: "27件", delta: "+238%", positive: true },
      { label: "商談化率", before: "12%", after: "31%", delta: "+19pt", positive: true },
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
    services: ["マーケティングコンサルティング", "広告運用代行（Meta/Google）", "CRM・LINE設計"],
    budget: "500万円/月",
    period: "支援開始から6ヶ月",
    results: [
      { label: "月間新規受講生", before: "22名", after: "78名", delta: "+255%", positive: true },
      { label: "受講生獲得CPO", before: "23万円", after: "9.4万円", delta: "-59%", positive: true },
      { label: "受講生継続率（3ヶ月）", before: "51%", after: "79%", delta: "+28pt", positive: true },
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
      { label: "月間問い合わせ数", before: "3件（紹介のみ）", after: "48件", delta: "+1,500%", positive: true },
      { label: "月商", before: "基準月比", after: "+310%", delta: "+310%", positive: true },
      { label: "広告ROI", before: "—", after: "620%", delta: "新規達成", positive: true },
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
    services: ["SEO・コンテンツマーケティング", "LP制作", "マーケティングコンサルティング"],
    budget: "50万円/月",
    period: "支援開始から8ヶ月",
    results: [
      { label: "自然検索流入", before: "月120PV", after: "月4,800PV", delta: "+3,900%", positive: true },
      { label: "デジタル経由の相談", before: "0件/月", after: "22件/月", delta: "新規達成", positive: true },
      { label: "年間新規顧問契約", before: "12件", after: "41件", delta: "+242%", positive: true },
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
    services: ["広告運用代行（Meta/Google）", "アフィリエイト管理", "CRM・LTV改善"],
    budget: "1,200万円/月",
    period: "支援開始から5ヶ月",
    results: [
      { label: "ROAS", before: "180%", after: "510%", delta: "+330pt", positive: true },
      { label: "定期継続率（3ヶ月）", before: "38%", after: "67%", delta: "+29pt", positive: true },
      { label: "月次営業利益", before: "赤字", after: "黒字転換", delta: "黒字転換", positive: true },
    ],
    highlight: { value: "510%", label: "ROAS達成" },
  },
  {
    slug: "nikoestate",
    industry: "不動産（注文住宅）",
    tag: "不動産",
    company: "NIKO ESTATE（株式会社LBC）",
    challenge:
      "低年収・借入あり・頭金なしといった条件でも注文住宅を建てられることを伝えたいが、一般的な工務店サイトの構成では条件面の不安が解消できず離脱されやすい状態。会社紹介のみのサイトでは、住宅ローン審査への不安を抱える層をリードに転換できていなかった。",
    approach: [
      "借入可能額・住宅ローン返済額・借り換えの3種類のシミュレーターを実装し、その場で概算を試せる導線を追加",
      "施工事例ギャラリー・SEO記事・よくある質問を備えた情報メディア構成にフルリニューアル",
      "審査への不安を具体的な数字で解消する比較コンテンツ・診断コンテンツを設計",
      "GSAPによるスクロール演出と、フォント・配色を含むブランドの再設計",
    ],
    services: ["Webサイト制作", "コンテンツ設計・SEO", "UI/UXデザイン"],
    budget: "非公開",
    period: "制作〜運用継続中",
    results: [
      { label: "住宅ローンシミュレーター", before: "なし", after: "3種類（借入可能額・返済額・借り換え）", delta: "新規実装", positive: true },
      { label: "サイト構成", before: "会社紹介のみ", after: "事例・記事・FAQを備えた情報メディア", delta: "新規実装", positive: true },
      { label: "リード導線", before: "問い合わせフォームのみ", after: "シミュレーター経由の相談導線を追加", delta: "新規実装", positive: true },
    ],
    highlight: { value: "3種", label: "住宅ローンシミュレーターを実装" },
    url: "https://nikoestate.jp/",
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getAllCases(): CaseStudy[] {
  return cases;
}
