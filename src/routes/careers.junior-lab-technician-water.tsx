import { createFileRoute } from "@tanstack/react-router";
import { CareerDetail } from "@/components/career-detail";
import { pageHead, getJobBySlug } from "@/lib/site-data";

const job = getJobBySlug("junior-lab-technician-water");

export const Route = createFileRoute("/careers/junior-lab-technician-water")({
  head: () =>
    pageHead(
      job ? `${job.title} | Careers` : "Junior Laboratory Technician - Water Testing",
      job ? job.summary : "Apply for Junior Laboratory Technician at Certigo Laboratories Visakhapatnam."
    ),
  component: Page
});

function Page() {
  return <CareerDetail slug="junior-lab-technician-water" />;
}
