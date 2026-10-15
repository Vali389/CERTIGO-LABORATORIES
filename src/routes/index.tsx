import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowUpRight, ArrowRight, Check, ShieldCheck, FlaskConical, GraduationCap, 
  Leaf, MessagesSquare, Target, Clock, Award, Lock, Layers, Eye, Compass, 
  Building2, Droplets, Apple, Microscope, Wind, Phone, Mail, MapPin, 
  CheckCircle2, FileText, ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, WhatsAppIcon } from "@/components/site";
import { 
  services, programmes, labImage, pageHead, contact, 
  standardsList, researchImage 
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

const industriesRow1 = [
  { name: "Food Processing Industries", sub: "Quality & FSSAI Standards", icon: Apple, green: false },
  { name: "Dairy & Milk Processing Plants", sub: "Microbiological & Purity", icon: FlaskConical, green: true },
  { name: "Beverage & Juice Bottling Plants", sub: "Water & Quality Testing", icon: Droplets, green: false },
  { name: "Meat Processing Industries", sub: "Pathogen Screening", icon: ShieldCheck, green: true },
  { name: "Packaged Drinking Water Plants", sub: "IS 10500 Compliance", icon: Droplets, green: false },
  { name: "RO Water Suppliers & Facilities", sub: "Physical & Chemical Analysis", icon: Droplets, green: true },
  { name: "Hotels, Resorts & Restaurants", sub: "Food Safety & Hygiene", icon: Building2, green: false }
];

const industriesRow2 = [
  { name: "Commercial Catering & Canteens", sub: "Hygiene & Safety Monitoring", icon: Building2, green: true },
  { name: "Manufacturing & Industrial Units", sub: "Effluent & Emission Testing", icon: Building2, green: false },
  { name: "Pharmaceutical & Allied Units", sub: "Chemical Assays & Water", icon: FlaskConical, green: true },
  { name: "Hospitals & Healthcare Facilities", sub: "Air Quality & Water Safety", icon: ShieldCheck, green: false },
  { name: "Educational & Research Units", sub: "Testing & Academic Projects", icon: GraduationCap, green: true },
  { name: "Apartments & Residential Communities", sub: "Drinking Water Quality", icon: Building2, green: false },
  { name: "Construction & Infrastructure Projects", sub: "Environmental Monitoring", icon: Building2, green: true }
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

// Badge colors matching the Certigo Logo Palette (Navy #133552, Cyan #00A8B5, Green #6EA236)
const serviceBadgeColors: Record<string, string> = {
  "food-testing": "#00A8B5",
  "water-testing": "#133552",
  "microbiological-testing": "#6EA236",
  "chemical-testing": "#0284c7",
  "environmental-testing": "#0d9488",
  "air-quality-testing": "#4f46e5"
};

function Home() {
  return (
    <>
      {/* 1. HERO SECTION WITH RICH GRADIENT WASH OVERLAY */}
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
          <div className="inline-flex items-center gap-2 bg-teal/20 backdrop-blur-sm border border-teal text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
            <ShieldCheck size={15} className="text-brand-green" /> NABL ACCREDITATION NO.: {contact.nablNumber}
          </div>
          <h1>Certigo Laboratories</h1>
          <div className="hero-statement">
            “Reliable Testing. Accurate Results.<br />
            <em className="text-teal font-normal">Trusted Quality.”</em>
          </div>
          <p>
            Professional laboratory testing services for Food, Water, Microbiological, Chemical, Environmental and Air Quality monitoring — supporting industries, institutions, and communities.
          </p>
          <div className="hero-buttons">
            <Button asChild size="lg" className="bg-teal hover:bg-teal/90 text-white shadow-md">
              <Link to="/services">
                Explore Testing Services <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/50 text-white hover:bg-white hover:text-primary">
              <Link to="/quote">
                Request a Testing Quote <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="hero-signoff">
            <ShieldCheck size={15} className="text-brand-green" />
            <span>NABL Accredited ({contact.nablNumber}) <span className="mx-2">|</span> Visakhapatnam, Andhra Pradesh</span>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP WITH REFINED GRADIENT TINT */}
      <section className="trust-strip">
        <div className="site-container trust-grid">
          <div className="trust-intro">
            NABL Accredited Testing Facility.<br />
            <strong className="text-primary font-medium">Accurate. Reliable. Trusted.</strong>
          </div>
          {[
            { icon: ShieldCheck, title: "NABL Accreditation", text: `No.: ${contact.nablNumber}`, color: "text-brand-green" },
            { icon: FlaskConical, title: "6 Core Disciplines", text: "Food · Water · Micro · Chem · Env · Air", color: "text-teal" },
            { icon: Award, title: "Standard Methods", text: "BIS · FSSAI · APHA · ISO · AOAC", color: "text-primary" }
          ].map((item) => (
            <div className="trust-item" key={item.title}>
              <item.icon className={item.color} />
              <div>
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECTION 1: ABOUT CERTIGO LABORATORIES (EDITORIAL SPLIT: LEFT CONTENT, RIGHT IMAGE) */}
      <section className="section gradient-section-mesh">
        <div className="site-container editorial-split">
          <div>
            <span className="eyebrow">1. ABOUT CERTIGO LABORATORIES</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-4 leading-tight">
              “Reliable Testing. Accurate Results.<br />
              <span className="text-teal font-normal">Trusted Quality.”</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
              Certigo Laboratories Private Limited is a professional laboratory providing reliable and quality-focused Food, Water, Microbiological, Chemical, Environmental and Air Quality Testing Services.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We serve food industries, manufacturing units, hotels, institutions, water treatment facilities, residential communities and other organizations requiring dependable laboratory testing and quality monitoring services. Our objective is to provide accurate, reliable and timely test results using appropriate standard methods and established laboratory quality practices.
            </p>

            {/* 3 Pillars Highlight matching logo colors */}
            <div className="intro-pillars mb-8">
              <div className="intro-pillar-item">
                <div className="intro-pillar-icon" style={{ background: "rgba(0,168,181,0.12)", color: "#00A8B5" }}>
                  <FlaskConical size={20} />
                </div>
                <div className="intro-pillar-content">
                  <strong>Testing with Purpose</strong>
                  <small>Food, Water, Microbiological, Chemical &amp; Environmental testing</small>
                </div>
              </div>
              <div className="intro-pillar-item">
                <div className="intro-pillar-icon" style={{ background: "rgba(110,162,54,0.14)", color: "#6EA236" }}>
                  <ShieldCheck size={20} />
                </div>
                <div className="intro-pillar-content">
                  <strong>Technical Competence &amp; Quality</strong>
                  <small>NABL Accreditation No. {contact.nablNumber} &amp; calibrated instrumentation</small>
                </div>
              </div>
              <div className="intro-pillar-item">
                <div className="intro-pillar-icon" style={{ background: "rgba(19,53,82,0.1)", color: "#133552" }}>
                  <GraduationCap size={20} />
                </div>
                <div className="intro-pillar-content">
                  <strong>Learning with Curiosity</strong>
                  <small>Student laboratory internships and BSc / MSc academic project support</small>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="bg-teal hover:bg-teal/90 text-white shadow-sm">
                <Link to="/about">
                  Discover Certigo &amp; Our Vision <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/quote">
                  Request a Quote <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side: High quality laboratory photograph with floating badge & caption */}
          <figure className="editorial-photo shadow-lg">
            <img 
              src={researchImage} 
              width={1200} 
              height={900} 
              loading="lazy" 
              alt="Advanced analytical laboratory at Certigo Laboratories" 
            />
            <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 bg-primary/85 backdrop-blur-sm border border-teal/40 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
              <ShieldCheck size={14} className="text-brand-green" /> NABL ACCREDITED FACILITY
            </div>
            <figcaption>
              <div>
                <span>SCIENCE IN EVERY DETAIL</span>
                <strong>A thoughtful starting point.</strong>
              </div>
              <Link 
                to="/about" 
                className="ml-auto w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" 
                aria-label="Learn more about Certigo Laboratories"
              >
                <ArrowUpRight size={20} />
              </Link>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 4. SECTION 2: OUR TESTING SERVICES (CARD UI MATCHING USER REFERENCE IMAGE 2) */}
      <section className="section gradient-section-teal" id="services">
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
                    style={{ backgroundColor: serviceBadgeColors[s.slug] || "#133552" }} 
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
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-sm">
              <Link to="/services">
                View Detailed Testing Capabilities <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: QUALITY & TECHNICAL COMPETENCE + NABL ACCREDITATION */}
      <section className="section bg-background">
        <div className="site-container">
          <SectionHeading 
            eyebrow="7. QUALITY & TECHNICAL COMPETENCE"
            title="NABL Accreditation & Validated Standards"
            description="Certigo Laboratories is committed to maintaining a strong quality management system and technically competent laboratory operations."
          />

          {/* Premium NABL Accreditation Banner with Logo Gradient */}
          <div className="nabl-accreditation-banner">
            <div>
              <div className="nabl-badge-pill" style={{ background: "rgba(110,162,54,0.25)", borderColor: "#6EA236" }}>
                <ShieldCheck size={16} className="text-white" /> NABL ACCREDITED LABORATORY
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                NABL Accreditation No.: <span className="nabl-reg-code">{contact.nablNumber}</span>
              </h3>
              <p className="text-white/85 text-sm max-w-2xl leading-relaxed mb-0">
                Certigo Laboratories Private Limited is committed to maintaining the applicable requirements of its NABL accreditation and providing technically competent testing services within its approved scope.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="secondary" size="lg" className="shadow-md">
                <Link to="/contact">
                  Confirm Scope of Accreditation <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>

          {/* Standards & Test Methods Grid */}
          <div className="mb-6">
            <h3 className="text-center text-xl font-bold text-primary mb-2">8. Standards &amp; Recognized Test Methods</h3>
            <p className="text-center text-muted-foreground text-sm max-w-xl mx-auto mb-8">
              Depending on the sample, parameter and applicable requirement, testing is carried out with reference to recognized national and international methods:
            </p>
          </div>

          <div className="standards-grid">
            {standardsList.map((std, idx) => (
              <div className="standard-card" key={std.name}>
                <div className="flex items-center gap-2 mb-2">
                  <FileText size={18} style={{ color: idx % 2 === 0 ? "#00A8B5" : "#6EA236" }} />
                  <h4>{std.name}</h4>
                </div>
                <p>{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: INDUSTRIES & SECTORS WE SERVE (AUTO-SCROLL MARQUEE WITH SMALL CARDS) */}
      <section className="section gradient-section-mesh overflow-hidden">
        <div className="site-container">
          <SectionHeading 
            eyebrow="9. INDUSTRIES & SECTORS WE SERVE"
            title="Trusted Testing Partner Across Diverse Sectors"
            description="Supporting private and government enterprises, manufacturing units, commercial facilities, and public health organizations with dependable quality monitoring."
          />
        </div>

        {/* Auto-Scroll Small Cards Marquee (Infinite smooth continuous loop with pause on hover) */}
        <div className="marquee-container mt-6">
          {/* Row 1: Scrolling Left */}
          <div className="marquee-track">
            {[...industriesRow1, ...industriesRow1].map((ind, index) => (
              <div className="industry-small-card" key={`${ind.name}-r1-${index}`}>
                <div className={`industry-small-card-icon ${ind.green ? "green-variant" : ""}`}>
                  <ind.icon size={18} />
                </div>
                <div className="industry-small-card-text">
                  <span className="industry-small-card-title">{ind.name}</span>
                  <span className="industry-small-card-sub">{ind.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="marquee-track-reverse">
            {[...industriesRow2, ...industriesRow2].map((ind, index) => (
              <div className="industry-small-card" key={`${ind.name}-r2-${index}`}>
                <div className={`industry-small-card-icon ${ind.green ? "green-variant" : ""}`}>
                  <ind.icon size={18} />
                </div>
                <div className="industry-small-card-text">
                  <span className="industry-small-card-title">{ind.name}</span>
                  <span className="industry-small-card-sub">{ind.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="site-container text-center mt-10">
          <p className="text-xs text-muted-foreground max-w-xl mx-auto">
            Hover over any sector card to pause. Whether you need routine quality checks, regulatory compliance testing, or periodic monitoring programs, Certigo Laboratories delivers dependable testing support.
          </p>
        </div>
      </section>

      {/* 7. SECTION 5: WHY CHOOSE CERTIGO LABORATORIES? (7 PILLARS) */}
      <section className="section gradient-section-teal">
        <div className="site-container">
          <SectionHeading 
            eyebrow="10. WHY CHOOSE CERTIGO LABORATORIES?"
            title="Technical Excellence You Can Depend On"
            description="We focus on generating dependable and technically sound test results through systematic procedures and client-focused service."
          />

          <div className="why-pillars-grid">
            {whyPillars.map((p, idx) => (
              <div className="why-pillar-card" key={p.title}>
                <div 
                  className="why-pillar-icon-box"
                  style={{ color: idx % 2 === 0 ? "#00A8B5" : "#6EA236" }}
                >
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

      {/* 8. SECTION 6: SAMPLE COLLECTION & TESTING SUPPORT WORKFLOW */}
      <section className="section bg-background">
        <div className="site-container">
          <SectionHeading 
            eyebrow="11. SAMPLE COLLECTION & TESTING SUPPORT"
            title="Streamlined Workflow From Sample to Certified Report"
            description="Depending on service availability and customer requirements, Certigo Laboratories provides structured support across the entire testing cycle."
          />

          <div className="steps-grid">
            {sampleSupportSteps.map((s, idx) => (
              <div className="step" key={s.step}>
                <span 
                  className="step-number"
                  style={{ borderColor: idx % 2 === 0 ? "#00A8B5" : "#6EA236", color: idx % 2 === 0 ? "#00A8B5" : "#6EA236" }}
                >
                  {s.step}
                </span>
                <ArrowRight className="step-arrow" size={20} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-7 rounded-xl bg-secondary/50 border border-border text-center max-w-3xl mx-auto shadow-xs">
            <h4 className="text-base font-bold text-primary mb-2">12. Our Commitment</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-0">
              “At Certigo Laboratories Private Limited, we believe that reliable laboratory testing plays an important role in protecting food safety, public health, water quality and the environment. We are committed to continuously improving our laboratory systems, technical competence and customer service to provide dependable testing support to our customers.”
            </p>
          </div>
        </div>
      </section>

      {/* 9. SECTION 7: STUDENT PROGRAMMES & PRACTICAL LEARNING */}
      <section className="section gradient-section-mesh">
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

      {/* 10. SECTION 8: FULL-WIDTH IMAGE CTA BANNER (MATCHING USER REFERENCE IMAGE 1) */}
      <section className="image-cta-section">
        <img 
          src={labImage} 
          alt="Modern testing laboratory at Certigo Laboratories" 
          className="image-cta-bg" 
          width={1920} 
          height={800} 
          loading="lazy" 
        />
        <div className="image-cta-wash" />
        <div className="site-container image-cta-content">
          <div className="image-cta-pill">
            <span>YOUR NEXT CHAPTER STARTS HERE</span>
          </div>
          <h2 className="image-cta-title">
            Big ideas deserve the right partner.
          </h2>
          <p className="image-cta-desc">
            Let's bring your vision to life with the right combination of people, process, and technology.
          </p>
          <div className="image-cta-buttons">
            <Button asChild size="lg" className="image-cta-btn-primary">
              <Link to="/quote">
                Let's Start a Conversation <ArrowUpRight size={17} />
              </Link>
            </Button>
            <a 
              href="https://wa.me/918247442084?text=Hello%20Certigo%2C%20I%20would%20like%20to%20chat%20about%20a%20testing%20enquiry." 
              target="_blank" 
              rel="noreferrer" 
              className="image-cta-btn-whatsapp"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Quick WhatsApp Chat</span>
            </a>
          </div>
        </div>
        <div className="image-cta-border-bottom" />
      </section>

      {/* 11. SECTION 9: OFFICIAL CONTACT DETAILS & ADDRESS */}
      <section className="section gradient-section-mesh border-t border-border mt-16">
        <div className="site-container">
          <SectionHeading 
            eyebrow="13. CONTACT US"
            title="Certigo Laboratories Private Limited"
            description="“Reliable Testing. Accurate Results. Trusted Quality.”"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-background border border-border rounded-xl p-6 text-center shadow-xs hover:border-teal transition-colors">
              <div className="w-12 h-12 rounded-full bg-teal/15 text-teal flex items-center justify-center mx-auto mb-4">
                <MapPin size={22} />
              </div>
              <h4 className="font-bold text-primary mb-2">Laboratory Address</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {contact.address}
              </p>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 text-center shadow-xs hover:border-teal transition-colors">
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

            <div className="bg-background border border-border rounded-xl p-6 text-center shadow-xs hover:border-teal transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center mx-auto mb-4">
                <Mail size={22} />
              </div>
              <h4 className="font-bold text-primary mb-2">Email &amp; Accreditation</h4>
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
