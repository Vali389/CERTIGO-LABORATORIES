import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Eye, Compass, CheckCircle2, ShieldCheck, Target, Award, 
  FlaskConical, ArrowUpRight, ArrowRight, Building2, MapPin, Phone, Mail, Lock, UserCheck
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
    name: "Ms. M. Sirisha",
    role: "Admin Manager",
    qualification: "M.Sc. with Ph.D. · 3 Years Experience",
    tag: "Administration & Operations",
    bio: "She holds an M.Sc. with Ph.D. and has 3 years of experience in administrative and operational management.",
    training: "Completed ISO/IEC 17025 training related to administrative and documentation controls. Skilled in record maintenance, personnel coordination, procurement, and inventory support, and administrative process management.",
    responsibilities: "Responsible for smooth laboratory operations, maintaining administrative records, coordinating staff activities, supporting procurement and inventory processes, and ensuring compliance with laboratory management system requirements."
  },
  {
    name: "Mrs. T. Anusha",
    role: "Quality Manager",
    qualification: "M.Sc. in Microbiology · 6 Years Experience",
    tag: "Quality Management & Compliance",
    bio: "Holds an M.Sc. in Microbiology with 6 years of experience in quality control and microbiological testing.",
    training: "Trained in ISO/IEC 17025 and oversees quality system implementation and compliance.",
    responsibilities: "Preparation and control of quality documents, conducting internal audits, handling non-conformities and corrective actions, monitoring proficiency testing and inter-laboratory comparisons, training personnel on quality procedures, and ensuring ongoing compliance with NABL and regulatory guidelines."
  },
  {
    name: "Mrs. G. Govindamma",
    role: "Technical Manager",
    qualification: "M.Sc. in Biotechnology · 4 Years Experience",
    tag: "Technical Oversight & Validation",
    bio: "Holds an M.Sc. in Biotechnology and 4 years of experience in laboratory testing and technical supervision.",
    training: "Received internal training as per ISO/IEC 17025 and is responsible for technical oversight, validation of test methods, review of results, and ensuring technical competence within the laboratory.",
    responsibilities: "Selection and validation of test methods, supervision of analytical work, authorization and review of test results, ensuring technical competence of analysts, monitoring equipment performance, and maintaining adherence to approved standard methods and technical procedures."
  },
  {
    name: "Ms. S. RAMALAKSHMI",
    role: "Microbiologist",
    qualification: "M.Sc. in Microbiology · 2 Years Experience",
    tag: "Microbiological Testing",
    bio: "She holds an M.Sc. in Microbiology with 2 years’ experience in microbiological testing of food and water samples.",
    training: "Completed ISO/IEC 17025 training, enabling accurate and reliable testing compliance with laboratory quality standards. Skilled in media preparation, sample processing, incubation, microbial enumeration, result calculation, and maintenance of test records.",
    responsibilities: "Performing routine microbiological tests, preparing media and cultures, recording and interpreting results, and ensuring compliance with safety, quality, and ISO/IEC 17025 procedures."
  },
  {
    name: "Ms. B. Pavitra",
    role: "Quality Executive",
    qualification: "M.Sc. in Microbiology · 2 Years Experience",
    tag: "Quality Assurance Support",
    bio: "She holds an M.Sc. in Microbiology with 2 years of experience in quality control and laboratory support.",
    training: "Completed ISO/IEC 17025 training, equipping her to assist in maintaining the laboratory quality system. Skilled in quality monitoring, record keeping, audit support, calibration tracking, and assisting analytical work.",
    responsibilities: "Supporting quality management activities, maintaining quality records, assisting in internal audits, monitoring calibration schedules, and ensuring compliance and accuracy in laboratory testing under supervision."
  },
  {
    name: "Ms. P. NAGA SRI",
    role: "Trainee Microbiologist",
    qualification: "M.Sc. · Trainee",
    tag: "Microbiology Trainee",
    bio: "She holds an M.Sc. degree and is undergoing rigorous laboratory training.",
    training: "Completed ISO/IEC 17025 orientation training and is developing skills in basic microbiological techniques, media preparation, sterilization, sample handling, and laboratory hygiene.",
    responsibilities: "Assisting senior staff under supervision in routine laboratory activities, including preparing media, sterilizing glassware, processing samples, and maintaining laboratory cleanliness, while gaining technical competence and understanding quality management system requirements."
  },
  {
    name: "Mr. CH. Raveendra Kumar",
    role: "Customer Relation Executive / Sample Receiver",
    qualification: "Diploma · 3 Years Experience",
    tag: "Customer Coordination & Traceability",
    bio: "He holds a Diploma qualification and has 3 years of experience in customer coordination and sample handling.",
    training: "Undergone ISO/IEC 17025 training related to sample receipt, traceability, and documentation management, sample verification, labelling, registration, storage, and maintaining chain of custody.",
    responsibilities: "Accurate receipt and documentation of samples, ensuring traceability, coordinating with clients regarding test requirements and timelines, and maintaining adherence to quality procedures during sample handling."
  },
  {
    name: "Ms. K. Lokeswari",
    role: "Trainee Analyst",
    qualification: "B.Sc. Graduation · Trainee",
    tag: "Analytical Support Trainee",
    bio: "Holds a graduation (B.Sc) qualification and is a trainee undergoing laboratory preparation.",
    training: "Completed ISO/IEC 17025 orientation training and is developing skills in basic laboratory operations, sample handling, safety precautions, and housekeeping procedures.",
    responsibilities: "Assisting senior staff under supervision in laboratory support activities, including cleaning of equipment and work areas, sample preparation, waste management, and maintaining laboratory safety and cleanliness in compliance with ISO/IEC 17025 requirements."
  },
  {
    name: "B. Keerthi Kiran",
    role: "Customer Relation Executive / Sample Receiver",
    qualification: "MBA · 17 Years Experience",
    tag: "Customer Coordination & Traceability",
    bio: "He holds an MBA qualification and has 17 years’ experience in customer coordination and sample handling.",
    training: "Undergone ISO/IEC 17025 training related to sample receipt, traceability, and documentation management, sample verification, labelling, registration, storage, and maintaining chain of custody.",
    responsibilities: "Accurate receipt and documentation of samples, ensuring traceability, coordinating with clients regarding test requirements and timelines, and maintaining adherence to quality procedures during sample handling."
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

const qualityPractices = [
  { title: "Standard Operating Procedures (SOPs)", desc: "Strict adherence to documented, validated SOPs for all testing activities." },
  { title: "Validated Test Methods", desc: "Testing methods selected and verified for their intended use, following applicable ISO/IEC, BIS, and FSSAI methods and other relevant standards, as applicable to our testing scope." },
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

          {/* Team Grid */}
          <div className="team-grid">
            {teamMembers.map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-card-top">
                  <div className="team-avatar-badge">
                    <UserCheck size={20} />
                  </div>
                  <span className="team-card-tag">{m.tag}</span>
                </div>
                <h4 className="team-card-name">{m.name}</h4>
                <div className="team-card-role">{m.role}</div>
                <div className="team-card-qual">{m.qualification}</div>
                <p className="team-card-bio">{m.bio}</p>
                <div className="team-card-training">
                  <strong className="text-primary font-semibold">ISO/IEC 17025:</strong> {m.training}
                </div>
                <div className="team-card-duties">
                  <strong className="text-primary font-semibold">Responsibilities:</strong> {m.responsibilities}
                </div>
              </div>
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
