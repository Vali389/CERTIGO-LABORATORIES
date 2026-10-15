import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Phone, Mail, MapPin, ArrowUpRight, ArrowRight, 
  ShieldCheck, FileText, Building2, Clock, CheckCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading, EnquiryBand, WhatsAppIcon } from "@/components/site";
import { contact, pageHead } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => pageHead(
    "Contact Us | Certigo Laboratories Private Limited", 
    "Contact Certigo Laboratories in Visakhapatnam by phone (+91 82474 42084), email (certigolabs@gmail.com) or WhatsApp for testing and student programme enquiries."
  ),
  component: Contact
});

function Contact() {
  return (
    <>
      <PageHero 
        title="Let's Start a Conversation" 
        eyebrow="CONTACT CERTIGO LABORATORIES" 
        description="A testing enquiry, a student opportunity, or facility consultation. We welcome you to connect with our scientific and administrative team in Visakhapatnam." 
      />

      {/* MAIN CONTACT INFORMATION & INTERACTIVE MAP */}
      <section className="section gradient-section-mesh">
        <div className="site-container">
          <SectionHeading 
            eyebrow="GET IN TOUCH" 
            title="We're Here for Your Next Step" 
            description="Reach out directly for sample testing quotations, parameter selection guidance, sample preservation protocols, or student internships."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
            {/* Left Column: Contact Cards & Official Legal Identifiers */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Direct Channels */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-xs flex flex-col gap-5">
                <h3 className="text-xl font-bold text-primary mb-1">Direct Contacts</h3>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-teal/15 text-teal flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Telephone &amp; Mobile</h4>
                    <p className="text-sm font-semibold text-foreground mb-0.5">
                      <a href={contact.phoneHref} className="hover:text-teal transition-colors">{contact.phone}</a>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Landline: <a href="tel:08914568391" className="hover:text-teal transition-colors">{contact.landline}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-brand-green/15 text-brand-green flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Official Email</h4>
                    <p className="text-sm font-semibold text-foreground mb-0.5">
                      <a href={`mailto:${contact.email}`} className="hover:text-teal transition-colors">{contact.email}</a>
                    </p>
                    <p className="text-xs text-muted-foreground">Prompt responses for quotations and scope verification</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">WhatsApp Fast Support</h4>
                    <a 
                      href="https://wa.me/918247442084?text=Hello%20Certigo%2C%20I%20have%20a%20testing%20enquiry." 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:underline"
                    >
                      Chat on WhatsApp (+91 82474 42084) <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Laboratory Facility</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {contact.address}
                    </p>
                    <p className="text-[11px] text-teal font-medium mt-1">
                      Visiting hours: Mon – Sat, 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Official Corporate Registration & Accreditations (From Business Card) */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck size={20} className="text-brand-green" />
                  <h3 className="text-base font-bold text-primary mb-0">Official Registrations</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-border/60">
                    <span className="text-muted-foreground font-medium">GSTIN</span>
                    <span className="font-mono font-bold text-foreground bg-secondary px-2 py-0.5 rounded">{contact.gstin}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-border/60">
                    <span className="text-muted-foreground font-medium">CIN</span>
                    <span className="font-mono font-bold text-foreground bg-secondary px-2 py-0.5 rounded">{contact.cin}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-border/60">
                    <span className="text-muted-foreground font-medium">NABL Accreditation</span>
                    <span className="font-mono font-bold text-teal bg-teal/10 px-2 py-0.5 rounded">{contact.nablNumber}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground font-medium">Standard Compliance</span>
                    <span className="font-semibold text-foreground">{contact.isoStandard}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Real Interactive Google Map */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md">
                <div className="p-4 bg-secondary/50 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-teal" />
                    <span className="font-bold text-primary text-sm">Visakhapatnam Laboratory Location</span>
                  </div>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal hover:underline"
                  >
                    Open in Maps <ArrowUpRight size={13} />
                  </a>
                </div>

                {/* Embedded Responsive Google Map */}
                <div className="relative w-full h-[440px] bg-muted">
                  <iframe 
                    title="Certigo Laboratories Visakhapatnam Facility Map" 
                    src="https://maps.google.com/maps?q=Saligramapuram,+Visakhapatnam,+Andhra+Pradesh+530024&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    className="absolute inset-0 w-full h-full border-0" 
                    loading="lazy" 
                    allowFullScreen 
                  />
                </div>

                <div className="p-5 bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-primary text-sm mb-0.5">Certigo Laboratories Pvt. Ltd.</h4>
                    <p className="text-xs text-muted-foreground mb-0">Beside Port Stadium, Vidyut Nagar, Saligramapuram, Visakhapatnam</p>
                  </div>
                  <Button asChild size="sm" className="bg-teal hover:bg-teal/90 text-white flex-shrink-0">
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Get Driving Directions <ArrowUpRight size={14} />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Quick Prompt Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-5 rounded-xl border border-border bg-card shadow-xs">
                  <h4 className="font-bold text-primary text-sm mb-1">Commercial Testing Services</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Prepare your sample details (Food, Water, Effluents, Air) and request a tailored quotation.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/quote">Request a Testing Quote <ArrowRight size={13} /></Link>
                  </Button>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card shadow-xs">
                  <h4 className="font-bold text-primary text-sm mb-1">Student &amp; Academic Inquiries</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Explore short-term/long-term internships and BSc/MSc dissertation support.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/apply">Apply for a Programme <ArrowRight size={13} /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH IMAGE CTA BANNER */}
      <EnquiryBand />
    </>
  );
}
