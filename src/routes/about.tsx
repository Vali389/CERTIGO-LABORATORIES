import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Eye, Compass, CheckCircle2, ShieldCheck, Target, Award, 
  FlaskConical, ArrowUpRight, ArrowRight, Building2, MapPin, Phone, Mail 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, EnquiryBand, SectionHeading } from "@/components/site";
import { labImage, pageHead, contact, researchImage } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => pageHead(
    "About Us | Certigo Laboratories Private Limited", 
    "Learn about Certigo Laboratories Private Limited, our vision, mission, quality commitments, and NABL accredited testing facilities in Visakhapatnam."
  ),
  component: About
});

const missionPoints = [
  "To provide accurate and reliable laboratory testing services.",
  "To maintain high standards of quality and technical competence.",
  "To provide timely and professional test reports.",
  "To support customers in meeting applicable regulatory and quality requirements.",
  "To continuously improve laboratory methods and quality systems.",
  "To develop long-term relationships with customers through trust and dependable service."
];

const qualityPractices = [
  { title: "Standard Operating Procedures (SOPs)", desc: "Strict adherence to documented, validated SOPs for all testing activities." },
  { title: "Validated Test Methods", desc: "Referencing national & international protocols (BIS/IS, FSSAI, APHA, ISO, AOAC)." },
  { title: "Equipment Calibration", desc: "Routine calibration and maintenance schedules for all analytical instruments." },
  { title: "Quality Control of Results", desc: "Internal quality checks, duplicate samples, matrix spikes, and control charts." },
  { title: "Measurement Traceability", desc: "Traceability of measurements to certified reference materials and standards." },
  { title: "Proper Sample Handling", desc: "Documented chain-of-custody, sterile containers, and controlled temperature storage." },
  { title: "Personnel Competency", desc: "Continuous training, evaluation, and qualification of laboratory scientists." },
  { title: "Continuous Improvement", desc: "Regular internal audits, proficiency testing participation, and system reviews." }
];

