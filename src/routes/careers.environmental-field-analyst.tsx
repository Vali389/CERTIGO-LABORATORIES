import { createFileRoute } from "@tanstack/react-router";
import { CareerDetail } from "@/components/career-detail";
import { pageHead, getJobBySlug } from "@/lib/site-data";

const job = getJobBySlug("environmental-field-analyst");

export const Route = createFileRoute("/careers/environmental-field-analyst")({
  head: () =>
    pageHead(
      job ? `${job.title} | Careers` : "Environmental Field & Stack Monitoring Analyst",
      job ? job.summary : "Apply for Environmental Field Analyst at Certigo Laboratories Visakhapatnam."
    ),
  component: Page
});

function Page() {
  return <CareerDetail slug="environmental-field-analyst" />;
}
