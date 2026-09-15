import ServiceDetail from "@/components/ServiceDetail";
import { pageMeta } from "@/components/Marketing";
import { subServices } from "@/lib/sub-services";
import { getService } from "@/lib/services";
const service = subServices["consulting/strategy"];
export const metadata = pageMeta(
  service.name,
  service.intro,
  "/services/consulting/strategy",
);
export default function Page() {
  return (
    <ServiceDetail
      service={service}
      path="/services/consulting/strategy"
      parent={{
        name: getService("consulting").name,
        path: "/services/consulting",
      }}
    />
  );
}
