import type { Metadata } from "next";
import { Geist, Noto_Sans_JP } from "next/font/google";
import "../globals.css";
import "./marketing.css";
import "./studio.css";
import "./header.css";
import "./brand.css";
import "./layout-fixes.css";
import "./lower.css";
import HomeChrome from "@/components/home/HomeChrome";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from "@/lib/site";

const brand = Noto_Sans_JP({ weight: ["500", "700", "900"], subsets: ["latin"], variable: "--font-brand", display: "swap", preload: false });

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressRegion: "愛知県",
    addressLocality: "名古屋市",
    addressCountry: "JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geist.variable} ${brand.variable} h-full antialiased`}>
      <body className="marketing-site min-h-full flex flex-col">
        <a href="#main-content" className="m-skip">
          本文へスキップ
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <HomeChrome><Footer /></HomeChrome>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
