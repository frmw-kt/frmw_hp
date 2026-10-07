# 記事形式・コマンド（frmw.jp）

新規記事は `hp/content/blog/<slug>.json` に1記事1ファイルで置く。表示は `/blog/<slug>`、一覧は `/blog`。読み込みは `hp/src/lib/articles.ts` の `loadContentArticles()`、表示は `hp/src/app/(main)/blog/[slug]/page.tsx`。パスは hp ルート基準。

## フィールド

```json
{
  "slug": "meta-ads-small-budget",
  "title": "月10万円からのMeta広告：少額予算で検証を回す手順",
  "description": "検索結果に出る説明文。記事の答え・対象・読む価値を正確に。",
  "date": "2026-10-06",
  "updatedAt": "2026-10-06",
  "category": "広告運用",
  "readTime": "8分",
  "content": "<p>結論を先に述べます。</p><h2>…</h2>…",
  "sources": [
    {
      "id": "meta-budget",
      "title": "広告予算について",
      "publisher": "Meta ビジネスヘルプセンター",
      "url": "https://www.facebook.com/business/help/...",
      "accessedAt": "2026-10-06"
    }
  ]
}
```

| フィールド | 必須 | 内容 |
|---|---|---|
| `slug` | ○ | 小文字英数字とハイフン。ファイル名（`<slug>.json`）と一致。既存記事（`articles.ts` を含む）と重複不可。公開後は変えない |
| `title` | ○ | 記事タイトル（h1・`<title>`）。目安40字以内 |
| `description` | ○ | メタディスクリプション兼リード文。目安60〜160字 |
| `date` | ○ | 公開日 `YYYY-MM-DD`。公開後は変えない |
| `updatedAt` | 任意 | 実質的な内容変更をした日。`date` 以降 |
| `category` | ○ | 下のカテゴリから選ぶ |
| `readTime` | ○ | 「N分」。本文の文字数（タグと空白を除く。`check:articles` の表示と同じ）÷500 を切り上げた値。±1分を超えてずれると警告 |
| `content` | ○ | 本文HTML（下の許可タグのみ） |
| `sources` | 任意（根拠を示す記事では必須） | 出典の一覧。本文から `#source-<id>` で参照する |
| `keywords` | ○（ガイドv3〜） | `{ "primary": "主検索語", "variants": ["表記ゆれ", …] }`。表示には使わず、検証用（主検索語の語がタイトルか description にあるか、表記ゆれが記事中にあるか）。企画メモの主検索語・表記ゆれと同じにする。variants は読者が実際に使う呼び方に絞る（3〜6個）。空白区切りの検索語（例: `広告運用 手数料`）は、語がすべて記事中にあれば一致とみなす |
| `source` | 任意 | 作成元のメモ（autosales が `"autosales"` を入れる）。表示には使わない |

### カテゴリ
`広告運用` / `SNSマーケティング` / `制作・クリエイティブ` / `コンテンツマーケティング` / `Web集客` / `マーケティング戦略`
（増やす場合は `scripts/check-articles.mjs` の `CATEGORIES` と autosales の `ARTICLE_CATEGORIES` も合わせて直す）

## 本文HTML

- 使えるタグ: `h2` `h3` `p` `ul` `ol` `li` `strong` `a` `table` `thead` `tbody` `tr` `th` `td` `blockquote` `br` `figure` `img` `figcaption`
- 属性は `a` の `href`、`img` の `src`・`alt`・`width`・`height` だけ（`target` 等は不可）。`class`・`style`・`id`・`on*`・`<script>` は不可
- `h1` は使わない（タイトルが h1）。最初の見出しは `h2`。`h3` の前に `h2` が必要。目次は `h2` から自動生成される（**`h2` の中にタグを入れない・同じ文言の `h2` を2つ置かない**。目次の表示とキーが崩れるため。検証でエラー）
- 表は横に長くなってもスマホでは横スクロールで表示される（表示側で囲む）。列は多くても4〜5列までにし、セルの文章は短く
- 冒頭は見出しの前の `<p>` で、読者の疑問への答えを先に書く
- リンク:
  - 内部: `/blog/<slug>`（存在する記事のみ）、`/services/...`、`/contact`、`/about`、`/faq`、`/cases` など実在するページ
  - 外部: `https://` のみ
  - 出典: `#source-<id>`（`sources` に同じ `id` が必要）
