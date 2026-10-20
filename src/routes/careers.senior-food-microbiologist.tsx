import { createFileRoute } from "@tanstack/react-router";
import { CareerDetail } from "@/components/career-detail";
import { pageHead, getJobBySlug } from "@/lib/site-data";

const job = getJobBySlug("senior-food-microbiologist");

export const Route = createFileRoute("/careers/senior-food-microbiologist")({
  head: () =>
    pageHead(
      job ? `${job.title} | Careers` : "Senior Food & Water Microbiologist",
      job ? job.summary : "Apply for Senior Food & Water Microbiologist at Certigo Laboratories Visakhapatnam."
    ),
  component: Page
});

function Page() {
  return <CareerDetail slug="senior-food-microbiologist" />;
}
