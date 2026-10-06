#!/usr/bin/env node
// content/blog/*.json の記事データを検証する（docs/editorial/article-format.md の形式）。
//   npm run check:articles              … hp/content/blog を検証
//   npm run check:articles -- --dir DIR … 別ディレクトリの試験原稿を検証
// エラーがあれば終了コード1。警告は表示のみ。外部URLの到達性は確認しない（執筆時に実際に開いて確認する）。
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const dirArg = args[args.indexOf("--dir") + 1];
const DIR = args.includes("--dir") && dirArg ? path.resolve(dirArg) : path.join(ROOT, "content", "blog");

export const CATEGORIES = ["広告運用", "SNSマーケティング", "制作・クリエイティブ", "コンテンツマーケティング", "Web集客", "マーケティング戦略"];
const ALLOWED_TAGS = new Set(["h2", "h3", "p", "ul", "ol", "li", "strong", "a", "table", "thead", "tbody", "tr", "th", "td", "blockquote", "br", "figure", "img", "figcaption"]);
const ALLOWED_ATTRS = { a: ["href"], img: ["src", "alt", "width", "height"] };
const PUBLIC_DIR = path.join(ROOT, "public");
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const isDate = (s) => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(Date.parse(s)) && new Date(s).toISOString().slice(0, 10) === s;

/** コード内の初期記事（src/lib/articles.ts）のslug */
function inlineSlugs() {
  const src = fs.readFileSync(path.join(ROOT, "src", "lib", "articles.ts"), "utf8");
  return [...src.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]);
}

/** src/app 配下の静的なページパス（ルートグループ (main) 等は除いて連結） */
function staticRoutes() {
  const routes = new Set(["/"]);
  const walk = (dir, prefix) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!e.isDirectory() || e.name.startsWith("_") || e.name === "api") continue;
      const seg = /^\(.*\)$/.test(e.name) ? "" : `/${e.name}`;
      const next = prefix + seg;
      const full = path.join(dir, e.name);
      if (fs.existsSync(path.join(full, "page.tsx"))) routes.add(next || "/");
      walk(full, next);
    }
  };
  walk(path.join(ROOT, "src", "app"), "");
  return routes;
}

