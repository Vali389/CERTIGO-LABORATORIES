import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowUpRight, ArrowRight, Check, ShieldCheck, FlaskConical, GraduationCap, 
  Leaf, MessagesSquare, Target, Clock, Award, Lock, Layers, Eye, Compass, 
  Building2, Droplets, Apple, Microscope, Wind, Phone, Mail, MapPin, 
  CheckCircle2, FileText, ChevronRight, Users, ClipboardCheck, Handshake,
  Sparkles, Quote, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, WhatsAppIcon } from "@/components/site";
import { 
  services, programmes, labImage, pageHead, contact, 
  standardsList, researchImage, foodImage, waterImage, 
  microImage, chemImage, envImage, airImage, cellsImage, learningImage 
} from "@/lib/site-data";
import realMicroscopeImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.36 PM.jpeg";
import realLaminarImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.34 PM (1).jpeg";
import realBalanceImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.34 PM.jpeg";
import realAutoclaveImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.34 PM (2).jpeg";
import realHomogenizerImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.35 PM.jpeg";
import realIncubatorImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.35 PM (1).jpeg";
import realBinocularImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.37 PM.jpeg";
import realGlasswareImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.37 PM (1).jpeg";

export const Route = createFileRoute("/")({ 
  head: () => pageHead(
    "NABL Accredited Laboratory | Food, Water & Environmental Testing", 
    "Certigo Laboratories Private Limited (NABL: NABLT0626AD18278) provides professional Food, Water, Microbiological, Chemical, Environmental, and Air Quality testing services in Visakhapatnam."
  ), 
  component: Home 
});

const whyPillars = [
  {
    num: "01",
    icon: Target,
    title: "Accuracy",
    tag: "Validated Protocols",
    desc: "We focus on generating dependable and technically sound test results using validated standard methods (BIS, FSSAI, APHA, ISO).",
    color: "#00A8B5",
    bg: "rgba(0, 168, 181, 0.12)",
    border: "rgba(0, 168, 181, 0.35)"
  },
  {
    num: "02",
    icon: ShieldCheck,
    title: "Reliability",
    tag: "Systematic QA/QC",
    desc: "We follow systematic laboratory procedures, internal quality checks, matrix spikes, and rigorous quality-control practices.",
    color: "#6EA236",
    bg: "rgba(110, 162, 54, 0.12)",
    border: "rgba(110, 162, 54, 0.35)"
  },
  {
    num: "03",
    icon: Clock,
    title: "Timely Service",
    tag: "Predictable Schedules",
    desc: "We understand the importance of timely testing and reporting for your production batch release and regulatory schedules.",
    color: "#0284c7",
    bg: "rgba(2, 132, 199, 0.12)",
    border: "rgba(2, 132, 199, 0.35)"
  },
  {
    num: "04",
    icon: Award,
    title: "Technical Expertise",
    tag: "ISO 17025 Calibrated",
    desc: "Our qualified analytical scientists strictly follow established testing procedures, validated SOPs, and equipment calibration.",
    color: "#d97706",
    bg: "rgba(217, 119, 6, 0.12)",
    border: "rgba(217, 119, 6, 0.35)"
  },
  {
    num: "05",
    icon: MessagesSquare,
    title: "Customer Support",
    tag: "Dedicated SPOC",
    desc: "We work closely with customers to understand their testing requirements and provide appropriate testing and sampling guidance.",
    color: "#8b5cf6",
    bg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.35)"
  },
  {
    num: "06",
    icon: Lock,
    title: "Confidentiality",
    tag: "Data Integrity Vault",
    desc: "Customer information, proprietary sample formulations, and test certificates are safeguarded with strict non-disclosure security.",
    color: "#0d9488",
    bg: "rgba(13, 148, 136, 0.12)",
    border: "rgba(13, 148, 136, 0.35)"
  },
  {
    num: "07",
    icon: Layers,
    title: "Comprehensive Testing",
    tag: "Multi-Discipline Lab",
    desc: "Our integrated testing facility covers Food, Water, Microbiology, Chemical, Environmental, and Ambient Air monitoring.",
    color: "#133552",
    bg: "rgba(19, 53, 82, 0.12)",
    border: "rgba(19, 53, 82, 0.35)"
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
    shortTitle: "Understand",
    title: "Consultation & Scope",
    desc: "We understand your testing goals, statutory standards (BIS, FSSAI, CPCB), sample matrix, turnaround requirements, and regulatory compliance targets.",
    icon: Users,
    color: "#00A8B5",
    halo: "rgba(0, 168, 181, 0.08)",
    glow: "rgba(0, 168, 181, 0.22)"
  },
  {
    step: "02",
    shortTitle: "Plan & Collect",
    title: "Sampling & Preservation",
    desc: "Standardized protocols for sample collection, appropriate container selection, cold-chain temperature preservation, and strict chain of custody documentation.",
    icon: ClipboardCheck,
    color: "#133552",
    halo: "rgba(19, 53, 82, 0.08)",
    glow: "rgba(19, 53, 82, 0.22)"
  },
  {
    step: "03",
    shortTitle: "Analyze",
    title: "Validated Lab Testing",
    desc: "Testing conducted using validated test methods (BIS/IS, FSSAI, APHA, ISO, AOAC) with calibrated analytical instrumentation and certified reference materials.",
    icon: FlaskConical,
    color: "#d97706",
    halo: "rgba(217, 119, 6, 0.08)",
    glow: "rgba(217, 119, 6, 0.22)"
  },
  {
    step: "04",
    shortTitle: "Deliver",
    title: "Certified Reporting",
    desc: "Prompt delivery of official, audit-ready NABL accredited test reports complete with measurement traceability, quality checks, and expert advisory support.",
    icon: Handshake,
    color: "#0d9488",
    halo: "rgba(13, 148, 136, 0.08)",
    glow: "rgba(13, 148, 136, 0.22)"
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
    applyLink: "/apply"
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
    applyLink: "/apply"
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
    applyLink: "/apply"
  }
];

