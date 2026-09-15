import ServiceDetail from "@/components/ServiceDetail";
import { pageMeta } from "@/components/Marketing";
import { getService } from "@/lib/services";
const service = getService("app-development");
export const metadata = pageMeta(
  service.name,
  service.intro,
  "/services/app-development",
);
export default function Page() {
  return <ServiceDetail slug="app-development" />;
}
