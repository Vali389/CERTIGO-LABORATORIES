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
  standardsList, researchImage, foodImage, waterImage, 
  microImage, chemImage, envImage, airImage, cellsImage, learningImage 
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

const singleRowIndustries = [
  {
    name: "Fruits, Veg & Groceries",
    sub: "FSSAI & Pesticide Residues",
    image: foodImage,
    tag: "FSSAI Standards"
  },
  {
    name: "Packaged Drinking Water",
    sub: "IS 10500 Potability & Minerals",
    image: waterImage,
    tag: "IS 10500 Potability"
  },
  {
    name: "Dairy & Milk Products",
    sub: "Purity, Fat & Microbial Counts",
    image: microImage,
    tag: "Microbiology & Fat"
  },
  {
    name: "Pharmaceutical & Herbal",
    sub: "Chemical Assays & Sterile Water",
    image: chemImage,
    tag: "Assay & Chemistry"
  },
  {
    name: "Beverages & Cold Drinks",
    sub: "Sugar, Acidity & Preservatives",
    image: foodImage,
    tag: "Quality Control"
  },
  {
    name: "Hotels, Resorts & Catering",
    sub: "Food Safety & Kitchen Hygiene",
    image: researchImage,
    tag: "Hygiene Auditing"
  },
  {
    name: "Manufacturing & Heavy Units",
    sub: "Effluent, ETP & PCB Compliance",
    image: envImage,
    tag: "Environmental PCB"
  },
  {
    name: "Seafood & Marine Exports",
    sub: "Pathogen Screening & Residues",
    image: microImage,
    tag: "Export Compliance"
  },
  {
    name: "Poultry, Meat & Feeds",
    sub: "Salmonella, E. coli & Protein Analysis",
    image: cellsImage,
    tag: "Pathogen Screen"
  },
  {
    name: "Agricultural & Spices",
    sub: "Heavy Metals, Moisture & Toxins",
    image: chemImage,
    tag: "Residue Analysis"
  },
  {
    name: "Water Treatment & RO Plants",
    sub: "TDS, Hardness & Filtration Checks",
    image: waterImage,
    tag: "TDS & Mineral Quality"
  },
  {
    name: "Ambient Air & Stack Units",
    sub: "PM2.5, PM10, SOx, NOx Monitoring",
    image: airImage,
    tag: "Air Quality Control"
  },
  {
    name: "Residential Communities",
    sub: "Sump & Borewell Potability",
    image: waterImage,
    tag: "Potability Test"
  },
  {
    name: "Educational & Research Units",
    sub: "BSc / MSc Project Support & Testing",
    image: learningImage,
    tag: "Academic Support"
  }
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

const detailedStandards = [
  {
    name: "BIS / IS Standards",
    badge: "National Standards",
    emblem: "IS 10500 · IS 14543 · IS 5402",
    desc: "Bureau of Indian Standards specifications for drinking water potability, packaged natural mineral water, food products, and microbiological criteria.",
    tags: ["Potability (IS 10500)", "Toxic Heavy Metals", "Coliform Limits", "Physical Turbidity"],
    color: "#00A8B5",
    bg: "rgba(0, 168, 181, 0.1)",
    border: "rgba(0, 168, 181, 0.3)",
    gradient: "linear-gradient(90deg, #00A8B5, #38bdf8)",
    shadow: "rgba(0, 168, 181, 0.16)"
  },
  {
    name: "FSSAI Methods",
    badge: "Food Safety & Regulations",
    emblem: "FSSAI Statutory Manuals",
    desc: "Statutory analytical testing protocols for food safety compliance, nutritional labeling, proximate parameters, food additives, and contaminant limits.",
    tags: ["Fat & Protein Content", "Pesticide Residues", "Aflatoxins", "Shelf Life Studies"],
    color: "#6EA236",
    bg: "rgba(110, 162, 54, 0.1)",
    border: "rgba(110, 162, 54, 0.3)",
    gradient: "linear-gradient(90deg, #6EA236, #22c55e)",
    shadow: "rgba(110, 162, 54, 0.16)"
  },
  {
    name: "APHA / AWWA / WEF",
    badge: "Water & Wastewater Protocols",
    emblem: "23rd Edition Standard Methods",
    desc: "The definitive global reference manual for the physical, chemical, biological, and microbiological examination of drinking water and industrial effluents.",
    tags: ["BOD & COD Analysis", "Total Dissolved Solids", "Trace Metals (AAS)", "Pathogen Screening"],
    color: "#0284c7",
    bg: "rgba(2, 132, 199, 0.1)",
    border: "rgba(2, 132, 199, 0.3)",
    gradient: "linear-gradient(90deg, #0284c7, #00A8B5)",
    shadow: "rgba(2, 132, 199, 0.16)"
  },
  {
    name: "ISO / IEC Standards",
    badge: "Global Quality Protocols",
    emblem: "ISO/IEC 17025:2017 & ISO 6579",
    desc: "International management and technical standards governing laboratory competence, equipment calibration traceability, and test validity.",
    tags: ["ISO 17025:2017", "Measurement Uncertainty", "Method Validation", "Traceability"],
    color: "#4f46e5",
    bg: "rgba(79, 70, 229, 0.1)",
    border: "rgba(79, 70, 229, 0.3)",
    gradient: "linear-gradient(90deg, #4f46e5, #00A8B5)",
    shadow: "rgba(79, 70, 229, 0.16)"
  },
  {
    name: "AOAC International",
    badge: "Validated Analytical Chemistry",
    emblem: "Official Methods of Analysis",
    desc: "Globally validated chemical and microbiological methods for food composition, dietary fibre, vitamins, amino acids, and authenticity verification.",
    tags: ["Proximate Assays", "Vitamin Profiling", "Fatty Acid Profiles", "Mineral Assays"],
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.1)",
    border: "rgba(245, 158, 11, 0.3)",
    gradient: "linear-gradient(90deg, #f59e0b, #ef4444)",
    shadow: "rgba(245, 158, 11, 0.16)"
  },
  {
    name: "CPCB & MoEFCC",
    badge: "Environmental Pollution Control",
    emblem: "National Ambient & Stack Guidelines",
    desc: "National statutory regulations and sampling protocols for ambient air quality monitoring, stack emissions, industrial effluents, and noise levels.",
    tags: ["PM2.5 & PM10", "SOx & NOx Stack", "Noise Level Survey", "ETP Compliance"],
    color: "#0d9488",
    bg: "rgba(13, 148, 136, 0.1)",
    border: "rgba(13, 148, 136, 0.3)",
    gradient: "linear-gradient(90deg, #0d9488, #6EA236)",
    shadow: "rgba(13, 148, 136, 0.16)"
  }
];

