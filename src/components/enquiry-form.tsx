import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowUpRight, Mail, CheckCircle2, User, Building2, 
  GraduationCap, Calendar, Clock, FileText, Phone, MapPin, 
  Copy, FlaskConical, Microscope, Award, Sparkles, Send, ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site";
import { contact } from "@/lib/site-data";

export function EnquiryForm({ student = false }: { student?: boolean }) {
  const [selectedProgram, setSelectedProgram] = useState("Short-term Internship (15–30 Days)");
  const [selectedDiscipline, setSelectedDiscipline] = useState("Microbiological & Pathogen Testing");
  const [draft, setDraft] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function prepare(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const entries = Array.from(data.entries())
      .filter(([key]) => key !== "consent")
      .map(([key, value]) => `${key}: ${String(value)}`);

    const title = student 
      ? `CERTIGO LABORATORIES - STUDENT PROGRAMME APPLICATION` 
      : `CERTIGO LABORATORIES - COMMERCIAL TESTING QUOTATION REQUEST`;

    const fullDraft = `${title}\n` +
      `Date: ${new Date().toLocaleDateString()}\n` +
      `--------------------------------------------------\n` +
      `${entries.join("\n")}\n\n` +
      `--------------------------------------------------\n` +
      `I acknowledge the Certigo privacy notice${student ? " and understand that this submission is an enquiry and does not guarantee a placement." : "."}`;

    setDraft(fullDraft);
    setCopied(false);
  }

  // If student application form: Render ultra-stylish, attractive executive form
  if (student) {
    return (
      <div className="program-app-shell">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-border">
          <div>
            <div className="app-badge-pill">
              <Sparkles size={13} className="text-teal" /> NABL ACCREDITED FACILITY TRAINING
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-1">
              Student Internship &amp; Project Application
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-0">
              Complete your profile below to generate an official application draft for our academic review team.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-secondary/80 border border-border px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary">
            <ShieldCheck size={15} className="text-brand-green" /> Visakhapatnam Centre
          </div>
        </div>

        <form onSubmit={prepare} className="space-y-6">
          {/* 1. VISUAL PROGRAMME SELECTOR CARDS */}
          <div>
            <div className="app-form-section-title">
              <span className="w-5 h-5 rounded-full bg-teal text-white text-[11px] font-bold flex items-center justify-center">1</span>
              <span>Select Your Target Programme</span>
            </div>

            <input type="hidden" name="Selected Programme" value={selectedProgram} />

            <div className="program-cards-radio-grid">
              {[
                {
                  name: "Short-term Internship (15–30 Days)",
                  duration: "15–30 Days",
                  icon: FlaskConical,
                  desc: "Hands-on routine bench techniques in food, water & microbiology SOPs."
                },
                {
                  name: "Long-term Internship (1–6 Months)",
                  duration: "1–6 Months",
                  icon: Microscope,
                  desc: "In-depth instrumentation assays, QA/QC protocols & method validation."
                },
                {
                  name: "BSc / MSc Academic Project",
                  duration: "Dissertation",
                  icon: GraduationCap,
                  desc: "Research-grade testing data, dedicated mentorship & university signoff."
                }
              ].map((prog) => {
                const isSelected = selectedProgram === prog.name;
                const IconComponent = prog.icon;
                return (
                  <div
                    key={prog.name}
                    className={`program-radio-option ${isSelected ? "selected" : ""}`}
                    onClick={() => setSelectedProgram(prog.name)}
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? "bg-teal text-white" : "bg-muted text-muted-foreground"}`}>
                        <IconComponent size={17} />
                      </div>
                      <span className="program-radio-badge">{prog.duration}</span>
                    </div>
                    <strong className="text-sm font-bold text-primary mb-1 leading-snug">
                      {prog.name}
                    </strong>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-0">
                      {prog.desc}
                    </p>
                    <div className="mt-3 pt-2 border-t border-border/50 flex items-center justify-between text-[11px]">
                      <span className={isSelected ? "font-bold text-teal" : "text-muted-foreground"}>
                        {isSelected ? "● Selected" : "Click to select"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. CANDIDATE & ACADEMIC CREDENTIALS */}
          <div>
            <div className="app-form-section-title">
              <span className="w-5 h-5 rounded-full bg-teal text-white text-[11px] font-bold flex items-center justify-center">2</span>
              <span>Candidate &amp; Academic Credentials</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="app-form-field">
                <label htmlFor="student-name">
                  Full Name <span className="required">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <User size={16} />
                  <input
                    id="student-name"
                    name="Student Name"
                    required
                    maxLength={120}
                    placeholder="e.g. Ananya Sharma"
                    autoComplete="name"
                  />
                </div>
              </div>

              <div className="app-form-field">
                <label htmlFor="student-college">
                  College / University <span className="required">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <Building2 size={16} />
                  <input
                    id="student-college"
                    name="College / University"
                    required
                    maxLength={180}
                    placeholder="e.g. Andhra University, GITAM, etc."
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="app-form-field">
                <label htmlFor="student-degree">
                  Current Degree Level <span className="required">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <GraduationCap size={16} />
                  <select id="student-degree" name="Degree Level" required defaultValue="BSc">
                    <option value="BSc">B.Sc (Bachelor of Science)</option>
                    <option value="MSc">M.Sc (Master of Science)</option>
                    <option value="BTech">B.Tech / B.E (Biotechnology / Food Tech)</option>
                    <option value="MTech">M.Tech (Biotechnology / Food Tech)</option>
                    <option value="BPharm">B.Pharmacy / M.Pharmacy</option>
                    <option value="Other">Other Academic Programme</option>
                  </select>
                </div>
              </div>

              <div className="app-form-field">
                <label htmlFor="student-specialization">
                  Academic Branch / Major <span className="required">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <FileText size={16} />
                  <select id="student-specialization" name="Specialization" required defaultValue="Biotechnology">
                    <option value="Biotechnology">Biotechnology</option>
                    <option value="Microbiology">Microbiology</option>
                    <option value="Food Science & Technology">Food Science &amp; Technology</option>
                    <option value="Chemistry / Analytical Chemistry">Chemistry / Analytical Chemistry</option>
                    <option value="Biochemistry">Biochemistry</option>
                    <option value="Environmental Science">Environmental Science</option>
                    <option value="Other">Other Life Science / Allied Branch</option>
                  </select>
                </div>
              </div>

              <div className="app-form-field sm:col-span-2">
                <label htmlFor="student-year">
                  Current Academic Year / Semester <span className="required">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <Clock size={16} />
                  <input
                    id="student-year"
                    name="Year / Semester"
                    required
                    maxLength={60}
                    placeholder="e.g. 3rd Year / 6th Semester (Final Year)"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. CONTACT & COMMUNICATION */}
          <div>
            <div className="app-form-section-title">
              <span className="w-5 h-5 rounded-full bg-teal text-white text-[11px] font-bold flex items-center justify-center">3</span>
              <span>Contact &amp; Location Details</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="app-form-field">
                <label htmlFor="student-email">
                  Email Address <span className="required">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <Mail size={16} />
                  <input
                    id="student-email"
                    name="Email Address"
                    type="email"
                    required
                    maxLength={160}
                    placeholder="student@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="app-form-field">
                <label htmlFor="student-phone">
                  WhatsApp / Contact Phone <span className="required">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <Phone size={16} />
                  <input
                    id="student-phone"
                    name="Contact Number"
                    type="tel"
                    required
                    maxLength={30}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="app-form-field">
                <label htmlFor="student-city">
                  City / State <span className="required">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <MapPin size={16} />
                  <input
                    id="student-city"
                    name="Location"
                    required
                    maxLength={80}
                    placeholder="Visakhapatnam, AP"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4. SCHEDULE & LAB DISCIPLINE PREFERENCE */}
          <div>
            <div className="app-form-section-title">
              <span className="w-5 h-5 rounded-full bg-teal text-white text-[11px] font-bold flex items-center justify-center">4</span>
              <span>Schedule &amp; Laboratory Discipline Preference</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="app-form-field">
                <label htmlFor="student-date">
                  Preferred Start Date <span className="required">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <Calendar size={16} />
                  <input
                    id="student-date"
                    type="date"
                    name="Preferred Start Date"
                    required
                  />
                </div>
              </div>

              <div className="app-form-field">
                <label htmlFor="student-duration">
                  Expected Duration <span className="required">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <Clock size={16} />
                  <select id="student-duration" name="Duration" required defaultValue="1 Month">
                    <option value="15 Days (Short-term)">15 Days (Short-term)</option>
                    <option value="1 Month">1 Month</option>
                    <option value="2 Months">2 Months</option>
                    <option value="3 Months (Academic Project)">3 Months (Academic Project)</option>
                    <option value="6 Months (Full Semester)">6 Months (Full Semester)</option>
                  </select>
                </div>
              </div>

              <div className="app-form-field">
                <label htmlFor="student-discipline">
                  Primary Laboratory Discipline <span className="required">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <FlaskConical size={16} />
                  <select 
                    id="student-discipline" 
                    name="Discipline Preference" 
                    value={selectedDiscipline}
                    onChange={(e) => setSelectedDiscipline(e.target.value)}
                  >
                    <option value="Microbiological & Pathogen Testing">Microbiological &amp; Pathogens</option>
                    <option value="Food Quality & Nutritional Chemistry">Food Quality &amp; Chemistry</option>
                    <option value="Water & Wastewater Analysis">Water &amp; Wastewater Analysis</option>
                    <option value="Chemical Assays & Instrumentation">Chemical Assays &amp; Instruments</option>
                    <option value="Environmental & Air Monitoring">Environmental &amp; Air Monitoring</option>
                    <option value="Multi-Discipline Rotational Training">Multi-Discipline Rotational</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* 5. STATEMENT OF PURPOSE & PROJECT SCOPE */}
          <div>
            <div className="app-form-section-title">
              <span className="w-5 h-5 rounded-full bg-teal text-white text-[11px] font-bold flex items-center justify-center">5</span>
              <span>Learning Objectives or Proposed Project Synopsis</span>
            </div>

            <div className="app-form-field">
              <label htmlFor="student-message">
                Briefly describe what you aim to learn or your university project topic <span className="required">*</span>
              </label>
              <div className="input-with-icon-wrap">
                <textarea
                  id="student-message"
                  name="Learning Goals & Project Synopsis"
                  required
                  maxLength={3000}
                  placeholder="Outline your background, target laboratory techniques you want hands-on practice with (e.g., microbial plating, water quality parameters, spectrophotometry), and university submission timelines."
                />
              </div>
              <p className="text-[11px] text-muted-foreground mt-1 mb-0">
                Tip: If your college has specific dissertation guidelines or university evaluation rubrics, mention them here.
              </p>
            </div>
          </div>

          {/* 6. CONSENT & POLICY ACKNOWLEDGEMENT */}
          <div className="p-4 rounded-xl border border-border bg-secondary/40">
            <label className="flex items-start gap-3 cursor-pointer text-xs text-muted-foreground leading-relaxed">
              <input 
                name="consent" 
                type="checkbox" 
                required 
                className="mt-0.5 accent-teal h-4 w-4 rounded" 
              />
              <span>
                I acknowledge the <Link to="/privacy" className="text-teal font-semibold underline">privacy notice</Link> and agree to share these academic details with Certigo Laboratories Private Limited. I understand that this enquiry prepares an official communication draft and does not constitute a guaranteed placement until confirmed by the academic team.
              </span>
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-2">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-teal hover:opacity-95 text-white font-bold py-3.5 px-8 text-sm shadow-md"
            >
              Generate Application Draft <ArrowUpRight size={17} className="ml-2" />
            </Button>
            <p className="text-[11px] text-muted-foreground mt-2 mb-0">
              This prepares a structured email draft client-side. No personal data is stored on third-party servers without your approval.
            </p>
          </div>

          {/* READY DRAFT RESULT PANEL (AGENTS.md Compliant) */}
          {draft && (
            <div className="status-draft-panel" role="status">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-teal/20 text-teal flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={22} className="text-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-0.5">
                    Your Application Draft is Prepared!
                  </h3>
                  <p className="text-xs text-muted-foreground mb-0">
                    Your submission has been formatted for our Academic Coordination Office. Please choose how you would like to transmit it below:
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 my-4">
                <Button asChild size="default" className="bg-teal hover:bg-teal/90 text-white font-semibold">
                  <a 
                    href={`mailto:${contact.email}?subject=${encodeURIComponent("Student Programme Application - " + selectedProgram)}&body=${encodeURIComponent(draft)}`}
                  >
                    <Mail size={16} className="mr-1.5" /> Open in Mail App (Draft Ready)
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  type="button" 
                  size="default" 
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(draft);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 3000);
                    } catch {
                      setCopied(false);
                    }
                  }}
                  className="font-semibold"
                >
                  <Copy size={16} className="mr-1.5" /> {copied ? "Copied to Clipboard!" : "Copy Application Text"}
                </Button>

                <Button asChild variant="outline" size="default" className="border-emerald-500/40 text-emerald-700 hover:bg-emerald-50">
                  <a 
                    href={`https://wa.me/918247442084?text=${encodeURIComponent("Hello Academic Coordinator, I am applying for the " + selectedProgram + ". Here is my enquiry:\n\n" + draft)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-1.5 text-emerald-600" /> Share on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Formatted Preview Box */}
              <div className="mt-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  Draft Preview Content:
                </div>
                <pre className="p-3.5 bg-card border border-border rounded-lg text-xs font-mono text-foreground whitespace-pre-wrap max-h-56 overflow-y-auto">
                  {draft}
                </pre>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }

  // COMMERCIAL TESTING QUOTATION FORM
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
      <div className="app-badge-pill mb-2">
        <ShieldCheck size={13} className="text-teal" /> NABL ACCREDITED TESTING ENQUIRY
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-primary mb-1">
        Request a Testing Quotation
      </h2>
      <p className="text-xs sm:text-sm text-muted-foreground mb-6">
        Specify your sample matrix, required regulatory standards, and timeline. Our laboratory analysts will prepare a tailored quotation.
      </p>

      <form className="space-y-5" onSubmit={prepare}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="app-form-field">
            <label htmlFor="quote-name">
              Contact Name <span className="required">*</span>
            </label>
            <div className="input-with-icon-wrap">
              <User size={16} />
              <input id="quote-name" name="Contact Name" required maxLength={120} placeholder="Your full name" autoComplete="name" />
            </div>
          </div>

          <div className="app-form-field">
            <label htmlFor="quote-org">
              Company / Organisation
            </label>
            <div className="input-with-icon-wrap">
              <Building2 size={16} />
              <input id="quote-org" name="Organisation" maxLength={160} placeholder="e.g. Food processor, Hotel, Individual" autoComplete="organization" />
            </div>
          </div>

          <div className="app-form-field">
            <label htmlFor="quote-email">
              Email Address <span className="required">*</span>
            </label>
            <div className="input-with-icon-wrap">
              <Mail size={16} />
              <input id="quote-email" name="Email" type="email" required maxLength={160} placeholder="procurement@company.com" autoComplete="email" />
            </div>
          </div>

          <div className="app-form-field">
            <label htmlFor="quote-phone">
              Phone Number <span className="required">*</span>
            </label>
            <div className="input-with-icon-wrap">
              <Phone size={16} />
              <input id="quote-phone" name="Phone" type="tel" required maxLength={30} placeholder="+91 82474 42084" autoComplete="tel" />
            </div>
          </div>

          <div className="app-form-field">
            <label htmlFor="quote-sample">
              Sample Matrix / Discipline <span className="required">*</span>
            </label>
            <div className="input-with-icon-wrap">
              <FlaskConical size={16} />
              <select id="quote-sample" name="Sample Type" required defaultValue="Food & Agricultural Products">
                <option value="Food & Agricultural Products">Food &amp; Agricultural Products</option>
                <option value="Packaged Drinking / Potable Water">Packaged Drinking / Potable Water</option>
                <option value="Microbiological & Pathogen Screening">Microbiological &amp; Pathogen Screening</option>
                <option value="Industrial Effluent & ETP Water">Industrial Effluent &amp; ETP Water</option>
                <option value="Ambient Air & Stack Emission">Ambient Air &amp; Stack Emission</option>
                <option value="Chemical Assays & Heavy Metals">Chemical Assays &amp; Heavy Metals</option>
                <option value="Other / Need Guidance">Other / I Need Guidance</option>
              </select>
            </div>
          </div>

          <div className="app-form-field">
            <label htmlFor="quote-qty">
              Number of Samples &amp; Timeline
            </label>
            <div className="input-with-icon-wrap">
              <Clock size={16} />
              <input id="quote-qty" name="Sample Quantity & Timeline" maxLength={120} placeholder="e.g. 5 samples, turnaround 48 hours" />
            </div>
          </div>

          <div className="app-form-field sm:col-span-2">
            <label htmlFor="quote-params">
              Tests / Parameters of Interest
            </label>
            <div className="input-with-icon-wrap">
              <FileText size={16} />
              <input id="quote-params" name="Tests / Parameters" maxLength={400} placeholder="e.g. IS 10500 Potability, FSSAI nutritional panel, BOD/COD, or 'Need guidance'" />
            </div>
          </div>

          <div className="app-form-field sm:col-span-2">
            <label htmlFor="quote-message">
              Sample Description / Additional Requirements <span className="required">*</span>
            </label>
            <div className="input-with-icon-wrap">
              <textarea
                id="quote-message"
                name="Sample Description & Notes"
                required
                maxLength={3000}
                placeholder="Provide sample details, sampling location, specific regulatory standards to comply with, or special preservation needs."
              />
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-lg border border-border bg-secondary/40 text-xs">
          <label className="flex items-start gap-2.5 cursor-pointer text-muted-foreground">
            <input name="consent" type="checkbox" required className="mt-0.5 accent-teal" />
            <span>
              I acknowledge the <Link to="/privacy" className="text-teal font-semibold underline">privacy notice</Link> and agree to share these details with Certigo Laboratories by email.
            </span>
          </label>
        </div>

        <div>
          <Button type="submit" size="lg" className="bg-teal hover:bg-teal/90 text-white font-bold">
            Prepare Quote Enquiry <ArrowUpRight size={16} className="ml-1" />
          </Button>
          <p className="text-[11px] text-muted-foreground mt-2 mb-0">
            This prepares an email draft. Nothing is sent or stored without your confirmation.
          </p>
        </div>

        {draft && (
          <div className="status-draft-panel" role="status">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-teal" size={20} />
              <h3 className="font-bold text-primary text-base mb-0">Your Quote Enquiry Draft is Ready</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Send this draft to our team at <strong>{contact.email}</strong> to receive a prompt testing quote.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="sm" className="bg-teal hover:bg-teal/90 text-white">
                <a href={`mailto:${contact.email}?subject=${encodeURIComponent("Laboratory Testing Quote Request")}&body=${encodeURIComponent(draft)}`}>
                  <Mail size={14} className="mr-1" /> Open Email Draft
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(draft);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 3000);
                  } catch {
                    setCopied(false);
                  }
                }}
              >
                <Copy size={14} className="mr-1" /> {copied ? "Copied" : "Copy Details"}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