function About() {
  return (
    <>
      <PageHero 
        title="About Certigo Laboratories" 
        eyebrow="“RELIABLE TESTING. ACCURATE RESULTS. TRUSTED QUALITY.”" 
        description="A professional laboratory providing dependable Food, Water, Microbiological, Chemical, Environmental, and Air Quality testing services in Visakhapatnam, Andhra Pradesh." 
      />

      {/* 1. COMPANY INTRODUCTION */}
      <section className="section gradient-section-mesh">
        <div className="site-container editorial-split">
          <div>
            <span className="eyebrow">1. ABOUT CERTIGO LABORATORIES</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-5 leading-tight">
              Quality-Focused Testing &amp;<br />
              <span className="text-teal">Environmental Monitoring</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
              Certigo Laboratories Private Limited is a professional laboratory providing reliable and quality-focused Food, Water, Microbiological, Chemical, Environmental and Air Quality Testing Services.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              We serve food industries, manufacturing units, hotels, institutions, water treatment facilities, residential communities and other organizations requiring dependable laboratory testing and quality monitoring services.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Our objective is to provide accurate, reliable and timely test results using appropriate standard methods and established laboratory quality practices. Certigo Laboratories is committed to supporting customers in maintaining food safety, water quality, environmental compliance and product quality.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-teal hover:bg-teal/90 text-white">
                <Link to="/quote">Request a Testing Quote <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Explore Our Services <ArrowUpRight /></Link>
              </Button>
            </div>
          </div>

          <figure className="editorial-photo shadow-lg">
            <img 
              src={researchImage} 
              width={1200} 
              height={900} 
              loading="lazy" 
              alt="Certigo Laboratories modern testing analytical facility" 
            />
            <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 bg-primary/85 backdrop-blur-sm border border-teal/40 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
              <ShieldCheck size={14} className="text-teal" /> NABL ACCREDITED FACILITY
            </div>
            <figcaption>
              <div>
                <span>VISAKHAPATNAM, ANDHRA PRADESH</span>
                <strong>State-of-the-Art Analytical Facility</strong>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2. OUR VISION & 3. OUR MISSION */}
      <section className="section gradient-section-teal">
        <div className="site-container">
          <SectionHeading 
            eyebrow="FOUNDATION & PURPOSE" 
            title="Our Vision &amp; Mission" 
            description="Guiding our laboratory operations, technical competence, and customer relationships through defined standards of excellence." 
          />

          <div className="about-mission-grid mt-10">
            {/* 2. Our Vision Card */}
            <div className="mission-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal/15 text-teal flex items-center justify-center flex-shrink-0">
                  <Eye size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal">CORE PURPOSE</span>
                  <h3 className="text-2xl text-primary font-bold mb-0">2. Our Vision</h3>
                </div>
              </div>
              <p className="text-base text-foreground font-medium italic border-l-4 border-teal pl-4 py-1 my-4 bg-teal/5 rounded-r">
                “To become a trusted and preferred laboratory testing partner by delivering technical excellence, accurate results, customer satisfaction and continuous improvement.”
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                At Certigo Laboratories, we envision being the foremost analytical benchmark for industries and public health across Andhra Pradesh and India by integrating modern instrumentation, rigorous quality systems, and transparent client reporting.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="service-grid-card-tag">Technical Excellence</span>
                <span className="service-grid-card-tag">Accurate Results</span>
                <span className="service-grid-card-tag">Customer Satisfaction</span>
                <span className="service-grid-card-tag">Continuous Improvement</span>
              </div>
            </div>

            {/* 3. Our Mission Card */}
            <div className="mission-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green/15 text-brand-green flex items-center justify-center flex-shrink-0">
                  <Compass size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-green">COMMITMENTS</span>
                  <h3 className="text-2xl text-primary font-bold mb-0">3. Our Mission</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Certigo Laboratories Private Limited is committed to executing technically sound testing services through these strategic objectives:
              </p>
              <ul className="mission-list">
                {missionPoints.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={16} className="text-brand-green flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUALITY & TECHNICAL COMPETENCE + NABL ACCREDITATION */}
      <section className="section bg-background">
        <div className="site-container">
          <SectionHeading 
            eyebrow="7. QUALITY & TECHNICAL COMPETENCE" 
            title="Rigorous Quality Management System" 
            description="Our laboratory practices adhere to recognized national and international testing standards to ensure dependable, technically sound data." 
          />

          {/* NABL Banner */}
          <div className="nabl-accreditation-banner">
            <div>
              <div className="nabl-badge-pill">
                <ShieldCheck size={16} /> NABL ACCREDITED LABORATORY
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                NABL Accreditation No.: <span className="nabl-reg-code">{contact.nablNumber}</span>
              </h3>
              <p className="text-white/85 text-sm max-w-2xl leading-relaxed mb-0">
                Certigo Laboratories Private Limited is committed to maintaining the applicable requirements of its NABL accreditation and providing technically competent testing services within its approved scope.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">
                  Confirm Scope of Accreditation <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quality Practices 8-grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {qualityPractices.map((qp) => (
              <div key={qp.title} className="p-5 rounded-xl border border-border bg-card shadow-xs hover:border-teal transition-colors">
                <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center mb-3">
                  <Award size={18} />
                </div>
                <h4 className="font-bold text-primary text-sm mb-1.5">{qp.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{qp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR COMMITMENT */}
      <section className="section gradient-section-mesh">
        <div className="site-container text-center max-w-3xl mx-auto">
          <span className="eyebrow">12. OUR COMMITMENT</span>
          <h2 className="text-3xl font-serif text-primary mb-4">Dedicated to Food Safety &amp; Public Health</h2>
          <p className="text-base text-muted-foreground leading-relaxed italic mb-8">
            “At Certigo Laboratories Private Limited, we believe that reliable laboratory testing plays an important role in protecting food safety, public health, water quality and the environment. We are committed to continuously improving our laboratory systems, technical competence and customer service to provide dependable testing support to our customers.”
          </p>
          <div className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-xs font-semibold">
            <ShieldCheck size={16} className="text-teal" /> Visakhapatnam, Andhra Pradesh · NABL Accredited
          </div>
        </div>
      </section>

      <EnquiryBand />
    </>
  );
}
