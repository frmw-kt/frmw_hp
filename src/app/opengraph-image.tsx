import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = "Framework | マーケティング支援";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 100% 0%, rgba(201,168,76,0.16) 0%, transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "linear-gradient(135deg, #E2C16A 0%, #C9A84C 45%, #A8892E 100%)",
            }}
          />
          <span style={{ color: "#C9A84C", fontSize: 26, letterSpacing: 4 }}>
            MARKETING SUPPORT
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#ffffff",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: -1,
          }}
        >
          <span>マーケティングで、</span>
          <span>ビジネスを加速させる。</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 34,
            fontWeight: 700,
            color: "#C9A84C",
            letterSpacing: 1,
          }}
        >
          {SITE_NAME}
        </div>
      </div>
    ),
    { ...size },
  );
}