const nablDisciplines = [
  { icon: Apple, name: "Food & Agriculture", sub: "Proximate, Residues & FSSAI", color: "#00A8B5", bg: "rgba(0,168,181,0.2)" },
  { icon: Droplets, name: "Drinking & Packaged Water", sub: "IS 10500 Potability & Minerals", color: "#38bdf8", bg: "rgba(56,189,248,0.2)" },
  { icon: Microscope, name: "Microbiological Testing", sub: "Pathogens, Coliforms & Sterility", color: "#6EA236", bg: "rgba(110,162,54,0.2)" },
  { icon: FlaskConical, name: "Analytical Chemistry", sub: "Heavy Metals, Assays & Assays", color: "#0284c7", bg: "rgba(2,132,199,0.2)" },
  { icon: Leaf, name: "Environmental Monitoring", sub: "Effluent, ETP & APPCB Rules", color: "#0d9488", bg: "rgba(13,148,136,0.2)" },
  { icon: Wind, name: "Ambient & Stack Air", sub: "PM2.5, PM10, SOx, NOx & Noise", color: "#818cf8", bg: "rgba(129,140,248,0.2)" },
];

const galleryCategories = [
  { id: "all", label: "All Facilities" },
  { id: "microbiology", label: "Microbiology Suite" },
  { id: "chemistry", label: "Analytical Chemistry" },
  { id: "water-env", label: "Water & Environmental" },
  { id: "prep-sterility", label: "Sterilization & Prep" },
];

