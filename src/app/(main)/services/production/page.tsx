import ServiceDetail from "@/components/ServiceDetail";
import { pageMeta } from "@/components/Marketing";
import { getService } from "@/lib/services";
const service = getService("production");
export const metadata = pageMeta(
  service.name,
  service.intro,
  "/services/production",
);
export default function Page() {
  return <ServiceDetail slug="production" />;
}
