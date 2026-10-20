import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search, Filter, MapPin, Briefcase, Clock, IndianRupee,
  GraduationCap, ArrowUpRight, ArrowRight, ShieldCheck,
  CheckCircle2, Sparkles, Building2, Mail, Award,
  X, RotateCcw, ChevronRight, ChevronLeft, FlaskConical
} from "lucide-react";
import { PageHero, WhatsAppIcon } from "@/components/site";
import { pageHead, contact, jobOpenings } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/careers/")({
  head: () =>
    pageHead(
      "Careers & Scientific Opportunities | Certigo Laboratories",
      "Explore laboratory career opportunities at Certigo Laboratories Private Limited in Visakhapatnam. Open roles for Microbiologists, Analytical Chemists, and Environmental Analysts."
    ),
  component: CareersIndex
});

function CareersIndex() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState<string>("all");
  const [selectedExp, setSelectedExp] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const jobsPerPage = 4;

  const departments = [
    { id: "all", label: "All Departments" },
    { id: "Microbiology", label: "Microbiology" },
    { id: "Chemical Analysis", label: "Chemical Analysis" },
    { id: "Environmental Testing", label: "Environmental Testing" },
    { id: "Quality Assurance", label: "Quality Assurance" },
    { id: "Food Testing", label: "Food Testing" },
    { id: "Water Testing", label: "Water Testing" }
  ];

  const filteredJobs = useMemo(() => {
    return jobOpenings.filter((job) => {
      // Search keyword filter
      if (searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(query);
        const matchesSummary = job.summary.toLowerCase().includes(query);
        const matchesDept = job.department.toLowerCase().includes(query);
        const matchesSkills = job.keySkills.some((s) => s.toLowerCase().includes(query));
        const matchesTags = job.tags.some((t) => t.toLowerCase().includes(query));
        const matchesEdu = job.education.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSummary && !matchesDept && !matchesSkills && !matchesTags && !matchesEdu) {
          return false;
        }
      }

      // Department filter
      if (selectedDept !== "all" && job.department !== selectedDept) {
        return false;
      }

      // Experience level filter
      if (selectedExp !== "all") {
        if (selectedExp === "entry" && job.experienceLevel !== "entry") return false;
        if (selectedExp === "mid" && job.experienceLevel !== "mid") return false;
        if (selectedExp === "senior" && job.experienceLevel !== "senior") return false;
      }

      // Job type filter
      if (selectedType !== "all" && job.type !== selectedType) {
        return false;
      }

      return true;
    });
  }, [searchTerm, selectedDept, selectedExp, selectedType]);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  const hasActiveFilters = searchTerm !== "" || selectedDept !== "all" || selectedExp !== "all" || selectedType !== "all";

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleDeptChange = (dept: string) => {
    setSelectedDept(dept);
    setCurrentPage(1);
  };

  const handleExpChange = (exp: string) => {
    setSelectedExp(exp);
    setCurrentPage(1);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedDept("all");
    setSelectedExp("all");
    setSelectedType("all");
    setCurrentPage(1);
  };

  return (
    <>
      <PageHero
        title="Careers at Certigo Laboratories"
        eyebrow="JOIN OUR SCIENTIFIC TEAM · VISAKHAPATNAM"
        description="Advance your analytical career with a high-precision, NABL accredited (ISO/IEC 17025:2017) laboratory. We offer an intellectually stimulating environment for microbiologists, analytical chemists, and environmental scientists."
      >
        <div className="hero-buttons">
          <Button asChild size="lg" className="hero-btn-primary">
            <a href="#openings-section">
              View Open Positions ({jobOpenings.length}) <ArrowUpRight />
            </a>
          </Button>
          <Button asChild size="lg" className="hero-btn-secondary">
            <Link to="/about">
              Our Facility &amp; Standards <ArrowRight />
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Careers Highlights Bar */}
      <section className="site-container fade-up-init" style={{ marginTop: "24px", marginBottom: "20px" }}>
        <div className="career-stat-strip">
          <div className="career-stat-item">
            <ShieldCheck size={24} className="text-brand-green flex-shrink-0" />
            <div>
              <strong>ISO/IEC 17025:2017</strong>
              <small>NABL Accredited Testing Facility</small>
            </div>
          </div>
          <div className="career-stat-item">
            <Sparkles size={24} className="text-teal flex-shrink-0" />
            <div>
              <strong>State-of-the-Art Labs</strong>
              <small>Calibrated benches &amp; modern instruments</small>
            </div>
          </div>
          <div className="career-stat-item">
            <Award size={24} className="text-primary flex-shrink-0" />
            <div>
              <strong>Continuous Learning</strong>
              <small>Method validation &amp; PT/ILC exposure</small>
            </div>
          </div>
          <div className="career-stat-item">
            <Building2 size={24} className="text-teal flex-shrink-0" />
            <div>
              <strong>Visakhapatnam Hub</strong>
              <small>Prime location near Port Stadium</small>
            </div>
          </div>
        </div>
      </section>

      {/* Openings Section with Search & Filters */}
      <section id="openings-section" className="section bg-slate-50/60 py-12">
        <div className="site-container">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <span className="eyebrow mb-2">EXPLORE OPPORTUNITIES</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary font-bold mb-3">
              Current Laboratory Openings
            </h2>
            <p className="text-sm text-muted-foreground">
              Filter by department, experience, or search by skills to find your ideal scientific role in Visakhapatnam.
            </p>
          </div>

          {/* Search & Filter Controls Bar */}
          <div className="career-filter-wrapper mb-8">
            {/* Search Input Bar */}
            <div className="career-search-box">
              <Search size={18} className="text-slate-400 flex-shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search by job title, analytical skill (e.g. HPLC, Salmonella, AAS), or degree..."
                className="career-search-input"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => handleSearchChange("")}
                  className="career-search-clear"
                  title="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Department Filter Pills */}
            <div className="career-dept-tabs mt-4">
              {departments.map((dept) => {
                const isActive = selectedDept === dept.id;
                const count =
                  dept.id === "all"
                    ? jobOpenings.length
                    : jobOpenings.filter((j) => j.department === dept.id).length;

                return (
                  <button
                    key={dept.id}
                    type="button"
                    onClick={() => handleDeptChange(dept.id)}
                    className={`career-dept-tab ${isActive ? "is-active" : ""}`}
                  >
                    <span>{dept.label}</span>
                    <span className="career-tab-badge">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Secondary Filter Dropdowns & Reset */}
            <div className="career-secondary-filters mt-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <Filter size={14} className="text-slate-500" />
                  <span className="text-xs font-bold text-slate-600">Filters:</span>
                </div>

                {/* Experience Filter */}
                <select
                  value={selectedExp}
                  onChange={(e) => handleExpChange(e.target.value)}
                  className="career-dropdown-filter"
                  aria-label="Filter by Experience"
                >
                  <option value="all">All Experience Levels</option>
                  <option value="entry">Freshers / Entry-Level (0-1 Yr)</option>
                  <option value="mid">Mid-Level (1-3 Years)</option>
                  <option value="senior">Senior Lead (3-5+ Years)</option>
                </select>

                {/* Job Type Filter */}
                <select
                  value={selectedType}
                  onChange={(e) => handleTypeChange(e.target.value)}
                  className="career-dropdown-filter"
                  aria-label="Filter by Job Type"
                >
                  <option value="all">All Job Types</option>
                  <option value="Full-Time">Full-Time (On-Site)</option>
                  <option value="Field / Site">Field &amp; Environmental Sampling</option>
                </select>

                {/* Reset Filters Button */}
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="career-reset-btn"
                  >
                    <RotateCcw size={13} /> Reset Filters
                  </button>
                )}
              </div>

              {/* Live Count Indicator */}
              <div className="text-xs text-slate-500 font-medium">
                Showing <strong className="text-teal">{filteredJobs.length}</strong> available positions
              </div>
            </div>
          </div>

          {/* Job Listings Grid */}
          {paginatedJobs.length > 0 ? (
            <>
              <div className="career-jobs-grid">
                {paginatedJobs.map((job) => (
                  <article key={job.id} className="career-luxury-card group">
                    <div className="career-card-top-accent" />

                    {/* Top Row: Department Badge + Hiring Status (No Ref Number) */}
                    <div className="career-card-header">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="career-dept-luxury-pill">
                          <FlaskConical size={12} className="text-teal" />
                          <span>{job.department}</span>
                        </span>
                        <span className="career-type-subtle-badge">
                          {job.type}
                        </span>
                      </div>
                      <span className="career-hiring-now-pill">
                        <span className="career-live-dot" /> Actively Interviewing
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="career-card-title-wrap">
                      <Link to={job.path} className="career-card-title-link">
                        <span>{job.title}</span>
                        <ArrowUpRight size={18} className="career-title-arrow" />
                      </Link>
                    </h3>

                    {/* Key Specs Pills */}
                    <div className="career-specs-grid">
                      <div className="career-spec-item">
                        <MapPin size={13} className="text-teal flex-shrink-0" />
                        <span>{job.location}</span>
                      </div>
                      <div className="career-spec-item">
                        <Clock size={13} className="text-teal flex-shrink-0" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="career-spec-item">
                        <GraduationCap size={13} className="text-teal flex-shrink-0" />
                        <span>{job.education}</span>
                      </div>
                      <div className="career-spec-item career-salary-highlight">
                        <IndianRupee size={13} className="text-emerald-600 flex-shrink-0" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="career-luxury-summary">
                      {job.summary}
                    </p>

                    {/* Key Technical Skills */}
                    <div className="career-card-skills-row">
                      {job.keySkills.slice(0, 4).map((skill, sIdx) => (
                        <span key={sIdx} className="career-luxury-skill-tag">
                          {skill}
                        </span>
                      ))}
                      {job.keySkills.length > 4 && (
                        <span className="career-luxury-skill-more">
                          +{job.keySkills.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Card Footer: Immediate Joining + Action Buttons */}
                    <div className="career-luxury-footer">
                      <div className="career-posting-status">
                        <CheckCircle2 size={13} className="text-brand-green flex-shrink-0" />
                        <span>Immediate Joining · Visakhapatnam</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={`https://wa.me/918247442084?text=Hello%20Certigo%20HR%2C%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(job.title)}%20role.`}
                          target="_blank"
                          rel="noreferrer"
                          className="career-quick-wa-btn"
                          title="Quick inquiry on WhatsApp"
                          aria-label={`Inquire about ${job.title} on WhatsApp`}
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                        </a>

                        <Button asChild size="sm" className="career-apply-action-btn">
                          <Link to={job.path}>
                            <span>View Role &amp; Apply</span>
                            <ArrowRight size={14} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Professional Pagination Controls */}
              {totalPages > 1 && (
                <div className="career-pagination-wrap mt-10">
                  <div className="career-pagination-info">
                    Showing <strong className="text-primary">{startIndex + 1}–{Math.min(startIndex + jobsPerPage, filteredJobs.length)}</strong> of <strong className="text-primary">{filteredJobs.length}</strong> positions
                  </div>

                  <div className="career-pagination-controls">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentPage((prev) => Math.max(prev - 1, 1));
                        document.getElementById("openings-section")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      disabled={currentPage === 1}
                      className="career-page-nav-btn"
                      aria-label="Previous Page"
                    >
                      <ChevronLeft size={16} />
                      <span className="hidden sm:inline">Previous</span>
                    </button>

                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: totalPages }, (_, idx) => {
                        const pageNum = idx + 1;
                        const isCurrent = pageNum === currentPage;
                        return (
                          <button
                            key={pageNum}
                            type="button"
                            onClick={() => {
                              setCurrentPage(pageNum);
                              document.getElementById("openings-section")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={`career-page-num-btn ${isCurrent ? "is-active" : ""}`}
                            aria-current={isCurrent ? "page" : undefined}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                        document.getElementById("openings-section")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      disabled={currentPage === totalPages}
                      className="career-page-nav-btn"
                      aria-label="Next Page"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Empty State */
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center max-w-lg mx-auto shadow-xs">
              <Search size={36} className="text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-primary mb-1">No positions match your criteria</h3>
              <p className="text-xs text-muted-foreground mb-4">
                We couldn't find any job openings matching your current keyword or filters.
              </p>
              <Button onClick={resetFilters} variant="outline" size="sm" className="border-teal text-teal">
                <RotateCcw size={14} className="mr-1.5" /> Clear Search &amp; Show All Roles
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
