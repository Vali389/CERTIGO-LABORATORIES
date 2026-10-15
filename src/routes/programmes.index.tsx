import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  FlaskConical, Microscope, GraduationCap, CheckCircle2, 
  ArrowRight, ChevronRight, Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, EnquiryBand, SectionHeading } from "@/components/site";
import { pageHead } from "@/lib/site-data";

export const Route = createFileRoute("/programmes/")({ 
  head: () => pageHead(
    "Student Programmes & Internships | Certigo Laboratories", 
    "Explore hands-on short-term and long-term laboratory internships and BSc/MSc academic dissertation projects at Certigo Laboratories in Visakhapatnam."
  ), 
  component: Programmes 
});

const programmeDetails = [
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

function Programmes() {
  return (
    <>
      <PageHero 
        title="Student Programmes & Internships" 
        eyebrow="YOUR CURIOSITY BELONGS HERE" 
        description="Explore a new perspective on laboratory science through hands-on internship experience and structured academic dissertation support in Visakhapatnam." 
      />

      <section className="section gradient-section-mesh">
        <div className="site-container">
          <SectionHeading 
            eyebrow="PRACTICAL SCIENCE & DISSERTATION SUPPORT"
            title="Accelerate Your Scientific Career"
            description="Bridge the gap between academic theory and real-world laboratory testing. Select a programme tailored to your semester schedule and career goals."
          />

          <div className="luxury-programmes-grid">
            {programmeDetails.map((p) => (
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

          <div className="mt-14 p-8 rounded-2xl bg-secondary/50 border border-border text-center max-w-3xl mx-auto shadow-xs">
            <div className="inline-flex items-center gap-2 text-teal font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles size={16} /> Structured Mentorship &amp; Authentic Laboratory Benchwork
            </div>
            <h4 className="text-lg font-bold text-primary mb-2">Ready to Apply for the Upcoming Batch?</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
              Fill out our simple application form with your college credentials, preferred discipline (Food, Water, or Microbiology), and timeline. Our scientific team will prepare your onboarding details.
            </p>
            <Button asChild size="lg" className="bg-teal hover:bg-teal/90 text-white font-bold shadow-md">
              <Link to="/programmes-apply">
                Submit Online Application <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <EnquiryBand />
    </>
  );
}
