import { createFileRoute } from "@tanstack/react-router";
import { CareerDetail } from "@/components/career-detail";
import { pageHead, getJobBySlug } from "@/lib/site-data";

const job = getJobBySlug("quality-assurance-nabl-officer");

export const Route = createFileRoute("/careers/quality-assurance-nabl-officer")({
  head: () =>
    pageHead(
      job ? `${job.title} | Careers` : "Quality Assurance Officer (NABL & ISO 17025)",
      job ? job.summary : "Apply for Quality Assurance Officer at Certigo Laboratories Visakhapatnam."
    ),
  component: Page
});

function Page() {
  return <CareerDetail slug="quality-assurance-nabl-officer" />;
}
