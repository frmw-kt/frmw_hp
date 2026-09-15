import ServiceDetail from "@/components/ServiceDetail";
import { pageMeta } from "@/components/Marketing";
import { subServices } from "@/lib/sub-services";
import { getService } from "@/lib/services";
const service = subServices["consulting/improvement"];
export const metadata = pageMeta(
  service.name,
  service.intro,
  "/services/consulting/improvement",
);
export default function Page() {
  return (
    <ServiceDetail
      service={service}
      path="/services/consulting/improvement"
      parent={{
        name: getService("consulting").name,
        path: "/services/consulting",
      }}
    />
  );
}
