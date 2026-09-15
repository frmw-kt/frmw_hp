import ServiceDetail from "@/components/ServiceDetail";
import { pageMeta } from "@/components/Marketing";
import { subServices } from "@/lib/sub-services";
import { getService } from "@/lib/services";
const service = subServices["production/lp"];
export const metadata = pageMeta(
  service.name,
  service.intro,
  "/services/production/lp",
);
export default function Page() {
  return (
    <ServiceDetail
      service={service}
      path="/services/production/lp"
      parent={{
        name: getService("production").name,
        path: "/services/production",
      }}
    />
  );
}
