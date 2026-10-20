import { createFileRoute } from "@tanstack/react-router";
import { CareerDetail } from "@/components/career-detail";
import { pageHead, getJobBySlug } from "@/lib/site-data";

const job = getJobBySlug("analytical-chemist-spectroscopy");

export const Route = createFileRoute("/careers/analytical-chemist-spectroscopy")({
  head: () =>
    pageHead(
      job ? `${job.title} | Careers` : "Analytical Chemist - Instrumental Analysis",
      job ? job.summary : "Apply for Analytical Chemist at Certigo Laboratories Visakhapatnam."
    ),
  component: Page
});

function Page() {
  return <CareerDetail slug="analytical-chemist-spectroscopy" />;
}
