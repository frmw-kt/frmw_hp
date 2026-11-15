import LatticeSpace from "@/components/LatticeSpace";

// 試作ページ。サイト本体からはリンクしない・検索にも出さない
export default function LatticeStudy() {
  return (
    <main style={{ position: "relative", height: "100svh", overflow: "hidden", background: "#1a1206", touchAction: "none" }}>
      <LatticeSpace />
    </main>
  );
}