export function checkArticle(a, file, ctx) {
  const errors = [];
  const warnings = [];
  const req = ["slug", "title", "description", "date", "category", "readTime", "content"];
  for (const k of req) if (typeof a[k] !== "string" || !a[k].trim()) errors.push(`${k} がありません`);
  if (errors.length) return { errors, warnings };

  if (!SLUG_RE.test(a.slug)) errors.push(`slug は小文字英数字とハイフンのみ: ${a.slug}`);
  if (file && path.basename(file, ".json") !== a.slug) errors.push(`ファイル名と slug が一致しません（${path.basename(file)} / ${a.slug}）`);
  if (ctx.inline.includes(a.slug)) errors.push(`src/lib/articles.ts の記事と slug が重複: ${a.slug}`);
  if (!isDate(a.date)) errors.push(`date が YYYY-MM-DD の実在する日付ではありません: ${a.date}`);
  if (a.updatedAt !== undefined && (!isDate(a.updatedAt) || a.updatedAt < a.date)) errors.push(`updatedAt が不正（date 以降の YYYY-MM-DD）: ${a.updatedAt}`);
  if (!CATEGORIES.includes(a.category)) errors.push(`category は ${CATEGORIES.join(" / ")} のいずれか: ${a.category}`);
  if (!/^\d+分$/.test(a.readTime)) errors.push(`readTime は「N分」: ${a.readTime}`);
  if ([...a.title].length > 40) warnings.push(`title が40字を超えています（${[...a.title].length}字）`);
  const dl = [...a.description].length;
  if (dl < 60 || dl > 160) warnings.push(`description は60〜160字が目安（${dl}字）`);

  // ---- 本文HTML ----
  const html = a.content;
  if (html.includes("【要出典】")) errors.push("【要出典】が残っています（根拠を確認して出典を登録するか、主張を削除）");
  if (/（下書き）/.test(html + a.title + a.description)) errors.push("（下書き）の仮文が残っています");
  if (/<script|<style|<iframe/i.test(html)) errors.push("script / style / iframe は使えません");
  let seenH2 = false;
  let firstHeading = null;
  for (const m of html.matchAll(/<\s*(\/?)\s*([a-zA-Z0-9]+)([^>]*)>/g)) {
    const [, closing, rawTag, attrs] = m;
    const tag = rawTag.toLowerCase();
    if (!ALLOWED_TAGS.has(tag)) { errors.push(`使えないタグ: <${tag}>`); continue; }
    if (closing) continue;
    const attrNames = [...attrs.matchAll(/([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=/g)].map((x) => x[1].toLowerCase());
    const bad = attrNames.filter((n) => !(ALLOWED_ATTRS[tag] ?? []).includes(n));
    if (bad.length) errors.push(`<${tag}> に使えない属性: ${bad.join(", ")}`);
    if (tag === "img") {
      const src = attrs.match(/src\s*=\s*"([^"]*)"/)?.[1] ?? "";
      const alt = attrs.match(/alt\s*=\s*"([^"]*)"/)?.[1] ?? "";
      const re = new RegExp(`^/images/blog/${a.slug}/[a-z0-9-]+\\.(svg|png|jpg|webp)$`);
      if (!re.test(src)) errors.push(`画像は /images/blog/${a.slug}/<小文字英数字とハイフン>.svg|png|jpg|webp に置く: ${src}`);
      else if (!fs.existsSync(path.join(PUBLIC_DIR, src))) errors.push(`画像ファイルがありません: public${src}`);
      else if (src.endsWith(".svg")) {
        const svg = fs.readFileSync(path.join(PUBLIC_DIR, src), "utf8");
        if (/<script|\son[a-z]+\s*=|(?:href|src)\s*=\s*"(?:https?:|\/\/)/i.test(svg)) errors.push(`SVGにスクリプト・イベント属性・外部参照は使えません: ${src}`);
        if (!/viewBox=/.test(svg)) warnings.push(`SVGに viewBox がありません（スマホで縮まない）: ${src}`);
        const vb = svg.match(/viewBox="\s*[-\d.]+\s+[-\d.]+\s+([\d.]+)\s+([\d.]+)\s*"/);
        const w = Number(attrs.match(/width\s*=\s*"(\d+)"/)?.[1]);
        const h = Number(attrs.match(/height\s*=\s*"(\d+)"/)?.[1]);
        if (vb) {
          // スマホ（本文幅 約350px）に縮小されたときの文字の実寸
          const sizes = [...svg.matchAll(/font-size\s*[=:]\s*"?([\d.]+)/g)].map((m) => Number(m[1])).filter((n) => n > 0);
          if (sizes.length) {
            const px = (Math.min(...sizes) * Math.min(1, 350 / Number(vb[1]))).toFixed(1);
            if (Number(px) < 9) warnings.push(`SVGの最小の文字（font-size ${Math.min(...sizes)}、viewBox幅 ${vb[1]}）がスマホで約${px}pxになり読みにくい。viewBox幅を800以下にするか文字を大きくする: ${src}`);
          }
        }
        if (vb && w && h && Math.abs(w / h - Number(vb[1]) / Number(vb[2])) > 0.02) warnings.push(`img の width/height の比（${w}×${h}）が SVG の viewBox の比（${vb[1]}×${vb[2]}）と違います: ${src}`);
      }
      if (alt.trim().length < 10) errors.push(`画像の alt は図の内容が分かる文（10字以上）にする: ${src}`);
      if (!/width\s*=\s*"\d+"/.test(attrs) || !/height\s*=\s*"\d+"/.test(attrs)) warnings.push(`画像に width・height（数値）を付けるとレイアウトがずれない: ${src}`);
    }
    if (tag === "h2") { seenH2 = true; firstHeading ??= "h2"; }
    if (tag === "h3") { firstHeading ??= "h3"; if (!seenH2) errors.push("h2 より前に h3 があります"); }
  }
  if (firstHeading === "h3") errors.push("最初の見出しは h2 にしてください");
  // 目次は h2 の中身をそのまま文字・キーに使うため、タグ入り・重複の h2 は表示が崩れる
  const h2s = [...html.matchAll(/<h2>([\s\S]*?)<\/h2>/gi)].map((m) => m[1]);
  if (h2s.some((h) => /</.test(h))) errors.push("h2 の中にタグがあります（目次が崩れる）。h2 は文字だけにする");
  const dupH2 = h2s.filter((h, i) => h2s.indexOf(h) !== i);
  if (dupH2.length) errors.push(`同じ文言の h2 があります（${[...new Set(dupH2)].join("・")}）`);
  if (!seenH2) warnings.push("h2 見出しがありません（目次が空になります）");
  if (/<h1/i.test(html)) errors.push("h1 は使えません（タイトルが h1）");
  if (!/^\s*<p>/i.test(html)) warnings.push("冒頭が <p> ではありません（最初に読者の疑問への答えを書く）");

  // ---- リンク ----
  const sourceIds = new Set();
  const sources = a.sources ?? [];
  if (!Array.isArray(sources)) errors.push("sources は配列にしてください");
  else {
    for (const s of sources) {
      if (!s || !ID_RE.test(s.id ?? "")) { errors.push(`出典の id が不正: ${s?.id}`); continue; }
      if (sourceIds.has(s.id)) errors.push(`出典の id が重複: ${s.id}`);
      sourceIds.add(s.id);
      if (!s.title || !s.publisher) errors.push(`出典 ${s.id} に title / publisher がありません`);
      if (!/^https:\/\/[^\s/]+\.[^\s]+$/.test(s.url ?? "")) errors.push(`出典 ${s.id} の url は https:// のURL: ${s.url}`);
      if (!isDate(s.accessedAt)) errors.push(`出典 ${s.id} の accessedAt（確認日）が不正: ${s.accessedAt}`);
      else if ((ctx.today - Date.parse(s.accessedAt)) / 86_400_000 >= 180) warnings.push(`出典 ${s.id} の確認日から180日以上たっています（${s.accessedAt}）。内容が変わっていないか確認する`);
    }
  }
  const referenced = new Set();
  for (const m of html.matchAll(/<a\s+href\s*=\s*"([^"]*)"/gi)) {
    const href = m[1];
    if (href.startsWith("#")) {
      const id = href.match(/^#source-(.+)$/)?.[1];
      if (!id) errors.push(`ページ内リンクは #source-<id> のみ: ${href}`);
      else if (!sourceIds.has(id)) errors.push(`出典 ${id} が sources にありません`);
      else referenced.add(id);
    } else if (href.startsWith("/") && !href.startsWith("//")) {
      const p = href.split(/[?#]/)[0].replace(/\/$/, "") || "/";
      const blog = p.match(/^\/blog\/([^/]+)$/);
      if (blog) { if (!ctx.allSlugs.has(blog[1])) errors.push(`存在しない記事へのリンク: ${href}`); }
      else if (!ctx.routes.has(p)) errors.push(`存在しないページへのリンク: ${href}`);
    } else if (!/^https:\/\/[^\s/]+\.[^\s]+/.test(href)) {
      errors.push(`外部リンクは https:// のみ: ${href}`);
    }
  }
  for (const id of sourceIds) if (!referenced.has(id)) warnings.push(`本文から参照されていない出典: ${id}`);

  // ---- 評価基準（review-rubric）のうち機械で見られるもの（警告） ----
  const plain = (h) => h.replace(/<[^>]+>/g, "").replace(/\s+/g, "");
  // 1. 冒頭（最初のh2より前）で答えているか: 冒頭の本文が短すぎる／「解説します」だけで終わる
  const lead = plain(html.split(/<h2[\s>]/i)[0] ?? "");
  if (lead.length < 80) warnings.push(`冒頭（最初の見出しの前）が${lead.length}字しかありません。主検索語の問いへの答えを冒頭に書く（評価基準1）`);
  else if (/(解説|紹介|説明)します。?$/.test(lead) && lead.length < 160) warnings.push("冒頭が「〜を解説します」で終わっています。答えそのものを先に書く（評価基準1）");
  // 7. 長すぎる h2 の節（柱記事は分けるか子記事へ）
  const sections = html.split(/<h2>/i).slice(1).map((sec) => ({ title: sec.split(/<\/h2>/i)[0], len: plain(sec.split(/<\/h2>/i)[1] ?? "").length }));
  const longSecs = sections.filter((x) => x.len > 1500);
  if (longSecs.length) warnings.push(`1,500字を超える h2 の節があります（${longSecs.map((x) => `${x.title.slice(0, 15)}…${x.len}字`).join("・")}）。手段・手順ごとなら h2 に分ける、深掘りなら子記事の候補にする`);
  // 7. 長すぎる段落
  const longParas = [...html.matchAll(/<p>([\s\S]*?)<\/p>/gi)].map((m) => plain(m[1]).length).filter((n) => n > 260);
  if (longParas.length) warnings.push(`260字を超える段落が${longParas.length}つあります（最長${Math.max(...longParas)}字）。分けるか、表・リストにする（評価基準7）`);
  // 9. 曖昧なアンカー
  const vague = [...html.matchAll(/<a\s+href="[^"]*">([^<]{0,12})<\/a>/gi)].map((m) => m[1].trim()).filter((t) => /^(こちら|ここ|この記事|詳しくはこちら|リンク|コチラ)$/.test(t));
  if (vague.length) warnings.push(`内容の分からないリンク文言があります（${[...new Set(vague)].join("・")}）。リンク先が分かる具体的な文言にする（評価基準9）`);
  // 画面の名称は全角の［］。半角の [ ] で日本語を挟んだ箇所を警告
  const halfBrackets = [...plain(html).matchAll(/\[([^\]\x00-\x7F][^\]]{0,24})\]/g)].map((m) => m[1]);
  if (halfBrackets.length) warnings.push(`画面の名称は全角の［］で書く（半角の [ ] になっている: ${[...new Set(halfBrackets)].slice(0, 5).join("・")}）`);
  // 7. 専門用語（略語）は初出で説明する: 初出の直後（10字以内）に「（」がなければ警告
  const bodyText = plain(html);
  // 「コンバージョン率（CVR）」のように説明の直後の（ ）に入っている場合は説明済み。括弧内の列挙（「（Google広告・GA4・…）」）は説明済みとみなさない
  const unexplained = ["CVR", "CTR", "CPA", "CPC", "CPM", "ROAS", "LTV", "LPO", "EFO", "KPI", "KGI", "MEO", "UTM", "GA4", "SEO", "P-MAX"].filter((t) => {
    const i = bodyText.indexOf(t);
    if (i < 0) return false;
    const after = bodyText.slice(i + t.length, i + t.length + 12);
    // 直後（4字以内、句読点・列挙をまたがない）に（ ）の説明: 「MEO対策（MEOは…の略）」「CVR（コンバージョン率）」
    const explainedAfter = /^[^。、・（(）)]{0,4}[（(]/.test(after);
    // 説明の直後の短い（ ）の中: 「目標アクション単価（目標CPA）」。列挙（・、を含む）は除く
    const before = bodyText.slice(Math.max(0, i - 10), i);
    const open = Math.max(before.lastIndexOf("（"), before.lastIndexOf("("));
    const close = after.search(/[）)]/);
    const explainedInParen = open >= 0 && !/[・、）)]/.test(before.slice(open + 1)) && close >= 0 && close <= 6 && !/[・、]/.test(after.slice(0, close));
    return !explainedAfter && !explainedInParen;
  });
  if (unexplained.length) warnings.push(`略語の初出に説明がありません（${unexplained.join("・")}）。初出の直後に（ ）で説明する（評価基準7）`);
  // 日付と曜日の整合（「2026年10月26日（月）」の曜日が正しいか）
  for (const m of plain(html).matchAll(/(\d{4})年(\d{1,2})月(\d{1,2})日[（(]([日月火水木金土])[）)]/g)) {
    const wd = "日月火水木金土"[new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])).getDay()];
    if (wd !== m[4]) errors.push(`日付と曜日が合いません: ${m[0]}（正しくは${wd}曜日）`);
  }
  // まだない記事の予告（古い約束になる）: 「別の記事で解説する予定」「今後の記事で」など
  const promises = [...plain(html).matchAll(/(別の記事で(?:詳しく)?(?:解説|扱|紹介|説明)[^。]{0,6}予定|今後の記事で|次回の記事で|近日公開)/g)].map((m) => m[1]);
  if (promises.length) warnings.push(`まだない記事の予告があります（${[...new Set(promises)].join("・")}）。本文で予告せず、企画メモの「子記事ができたら本文にリンクを足す位置」に書く`);
  // 本文の「Google 広告」（空白あり）は「Google広告」に。出典名の「Google 広告ヘルプ」は除く
  const gSpaced = (html.replace(/<[^>]+>/g, "").match(/Google 広告(?!ヘルプ)/g) ?? []).length;
  if (gSpaced) warnings.push(`本文の「Google 広告」（空白あり）が${gSpaced}か所あります。本文は「Google広告」に統一（出典名・画面名は公式表記のまま）`);
  // glossary の避ける表記
  // 空白を残したまま照合する（「Meta ピクセル」のような空白入りの避ける表記を、正しい「Metaピクセル」と区別するため）
  const rawText = a.title + a.description + html.replace(/<[^>]+>/g, "");
  const avoided = (ctx.avoidTerms ?? []).filter((x) => rawText.includes(x.term));
  if (avoided.length) warnings.push(`glossary で避ける表記があります（${avoided.map((x) => `「${x.term}」→ ${x.word}`).join("・")}）`);
  // 5. 断定・最上級表現（引用・否定の文脈もあるので警告のみ。該当箇所を目視で確認する）
  const hype = [...plain(html).matchAll(/(必ず(?:成果|売上|集客|上がる|増える)|絶対に?(?:成功|儲か)|業界(?:No\.?1|ナンバーワン|初)|日本一|最安|100%(?:保証|成功))/g)].map((m) => m[1]);
  if (hype.length) warnings.push(`断定・最上級の表現があります（${[...new Set(hype)].join("・")}）。根拠がなければ削除する（評価基準5）`);
  // 3・8. 主検索語・表記ゆれ（記事データに keywords がある場合）
  if (a.keywords !== undefined) {
    const kw = a.keywords;
    if (!kw || typeof kw.primary !== "string" || !Array.isArray(kw.variants)) errors.push("keywords は { primary: 主検索語, variants: [表記ゆれ…] } の形にする");
    else {
      const tokens = kw.primary.split(/[\s　]+/).filter(Boolean);
      const missingTitle = tokens.filter((t) => !a.title.includes(t) && !a.description.includes(t));
      if (missingTitle.length) warnings.push(`主検索語の語（${missingTitle.join("・")}）がタイトル・description のどちらにもありません（評価基準8）`);
      const text = a.title + a.description + plain(html);
      // 空白区切りの検索語（例: 広告運用 手数料）は、語がすべて含まれていれば一致とみなす
      const missingVariants = kw.variants.filter((v) => !v.split(/[\s　]+/).filter(Boolean).every((t) => text.includes(t)));
      if (missingVariants.length) warnings.push(`表記ゆれ（${missingVariants.join("・")}）が本文・タイトル・description にありません。読者が使う呼び方なら自然に入れる（評価基準3）`);
    }
  }

  const chars = html.replace(/<[^>]+>/g, "").replace(/\s+/g, "").length;
  const expected = Math.max(1, Math.ceil(chars / 500));
  const rt = Number(a.readTime.replace("分", ""));
  if (Math.abs(rt - expected) > 1) warnings.push(`readTime が本文量（${chars}字・目安${expected}分）とずれています（文字数÷500の切り上げ）`);
  return { errors: [...new Set(errors)], warnings: [...new Set(warnings)], chars };
}

