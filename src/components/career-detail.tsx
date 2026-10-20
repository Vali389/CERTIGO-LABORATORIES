import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft, ArrowUpRight, Check, MapPin, Briefcase, Clock,
  GraduationCap, IndianRupee, ShieldCheck, Sparkles, Phone,
  Mail, Share2, UploadCloud, FileText, CheckCircle2, AlertCircle,
  Building2, Award, ChevronRight, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, WhatsAppIcon, SectionHeading } from "@/components/site";
import { contact, jobOpenings, getJobBySlug, type JobListing } from "@/lib/site-data";

export function CareerDetail({ slug }: { slug: string }) {
  const job = getJobBySlug(slug);

  if (!job) {
    return (
      <div className="site-container py-24 text-center">
        <h1 className="text-3xl font-serif text-primary mb-4">Position Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The position you are looking for is currently filled or may have moved.
        </p>
        <Button asChild>
          <Link to="/careers">
            <ArrowLeft className="mr-2" size={16} /> View All Open Positions
          </Link>
        </Button>
      </div>
    );
  }

  const otherJobs = jobOpenings.filter((j) => j.id !== job.id).slice(0, 3);

  return (
    <>
      {/* Breadcrumb Header */}
      <section className="bg-slate-50 border-b border-border py-3">
        <div className="site-container">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
            <span>/</span>
            <span className="text-primary font-semibold truncate max-w-xs">{job.title}</span>
          </nav>
        </div>
      </section>

      {/* Role Hero */}
      <section className="career-hero-section">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="career-dept-pill">{job.department}</span>
                <span className="career-status-pill">
                  <span className="career-live-dot" /> {job.status}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary font-bold mb-4 leading-tight">
                {job.title}
              </h1>

              <div className="career-hero-meta-grid">
                <div className="career-hero-meta-item">
                  <MapPin size={15} className="text-teal flex-shrink-0" />
                  <span>{job.location}</span>
                </div>
                <div className="career-hero-meta-item">
                  <Briefcase size={15} className="text-teal flex-shrink-0" />
                  <span>{job.type}</span>
                </div>
                <div className="career-hero-meta-item">
                  <Clock size={15} className="text-teal flex-shrink-0" />
                  <span>{job.experience}</span>
                </div>
                <div className="career-hero-meta-item">
                  <GraduationCap size={15} className="text-teal flex-shrink-0" />
                  <span>{job.education}</span>
                </div>
                <div className="career-hero-meta-item">
                  <IndianRupee size={15} className="text-teal flex-shrink-0" />
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
              <Button asChild size="lg" className="bg-teal hover:bg-teal/90 text-white font-bold shadow-md">
                <a href="#apply-form">
                  Apply for this Role <ArrowUpRight size={17} className="ml-1" />
                </a>
              </Button>
              <a
                href={`https://wa.me/918247442084?text=Hello%20Certigo%20HR%2C%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(job.title)}%20position%20at%20Certigo%20Laboratories.`}
                target="_blank"
                rel="noreferrer"
                className="career-whatsapp-share-btn"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600 mr-2" />
                <span>WhatsApp HR</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section bg-slate-50/50 py-12">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column (8 cols): Job Details & Application Form */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* Overview Box */}
              <div className="career-content-card">
                <h2 className="career-card-title">
                  <Sparkles size={18} className="text-teal" /> Role Summary
                </h2>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
                  {job.summary}
                </p>

                {/* Key Skills Tags */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Core Technical Competencies &amp; Instrumentation
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.keySkills.map((skill, idx) => (
                      <span key={idx} className="career-skill-badge">
                        <Check size={12} className="text-brand-green" /> {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="career-content-card">
                <h2 className="career-card-title">
                  <Briefcase size={18} className="text-teal" /> Key Responsibilities &amp; Daily Analytical Duties
                </h2>
                <ul className="career-check-list">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>
                      <span className="career-check-icon">✓</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="career-content-card">
                <h2 className="career-card-title">
                  <GraduationCap size={18} className="text-teal" /> Eligibility, Education &amp; Experience
                </h2>
                <ul className="career-check-list">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>
                      <span className="career-check-icon">✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                {job.preferredQualifications.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Preferred / Advantageous Qualifications:
                    </h3>
                    <ul className="career-check-list">
                      {job.preferredQualifications.map((pref, idx) => (
                        <li key={idx}>
                          <span className="career-check-icon bg-emerald-50 text-emerald-600 border-emerald-200">★</span>
                          <span>{pref}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Perks & Benefits */}
              <div className="career-content-card">
                <h2 className="career-card-title">
                  <Award size={18} className="text-teal" /> What Certigo Laboratories Offers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {job.benefits.map((benefit, idx) => (
                    <div key={idx} className="career-benefit-box">
                      <ShieldCheck size={16} className="text-brand-green flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Form */}
              <div id="apply-form" className="career-apply-card scroll-mt-24">
                <JobApplyForm job={job} />
              </div>
            </div>

            {/* Right Column (4 cols): Sidebar Information */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              {/* Quick Specs Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                <h3 className="text-base font-bold text-primary mb-4 pb-3 border-b border-slate-100">
                  Position Details
                </h3>

                <dl className="career-sidebar-dl">
                  <div>
                    <dt>Department</dt>
                    <dd>{job.department}</dd>
                  </div>
                  <div>
                    <dt>Employment Type</dt>
                    <dd>{job.type}</dd>
                  </div>
                  <div>
                    <dt>Experience Level</dt>
                    <dd>{job.experience}</dd>
                  </div>
                  <div>
                    <dt>Total Vacancies</dt>
                    <dd>{job.vacancies} Position{job.vacancies > 1 ? "s" : ""}</dd>
                  </div>
                  <div>
                    <dt>Working Location</dt>
                    <dd>Visakhapatnam (Saligramapuram)</dd>
                  </div>
                  <div>
                    <dt>Shift Timings</dt>
                    <dd>Standard Day Analytical Shift</dd>
                  </div>
                  <div>
                    <dt>Accreditation Scope</dt>
                    <dd>NABL (ISO/IEC 17025:2017)</dd>
                  </div>
                  <div>
                    <dt>Application Review</dt>
                    <dd className="text-emerald-700 font-semibold">Immediate / Ongoing</dd>
                  </div>
                </dl>
              </div>

              {/* Recruitment Assistance */}
              <div className="bg-gradient-to-br from-[#064B83] to-[#042848] text-white rounded-2xl p-6 shadow-md">
                <Building2 size={24} className="text-teal mb-3" />
                <h4 className="font-bold text-base mb-2">Certigo Human Resources</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Have questions about this role or working at our NABL accredited laboratory facility in Visakhapatnam?
                </p>
                <div className="flex flex-col gap-2.5 text-xs text-slate-200">
                  <a href={contact.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone size={14} className="text-teal" /> {contact.phone}
                  </a>
                  <a href={`mailto:${contact.email}?subject=Career%20Query%3A%20${encodeURIComponent(job.title)}`} className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={14} className="text-teal" /> {contact.email}
                  </a>
                </div>
              </div>

              {/* Hiring Workflow Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                <h3 className="text-base font-bold text-primary mb-4 pb-2 border-b border-slate-100">
                  Our Recruitment Steps
                </h3>
                <ol className="career-timeline-list">
                  <li>
                    <strong>1. Application Review</strong>
                    <span>Evaluation of academic qualifications and relevant lab exposure.</span>
                  </li>
                  <li>
                    <strong>2. Technical Screening</strong>
                    <span>Call or video discussion on methods, instrumentation, and standard protocols.</span>
                  </li>
                  <li>
                    <strong>3. Laboratory Practical Walkthrough</strong>
                    <span>In-person visit to our testing facility and practical bench discussion.</span>
                  </li>
                  <li>
                    <strong>4. Final Offer &amp; Onboarding</strong>
                    <span>Formal offer letter, ISO/IEC 17025 induction, and safety orientation.</span>
                  </li>
                </ol>
              </div>

              {/* Other Open Positions */}
              {otherJobs.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                  <h3 className="text-base font-bold text-primary mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span>Other Openings</span>
                    <Link to="/careers" className="text-xs text-teal font-semibold hover:underline">
                      View All
                    </Link>
                  </h3>
                  <div className="flex flex-col gap-3">
                    {otherJobs.map((oj) => (
                      <Link
                        key={oj.id}
                        to={oj.path}
                        className="p-3 rounded-xl border border-slate-100 hover:border-teal/40 hover:bg-slate-50/80 transition-all flex flex-col gap-1 group"
                      >
                        <span className="text-[11px] font-bold text-teal">{oj.department}</span>
                        <h4 className="text-xs font-bold text-primary group-hover:text-teal transition-colors">
                          {oj.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[10.5px] text-muted-foreground mt-0.5">
                          <span>{oj.experience}</span>
                          <span>•</span>
                          <span>{oj.location}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export function JobApplyForm({ job }: { job?: JobListing }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    education: "M.Sc.",
    experience: "1-3 Years",
    noticePeriod: "15 Days",
    currentCtc: "",
    expectedCtc: "",
    message: "",
    consent: false
  });

  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [selectedFileSize, setSelectedFileSize] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [applicationRef, setApplicationRef] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
      const sizeInMb = (file.size / (1024 * 1024)).toFixed(2);
      setSelectedFileSize(`${sizeInMb} MB`);
    } else {
      setSelectedFileName("");
      setSelectedFileSize("");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const randomRef = "CRT-APP-" + Math.floor(100000 + Math.random() * 900000);
    setApplicationRef(randomRef);
    setSubmitted(true);
  };

  const jobTitle = job?.title || "General Laboratory Scientist / Analyst";
  const jobId = job?.id || "GEN-CAREER";

  // Pre-fill email body
  const emailSubject = encodeURIComponent(`Application for ${jobTitle} (${jobId}) - ${formData.fullName}`);
  const emailBody = encodeURIComponent(
    `Dear Certigo Laboratories Recruitment Team,\n\n` +
    `I am submitting my application for the position of ${jobTitle} (Ref Code: ${jobId}).\n\n` +
    `My Details:\n` +
    `• Full Name: ${formData.fullName}\n` +
    `• Email: ${formData.email}\n` +
    `• Phone: ${formData.phone}\n` +
    `• Current Location: ${formData.location}\n` +
    `• Highest Qualification: ${formData.education}\n` +
    `• Total Experience: ${formData.experience}\n` +
    `• Notice Period: ${formData.noticePeriod}\n` +
    `• Expected CTC: ${formData.expectedCtc || "Negotiable as per standards"}\n\n` +
    `Brief Note:\n${formData.message || "Please find my credentials for your review."}\n\n` +
    `Application Reference: ${applicationRef}\n\n` +
    `Please find my resume attached with this email.\n\n` +
    `Sincerely,\n${formData.fullName}`
  );

  const whatsappMessage = encodeURIComponent(
    `Hello Certigo Laboratories HR Desk,\n\n` +
    `I have prepared an application for *${jobTitle}* (Ref: ${jobId}).\n` +
    `Name: ${formData.fullName}\n` +
    `Qualification: ${formData.education}\n` +
    `Experience: ${formData.experience}\n` +
    `Application Ref: ${applicationRef}\n\n` +
    `I would like to forward my CV for your review.`
  );

  if (submitted) {
    return (
      <div className="career-receipt-card">
        <div className="career-receipt-badge">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-xl sm:text-2xl font-serif text-primary font-bold mb-2">
          Application Details Prepared Successfully
        </h3>
        <p className="text-sm text-slate-600 mb-6 max-w-lg mx-auto">
          Your candidate profile for <strong>{jobTitle}</strong> has been formulated.
          To complete your submission, please send your prepared email draft with your resume attached.
        </p>

        <div className="career-receipt-details-box">
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-xs text-slate-500 uppercase font-semibold">Application Reference</span>
            <span className="font-mono font-bold text-teal text-sm">{applicationRef}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-xs text-slate-500 uppercase font-semibold">Candidate Name</span>
            <span className="font-semibold text-slate-800 text-sm">{formData.fullName}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-xs text-slate-500 uppercase font-semibold">Contact Email</span>
            <span className="text-slate-800 text-sm">{formData.email}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-xs text-slate-500 uppercase font-semibold">Applied Position</span>
            <span className="font-semibold text-teal text-sm">{jobTitle}</span>
          </div>
          {selectedFileName && (
            <div className="flex justify-between items-center py-2">
              <span className="text-xs text-slate-500 uppercase font-semibold">Selected Resume</span>
              <span className="font-mono text-xs text-slate-700 truncate max-w-[200px]">{selectedFileName}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Button asChild size="lg" className="bg-teal hover:bg-teal/90 text-white font-bold shadow-md">
            <a href={`mailto:${contact.email}?subject=${emailSubject}&body=${emailBody}`}>
              <Mail className="mr-2" size={17} /> Open Prepared Email Draft
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="border-emerald-300 text-emerald-800 hover:bg-emerald-50 font-semibold shadow-xs">
            <a href={`https://wa.me/918247442084?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="w-4 h-4 mr-2 text-emerald-600" /> WhatsApp HR Desk
            </a>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          Note: In accordance with presentation guidelines, sending the pre-composed email directly ensures your CV is securely transferred to our recruitment team.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs text-teal font-semibold underline mt-4 hover:text-teal/80 cursor-pointer"
        >
          Modify or Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="career-form-header">
        <div>
          <span className="career-form-eyebrow">SUBMIT YOUR CREDENTIALS</span>
          <h3 className="career-form-title">
            Apply for: {jobTitle}
          </h3>
          <p className="career-form-subtitle">
            Complete the form below to initiate your candidature with Certigo Laboratories Human Resources.
          </p>
        </div>
        <span className="career-form-ref-pill">Ref: {jobId}</span>
      </div>

      <form onSubmit={handleSubmit} className="career-form-body">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="career-form-group">
            <label htmlFor="fullName">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. Dr. / Mr. / Ms. Rajesh Kumar"
              className="career-input"
            />
          </div>

          <div className="career-form-group">
            <label htmlFor="email">Email Address <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="rajesh.kumar@example.com"
              className="career-input"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="career-form-group">
            <label htmlFor="phone">Phone / Mobile Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              className="career-input"
            />
          </div>

          <div className="career-form-group">
            <label htmlFor="location">Current City / State <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="location"
              name="location"
              required
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Visakhapatnam, Andhra Pradesh"
              className="career-input"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="career-form-group">
            <label htmlFor="education">Highest Qualification <span className="text-red-500">*</span></label>
            <select
              id="education"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              className="career-select"
            >
              <option value="M.Sc. Microbiology">M.Sc. Microbiology</option>
              <option value="M.Sc. Analytical Chemistry">M.Sc. Analytical Chemistry</option>
              <option value="M.Sc. Chemistry (General/Organic)">M.Sc. Chemistry</option>
              <option value="M.Sc. Environmental Science">M.Sc. Environmental Science</option>
              <option value="M.Sc. Food Technology / Biotechnology">M.Sc. Food Tech / Biotech</option>
              <option value="B.Sc. Chemistry / Life Sciences">B.Sc. Chemistry / Life Sciences</option>
              <option value="B.Tech / M.Tech Chemical / Environmental">B.Tech / M.Tech</option>
              <option value="Diploma in MLT / Lab Science">Diploma in MLT</option>
              <option value="Ph.D. in Chemical / Biological Sciences">Ph.D.</option>
              <option value="Other Relevant Qualification">Other</option>
            </select>
          </div>

          <div className="career-form-group">
            <label htmlFor="experience">Total Experience <span className="text-red-500">*</span></label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="career-select"
            >
              <option value="Fresher / 0-1 Year">Fresher / 0-1 Year</option>
              <option value="1-3 Years">1-3 Years</option>
              <option value="3-5 Years">3-5 Years</option>
              <option value="5-8 Years">5-8 Years</option>
              <option value="8+ Years (Senior Lead)">8+ Years</option>
            </select>
          </div>

          <div className="career-form-group">
            <label htmlFor="noticePeriod">Notice Period <span className="text-red-500">*</span></label>
            <select
              id="noticePeriod"
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleInputChange}
              className="career-select"
            >
              <option value="Immediate Joiner">Immediate Joiner</option>
              <option value="15 Days">15 Days</option>
              <option value="30 Days (1 Month)">30 Days (1 Month)</option>
              <option value="60 Days (2 Months)">60 Days</option>
              <option value="Serving Notice">Currently Serving Notice</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="career-form-group">
            <label htmlFor="currentCtc">Current CTC (Optional)</label>
            <input
              type="text"
              id="currentCtc"
              name="currentCtc"
              value={formData.currentCtc}
              onChange={handleInputChange}
              placeholder="e.g. ₹3.5 LPA or As applicable"
              className="career-input"
            />
          </div>

          <div className="career-form-group">
            <label htmlFor="expectedCtc">Expected CTC (Optional)</label>
            <input
              type="text"
              id="expectedCtc"
              name="expectedCtc"
              value={formData.expectedCtc}
              onChange={handleInputChange}
              placeholder="e.g. As per laboratory standards"
              className="career-input"
            />
          </div>
        </div>

        {/* Resume File Upload Zone */}
        <div className="career-form-group">
          <label htmlFor="resumeFile">
            Upload Resume / Curriculum Vitae (.pdf, .doc, .docx - max 5MB)
          </label>
          <div className="career-upload-dropzone">
            <input
              type="file"
              id="resumeFile"
              name="resumeFile"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="career-file-input"
            />
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <UploadCloud size={30} className="text-teal mb-2" />
              {selectedFileName ? (
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg">
                  <FileText size={15} className="text-emerald-600" />
                  <span>{selectedFileName} ({selectedFileSize})</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedFileName("");
                      setSelectedFileSize("");
                    }}
                    className="text-slate-400 hover:text-red-500 ml-1"
                    title="Remove file"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <>
                  <span className="text-xs font-bold text-primary mb-1">
                    Click to select resume from your device
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    Supported formats: PDF, DOCX (Maximum file size 5MB)
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Statement of Interest */}
        <div className="career-form-group">
          <label htmlFor="message">Cover Note &amp; Summary of Laboratory Exposure</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Briefly highlight your analytical experience, instruments operated (e.g. HPLC, AAS, Laminar Hoods), standard methods handled (FSSAI, BIS, APHA), and motivation for joining Certigo Laboratories..."
            className="career-textarea"
          />
        </div>

        {/* Consent declaration */}
        <div className="flex items-start gap-2.5 mt-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            checked={formData.consent}
            onChange={handleInputChange}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-teal focus:ring-teal"
          />
          <label htmlFor="consent" className="text-xs text-slate-600 leading-snug">
            I certify that the information provided is accurate and consent to Certigo Laboratories reviewing my credentials for this and related scientific roles.
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            size="lg"
            className="w-full bg-teal hover:bg-teal/90 text-white font-bold shadow-md cursor-pointer text-sm sm:text-base py-6"
          >
            Submit Application &amp; Prepare Email Draft <ArrowUpRight size={18} className="ml-1" />
          </Button>
          <p className="text-[11px] text-center text-muted-foreground mt-2">
            No registration fee required. Equal opportunity scientific employer.
          </p>
        </div>
      </form>
    </div>
  );
}
