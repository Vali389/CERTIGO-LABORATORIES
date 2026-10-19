import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  FlaskConical, Microscope, GraduationCap, CheckCircle2, 
  ArrowRight, ChevronRight, Sparkles, Droplets, Apple, Leaf, 
  Wind, ShieldCheck, Check, Building2, BookOpen, Award, Users,
  Workflow, FileCheck, Layers, ClipboardCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, EnquiryBand, SectionHeading } from "@/components/site";
import { pageHead } from "@/lib/site-data";

export const Route = createFileRoute("/programmes/")({ 
  head: () => pageHead(
    "Student Project & Internship Program | Certigo Laboratories", 
    "Certigo Laboratories offers practical Student Project & Internship opportunities in Chemistry, Microbiology, Food Technology, Biotechnology, and Environmental Science in Visakhapatnam."
  ), 
  component: Programmes 
});

const testingDomains = [
  { name: "Food Testing", icon: Apple, color: "#39B54A" },
  { name: "Water Testing", icon: Droplets, color: "#08AFC1" },
  { name: "Microbiology", icon: Microscope, color: "#278834" },
  { name: "Chemical Analysis", icon: FlaskConical, color: "#064B83" },
  { name: "Environmental & Air Quality Testing", icon: Leaf, color: "#08AFC1" }
];

const eligibleGroups = [
  "B.Sc Chemistry",
  "M.Sc Chemistry",
  "B.Sc / M.Sc Microbiology",
  "B.Sc / M.Sc Biotechnology",
  "B.Sc / M.Sc Environmental Science",
  "B.Tech / M.Tech Environmental Engineering",
  "B.Tech Food Technology",
  "B.Sc / M.Sc Food Science & Food Technology",
  "B.Tech Chemical Engineering"
];

const projectAreas = [
  {
    title: "CHEMISTRY & ANALYTICAL TESTING",
    icon: FlaskConical,
    headerBg: "linear-gradient(135deg, #064B83 0%, #08AFC1 100%)",
    accentBorder: "#08AFC1",
    topics: [
      "Physico-chemical analysis of water",
      "Comparative study of RO, borewell and packaged drinking water",
      "pH, EC and TDS studies",
      "Hardness, alkalinity and chloride analysis",
      "Sulphate, fluoride, iron and other chemical parameters",
      "Food chemical analysis",
      "Moisture, ash, protein, fat and acidity studies",
      "Instrumental analytical studies",
      "Method comparison and analytical studies"
    ]
  },
  {
    title: "MICROBIOLOGY",
    icon: Microscope,
    headerBg: "linear-gradient(135deg, #1f6b29 0%, #39B54A 100%)",
    accentBorder: "#39B54A",
    topics: [
      "Microbiological quality assessment of drinking water",
      "Total Plate Count",
      "Coliform and E. coli studies",
      "Microbiological quality of milk and dairy products",
      "Fruit juice microbiology",
      "Ready-to-eat food microbiology",
      "Comparative microbial quality studies",
      "Food and water safety-related projects"
    ]
  },
  {
    title: "FOOD TECHNOLOGY",
    icon: Apple,
    headerBg: "linear-gradient(135deg, #278834 0%, #76D83D 100%)",
    accentBorder: "#278834",
    topics: [
      "Food quality assessment",
      "Physico-chemical analysis of food products",
      "Food microbiological quality",
      "Food adulteration-related studies",
      "Comparative analysis of food products",
      "Quality and safety assessment"
    ]
  },
  {
    title: "ENVIRONMENTAL SCIENCE",
    icon: Leaf,
    headerBg: "linear-gradient(135deg, #064B83 0%, #08AFC1 100%)",
    accentBorder: "#08AFC1",
    topics: [
      "Drinking water quality assessment",
      "Groundwater quality studies",
      "Wastewater quality assessment",
      "STP/ETP performance studies",
      "BOD and COD studies",
      "TSS/TDS assessment",
      "Industrial effluent studies",
      "Air quality monitoring",
      "Noise pollution assessment"
    ]
  }
];

const workflowSteps = [
  { step: "01", title: "Sample Collection" },
  { step: "02", title: "Sample Registration" },
  { step: "03", title: "Sample Preparation" },
  { step: "04", title: "Laboratory Analysis" },
  { step: "05", title: "Quality Control" },
  { step: "06", title: "Data Interpretation" },
  { step: "07", title: "Report Preparation" }
];

const practicalExposure = [
  "Laboratory safety practices",
  "SOP-based laboratory procedures",
  "Instrument handling",
  "Calibration concepts",
  "Analytical calculations",
  "Quality control practices",
  "Laboratory documentation",
  "Interpretation of analytical results",
  "Project report preparation"
];

