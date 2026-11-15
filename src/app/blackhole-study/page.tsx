import BlackHole from "@/components/BlackHole";

// 試作ページ。サイト本体からはリンクしない・検索にも出さない
export default function BlackHoleStudy() {
  return (
    <main style={{ position: "relative", height: "100svh", overflow: "hidden", background: "#000" }}>
      <BlackHole />
    </main>
  );
}
