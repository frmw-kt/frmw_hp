import { ImageResponse } from "next/og";
import { getAllArticles, getArticle } from "@/lib/articles";
import { SITE_NAME } from "@/lib/site";

// 記事ごとのOGP画像（タイトル入り）。サイト共通の src/app/opengraph-image.tsx と同じ配色。
// og:image・twitter:image・Article構造化データの image で同じURL（/blog/<slug>/og-image）を使う。
// ※ opengraph-image の特殊ファイルはこのルートグループ配下で 404 になったため、通常のルートハンドラで固定URLにしている。
const size = { width: 1200, height: 630 };

export const dynamic = "force-static";
export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  const title = a?.title ?? "マーケティングコラム";
  const len = [...title].length;
  const fontSize = len <= 22 ? 68 : len <= 32 ? 58 : 50;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 96px",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 100% 0%, rgba(201,168,76,0.16) 0%, transparent 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)",
            }}
          />
          <span style={{ color: "#C9A84C", fontSize: 24, letterSpacing: 4 }}>
            COLUMN{a ? ` ・ ${a.category}` : ""}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize,
            fontWeight: 700,
            lineHeight: 1.35,
            letterSpacing: -1,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
          <span style={{ fontSize: 32, fontWeight: 700, color: "#C9A84C", letterSpacing: 1 }}>{SITE_NAME}</span>
          <span style={{ fontSize: 22, color: "#8a8a8a" }}>frmw.jp/blog</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
