import Home from "@/components/home/Home";
import { pageMeta } from "@/components/Marketing";

export const metadata = pageMeta(
  "マーケティング・業務改善支援",
  "売上を伸ばす。日々の業務を軽くする。Frameworkがマーケティングと業務改善で事業の成長を支援。集計・レポート自動化は、導入前の効果試算から実装・測定まで。",
  "/",
);
export default function HomePage() { return <Home />; }
