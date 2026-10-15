import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode } from "react";
import { 
  ArrowUpRight, ArrowRight, ArrowUp, Phone, Mail, MapPin, 
  Menu, X, ChevronDown, FlaskConical 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, services, programmes, labImage, openingImage } from "@/lib/site-data";
import logo from "@/assets/certigo-logo.png";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.204 8.204 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.212 8.212 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.29" />
    </svg>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 260);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="topbar">
        <div className="site-container flex items-center justify-between gap-4">
          <span className="flex items-center gap-2">
            <MapPin size={13} /> Visakhapatnam, Andhra Pradesh
          </span>
          <div className="flex items-center gap-6">
            <a href={`mailto:${contact.email}`} className="hidden sm:flex items-center gap-2">
              <Mail size={13} />{contact.email}
            </a>
            <a href={contact.phoneHref} className="flex items-center gap-2">
              <Phone size={13} />{contact.phone}
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container header-inner">
          <Link to="/" aria-label="Certigo Laboratories home" onClick={() => setOpen(false)}>
            <img className="site-logo" src={logo} width={470} height={154} alt="Certigo Laboratories" />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link to="/" className={pathname === "/" ? "nav-active" : ""}>Home</Link>
            <SiteDropdown label="Services" active={pathname.startsWith("/services")} student={false} />
            <SiteDropdown label="Student Programmes" active={pathname.startsWith("/programmes")} student />
            <Link to="/about" className={pathname === "/about" ? "nav-active" : ""}>About Us</Link>
            <Link to="/contact" className={pathname === "/contact" ? "nav-active" : ""}>Contact</Link>
          </nav>
          <div className="header-actions">
            <Link to="/apply" className="apply-link">
              Apply for a Programme <ArrowUpRight size={14} />
            </Link>
            <Button asChild className="quote-button">
              <Link to="/quote">
                Request a Quote <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <Button 
            className="mobile-menu-button" 
            variant="ghost" 
            size="icon" 
            onClick={() => setOpen(!open)} 
            aria-label={open ? "Close navigation" : "Open navigation"} 
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        {open && (
          <nav className="mobile-nav site-container" aria-label="Mobile navigation">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Testing Services</Link>
            {services.map(s => (
              <Link className="sub-link" key={s.slug} to={s.path} onClick={() => setOpen(false)}>
                {s.title}
              </Link>
            ))}
            <Link to="/programmes" onClick={() => setOpen(false)}>Student Programmes</Link>
            {programmes.map(p => (
              <Link className="sub-link" key={p.slug} to={p.path} onClick={() => setOpen(false)}>
                {p.title}
              </Link>
            ))}
            <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <div className="flex gap-3 pb-4">
              <Button asChild><Link to="/quote" onClick={() => setOpen(false)}>Request a Quote</Link></Button>
              <Button asChild variant="outline"><Link to="/apply" onClick={() => setOpen(false)}>Apply</Link></Button>
            </div>
          </nav>
        )}
      </header>

      <main><RevealPage key={pathname}>{children}</RevealPage></main>

      <footer className="site-footer">
        <div className="site-container footer-grid">
          <div>
            <Link to="/" className="footer-brand">
              <img src={logo} width={470} height={154} alt="Certigo Laboratories Pvt Ltd." />
            </Link>
            <p>Quality testing for a healthier tomorrow.<br />A place for curiosity. A partner in clarity.</p>
            <div className="footer-tagline">ACCURATE <span>·</span> RELIABLE <span>·</span> TRUSTED</div>
          </div>
          <div>
            <h3>Testing services</h3>
            {services.map(s => <Link key={s.slug} to={s.path}>{s.title}</Link>)}
            <Link to="/quote">Request a Quote</Link>
          </div>
          <div>
            <h3>Student programmes</h3>
            {programmes.map(p => <Link key={p.slug} to={p.path}>{p.title}</Link>)}
            <Link to="/apply">Apply for a Programme</Link>
          </div>
          <div>
            <h3>Let's connect</h3>
            <a href={contact.phoneHref}><Phone size={15} />{contact.phone}</a>
            <a href={`mailto:${contact.email}`}><Mail size={15} />{contact.email}</a>
            <p className="footer-address"><MapPin size={17} />{contact.address}</p>
          </div>
        </div>
        <div className="site-container footer-bottom">
          <span>© {new Date().getFullYear()} Certigo Laboratories Pvt Ltd.</span>
          <div>
            <Link to="/about">About Us</Link>
            <Link to="/privacy">Privacy Notice</Link>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons: Scroll to Top and WhatsApp (Matching User Reference Image 2) */}
      <div className="floating-actions-container" aria-label="Quick actions">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="scroll-to-top-btn"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp size={22} className="stroke-[2.5]" />
          </button>
        )}
        <a 
          className="floating-whatsapp-btn" 
          href="https://wa.me/918247442084?text=Hello%20Certigo%2C%20I%20have%20a%20testing%20enquiry." 
          target="_blank" 
          rel="noreferrer" 
          aria-label="Chat with Certigo on WhatsApp" 
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </a>
      </div>
    </>
  );
}

