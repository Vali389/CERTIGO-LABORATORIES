import { createFileRoute } from "@tanstack/react-router";
import { ProgrammeDetail } from "@/components/detail-pages";
import { pageHead } from "@/lib/site-data";
export const Route = createFileRoute("/programmes/long-term-internships")({ head: () => pageHead("Long-term Internships", "Explore long-term internships at Certigo Laboratories in Visakhapatnam. Discuss your requirements and enquire with our team."), component: Page });
function Page() { return <ProgrammeDetail slug="long-term-internships" />; }
