import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/detail-pages";
import { pageHead } from "@/lib/site-data";

export const Route = createFileRoute("/services/environmental-testing")({
  head: () => pageHead("Environmental Testing", "Environmental monitoring, wastewater effluent, soil, and sludge testing at Certigo Laboratories in Visakhapatnam."),
  component: Page
});

function Page() {
  return <ServiceDetail slug="environmental-testing" />;
}
