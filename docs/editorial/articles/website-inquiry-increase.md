# ホームページの問い合わせを増やす方法：導線とフォームの改善手順（website-inquiry-increase）
- 準拠したガイドの版：v4（2026-10-06 に v3 から差分修正。review-rubric v3）

## 企画
- 主検索語／関連する検索語：ホームページ 問い合わせ 増やす／ホームページ 問い合わせ 来ない、問い合わせ率 上げる、CVR改善 方法、問い合わせフォーム 改善
- 表記ゆれ・言い換え（読者が実際に使う呼び方。表の語はすべて反映先か入れない理由を書く）。`keywords.variants` は 問い合わせが来ない・問い合わせ率・CVR改善・LPO・サイト改善

| 呼び方 | 種類（公式/一般/旧称/略称） | 反映先（title/description/h2/本文） | 入れない理由 |
|---|---|---|---|
| ホームページ 問い合わせ 増やす | 一般（主検索語） | title/description/本文（冒頭・まとめ） | — |
| ホームページ 問い合わせ 来ない | 一般（検索語） | description/本文（冒頭・まとめ） | — |
| 問い合わせが来ない | 一般 | description/本文 | — |
| 問い合わせ率 | 一般 | description/h2/本文 | — |
| CVR | 略称（コンバージョン率） | 本文（H2-1の初出に説明） | — |
| コンバージョン率 | 一般 | 本文（H2-1） | — |
| CVR改善 | 一般 | 本文（H2-1） | — |
| LPO | 略称（ランディングページ最適化） | 本文（H2-1の初出に説明） | — |
| サイト改善 | 一般 | 本文（まとめ） | — |
| EFO | 略称（入力フォーム最適化） | 本文（手順4の初出に説明） | — |
| 問い合わせフォーム 改善 | 一般（検索語） | h2（手順4「フォームを点検する」）/本文 | — |
| キーイベント | 公式（GA4。Google 広告では「コンバージョン」） | 本文（手順1） | — |
| MEO | 略称（地図検索の対策） | 本文（H2-1の初出に説明） | — |

- 主検索語の問いへの直接の答え（冒頭で答える一文）：ホームページの問い合わせを増やすには、訪問する人を増やす（流入）ことと、訪問した人のうち問い合わせる人の割合（問い合わせ率）を上げることを分けて点検し、足りないほうから手を付ける。アクセスはあるのに問い合わせが来ない場合は、計測の確認→離脱ページ→導線→フォーム→信頼の材料の順に直す
- 読者・状況・解決したい疑問：年商数千万〜数億円規模の事業者の経営者・担当者で、ホームページはあるが問い合わせが少ない／来ない。「何から直せばよいか」「アクセスを増やすべきかページを直すべきか」
- 記事が伝える結論：問い合わせ数＝訪問数×問い合わせ率。自社の数値（GA4・Search Console・実際の受信件数）で足りないほうを特定し、問い合わせ率の側は計測→離脱ページ→導線→フォーム→信頼の材料の順に点検する。業界平均ではなく自社の前後比較で効果を確かめる
- descriptionの下書き（答えの要点＋読者の状況）：ホームページの問い合わせを増やすには、訪問数（流入）と問い合わせ率を分けて点検します。問い合わせが来ないと悩む工務店・士業、店舗・クリニック、BtoBサービスの事業者向けに、計測の確認→離脱ページ→導線→フォーム→信頼の材料の順で直す手順をGoogle公式ヘルプに沿って解説します。（141字。答えの要点と読者の状況を含むため 2026-10-06 の見直しでも変更なし）
- 新規／リライト、その理由・対象URL：新規（/blog/website-inquiry-increase）。topic-map #7、まとまりE「LP・Webサイト」の柱
- 確認した既存記事と、それぞれが答える疑問・役割の違い：
  - `landing-page-production-guide`（LP制作の費用・期間・設計原則・制作会社の選び方）→ 本記事はLPを作る前の「既存サイトのどこを直すか」の点検。LPを新しく作る場合の次の疑問として手順3からリンク
  - `cpa-improvement-guide`（広告のCPA改善。Step4にLPのCVR改善）→ 本記事は広告以外の流入も含めたサイト全体の点検。広告で流入を増やすときの次の疑問として「訪問数が足りないとき」からリンク。Step4の記述（ファーストビュー・社会的証明・CTA・モバイル）と矛盾しない（本記事は一次資料のある範囲に限定）
  - `google-business-profile-meo`（地図検索）→ 来店型・訪問型の流入の入口として業態別の章からリンク
  - `meta-ads-small-budget`（Meta広告の少額予算）→ 広告で流入を増やす場合の予算の考え方としてリンク
  - `content-marketing-strategy`・`sns-marketing-basics`・`meta-google-ad-agency-how-to-choose`・`ad-agency-fee-structure`・`meta-ads-how-to-start` → 重複なし
  - 同時執筆中の `google-ads-how-to-start`・`conversion-tracking-design` → 執筆時は存在しなかったため本文リンクなし。2026-10-06 の差分修正で、手順1の末尾から `conversion-tracking-design`（何を成果として測り、商談・成約をどこで記録するか）へリンクを追加。`google-ads-how-to-start` へのリンクは置いていない（広告の始め方は本記事の疑問から遠いため）
