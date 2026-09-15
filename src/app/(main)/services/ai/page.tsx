import ServiceDetail from "@/components/ServiceDetail";
import { pageMeta } from "@/components/Marketing";
import { getService } from "@/lib/services";
const service = getService("ai");
export const metadata = pageMeta(service.name, service.intro, "/services/ai");
export default function Page() {
  return <ServiceDetail slug="ai" />;
}
