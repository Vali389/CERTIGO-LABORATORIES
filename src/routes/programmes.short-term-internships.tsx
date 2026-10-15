import { createFileRoute } from "@tanstack/react-router";
import { ProgrammeDetail } from "@/components/detail-pages";
import { pageHead } from "@/lib/site-data";
export const Route = createFileRoute("/programmes/short-term-internships")({ head: () => pageHead("Short-term Internships", "Explore short-term internships at Certigo Laboratories in Visakhapatnam. Discuss your requirements and enquire with our team."), component: Page });
function Page() { return <ProgrammeDetail slug="short-term-internships" />; }