- 検索結果の確認日・検索語・取得環境・参照URL：2026-10-06、Claude Code の WebSearch／WebFetch（検索ツールのため実際の順位・広告・関連質問は未観測）
  - 検索語：「ホームページ 問い合わせ 増やす 方法」
  - 本文を読んだページ：
    - jinrai「ホームページからの問い合わせを増やす方法10選」https://jinrai.co.jp/blog/homepage-inquiry-increase/ （2026-04-14公開、2026-07-29更新）
    - stock-sun「問い合わせを増やす」https://stock-sun.com/column/increase-in-inquiries/ （2026-08-29）
    - キャククル（shopowner-support）「Webと電話の問い合わせを増やす方法」https://www.shopowner-support.net/customer_attraction_information/web/homepage_seo/increase-web-inquiries/ （2022-01-27更新）
- 参照ページから分かった論点／自社が追加できる価値：
  - 共通の論点は「アクセス×CVRに分ける」「アクセスを増やす施策（SEO・MEO・広告・SNS）」「CVRを上げる施策（フォーム項目削減・CTA・電話タップ・お客様の声・LINE）」。jinrai は「月500PV」の判断基準、「項目削減で完了率約160%向上」「スマホの約40%が電話を好む」「写真付きの声でCVR約40%向上」などの数値を出典なしで示す。stock-sun は自社データ（5分以内の連絡で商談化率95%）を根拠にする。キャククルは他社のEFO事例（CVR 2.25%→44.74%）を引用。3件とも Google 等の公式資料の引用がない
  - 追加価値：(1) Google 広告ヘルプ・GA4ヘルプ・Search Consoleヘルプ・web.dev の公式資料だけを根拠にした点検手順（どのレポートのどのメニューで何を見るかの表を含む）、(2) 一次資料のない「平均CVR」「◯%向上」を使わず、自社の数値の前後比較で判断する方法、(3) 計測の確認（GA4キーイベントと実際の受信件数の突き合わせ、電話・予約など測れない経路の扱い）を最初に置く順番、(4) 問い合わせ型・予約/来店型・BtoBサービスの業態別の点検の重点（表）、(5) 自社で直せる範囲と外部に頼む範囲・見積もりの内訳
- 構成・内部リンク先（サービスページ・関連記事）と必要な理由：冒頭の答え → 訪問数×問い合わせ率（図1・状態別の表）→ 手順1 計測 → 手順2 離脱ページ（GA4・Search Consoleの表）→ 手順3 導線 → 手順4 フォーム → 手順5 信頼の材料（表）→ 業態別の当てはめ（表）→ 訪問数が足りないとき → 自社で直す範囲と外部に頼む範囲 → まとめ。本文から `/blog/landing-page-production-guide`（LPを作る場合）・`/blog/google-business-profile-meo`（地図検索）・`/blog/cpa-improvement-guide`（広告のCPA）・`/blog/meta-ads-small-budget`（少額の広告予算）・`/services/production/web`（構成・導線から作り直す場合）・`/services/consulting/improvement`（改善の優先順位と検証計画）
  - 2026-10-06 の差分修正（v4）：手順1の末尾から `/blog/conversion-tracking-design`（成果の定義と商談・成約の記録場所）。H2-1 で SEO・MEO の初出に説明を追加し、業態別の章で Googleビジネスプロフィールの初出を glossary の書き方（旧Googleマイビジネス）に
