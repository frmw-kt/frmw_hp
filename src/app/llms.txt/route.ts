// /llms.txt: AI 向けのサイト案内（https://llmstxt.org の形式）。会社・サービス・記事の一覧を記事データから生成する
import { getAllArticles } from "@/lib/articles";
import { services } from "@/lib/services";
import { COMPANY, DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const articles = getAllArticles();
  const byCategory = [...new Set(articles.map((a) => a.category))].map(
    (c) => [c, articles.filter((a) => a.category === c)] as const,
  );
  const lines = [
    `# ${SITE_NAME}（frmw.jp）`,
    "",
    `> ${DEFAULT_DESCRIPTION}`,
    "",
    `${COMPANY.legalName}。代表 ${COMPANY.representative}。所在地 ${COMPANY.addressRegion}${COMPANY.addressLocality}。`,
    "コラムで出典を示した記事は、記事末尾に公式資料の名称と確認日を載せています。",
    "",
    "## 主要ページ",
    "",
    `- [ホーム](${SITE_URL}/): 会社とサービスの全体像`,
    `- [会社概要](${SITE_URL}/about): 会社情報`,
    `- [よくある質問](${SITE_URL}/faq): 支援内容・費用・進め方`,
    `- [お問い合わせ](${SITE_URL}/contact): 無料相談の申し込み`,
    "",
    "## サービス",
    "",
    ...services.map((s) => `- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.intro}`),
    "",
    `## コラム（全${articles.length}本）`,
    "",
    ...byCategory.flatMap(([c, list]) => [
      `### ${c}`,
      "",
      ...list.map((a) => `- [${a.title}](${SITE_URL}/blog/${a.slug}): ${a.summary ?? a.description}`),
      "",
    ]),
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
