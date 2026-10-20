import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight, ArrowRight, Check, ShieldCheck, FlaskConical, GraduationCap,
  Leaf, Trees, MessagesSquare, Target, Clock, Award, Lock, Layers, Eye, Compass,
  Building2, Droplets, Apple, Microscope, Wind, Phone, Mail, MapPin,
  CheckCircle2, FileText, ChevronRight, ChevronLeft, Users, ClipboardCheck, Handshake,
  Sparkles, Quote, Star, X, Maximize2, Activity, Cpu, SlidersHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, WhatsAppIcon } from "@/components/site";
import {
  services, programmes, labImage, pageHead, contact,
  standardsList, researchImage, foodImage, waterImage,
  microImage, chemImage, envImage, airImage, cellsImage, learningImage,
  heroSlide1, heroSlide2, heroSlide3
} from "@/lib/site-data";
import laminarImg from "@/assets/laminar-air-flow.jpeg";
import microscopeImg from "@/assets/microscope.jpeg";
import colonyMeterImg from "@/assets/colony-meter.jpeg";
import autoclaveImg from "@/assets/autoclave.jpeg";
import passBoxImg from "@/assets/pass-box.jpeg";
import stomacherImg from "@/assets/Stomacher blender.jpeg";
import rtPcrImg from "@/assets/RT-PCR.jpeg";
import balanceImg from "@/assets/weight-balances.jpeg";
import phMeterImg from "@/assets/ph-meter.jpeg";
import incubatorImg from "@/assets/WhatsApp Image 2026-10-17 at 1.21.22 PM.jpeg";
import hotAirOvenImg from "@/assets/WhatsApp Image 2026-10-17 at 1.21.23 PM.jpeg";
import biosafetyCabinetImg from "@/assets/WhatsApp Image 2026-10-17 at 1.21.24 PM.jpeg";
import petriDishImg from "@/assets/petri-dish-culture.jpg";
import divyaChemistImg from "@/assets/r-divya-keerthana-chemist.png";
import chemBenchImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.34 PM (2).jpeg";
export const Route = createFileRoute("/")({
  head: () => pageHead(
    "NABL Accredited Laboratory | Food, Water & Environmental Testing",
    "Certigo Laboratories Private Limited (NABL: NABLT0626AD18278) provides professional Food, Water, Microbiological, Chemical, Environmental, and Air Quality testing services in Visakhapatnam."
  ),
  component: Home
});

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
    color: "#08AFC1",
    halo: "rgba(8, 175, 193, 0.08)",
    glow: "rgba(8, 175, 193, 0.22)"
  },
  {
    step: "02",
    shortTitle: "Plan & Collect",
    title: "Sampling & Preservation",
    desc: "Standardized protocols for sample collection, appropriate container selection, cold-chain temperature preservation, and strict chain of custody documentation.",
    icon: ClipboardCheck,
    color: "#064B83",
    halo: "rgba(6, 75, 131, 0.08)",
    glow: "rgba(6, 75, 131, 0.22)"
  },
  {
    step: "03",
    shortTitle: "Analyze",
    title: "Validated Lab Testing",
    desc: "Testing conducted using validated test methods (BIS/IS, FSSAI, APHA, ISO, AOAC) with calibrated analytical instrumentation and certified reference materials.",
    icon: FlaskConical,
    color: "#39B54A",
    halo: "rgba(57, 181, 74, 0.08)",
    glow: "rgba(57, 181, 74, 0.22)"
  },
  {
    step: "04",
    shortTitle: "Deliver",
    title: "Certified Reporting",
    desc: "Prompt delivery of official, audit-ready NABL accredited test reports complete with measurement traceability, quality checks, and expert advisory support.",
    icon: Handshake,
    color: "#08AFC1",
    halo: "rgba(8, 175, 193, 0.08)",
    glow: "rgba(8, 175, 193, 0.22)"
  }
];

// Badge colors matching the reference palette
const serviceBadgeColors: Record<string, string> = {
  "environmental-testing": "#39B54A",
  "air-quality-testing": "#08AFC1",
  "water-testing": "#08AFC1",
  "food-testing": "#39B54A",
  "microbiological-testing": "#064B83",
  "chemical-testing": "#08AFC1"
};

