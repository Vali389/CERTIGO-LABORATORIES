import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Eye, Compass, CheckCircle2, ShieldCheck, Target, Award, 
  FlaskConical, ArrowUpRight, ArrowRight, Building2, MapPin, Phone, Mail, Lock 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, EnquiryBand, SectionHeading, WhatsAppIcon } from "@/components/site";
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
            <span className="eyebrow">ABOUT CERTIGO LABORATORIES</span>
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
      {/* 2. OUR VISION, 3. OUR MISSION & QUALITY POLICY (OFFICIAL FROM CERTIGO DOCUMENTS) */}
      <section className="section gradient-section-teal">
        <div className="site-container">
          <SectionHeading 
            eyebrow="FOUNDATION, PURPOSE & QUALITY POLICY" 
            title="Our Vision, Mission &amp; Quality Commitment" 
            description="Guiding our laboratory operations, technical competence, and customer relationships through defined international standards of analytical excellence." 
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            {/* 1. Official Vision Card (Image 4) */}
            <div className="bg-card border border-border rounded-xl p-6 sm:p-7 shadow-xs flex flex-col justify-between border-t-4 border-t-teal hover:border-teal transition-all">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal/15 text-teal flex items-center justify-center flex-shrink-0">
                    <Eye size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal">OFFICIAL PURPOSE</span>
                    <h3 className="text-xl text-primary font-bold mb-0">VISION</h3>
                  </div>
                </div>
                <blockquote className="text-sm sm:text-base text-foreground font-medium italic border-l-3 border-teal pl-3.5 py-1 my-3 bg-teal/5 rounded-r leading-relaxed">
                  “To be a globally recognized leader in food and water testing, ensuring safety, quality and compliance through cutting-edge technology, expert analysis, and unwavering commitment to excellence.”
                </blockquote>
                <p className="text-xs text-muted-foreground leading-relaxed mt-4">
                  Pioneering dependable analytical standards across Andhra Pradesh and India by integrating state-of-the-art instrumentation and verified methodology.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-border/60">
                <span className="text-[11px] bg-secondary text-primary font-medium px-2 py-0.5 rounded">Cutting-Edge Tech</span>
                <span className="text-[11px] bg-secondary text-primary font-medium px-2 py-0.5 rounded">Expert Analysis</span>
                <span className="text-[11px] bg-secondary text-primary font-medium px-2 py-0.5 rounded">Excellence</span>
              </div>
            </div>

            {/* 2. Official Mission Card (Image 2) */}
            <div className="bg-card border border-border rounded-xl p-6 sm:p-7 shadow-xs flex flex-col justify-between border-t-4 border-t-brand-green hover:border-brand-green transition-all">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/15 text-brand-green flex items-center justify-center flex-shrink-0">
                    <Compass size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-green">COMMITMENT</span>
                    <h3 className="text-xl text-primary font-bold mb-0">MISSION</h3>
                  </div>
                </div>
                <blockquote className="text-sm sm:text-base text-foreground font-medium italic border-l-3 border-brand-green pl-3.5 py-1 my-3 bg-brand-green/5 rounded-r leading-relaxed">
                  “Delivering trusted, accurate, and timely testing services for food and water safety, fostering health and confidence in every sample analyzed with 'excellence'.”
                </blockquote>
                <p className="text-xs text-muted-foreground leading-relaxed mt-4">
                  Dedicated to consumer protection, public health, and industrial compliance through validated national and international testing standards.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-border/60">
                <span className="text-[11px] bg-secondary text-primary font-medium px-2 py-0.5 rounded">Food &amp; Water Safety</span>
                <span className="text-[11px] bg-secondary text-primary font-medium px-2 py-0.5 rounded">Timely Reports</span>
                <span className="text-[11px] bg-secondary text-primary font-medium px-2 py-0.5 rounded">Fostering Health</span>
              </div>
            </div>

            {/* 3. Official Quality Policy Card (Image 3) */}
            <div className="bg-card border border-border rounded-xl p-6 sm:p-7 shadow-xs flex flex-col justify-between border-t-4 border-t-primary hover:border-primary transition-all">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">ISO/IEC 17025:2017</span>
                    <h3 className="text-xl text-primary font-bold mb-0">QUALITY POLICY</h3>
                  </div>
                </div>
                <blockquote className="text-xs sm:text-sm text-foreground font-medium italic border-l-3 border-primary pl-3.5 py-1 my-3 bg-primary/5 rounded-r leading-relaxed">
                  “Certigo Laboratories Pvt Ltd. is committed to provide best laboratory services by adopting procedures, professional practices and international standards complying with the requirements of ISO/IEC 17025:2017 to the satisfaction of all concerned while ensuring integrity, confidentiality and impartiality.”
                </blockquote>
                <p className="text-xs text-muted-foreground leading-relaxed mt-4">
                  Adhering strictly to accredited standard operating procedures, calibrated instrumentation, and comprehensive data traceability.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-border/60">
                <span className="text-[11px] bg-teal/10 text-teal font-semibold px-2 py-0.5 rounded">Integrity</span>
                <span className="text-[11px] bg-teal/10 text-teal font-semibold px-2 py-0.5 rounded">Confidentiality</span>
                <span className="text-[11px] bg-teal/10 text-teal font-semibold px-2 py-0.5 rounded">Impartiality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY & TECHNICAL COMPETENCE + NABL ACCREDITATION */}
      <section className="section gradient-section-mesh">
        <div className="site-container">
          <SectionHeading 
            eyebrow="QUALITY & TECHNICAL COMPETENCE" 
            title="Rigorous Quality Management System" 
            description="Our laboratory practices adhere to recognized national and international testing standards to ensure dependable, technically sound data." 
          />

          {/* Luxury NABL Accreditation Banner with Glowing Badges & Glassmorphism */}
          <div className="luxury-nabl-banner">
            <div className="luxury-nabl-header-strip">
              <span className="nabl-glow-badge">
                <span className="nabl-pulse-dot" /> NABL ACCREDITED TESTING LABORATORY
              </span>
              <span className="nabl-iso-tag">
                ISO/IEC 17025:2017 CERTIFIED COMPLIANCE
              </span>
            </div>

            <div className="luxury-nabl-body">
              <div>
                <h3 className="luxury-nabl-title">
                  National Accreditation Board for Testing and Calibration Laboratories
                </h3>

                <div className="nabl-cert-card">
                  <span className="text-[11px] text-cyan-200 uppercase tracking-widest font-semibold mb-1">
                    Accreditation Certificate Number
                  </span>
                  <span className="nabl-cert-code">
                    {contact.nablNumber}
                  </span>
                </div>

                <p className="luxury-nabl-desc">
                  Certigo Laboratories Private Limited is formally accredited in accordance with the international standard ISO/IEC 17025:2017 for technical competence in the field of testing. Our validated test methods, calibrated equipment, and traceable certified standards guarantee reliable and legally accepted test reports across India.
                </p>

                <div className="luxury-nabl-pills-grid">
                  <div className="luxury-nabl-pill-item">
                    <ShieldCheck size={16} />
                    <span>ISO/IEC 17025:2017 Standard Compliance</span>
                  </div>
                  <div className="luxury-nabl-pill-item">
                    <Award size={16} />
                    <span>Traceable Certified Reference Standards</span>
                  </div>
                  <div className="luxury-nabl-pill-item">
                    <FlaskConical size={16} />
                    <span>Calibrated Analytical Instrumentation</span>
                  </div>
                  <div className="luxury-nabl-pill-item">
                    <Lock size={16} />
                    <span>Impartial, Confidential &amp; Audit-Ready Reports</span>
                  </div>
                </div>
              </div>

              <div className="luxury-nabl-actions">
                <Button asChild size="lg" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-lg">
                  <Link to="/contact">
                    Confirm Scope of Accreditation <ArrowUpRight size={17} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full border-cyan-400/40 text-cyan-200 hover:bg-cyan-950/60 font-semibold">
                  <a 
                    href="https://wa.me/918247442084?text=Hello%20Certigo%2C%20I%20would%20like%20to%20verify%20the%20NABL%20scope%20of%20accreditation%20for%20testing." 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-2" /> WhatsApp Consultation
                  </a>
                </Button>
              </div>
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
          <span className="eyebrow">OUR COMMITMENT</span>
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
