import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  GraduationCap, ShieldCheck, Award, FileCheck2, 
  Phone, Mail, ArrowUpRight, CheckCircle2, Building2, 
  HelpCircle, Sparkles, BookOpen, Clock 
} from "lucide-react";
import { PageHero, SectionHeading, EnquiryBand, WhatsAppIcon } from "@/components/site";
import { EnquiryForm } from "@/components/enquiry-form";
import { pageHead, contact } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/apply")({
  head: () => pageHead(
    "Student Programme Application | Certigo Laboratories Private Limited", 
    "Apply for short-term and long-term internships or BSc/MSc academic projects at Certigo Laboratories' NABL accredited testing facility in Visakhapatnam."
  ),
  component: Apply
});

function Apply() {
  return (
    <>
      <PageHero 
        title="Student Internship & Academic Projects" 
        eyebrow="ACADEMIC DEVELOPMENT PROGRAMMES" 
        description="Bridge classroom theory with real-world laboratory science. Gain hands-on exposure to NABL accredited analytical workflows, standard operating procedures, and calibrated instrumentation in Visakhapatnam." 
      />

      <section className="section gradient-section-mesh">
        <div className="site-container">
          {/* Key Academic Statistics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: ShieldCheck, title: "NABL Compliant", desc: "ISO/IEC 17025:2017 SOPs", color: "text-brand-green" },
              { icon: BookOpen, title: "3 Disciplines", desc: "Food, Water & Microbiology", color: "text-teal" },
              { icon: Award, title: "Certified Completion", desc: "Recognized project certificates", color: "text-primary" },
              { icon: Clock, title: "Flexible Durations", desc: "15 Days to 6 Months", color: "text-teal" }
            ].map((stat) => (
              <div key={stat.title} className="bg-card border border-border rounded-xl p-4 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <stat.icon size={20} className={stat.color} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary mb-0.5">{stat.title}</h4>
                  <p className="text-[11px] text-muted-foreground mb-0">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Form Area: 8 Columns */}
            <div className="lg:col-span-8">
              <EnquiryForm student />
            </div>

            {/* Sidebar Guide & Support: 4 Columns */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              {/* Direct Academic Contact Hotline */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap size={22} className="text-teal" />
                  <h3 className="text-base font-bold text-primary mb-0">Academic Office Contact</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Have questions about slot availability, university letter formats, or fee structures? Connect directly with our training coordinators.
                </p>

                <div className="space-y-3 text-xs mb-5">
                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-teal flex-shrink-0" />
                    <span><strong className="text-primary font-medium">Hotline:</strong> {contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail size={15} className="text-teal flex-shrink-0" />
                    <span><strong className="text-primary font-medium">Email:</strong> {contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Building2 size={15} className="text-teal flex-shrink-0" />
                    <span>Visakhapatnam Centre (Beside Port Stadium)</span>
                  </div>
                </div>

                <Button asChild size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                  <a 
                    href="https://wa.me/918247442084?text=Hello%20Certigo%20Academic%20Team%2C%20I%20have%20an%20enquiry%20regarding%20internships%20and%20academic%20projects." 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> Chat with Coordinator on WhatsApp
                  </a>
                </Button>
              </div>

              {/* What You Gain */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={18} className="text-brand-green" />
                  <h3 className="text-base font-bold text-primary mb-0">What You Receive</h3>
                </div>
                <ul className="space-y-2.5 text-xs text-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Hands-on practice on analytical instruments &amp; media prep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Training on NABL ISO/IEC 17025:2017 compliant SOPs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Structured data sets for your final year dissertation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Official certificate of completion with evaluation marks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mentorship by senior chemists and microbiologists</span>
                  </li>
                </ul>
              </div>

              {/* Eligible Life Science Disciplines */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Eligible Degree Disciplines</h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Biotechnology", "Microbiology", "Food Technology", 
                    "Chemistry", "Analytical Chemistry", "Biochemistry", 
                    "Environmental Science", "Life Sciences", "B.Pharmacy"
                  ].map((field) => (
                    <span key={field} className="text-[11px] bg-secondary text-primary font-medium px-2.5 py-1 rounded-md">
                      {field}
                    </span>
                  ))}
                </div>
              </div>

              {/* Policy & Important Note */}
              <div className="p-4 rounded-xl border border-teal/30 bg-teal/5 text-xs text-muted-foreground leading-relaxed">
                <strong className="text-primary block font-semibold mb-1">Academic Policy Notice:</strong>
                Eligibility, slot availability, supervision schedule, and certification requirements are subject to review by the Certigo Academic Board. College NOC / permission letter is required upon confirmation.
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Full width CTA banner */}
      <EnquiryBand />
    </>
  );
}
