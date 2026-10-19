import { useState, type FormEvent, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowUpRight, Mail, CheckCircle2, User, Building2, 
  GraduationCap, Calendar, Clock, FileText, Phone, MapPin, 
  Copy, FlaskConical, Microscope, Award, Sparkles, Send, ShieldCheck,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site";
import { contact } from "@/lib/site-data";

export function EnquiryForm({ student = false }: { student?: boolean }) {
  const [selectedProgram, setSelectedProgram] = useState("Short-term Internship (15–30 Days)");
  const [selectedDiscipline, setSelectedDiscipline] = useState("Microbiological & Pathogen Testing");
  const [draft, setDraft] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Student Form State
  const [studentValues, setStudentValues] = useState({
    name: "",
    college: "",
    degree: "BSc",
    specialization: "Biotechnology",
    year: "",
    email: "",
    phone: "",
    city: "",
    startDate: "",
    duration: "1 Month",
    message: "",
    consent: false
  });

  const [studentTouched, setStudentTouched] = useState<Record<string, boolean>>({});
  const [studentErrors, setStudentErrors] = useState<Record<string, string>>({});

  // Quote Form State
  const [quoteValues, setQuoteValues] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    sample: "Food & Agricultural Products",
    qty: "",
    params: "",
    message: "",
    consent: false
  });

  const [quoteTouched, setQuoteTouched] = useState<Record<string, boolean>>({});
  const [quoteErrors, setQuoteErrors] = useState<Record<string, string>>({});

  // Student Field Validation
  function validateStudentField(name: string, value: any): string {
    switch (name) {
      case "name":
        if (!value || !value.trim()) return "Full Name is required";
        if (value.trim().length < 2) return "Please enter a valid full name (at least 2 characters)";
        return "";
      case "college":
        if (!value || !value.trim()) return "College or University name is required";
        return "";
      case "year":
        if (!value || !value.trim()) return "Academic year or semester is required";
        return "";
      case "email":
        if (!value || !value.trim()) return "Email address is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address";
        return "";
      case "phone":
        if (!value || !value.trim()) return "WhatsApp / phone number is required";
        if (value.replace(/\D/g, "").length < 10) return "Please enter a valid phone number (at least 10 digits)";
        return "";
      case "city":
        if (!value || !value.trim()) return "City / State location is required";
        return "";
      case "startDate":
        if (!value || !value.trim()) return "Preferred start date is required";
        return "";
      case "message":
        if (!value || !value.trim()) return "Please describe your learning objectives or project synopsis";
        if (value.trim().length < 10) return "Please enter at least 10 characters describing your goals";
        return "";
      case "consent":
        if (!value) return "You must accept the terms to submit your application";
        return "";
      default:
        return "";
    }
  }

  // Quote Field Validation
  function validateQuoteField(name: string, value: any): string {
    switch (name) {
      case "name":
        if (!value || !value.trim()) return "Contact name is required";
        return "";
      case "email":
        if (!value || !value.trim()) return "Email address is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address";
        return "";
      case "phone":
        if (!value || !value.trim()) return "Phone number is required";
        if (value.replace(/\D/g, "").length < 10) return "Please enter a valid phone number (at least 10 digits)";
        return "";
      case "message":
        if (!value || !value.trim()) return "Sample description & requirements are required";
        if (value.trim().length < 10) return "Please enter at least 10 characters describing your requirements";
        return "";
      case "consent":
        if (!value) return "You must acknowledge the terms before proceeding";
        return "";
      default:
        return "";
    }
  }

  // Handle Blur for Student Form
  function handleStudentBlur(fieldName: string) {
    setStudentTouched((prev) => ({ ...prev, [fieldName]: true }));
    const error = validateStudentField(fieldName, (studentValues as any)[fieldName]);
    setStudentErrors((prev) => ({ ...prev, [fieldName]: error }));
  }

  // Handle Change for Student Form
  function handleStudentChange(fieldName: string, value: any) {
    setStudentValues((prev) => ({ ...prev, [fieldName]: value }));
    if (studentTouched[fieldName]) {
      const error = validateStudentField(fieldName, value);
      setStudentErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  }

  // Handle Submit for Student Form
  function handleStudentSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Mark all fields touched
    const allFields = ["name", "college", "year", "email", "phone", "city", "startDate", "message", "consent"];
    const newTouched: Record<string, boolean> = {};
    const newErrors: Record<string, string> = {};
    let firstErrorField: string | null = null;

    allFields.forEach((field) => {
      newTouched[field] = true;
      const error = validateStudentField(field, (studentValues as any)[field]);
      if (error) {
        newErrors[field] = error;
        if (!firstErrorField) firstErrorField = field;
      }
    });

    setStudentTouched(newTouched);
    setStudentErrors(newErrors);

    if (firstErrorField) {
      const el = document.getElementById(`student-${firstErrorField}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }
      return;
    }

    // Valid: Construct formatted submission
    const fullDraft = 
`CERTIGO LABORATORIES - STUDENT PROGRAMME APPLICATION
Date: ${new Date().toLocaleDateString()}
--------------------------------------------------
Selected Programme: ${selectedProgram}
Student Name: ${studentValues.name}
College / University: ${studentValues.college}
Degree Level: ${studentValues.degree}
Academic Branch: ${studentValues.specialization}
Year / Semester: ${studentValues.year}
Email Address: ${studentValues.email}
Contact Number: ${studentValues.phone}
Location: ${studentValues.city}
Preferred Start Date: ${studentValues.startDate}
Duration: ${studentValues.duration}
Discipline Preference: ${selectedDiscipline}
Learning Goals & Project Synopsis: ${studentValues.message}
--------------------------------------------------
I acknowledge the Certigo privacy notice and understand that this submission is an enquiry and does not guarantee a placement.`;

    setDraft(fullDraft);
    setCopied(false);

    // Automatically navigate / open WhatsApp with application details pre-filled
    const waText = encodeURIComponent(
      `Hello Certigo Laboratories Academic Desk,\n\nI am submitting my Student Programme Application for the *${selectedProgram}*:\n\n` + fullDraft
    );
    window.open(`https://wa.me/918247442084?text=${waText}`, "_blank");
  }

  // Handle Blur for Quote Form
  function handleQuoteBlur(fieldName: string) {
    setQuoteTouched((prev) => ({ ...prev, [fieldName]: true }));
    const error = validateQuoteField(fieldName, (quoteValues as any)[fieldName]);
    setQuoteErrors((prev) => ({ ...prev, [fieldName]: error }));
  }

  // Handle Change for Quote Form
  function handleQuoteChange(fieldName: string, value: any) {
    setQuoteValues((prev) => ({ ...prev, [fieldName]: value }));
    if (quoteTouched[fieldName]) {
      const error = validateQuoteField(fieldName, value);
      setQuoteErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  }

  // Handle Submit for Quote Form
  function handleQuoteSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const allFields = ["name", "email", "phone", "message", "consent"];
    const newTouched: Record<string, boolean> = {};
    const newErrors: Record<string, string> = {};
    let firstErrorField: string | null = null;

    allFields.forEach((field) => {
      newTouched[field] = true;
      const error = validateQuoteField(field, (quoteValues as any)[field]);
      if (error) {
        newErrors[field] = error;
        if (!firstErrorField) firstErrorField = field;
      }
    });

    setQuoteTouched(newTouched);
    setQuoteErrors(newErrors);

    if (firstErrorField) {
      const el = document.getElementById(`quote-${firstErrorField}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }
      return;
    }

    // Valid: Construct formatted submission
    const fullDraft = 
`CERTIGO LABORATORIES - COMMERCIAL TESTING QUOTATION REQUEST
Date: ${new Date().toLocaleDateString()}
--------------------------------------------------
Contact Name: ${quoteValues.name}
Organisation: ${quoteValues.org || "Not provided"}
Email: ${quoteValues.email}
Phone: ${quoteValues.phone}
Sample Type: ${quoteValues.sample}
Sample Quantity & Timeline: ${quoteValues.qty || "Standard"}
Tests / Parameters: ${quoteValues.params || "To be confirmed"}
Sample Description & Notes: ${quoteValues.message}
--------------------------------------------------
I acknowledge the Certigo privacy notice.`;

    setDraft(fullDraft);
    setCopied(false);

    // Automatically navigate / open WhatsApp with quotation request details pre-filled
    const waText = encodeURIComponent(
      `Hello Certigo Laboratories Testing Desk,\n\nI would like to request a Laboratory Testing Quotation:\n\n` + fullDraft
    );
    window.open(`https://wa.me/918247442084?text=${waText}`, "_blank");
  }

  // ==========================================
  // If student application form:
  // ==========================================
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
              Complete your profile below to submit your official application draft directly to our Academic Desk on WhatsApp and Email.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-secondary/80 border border-border px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary">
            <ShieldCheck size={15} className="text-brand-green" /> Visakhapatnam Centre
          </div>
        </div>

        <form onSubmit={handleStudentSubmit} className="space-y-6" noValidate>
          {/* 1. VISUAL PROGRAMME SELECTOR CARDS */}
          <div>
            <div className="app-form-section-title">
              <span className="w-5 h-5 rounded-full bg-teal text-white text-[11px] font-bold flex items-center justify-center">1</span>
              <span>Select Your Target Programme</span>
            </div>

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
                    role="button"
                    tabIndex={0}
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
                  Full Name <span className="text-red-500 font-bold">*</span>
                </label>
                <div className={`input-with-icon-wrap ${studentErrors.name && studentTouched.name ? "has-field-error" : ""}`}>
                  <User size={16} />
                  <input
                    id="student-name"
                    name="Student Name"
                    value={studentValues.name}
                    onChange={(e) => handleStudentChange("name", e.target.value)}
                    onBlur={() => handleStudentBlur("name")}
                    maxLength={120}
                    placeholder="e.g. Ananya Sharma"
                    autoComplete="name"
                  />
                </div>
                {studentErrors.name && studentTouched.name && (
                  <span className="field-error-msg"><AlertCircle size={13} /> {studentErrors.name}</span>
                )}
              </div>

              <div className="app-form-field">
                <label htmlFor="student-college">
                  College / University <span className="text-red-500 font-bold">*</span>
                </label>
                <div className={`input-with-icon-wrap ${studentErrors.college && studentTouched.college ? "has-field-error" : ""}`}>
                  <Building2 size={16} />
                  <input
                    id="student-college"
                    name="College / University"
                    value={studentValues.college}
                    onChange={(e) => handleStudentChange("college", e.target.value)}
                    onBlur={() => handleStudentBlur("college")}
                    maxLength={180}
                    placeholder="e.g. Andhra University, GITAM, etc."
                    autoComplete="organization"
                  />
                </div>
                {studentErrors.college && studentTouched.college && (
                  <span className="field-error-msg"><AlertCircle size={13} /> {studentErrors.college}</span>
                )}
              </div>

              <div className="app-form-field">
                <label htmlFor="student-degree">
                  Current Degree Level <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <GraduationCap size={16} />
                  <select 
                    id="student-degree" 
                    name="Degree Level" 
                    value={studentValues.degree}
                    onChange={(e) => handleStudentChange("degree", e.target.value)}
                  >
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
                  Academic Branch / Major <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <FileText size={16} />
                  <select 
                    id="student-specialization" 
                    name="Specialization" 
                    value={studentValues.specialization}
                    onChange={(e) => handleStudentChange("specialization", e.target.value)}
                  >
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
                  Current Academic Year / Semester <span className="text-red-500 font-bold">*</span>
                </label>
                <div className={`input-with-icon-wrap ${studentErrors.year && studentTouched.year ? "has-field-error" : ""}`}>
                  <Clock size={16} />
                  <input
                    id="student-year"
                    name="Year / Semester"
                    value={studentValues.year}
                    onChange={(e) => handleStudentChange("year", e.target.value)}
                    onBlur={() => handleStudentBlur("year")}
                    maxLength={60}
                    placeholder="e.g. 3rd Year / 6th Semester (Final Year)"
                  />
                </div>
                {studentErrors.year && studentTouched.year && (
                  <span className="field-error-msg"><AlertCircle size={13} /> {studentErrors.year}</span>
                )}
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
                  Email Address <span className="text-red-500 font-bold">*</span>
                </label>
                <div className={`input-with-icon-wrap ${studentErrors.email && studentTouched.email ? "has-field-error" : ""}`}>
                  <Mail size={16} />
                  <input
                    id="student-email"
                    name="Email Address"
                    type="email"
                    value={studentValues.email}
                    onChange={(e) => handleStudentChange("email", e.target.value)}
                    onBlur={() => handleStudentBlur("email")}
                    maxLength={160}
                    placeholder="student@example.com"
                    autoComplete="email"
                  />
                </div>
                {studentErrors.email && studentTouched.email && (
                  <span className="field-error-msg"><AlertCircle size={13} /> {studentErrors.email}</span>
                )}
              </div>

              <div className="app-form-field">
                <label htmlFor="student-phone">
                  WhatsApp / Contact Phone <span className="text-red-500 font-bold">*</span>
                </label>
                <div className={`input-with-icon-wrap ${studentErrors.phone && studentTouched.phone ? "has-field-error" : ""}`}>
                  <Phone size={16} />
                  <input
                    id="student-phone"
                    name="Contact Number"
                    type="tel"
                    value={studentValues.phone}
                    onChange={(e) => handleStudentChange("phone", e.target.value)}
                    onBlur={() => handleStudentBlur("phone")}
                    maxLength={30}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                </div>
                {studentErrors.phone && studentTouched.phone && (
                  <span className="field-error-msg"><AlertCircle size={13} /> {studentErrors.phone}</span>
                )}
              </div>

              <div className="app-form-field">
                <label htmlFor="student-city">
                  City / State <span className="text-red-500 font-bold">*</span>
                </label>
                <div className={`input-with-icon-wrap ${studentErrors.city && studentTouched.city ? "has-field-error" : ""}`}>
                  <MapPin size={16} />
                  <input
                    id="student-city"
                    name="Location"
                    value={studentValues.city}
                    onChange={(e) => handleStudentChange("city", e.target.value)}
                    onBlur={() => handleStudentBlur("city")}
                    maxLength={80}
                    placeholder="Visakhapatnam, AP"
                  />
                </div>
                {studentErrors.city && studentTouched.city && (
                  <span className="field-error-msg"><AlertCircle size={13} /> {studentErrors.city}</span>
                )}
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
                <label htmlFor="student-startDate">
                  Preferred Start Date <span className="text-red-500 font-bold">*</span>
                </label>
                <div className={`input-with-icon-wrap ${studentErrors.startDate && studentTouched.startDate ? "has-field-error" : ""}`}>
                  <Calendar size={16} />
                  <input
                    id="student-startDate"
                    type="date"
                    name="Preferred Start Date"
                    value={studentValues.startDate}
                    onChange={(e) => handleStudentChange("startDate", e.target.value)}
                    onBlur={() => handleStudentBlur("startDate")}
                  />
                </div>
                {studentErrors.startDate && studentTouched.startDate && (
                  <span className="field-error-msg"><AlertCircle size={13} /> {studentErrors.startDate}</span>
                )}
              </div>

              <div className="app-form-field">
                <label htmlFor="student-duration">
                  Expected Duration <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="input-with-icon-wrap">
                  <Clock size={16} />
                  <select 
                    id="student-duration" 
                    name="Duration" 
                    value={studentValues.duration}
                    onChange={(e) => handleStudentChange("duration", e.target.value)}
                  >
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
                  Primary Laboratory Discipline <span className="text-red-500 font-bold">*</span>
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
                Briefly describe what you aim to learn or your university project topic <span className="text-red-500 font-bold">*</span>
              </label>
              <div className={`input-with-icon-wrap ${studentErrors.message && studentTouched.message ? "has-field-error" : ""}`}>
                <textarea
                  id="student-message"
                  name="Learning Goals & Project Synopsis"
                  value={studentValues.message}
                  onChange={(e) => handleStudentChange("message", e.target.value)}
                  onBlur={() => handleStudentBlur("message")}
                  maxLength={3000}
                  placeholder="Outline your background, target laboratory techniques you want hands-on practice with (e.g., microbial plating, water quality parameters, spectrophotometry), and university submission timelines."
                />
              </div>
              {studentErrors.message && studentTouched.message ? (
                <span className="field-error-msg"><AlertCircle size={13} /> {studentErrors.message}</span>
              ) : (
                <p className="text-[11px] text-muted-foreground mt-1 mb-0">
                  Tip: If your college has specific dissertation guidelines or university evaluation rubrics, mention them here.
                </p>
              )}
            </div>
          </div>

          {/* 6. CONSENT & POLICY ACKNOWLEDGEMENT */}
          <div className={`p-4 rounded-xl border ${studentErrors.consent && studentTouched.consent ? "border-red-400 bg-red-50/20" : "border-border bg-secondary/40"}`}>
            <label className="flex items-start gap-3 cursor-pointer text-xs text-muted-foreground leading-relaxed">
              <input 
                id="student-consent"
                name="consent" 
                type="checkbox" 
                checked={studentValues.consent}
                onChange={(e) => handleStudentChange("consent", e.target.checked)}
                className="mt-0.5 accent-teal h-4 w-4 rounded" 
              />
              <span>
                I acknowledge the <Link to="/privacy" className="text-teal font-semibold underline">privacy notice</Link> and agree to share these academic details with Certigo Laboratories Private Limited. I understand that this enquiry prepares an official communication draft and does not constitute a guaranteed placement until confirmed by the academic team.
              </span>
            </label>
            {studentErrors.consent && studentTouched.consent && (
              <span className="field-error-msg mt-1.5 block"><AlertCircle size={13} /> {studentErrors.consent}</span>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-2">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-brand-green to-teal hover:opacity-95 text-white font-bold py-3.5 px-8 text-sm shadow-md transition-all hover:scale-[1.01]"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2" /> Submit Application &amp; Chat on WhatsApp
            </Button>
            <p className="text-[11px] text-muted-foreground mt-2 mb-0">
              Validating your entries... On submission, your formatted application is generated client-side and opened in WhatsApp for instant review by our academic coordinators.
            </p>
          </div>

          {/* READY DRAFT RESULT PANEL (AGENTS.md Compliant) */}
          {draft && (
            <div className="status-draft-panel mt-6" role="status">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-teal/20 text-teal flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={22} className="text-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-0.5">
                    Your Application Draft is Successfully Prepared!
                  </h3>
                  <p className="text-xs text-muted-foreground mb-0">
                    Your application has been formatted for our Academic Coordination Office and opened on WhatsApp. You can also send via Email or copy the text below:
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 my-4">
                <Button asChild size="default" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                  <a 
                    href={`https://wa.me/918247442084?text=${encodeURIComponent("Hello Academic Coordinator, I am applying for the " + selectedProgram + ". Here is my enquiry:\n\n" + draft)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-1.5" /> Re-open WhatsApp
                  </a>
                </Button>

                <Button asChild size="default" className="bg-teal hover:bg-teal/90 text-white font-semibold">
                  <a 
                    href={`mailto:${contact.email}?subject=${encodeURIComponent("Student Programme Application - " + selectedProgram)}&body=${encodeURIComponent(draft)}`}
                  >
                    <Mail size={16} className="mr-1.5" /> Open in Mail App
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

  // ==========================================
  // COMMERCIAL TESTING QUOTATION FORM
  // ==========================================
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
      <div className="app-badge-pill mb-2">
        <ShieldCheck size={13} className="text-teal" /> NABL ACCREDITED TESTING ENQUIRY
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-primary mb-1">
        Request a Testing Quotation
      </h2>
      <p className="text-xs sm:text-sm text-muted-foreground mb-6">
        Specify your sample matrix, required regulatory standards, and timeline. Fill in your details below to submit directly to our testing desk.
      </p>

      <form className="space-y-5" onSubmit={handleQuoteSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="app-form-field">
            <label htmlFor="quote-name">
              Contact Name <span className="text-red-500 font-bold">*</span>
            </label>
            <div className={`input-with-icon-wrap ${quoteErrors.name && quoteTouched.name ? "has-field-error" : ""}`}>
              <User size={16} />
              <input 
                id="quote-name" 
                name="Contact Name" 
                value={quoteValues.name}
                onChange={(e) => handleQuoteChange("name", e.target.value)}
                onBlur={() => handleQuoteBlur("name")}
                maxLength={120} 
                placeholder="Your full name" 
                autoComplete="name" 
              />
            </div>
            {quoteErrors.name && quoteTouched.name && (
              <span className="field-error-msg"><AlertCircle size={13} /> {quoteErrors.name}</span>
            )}
          </div>

          <div className="app-form-field">
            <label htmlFor="quote-org">
              Company / Organisation
            </label>
            <div className="input-with-icon-wrap">
              <Building2 size={16} />
              <input 
                id="quote-org" 
                name="Organisation" 
                value={quoteValues.org}
                onChange={(e) => handleQuoteChange("org", e.target.value)}
                maxLength={160} 
                placeholder="e.g. Food processor, Hotel, Individual" 
                autoComplete="organization" 
              />
            </div>
          </div>

          <div className="app-form-field">
            <label htmlFor="quote-email">
              Email Address <span className="text-red-500 font-bold">*</span>
            </label>
            <div className={`input-with-icon-wrap ${quoteErrors.email && quoteTouched.email ? "has-field-error" : ""}`}>
              <Mail size={16} />
              <input 
                id="quote-email" 
                name="Email" 
                type="email" 
                value={quoteValues.email}
                onChange={(e) => handleQuoteChange("email", e.target.value)}
                onBlur={() => handleQuoteBlur("email")}
                maxLength={160} 
                placeholder="procurement@company.com" 
                autoComplete="email" 
              />
            </div>
            {quoteErrors.email && quoteTouched.email && (
              <span className="field-error-msg"><AlertCircle size={13} /> {quoteErrors.email}</span>
            )}
          </div>

          <div className="app-form-field">
            <label htmlFor="quote-phone">
              Phone Number <span className="text-red-500 font-bold">*</span>
            </label>
            <div className={`input-with-icon-wrap ${quoteErrors.phone && quoteTouched.phone ? "has-field-error" : ""}`}>
              <Phone size={16} />
              <input 
                id="quote-phone" 
                name="Phone" 
                type="tel" 
                value={quoteValues.phone}
                onChange={(e) => handleQuoteChange("phone", e.target.value)}
                onBlur={() => handleQuoteBlur("phone")}
                maxLength={30} 
                placeholder="+91 82474 42084" 
                autoComplete="tel" 
              />
            </div>
            {quoteErrors.phone && quoteTouched.phone && (
              <span className="field-error-msg"><AlertCircle size={13} /> {quoteErrors.phone}</span>
            )}
          </div>

          <div className="app-form-field">
            <label htmlFor="quote-sample">
              Sample Matrix / Discipline <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="input-with-icon-wrap">
              <FlaskConical size={16} />
              <select 
                id="quote-sample" 
                name="Sample Type" 
                value={quoteValues.sample}
                onChange={(e) => handleQuoteChange("sample", e.target.value)}
              >
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
              <input 
                id="quote-qty" 
                name="Sample Quantity & Timeline" 
                value={quoteValues.qty}
                onChange={(e) => handleQuoteChange("qty", e.target.value)}
                maxLength={120} 
                placeholder="e.g. 5 samples, turnaround 48 hours" 
              />
            </div>
          </div>

          <div className="app-form-field sm:col-span-2">
            <label htmlFor="quote-params">
              Tests / Parameters of Interest
            </label>
            <div className="input-with-icon-wrap">
              <FileText size={16} />
              <input 
                id="quote-params" 
                name="Tests / Parameters" 
                value={quoteValues.params}
                onChange={(e) => handleQuoteChange("params", e.target.value)}
                maxLength={400} 
                placeholder="e.g. IS 10500 Potability, FSSAI nutritional panel, BOD/COD, or 'Need guidance'" 
              />
            </div>
          </div>

          <div className="app-form-field sm:col-span-2">
            <label htmlFor="quote-message">
              Sample Description / Additional Requirements <span className="text-red-500 font-bold">*</span>
            </label>
            <div className={`input-with-icon-wrap ${quoteErrors.message && quoteTouched.message ? "has-field-error" : ""}`}>
              <textarea
                id="quote-message"
                name="Sample Description & Notes"
                value={quoteValues.message}
                onChange={(e) => handleQuoteChange("message", e.target.value)}
                onBlur={() => handleQuoteBlur("message")}
                maxLength={3000}
                placeholder="Provide sample details, sampling location, specific regulatory standards to comply with, or special preservation needs."
              />
            </div>
            {quoteErrors.message && quoteTouched.message && (
              <span className="field-error-msg"><AlertCircle size={13} /> {quoteErrors.message}</span>
            )}
          </div>
        </div>

        <div className={`p-3.5 rounded-lg border ${quoteErrors.consent && quoteTouched.consent ? "border-red-400 bg-red-50/20" : "border-border bg-secondary/40"} text-xs`}>
          <label className="flex items-start gap-2.5 cursor-pointer text-muted-foreground">
            <input 
              id="quote-consent"
              name="consent" 
              type="checkbox" 
              checked={quoteValues.consent}
              onChange={(e) => handleQuoteChange("consent", e.target.checked)}
              className="mt-0.5 accent-teal" 
            />
            <span>
              I acknowledge the <Link to="/privacy" className="text-teal font-semibold underline">privacy notice</Link> and agree to share these details with Certigo Laboratories by WhatsApp and email.
            </span>
          </label>
          {quoteErrors.consent && quoteTouched.consent && (
            <span className="field-error-msg mt-1 block"><AlertCircle size={13} /> {quoteErrors.consent}</span>
          )}
        </div>

        <div>
          <Button 
            type="submit" 
            size="lg" 
            className="bg-gradient-to-r from-brand-green to-teal hover:opacity-95 text-white font-bold py-3.5 px-8 text-sm shadow-md transition-all hover:scale-[1.01]"
          >
            <WhatsAppIcon className="w-4 h-4 mr-2" /> Send Enquiry via WhatsApp
          </Button>
          <p className="text-[11px] text-muted-foreground mt-2 mb-0">
            Clicking will validate your fields and open your structured enquiry in WhatsApp directly to our laboratory coordination desk.
          </p>
        </div>

        {draft && (
          <div className="status-draft-panel mt-6" role="status">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-teal" size={20} />
              <h3 className="font-bold text-primary text-base mb-0">Your Quote Enquiry Draft is Ready!</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Your testing enquiry has been formatted and opened on WhatsApp. You can also send via Email or copy:
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                <a 
                  href={`https://wa.me/918247442084?text=${encodeURIComponent("Hello Certigo Laboratories, I would like to request a laboratory testing quotation:\n\n" + draft)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-1" /> Re-open WhatsApp
                </a>
              </Button>
              <Button asChild size="sm" className="bg-teal hover:bg-teal/90 text-white font-semibold">
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
                <Copy size={14} className="mr-1" /> {copied ? "Copied!" : "Copy Details"}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
