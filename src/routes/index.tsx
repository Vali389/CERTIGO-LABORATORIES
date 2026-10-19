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
import realMicroscopeImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.36 PM.jpeg";
import realLaminarImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.34 PM (1).jpeg";
import realBalanceImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.34 PM.jpeg";
import realAutoclaveImg from "@/assets/WhatsApp Image 2026-10-17 at 1.21.21 PM.jpeg";
import realIncubatorImg from "@/assets/WhatsApp Image 2026-10-17 at 1.21.22 PM.jpeg";
import realHotAirOvenImg from "@/assets/WhatsApp Image 2026-10-17 at 1.21.23 PM.jpeg";
import realBiosafetyImg from "@/assets/WhatsApp Image 2026-10-17 at 1.21.24 PM.jpeg";
import realHomogenizerImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.35 PM.jpeg";
import realBinocularImg from "@/assets/WhatsApp Image 2026-10-15 at 1.04.37 PM.jpeg";
import petriDishImg from "@/assets/petri-dish-culture.jpg";
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

const facilityCategories = [
  { id: "all", label: "All Infrastructure", count: 9 },
  { id: "microbiology", label: "Microbiology Suite", count: 4 },
  { id: "chemistry", label: "Analytical Chemistry", count: 2 },
  { id: "water-env", label: "Water & Environmental", count: 1 },
  { id: "prep-sterility", label: "Sterilization & Prep", count: 2 }
];

const nablDisciplines = [
  { icon: Apple, name: "Food & Agriculture", sub: "Proximate, Residues & FSSAI", color: "#39B54A", bg: "rgba(57, 181, 74, 0.12)" },
  { icon: Droplets, name: "Drinking & Packaged Water", sub: "IS 10500 Potability & Minerals", color: "#064B83", bg: "rgba(6, 75, 131, 0.12)" },
  { icon: Microscope, name: "Microbiological Testing", sub: "Pathogens, Coliforms & Sterility", color: "#08AFC1", bg: "rgba(8, 175, 193, 0.12)" },
  { icon: FlaskConical, name: "Analytical Chemistry", sub: "Heavy Metals, Assays & Assays", color: "#064B83", bg: "rgba(6, 75, 131, 0.12)" },
  { icon: Trees, name: "Environmental Monitoring", sub: "Effluent, ETP & APPCB Rules", color: "#39B54A", bg: "rgba(57, 181, 74, 0.12)" },
  { icon: Wind, name: "Ambient & Stack Air", sub: "PM2.5, PM10, SOx, NOx & Noise", color: "#08AFC1", bg: "rgba(8, 175, 193, 0.12)" }
];