- 被リンク元（この記事へリンクを足す既存記事と、その箇所）：反映済み（2026-10-06 時点）＝ articles.ts の `cpa-improvement-guide` Step4 と `landing-page-production-guide`（「問い合わせが少ない場合に、計測・導線・フォームの順で点検する手順は」の箇所）、`google-business-profile-meo` のウェブサイトの役割の段落
- 図解の案（あれば）：図1「問い合わせを増やすための点検の順番」（問い合わせ数＝訪問数×問い合わせ率 → 手順1 計測 → 訪問数が少ない／訪問はあるのに少ない に分岐）。数値を含まない定義と手順のみ
- 子記事ができたら本文にリンクを足す位置（topic-map まとまりE。未作成の記事は本文で予告しない）：
  - #22 form-optimization-efo → 手順4の1段落目（「フォームの改善はEFO（入力フォーム最適化）とも呼ばれます。」の後）
  - #43 landing-page-vs-website → 手順3の末尾の LP の段落
  - #66 page-speed-core-web-vitals → 手順2の最後の段落（「同じページでもスマホとパソコンで差がないかを確かめます。」の後）
  - #68 web-accessibility-law → 手順4の後の「ウェブアクセシビリティ導入ガイドブック」の段落
  - #62 lp-ab-test → 手順3の箇条書きの後（ボタンの文言などを比べて直す場合）
  - #8 website-renewal-seo・#99 cms-selection → 「自社で直す範囲と、外部に頼む範囲」の1段落目（サイト全体の構成の作り直し／更新方法）
  - #15 website-production-request・#83 website-copyright-contract → 同じ章の2段落目（外部に頼む場合の見積もりの内訳）
  - #63 ad-banner-creative → 「訪問数が足りないときに見直す入口」の「広告」の項目
  - 別のまとまりで関係するもの：#28 no1-claims-disclaimers → 手順5の「実績の数値や「No.1」のような表現は…」の段落、#49 search-console-guide → 訪問数の章の「検索」の項目、#59 instagram-booking-flow・#91 utm-parameters → 同じ章の「SNS」の項目、#60 call-tracking → 手順1の「電話・LINE・予約システムなど」の項目
- 業種別の当てはめ例（問い合わせ型・予約/来店型・EC型など、必要なもの）：問い合わせ型（工務店・リフォーム・士業）、予約・来店型（店舗・美容室・クリニック）、BtoBサービス。EC型は「問い合わせ」ではなく購入が成果になるため対象外（購入完了の改善は別テーマ）
- 次回見直し予定日：2027-04-06（GA4・Search Consoleのメニュー名やGoogle 広告ヘルプの推奨は変わることがあるため6か月後）

