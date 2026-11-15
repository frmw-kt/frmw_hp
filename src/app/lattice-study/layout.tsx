export const metadata = {
  title: "幾何学空間の試作",
  robots: { index: false, follow: false },
};

export default function LatticeStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, background: "#1a1206" }}>{children}</body>
    </html>
  );
}
