import ServiceDetail from "@/components/ServiceDetail";
import { pageMeta } from "@/components/Marketing";
import { getService } from "@/lib/services";
const service = getService("consulting");
export const metadata = pageMeta(
  service.name,
  service.intro,
  "/services/consulting",
);
export default function Page() {
  return <ServiceDetail slug="consulting" />;
}
