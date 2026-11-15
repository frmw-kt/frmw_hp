export const metadata = {
  title: "ブラックホール試作",
  robots: { index: false, follow: false },
};

export default function BlackHoleStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, background: "#000" }}>{children}</body>
    </html>
  );
}