function main() {
  if (!fs.existsSync(DIR)) { console.log(`記事ディレクトリがありません: ${DIR}`); return 0; }
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".json")).sort();
  const inline = inlineSlugs();
  const articles = [];
  let failed = 0;
  for (const f of files) {
    try { articles.push({ file: path.join(DIR, f), data: JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) }); }
    catch (e) { console.log(`✖ ${f}: JSONとして読めません（${e.message}）`); failed++; }
  }
  const ctx = { inline, routes: staticRoutes(), allSlugs: new Set([...inline, ...articles.map((x) => x.data.slug)]), today: Date.now() };
  // 被リンク: どの記事からリンクされているか（初期記事の articles.ts も含めて数える）
  const inbound = new Map();
  const addLinks = (from, html) => {
    for (const m of String(html).matchAll(/href=\\?"\/blog\/([a-z0-9-]+)\/?\\?"/g)) {
      if (m[1] === from) continue;
      if (!inbound.has(m[1])) inbound.set(m[1], new Set());
      inbound.get(m[1]).add(from);
    }
  };
  const inlineSrc = fs.readFileSync(path.join(ROOT, "src", "lib", "articles.ts"), "utf8");
  const blocks = inlineSrc.split(/\n\s*\{\s*\n\s*slug:\s*"/).slice(1);
  for (const b of blocks) addLinks(b.slice(0, b.indexOf('"')), b);
  for (const { data } of articles) addLinks(data.slug, data.content);
  const memoDir = path.join(ROOT, "docs", "editorial", "articles");
  // 執筆ガイドの現在の版と、topic-map で「柱」の記事
  const guideVer = Number(fs.readFileSync(path.join(ROOT, "docs", "editorial", "writing-guide.md"), "utf8").match(/版:\s*v(\d+)/)?.[1] ?? 0);
  const topicMap = fs.existsSync(path.join(ROOT, "docs", "editorial", "topic-map.md")) ? fs.readFileSync(path.join(ROOT, "docs", "editorial", "topic-map.md"), "utf8") : "";
  // glossary の「避ける表記」列の「」内の語句（括弧書きの説明より前の部分だけ）
  const glossaryPath = path.join(ROOT, "docs", "editorial", "glossary.md");
  const avoidTerms = [];
  if (fs.existsSync(glossaryPath)) {
    for (const line of fs.readFileSync(glossaryPath, "utf8").split("\n")) {
      const cols = line.split("|").map((c) => c.trim());
      if (cols.length < 6 || !cols[3] || cols[3] === "避ける表記") continue;
      let depth = 0, cut = cols[3].length;
      for (let k = 0; k < cols[3].length; k++) {
        const ch = cols[3][k];
        if (ch === "「") depth++;
        else if (ch === "」") depth--;
        else if ((ch === "（" || ch === "(") && depth === 0) { cut = k; break; }
      }
      for (const m of cols[3].slice(0, cut).matchAll(/「([^「」]+)」/g)) avoidTerms.push({ term: m[1], word: cols[1] });
    }
  }
  ctx.avoidTerms = avoidTerms;
  const pillars = new Set(topicMap.split("\n").map((l) => l.split("|").map((c) => c.trim())).filter((c) => c.length > 10 && c[9] === "柱").map((c) => c[2]));
  const seen = new Set();
  for (const { file, data } of articles) {
    const { errors, warnings, chars } = checkArticle(data, file, ctx);
    if (seen.has(data.slug)) errors.push(`slug が重複: ${data.slug}`);
    seen.add(data.slug);
    const name = path.basename(file);
    if (errors.length) { failed++; console.log(`✖ ${name}`); errors.forEach((e) => console.log(`    エラー: ${e}`)); }
    else console.log(`✔ ${name}（本文 ${chars}字）`);
    if (!inbound.get(data.slug)?.size) warnings.push("他の記事からリンクされていません（関連する既存記事の該当箇所からリンクを足す）");
    const memoPath = path.join(memoDir, `${data.slug}.md`);
    if (DIR === path.join(ROOT, "content", "blog")) {
      if (!fs.existsSync(memoPath)) warnings.push(`企画メモがありません（docs/editorial/articles/${data.slug}.md）`);
      else {
        const memo = fs.readFileSync(memoPath, "utf8");
        const memoVer = Number(memo.match(/準拠したガイドの版[：:]\s*v(\d+)/)?.[1] ?? 0);
        if (!memoVer) warnings.push("企画メモに「準拠したガイドの版：vN」がありません");
        else if (memoVer < guideVer) warnings.push(`企画メモの版（v${memoVer}）が執筆ガイドの現在の版（v${guideVer}）より古い。改善記録の遡及の対象か確認する`);
        if (pillars.has(data.slug) && !/子記事ができたら/.test(memo)) warnings.push("柱記事の企画メモに「子記事ができたら本文にリンクを足す位置」がありません");
        // 企画メモの表記ゆれの表（見出しに「呼び方」がある表）: 反映先にも入れない理由にもない語を警告
        const lines = memo.split("\n");
        const hi = lines.findIndex((l) => /^\|\s*呼び方\s*\|/.test(l));
        if (hi >= 0) {
          const text = data.title + data.description + data.content.replace(/<[^>]+>/g, "").replace(/\s+/g, "");
          const missing = [];
          for (const l of lines.slice(hi + 2)) {
            if (!/^\|/.test(l)) break;
            const cols = l.split("|").map((c) => c.trim());
            const term = cols[1];
            const reason = cols[4] ?? "";
            if (!term || reason && reason !== "—" && reason !== "-") continue;
            if (!term.split(/[\s　／/]+/).filter(Boolean).every((t) => text.includes(t))) missing.push(term);
          }
          if (missing.length) warnings.push(`企画メモの表記ゆれ（${missing.join("・")}）が記事にありません。入れるか、入れない理由をメモの表に書く（評価基準3）`);
        } else if (memoVer >= 4) warnings.push("企画メモに表記ゆれの表（| 呼び方 | 種類 | 反映先 | 入れない理由 |）がありません");
        if (!/次回見直し予定日[：:][^\n]*\d{4}-\d{2}(-\d{2})?/.test(memo)) warnings.push("企画メモに次回見直し予定日（YYYY-MM-DD）がありません（評価基準10）");
      }
    }
    warnings.forEach((w) => console.log(`    警告: ${w}`));
  }
  console.log(`\n${files.length}記事を検証: 成功 ${files.length - failed} / 失敗 ${failed}`);
  return failed ? 1 : 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) process.exit(main());