- `【要出典】` や `（下書き）` が残っていると検証エラーになる（autosales の下書きで根拠が必要な箇所・仮文に付く印）

## 図解（画像）

図にしたほうが分かりやすい箇所（手順・流れ、比較、仕組み・構造、時系列、計算の過程、判断の分岐、位置関係）は**すべて**図解する。1記事あたりの枚数に上限はない。装飾目的の画像は使わない。企画メモの「図解の候補」の表で「作成」とした数だけ、記事に `figure` があること（検証で照合）。

```html
<figure><img src="/images/blog/<slug>/budget-flow.svg" alt="月の予算を週に換算し、週50件に届く1件あたりの単価を求める流れの図" width="800" height="450"><figcaption>図1 予算から最適化イベントを選ぶ流れ</figcaption></figure>
```

- ファイルは `hp/public/images/blog/<slug>/<小文字英数字とハイフン>.svg`（png・jpg・webp も可）。表示URLは `/images/blog/<slug>/…`
- `alt` は図の内容が分かる文（10字以上）。`width`・`height` は数値で付ける（レイアウトのずれ防止）。`figcaption` で図番号と要点を書く
- SVG の作り方:
  - `viewBox` を付ける（例: `viewBox="0 0 800 450"`。スマホで縮む）。`img` の `width`・`height` の比は `viewBox` の比と合わせる（検証で警告）。`<script>`・`on*` 属性・外部URLの参照は不可（検証でエラー）
  - 文字は `font-family="Hiragino Sans, Hiragino Kaku Gothic ProN, Noto Sans JP, sans-serif"`。`viewBox` の幅は800以下にし、本文相当の `font-size` は24以上（最小でも22）（スマホの表示幅約350pxに縮小されても約10px以上で読める）。幅を広げる場合は `font-size` も比例して大きくする（検証で、スマホでの実寸が9px未満になる文字を警告）。1枚の文字量は少なく。本文の図はタップすると画像単体で開ける
  - 色はサイトに合わせる: 墨 `#191c19`、本文 `#41483c`、罫線 `#e3e2dc`、背景 `#f7f7f4`/`#ffffff`、アクセント（ゴールド）`#c9a84c`、強調の濃いゴールド `#806222`
  - 図中の数値・仕様にも根拠が必要（本文の出典と対応させる）。仮定の数値は図中にも「仮定」と書く
- 記事の OGP 画像（共有時のサムネイル）は自動生成されるので作らない

## 出典（sources）

| フィールド | 内容 |
|---|---|
| `id` | 記事内で一意の小文字英数字・ハイフン |
| `title` | 実際に確認した資料・ページの名称 |
| `publisher` | 発行元（例: Google 広告ヘルプ、消費者庁） |
| `url` | `https://` のURL |
| `accessedAt` | 実際に開いて確認した日 `YYYY-MM-DD` |

記事ページの本文の後に「出典」として番号付きで表示され、各項目に `id="source-<id>"` が付く。本文の主張と出典の対応は企画メモ（`docs/editorial/articles/<slug>.md`）にも記録する。

## 検証コマンド

```sh
cd hp
npm run check:articles            # content/blog/*.json を検証（エラーがあれば終了コード1）
npm run check:articles -- --dir /tmp/xxx   # 別ディレクトリの試験原稿を検証
npm run lint
npm run dev                       # http://localhost:3000/blog/<slug> で表示確認
```

`check:articles` が見る項目（警告は評価基準の番号付き）: 冒頭の答えの有無・長すぎる段落・1,500字を超えるh2の節・まだない記事の予告・日付と曜日の整合（エラー）・本文の「Google 広告」（空白あり）・glossary の避ける表記・略語の初出の説明（見出しも本文の一部として数えるので、見出しで略語を使うなら見出しか直前で説明する）・曖昧なリンク文言・断定表現・主検索語と表記ゆれ（`keywords`）・企画メモの版と次回見直し日、および必須フィールド・slug形式とファイル名の一致・slugの重複（`articles.ts` を含む）・日付・カテゴリ・許可タグと属性・見出しの順序・内部リンク先の存在・外部リンクのHTTPS・出典IDの対応・`【要出典】` の残り・画像（置き場所・ファイルの存在・alt・SVGの安全性）。警告（タイトル・説明文の長さ、本文で参照されていない出典、readTimeのずれ、他の記事からリンクされていない、確認日から180日以上たった出典、企画メモがない）は終了コードに影響しない。
