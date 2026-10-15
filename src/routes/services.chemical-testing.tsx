import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/detail-pages";
import { pageHead } from "@/lib/site-data";

export const Route = createFileRoute("/services/chemical-testing")({
  head: () => pageHead("Chemical Testing", "Precise analytical chemistry, heavy metals, proximate analysis, and purity assays at Certigo Laboratories in Visakhapatnam."),
  component: Page
});

function Page() {
  return <ServiceDetail slug="chemical-testing" />;
}
