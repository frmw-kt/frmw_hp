import ServiceDetail from "@/components/ServiceDetail";
import { pageMeta } from "@/components/Marketing";
import { getService } from "@/lib/services";

const service = getService("business-improvement");
export const metadata = pageMeta(
  "業務改善支援｜集計・レポート自動化と費用対効果",
  service.intro,
  "/services/business-improvement",
);

export default function Page() {
  return <ServiceDetail slug="business-improvement" />;
}