const luxuryStudentProgrammes = [
  {
    slug: "short-term-internships",
    path: "/programmes/short-term-internships" as const,
    title: "Short-Term Internships",
    durationBadge: "15–30 Days · Hands-On Bench",
    icon: FlaskConical,
    accent: "#08AFC1",
    gradient: "linear-gradient(135deg, rgba(8, 175, 193, 0.14) 0%, rgba(6, 75, 131, 0.05) 100%)",
    glow: "rgba(8, 175, 193, 0.22)",
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
    accent: "#08AFC1",
    gradient: "linear-gradient(135deg, rgba(8, 175, 193, 0.14) 0%, rgba(6, 75, 131, 0.05) 100%)",
    glow: "rgba(8, 175, 193, 0.22)",
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
    accent: "#39B54A",
    gradient: "linear-gradient(135deg, rgba(57, 181, 74, 0.14) 0%, rgba(6, 75, 131, 0.05) 100%)",
    glow: "rgba(57, 181, 74, 0.22)",
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

export interface IrregularLabItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  cluster: "micro" | "molecular" | "cleanroom" | "center";
  shapeClass: string;
}

const irregularLabItems: IrregularLabItem[] = [
  // Centerpiece: Focal Facility Anchor (Authentic Laboratory Chemist & Instrumentation)
  {
    id: "center-facility",
    title: "Certigo Analytical Chemistry & Testing Laboratory",
    subtitle: "Ms. R. Divya Keerthana (Chemist, B.Sc. Chemistry) operating Real-Time PCR & analytical instrumentation",
    image: divyaChemistImg,
    tag: "Analytical Chemist",
    cluster: "center",
    shapeClass: "organic-centerpiece-card"
  },
  // Pod 1: Microbiology & Biosafety (Left Satellite Pod)
  {
    id: "mic",
    title: "Binocular Research Microscope",
    subtitle: "1000x oil-immersion optics for cellular morphology",
    image: microscopeImg,
    tag: "1000x Optical",
    cluster: "micro",
    shapeClass: "shape-organic-1"
  },
  {
    id: "laf",
    title: "Laminar Air Flow Clean Bench",
    subtitle: "ISO Class 5 vertical HEPA aseptic chamber",
    image: laminarImg,
    tag: "HEPA 99.99%",
    cluster: "micro",
    shapeClass: "shape-organic-2"
  },
  {
    id: "bio",
    title: "Class II Type A2 Biosafety Cabinet",
    subtitle: "HEPA filtered biological containment chamber",
    image: biosafetyCabinetImg,
    tag: "Class II A2",
    cluster: "micro",
    shapeClass: "shape-organic-3"
  },
  {
    id: "col",
    title: "Digital Colony Counter",
    subtitle: "Pressure-touch CFU enumeration with dark-field lens",
    image: colonyMeterImg,
    tag: "0–9999 CFU",
    cluster: "micro",
    shapeClass: "shape-organic-4"
  },
  // Pod 2: Molecular & Analytical (Right Satellite Pod)
  {
    id: "pcr",
    title: "Real-Time PCR (RT-PCR) System",
    subtitle: "Automated 96-well fluorescent molecular detection",
    image: rtPcrImg,
    tag: "Real-Time PCR",
    cluster: "molecular",
    shapeClass: "shape-organic-5"
  },
  {
    id: "aut",
    title: "Vertical Steam Autoclave",
    subtitle: "121°C @ 15 PSI validated thermal sterilization",
    image: autoclaveImg,
    tag: "121°C Steam",
    cluster: "molecular",
    shapeClass: "shape-organic-6"
  },
  {
    id: "chem",
    title: "Chemical Testing & Fume Bench",
    subtitle: "Analytical chemical preparation and assays",
    image: chemBenchImg,
    tag: "Chemical Bench",
    cluster: "molecular",
    shapeClass: "shape-organic-7"
  },
  {
    id: "inc",
    title: "Controlled Temperature BOD Incubator",
    subtitle: "Constant temperature chambers for microbial growth",
    image: incubatorImg,
    tag: "BOD Incubator",
    cluster: "molecular",
    shapeClass: "shape-organic-8"
  },
  // Pod 3: Cleanroom, Weighing & Sample Prep (Bottom Satellite Pod)
  {
    id: "bal",
    title: "Analytical Micro-Balance",
    subtitle: "0.0001g electro-magnetic force cell with draft shield",
    image: balanceImg,
    tag: "0.0001g Precision",
    cluster: "cleanroom",
    shapeClass: "shape-bot-1"
  },
  {
    id: "ph",
    title: "Benchtop Digital pH Meter",
    subtitle: "Multi-point calibrated electrode for water testing",
    image: phMeterImg,
    tag: "±0.002 pH",
    cluster: "cleanroom",
    shapeClass: "shape-bot-2"
  },
  {
    id: "pass",
    title: "Cleanroom Dynamic Pass Box",
    subtitle: "Interlocking cleanroom airlock with UV decontamination",
    image: passBoxImg,
    tag: "UV Interlock",
    cluster: "cleanroom",
    shapeClass: "shape-bot-3"
  },
  {
    id: "stb",
    title: "Stomacher Laboratory Blender",
    subtitle: "Sterile paddle homogenization for sample preparation",
    image: stomacherImg,
    tag: "Homogenizer",
    cluster: "cleanroom",
    shapeClass: "shape-bot-4"
  },
  {
    id: "oven",
    title: "Digital Forced-Air Hot Air Oven",
    subtitle: "Up to 250°C dry heat sterilization for lab glassware",
    image: hotAirOvenImg,
    tag: "Dry Heat 250°C",
    cluster: "cleanroom",
    shapeClass: "shape-bot-5"
  }
];

const nablDisciplines = [
  { icon: Apple, name: "Food & Agriculture", sub: "Proximate, Residues & FSSAI", color: "#39B54A", bg: "rgba(57, 181, 74, 0.12)" },
  { icon: Droplets, name: "Drinking & Packaged Water", sub: "IS 10500 Potability & Minerals", color: "#064B83", bg: "rgba(6, 75, 131, 0.12)" },
  { icon: Microscope, name: "Microbiological Testing", sub: "Pathogens, Coliforms & Sterility", color: "#08AFC1", bg: "rgba(8, 175, 193, 0.12)" },
  { icon: FlaskConical, name: "Analytical Chemistry", sub: "Heavy Metals, Assays & Assays", color: "#064B83", bg: "rgba(6, 75, 131, 0.12)" },
  { icon: Trees, name: "Environmental Monitoring", sub: "Effluent, ETP & APPCB Rules", color: "#39B54A", bg: "rgba(57, 181, 74, 0.12)" },
  { icon: Wind, name: "Ambient & Stack Air", sub: "PM2.5, PM10, SOx, NOx & Noise", color: "#08AFC1", bg: "rgba(8, 175, 193, 0.12)" }
];

const testimonialsData = [
  {
    initial: "Q",
    name: "Quality Assurance Lead",
    role: "Packaged Drinking Water (IS 10500)",
    color: "#08AFC1",
    quote: "Certigo Laboratories has been our dependable partner for routine IS 10500 potability and trace metal testing. Their NABL accredited certificates are delivered on schedule and fully audit-ready."
  },
  {
    initial: "P",
    name: "Plant Operations Director",
    role: "Commercial Food Manufacturing",
    color: "#064B83",
    quote: "A collaborative approach, thoughtful solutions, and a testing team that truly understands our batch release goals. Their turnaround time for microbiological pathogen screening is exceptional."
  },
  {
    initial: "E",
    name: "Environmental Compliance Head",
    role: "Industrial Effluents & Ambient Air",
    color: "#39B54A",
    quote: "The right balance of technical expertise and clear communication. Their stack emission and wastewater monitoring reports strictly adhere to CPCB and APPCB regulatory compliance guidelines."
  },
  {
    initial: "S",
    name: "MSc Biotechnology Scholar",
    role: "Academic Dissertation & Project Research",
    color: "#08AFC1",
    quote: "A fresh perspective on laboratory science. Direct bench training on calibrated micro-balances, laminar airflow chambers, and digital colony counters gave me immense practical confidence."
  }
];

const heroSlides = [
  {
    image: heroSlide1,
    tag: "NABL Accredited Laboratory (NABL No. NABLT0626AD18278)",
    heading: "Certigo Laboratories",
    sloganQuality: "You Deserve the quality",
    sloganSafety: "We are determined for your safety",
    description: "Professional laboratory testing services for Food, Water, Microbiological, Chemical, Environmental and Air Quality monitoring — supporting industries, institutions, and communities.",
    primaryCta: { text: "Explore Testing Services", link: "/services" },
    secondaryCta: { text: "Request a Testing Quote", link: "/quote" }
  },
  {
    image: heroSlide2,
    tag: "ISO/IEC 17025:2017 CERTIFIED FACILITY",
    heading: "Advanced Analytical Testing",
    sloganQuality: "Precision & Standard Protocols",
    sloganSafety: "We are determined for your safety",
    description: "Equipped with state-of-the-art analytical equipment and validated standard methods (BIS, FSSAI, APHA, AOAC) to deliver audit-ready certificates on schedule.",
    primaryCta: { text: "View Food & Water Testing", link: "/services/food-testing" },
    secondaryCta: { text: "Consult Lab Scientists", link: "/contact" }
  },
  {
    image: heroSlide3,
    tag: "ENVIRONMENTAL & MICROBIAL EXCELLENCE",
    heading: "Scientific Integrity & Safety",
    sloganQuality: "You Deserve the quality",
    sloganSafety: "Safeguarding Health & Compliance",
    description: "Comprehensive environmental monitoring, effluent characterization, stack emissions, and strict pathogen microbial screening for industries and healthcare units.",
    primaryCta: { text: "Explore Environmental Testing", link: "/services/environmental-testing" },
    secondaryCta: { text: "Request a Testing Quote", link: "/quote" }
  }
];

const refCircularServices = [
  {
    title: "Food Testing",
    sub: "Safe Food, Healthy Lives",
    path: "/services/food-testing" as const,
    icon: Apple,
    color: "#39B54A"
  },
  {
    title: "Water Testing",
    sub: "Safe Water, Safer Communities",
    path: "/services/water-testing" as const,
    icon: Droplets,
    color: "#064B83"
  },
  {
    title: "Microbiological Testing",
    sub: "Detect Today, Prevent Tomorrow",
    path: "/services/microbiological-testing" as const,
    icon: Microscope,
    color: "#08AFC1"
  },
  {
    title: "Chemical Testing",
    sub: "Accurate Analysis, Reliable Results",
    path: "/services/chemical-testing" as const,
    icon: FlaskConical,
    color: "#064B83"
  },
  {
    title: "Environmental Testing",
    sub: "Cleaner Environment for a Healthier Tomorrow",
    path: "/services/environmental-testing" as const,
    icon: Trees,
    color: "#39B54A"
  },
  {
    title: "Air Quality Testing",
    sub: "Breathable Air, Better Living",
    path: "/services/air-quality-testing" as const,
    icon: Wind,
    color: "#08AFC1"
  }
];

const refPosterTrust = [
  {
    icon: ShieldCheck,
    title: "NABL Accredited Laboratory",
    sub: `(NABL No. ${contact.nablNumber})`
  },
  {
    icon: Target,
    title: "Accurate & Reliable Results",
    sub: "• ISO • IEC"
  },
  {
    icon: Clock,
    title: "Timely Service",
    sub: "Committed Turnaround Schedules"
  },
  {
    icon: Handshake,
    title: "Serving Food, Water, Environment & Air Safety",
    sub: "Trusted Partner Across Andhra Pradesh"
  }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeItem, setActiveItem] = useState<IrregularLabItem>(irregularLabItems[0]);
  const [activeLightboxItem, setActiveLightboxItem] = useState<IrregularLabItem | null>(null);
  const [activeCluster, setActiveCluster] = useState<"all" | "micro" | "molecular" | "cleanroom">("all");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightboxItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

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
      {/* 1. HERO SECTION CAROUSEL WITH CLEAN LAB PHOTOGRAPHY */}
      <section className="home-hero" aria-label="Certigo Laboratories Highlights Carousel">
        {heroSlides.map((slide, idx) => (
          <img 
            key={idx}
            className={`hero-carousel-slide ${idx === currentSlide ? "is-active" : ""}`} 
            src={slide.image} 
            alt={`${slide.heading} - Certigo Laboratories`} 
            width={1920} 
            height={1024} 
            fetchPriority={idx === 0 ? "high" : "low"} 
          />
        ))}
        <div className="hero-wash" />

        {/* Carousel arrows positioned at extreme left and extreme right */}
        <button
          type="button"
          className="hero-carousel-arrow-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          className="hero-carousel-arrow-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel dots positioned at bottom center */}
        <div className="hero-carousel-dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`hero-carousel-dot ${idx === currentSlide ? "is-active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="site-container hero-container">
          <div className="hero-content">
            <div className="hero-tag-badge">
              <ShieldCheck size={14} className="hero-tag-icon" /> {heroSlides[currentSlide].tag}
            </div>
            <h1>{heroSlides[currentSlide].heading}</h1>
            <div className="hero-slogan-wrap">
              {heroSlides[currentSlide].sloganQuality === "Precision & Standard Protocols" ? (
                <div className="hero-pill-badge-row">
                  <span className="hero-pill-badge">
                    Precision &amp; Standard Protocols
                  </span>
                </div>
              ) : (
                <div className="slogan-quality">{heroSlides[currentSlide].sloganQuality}</div>
              )}
              <div className="slogan-safety">
                {heroSlides[currentSlide].sloganSafety}
                <span className="slogan-underline" />
              </div>
            </div>
            <p>
              {heroSlides[currentSlide].description}
            </p>
            <div className="hero-buttons">
              <Button asChild size="lg" className="hero-btn-primary">
                <Link to={heroSlides[currentSlide].primaryCta.link}>
                  {heroSlides[currentSlide].primaryCta.text} <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild size="lg" className="hero-btn-secondary">
                <Link to={heroSlides[currentSlide].secondaryCta.link}>
                  {heroSlides[currentSlide].secondaryCta.text} <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP MATCHING REFERENCE IMAGE 1 */}
      <section className="site-container fade-up-init" style={{ marginTop: "24px", marginBottom: "16px" }}>
        <div className="ref-trust-bar">
          {refPosterTrust.map((t, idx) => (
            <div className="ref-trust-item" key={idx}>
              <div className="ref-trust-icon-ring">
                <t.icon size={22} />
              </div>
              <div className="ref-trust-item-text">
                <strong>{t.title}</strong>
                <small>{t.sub}</small>
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

            {/* 3 Pillars Highlight matching reference colors */}
            <div className="intro-pillars mb-8">
              <div className="intro-pillar-item">
                <div className="intro-pillar-icon" style={{ background: "rgba(8,175,193,0.12)", color: "#08AFC1" }}>
                  <FlaskConical size={20} />
                </div>
                <div className="intro-pillar-content">
                  <strong>Testing with Purpose</strong>
                  <small>Food, Water, Microbiological, Chemical &amp; Environmental testing</small>
                </div>
              </div>
              <div className="intro-pillar-item">
                <div className="intro-pillar-icon" style={{ background: "rgba(57,181,74,0.14)", color: "#39B54A" }}>
                  <ShieldCheck size={20} />
                </div>
                <div className="intro-pillar-content">
                  <strong>Technical Competence &amp; Quality</strong>
                  <small>NABL Accreditation No. {contact.nablNumber} &amp; calibrated instrumentation</small>
                </div>
              </div>
              <div className="intro-pillar-item">
                <div className="intro-pillar-icon" style={{ background: "rgba(6,75,131,0.1)", color: "#064B83" }}>
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
          {/* Header with green flanking lines matching Image 1 */}
          <div className="ref-services-header">
            <span className="ref-header-line" />
            <h2>OUR TESTING SERVICES</h2>
            <span className="ref-header-line" />
          </div>

          {/* 6 Circular Service Badges circled by user in Image 1 */}
          <div className="ref-services-grid">
            {refCircularServices.map((cs) => (
              <Link to={cs.path} className="ref-service-card" key={cs.title}>
                <div className="ref-circle-badge" style={{ color: cs.color }}>
                  <div className="ref-circle-inner">
                    <cs.icon size={36} />
                  </div>
                </div>
                <h3 className="ref-service-title">{cs.title}</h3>
                <p className="ref-service-subtitle">{cs.sub}</p>
              </Link>
            ))}
          </div>

          {/* 6 Photo Cards Grid with authentic branded laboratory images */}
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

          {/* Signature Safety Wave Banner matching Image 1 */}
          <div className="ref-bottom-banner mt-16 rounded-2xl shadow-xl">
            <div className="site-container ref-banner-inner">
              <div className="ref-banner-left">
                <div className="ref-banner-leaf-icon">
                  <Leaf size={32} className="text-lime-400" />
                </div>
                <div className="ref-banner-divider" />
                <div className="ref-banner-headings">
                  <span className="ref-banner-title">You Deserve the quality</span>
                  <span className="ref-banner-subtitle">
                    We are determined for your safety
                    <span className="ref-banner-underline" />
                  </span>
                </div>
              </div>
              <div className="ref-banner-right">
                <div className="ref-petri-circle">
                  <img
                    src={petriDishImg}
                    alt="Bacterial culture examination in sterile Petri dish"
                    className="ref-petri-img"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div className="ref-banner-wave">
              <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
                <path d="M0,0 C360,50 1080,50 1440,0 L1440,60 L0,60 Z" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: QUALITY & TECHNICAL COMPETENCE + NABL ACCREDITATION (CLEAN & SIMPLE) */}
      <section className="section gradient-section-nabl-suite fade-up-init" id="nabl-accreditation">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="eyebrow mb-3" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span className="nabl-pulse-dot" /> QUALITY &amp; TECHNICAL COMPETENCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary font-bold mb-3">
              NABL Accreditation &amp; Validated Standards
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Formally accredited under <strong>ISO/IEC 17025:2017</strong> for testing competence, calibrated instrumentation, and legal test certificates accepted nationwide.
            </p>
          </div>

          {/* Very Simple & Attractive NABL Accreditation Card */}
          <div className="nabl-simple-card">
            {/* Top Bar: Certificate Plaque & Status */}
            <div className="nabl-simple-topbar">
              <div className="nabl-simple-cert-info">
                <div className="nabl-simple-shield">
                  <ShieldCheck size={26} className="text-brand-green" />
                </div>
                <div>
                  <div className="nabl-simple-cert-label">NABL ACCREDITED LABORATORY · ISO/IEC 17025:2017</div>
                  <h3 className="nabl-simple-cert-title">
                    National Accreditation Board for Testing &amp; Calibration Laboratories
                  </h3>
                </div>
              </div>

              <div className="nabl-simple-cert-badge">
                <span className="nabl-simple-badge-label">Certificate No:</span>
                <span className="nabl-simple-badge-val">{contact.nablNumber}</span>
                <span className="nabl-simple-verified">
                  <CheckCircle2 size={13} /> Active Scope
                </span>
              </div>
            </div>

            {/* 4 Clean Competence Pillars */}
            <div className="nabl-simple-grid">
              <div className="nabl-simple-item">
                <div className="nabl-simple-icon" style={{ background: "rgba(57,181,74,0.12)", color: "#278834" }}>
                  <Award size={20} />
                </div>
                <div>
                  <h4>ISO/IEC 17025:2017</h4>
                  <p>Accredited quality management system &amp; testing procedures</p>
                </div>
              </div>

              <div className="nabl-simple-item">
                <div className="nabl-simple-icon" style={{ background: "rgba(8,175,193,0.12)", color: "#08AFC1" }}>
                  <FlaskConical size={20} />
                </div>
                <div>
                  <h4>Calibrated Equipment</h4>
                  <p>Certified reference materials (CRM) traceable to NIST &amp; NPL</p>
                </div>
              </div>

              <div className="nabl-simple-item">
                <div className="nabl-simple-icon" style={{ background: "rgba(6,75,131,0.1)", color: "#064B83" }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4>Statutory Acceptance</h4>
                  <p>Recognized by FSSAI, BIS, APPCB, CPCB &amp; audit authorities</p>
                </div>
              </div>

              <div className="nabl-simple-item">
                <div className="nabl-simple-icon" style={{ background: "rgba(14,165,233,0.12)", color: "#0284c7" }}>
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4>Audit-Ready Reports</h4>
                  <p>Legally valid test certificates with measurement uncertainty</p>
                </div>
              </div>
            </div>

            {/* Bottom Row: Disciplines Chips & Quick Action */}
            <div className="nabl-simple-footer">
              <div className="nabl-simple-chips">
                <span className="nabl-simple-chip-title">Disciplines:</span>
                <span className="nabl-chip">Food &amp; Agriculture</span>
                <span className="nabl-chip">Drinking &amp; Packaged Water</span>
                <span className="nabl-chip">Microbiology</span>
                <span className="nabl-chip">Chemical Assays</span>
                <span className="nabl-chip">Environmental</span>
                <span className="nabl-chip">Air Quality</span>
              </div>

              <div className="nabl-simple-actions">
                <Button asChild size="sm" className="bg-teal hover:bg-teal/90 text-white font-semibold text-xs px-4">
                  <Link to="/contact">
                    Verify Scope <ArrowUpRight size={14} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES & SECTORS WE SERVE (SINGLE-ROW AUTO-SCROLL WITH CIRCULAR PHOTO CARDS MATCHING REFERENCE UI) */}
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

      {/* SECTION 5: WHY CHOOSE CERTIGO LABORATORIES? (SIMPLE, MINIMALIST UI) */}
      <section className="section gradient-section-why fade-up-init">
        <div className="site-container">
          <SectionHeading
            eyebrow="WHY CHOOSE CERTIGO LABORATORIES?"
            title="Technical Excellence You Can Depend On"
            description="We focus on generating dependable and technically sound test results through systematic procedures, certified analytical instrumentation, and client-focused service."
          />

          <div className="simple-why-grid">
            <div className="simple-why-item">
              <div className="simple-why-icon-box" style={{ background: "rgba(8, 175, 193, 0.12)", color: "#08AFC1" }}>
                <Target size={24} />
              </div>
              <h4>Accurate &amp; Traceable Analysis</h4>
              <p>Standardized test methods (BIS, FSSAI, APHA, ISO) with calibrated instrumentation traceable to national standards.</p>
            </div>

            <div className="simple-why-item">
              <div className="simple-why-icon-box" style={{ background: "rgba(57, 181, 74, 0.12)", color: "#39B54A" }}>
                <ShieldCheck size={24} />
              </div>
              <h4>Systematic QA/QC &amp; Reliability</h4>
              <p>Rigorous quality control with matrix spikes, duplicate testing runs, and blind sample quality assurance.</p>
            </div>

            <div className="simple-why-item">
              <div className="simple-why-icon-box" style={{ background: "rgba(6, 75, 131, 0.12)", color: "#064B83" }}>
                <Clock size={24} />
              </div>
              <h4>Predictable &amp; Timely Service</h4>
              <p>Audit-ready test reports delivered on schedule to support your batch release and regulatory statutory filings.</p>
            </div>

            <div className="simple-why-item">
              <div className="simple-why-icon-box" style={{ background: "rgba(8, 175, 193, 0.12)", color: "#08AFC1" }}>
                <MessagesSquare size={24} />
              </div>
              <h4>Dedicated Advisory Support</h4>
              <p>Direct communication with qualified analytical chemists for scope definition, parameter selection, and compliance guidance.</p>
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
        </div>
      </section>

      {/* SECTION: AUTHENTIC TESTING INFRASTRUCTURE (ORGANIC SATELLITE CLUSTER) */}
      <section className="section gradient-section-gallery fade-up-init" id="facility-gallery">
        <div className="site-container">
          <SectionHeading
            eyebrow="AUTHENTIC TESTING INFRASTRUCTURE"
            title="Inside Certigo: Calibrated Equipment & Testing Bench"
            description="Authentic laboratory instrumentation and calibrated testing facilities operating under strict ISO/IEC 17025 standards."
          />

          <div className="organic-cluster-showcase mt-8 mb-6">
            {/* Cluster Category Filter Pills */}
            <div className="cluster-filter-row">
              <button
                type="button"
                className={`cluster-filter-btn ${activeCluster === "all" ? "is-active" : ""}`}
                onClick={() => setActiveCluster("all")}
              >
                <Layers size={14} /> All Authentic Facilities ({irregularLabItems.length})
              </button>
              <button
                type="button"
                className={`cluster-filter-btn ${activeCluster === "micro" ? "is-active" : ""}`}
                onClick={() => setActiveCluster("micro")}
              >
                <Microscope size={14} /> Microbiology &amp; Culture
              </button>
              <button
                type="button"
                className={`cluster-filter-btn ${activeCluster === "molecular" ? "is-active" : ""}`}
                onClick={() => setActiveCluster("molecular")}
              >
                <FlaskConical size={14} /> Molecular &amp; Analytical
              </button>
              <button
                type="button"
                className={`cluster-filter-btn ${activeCluster === "cleanroom" ? "is-active" : ""}`}
                onClick={() => setActiveCluster("cleanroom")}
              >
                <ShieldCheck size={14} /> Cleanroom &amp; Precision
              </button>
            </div>

            {/* Organic Constellation Canvas */}
            <div className="organic-constellation-canvas">
              {/* Pod 1: Left Satellite (Microbiology) */}
              <div className="organic-pod pod-left">
                <div className="pod-badge-pill">
                  <Microscope size={12} /> Microbiology Pod
                </div>
                <div className="pod-cards-group">
                  {irregularLabItems.filter(item => item.cluster === "micro").map((item) => {
                    const isActive = activeItem.id === item.id;
                    const isDimmed = activeCluster !== "all" && activeCluster !== "micro";
                    return (
                      <div
                        key={item.id}
                        className={`organic-card ${item.shapeClass} ${isActive ? "is-active" : ""} ${isDimmed ? "is-dimmed" : ""}`}
                        onMouseEnter={() => setActiveItem(item)}
                        onClick={() => {
                          setActiveItem(item);
                          setActiveLightboxItem(item);
                        }}
                        title={item.title}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="organic-card-img"
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Centerpiece: Anchored Focal Facility with Pulsing Aura */}
              <div className="organic-pod pod-center">
                {(() => {
                  const centerItem = irregularLabItems[0];
                  const isActive = activeItem.id === centerItem.id;
                  const isDimmed = activeCluster !== "all";
                  return (
                    <div
                      className={`organic-centerpiece-card ${isActive ? "is-active" : ""} ${isDimmed ? "is-dimmed" : ""}`}
                      onMouseEnter={() => setActiveItem(centerItem)}
                      onClick={() => {
                        setActiveItem(centerItem);
                        setActiveLightboxItem(centerItem);
                      }}
                      title={centerItem.title}
                    >
                      <div className="centerpiece-aura" />
                      <img
                        src={centerItem.image}
                        alt={centerItem.title}
                        className="organic-card-img"
                        loading="lazy"
                      />
                    </div>
                  );
                })()}
              </div>

              {/* Pod 2: Right Satellite (Molecular & Analytical) */}
              <div className="organic-pod pod-right">
                <div className="pod-badge-pill">
                  <FlaskConical size={12} /> Molecular &amp; Analytical Pod
                </div>
                <div className="pod-cards-group">
                  {irregularLabItems.filter(item => item.cluster === "molecular").map((item) => {
                    const isActive = activeItem.id === item.id;
                    const isDimmed = activeCluster !== "all" && activeCluster !== "molecular";
                    return (
                      <div
                        key={item.id}
                        className={`organic-card ${item.shapeClass} ${isActive ? "is-active" : ""} ${isDimmed ? "is-dimmed" : ""}`}
                        onMouseEnter={() => setActiveItem(item)}
                        onClick={() => {
                          setActiveItem(item);
                          setActiveLightboxItem(item);
                        }}
                        title={item.title}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="organic-card-img"
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Pod 3: Bottom Satellite (Cleanroom, Precision & Prep) */}
              <div className="organic-pod pod-bottom">
                <div className="pod-badge-pill">
                  <ShieldCheck size={12} /> Cleanroom &amp; Precision Pod
                </div>
                <div className="pod-cards-group">
                  {irregularLabItems.filter(item => item.cluster === "cleanroom").map((item) => {
                    const isActive = activeItem.id === item.id;
                    const isDimmed = activeCluster !== "all" && activeCluster !== "cleanroom";
                    return (
                      <div
                        key={item.id}
                        className={`organic-card ${item.shapeClass} ${isActive ? "is-active" : ""} ${isDimmed ? "is-dimmed" : ""}`}
                        onMouseEnter={() => setActiveItem(item)}
                        onClick={() => {
                          setActiveItem(item);
                          setActiveLightboxItem(item);
                        }}
                        title={item.title}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="organic-card-img"
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Active Equipment Name Display - Safely Positioned BELOW the gallery (Zero Text Over Images) */}
            <div className="irregular-caption-bar mt-6 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white border border-primary/15 px-6 py-2.5 rounded-full shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-teal bg-teal/10 px-2.5 py-0.5 rounded-full">
                  {activeItem.tag}
                </span>
                <strong className="text-primary text-sm sm:text-base font-bold font-sans">
                  {activeItem.title}
                </strong>
                <span className="hidden sm:inline text-muted-foreground/40">|</span>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {activeItem.subtitle}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveLightboxItem(activeItem)}
                  className="ml-1 text-xs font-bold text-teal hover:text-brand-green transition-colors inline-flex items-center gap-1 cursor-pointer"
                  title="View full-screen photograph"
                >
                  <Maximize2 size={12} /> Inspect Photo
                </button>
              </div>
            </div>
          </div>

          {/* Full-Screen Lightbox Modal */}
          {activeLightboxItem && (
            <div
              className="equipment-modal-backdrop"
              onClick={() => setActiveLightboxItem(null)}
            >
              <div
                className="equipment-lightbox-dialog"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="equipment-modal-close"
                  onClick={() => setActiveLightboxItem(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                <div className="equipment-lightbox-content">
                  <div className="equipment-lightbox-media">
                    <img
                      src={activeLightboxItem.image}
                      alt={activeLightboxItem.title}
                      className="equipment-lightbox-img"
                    />
                  </div>
                  <div className="equipment-lightbox-footer">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal block mb-1">
                        {activeLightboxItem.tag}
                      </span>
                      <h3 className="equipment-lightbox-title">{activeLightboxItem.title}</h3>
                      <p className="equipment-lightbox-sub">
                        {activeLightboxItem.subtitle}
                      </p>
                    </div>
                    <Button asChild size="sm" className="hero-btn-primary">
                      <Link to={`/quote?equipment=${encodeURIComponent(activeLightboxItem.title)}`}>
                        Enquire for Testing <ArrowUpRight size={14} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
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

      {/* SECTION: OUR COMMITMENT */}
      <section className="section gradient-section-mesh fade-up-init">
        <div className="site-container text-center max-w-3xl mx-auto">
          <span className="eyebrow">OUR COMMITMENT</span>
          <h2 className="text-3xl font-serif text-primary mb-4">Dedicated to Food Safety &amp; Public Health</h2>
          <p className="text-base text-muted-foreground leading-relaxed italic mb-8">
            “At Certigo Laboratories Private Limited, we believe that reliable laboratory testing plays an important role in protecting food safety, public health, water quality and the environment. We are committed to continuously improving our laboratory systems, technical competence and customer service to provide dependable testing support to our customers.”
          </p>
          <div className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-xs font-semibold mb-8 shadow-sm">
            <ShieldCheck size={16} className="text-teal" /> Visakhapatnam, Andhra Pradesh · NABL Accredited
          </div>

          {/* Slogan Banner with Green color combination font */}
          <div className="slogan-commitment-box mt-2">
            <div className="slogan-green-quote">“You deserve the quality”</div>
            <div className="slogan-green-sub">“We are determined for your safety”</div>
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
