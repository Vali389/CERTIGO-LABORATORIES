import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowUpRight, ArrowRight, Check, ShieldCheck, FlaskConical, GraduationCap, 
  Leaf, MessagesSquare, Target, Clock, Award, Lock, Layers, Eye, Compass, 
  Building2, Droplets, Apple, Microscope, Wind, Phone, Mail, MapPin, 
  CheckCircle2, FileText, ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site";
import { 
  services, programmes, labImage, pageHead, contact, 
  standardsList 
} from "@/lib/site-data";

export const Route = createFileRoute("/")({ 
  head: () => pageHead(
    "NABL Accredited Laboratory | Food, Water & Environmental Testing", 
    "Certigo Laboratories Private Limited (NABL: NABLT0626AD18278) provides professional Food, Water, Microbiological, Chemical, Environmental, and Air Quality testing services in Visakhapatnam."
  ), 
  component: Home 
});

const whyPillars = [
  {
    icon: Target,
    title: "Accuracy",
    desc: "We focus on generating dependable and technically sound test results using validated standard methods."
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "We follow systematic laboratory procedures, internal quality checks, and rigorous quality-control practices."
  },
  {
    icon: Clock,
    title: "Timely Service",
    desc: "We understand the importance of timely testing and reporting for your production and regulatory schedules."
  },
  {
    icon: Award,
    title: "Technical Expertise",
    desc: "Our laboratory personnel follow established testing procedures, standard operating protocols, and calibration."
  },
  {
    icon: MessagesSquare,
    title: "Customer Support",
    desc: "We work closely with customers to understand their testing requirements and provide appropriate testing solutions."
  },
  {
    icon: Lock,
    title: "Confidentiality",
    desc: "Customer information, sample data, and test results are handled with the highest standards of confidentiality."
  },
  {
    icon: Layers,
    title: "Comprehensive Testing",
    desc: "Our integrated laboratory covers Food, Water, Microbiology, Chemical, Environmental, and Air Quality Testing."
  }
];

const industries = [
  { name: "Food Processing Industries", icon: Apple },
  { name: "Dairy & Milk Processing Plants", icon: FlaskConical },
  { name: "Beverage & Juice Bottling Plants", icon: Droplets },
  { name: "Packaged Drinking Water Plants", icon: Droplets },
  { name: "RO Water Suppliers & Facilities", icon: Droplets },
  { name: "Hotels, Resorts & Restaurants", icon: Building2 },
  { name: "Commercial Catering & Canteens", icon: Building2 },
  { name: "Manufacturing & Industrial Units", icon: Building2 },
  { name: "Pharmaceutical & Allied Units", icon: FlaskConical },
  { name: "Hospitals & Healthcare Facilities", icon: ShieldCheck },
  { name: "Educational & Research Institutions", icon: GraduationCap },
  { name: "Apartments & Residential Communities", icon: Building2 },
  { name: "Construction & Infrastructure Projects", icon: Building2 },
  { name: "Government & Private Organizations", icon: Award }
];

const sampleSupportSteps = [
  {
    step: "01",
    title: "Parameter Selection & Guidance",
    desc: "Consult our technical team on sample submission guidance, regulatory testing requirements (BIS, FSSAI, CPCB), and selecting the right testing parameters."
  },
  {
    step: "02",
    title: "Collection & Preservation",
    desc: "Follow standardized protocols for sample collection, appropriate container selection, temperature preservation, and chain of custody documentation."
  },
  {
    step: "03",
    title: "Validated Laboratory Testing",
    desc: "Analysis conducted using validated test methods (BIS/IS, FSSAI, APHA, ISO, AOAC), calibrated equipment, and standard operating procedures (SOPs)."
  },
  {
    step: "04",
    title: "Timely Reporting & Interpretation",
    desc: "Receive prompt, official test reports complete with measurement traceability, quality checks, and technical report interpretation support."
  }
];