const facilityGalleryItems = [
  {
    image: realBalanceImg,
    title: "Analytical Micro-Balance (0.0001g)",
    room: "Weighing & Reference Suite",
    category: "Analytical Chemistry",
    categoryKey: "chemistry",
    spec: "High-precision electromagnetic analytical balance with anti-draft shield, calibrated against NPL-traceable reference masses.",
    tags: ["0.0001g Precision", "CRM Traceable", "Anti-Draft Shield"]
  },
  {
    image: realLaminarImg,
    title: "Laminar Air Flow Clean Bench (Type A2)",
    room: "Microbiology Inoculation Suite",
    category: "Microbiology Suite",
    categoryKey: "microbiology",
    spec: "ISO Class 5 vertical HEPA laminar airflow cabinet ensuring sterile sample inoculation, pathogen plating, and zero cross-contamination.",
    tags: ["HEPA 99.99%", "UV Germicidal Lamp", "Aseptic Handling"]
  },
  {
    image: realMicroscopeImg,
    title: "Digital Colony Counter & Inoculation Bench",
    room: "Microbial Enumeration Lab",
    category: "Microbiology Suite",
    categoryKey: "microbiology",
    spec: "Electronic pressure-sensitive colony counter with LED illumination and optical magnification for colony forming unit (CFU) counts.",
    tags: ["CFU Enumeration", "Magnified Lens", "Pressure Touch Sensor"]
  },
  {
    image: realBinocularImg,
    title: "High-Power Binocular Research Microscope",
    room: "Cellular & Morphology Station",
    category: "Microbiology Suite",
    categoryKey: "microbiology",
    spec: "Achromatic optical system with 1000x oil-immersion magnification for bacterial staining and fungal identification.",
    tags: ["1000x Magnification", "LED Illumination", "Oil Immersion 100x"]
  },
  {
    image: realIncubatorImg,
    title: "Microbiological BOD Incubator Suite",
    room: "Controlled Incubation Lab",
    category: "Water & Environmental",
    categoryKey: "water-env",
    spec: "Digital microprocessor-controlled temperature chambers (+/- 0.5°C) for 5-day BOD assays and culture incubation.",
    tags: ["20°C / 37°C / 44°C", "Microprocessor Control", "5-Day BOD Testing"]
  },
  {
    image: realAutoclaveImg,
    title: "Vertical Sterilization Autoclave",
    room: "Media Prep & Decontamination",
    category: "Sterilization & Prep",
    categoryKey: "prep-sterility",
    spec: "High-pressure saturated steam sterilization (121°C / 15 psi) ensuring absolute sterility of media and culture vessels.",
    tags: ["121°C Saturated Steam", "Stainless Steel 304", "Biological Indicator QC"]
  },
  {
    image: realHomogenizerImg,
    title: "Stomacher Homogenizer & Vortex Station",
    room: "Food Matrix Extraction Lab",
    category: "Analytical Chemistry",
    categoryKey: "chemistry",
    spec: "Paddle-action sterile stomacher for thorough microbial extraction from solid and semi-solid food samples.",
    tags: ["Aseptic Stomaching", "Variable Speed Paddle", "Zero Cross-Contamination"]
  },
  {
    image: realGlasswareImg,
    title: "Analytical Glassware & Titration Station",
    room: "Wet Chemistry Laboratory",
    category: "Water & Environmental",
    categoryKey: "water-env",
    spec: "Class-A calibrated volumetric glassware, digital titrators, and chemical reagents for potability and effluent assays.",
    tags: ["Class-A Volumetric", "Acid-Base Titration", "Chemical Hardness"]
  }
];

const testimonialsData = [
  {
    initial: "Q",
    name: "Quality Assurance Lead",
    role: "Packaged Drinking Water (IS 10500)",
    color: "#00A8B5",
    quote: "Certigo Laboratories has been our dependable partner for routine IS 10500 potability and trace metal testing. Their NABL accredited certificates are delivered on schedule and fully audit-ready."
  },
  {
    initial: "P",
    name: "Plant Operations Director",
    role: "Commercial Food Manufacturing",
    color: "#133552",
    quote: "A collaborative approach, thoughtful solutions, and a testing team that truly understands our batch release goals. Their turnaround time for microbiological pathogen screening is exceptional."
  },
  {
    initial: "E",
    name: "Environmental Compliance Head",
    role: "Industrial Effluents & Ambient Air",
    color: "#6EA236",
    quote: "The right balance of technical expertise and clear communication. Their stack emission and wastewater monitoring reports strictly adhere to CPCB and APPCB regulatory compliance guidelines."
  },
  {
    initial: "S",
    name: "MSc Biotechnology Scholar",
    role: "Academic Dissertation & Project Research",
    color: "#0284c7",
    quote: "A fresh perspective on laboratory science. Direct bench training on calibrated micro-balances, laminar airflow chambers, and digital colony counters gave me immense practical confidence."
  }
];

