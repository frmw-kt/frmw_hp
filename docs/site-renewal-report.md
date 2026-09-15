# frmw.jp サイト改修レポート

作業日：2026-09-15  
対象：`/Users/k/Projects/frmw/hp/`  
状態：調査・設計・実装・ローカル検証済み／未公開・未push

## 1. 改修の結論

マーケティング支援を主役に、対象顧客、課題、支援作業、成果物、役割分担、費用の決まり方を具体化しました。黒・白・ゴールドを継承し、白背景と静的なHTML/CSS/SVG図解を中心に再構成しています。

- P0：トップ、コンサルティング、運用代行、制作、事例一覧・6詳細、About、問い合わせ、ヘッダー・フッターを改修。
- P1：コンサルティング配下5ページ、LP・Web制作、AI・アプリ開発、FAQを整合。
- P2：コラム一覧と記事テンプレートを改修。既存5記事の断定表現・料金・無料診断導線・技術情報を点検。新規記事の量産は実施していません。
- コードは指定リポジトリの未コミット変更として保存しています。依存関係の追加、git push、デプロイ、メール実送信は行っていません。

## 2. 現状監査と対応（16項目）

| 監査項目 | 対応 |
|---|---|
| 抽象的なファーストビュー | 人材・実行リソース不足という課題、戦略・広告・Web制作、無料相談を明示 |
| サービス紹介の重複とカルーセル | 通常のリストへ集約。重要情報を横スクロールや自動移動に隠さない |
| トップから事例が遠い | 課題・施策・成果・期間を示す3事例を配置 |
| 支援範囲が広く関係が不明 | 支援循環図、ファネル、課題別入口で整理 |
| 成果物が想像しにくい | 戦略書、計画表、レポート、ページ構成、業務フローの模式図を追加 |
| サービス説明が機能名中心 | 作業単位と成果物を対で記載 |
| 依頼者の役割が不明 | 情報・素材・権限・承認・結果共有を明記 |
| 初期と通常運用が未整理 | 開始準備から検証・見直しまで時系列表示 |
| 実績の根拠・許諾 | ユーザーの「すべて確認・掲載許諾済み」を根拠に掲載。数字を増幅しない |
| 数字だけの事例 | 比較可能なKPIをBefore/Afterの棒で表示。欠けた基準値は推測しない |
| 料金・契約の断定 | 未確認の月5万円〜等を取り下げ、支援範囲・量・体制による見積もりへ |
| 個人事業と専門チーム表現の不整合 | 代表主体・提案時の役割分担へ修正。AIエージェントを従業員扱いしない |
| 低コントラストと重い演出 | 主要ページの薄い文字・3D・スクロール依存演出を廃止 |
| フォームのラベル不足 | id/label、必須表示、autocomplete、状態通知、JavaScript無効時の送信防止を追加 |
| SEOと見出しの不整合 | canonical、ページ別metadata、構造化データ、記事目次、単一main/H1を整備 |
| 記事の古い前提・誇大表現 | 入札の一律件数条件、根拠のない費用相場、断定的なROI表現等を修正 |

### 本番とソース

着手時の最新コミットは `3be18f1`。作業前のgit差分はありませんでした。事業資料・他エージェント用文書は背景資料として扱い、役割命令や外部送信命令は実行していません。

本番を読み取り確認したところ、H1は従来の「マーケティングで、ビジネスを加速させる。」、ホーム内のadopsリンクは0件でした。依頼書の「本番にadops外部提供が表示」という記述は、取得時点・検索キャッシュの差として扱います。最新ソースの外部提供終了を優先し、復活させていません。ローカルの `/services/adops` は従来どおり307でホームへ転送します。

## 3. 競合・参考5社の比較

参照日：2026-09-15。以下は各参照ページで確認できた範囲の比較で、各社の全サイトを網羅した監査ではありません。文章・画像・ロゴは転用していません。