const supportServices = [
  "Academic project guidance",
  "Practical laboratory exposure",
  "Relevant sample analysis",
  "Testing methodology guidance",
  "Data interpretation support",
  "Project documentation guidance",
  "Internship training",
  "Project completion / Internship certificate"
];

const programmeOptions = [
  {
    slug: "short-term-internships",
    path: "/programmes/short-term-internships" as const,
    title: "Short-Term Internships",
    durationBadge: "15–30 Days · Hands-On Bench",
    icon: FlaskConical,
    accent: "#08AFC1",
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
    accent: "#064B83",
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

function Programmes() {
  return (
    <>
      <PageHero 
        title="Student Project & Internship Program" 
        eyebrow="RELIABLE TESTING. ACCURATE RESULTS. TRUSTED QUALITY." 
        description="Hands-on laboratory exposure, real-world sample testing, and academic project mentorship for university students in Visakhapatnam." 
      />

      {/* 1. 5 CORE DOMAINS STRIP (MATCHING BROCHURE) */}
      <section className="bg-slate-50/80 dark:bg-card/40 py-8 border-b border-border/70">
        <div className="site-container">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {testingDomains.map((d) => (
              <div 
                key={d.name}
                className="brochure-domain-pill"
              >
                <div className="brochure-domain-icon" style={{ color: d.color, background: `${d.color}15` }}>
                  <d.icon size={18} />
                </div>
                <span className="font-semibold text-xs sm:text-sm text-primary">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ABOUT THE PROGRAM & ELIGIBLE STUDENT GROUPS (TWO-COLUMN SPLIT MATCHING BROCHURE) */}
      <section className="section bg-white dark:bg-background">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: About The Program */}
            <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-xs">
              <div>
                <div className="brochure-ribbon-badge mb-5">
                  <BookOpen size={16} />
                  <span>ABOUT THE PROGRAM</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-serif text-primary font-bold mb-4 leading-tight">
                  Student Project &amp; <span className="text-[#39B54A]">Internship Program</span>
                </h2>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  Certigo Laboratories offers practical <strong>Student Project &amp; Internship</strong> opportunities for students seeking hands-on laboratory exposure and academic project experience.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  Our program is designed to help students understand real-world laboratory practices, analytical techniques, sample handling, testing procedures, documentation and interpretation of laboratory results.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Students can undertake academic projects and internships under the guidance of laboratory professionals in relevant areas of Chemistry, Microbiology, Food Technology, Biotechnology and Environmental Science.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-green italic">
                  “Build Your Skills with Real Lab Experience”
                </span>
                <Button asChild size="sm" className="bg-[#39B54A] hover:bg-[#278834] text-white font-bold">
                  <Link to="/apply">Apply Online <ArrowRight size={14} className="ml-1" /></Link>
                </Button>
              </div>
            </div>

            {/* Right: Eligible Student Groups */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-border bg-slate-50/70 dark:bg-card/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="brochure-ribbon-badge mb-5">
                  <Users size={16} />
                  <span>ELIGIBLE STUDENT GROUPS</span>
                </div>

                <p className="text-xs text-muted-foreground mb-4">
                  Students enrolled in or graduating from the following academic programmes are eligible to apply:
                </p>

                <ul className="space-y-2.5">
                  {eligibleGroups.map((group) => (
                    <li key={group} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground font-medium">
                      <span className="w-5 h-5 rounded-full bg-[#39B54A]/15 text-[#278834] flex items-center justify-center flex-shrink-0 font-bold">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span>{group}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-border/80">
                <div className="text-[11.5px] text-muted-foreground flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#39B54A] flex-shrink-0" />
                  <span>Training compliant with ISO/IEC 17025 laboratory quality system.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PROJECT AREAS (4 DISCIPLINE CARDS FROM BROCHURE) */}
      <section className="section bg-slate-50/60 dark:bg-card/30 border-y border-border/60">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="brochure-ribbon-badge mx-auto mb-3">
              <FlaskConical size={16} />
              <span>PROJECT AREAS</span>
            </div>
            <h2 className="text-3xl font-serif text-primary font-bold">
              Comprehensive Research &amp; <span className="text-[#39B54A]">Dissertation Topics</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Select your academic discipline for dedicated lab benchwork, authentic data generation, and thesis support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectAreas.map((area) => (
              <div 
                key={area.title}
                className="brochure-area-card"
                style={{ borderColor: area.accentBorder }}
              >
                <div 
                  className="brochure-area-header"
                  style={{ background: area.headerBg }}
                >
                  <area.icon size={20} className="text-white" />
                  <h3 className="text-sm font-bold text-white tracking-wide">{area.title}</h3>
                </div>

                <div className="p-5">
                  <ul className="space-y-2">
                    {area.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs text-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#39B54A] flex-shrink-0 mt-1.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRACTICAL TRAINING WORKFLOW (7 STEPS + EXPOSURE CHECKLIST) */}
      <section className="section bg-white dark:bg-background">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="brochure-ribbon-badge mx-auto mb-3">
              <Workflow size={16} />
              <span>PRACTICAL TRAINING</span>
            </div>
            <h2 className="text-3xl font-serif text-primary font-bold">
              Complete Laboratory <span className="text-[#39B54A]">Workflow Exposure</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Students gain direct, hands-on exposure to every phase of commercial laboratory testing operations.
            </p>
          </div>

          {/* 7 Workflow Step Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
            {workflowSteps.map((ws, i) => (
              <div key={ws.step} className="brochure-step-box">
                <div className="brochure-step-num">{ws.step}</div>
                <div className="brochure-step-title">{ws.title}</div>
                {i < workflowSteps.length - 1 && (
                  <div className="brochure-step-arrow hidden lg:block">→</div>
                )}
              </div>
            ))}
          </div>

          {/* Practical Exposure 2-Column Checklist */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#39B54A]/30 bg-[#39B54A]/5">
            <h4 className="text-base font-bold text-primary mb-4 flex items-center gap-2">
              <ClipboardCheck size={18} className="text-[#39B54A]" />
              The program also provides comprehensive exposure to:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {practicalExposure.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs font-semibold text-foreground">
                  <span className="w-4 h-4 rounded-full bg-[#39B54A] text-white flex items-center justify-center flex-shrink-0">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECT & INTERNSHIP SUPPORT (8 SUPPORT ITEMS) */}
      <section className="section bg-slate-50/70 dark:bg-card/40 border-t border-border/70">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="brochure-ribbon-badge mx-auto mb-3">
              <Layers size={16} />
              <span>PROJECT &amp; INTERNSHIP SUPPORT</span>
            </div>
            <h2 className="text-3xl font-serif text-primary font-bold">
              Certigo Laboratories <span className="text-[#39B54A]">Provides Students With</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {supportServices.map((support) => (
              <div key={support} className="p-4 rounded-xl border border-border bg-card text-center shadow-xs flex flex-col items-center justify-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[#39B54A]/10 text-[#278834] flex items-center justify-center">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-xs font-semibold text-primary">{support}</span>
              </div>
            ))}
          </div>

          {/* FOR COLLEGES & DEPARTMENTS COLLABORATION BANNER */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#064B83] via-[#08AFC1] to-[#39B54A] text-white shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold mb-3">
                  <Building2 size={14} /> FOR COLLEGES &amp; ACADEMIC DEPARTMENTS
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Institutional Collaborations &amp; MoUs
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-3">
                  We welcome collaboration with colleges and academic departments for: <strong>Student Projects | Internships | Practical Training | Workshops | Laboratory Exposure Programs</strong>.
                </p>
                <p className="text-xs text-white/80 leading-relaxed">
                  Certigo Laboratories can work with institutions to design project and internship activities according to the student’s academic requirements and the laboratory’s testing facilities.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Button asChild size="lg" className="bg-white text-[#064B83] hover:bg-slate-100 font-bold shadow-md">
                  <Link to="/contact">Partner with Us <ArrowRight size={16} className="ml-1" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THREE STRUCTURED DURATION TRACKS */}
      <section className="section bg-white dark:bg-background">
        <div className="site-container">
          <SectionHeading 
            eyebrow="SELECT YOUR PROGRAMME TRACK"
            title="Tailored for Your Semester Timeline"
            description="Choose between short-term modular exposure, long-term comprehensive training, or full academic dissertation project support."
          />

          <div className="luxury-programmes-grid">
            {programmeOptions.map((p) => (
              <div 
                className="luxury-programme-card" 
                key={p.slug}
                style={{
                  "--prog-accent": p.accent,
                  "--prog-grad": `linear-gradient(135deg, ${p.accent}15 0%, #064B8305 100%)`,
                  "--prog-glow": `${p.accent}30`
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
                      className="w-full font-bold shadow-md text-white transition-transform hover:-translate-y-0.5 bg-[#39B54A] hover:bg-[#278834]"
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

      <EnquiryBand />
    </>
  );
}

