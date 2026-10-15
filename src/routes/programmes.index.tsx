import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, EnquiryBand } from "@/components/site";
import { programmes, pageHead } from "@/lib/site-data";
export const Route = createFileRoute("/programmes/")({ head: () => pageHead("Student Programmes", "Explore short-term and long-term internships and BSc/MSc academic project enquiries at Certigo."), component: Programmes });
function Programmes(){return <><PageHero title="Student Programmes" eyebrow="YOUR CURIOSITY BELONGS HERE" description="Explore a new perspective on laboratory science through internship and academic project enquiries." /><section className="section student-section"><div className="site-container programme-grid">{programmes.map((p,i)=><article className="programme-card" key={p.slug}><div className="programme-top"><span className="programme-icon"><p.icon size={25} /></span><span className="programme-index">0{i+1}</span></div><span className="eyebrow">{p.tag}</span><h3>{p.title}</h3><p>{p.description}</p><Link className="text-link" to={p.path}>Explore programme <ArrowUpRight size={17} /></Link></article>)}</div></section><EnquiryBand /></>; }