const missionPoints = [
  "To provide accurate and reliable laboratory testing services.",
  "To maintain high standards of quality and technical competence.",
  "To provide timely and professional test reports.",
  "To support customers in meeting applicable regulatory and quality requirements.",
  "To continuously improve laboratory methods and quality systems.",
  "To develop long-term relationships with customers through trust and dependable service."
];

// Badge colors matching the reference UI style
const serviceBadgeColors: Record<string, string> = {
  "food-testing": "#00A3C4",
  "water-testing": "#023160",
  "microbiological-testing": "#059669",
  "chemical-testing": "#2563eb",
  "environmental-testing": "#0d9488",
  "air-quality-testing": "#6366f1"
};

function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="home-hero">
        <img 
          className="hero-photo" 
          src={labImage} 
          alt="Modern testing laboratory at Certigo Laboratories" 
          width={1920} 
          height={1024} 
          fetchPriority="high" 
        />
        <div className="hero-wash" />
        <div className="site-container hero-content">
          <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal text-teal-light px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
            <ShieldCheck size={14} /> NABL ACCREDITATION NO.: NABLT0626AD18278
          </div>
          <h1>Certigo Laboratories</h1>
          <div className="hero-statement">
            “Reliable Testing. Accurate Results.<br />
            <em>Trusted Quality.”</em>
          </div>
          <p>
            Professional laboratory testing services for Food, Water, Microbiological, Chemical, Environmental and Air Quality monitoring — supporting industries, institutions, and communities.
          </p>
          <div className="hero-buttons">
            <Button asChild size="lg">
              <Link to="/services">
                Explore Testing Services <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/quote">
                Request a Testing Quote <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="hero-signoff">
            <ShieldCheck size={15} />
            <span>NABL Accredited (NABLT0626AD18278) <span className="mx-2">|</span> Visakhapatnam, Andhra Pradesh</span>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="trust-strip">
        <div className="site-container trust-grid">
          <div className="trust-intro">
            NABL Accredited Testing Facility.<br />
            <strong className="text-primary font-medium">Accurate. Reliable. Trusted.</strong>
          </div>
          {[
            { icon: ShieldCheck, title: "NABL Accreditation", text: "No.: NABLT0626AD18278" },
            { icon: FlaskConical, title: "6 Core Disciplines", text: "Food · Water · Micro · Chem · Env · Air" },
            { icon: Award, title: "Standard Methods", text: "BIS · FSSAI · APHA · ISO · AOAC" }
          ].map((item) => (
            <div className="trust-item" key={item.title}>
              <item.icon />
              <div>
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECTION: ABOUT CERTIGO LABORATORIES & VISION / MISSION */}
      <section className="section bg-background">
        <div className="site-container">
          <SectionHeading 
            eyebrow="1. ABOUT CERTIGO LABORATORIES"
            title="Dependable Laboratory Testing & Quality Monitoring"
            description="Certigo Laboratories Private Limited is a professional laboratory providing reliable and quality-focused Food, Water, Microbiological, Chemical, Environmental and Air Quality Testing Services. We serve food industries, manufacturing units, hotels, institutions, water treatment facilities, residential communities and organizations requiring dependable laboratory testing."
          />

          <div className="about-mission-grid mt-10">
            {/* Vision Card */}
            <div className="mission-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal/15 text-teal flex items-center justify-center">
                  <Eye size={22} />
                </div>
                <h3 className="mb-0">2. Our Vision</h3>
              </div>
              <p className="text-base text-foreground font-medium italic">
                “To become a trusted and preferred laboratory testing partner by delivering technical excellence, accurate results, customer satisfaction and continuous improvement.”
              </p>
              <p>
                Our objective is to provide accurate, reliable and timely test results using appropriate standard methods and established laboratory quality practices, supporting customers in maintaining food safety, water quality, environmental compliance and product quality.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="service-grid-card-tag">Technical Excellence</span>
                <span className="service-grid-card-tag">Accurate Results</span>
                <span className="service-grid-card-tag">Customer Satisfaction</span>
                <span className="service-grid-card-tag">Continuous Improvement</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="mission-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Compass size={22} />
                </div>
                <h3 className="mb-0">3. Our Mission</h3>
              </div>
              <p>
                Certigo Laboratories is committed to technical excellence and dependable service across every parameter:
              </p>
              <ul className="mission-list">
                {missionPoints.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={16} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: OUR TESTING SERVICES (CARD UI MATCHING USER REFERENCE IMAGE 2) */}
      <section className="section bg-secondary/35" id="services">
        <div className="site-container">
          <SectionHeading 
            eyebrow="4. OUR TESTING SERVICES"
            title="The Right Solutions. Real Possibilities."
            description="From everyday essentials to comprehensive environmental compliance, we bring technical excellence that supports your quality and regulatory requirements."
          />

          {/* 6 Cards Grid exactly matching user reference Image 2 */}
          <div className="service-cards-grid">
            {services.map((s) => (
              <article className="service-grid-card" key={s.slug}>
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
                    style={{ backgroundColor: serviceBadgeColors[s.slug] || "#023160" }} 
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

                  {/* Explore link */}
                  <Link className="service-grid-card-link" to={s.path}>
                    Explore Service <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                View Detailed Testing Capabilities <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. SECTION: QUALITY & TECHNICAL COMPETENCE + NABL ACCREDITATION */}
      <section className="section bg-background">
        <div className="site-container">
          <SectionHeading 
            eyebrow="7. QUALITY & TECHNICAL COMPETENCE"
            title="NABL Accreditation & Validated Standards"
            description="Certigo Laboratories is committed to maintaining a strong quality management system and technically competent laboratory operations."
          />

          {/* Premium NABL Accreditation Banner */}
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

          {/* Standards & Test Methods Grid */}
          <div className="mb-6">
            <h3 className="text-center text-xl font-bold text-primary mb-2">8. Standards & Recognized Test Methods</h3>
            <p className="text-center text-muted-foreground text-sm max-w-xl mx-auto mb-8">
              Depending on the sample, parameter and applicable requirement, testing is carried out with reference to recognized national and international methods:
            </p>
          </div>

          <div className="standards-grid">
            {standardsList.map((std) => (
              <div className="standard-card" key={std.name}>
                <div className="flex items-center gap-2 mb-2">
                  <FileText size={18} className="text-teal" />
                  <h4>{std.name}</h4>
                </div>
                <p>{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION: INDUSTRIES & SECTORS WE SERVE */}
      <section className="section bg-secondary/35">
        <div className="site-container">
          <SectionHeading 
            eyebrow="9. INDUSTRIES & SECTORS WE SERVE"
            title="Trusted Testing Partner Across Diverse Sectors"
            description="Our specialized laboratory testing and quality monitoring services support businesses, institutions, and communities in meeting regulatory compliance and product quality standards."
          />

          <div className="industries-grid">
            {industries.map((ind) => (
              <div className="industry-pill" key={ind.name}>
                <ind.icon size={16} />
                <span>{ind.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">
              Whether you need routine quality checks, regulatory compliance testing, or periodic monitoring programs, Certigo Laboratories delivers dependable testing support.
            </p>
          </div>
        </div>
      </section>

      {/* 7. SECTION: WHY CHOOSE CERTIGO LABORATORIES? (7 PILLARS) */}
      <section className="section bg-background">
        <div className="site-container">
          <SectionHeading 
            eyebrow="10. WHY CHOOSE CERTIGO LABORATORIES?"
            title="Technical Excellence You Can Depend On"
            description="We focus on generating dependable and technically sound test results through systematic procedures and client-focused service."
          />

          <div className="why-pillars-grid">
            {whyPillars.map((p) => (
              <div className="why-pillar-card" key={p.title}>
                <div className="why-pillar-icon-box">
                  <p.icon size={22} />
                </div>
                <div className="why-pillar-text">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECTION: SAMPLE COLLECTION & TESTING SUPPORT WORKFLOW */}
      <section className="section bg-secondary/35">
        <div className="site-container">
          <SectionHeading 
            eyebrow="11. SAMPLE COLLECTION & TESTING SUPPORT"
            title="Streamlined Workflow From Sample to Certified Report"
            description="Depending on service availability and customer requirements, Certigo Laboratories provides structured support across the entire testing cycle."
          />

          <div className="steps-grid">
            {sampleSupportSteps.map((s) => (
              <div className="step" key={s.step}>
                <span className="step-number">{s.step}</span>
                <ArrowRight className="step-arrow" size={20} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-background border border-border text-center max-w-3xl mx-auto">
            <h4 className="text-base font-bold text-primary mb-2">12. Our Commitment</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-0">
              “At Certigo Laboratories Private Limited, we believe that reliable laboratory testing plays an important role in protecting food safety, public health, water quality and the environment. We are committed to continuously improving our laboratory systems, technical competence and customer service to provide dependable testing support to our customers.”
            </p>
          </div>
        </div>
      </section>

      {/* 9. SECTION: STUDENT PROGRAMMES & PRACTICAL LEARNING */}
      <section className="section bg-background">
        <div className="site-container">
          <SectionHeading 
            eyebrow="STUDENT PROGRAMMES"
            title="Where Curiosity Meets Practical Science"
            description="Take your learning beyond textbooks. Explore laboratory internships and academic project opportunities at Certigo Laboratories in Visakhapatnam."
          />

          <div className="programme-grid">
            {programmes.map((p, i) => (
              <article className="programme-card" key={p.slug}>
                <div className="programme-top">
                  <span className="programme-icon">
                    <p.icon size={24} />
                  </span>
                  <span className="programme-index">0{i + 1}</span>
                </div>
                <span className="eyebrow">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <Link className="text-link" to={p.path}>
                  Discover the programme <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SECTION: DUAL CTA */}
      <section className="section py-0">
        <div className="site-container dual-cta">
          <div>
            <span className="eyebrow">FOR BUSINESSES & ORGANISATIONS</span>
            <h2>Let's talk about your testing needs.</h2>
            <p>Share your sample details and request a tailored quotation under applicable BIS, FSSAI, or environmental standards.</p>
            <Button asChild variant="secondary">
              <Link to="/quote">
                Request a Quote <ArrowRight />
              </Link>
            </Button>
          </div>
          <div>
            <span className="eyebrow">FOR THE SCIENTISTS OF TOMORROW</span>
            <h2>Your next scientific chapter starts here.</h2>
            <p>Explore practical internships and BSc/MSc dissertation support that fit your academic journey.</p>
            <Button asChild>
              <Link to="/apply">
                Apply for a Programme <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 11. SECTION: OFFICIAL CONTACT DETAILS & ADDRESS */}
      <section className="section bg-secondary/50 border-t border-border">
        <div className="site-container">
          <SectionHeading 
            eyebrow="13. CONTACT US"
            title="Certigo Laboratories Private Limited"
            description="“Reliable Testing. Accurate Results. Trusted Quality.”"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-background border border-border rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-teal/15 text-teal flex items-center justify-center mx-auto mb-4">
                <MapPin size={22} />
              </div>
              <h4 className="font-bold text-primary mb-2">Laboratory Address</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {contact.address}
              </p>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Phone size={22} />
              </div>
              <h4 className="font-bold text-primary mb-2">Direct Contact</h4>
              <p className="text-sm font-semibold text-primary mb-1">
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
              <p className="text-xs text-muted-foreground">
                Landline: <a href="tel:08914568391">{contact.landline}</a>
              </p>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center mx-auto mb-4">
                <Mail size={22} />
              </div>
              <h4 className="font-bold text-primary mb-2">Email & Accreditation</h4>
              <p className="text-sm font-semibold text-primary mb-1">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p className="text-xs text-muted-foreground">
                NABL No.: <span className="font-mono font-bold text-foreground">{contact.nablNumber}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