function Home() {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("all");

  const filteredGalleryItems = activeGalleryFilter === "all"
    ? facilityGalleryItems
    : facilityGalleryItems.filter(item => item.categoryKey === activeGalleryFilter);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up-init");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
      <section className="trust-strip fade-up-init">
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

      {/* 3. SECTION 1: A PARTNER IN SCIENCE. A PLACE TO GROW. (EDITORIAL SPLIT WITH SOFT GRADIENT) */}
      <section className="section gradient-section-editorial fade-up-init">
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

      {/* 4. SECTION 2: OUR TESTING SERVICES (RICH GRADIENT MESH) */}
      <section className="section gradient-section-services fade-up-init" id="services">
        <div className="site-container">
          <SectionHeading 
            eyebrow="OUR TESTING SERVICES"
            title="The Right Solutions. Real Possibilities."
            description="From everyday essentials to comprehensive environmental compliance, we bring technical excellence that supports your quality and regulatory requirements."
          />

          {/* 6 Cards Grid exactly matching user reference Image 2 */}
          <div className="service-cards-grid">
            {services.map((s) => (
              <Link to={s.path} className="service-grid-card" key={s.slug}>
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

                  {/* Explore link indicator */}
                  <span className="service-grid-card-link">
                    Explore Service <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
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

      {/* 5. SECTION 3: QUALITY & TECHNICAL COMPETENCE + NABL ACCREDITATION (PREMIER DARK EXECUTIVE SUITE) */}
      <section className="section gradient-section-nabl-suite fade-up-init">
        <div className="site-container">
          <div className="nabl-suite-header">
            <div className="nabl-suite-eyebrow">
              <span className="nabl-pulse-dot" /> QUALITY &amp; TECHNICAL COMPETENCE
            </div>
            <h2 className="nabl-suite-title">
              NABL Accreditation &amp; Validated Standards
            </h2>
            <p className="nabl-suite-desc">
              Certigo Laboratories Private Limited is formally accredited in accordance with the international standard ISO/IEC 17025:2017 for technical competence in testing, operating calibrated analytical instrumentation and legal test certificates accepted nationwide.
            </p>
          </div>

          {/* Two-Column Master Executive Hub */}
          <div className="nabl-executive-grid">
            {/* Left: Official Master Credential */}
            <div className="nabl-master-card">
              <div className="nabl-master-badge-row">
                <span className="nabl-badge-pill-cyan">
                  <ShieldCheck size={14} /> NABL ACCREDITED LABORATORY
                </span>
                <span className="nabl-badge-pill-green">
                  ISO/IEC 17025:2017 CERTIFIED
                </span>
              </div>

              <h3 className="nabl-master-title">
                National Accreditation Board for Testing &amp; Calibration Laboratories
              </h3>

              {/* Certificate Code Plaque */}
              <div className="nabl-code-plaque">
                <div className="nabl-code-info">
                  <span className="nabl-code-label">Accreditation Certificate Number</span>
                  <span className="nabl-code-number">{contact.nablNumber}</span>
                </div>
                <div className="nabl-verified-tag">
                  <CheckCircle2 size={15} /> Active NABL Scope
                </div>
              </div>

              <p className="nabl-master-desc">
                Accreditation under ISO/IEC 17025:2017 confirms that Certigo Laboratories operates an internationally recognized quality management system, utilizes calibrated instrumentation, participates in regular proficiency testing (PT), and issues legally valid, audit-ready test reports accepted across India.
              </p>

              <div className="nabl-competence-checklist">
                <div className="nabl-check-item">
                  <ShieldCheck size={16} />
                  <span>ISO/IEC 17025:2017 Standard Compliance</span>
                </div>
                <div className="nabl-check-item">
                  <Award size={16} />
                  <span>Traceable Reference Standards (CRM)</span>
                </div>
                <div className="nabl-check-item">
                  <FlaskConical size={16} />
                  <span>Calibrated Analytical Instrumentation</span>
                </div>
                <div className="nabl-check-item">
                  <Lock size={16} />
                  <span>Impartial &amp; Tamper-Proof Audit Reports</span>
                </div>
              </div>

              <div className="nabl-master-buttons">
                <Button asChild size="lg" className="bg-teal hover:bg-teal/90 text-white font-bold shadow-md">
                  <Link to="/contact">
                    Confirm Scope of Accreditation <ArrowUpRight size={17} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold shadow-sm">
                  <a 
                    href="https://wa.me/918247442084?text=Hello%20Certigo%2C%20I%20would%20like%20to%20verify%20the%20NABL%20scope%20of%20accreditation%20for%20testing." 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-2 text-emerald-600" /> WhatsApp Verification Desk
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Accredited Scope & Statutory Recognition Matrix */}
            <div className="nabl-scope-card">
              <div className="nabl-scope-header">
                <div>
                  <h4 className="nabl-scope-title">Accredited Testing Disciplines</h4>
                  <span className="nabl-scope-subtitle">Comprehensive Analytical Capabilities</span>
                </div>
                <span className="text-xs font-mono font-bold text-teal bg-teal/10 border border-teal/30 px-2.5 py-1 rounded-md">
                  Scope Approved
                </span>
              </div>

              <div className="nabl-disciplines-list">
                {nablDisciplines.map((disc) => (
                  <div className="nabl-discipline-item" key={disc.name}>
                    <div className="nabl-discipline-icon" style={{ background: disc.bg, color: disc.color }}>
                      <disc.icon size={16} />
                    </div>
                    <div className="nabl-discipline-text">
                      <strong>{disc.name}</strong>
                      <small>{disc.sub}</small>
                    </div>
                  </div>
                ))}
              </div>

              <div className="nabl-guarantee-box">
                <Award size={18} />
                <span>
                  <strong>National Traceability:</strong> Certified reference materials traceable to NPL / NIST ensuring high measurement integrity.
                </span>
              </div>

              <div className="nabl-guarantee-box">
                <ShieldCheck size={18} />
                <span>
                  <strong>Statutory Acceptance:</strong> Test reports accepted by FSSAI, BIS, APPCB, CPCB, and export inspection authorities.
                </span>
              </div>
            </div>
          </div>

          {/* Section 8: Standards & Recognized Test Methods (Dark Glass Showcase) */}
          <div className="standards-suite-header mt-8">
            <span className="standards-suite-eyebrow">RECOGNIZED NATIONAL &amp; INTERNATIONAL PROTOCOLS</span>
            <h3 className="standards-suite-title">Standards &amp; Recognized Test Methods</h3>
            <p className="standards-suite-desc">
              Depending on the sample matrix, parameter specifications, and statutory guidelines, analytical testing is executed in accordance with authorized protocols:
            </p>
          </div>

          <div className="dark-glass-standards-grid">
            {detailedStandards.map((std) => (
              <div 
                className="dark-glass-standard-card" 
                key={std.name}
                style={{
                  "--std-color": std.color,
                  "--std-bg": std.bg,
                  "--std-border": std.border,
                  "--std-gradient": std.gradient,
                  "--std-shadow": std.shadow
                } as React.CSSProperties}
              >
                <div className="dark-glass-standard-top">
                  <div className="dark-glass-standard-icon-box">
                    <FileText size={20} />
                  </div>
                  <span className="dark-glass-standard-badge">{std.badge}</span>
                </div>
                <h4 className="dark-glass-standard-title">{std.name}</h4>
                <div className="dark-glass-standard-emblem">{std.emblem}</div>
                <p className="dark-glass-standard-desc">{std.desc}</p>
                <div className="dark-glass-standard-tags">
                  {std.tags.map((t) => (
                    <span className="dark-glass-standard-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: INDUSTRIES & SECTORS WE SERVE (SINGLE-ROW AUTO-SCROLL WITH CIRCULAR PHOTO CARDS MATCHING REFERENCE UI) */}
      <section className="section gradient-section-sectors overflow-hidden fade-up-init">
        <div className="site-container">
          <SectionHeading 
            eyebrow="INDUSTRIES & SECTORS WE SERVE"
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

      </section>

      {/* SECTION 5: WHY CHOOSE CERTIGO LABORATORIES? (EXECUTIVE CREDIBILITY SPOTLIGHT & 7 LUXURY PILLARS) */}
      <section className="section gradient-section-why fade-up-init">
        <div className="site-container">
          <SectionHeading 
            eyebrow="WHY CHOOSE CERTIGO LABORATORIES?"
            title="Technical Excellence You Can Depend On"
            description="We focus on generating dependable and technically sound test results through systematic procedures, certified analytical instrumentation, and client-focused service."
          />

          {/* Authentic Facility Spotlight Banner featuring real WhatsApp laboratory equipment photos */}
          <div className="why-facility-spotlight">
            <div className="why-spotlight-media">
              <img 
                src={realMicroscopeImg} 
                alt="Authentic research microscopes and colony counter at Certigo Laboratories" 
                className="why-spotlight-img"
                width={800}
                height={550}
                loading="lazy"
              />
              <div className="why-spotlight-badge">
                <Sparkles size={14} className="text-teal" />
                <span>AUTHENTIC TESTING FACILITY · VISAKHAPATNAM</span>
              </div>
            </div>

            <div className="why-spotlight-content">
              <span className="why-spotlight-eyebrow">ISO/IEC 17025:2017 STANDARDS</span>
              <h3 className="why-spotlight-title">Precision Instrumentation &amp; Qualified Scientific Personnel</h3>
              <p className="why-spotlight-desc">
                From analytical micro-balances calibrated to 0.0001g to laminar air flow pathogen containment and research-grade microscopy, Certigo operates high-fidelity analytical setups adhering strictly to national and international testing guidelines.
              </p>

              <div className="why-spotlight-badges-grid">
                <div className="why-spotlight-badge-item">
                  <ShieldCheck size={18} className="text-teal" />
                  <div>
                    <strong>100% Calibrated Equipment</strong>
                    <small>Traceable to CRM reference standards</small>
                  </div>
                </div>
                <div className="why-spotlight-badge-item">
                  <Award size={18} className="text-brand-green" />
                  <div>
                    <strong>NABL Accredited Scope</strong>
                    <small>Accreditation No. {contact.nablNumber}</small>
                  </div>
                </div>
                <div className="why-spotlight-badge-item">
                  <FlaskConical size={18} className="text-primary" />
                  <div>
                    <strong>6 Testing Disciplines</strong>
                    <small>Food, Water, Micro, Chem, Env &amp; Air</small>
                  </div>
                </div>
                <div className="why-spotlight-badge-item">
                  <CheckCircle2 size={18} className="text-teal" />
                  <div>
                    <strong>Legally Valid Reports</strong>
                    <small>Accepted nationwide by FSSAI &amp; BIS</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7 Luxury Pillars Grid */}
          <div className="luxury-why-grid">
            {whyPillars.map((p) => (
              <div 
                className="luxury-why-card" 
                key={p.title}
                style={{
                  "--card-color": p.color,
                  "--card-bg": p.bg,
                  "--card-border": p.border
                } as React.CSSProperties}
              >
                <div className="luxury-why-top">
                  <div className="luxury-why-icon-box">
                    <p.icon size={22} />
                  </div>
                  <span className="luxury-why-number">{p.num}</span>
                </div>
                <span className="luxury-why-tag">{p.tag}</span>
                <h3 className="luxury-why-title">{p.title}</h3>
                <p className="luxury-why-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: SAMPLE INTEGRITY & TESTING ASSURANCE (REVERSE EDITORIAL: LEFT IMAGE, RIGHT CONTENT) */}
      <section className="section gradient-section-integrity fade-up-init">
        <div className="site-container reverse-editorial-split">
          {/* Left side: Authentic Laboratory Image with floating credentials */}
          <figure className="editorial-photo shadow-lg reverse-editorial-media">
            <img 
              src={realGlasswareImg} 
              width={1200} 
              height={900} 
              loading="lazy" 
              alt="Calibrated analytical wet chemistry setup and volumetric glassware at Certigo Laboratories" 
            />
            <div className="reverse-editorial-badges">
              <span className="reverse-badge-pill">
                <ShieldCheck size={14} className="text-teal" /> NABL SCOPE COMPLIANT
              </span>
              <span className="reverse-badge-pill reverse-badge-pill-green">
                <Award size={14} /> ISO/IEC 17025:2017 BENCH
              </span>
            </div>
            <figcaption>
              <div>
                <span>ANALYTICAL RIGOR</span>
                <strong>Controlled bench procedures.</strong>
              </div>
              <Link 
                to="/about" 
                className="ml-auto w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" 
                aria-label="Learn more about Certigo analytical procedures"
              >
                <ArrowUpRight size={20} />
              </Link>
            </figcaption>
          </figure>

          {/* Right side: Editorial text and feature points */}
          <div className="reverse-editorial-content">
            <span className="eyebrow">SAMPLE INTEGRITY &amp; TESTING ASSURANCE</span>
            <h2>
              Dependable Turnaround.<br />Uncompromising Precision.
            </h2>
            <p>
              From initial cold-chain preservation to instrument-calibrated analysis and legal test certificates, Certigo Laboratories follows strict quality assurance workflows so your test reports withstand regulatory scrutiny.
            </p>

            <div className="reverse-integrity-grid">
              <div className="reverse-integrity-item">
                <div className="reverse-integrity-icon">
                  <ShieldCheck size={19} />
                </div>
                <div className="reverse-integrity-text">
                  <strong>Chain of Custody Tracking</strong>
                  <small>Standardized sample containers, tamper seals, and cold-chain transit logs.</small>
                </div>
              </div>

              <div className="reverse-integrity-item">
                <div className="reverse-integrity-icon" style={{ background: "rgba(110, 162, 54, 0.12)", color: "#4d7c1e" }}>
                  <FlaskConical size={19} />
                </div>
                <div className="reverse-integrity-text">
                  <strong>Double-Blind QA/QC</strong>
                  <small>Matrix spikes, duplicate runs, and certified CRM reference calibration.</small>
                </div>
              </div>

              <div className="reverse-integrity-item">
                <div className="reverse-integrity-icon" style={{ background: "rgba(2, 132, 199, 0.12)", color: "#0284c7" }}>
                  <FileText size={19} />
                </div>
                <div className="reverse-integrity-text">
                  <strong>Audit-Ready Reports</strong>
                  <small>Digitally authenticated certificates accepted nationwide by statutory boards.</small>
                </div>
              </div>

              <div className="reverse-integrity-item">
                <div className="reverse-integrity-icon" style={{ background: "rgba(217, 119, 6, 0.12)", color: "#d97706" }}>
                  <MessagesSquare size={19} />
                </div>
                <div className="reverse-integrity-text">
                  <strong>Dedicated Testing Advisory</strong>
                  <small>Direct access to qualified chemists for parameter guidance and compliance.</small>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-sm">
                <Link to="/quote">
                  Discuss Your Testing Requirements <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://wa.me/918247442084?text=Hello%20Certigo%2C%20I%20would%20like%20to%20discuss%20sample%20collection%20and%20testing%20parameters." 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2 text-emerald-600" /> Connect on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW OUR TESTING PROCESS WORKS (MATCHING USER REFERENCE DESIGN) */}
      <section className="process-flow-section fade-up-init">
        <div className="site-container">
          <div className="process-header-wrap">
            <div className="process-eyebrow-flex">
              <span className="process-eyebrow-line" />
              <span className="process-eyebrow-pill">OUR APPROACH</span>
              <span className="process-eyebrow-line" />
            </div>
            <h2 className="process-header-title">
              How Our Testing <span className="text-teal">Process Works</span>
            </h2>
            <p className="process-header-desc">
              A structured, quality-controlled testing workflow from initial parameter consultation to certified report delivery.
            </p>
          </div>

          <div className="process-flow-grid">
            {sampleSupportSteps.map((s, idx) => (
              <div 
                className="process-flow-item" 
                key={s.step}
                style={{
                  "--step-color": s.color,
                  "--step-halo": s.halo,
                  "--step-glow": s.glow
                } as React.CSSProperties}
              >
                {/* Connecting Line to next card (visible on desktop) */}
                {idx < sampleSupportSteps.length - 1 && (
                  <div className="process-flow-connector">
                    <div className="process-connector-badge">
                      <ChevronRight size={13} />
                    </div>
                  </div>
                )}

                {/* Top Emblem Circle with number badge and pointer */}
                <div className="process-circle-wrap">
                  <span className="process-circle-badge">{s.step}</span>
                  <div className="process-circle-outer" />
                  <div className="process-circle-inner">
                    <s.icon size={30} />
                  </div>
                  <div className="process-circle-pointer" />
                </div>

                {/* Card Body below the emblem */}
                <div className="process-card-body">
                  <span className="process-card-short">{s.shortTitle}</span>
                  <h3 className="process-card-title">{s.title}</h3>
                  <div className="process-card-accent-bar" />
                  <p className="process-card-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Presidential Quality Commitment Banner (Matching Reference Design) */}
          <div className="quality-pledge-banner">
            <div className="quality-pledge-badge-row">
              <span className="quality-pledge-seal">
                <Award size={15} /> OFFICIAL QUALITY PLEDGE
              </span>
              <span className="quality-pledge-iso">
                <ShieldCheck size={14} /> ISO/IEC 17025:2017 COMPLIANCE
              </span>
            </div>

            <h3 className="quality-pledge-title">Our Quality Commitment</h3>

            <div className="quality-pledge-quote-wrap">
              <span className="quality-quote-mark">“</span>
              <p className="quality-pledge-text">
                At Certigo Laboratories Private Limited, we believe that reliable laboratory testing plays an important role in protecting food safety, public health, water quality and the environment. We are committed to continuously improving our laboratory systems, technical competence and customer service to provide dependable testing support to our customers.
              </p>
              <span className="quality-quote-mark-end">”</span>
            </div>

            <div className="quality-pledge-footer">
              <div className="quality-pledge-location">
                <ShieldCheck size={16} className="text-brand-green" />
                <span>Certigo Laboratories Pvt Ltd · NABL Accreditation No. {contact.nablNumber} · Visakhapatnam, AP</span>
              </div>
              <div className="quality-pledge-actions">
                <Button asChild size="sm" className="bg-teal hover:bg-teal/90 text-white font-semibold">
                  <Link to="/quote">Request a Testing Quote <ArrowRight size={14} /></Link>
                </Button>
                <a 
                  href="https://wa.me/918247442084?text=Hello%20Certigo%2C%20I%20would%20like%20to%20verify%20the%20quality%20commitment%20and%20testing%20scope."
                  target="_blank"
                  rel="noreferrer"
                  className="quality-pledge-wa-btn"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-1 text-emerald-600" /> WhatsApp Testing Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: AUTHENTIC LABORATORY & EQUIPMENT GALLERY */}
      <section className="section gradient-section-gallery fade-up-init" id="facility-gallery">
        <div className="site-container">
          <SectionHeading 
            eyebrow="AUTHENTIC TESTING INFRASTRUCTURE"
            title="Inside Certigo: Calibrated Equipment & Testing Bench"
            description="An authentic glimpse inside our Visakhapatnam laboratory. Operating high-precision micro-balances, laminar airflow biosafety chambers, digital colony counters, and calibrated incubation suites under ISO/IEC 17025:2017 standards."
          />

          {/* Interactive Category Filter Pills */}
          <div className="gallery-filter-bar">
            {galleryCategories.map((cat) => (
              <button 
                key={cat.id} 
                className={`gallery-filter-btn ${activeGalleryFilter === cat.id ? "is-active" : ""}`}
                onClick={() => setActiveGalleryFilter(cat.id)}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery 8-Card Grid */}
          <div className="facility-gallery-grid">
            {filteredGalleryItems.map((item, idx) => (
              <article className="facility-gallery-card" key={`${item.title}-${idx}`}>
                <div className="gallery-card-media">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="gallery-card-img"
                    loading="lazy"
                    width={480}
                    height={330}
                  />
                  <span className="gallery-card-top-tag">{item.category}</span>
                  <span className="gallery-card-status-pill">
                    <CheckCircle2 size={11} /> Calibrated
                  </span>
                </div>
                <div className="gallery-card-body">
                  <span className="gallery-card-room">{item.room}</span>
                  <h3 className="gallery-card-title">{item.title}</h3>
                  <p className="gallery-card-spec">{item.spec}</p>
                  <div className="gallery-card-tags">
                    {item.tags.map((t) => (
                      <span className="gallery-card-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION 7: STUDENT PROGRAMMES & PRACTICAL LEARNING (LUXURY GRADIENT CARDS WITHOUT COUNTERS) */}
      <section className="section gradient-section-programmes fade-up-init">
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

      {/* SECTION: CLIENT TESTIMONIALS (MATCHING REFERENCE DESIGN) */}
      <section className="section gradient-section-testimonials fade-up-init" id="testimonials">
        <div className="site-container">
          <SectionHeading 
            eyebrow="CLIENT TESTIMONIALS &amp; TRUST"
            title="Trusted by Quality Leaders &amp; Researchers"
            description="What quality assurance heads, plant managers, and researchers say about testing accuracy, turnaround time, and technical competence at Certigo Laboratories."
          />

          <div className="testimonials-grid mt-10">
            {testimonialsData.map((t, idx) => (
              <div className="testimonial-item-wrap" key={idx}>
                {/* Speech Card with Top Circular Quote Emblem and Downward Pointer */}
                <div className="testimonial-speech-card">
                  <div className="testimonial-quote-emblem" aria-hidden="true">
                    <Quote size={18} />
                  </div>

                  {/* 5 Golden Stars */}
                  <div className="testimonial-stars-row">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} size={15} className="testimonial-star-icon" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="testimonial-quote-text">
                    “{t.quote}”
                  </p>
                </div>

                {/* Author Profile Below Card */}
                <div className="testimonial-author-wrap">
                  <div 
                    className="testimonial-avatar-initial" 
                    style={{ background: `linear-gradient(135deg, ${t.color} 0%, #133552 100%)` }}
                  >
                    {t.initial}
                  </div>
                  <strong className="testimonial-author-name">{t.name}</strong>
                  <span className="testimonial-author-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SECTION 8: FULL-WIDTH IMAGE CTA BANNER */}
      <section className="image-cta-section fade-up-init">
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
