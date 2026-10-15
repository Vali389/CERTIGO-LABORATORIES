import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/detail-pages";
import { pageHead } from "@/lib/site-data";

export const Route = createFileRoute("/services/air-quality-testing")({
  head: () => pageHead("Air Quality Testing", "Ambient air quality, industrial stack emission, and indoor air testing at Certigo Laboratories in Visakhapatnam."),
  component: Page
});

function Page() {
  return <ServiceDetail slug="air-quality-testing" />;
}
