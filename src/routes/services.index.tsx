import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, EnquiryBand } from "@/components/site";
import { services, pageHead } from "@/lib/site-data";
import { ScienceIntro, ServiceShowcase } from "@/components/service-showcase";
import { SectionHeading, Steps } from "@/components/site";
export const Route = createFileRoute("/services/")({ head: () => pageHead("Testing Services", "Explore Certigo's food, water and microbiological testing enquiry services."), component: Services });
function Services(){return <><PageHero title="Laboratory Testing Services" eyebrow="SCIENCE FOR INFORMED DECISIONS" description="Explore our testing areas. Tell us about your samples, and let's discuss the right scope for your requirements." /><ScienceIntro /><ServiceShowcase /><section className="section process-section"><div className="site-container"><SectionHeading eyebrow="FROM QUESTION TO CLARITY" title="Your sample. Your scope. Your next step." description="Confirm what you need before collecting or submitting a sample."/><Steps/></div></section><EnquiryBand /></>; }
