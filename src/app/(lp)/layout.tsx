import { Geist, Noto_Sans_JP } from "next/font/google";
import "../globals.css";
import "../brand-aux.css";

const brand = Noto_Sans_JP({ weight: ["500", "700", "900"], subsets: ["latin"], variable: "--font-brand", display: "swap", preload: false });
const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${geist.variable} ${brand.variable} antialiased`}>
      <body className="brand-aux" style={{ fontFamily: "var(--font-sans)" }}>
        {children}
      </body>
    </html>
  );
}
