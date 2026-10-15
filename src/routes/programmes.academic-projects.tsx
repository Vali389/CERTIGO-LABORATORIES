import { createFileRoute } from "@tanstack/react-router";
import { ProgrammeDetail } from "@/components/detail-pages";
import { pageHead } from "@/lib/site-data";
export const Route = createFileRoute("/programmes/academic-projects")({ head: () => pageHead("BSc / MSc Academic Projects", "Explore bsc / msc academic projects at Certigo Laboratories in Visakhapatnam. Discuss your requirements and enquire with our team."), component: Page });
function Page() { return <ProgrammeDetail slug="academic-projects" />; }
