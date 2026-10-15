import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/detail-pages";
import { pageHead } from "@/lib/site-data";
export const Route = createFileRoute("/services/water-testing")({ head: () => pageHead("Water Testing", "Explore water testing at Certigo Laboratories in Visakhapatnam. Discuss your requirements and enquire with our team."), component: Page });
function Page() { return <ServiceDetail slug="water-testing" />; }