## 主張と根拠
| 主張・掲載箇所 | 一次資料URL・資料名 | 確認日・適用条件 | 判定 |
|---|---|---|---|
| LPは広告・キーワードと内容を一致、希望する行動をすばやく簡単に、重要な情報を上部に、モバイルでは問い合わせを簡単に、広告文の行動喚起をページに反映、有益で独自性のある情報（冒頭2段落目・手順3・手順5） | Google 広告 ヘルプ「広告とランディング ページを最適化する」https://support.google.com/google-ads/answer/6238826?hl=ja | 2026-10-06。日本語版にAI翻訳の注記あり→英語版（"Choose a landing page that closely matches your ad and keywords" / "mirror the call-to-action in your ad text" / "Make it easy to contact you" / "put important information towards the top of the page" / "provide useful, original information"）と照合し、意味の強さが一致することを確認。広告のリンク先についての推奨なので、広告以外の入口への適用は「同じ考え方で点検できる」と本文で区別 | 確認済み |
| GA4のキーイベント＝ビジネスの成果にとって特に重要な行動を測るイベント。Google 広告ではキーイベントを元にコンバージョンを作成できる（手順1） | アナリティクス ヘルプ「Google アナリティクスのコンバージョンとキーイベント」https://support.google.com/analytics/answer/13965727?hl=ja | 2026-10-06。AI翻訳の注記あり→英語版（"an action that's particularly important to the success of your business" / "You can create Google Ads conversions based on your Google Analytics key events"）と照合 | 確認済み |
| トラフィック獲得レポート＝流入元（チャネル・参照元/メディア）。メニューは［レポート］＞［集客］＞［トラフィック獲得］（手順2の表） | アナリティクス ヘルプ「[GA4] トラフィック獲得レポート」https://support.google.com/analytics/answer/12923437?hl=ja | 2026-10-06（パソコン版の説明） | 確認済み |
| ランディング ページ レポート＝最初にアクセスしたページ。［エンゲージメント］＞［ランディング ページ］。セッション・キーイベントなど（手順2の表、SNSの項目） | アナリティクス ヘルプ「[GA4] ランディング ページ レポート」https://support.google.com/analytics/answer/12931766?hl=ja | 2026-10-06 | 確認済み |
| ファネルデータ探索＝成果までの段階を可視化し、各段階の成否を確認、非効率な経路・放棄される経路の改善に使う（手順2） | アナリティクス ヘルプ「[GA4] ファネルデータ探索」https://support.google.com/analytics/answer/9327974?hl=ja | 2026-10-06。AI翻訳の注記あり→英語版（"visualize the steps your users take to complete a task and quickly see how well they are succeeding or failing at each step"）と照合。メニューのパスは確認していないため本文に書かない | 確認済み |
| 検索パフォーマンス レポートでクリック数・表示回数・CTR・平均掲載順位を、クエリ・ページ別に見られる（手順2の表・訪問数の章） | Search Console ヘルプ「検索パフォーマンス レポート（検索結果）: 概要と基本設定」https://support.google.com/webmasters/answer/7576553?hl=ja | 2026-10-06 | 確認済み |
| 登録フォームでは求める情報をできるだけ少なく（手順4-1） | web.dev「登録フォームのベスト プラクティス」https://web.dev/articles/sign-up-form-best-practices?hl=ja | 2026-10-06。英語版 "On sign-up, ask for as little as possible." と照合。登録フォームの指針なので本文で「登録フォームについて」と明記し、問い合わせフォームへの当てはめは自社の提案として書いた | 確認済み |
| 値を入力した直後に問題をインラインで示し直し方を説明する（手順4-4）／type属性で適切なキーボード、autocomplete="email"・"tel"（手順4-5） | 同上 | 英語版 "Show problems inline and explain how to fix them, as soon as the user has entered a value" / "use the appropriate type attribute to provide the right keyboard on mobile" / "autocomplete="email" and autocomplete="tel"" と照合 | 確認済み |
| label要素・ラベルは入力欄の上・1列・エラーは入力欄の横・必須項目を明確に・入力の仕方を理解できるように・プレースホルダをラベルの代わりにしない・typeでキーボードが変わる・ボタンのタップ領域48px以上（手順4-2〜5） | web.dev「Learn Forms：デザインの基本」https://web.dev/learn/forms/design-basics?hl=ja | 2026-10-06。英語版（"position the label above the form control" / "best to use only a single column" / "display error messages next to the form control" / "If a field is mandatory, make it obvious!" / "Never misuse the placeholder attribute as a label" / "recommended tap target size of a button is at least 48px"）と照合。「入力欄どうしの間隔を十分にとる」（手順4-6）は日本語版の「フォーム コントロール間に…十分な間隔を設ける」で確認（英語版は未照合） | 確認済み |
| デジタル庁がウェブアクセシビリティ導入ガイドブックを公開している（手順4の後） | デジタル庁「ウェブアクセシビリティ導入ガイドブック」https://www.digital.go.jp/resources/introduction-to-web-accessibility-guidebook | 2026-10-06（ページの存在・名称・2025-10-16更新を確認。PDF本文（約11MB）は時間の制約で読んでいないため、内容の要約は本文に書かず「全体像を確認できる」との案内にとどめた＝案内のみ） | 確認済み |
| 問い合わせ数＝訪問数×問い合わせ率、広告のCPAは問い合わせ率が低いと高くなる（図1・H2-1・訪問数の章） | 定義と算数（CVR＝成果÷訪問、CPA＝費用÷成果。本文で CVR と CPA の定義を示している） | — | 定義からの帰結 |
| 地図検索に表示される店舗や事業者の情報は Googleビジネスプロフィール（旧Googleマイビジネス）で管理できる（業態別の章。2026-10-06 追加） | glossary と `google-business-profile-meo` の出典（GBPヘルプ「ローカル検索結果のランキングを改善するヒント」・名称変更のお知らせ〈2021-11-05〉） | 2026-10-06（同日に同記事で確認済みの内容） | 確認済み |
| 自社サービスの内容（Webサイト制作＝目的と情報の整理・構造設計・導線設計・実装／改善提案＝課題の優先順位付け・改善仮説・検証計画） | `hp/src/lib/sub-services.ts`（web・improvement） | 2026-10-06 | 確認済み |

