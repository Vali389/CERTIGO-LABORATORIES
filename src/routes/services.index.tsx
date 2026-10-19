import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, EnquiryBand, SectionHeading, Steps } from "@/components/site";
import { services, pageHead, allTestingServicesImage } from "@/lib/site-data";
import { ScienceIntro } from "@/components/service-showcase";

export const Route = createFileRoute("/services/")({
  head: () => pageHead(
    "Laboratory Testing Services | Certigo Laboratories",
    "Explore Certigo's NABL accredited Food, Water, Microbiological, Chemical, Environmental, and Air Quality testing services in Visakhapatnam."
  ),
  component: Services
});

const serviceBadgeColors: Record<string, string> = {
  "environmental-testing": "#39B54A",
  "air-quality-testing": "#08AFC1",
  "water-testing": "#08AFC1",
  "food-testing": "#39B54A",
  "microbiological-testing": "#064B83",
  "chemical-testing": "#08AFC1"
};

function Services() {
  return (
    <>
      <PageHero
        title="Laboratory Testing Services"
        eyebrow="SCIENCE FOR INFORMED DECISIONS"
        description="Comprehensive testing for quality, nutrition, statutory safety, and environmental regulatory compliance. Accurate, traceable, and NABL accredited."
        image={allTestingServicesImage}
      />

      <ScienceIntro />

      {/* Modern, Rich 6 Testing Services Showcase Grid */}
      <section className="section bg-[#F0FAFD] border-y border-[#DDF5F8]">
        <div className="site-container">
          <SectionHeading
            eyebrow="SPECIALIZED TESTING CAPABILITIES"
            title="Accredited Analytical Services"
            description="Operating to ISO/IEC 17025:2017 standards. Select your testing domain below to review scope parameters, methodology, sample requirements, and turnaround timelines."
          />

          <div className="service-cards-grid mt-10">
            {services.map((s) => (
              <Link to={s.path} className="service-grid-card group" key={s.slug}>
                {/* Top media container with floating badge and title on image */}
                <div className="service-grid-card-media">
                  <img
                    src={s.image}
                    alt={`Illustrative ${s.title.toLowerCase()} laboratory scene`}
                    width={600}
                    height={380}
                    loading="lazy"
                  />
                  <div
                    className="service-grid-card-icon"
                    style={{ backgroundColor: serviceBadgeColors[s.slug] || "#064B83" }}
                    aria-hidden="true"
                  >
                    <s.icon size={20} />
                  </div>
                  <div className="service-grid-card-gradient" />
                  <h3 className="service-grid-card-title">{s.title}</h3>
                </div>

                {/* Card body below image */}
                <div className="service-grid-card-body">
                  <span className="service-grid-card-eyebrow">{s.label}</span>
                  <p className="service-grid-card-desc">{s.description}</p>

                  {/* Parameter & Scope Tags */}
                  <div className="service-grid-card-tags">
                    {s.tags.slice(0, 4).map((tag) => (
                      <span className="service-grid-card-tag" key={tag}>{tag}</span>
                    ))}
                  </div>

                  {/* Explore link indicator */}
                  <span className="service-grid-card-link">
                    Explore Scope &amp; Parameters <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-white border border-[#DDF5F8] text-center max-w-3xl mx-auto shadow-sm">
            <div className="inline-flex items-center gap-2 text-teal font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles size={16} /> Certified Quality Control &amp; Traceable Analytics
            </div>
            <h4 className="text-lg font-bold text-primary mb-2">Need a Customized Testing Scope or Batch Quote?</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
              Our analytical chemists help define testing parameters based on your statutory compliance goals, whether FSSAI, BIS/IS, CPCB, APPCB, or export specifications.
            </p>
            <Button asChild size="lg" className="bg-[#39B54A] hover:bg-[#2ea642] text-white font-bold rounded-full px-8 shadow-md">
              <Link to="/quote">
                Request a Custom Quote <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testing Workflow Section */}
      <section className="section process-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="FROM QUESTION TO CLARITY"
            title="Your sample. Your scope. Your next step."
            description="Confirm your parameter scope and preservation needs before collecting or submitting a sample."
          />
          <Steps />
        </div>
      </section>

      <EnquiryBand />
    </>
  );
}