const facilityGalleryItems = [
  {
    id: "EQ-BAL-01",
    image: realBalanceImg,
    title: "Analytical Micro-Balance (0.0001g)",
    room: "Weighing & Reference Suite",
    category: "Analytical Chemistry",
    categoryKey: "chemistry",
    spec: "Calibrated 0.0001g balance for high-precision analytical weighing.",
    precision: "± 0.0001 g",
    standard: "ISO/IEC 17025",
    tags: ["0.0001g Precision", "CRM Traceable", "Anti-Draft Shield"],
    features: [
      "Electromagnetic force compensation weighing cell",
      "Draft shield with anti-static coated glass panels",
      "Traceable calibration against NPL reference standards",
      "Automatic internal temperature-triggered recalibration"
    ]
  },
  {
    id: "EQ-LAF-02",
    image: realLaminarImg,
    title: "Laminar Air Flow Clean Bench (Type A2)",
    room: "Microbiology Inoculation Suite",
    category: "Microbiology Suite",
    categoryKey: "microbiology",
    spec: "ISO Class 5 vertical HEPA chamber for sterile sample inoculation.",
    precision: "99.997% @ 0.3μm",
    standard: "ISO 14644-1 Class 5",
    tags: ["HEPA 99.99%", "UV Germicidal Lamp", "Aseptic Handling"],
    features: [
      "Ultra-low penetration air (HEPA) filtration matrix",
      "Continuous airflow velocity monitor (0.45 m/s ± 20%)",
      "Programmable UV decontamination cycle with interlock",
      "Certified aseptic bench for pathogen inoculation"
    ]
  },
  {
    id: "EQ-DCC-03",
    image: realMicroscopeImg,
    title: "Digital Colony Counter & Inoculation Bench",
    room: "Microbial Enumeration Lab",
    category: "Microbiology Suite",
    categoryKey: "microbiology",
    spec: "Pressure-sensitive digital colony counter with optical magnification.",
    precision: "0 - 9,999 CFU",
    standard: "BAM / ISO 7218",
    tags: ["CFU Enumeration", "Magnified Lens", "Pressure Touch Sensor"],
    features: [
      "Glare-free ring illumination with dark-field contrast",
      "Pressure-sensitive electronic pen sensor with audible beep",
      "Wolfhugel grid counting mask with 1.7x / 3x distortion-free lens",
      "Direct digital readout for standardized microbiological counts"
    ]
  },
  {
    id: "EQ-MIC-04",
    image: realBinocularImg,
    title: "High-Power Binocular Research Microscope",
    room: "Cellular & Morphology Station",
    category: "Microbiology Suite",
    categoryKey: "microbiology",
    spec: "Achromatic 1000x oil-immersion optics for microbial morphology.",
    precision: "1000x Optical",
    standard: "DIN / ISO 19012",
    tags: ["1000x Magnification", "LED Illumination", "Oil Immersion 100x"],
    features: [
      "Quadruple revolving nosepiece with plan-achromatic objectives",
      "Coaxial coarse and fine focusing with 0.002mm graduation",
      "Abbe condenser N.A. 1.25 with iris diaphragm & filter holder",
      "Pure white LED Koehler illumination for high resolution"
    ]
  },
  {
    id: "EQ-INC-05",
    image: realIncubatorImg,
    title: "Standard & BOD Controlled-Temperature Incubators",
    room: "Controlled Incubation Lab",
    category: "Water & Environmental",
    categoryKey: "water-env",
    spec: "Controlled chambers for BOD assays and microbial incubation.",
    precision: "± 0.1°C Stability",
    standard: "IS 3025 (Part 44) / APHA",
    tags: ["20°C / 37°C / 44°C", "Microprocessor Control", "5-Day BOD Testing"],
    features: [
      "Microprocessor PID temperature controller with dual sensors",
      "Continuous air circulation for uniform thermal gradient",
      "Hermetically sealed refrigeration unit for 20°C BOD incubation",
      "Digital safety thermostat and high-temperature cutoff alarm"
    ]
  },
  {
    id: "EQ-AUT-06",
    image: realAutoclaveImg,
    title: "Vertical High-Pressure Sterilization Autoclave",
    room: "Media Prep & Decontamination",
    category: "Sterilization & Prep",
    categoryKey: "prep-sterility",
    spec: "High-pressure saturated steam sterilization (121°C / 15 psi).",
    precision: "121°C / 15 psi",
    standard: "IS 3829 / ASME",
    tags: ["121°C Saturated Steam", "Stainless Steel 304", "Biological Indicator QC"],
    features: [
      "Heavy-gauge SS 304 deep-drawn sterilization chamber",
      "Radial locking lid system with dual silicon gasket seal",
      "Automatic purge valve for complete air evacuation",
      "Validated weekly using Geobacillus stearothermophilus spore ampoules"
    ]
  },
  {
    id: "EQ-BSC-07",
    image: realBiosafetyImg,
    title: "Class II Type A2 Biosafety Cabinet",
    room: "Microbiology Inoculation Suite",
    category: "Microbiology Suite",
    categoryKey: "microbiology",
    spec: "Certified HEPA laminar airflow chamber for sterile operator protection.",
    precision: "70% Recirc / 30% Exhaust",
    standard: "EN 12469 / NSF 49",
    tags: ["Class II Type A2", "HEPA Filtration", "Operator Safety"],
    features: [
      "Dual HEPA H14 filtration ensuring 99.995% efficiency",
      "Dynamic negative pressure plenum preventing perimeter leaks",
      "Acoustically dampened motor blower for quiet precision operation",
      "Motorized tempered safety glass sash with aerodynamic airfoil"
    ]
  },
  {
    id: "EQ-OVEN-08",
    image: realHotAirOvenImg,
    title: "Digital Hot Air Sterilization Oven",
    room: "Media Prep & Decontamination",
    category: "Sterilization & Prep",
    categoryKey: "prep-sterility",
    spec: "Microprocessor dry heat sterilization for laboratory glassware.",
    precision: "± 1.0°C Uniformity",
    standard: "ISO 20857 / ASTM",
    tags: ["Dry Heat Sterilization", "Microprocessor Control", "Glassware Prep"],
    features: [
      "Forced air convection system with whisper-quiet impeller",
      "Double-walled insulation with high-density mineral wool",
      "Digital countdown timer with auto-shutoff and soak period",
      "Corrosion-resistant electropolished stainless steel interior"
    ]
  },
  {
    id: "EQ-HOM-09",
    image: realHomogenizerImg,
    title: "Stomacher Homogenizer & Vortex Station",
    room: "Food Matrix Extraction Lab",
    category: "Analytical Chemistry",
    categoryKey: "chemistry",
    spec: "Paddle-action sterile homogenizer for food microbial extraction.",
    precision: "4 - 10 strokes/sec",
    standard: "ISO 6887 / AOAC",
    tags: ["Aseptic Stomaching", "Variable Speed Paddle", "Zero Cross-Contamination"],
    features: [
      "Oscillating paddle mechanism for rapid cellular dispersion",
      "Aseptic sterile filter bag system preventing sample cross-contact",
      "Adjustable paddle distance for diverse food matrix densities",
      "Removable drip tray with smooth easy-clean curved interior"
    ]
  }
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
  const [selectedFacilityCategory, setSelectedFacilityCategory] = useState("all");
  const [activeEquipmentModal, setActiveEquipmentModal] = useState<typeof facilityGalleryItems[0] | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveEquipmentModal(null);
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

      {/* SECTION: QUALITY & TECHNICAL COMPETENCE + NABL ACCREDITATION (EXECUTIVE SUITE MATCHING 2ND ATTACHED IMAGE) */}
      <section className="section gradient-section-nabl-suite fade-up-init" id="nabl-accreditation">
        <div className="site-container">
          <div className="nabl-suite-header text-center max-w-3xl mx-auto mb-10">
            <div className="nabl-suite-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-teal/10 text-teal border border-teal/25">
              <span className="nabl-pulse-dot" /> QUALITY &amp; TECHNICAL COMPETENCE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary font-bold mb-3">
              NABL Accreditation &amp; Validated Standards
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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

      {/* SECTION: AUTHENTIC TESTING INFRASTRUCTURE (20-YEARS-AHEAD SCI-FI LAB SHOWCASE) */}
      <section className="section gradient-section-gallery fade-up-init" id="facility-gallery">
        <div className="site-container">
          {/* Header */}
          <div className="facility-futuristic-header text-center max-w-3xl mx-auto mb-10">
            <div className="facility-hud-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <span className="hud-radar-dot" /> AUTHENTIC TESTING INFRASTRUCTURE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary font-bold mb-4 tracking-tight">
              Inside Certigo: Calibrated Equipment &amp; Testing Bench
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Explore our real-world analytical instrumentation operating in temperature-controlled, ISO/IEC 17025 accredited cleanrooms. Every instrument undergoes scheduled traceable calibration to ensure audit-ready testing precision.
            </p>
          </div>

          {/* 1. Futuristic Sci-Fi Diagnostics Telemetry Bar */}
          <div className="facility-telemetry-hud mb-10">
            <div className="telemetry-hud-item">
              <div className="telemetry-hud-icon">
                <ShieldCheck size={20} className="text-teal" />
              </div>
              <div className="telemetry-hud-data">
                <span className="telemetry-hud-label">CALIBRATION STATUS</span>
                <strong className="telemetry-hud-value text-emerald-600 dark:text-emerald-400">100% Active &amp; Traceable</strong>
                <span className="telemetry-hud-sub">Traceable to NPL / NIST</span>
              </div>
              <span className="telemetry-hud-pulse" />
            </div>

            <div className="telemetry-hud-item">
              <div className="telemetry-hud-icon">
                <Cpu size={20} className="text-brand-green" />
              </div>
              <div className="telemetry-hud-data">
                <span className="telemetry-hud-label">CLEANROOM MATRIX</span>
                <strong className="telemetry-hud-value text-primary">ISO Class 5 &amp; Class II A2</strong>
                <span className="telemetry-hud-sub">HEPA 99.997% Filtration</span>
              </div>
              <span className="telemetry-hud-pulse pulse-green" />
            </div>

            <div className="telemetry-hud-item">
              <div className="telemetry-hud-icon">
                <Activity size={20} className="text-cyan-600" />
              </div>
              <div className="telemetry-hud-data">
                <span className="telemetry-hud-label">MICRO-PRECISION</span>
                <strong className="telemetry-hud-value text-teal">± 0.0001 g Weighing</strong>
                <span className="telemetry-hud-sub">Anti-Draft Compensation</span>
              </div>
              <span className="telemetry-hud-pulse pulse-cyan" />
            </div>

            <div className="telemetry-hud-item">
              <div className="telemetry-hud-icon">
                <Award size={20} className="text-blue-600" />
              </div>
              <div className="telemetry-hud-data">
                <span className="telemetry-hud-label">QUALITY PROTOCOL</span>
                <strong className="telemetry-hud-value text-primary">ISO/IEC 17025:2017</strong>
                <span className="telemetry-hud-sub">NABL Accr. NABLT0626AD18278</span>
              </div>
              <span className="telemetry-hud-pulse" />
            </div>
          </div>

          {/* 2. Interactive Cybernetic Filter Switch Tabs */}
          <div className="facility-filter-tabs-wrapper mb-10">
            <div className="facility-filter-tabs">
              {facilityCategories.map((cat) => {
                const isActive = selectedFacilityCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedFacilityCategory(cat.id)}
                    className={`facility-filter-tab ${isActive ? "is-active" : ""}`}
                  >
                    <span>{cat.label}</span>
                    <span className="facility-tab-counter">{cat.count}</span>
                    {isActive && <span className="facility-tab-glow-indicator" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Futuristic Equipment Cards Grid */}
          <div className="facility-cyber-grid">
            {facilityGalleryItems
              .filter(
                (item) =>
                  selectedFacilityCategory === "all" ||
                  item.categoryKey === selectedFacilityCategory
              )
              .map((item, idx) => (
                <article
                  className="facility-cyber-card"
                  key={item.id}
                  onClick={() => setActiveEquipmentModal(item)}
                >
                  {/* Cyber Corner HUD Reticles */}
                  <div className="cyber-reticle reticle-tl" />
                  <div className="cyber-reticle reticle-tr" />
                  <div className="cyber-reticle reticle-bl" />
                  <div className="cyber-reticle reticle-br" />

                  {/* Media Container */}
                  <div className="facility-cyber-media">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="facility-cyber-img"
                      loading="lazy"
                      width={520}
                      height={360}
                    />

                    {/* Gradient & Scanline Overlays */}
                    <div className="facility-cyber-vignette" />
                    <div className="facility-cyber-scanline" />

                    {/* Top HUD Badges */}
                    <div className="facility-cyber-hud-top">
                      <span className="cyber-id-badge">
                        <Cpu size={11} /> {item.id}
                      </span>
                      <span className="cyber-status-badge">
                        <span className="cyber-live-dot" /> ACTIVE &amp; CALIBRATED
                      </span>
                    </div>

                    {/* Center Hover Trigger */}
                    <div className="facility-cyber-hover-action">
                      <span className="cyber-inspect-btn">
                        <Maximize2 size={15} /> Inspect Diagnostics
                      </span>
                    </div>

                    {/* Bottom Chamber Tag */}
                    <div className="facility-cyber-chamber-pill">
                      <span>{item.room}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="facility-cyber-body">
                    <div className="facility-cyber-meta-row">
                      <span className="facility-cyber-cat">{item.category}</span>
                      <span className="facility-cyber-precision">
                        <Activity size={12} className="text-teal" /> {item.precision}
                      </span>
                    </div>

                    <h3 className="facility-cyber-title">{item.title}</h3>
                    <p className="facility-cyber-spec">{item.spec}</p>

                    {/* High-tech tags */}
                    <div className="facility-cyber-tags">
                      {item.tags.map((tag, tIdx) => (
                        <span className="facility-cyber-tag" key={tIdx}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Telemetry Footer */}
                    <div className="facility-cyber-footer">
                      <span className="cyber-standard-badge">
                        <ShieldCheck size={13} className="text-brand-green" /> {item.standard}
                      </span>
                      <button
                        type="button"
                        className="cyber-card-action-link"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveEquipmentModal(item);
                        }}
                      >
                        Full Specs <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          {/* Section Bottom Banner Note */}
          <div className="facility-assurance-banner mt-12">
            <div className="facility-assurance-inner">
              <div className="facility-assurance-icon">
                <Sparkles size={24} className="text-teal" />
              </div>
              <div className="facility-assurance-text">
                <strong>Need testing performed on a specific analytical bench?</strong>
                <p>All instruments at Certigo Laboratories are operated by ISO/IEC 17025 trained senior analysts following validated FSSAI, BIS, AOAC and APHA protocols.</p>
              </div>
              <Button asChild size="lg" className="facility-assurance-btn">
                <Link to="/quote">
                  Request Custom Analysis <ArrowUpRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* 4. Futuristic High-Tech Equipment Inspector Modal */}
        {activeEquipmentModal && (
          <div
            className="equipment-modal-backdrop"
            onClick={() => setActiveEquipmentModal(null)}
          >
            <div
              className="equipment-modal-dialog"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-equipment-title"
            >
              {/* Modal Close Button */}
              <button
                type="button"
                className="equipment-modal-close"
                onClick={() => setActiveEquipmentModal(null)}
                aria-label="Close Inspector"
              >
                <X size={20} />
              </button>

              <div className="equipment-modal-grid">
                {/* Left Side: Photo with Telemetry HUD Overlay */}
                <div className="equipment-modal-media">
                  <img
                    src={activeEquipmentModal.image}
                    alt={activeEquipmentModal.title}
                    className="equipment-modal-img"
                  />
                  <div className="equipment-modal-media-overlay" />
                  <div className="equipment-modal-seal">
                    <ShieldCheck size={18} />
                    <span>NABL CERTIFIED · ISO/IEC 17025</span>
                  </div>
                  <div className="equipment-modal-hud-id">
                    <span>ASSET ID: {activeEquipmentModal.id}</span>
                  </div>
                </div>

                {/* Right Side: Technical Telemetry & Specifications */}
                <div className="equipment-modal-details">
                  <div className="equipment-modal-room-pill">
                    <MapPin size={12} className="text-teal" /> {activeEquipmentModal.room}
                  </div>

                  <h3 id="modal-equipment-title" className="equipment-modal-title">
                    {activeEquipmentModal.title}
                  </h3>

                  <div className="equipment-modal-badges">
                    <span className="equipment-modal-badge badge-active">
                      <span className="cyber-live-dot" /> Status: Calibrated &amp; Active
                    </span>
                    <span className="equipment-modal-badge badge-precision">
                      <Activity size={13} /> Tolerance: {activeEquipmentModal.precision}
                    </span>
                    <span className="equipment-modal-badge badge-standard">
                      <Award size={13} /> {activeEquipmentModal.standard}
                    </span>
                  </div>

                  <div className="equipment-modal-desc-box">
                    <strong>Analytical Function:</strong>
                    <p>{activeEquipmentModal.spec}</p>
                  </div>

                  {/* Features List */}
                  <div className="equipment-modal-features">
                    <span className="equipment-modal-features-title">
                      Key Technical &amp; Operational Features:
                    </span>
                    <ul>
                      {activeEquipmentModal.features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <CheckCircle2 size={16} className="text-brand-green flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Modal CTA Buttons */}
                  <div className="equipment-modal-actions">
                    <Button asChild size="lg" className="equipment-modal-btn-primary">
                      <Link to={`/quote?equipment=${encodeURIComponent(activeEquipmentModal.title)}`}>
                        Enquire Testing on this Bench <ArrowUpRight size={17} />
                      </Link>
                    </Button>
                    <a
                      href={`https://wa.me/918247442084?text=Hello%20Certigo%2C%20I%20am%20inquiring%20about%20testing%20using%20${encodeURIComponent(activeEquipmentModal.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="equipment-modal-btn-whatsapp"
                    >
                      <WhatsAppIcon className="w-5 h-5 text-white" />
                      <span>WhatsApp Specialist</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