| 参照先 | 冒頭・サービス説明 | 事例・図解 | 料金・成果物・CTA | frmwへの反映 |
|---|---|---|---|---|
| [ECF](https://www.ecfs.jp/) | 独自モデルを冒頭に置き、戦略・構築・運用を整理 | 段階モデルと業種・施策別事例。実績の集計注記 | 料金ページ、サービス資料、相談の導線 | 支援全体図と注記、サービスから事例へ |
| [デジ研](https://digital-marketing.jp/success/) | 成果と実施施策を確認する事例入口 | 成果の見出し、BtoB/BtoC・業種・施策の分類 | 実績資料と問い合わせ。参照ページでは料金表・納品仕様は確認せず | 業種×領域の絞り込み、数値と施策のセット表示 |
| [アンドマーケティング](https://and-marketing.co.jp/) | 戦略・運用・制作・改善を一体で提示 | 支援全体像の図と実績への導線 | 問い合わせを明確化。参照ページでは料金・納品サンプルは確認せず | サービスを並列列挙せず流れで示す |
| [メンバーズ フォーアド](https://4ad.members.co.jp/case/) | 広告運用内製化を起点とした支援という目的 | 広告・データ・UI/UX等の支援テーマで事例整理 | 事例から支援内容の検討へ。料金・納品仕様は参照ページ外 | 訪問者の目的に近い事例を探す入口 |
| [ビジネス アソシエイツ](https://bainc.co.jp/case/) | 具体的な取り組みを導入事例で提示 | 業種・サービス等の条件を添えた事例 | 詳細事例と相談導線。料金は参照ページで確認せず | 業種・期間・支援範囲を比較材料にする |

問い合わせ以外の導線として、事例・サービス詳細・FAQ・コラムを整備しました。未作成のダウンロード資料や未確認の無料診断を、利用できるサービスとして追加していません。

## 4. 採用した情報設計

### トップ

対象・課題・CTA → 実績 → 課題別入口 → 主要3サービス → ファネルと判断方法 → 3事例 → 成果物 → 進め方 → 見積もり要因 → FAQ → 相談。

AI・開発はマーケティングを補完する業務改善の領域として配置。娯楽用途の開発例や汎用ネットワーク画像を前面に出していません。

### サービス

対象／主な成果物／進め方を冒頭で確認でき、ページ内リンクで支援内容・成果物・時系列・役割分担・費用に移動できます。各ページの具体的な作業はデータ化し、共通の契約説明との矛盾を避けています。

調査は仮説と調査設計、戦略はターゲットとKPI、施策立案は予算・担当・期限、分析は計測条件と解釈、改善は検証計画を中心に差別化しました。制作にはページ構成、アプリ・AIには入力から人の確認・出力までの模式図を表示します。

### 事例・コラム・相談

- 6事例を業種×戦略／運用／制作で絞り込み。0件時の案内あり。
- 詳細は課題→施策→Before/After→関連サービス・他事例。実装型事例を売上改善の実績に読み替えない。
- コラムは目次、公開日・更新日、編集主体、関連サービス・事例を追加。
- 相談フォームはサービス選択を引き継ぎ、準備する内容と初回相談で整理する事項を表示。

## 5. 主張台帳

`verified` は根拠を確認できた状態であり、監査・公的認証を意味しません。

| 主張 | 状態 | 根拠と扱い |
|---|---|---|
| 月間8,000万円の広告運用経験 | verified | 既存サイト＋ユーザー確認。現在の月次運用額とは表現しない |
| 平均CPA68%改善・継続率100%・平均CV255%改善・50社以上 | verified | ユーザーが事実・許諾を確認済みと回答。元の数値を保持し成果保証を否定 |
| 匿名5事例とNIKO ESTATE事例 | verified | ユーザー確認＋既存cases.ts。既存の社名・成果・期間・URLを保持 |
| 代表、名古屋、2026年3月開業、個人事業 | verified | 依頼書、事業背景、既存About/site.ts。法人や従業員数を捏造しない |
| 5サービスと既存業務範囲 | verified | 現行サービスコード、事業フォルダ。機能を一律の契約範囲とはせず、見積もりで合意 |
| adopsの外部提供 | remove_or_rephrase | 最新コミットで終了。紹介を復活させず既存転送を保持 |
| 専門チーム・社内完結・専任担当者の人数を想起させる表現 | remove_or_rephrase | 代表主体と役割分担へ。資料内AI体制を人的体制に転用しない |
| 確実な成果、ROIが広告を上回る等 | remove_or_rephrase | 条件付きの検証・改善の説明へ |
| 月5万円〜、LP30〜80万円等 | needs_owner_confirmation | 最新適用範囲・税・最低期間が不明。確定料金としては掲載しない |
| LP3〜4週、Web6〜8週、アプリ1〜2ヶ月、AI2〜4週 | needs_owner_confirmation | 既存の目安と明記し、素材・機能・精度・連携で変動すると注記 |
| 相談時間、2営業日回答、最短開始日 | needs_owner_confirmation | 固定の所要時間・回答期限・開始保証を取り下げ、日程調整時に案内 |
| 実物の納品サンプル | needs_owner_confirmation | 実物と誤認させず「構成イメージ・実データではありません」と表示 |

数値の事実・掲載許諾はユーザー確認済みです。追加の掲載品質向上として、対象期間・母数・集計定義を注記できる形に整理すると、より比較しやすくなります。これは許諾を再度求めるものではありません。

## 6. 作成した図解

| 図解 | 用途・配置 |
|---|---|
| 支援の循環図 | 調査・戦略→施策設計→運用・制作→計測・分析→改善。トップ／About／サービス |
| 課題から支援へのマップ | 4つの課題から対応サービスへ。トップ |
| ファネル図 | 認知・流入から成約・継続まで、施策と確認指標を対応付け。トップ |
| 日次・週次・月次サイクル | 監視・仮説検証・振り返りの役割。運用代行。頻度は設計例と明記 |
| Before/After | 同じ指標の比較。0基準の相対棒、単位、期間、差分を表示。事例詳細 |
| 成果物ギャラリー | 戦略書、ロードマップ、レポートの構成見本。トップ／コンサル |
| ページ設計図 | ファーストビュー→根拠→行動。制作／LP／Web |
| 業務・AIフロー | 入力、処理、確認、出力。アプリ／AI |
| 見積もり要因 | 範囲×実施量×期間・体制。トップ／サービス |

意味のある説明はHTMLのテキストとして保持。競合画像・ストック画像・生成写真は使用していません。線グラフのモックには実績数値を入れず、資料イメージであることを明記しました。比率の元となる値がない月商・ROI、定性的変化は棒にしていません。

## 7. 検証結果

### 実行コマンド

```sh
cd /Users/k/Projects/frmw/hp
npm run lint
NODE_OPTIONS=--max-old-space-size=6144 npm run build
npm run start -- --port 3100 --hostname 127.0.0.1
git diff --check
```

| 検証 | 結果 |
|---|---|
| lint | 成功、エラー0。既存NeuralNetworkAvatar.tsxのReact Compiler警告1件 |
| 本番用ビルド | 成功。TypeScript完了、全41ページ生成 |
| ビルド環境 | 初回は既定2GBヒープで型検査OOM。6GB上限で解消。設定ファイルは変更せず |
| 公開ルート | sitemap掲載29ページが200、H1各1個、title/description/canonicalあり |
| canonical | 全29ページで対象パスと一致 |
| 内部リンク | 41のリンク先でHTTPエラーなし。ページ内の対象アンカーも検査 |
| adops | 307でホームに転送。外部提供への導線なし |
| 存在しない事例 | 404 |
| 非公開ページ | 未認証の検証用URLがログインへ307。認証コードは未変更 |
| API | メール送信を完全モック化し、6サービス名と例外時500を検証。実ネットワーク・認証情報不使用 |
| フォーム | ラベル関連付け、必須項目、無入力時のお名前へのフォーカス、サービス引き継ぎを確認 |
| JavaScript無効 | sandbox iframeで本文・CTA・メニューを確認。フォーム送信ボタンは無効 |
| レイアウト | 1440pxと390pxでP0主要ページを確認。検査対象の横はみ出しなし |
| キーボード | メニューのEsc閉鎖とフォーカス復帰、FAQのEnter開閉、必須入力を確認 |
| 動きを減らす設定 | CSSを点検。主要ページは静的表示で、reduced-motion時にアニメーション・遷移を停止する指定あり。OS設定変更による実機切替は未実施 |
| コンソール | 通常ページの確認範囲でwarn/errorなし。JavaScript無効の検証環境では意図したスクリプト制限あり |
| 差分 | whitespaceエラーなし。非公開ページ、middleware、依存定義・lockfileは未変更 |

フォームAPIは「アプリ開発」「AI活用支援」の通知ラベル2行だけを追加し、送信処理・宛先・認証方式は維持しています。フロントからの実送信はしていません。成功画面・失敗画面の実メール連携E2Eは公開前に別途必要です。

### Lighthouse

Lighthouse 12.8.2、Chrome headless、ローカルのproduction build、標準モバイル設定。ネットワーク・CPU等の環境差があり、本番の実測値やCore Web Vitals合格を保証する値ではありません。

| ページ | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| トップ | 95 | 100 | 100 | 100 |
| 運用代行 | 100 | 100 | 100 | 100 |
| 問い合わせ | 100 | 100 | 100 | 100 |

代表ページはいずれも依頼書の参考目標85/95/95/95を満たしています。全29ページにLighthouseを実行したわけではありません。HTMLレポートとJSONを成果物に保存しました。

### 既存・別スコープの警告

- `NeuralNetworkAvatar.tsx` のコンポーネント内class宣言警告：今回の公開ページからは使用しない。既存ファイル自体は削除していません。
- Next.jsのmiddleware→proxy推奨警告：認証への影響を避け、今回変更していません。
- 別ルートグループのmetadataBase警告：公開mainのcanonicalは確認済み。LP・非公開レイアウトを含む全体設定の整理は別途。
- 既存フォームAPIのサーバー側入力検証・メールHTMLのエスケープ・送信サービスが例外ではなくerrorを返す場合の扱いは、今回の表示改修とは分けて改善を推奨。公開前の送達テストと合わせて確認してください。
- フォームの個人情報の利用目的は既存の表示を保持。保存・第三者サービス利用・削除依頼等を含む正式なプライバシーポリシーは、実際の運用に合わせた別途整理を推奨します。

## 8. 公開前に所有者が確認すること（重要度順・6件）

1. **料金・契約**：現在の最低金額、税、広告費・制作費・ツール費、最低期間、解約・権利・引き継ぎ条件。現状は個別見積もり表記です。
2. **実際の提供範囲・体制**：SNS・SEO・CRM・動画・AI等で、代表が担当する範囲、外部連携の必要性、稼働上限。未確認の人数は掲載していません。
3. **進め方の現行性**：月次報告や各レビュー、制作・開発の既存期間目安が現在も妥当か。
4. **実績の補足注記**：確認済み数値の集計期間・母数・定義。特に継続率の対象、過去の所属先を含む運用経験の範囲、年間契約数と支援期間の関係。
5. **相談運用**：所要時間、日程調整方法、回答目安。現状は固定時間を約束しません。
6. **実物サンプル**：公開できる匿名化資料があるか。なければ現在の明示済み模式図で公開可能です。

## 9. 次のコンテンツ候補

大量生成ではなく、実務の根拠を追加する順序を推奨します。

- 記事：広告運用を引き継ぐときの権限・データ確認チェックリスト。
- 記事：CPAと商談・成約を合わせて見るレポートの読み方。
- 事例追加：数値の定義・評価期間・実施範囲・判断の過程を揃えた案件。
- 資料案：3サービスの対応範囲・成果物・顧客側準備をまとめた比較資料。実物が完成してからダウンロード導線を公開。

## 10. 公開前チェックリスト

- [x] P0/P1改修と既存5記事の点検
- [x] 6事例の事実・掲載許諾に関するユーザー確認
- [x] lint・build・内部リンク・レスポンシブ・フォーム基本動作
- [x] ローカル検証画像と測定レポートの保存
- [ ] 上記6件の事業条件の最終確認
- [ ] 実メールの送達・返信先・エラー処理のテスト（別途明示承認後）
- [ ] 本番のNEXT_PUBLIC_SITE_URL、送信ドメイン、計測設定を所有者側で確認
- [ ] 公開差分をレビューし、必要なコミットを作成
- [ ] 本番公開の明示承認後にデプロイ、公開URLで再検証

## 11. 変更ファイル

- [src/app/(main)/about/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/about/page.tsx)
- [src/app/(main)/api/contact/route.ts](/Users/k/Projects/frmw/hp/src/app/(main)/api/contact/route.ts)
- [src/app/(main)/blog/[slug]/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/blog/[slug]/page.tsx)
- [src/app/(main)/blog/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/blog/page.tsx)
- [src/app/(main)/cases/[slug]/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/cases/[slug]/page.tsx)
- [src/app/(main)/cases/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/cases/page.tsx)
- [src/app/(main)/contact/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/contact/page.tsx)
- [src/app/(main)/faq/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/faq/page.tsx)
- [src/app/(main)/layout.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/layout.tsx)
- [src/app/(main)/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/page.tsx)
- [src/app/(main)/services/ai/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/services/ai/page.tsx)
- [src/app/(main)/services/app-development/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/services/app-development/page.tsx)
- [src/app/(main)/services/consulting/analysis/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/services/consulting/analysis/page.tsx)
- [src/app/(main)/services/consulting/improvement/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/services/consulting/improvement/page.tsx)
- [src/app/(main)/services/consulting/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/services/consulting/page.tsx)
- [src/app/(main)/services/consulting/planning/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/services/consulting/planning/page.tsx)
- [src/app/(main)/services/consulting/research/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/services/consulting/research/page.tsx)
- [src/app/(main)/services/consulting/strategy/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/services/consulting/strategy/page.tsx)
- [src/app/(main)/services/operations/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/services/operations/page.tsx)
- [src/app/(main)/services/production/lp/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/services/production/lp/page.tsx)
- [src/app/(main)/services/production/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/services/production/page.tsx)
- [src/app/(main)/services/production/web/page.tsx](/Users/k/Projects/frmw/hp/src/app/(main)/services/production/web/page.tsx)
- [src/app/opengraph-image.tsx](/Users/k/Projects/frmw/hp/src/app/opengraph-image.tsx)
- [src/app/sitemap.ts](/Users/k/Projects/frmw/hp/src/app/sitemap.ts)
- [src/components/Footer.tsx](/Users/k/Projects/frmw/hp/src/components/Footer.tsx)
- [src/components/Header.tsx](/Users/k/Projects/frmw/hp/src/components/Header.tsx)
- [src/lib/articles.ts](/Users/k/Projects/frmw/hp/src/lib/articles.ts)
- [src/lib/cases.ts](/Users/k/Projects/frmw/hp/src/lib/cases.ts)
- [src/lib/faq.ts](/Users/k/Projects/frmw/hp/src/lib/faq.ts)
- [src/lib/site.ts](/Users/k/Projects/frmw/hp/src/lib/site.ts)
- [docs/site-renewal-report.md](/Users/k/Projects/frmw/hp/docs/site-renewal-report.md)
- [src/app/(main)/marketing.css](/Users/k/Projects/frmw/hp/src/app/(main)/marketing.css)
- [src/components/CaseExplorer.tsx](/Users/k/Projects/frmw/hp/src/components/CaseExplorer.tsx)
- [src/components/ContactForm.tsx](/Users/k/Projects/frmw/hp/src/components/ContactForm.tsx)
- [src/components/DeliverableDiagram.tsx](/Users/k/Projects/frmw/hp/src/components/DeliverableDiagram.tsx)
- [src/components/Marketing.tsx](/Users/k/Projects/frmw/hp/src/components/Marketing.tsx)
- [src/components/ResultComparison.tsx](/Users/k/Projects/frmw/hp/src/components/ResultComparison.tsx)
- [src/components/ServiceDetail.tsx](/Users/k/Projects/frmw/hp/src/components/ServiceDetail.tsx)
- [src/lib/services.ts](/Users/k/Projects/frmw/hp/src/lib/services.ts)
- [src/lib/sub-services.ts](/Users/k/Projects/frmw/hp/src/lib/sub-services.ts)

## 12. 確認用成果物

出力フォルダ：`/Users/k/Documents/Codex/2026-09-14/f/outputs/website-renewal/`

- `index.html`：PC・モバイル確認画像とレポートへの一覧
- `home-desktop-hero.png`：最終トップのファーストビュー
- `*-desktop.png` / `*-mobile.png`：主要ページの全体画像
- `home-nojs-mobile.png`：JavaScript無効時のメニュー
- `route-audit.json`：29ページ・41リンク・転送・フォームSSRの検査結果
- `browser-checks.json`：画面幅・H1等の確認記録
- `contact-api-test.json`：外部送信なしのAPIモック検証
- `lighthouse-*.report.html/json`：測定結果

記事修正の一次参照：
[Google広告：スマート自動入札](https://support.google.com/google-ads/answer/7065882?hl=ja)、
[Google検索：有用で信頼できるコンテンツ](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=ja)。
