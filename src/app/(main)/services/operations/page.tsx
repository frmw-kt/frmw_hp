import ServiceDetail from "@/components/ServiceDetail";
import { pageMeta } from "@/components/Marketing";
import { getService } from "@/lib/services";
const service = getService("operations");
export const metadata = pageMeta(
  service.name,
  service.intro,
  "/services/operations",
);
export default function Page() {
  return <ServiceDetail slug="operations" />;
}
