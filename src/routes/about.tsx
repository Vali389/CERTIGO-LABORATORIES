import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Eye, Compass, CheckCircle2, ShieldCheck, Target, Award, 
  FlaskConical, ArrowUpRight, ArrowRight, Building2, MapPin, Phone, Mail, Lock, UserCheck,
  Check, GraduationCap, Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, EnquiryBand, SectionHeading, WhatsAppIcon } from "@/components/site";
import { labImage, pageHead, contact, researchImage, aboutImage } from "@/lib/site-data";
import managingDirectorImg from "@/assets/managing-director.jpeg";

export const Route = createFileRoute("/about")({
  head: () => pageHead(
    "About Us | Certigo Laboratories Private Limited", 
    "Learn about Certigo Laboratories Private Limited, our vision, mission, quality commitments, and NABL accredited testing facilities in Visakhapatnam."
  ),
  component: About
});

const teamMembers = [
  {
    initials: "MS",
    name: "Ms. M. Sirisha",
    role: "Admin Manager",
    degree: "M.Sc. with Ph.D.",
    experience: "3 Years Exp",
    tag: "Administration & Operations",
    bio: "Manages administrative governance, operational continuity, and compliance documentation for the laboratory.",
    isoHighlight: "ISO/IEC 17025 Trained & Compliant",
    keyResponsibilities: [
      "Smooth laboratory operations & staff coordination",
      "Administrative documentation & LMS record management",
      "Procurement workflows & inventory traceability"
    ]
  },
  {
    initials: "TA",
    name: "Mrs. T. Anusha",
    role: "Quality Manager",
    degree: "M.Sc. in Microbiology",
    experience: "6 Years Exp",
    tag: "Quality Management & Compliance",
    bio: "Oversees the overall quality system, accreditation audits, and rigorous compliance with NABL benchmarks.",
    isoHighlight: "ISO/IEC 17025 Lead Quality Oversight",
    keyResponsibilities: [
      "Quality system documentation, control & internal audits",
      "Corrective actions, non-conformities & risk mitigation",
      "Proficiency testing programs & regulatory guidelines"
    ]
  },
  {
    initials: "GG",
    name: "Mrs. G. Govindamma",
    role: "Technical Manager",
    degree: "M.Sc. in Biotechnology",
    experience: "4 Years Exp",
    tag: "Technical Oversight & Validation",
    bio: "Leads technical validation of analytical methods, data authorization, and analyst competence evaluations.",
    isoHighlight: "ISO/IEC 17025 Technical Authorization",
    keyResponsibilities: [
      "Selection and validation of approved test methods",
      "Supervision of analytical testing & data authorization",
      "Instrumentation monitoring & measurement competence"
    ]
  },
  {
    initials: "SR",
    name: "Ms. S. Ramalakshmi",
    role: "Microbiologist",
    degree: "M.Sc. in Microbiology",
    experience: "2 Years Exp",
    tag: "Microbiological Testing",
    bio: "Performs microbiological analysis of food and water matrices following validated standard operating procedures.",
    isoHighlight: "ISO/IEC 17025 Analytical Testing",
    keyResponsibilities: [
      "Routine microbiological culture & pathogen enumeration",
      "Culture media preparation, sterilization & incubation",
      "Laboratory test record maintenance & safety protocols"
    ]
  },
  {
    initials: "BP",
    name: "Ms. B. Pavitra",
    role: "Quality Executive",
    degree: "M.Sc. in Microbiology",
    experience: "2 Years Exp",
    tag: "Quality Assurance Support",
    bio: "Assists the Quality Manager in system maintenance, audit documentation, and calibration verifications.",
    isoHighlight: "ISO/IEC 17025 QMS Support",
    keyResponsibilities: [
      "Quality control records & internal audit documentation",
      "Equipment calibration tracking & schedule monitoring",
      "Supervised compliance checks across test procedures"
    ]
  },
  {
    initials: "NS",
    name: "Ms. P. Naga Sri",
    role: "Trainee Microbiologist",
    degree: "M.Sc. Microbiology",
    experience: "Trainee",
    tag: "Microbiology Trainee",
    bio: "Undergoing specialized laboratory training in aseptic techniques, sample handling, and microbiological workflows.",
    isoHighlight: "ISO/IEC 17025 Foundation Trained",
    keyResponsibilities: [
      "Media preparation, sterilization & sample handling",
      "Glassware maintenance & laboratory hygiene controls",
      "Developing technical competence in standard methods"
    ]
  },
  {
    initials: "RK",
    name: "Mr. CH. Raveendra Kumar",
    role: "Customer Relation Executive / Sample Receiver",
    degree: "Diploma",
    experience: "3 Years Exp",
    tag: "Customer Care & Traceability",
    bio: "Coordinates sample intake, chain of custody verification, and customer communications for testing scopes.",
    isoHighlight: "ISO/IEC 17025 Traceability Trained",
    keyResponsibilities: [
      "Sample receipt, verification, labelling & registration",
      "Documenting chain of custody & sample storage integrity",
      "Client coordination on testing scope and turnaround"
    ]
  },
  {
    initials: "KL",
    name: "Ms. K. Lokeswari",
    role: "Trainee Analyst",
    degree: "B.Sc. Graduation",
    experience: "Trainee",
    tag: "Analytical Support Trainee",
    bio: "Undergoing structured analytical orientation in laboratory safety, sample preparation, and quality procedures.",
    isoHighlight: "ISO/IEC 17025 Orientation Trained",
    keyResponsibilities: [
      "Sample preparation & laboratory housekeeping support",
      "Cleaning and maintenance of equipment work areas",
      "Chemical safety protocols & waste management"
    ]
  },
  {
    initials: "KK",
    name: "Mr. B. Keerthi Kiran",
    role: "Customer Relation Executive / Sample Receiver",
    degree: "MBA",
    experience: "17 Years Exp",
    tag: "Customer Care & Traceability",
    bio: "Senior coordinator managing sample logistics, client communications, and end-to-end testing traceability.",
    isoHighlight: "ISO/IEC 17025 Chain of Custody",
    keyResponsibilities: [
      "Accurate sample verification & chain of custody management",
      "Client relationship management & testing requirement scoping",
      "Adherence to sample receipt and traceability procedures"
    ]
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
              <Button asChild size="lg" className="bg-[#39B54A] hover:bg-[#2ea642] text-white rounded-full font-semibold px-6 shadow-sm">
                <Link to="/quote">Request a Testing Quote <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#064B83] text-[#064B83] hover:bg-[#F0FAFD] rounded-full font-semibold px-6">
                <Link to="/services">Explore Our Services <ArrowUpRight /></Link>
              </Button>
            </div>
          </div>

          <figure className="editorial-photo shadow-lg">
            <img 
              src={aboutImage} 
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

      {/* 5. LEADERSHIP & TECHNICAL TEAM */}
      <section className="section bg-slate-50/70 dark:bg-card/40 border-y border-border/60">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow">OUR PEOPLE &amp; LEADERSHIP</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-3">
              Laboratory Governance &amp; <span className="text-brand-green">Technical Team</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Trained in accordance with ISO/IEC 17025 to ensure technical competence, impartial testing operations, and dependable customer service.
            </p>
          </div>

          {/* Managing Director Featured Spotlight */}
          <div className="md-profile-card mb-12">
            <div className="md-profile-media">
              <img
                src={managingDirectorImg}
                alt="Mrs. K. RAJITHA - Managing Director, Certigo Laboratories Pvt Ltd"
                className="md-profile-img"
                width={400}
                height={480}
              />
              <div className="md-profile-badge">
                <ShieldCheck size={14} className="text-brand-green" /> Managing Director
              </div>
            </div>
            <div className="md-profile-info">
              <div className="md-profile-header">
                <span className="md-profile-role-tag">Leadership &amp; Governance</span>
                <h3 className="md-profile-name">Mrs. K. RAJITHA</h3>
                <div className="md-profile-role">Managing Director · M. Tech</div>
              </div>
              <p className="md-profile-text">
                Serves as the managing director of Certigo Laboratories Pvt Ltd. She holds an M. Tech degree and has 4 years of relevant professional experience in laboratory management and technical operations.
              </p>
              <div className="md-profile-pill-box">
                <span className="font-semibold text-primary">ISO/IEC 17025 Trained:</span> She is trained as per ISO/IEC 17025 and is responsible for overall laboratory governance, strategic planning, resource planning administration, appointment of competent personnel, and ensuring impartiality and confidentiality of the laboratory activities. She provides strategic direction for continual improvement, customer satisfaction, and compliance with statutory and accreditation requirements.
              </div>
            </div>
          </div>

          {/* Executive Team Grid */}
          <div className="team-exec-grid">
            {teamMembers.map((m) => (
              <article key={m.name} className="team-exec-card">
                <div className="team-exec-accent-bar" />
                
                {/* Header: Monogram Avatar + Department Badge */}
                <div className="team-exec-header">
                  <div className="team-exec-avatar">
                    <span>{m.initials}</span>
                    <span className="team-exec-verified-badge" title="ISO/IEC 17025 Competent">
                      <CheckCircle2 size={11} strokeWidth={3} />
                    </span>
                  </div>
                  <span className="team-exec-dept-badge">{m.tag}</span>
                </div>

                {/* Identity */}
                <div className="team-exec-identity">
                  <h4 className="team-exec-name">{m.name}</h4>
                  <div className="team-exec-role">{m.role}</div>
                </div>

                {/* Qualification & Experience Pills */}
                <div className="team-exec-meta-row">
                  <span className="team-exec-meta-pill">
                    <GraduationCap size={12} className="text-teal" /> {m.degree}
                  </span>
                  <span className="team-exec-meta-pill">
                    <Briefcase size={12} className="text-brand-green" /> {m.experience}
                  </span>
                </div>

                {/* Concise Bio */}
                <p className="team-exec-bio">{m.bio}</p>

                {/* ISO/IEC 17025 Competence Badge */}
                <div className="team-exec-iso-box">
                  <Award size={15} className="text-brand-green flex-shrink-0" />
                  <span>{m.isoHighlight}</span>
                </div>

                {/* Core Responsibilities List */}
                <div className="team-exec-duties-wrap">
                  <div className="team-exec-duties-label">Core Laboratory Responsibilities</div>
                  <ul className="team-exec-duties-list">
                    {m.keyResponsibilities.map((duty, idx) => (
                      <li key={idx}>
                        <Check size={13} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR COMMITMENT */}
      <section className="section gradient-section-mesh">
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

      <EnquiryBand />
    </>
  );
}
