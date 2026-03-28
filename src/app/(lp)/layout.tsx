import { Geist } from "next/font/google";
import "../globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${geist.variable} antialiased`}>
      <body style={{ fontFamily: "var(--font-sans)" }}>
        {children}
      </body>
    </html>
  );
}
