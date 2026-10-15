import { Apple, Droplets, Microscope, GraduationCap, BookOpen, FlaskConical } from "lucide-react";
import labImage from "@/assets/laboratory-hero.jpg";
import foodImage from "@/assets/food-testing.jpg";
import researchImage from "@/assets/research-lab.jpg";
import cellsImage from "@/assets/microscope-study.jpg";
import learningImage from "@/assets/laboratory-research.jpg";

export { researchImage, cellsImage, learningImage };
export function openingImage(path: string) {
  if (path.includes("microbiological")) return cellsImage;
  if (path.includes("food")) return foodImage;
  if (path.includes("water") || path === "/quote" || path === "/contact") return researchImage;
  if (path.includes("academic") || path === "/apply" || path === "/about") return learningImage;
  if (path.includes("long-term")) return researchImage;
  if (path.includes("programmes")) return learningImage;
  if (path === "/privacy") return researchImage;
  return labImage;
}

export { labImage, foodImage };
export const contact = {
  phone: "+91 82474 42084",
  phoneHref: "tel:+918247442084",
  landline: "0891-4568391",
  email: "certigolabs@gmail.com",
  address: "D.No. 49-55-19/A, Saligramapuram, Vidyut Nagar, Beside Port Stadium, Visakhapatnam, Andhra Pradesh – 530024",
};
export const services = [
  { slug: "food-testing", path: "/services/food-testing" as const, title: "Food Testing", icon: Apple, label: "FOOD QUALITY & SAFETY", intro: "Clarity about the food you produce, serve, and share.", description: "Explore laboratory testing for your food samples. Our team can help you identify an appropriate testing scope, understand sample requirements, and plan your next steps.", image: foodImage, areas: ["Food sample enquiries", "Quality assessment requirements", "Microbiological testing enquiries", "Sample submission guidance"], audience: "Food producers, processors, hospitality businesses, and organisations seeking food sample analysis.", note: "Tell us what the product is, how it is used, and which parameters you need. The laboratory will confirm accepted sample categories and available tests before you submit a sample." },
  { slug: "water-testing", path: "/services/water-testing" as const, title: "Water Testing", icon: Droplets, label: "WATER QUALITY ANALYSIS", intro: "Understand your water. Make informed decisions.", description: "Discuss water analysis for your intended use. From identifying your testing needs to clarifying collection requirements, start with a conversation about your sample.", image: labImage, areas: ["Water sample enquiries", "Parameters for your intended use", "Container and collection guidance", "Food and water microbiology enquiries"], audience: "Businesses, institutions, and individuals with water quality testing requirements.", note: "Share the water source and intended use. Accepted water types, test parameters, containers, preservation, and transport requirements must be confirmed by the laboratory." },
  { slug: "microbiological-testing", path: "/services/microbiological-testing" as const, title: "Microbiological Testing", icon: Microscope, label: "A CLOSER LOOK AT YOUR SAMPLES", intro: "Small details. Meaningful insights.", description: "Enquire about microbiological analysis for food, water, and other sample requirements. The laboratory will review your sample and confirm the testing scope it can support.", image: foodImage, areas: ["Food microbiology enquiries", "Water microbiology enquiries", "Testing scope discussions", "Sample handling guidance"], audience: "Food and water businesses and organisations seeking microbiological sample analysis.", note: "Microbiological analysis can form part of food or water testing. The laboratory will confirm organisms, methods, sample acceptance criteria, and available parameters for your enquiry." },
];
export const programmes = [
  { slug: "short-term-internships", path: "/programmes/short-term-internships" as const, title: "Short-term Internships", icon: GraduationCap, tag: "EXPLORE & LEARN", intro: "Your first step from classroom to laboratory.", description: "Enquire about a focused introduction to laboratory work. Discuss your learning goals, academic background, and available dates with the student programmes team.", points: ["An introduction to laboratory environments", "Learning goals tailored to your enquiry", "Discussion of practical exposure", "Guidance on the application process"], focus: "Build familiarity with laboratory work and connect classroom learning with practical questions." },
  { slug: "long-term-internships", path: "/programmes/long-term-internships" as const, title: "Long-term Internships", icon: FlaskConical, tag: "DEEPEN YOUR EXPERIENCE", intro: "More time to explore. More room to grow.", description: "Discuss an extended learning opportunity aligned with your academic interests. Availability, supervision, attendance, and learning activities are agreed with the laboratory.", points: ["A conversation about extended learning goals", "Areas of interest and practical exposure", "Supervision and attendance discussions", "Programme availability and application guidance"], focus: "Explore a longer period of laboratory learning, subject to the team's capacity and your academic requirements." },
  { slug: "academic-projects", path: "/programmes/academic-projects" as const, title: "BSc / MSc Academic Projects", icon: BookOpen, tag: "TURN CURIOSITY INTO DISCOVERY", intro: "Bring your academic ideas to the next level.", description: "Enquire about laboratory support for your BSc or MSc project. Share your proposed topic, university requirements, and expected deliverables to discuss suitability.", points: ["Discussion of proposed project topics", "Review of university requirements", "Scope, supervision, and deliverables", "Availability and project enquiry guidance"], focus: "Find out whether your proposed academic project can be supported within the laboratory's available scope." },
];
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Certigo Laboratories` }, { name: "description", content: description }, { property: "og:title", content: `${title} | Certigo Laboratories` }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
}