export function PageHero({ title, eyebrow, description, image, children }: { title: string; eyebrow: string; description: string; image?: string; children?: ReactNode }) {
  const pathname = useRouterState({ select: s => s.location.pathname });
  return (
    <section className="page-hero" data-page={pathname}>
      <img src={image ?? openingImage(pathname)} className="hero-photo" alt="Illustrative laboratory scene" width={1920} height={1024} />
      <div className="hero-wash" />
      <div className="site-container page-hero-content">
        <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>{title}</span></div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) { 
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  ); 
}

/* Full-Width Image CTA Section (Matching User Reference Image 1) */
export function EnquiryBand({
  title = "Big ideas deserve the right partner.",
  pill = "YOUR NEXT CHAPTER STARTS HERE",
  description = "Let's bring your vision to life with the right combination of people, process, and technology."
}: {
  title?: string;
  pill?: string;
  description?: string;
}) { 
  return (
    <section className="image-cta-section">
      <img 
        src={labImage} 
        alt="Certigo Laboratories advanced facility" 
        className="image-cta-bg" 
        width={1920} 
        height={800} 
        loading="lazy" 
      />
      <div className="image-cta-wash" />
      <div className="site-container image-cta-content">
        <div className="image-cta-pill">
          <span>{pill}</span>
        </div>
        <h2 className="image-cta-title">
          {title}
        </h2>
        <p className="image-cta-desc">
          {description}
        </p>
        <div className="image-cta-buttons">
          <Button asChild size="lg" className="image-cta-btn-primary">
            <Link to="/quote">
              Let's Start a Conversation <ArrowUpRight size={17} />
            </Link>
          </Button>
          <a 
            href="https://wa.me/918247442084?text=Hello%20Certigo%2C%20I%20would%20like%20to%20chat%20about%20a%20testing%20enquiry." 
            target="_blank" 
            rel="noreferrer" 
            className="image-cta-btn-whatsapp"
          >
            <WhatsAppIcon className="w-5 h-5 text-white" />
            <span>Quick WhatsApp Chat</span>
          </a>
        </div>
      </div>
      <div className="image-cta-border-bottom" />
    </section>
  ); 
}

export function Steps({ student = false }: { student?: boolean }) { 
  const items = student 
    ? [["Share your interests", "Tell us about your studies, goals, and preferred dates."], ["Discuss the opportunity", "The team reviews availability and programme suitability."], ["Confirm the details", "Agree the scope, schedule, and any applicable requirements."], ["Begin your journey", "Start after your place and programme details are confirmed."]] 
    : [["Start a conversation", "Share your sample type and testing requirements."], ["Confirm your scope", "Discuss tests, sample requirements, pricing, and timelines."], ["Submit your sample", "Follow the collection and transport guidance provided."], ["Testing & reporting", "Receive results according to the agreed testing scope."]]; 
  return (
    <div className="steps-grid">
      {items.map(([title, text], i) => (
        <div className="step" key={title}>
          <span className="step-number">0{i + 1}</span>
          <ArrowRight className="step-arrow" size={20} />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  ); 
}

function SiteDropdown({label, active, student}:{label:string;active:boolean;student:boolean}) {
  const items = student ? programmes : services;
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={`nav-menu-trigger border-0 outline-none shadow-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:shadow-none hover:bg-transparent ${active ? "nav-active" : ""}`}>
          {label}<ChevronDown size={14}/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="site-dropdown-content" align="start" sideOffset={18}>
        <DropdownMenuItem asChild>
          <Link to={student ? "/programmes" : "/services"}>
            All {student ? "student programmes" : "testing services"}<ArrowUpRight size={16}/>
          </Link>
        </DropdownMenuItem>
        {items.map(x => (
          <DropdownMenuItem key={x.slug} asChild>
            <Link to={x.path}>
              <x.icon size={19}/>{x.title}<ArrowUpRight className="ml-auto" size={14}/>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function RevealPage({children}:{children:ReactNode}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if(!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), {threshold: .08});
    node.querySelectorAll(".editorial-split,.section-heading,.programme-card,.step,.detail-main").forEach(el => {
      el.classList.add("reveal-section");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return <div ref={ref}>{children}</div>;
}