## 未解決事項
- 未確認の事実・調査できなかった項目・本文から除いた主張：
  - 上位記事の数値（月500PVの判断基準、フォーム項目削減で完了率約160%向上、スマホの約40%が電話を好む、写真付きの声でCVR約40%向上、5分以内の連絡で商談化率95%、EFO事例のCVR 2.25%→44.74%）は一次資料を確認できないか、特定企業の自社データ・事例のため使わない
  - web.dev「登録フォームのベスト プラクティス」の日本語版の要約で「プレースホルダをラベルの代わりにしない」「type="tel"」が書かれているように見えたが、英語版の原文にはプレースホルダの記述がなく、type は一般的な記述だけだった。プレースホルダの根拠は「デザインの基本」に変更した（第三者ではなく取得時の要約の食い違い）
  - デジタル庁ガイドブックのPDF本文（フォームの達成基準など）は未読。フォームのアクセシビリティの具体策（色だけに頼らない等）は本文に書いていない。子記事 #22（EFO）・#68 で読む
  - GA4のファネルデータ探索のメニューのパス、デバイス別の比較方法は未確認のため本文に書いていない
  - 電話番号のタップ発信（tel:リンク）の技術仕様の一次資料は確認していない。本文では点検項目としてのみ記載
  - 医療機関の医療広告ガイドライン等、業種固有の表示規制は確認していないため本文で扱っていない（#24・#47で扱う）
  - 子記事（#22 EFO・#43 LPとHPの使い分け・#66 表示速度）は未作成のため本文リンクなし。差し込み位置は企画の「子記事ができたら本文にリンクを足す位置」に記載。#11 計測設計は作成済みのため、2026-10-06 に手順1からリンクした

## 検証
- 実施コマンドと結果／表示確認／未確認事項（2026-10-06）：
  - `npm run check:articles`：本記事はエラー0（全6記事 成功6／失敗0、終了コード0）。警告は「他の記事からリンクされていません」の1件のみ（並行執筆のため他記事は編集せず、被リンクを完了報告で提案）。企画メモなしの警告は本メモ作成で解消。本文5,639字、readTime 12分（5,639÷500の切り上げ）
  - `npm run lint`：0 errors／1 warning（hp の Three.js 系コンポーネントの `react-hooks/unsupported-syntax`。本記事と無関係）
  - 開発サーバー（:3000）：`/blog/website-inquiry-increase` と SVG が HTTP 200。HTML で h2 10本・目次・図・出典9件（`id="source-…"`）・関連コラムの表示を確認。Playwright（autosales、ファイルを作らない `node -e`）で幅390pxと1280pxを開き、ページの横はみ出しなし（scrollWidth＝画面幅）、図の読み込み成功（390pxで348×196、1280pxで798×449）、表4つは横スクロール枠内に収まることを確認。スクリーンショットによる目視確認はしていない（並行執筆ルールで一時ファイルを作らないため）
  - GA4 のトラフィック獲得・ランディング ページ レポートのメニュー名は日本語版ヘルプ（日本語UIの表記）で確認し、英語版とは照合していない
  - 字数・段落：タイトル31字、description 141字、200字を超える段落なし
- 2026-10-06 の差分修正（v4）後の検証：`npm run check:articles` はエラー0（7記事 成功7／失敗0、終了コード0）、本記事の警告0（本文5,756字・readTime 12分、最長段落194字）。`npm run lint` は 0 errors／1 warning（Three.js 系の共通コンポーネント。記事と無関係）。`autosales/scripts/read-page.mjs` で `/blog/website-inquiry-increase` を幅390px・1280px で開き、ページ幅＝画面幅（横はみ出しなし）・読み込めない画像なし、追加したリンクと MEO の説明の表示を確認。本番ビルドは未実施（指示により build しない）
- 反映ファイル：`hp/content/blog/website-inquiry-increase.json`、`hp/public/images/blog/website-inquiry-increase/inquiry-check-flow.svg`、本メモ（2026-10-06 の差分修正では JSON とメモのみ更新）

## 公開後の比較（実測がある場合のみ）
- 未公開
