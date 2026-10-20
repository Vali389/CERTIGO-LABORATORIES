import { createFileRoute } from "@tanstack/react-router";
import { CareerDetail } from "@/components/career-detail";
import { pageHead, getJobBySlug } from "@/lib/site-data";

const job = getJobBySlug("food-safety-lab-analyst");

export const Route = createFileRoute("/careers/food-safety-lab-analyst")({
  head: () =>
    pageHead(
      job ? `${job.title} | Careers` : "Food Safety & Wet Chemistry Analyst",
      job ? job.summary : "Apply for Food Safety Analyst at Certigo Laboratories Visakhapatnam."
    ),
  component: Page
});

function Page() {
  return <CareerDetail slug="food-safety-lab-analyst" />;
}