const luxuryStudentProgrammes = [
  {
    slug: "short-term-internships",
    path: "/programmes/short-term-internships" as const,
    title: "Short-Term Internships",
    durationBadge: "15–30 Days · Hands-On Bench",
    icon: FlaskConical,
    accent: "#00A8B5",
    gradient: "linear-gradient(135deg, rgba(0, 168, 181, 0.14) 0%, rgba(19, 53, 82, 0.05) 100%)",
    glow: "rgba(0, 168, 181, 0.22)",
    subtitle: "Your structured bridge from academic classroom theory to professional testing laboratory bench.",
    outcomes: [
      "Hands-on sample preparation, aseptic pipetting & wet bench assays",
      "Practical exposure across Food, Water & Microbiological testing",
      "Standard Operating Procedures (SOPs) & calibrated tool handling",
      "Official Certificate of Laboratory Training upon course completion"
    ],
    applyLink: "/programmes-apply"
  },
  {
    slug: "long-term-internships",
    path: "/programmes/long-term-internships" as const,
    title: "Long-Term Internships",
    durationBadge: "1–6 Months · Comprehensive",
    icon: Microscope,
    accent: "#0284c7",
    gradient: "linear-gradient(135deg, rgba(2, 132, 199, 0.14) 0%, rgba(19, 53, 82, 0.05) 100%)",
    glow: "rgba(2, 132, 199, 0.22)",
    subtitle: "In-depth analytical immersion, advanced instrumentation training, and industrial quality control.",
    outcomes: [
      "Operation of UV-Vis spectrophotometers, incubators & titration setups",
      "Routine commercial batch processing, calibration & quality control",
      "Dedicated 1-on-1 mentorship adhering to ISO/IEC 17025 workflows",
      "Industry-recognized Internship Training Credential for career placement"
    ],
    applyLink: "/programmes-apply"
  },
  {
    slug: "academic-projects",
    path: "/programmes/academic-projects" as const,
    title: "BSc / MSc Academic Projects",
    durationBadge: "Dissertation & Thesis Support",
    icon: GraduationCap,
    accent: "#6EA236",
    gradient: "linear-gradient(135deg, rgba(110, 162, 54, 0.14) 0%, rgba(19, 53, 82, 0.05) 100%)",
    glow: "rgba(110, 162, 54, 0.22)",
    subtitle: "Complete testing infrastructure, verified data generation, and scientific guidance for university thesis.",
    outcomes: [
      "Access to certified laboratory testing instrumentation & analytical reagents",
      "Authentic, traceable experimental data generation for academic thesis",
      "Expert consultation on research methodology, protocols & parameter design",
      "Official Laboratory Project Completion Letter & signed validation certificate"
    ],
    applyLink: "/programmes-apply"
  }
];

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

      {/* 3. SECTION 1: A PARTNER IN SCIENCE. A PLACE TO GROW. (EDITORIAL SPLIT) */}
      <section className="section gradient-section-mesh">
        <div className="site-container editorial-split">
          <div>
            <span className="eyebrow">A PARTNER IN SCIENCE. A PLACE TO GROW.</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-4 leading-tight">
              Better questions.<br />
              <span className="text-teal font-normal">Clearer possibilities.</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
              Certigo Laboratories Private Limited is a professional laboratory providing reliable and quality-focused Food, Water, Microbiological, Chemical, Environmental and Air Quality Testing Services.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              From the quality of everyday essentials to the curiosity of tomorrow’s scientists, Certigo brings dependable testing enquiries and practical learning together under one roof. We serve industries, manufacturing units, commercial facilities, and universities with precision, integrity, and trust.
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
            description="Certigo Laboratories is committed to maintaining a strong quality management system, calibrated analytical instrumentation, and technically sound laboratory operations."
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

          {/* Standards & Recognized Test Methods Luxury Grid */}
          <div className="mb-6 mt-16">
            <SectionHeading 
              eyebrow="RECOGNIZED NATIONAL & INTERNATIONAL METHODS"
              title="8. Standards & Recognized Test Methods"
              description="Depending on the sample matrix, parameter specifications, and statutory guidelines, testing is executed with reference to recognized national and international protocols:"
            />
          </div>

          <div className="luxury-standards-grid">
            {detailedStandards.map((std) => (
              <div 
                className="luxury-standard-card" 
                key={std.name}
                style={{
                  "--std-color": std.color,
                  "--std-bg": std.bg,
                  "--std-border": std.border,
                  "--std-gradient": std.gradient,
                  "--std-shadow": std.shadow
                } as React.CSSProperties}
              >
                <div className="luxury-standard-top">
                  <div className="luxury-standard-icon-box">
                    <FileText size={20} />
                  </div>
                  <span className="luxury-standard-badge">{std.badge}</span>
                </div>
                <h4 className="luxury-standard-title">{std.name}</h4>
                <div className="luxury-standard-emblem">{std.emblem}</div>
                <p className="luxury-standard-desc">{std.desc}</p>
                <div className="luxury-standard-tags">
                  {std.tags.map((t) => (
                    <span className="luxury-standard-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: INDUSTRIES & SECTORS WE SERVE (SINGLE-ROW AUTO-SCROLL WITH CIRCULAR PHOTO CARDS MATCHING REFERENCE UI) */}
      <section className="section gradient-section-mesh overflow-hidden">
        <div className="site-container">
          <SectionHeading 
            eyebrow="9. INDUSTRIES & SECTORS WE SERVE"
            title="Trusted Testing Partner Across Diverse Sectors"
            description="Supporting private and government enterprises, food manufacturers, packaged water plants, commercial facilities, and residential units with certified analytical testing."
          />
        </div>

        {/* ONLY ONE ROW Auto-Scroll Single Track */}
        <div className="marquee-container mt-8">
          <div className="marquee-track-single">
            {[...singleRowIndustries, ...singleRowIndustries].map((ind, index) => (
              <div 
                className={`industry-circle-card ${index === 1 ? "is-active" : ""}`} 
                key={`${ind.name}-${index}`}
              >
                <div className="industry-circle-img-wrap">
                  <img src={ind.image} alt={ind.name} loading="lazy" width={86} height={86} />
                </div>
                <h4 className="industry-circle-title">{ind.name}</h4>
                <p className="industry-circle-sub">{ind.sub}</p>
                <span className="industry-circle-tag">{ind.tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="site-container text-center mt-8">
          <p className="text-xs text-muted-foreground max-w-xl mx-auto">
            Hover over any sector card to pause. Whether you need routine batch release tests, regulatory compliance certificates, or periodic monitoring, Certigo Laboratories delivers dependable testing support.
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

      {/* 9. SECTION 7: STUDENT PROGRAMMES & PRACTICAL LEARNING (LUXURY GRADIENT CARDS WITHOUT COUNTERS) */}
      <section className="section gradient-section-mesh">
        <div className="site-container">
          <SectionHeading 
            eyebrow="STUDENT PROGRAMMES & INTERNSHIPS"
            title="Where Curiosity Meets Practical Science"
            description="Take your learning beyond textbooks. Explore professional laboratory internships and academic dissertation support at Certigo Laboratories in Visakhapatnam."
          />

          <div className="luxury-programmes-grid">
            {luxuryStudentProgrammes.map((p) => (
              <div 
                className="luxury-programme-card" 
                key={p.slug}
                style={{
                  "--prog-accent": p.accent,
                  "--prog-grad": p.gradient,
                  "--prog-glow": p.glow
                } as React.CSSProperties}
              >
                <div className="luxury-programme-header">
                  <div className="luxury-programme-pill">
                    {p.durationBadge}
                  </div>
                  <div className="luxury-programme-icon-wrap">
                    <p.icon size={26} />
                  </div>
                  <h3 className="luxury-programme-title">{p.title}</h3>
                  <p className="luxury-programme-subtitle">{p.subtitle}</p>
                </div>

                <div className="luxury-programme-body">
                  <span className="text-[11.5px] font-bold uppercase tracking-wider text-muted-foreground mb-3 block">
                    Core Learning &amp; Deliverables
                  </span>
                  <ul className="luxury-programme-outcomes">
                    {p.outcomes.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="luxury-programme-footer">
                    <Button 
                      asChild 
                      className="w-full font-bold shadow-md text-white transition-transform hover:-translate-y-0.5"
                      style={{ background: p.accent }}
                    >
                      <Link to={p.applyLink}>
                        Apply for Programme <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                    <Link 
                      to={p.path} 
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary py-1 transition-colors"
                    >
                      <span>View Full Curriculum &amp; Guidelines</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SECTION 8: FULL-WIDTH IMAGE CTA BANNER */}
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
    </>
  );
}
