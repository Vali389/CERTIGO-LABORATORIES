import { Apple, Droplets, Microscope, GraduationCap, BookOpen, FlaskConical, Wind, Leaf } from "lucide-react";
import labImage from "@/assets/hero-certigo-lab.jpg";
import foodImage from "@/assets/service-food-testing.jpg";
import waterImage from "@/assets/service-water-testing.jpg";
import microImage from "@/assets/service-microbiology-testing.jpg";
import chemImage from "@/assets/service-chemical-testing.jpg";
import envImage from "@/assets/service-environmental-testing.jpg";
import airImage from "@/assets/service-air-quality-testing.jpg";
import researchImage from "@/assets/research-lab.jpg";
import cellsImage from "@/assets/microscope-study.jpg";
import learningImage from "@/assets/laboratory-research.jpg";

export { researchImage, cellsImage, learningImage, labImage, foodImage, waterImage, microImage, chemImage, envImage, airImage };

export function openingImage(path: string) {
  if (path.includes("chemical")) return chemImage;
  if (path.includes("environmental")) return envImage;
  if (path.includes("air-quality")) return airImage;
  if (path.includes("microbiological")) return microImage;
  if (path.includes("food")) return foodImage;
  if (path.includes("water")) return waterImage;
  if (path.includes("academic") || path === "/apply" || path === "/about") return learningImage;
  if (path.includes("long-term")) return researchImage;
  if (path.includes("programmes")) return learningImage;
  if (path === "/privacy") return researchImage;
  return labImage;
}

export const contact = {
  companyName: "Certigo Laboratories Private Limited",
  tagline: "Reliable Testing. Accurate Results. Trusted Quality.",
  nablNumber: "NABLT0626AD18278",
  phone: "+91 82474 42084",
  phoneHref: "tel:+918247442084",
  landline: "0891-4568391",
  email: "certigolabs@gmail.com",
  address: "49-55-19/A, Saligramapuram, Vidyut Nagar, Beside Port Stadium, Visakhapatnam – 530024, Andhra Pradesh, India",
};

export const services = [
  {
    slug: "food-testing",
    path: "/services/food-testing" as const,
    title: "Food Testing",
    icon: Apple,
    label: "FOOD QUALITY & SAFETY",
    intro: "Comprehensive testing for quality, nutrition, and food safety standards.",
    description: "Accurate analysis for dairy products, spices, meat, bakery items, ready-to-eat foods, beverages, cereals, and packaged goods under established regulatory methods.",
    image: foodImage,
    tags: ["Dairy & Milk", "Spices & Produce", "Bakery & Cereals", "Beverages", "Ready-to-Eat"],
    areas: [
      "Dairy and milk products quality testing",
      "Spices, condiments, fruits and vegetables",
      "Meat, poultry and meat-derived products",
      "Cereals, pulses and bakery products",
      "Ready-to-eat and processed food products",
      "Beverages, juices and packaged foods",
      "Nutritional labeling and proximate analysis",
      "Chemical contaminants and adulteration screening"
    ],
    audience: "Food processing industries, dairy units, hotels, restaurants, catering businesses, and packaged food manufacturers.",
    note: "Testing includes chemical, microbiological, and quality parameters following FSSAI, BIS/IS, and AOAC standard methods."
  },
  {
    slug: "water-testing",
    path: "/services/water-testing" as const,
    title: "Water Testing",
    icon: Droplets,
    label: "WATER QUALITY ANALYSIS",
    intro: "Physical, chemical, and microbiological testing for all water sources.",
    description: "Reliable testing for drinking water, packaged RO water, borewell sources, industrial process water, surface water, and wastewater effluents.",
    image: waterImage,
    tags: ["Drinking Water", "RO / Packaged", "Borewell", "Wastewater", "Industrial"],
    areas: [
      "Physical parameters (Colour, Odour, Turbidity, pH, Electrical Conductivity, TDS)",
      "Chemical parameters (Total Hardness, Calcium, Magnesium, Chloride, Sulphate, Fluoride)",
      "Nutrients and Inorganics (Nitrate, Ammonia, Alkalinity, Silica, Sodium, Potassium)",
      "Heavy metals and trace elements (Iron, Manganese, Lead, Chromium)",
      "Microbiological examinations (Total Plate Count, Total Coliforms, E. coli)",
      "Wastewater and drainage effluent testing (BOD, COD, TSS, Oil & Grease)"
    ],
    audience: "Packaged drinking water plants, RO water suppliers, hotels, residential communities, industries, and water treatment facilities.",
    note: "Analysis follows BIS / IS (IS 10500, IS 14543), APHA Standard Methods, and CPCB regulatory requirements."
  },
  {
    slug: "microbiological-testing",
    path: "/services/microbiological-testing" as const,
    title: "Microbiological Testing",
    icon: Microscope,
    label: "PATHOGEN & MICROBIAL DETECTION",
    intro: "Accurate identification of microbial counts, pathogens, and hygiene markers.",
    description: "Standardized microbiological examinations for food products, water samples, surfaces, and environmental swabs to ensure safety and hygiene compliance.",
    image: microImage,
    tags: ["Total Plate Count", "Coliforms & E. coli", "Salmonella", "Yeast & Mould", "Pathogens"],
    areas: [
      "Total Plate Count (TPC / TVC) enumeration",
      "Total Coliforms and Faecal Coliforms",
      "Escherichia coli (E. coli) detection",
      "Enterobacteriaceae enumeration",
      "Yeast and Mould count",
      "Staphylococcus aureus detection",
      "Salmonella and Vibrio species identification",
      "Surface swab and hygiene monitoring"
    ],
    audience: "Food processors, water bottling plants, pharmaceutical facilities, hospitality kitchens, and hospitals.",
    note: "Examinations are carried out in sterile biosafety cabinets using validated standard culture methods and ISO/IS protocols."
  },
  {
    slug: "chemical-testing",
    path: "/services/chemical-testing" as const,
    title: "Chemical Testing",
    icon: FlaskConical,
    label: "ANALYTICAL CHEMISTRY & ASSAYS",
    intro: "Precise chemical characterization, purity assays, and trace analysis.",
    description: "Accurate determination of chemical constituents, active ingredients, heavy metals, acidity, ash values, and proximate analysis for industrial and commercial goods.",
    image: chemImage,
    tags: ["Purity Assays", "Heavy Metals", "Nutritional Chemistry", "Titration & pH", "Trace Elements"],
    areas: [
      "Proximate analysis (Moisture, Ash, Crude Protein, Fat, Crude Fibre)",
      "Heavy metals and toxic element screening (Pb, Cd, As, Hg)",
      "Acid value, peroxide value, and free fatty acid testing",
      "Purity assays and active ingredient concentration",
      "Raw materials, solvents, and chemical quality verification",
      "UV-Vis spectrophotometry and analytical determinations"
    ],
    audience: "Manufacturing industries, chemical processors, pharmaceutical allied industries, research laboratories, and institutions.",
    note: "Testing is performed using calibrated analytical balances, spectrophotometers, and recognized BIS/ISO/AOAC standards."
  },
  {
    slug: "environmental-testing",
    path: "/services/environmental-testing" as const,
    title: "Environmental Testing",
    icon: Leaf,
    label: "ENVIRONMENTAL MONITORING & COMPLIANCE",
    intro: "Monitoring industrial effluents, soil, sludge, and environmental pollution.",
    description: "Comprehensive environmental testing supporting manufacturing units, construction projects, and commercial facilities in regulatory compliance.",
    image: envImage,
    tags: ["Industrial Effluents", "Soil Analysis", "BOD & COD", "Hazardous Waste", "Pollution Control"],
    areas: [
      "Industrial wastewater and treated sewage effluent monitoring",
      "BOD, COD, Total Suspended Solids (TSS), and Oil & Grease",
      "Soil fertility, heavy metal contamination, and soil chemistry",
      "Hazardous waste and industrial sludge characterization",
      "Pollution control board (CPCB / SPCB) regulatory compliance testing",
      "Periodic environmental monitoring programs for industries"
    ],
    audience: "Manufacturing industries, construction projects, commercial establishments, hospitals, and industrial parks.",
    note: "Testing is conducted with reference to CPCB, MoEFCC, and State Pollution Control Board guidelines."
  },
  {
    slug: "air-quality-testing",
    path: "/services/air-quality-testing" as const,
    title: "Air Quality Testing",
    icon: Wind,
    label: "AMBIENT & EMISSION MONITORING",
    intro: "Ambient air monitoring, stack emission testing, and indoor air assessments.",
    description: "Specialized monitoring of particulate matter (PM10, PM2.5), gaseous pollutants (SO2, NOx, CO), and stack velocity parameters for compliance.",
    image: airImage,
    tags: ["PM10 & PM2.5", "Stack Emissions", "SO₂ & NO₂", "CO & Ozone", "Indoor Air Quality"],
    areas: [
      "Ambient Air Quality Testing (PM10, PM2.5, SO2, NO2, CO, O3, NH3, Pb)",
      "Stack / Industrial Emission Testing (Particulate matter, Velocity, Flow rate)",
      "Combustion flue gas analysis (SO2, NOx, CO, CO2, O2, Stack temperature)",
      "Indoor Air Quality Testing (Temperature, Relative Humidity, CO, PM)",
      "Industrial perimeter and workplace air monitoring",
      "Regulatory emission compliance verification and reporting"
    ],
    audience: "Industrial manufacturing plants, commercial facilities, hospitals, educational institutions, and residential buildings.",
    note: "Monitoring utilizes calibrated high-volume samplers, flue gas analyzers, and CPCB-approved monitoring protocols."
  }
];

export const programmes = [
  {
    slug: "short-term-internships",
    path: "/programmes/short-term-internships" as const,
    title: "Short-term Internships",
    icon: GraduationCap,
    tag: "EXPLORE & LEARN",
    intro: "Your first step from classroom to laboratory.",
    description: "Enquire about a focused introduction to laboratory work. Discuss your learning goals, academic background, and available dates with the student programmes team.",
    points: [
      "An introduction to professional laboratory environments",
      "Hands-on exposure to standard testing procedures",
      "Learning goals tailored to food, water, or microbiology",
      "Guidance on the application process and dates"
    ],
    focus: "Build familiarity with laboratory work and connect classroom learning with practical questions."
  },
  {
    slug: "long-term-internships",
    path: "/programmes/long-term-internships" as const,
    title: "Long-term Internships",
    icon: FlaskConical,
    tag: "DEEPEN YOUR EXPERIENCE",
    intro: "More time to explore. More room to grow.",
    description: "Discuss an extended learning opportunity aligned with your academic interests. Availability, supervision, attendance, and learning activities are agreed with the laboratory.",
    points: [
      "An extended programme of hands-on laboratory learning",
      "In-depth exposure to instrumentation and analytical methods",
      "Supervised work under qualified laboratory personnel",
      "Customized schedules aligned with college semesters"
    ],
    focus: "Explore a longer period of laboratory learning, subject to the team's capacity and your academic requirements."
  },
  {
    slug: "academic-projects",
    path: "/programmes/academic-projects" as const,
    title: "BSc / MSc Academic Projects",
    icon: BookOpen,
    tag: "TURN CURIOSITY INTO DISCOVERY",
    intro: "Bring your academic ideas to the next level.",
    description: "Enquire about laboratory support for your BSc or MSc project. Share your proposed topic, university requirements, and expected deliverables to discuss suitability.",
    points: [
      "Discussion of proposed academic project topics",
      "Access to standard testing facilities and guidance",
      "Review of university requirements and deliverables",
      "Preparation of data for academic dissertations"
    ],
    focus: "Find out whether your proposed academic project can be supported within the laboratory's available scope."
  }
];

export const whyChoosePoints = [
  {
    title: "Accuracy",
    desc: "We focus on generating dependable and technically sound test results using validated standard methods.",
    icon: "Target"
  },
  {
    title: "Reliability",
    desc: "We follow systematic laboratory procedures, internal quality checks, and rigorous quality-control practices.",
    icon: "ShieldCheck"
  },
  {
    title: "Timely Service",
    desc: "We understand the importance of timely testing and reporting for your production and regulatory schedules.",
    icon: "Clock"
  },
  {
    title: "Technical Expertise",
    desc: "Our laboratory personnel follow established testing procedures, standard operating protocols, and calibration.",
    icon: "Award"
  },
  {
    title: "Customer Support",
    desc: "We work closely with customers to understand their testing requirements and provide appropriate testing solutions.",
    icon: "MessagesSquare"
  },
  {
    title: "Confidentiality",
    desc: "Customer information, sample data, and test results are handled with the highest standards of confidentiality.",
    icon: "Lock"
  },
  {
    title: "Comprehensive Scope",
    desc: "Integrated testing under one roof across Food, Water, Microbiology, Chemical, Environmental, and Air Quality.",
    icon: "Layers"
  }
];

export const industriesServed = [
  "Food Processing Industries",
  "Dairy & Milk Processing Plants",
  "Beverage & Juice Bottling Plants",
  "Packaged Drinking Water Plants",
  "RO Water Suppliers & Facilities",
  "Hotels, Resorts & Restaurants",
  "Commercial Catering & Canteens",
  "Manufacturing & Industrial Units",
  "Pharmaceutical & Allied Units",
  "Hospitals & Healthcare Facilities",
  "Educational & Research Institutions",
  "Apartments & Residential Communities",
  "Construction & Infrastructure Projects",
  "Government & Private Organizations"
];

export const standardsList = [
  { name: "BIS / IS Standards", desc: "Bureau of Indian Standards specifications for food, drinking water (IS 10500), and products." },
  { name: "FSSAI Methods", desc: "Food Safety and Standards Authority of India regulatory parameters and sampling methods." },
  { name: "APHA / Standard Methods", desc: "Standard Methods for the Examination of Water and Wastewater analysis." },
  { name: "ISO Standards", desc: "International Organization for Standardization procedures and quality system guidelines." },
  { name: "AOAC Methods", desc: "Association of Official Analytical Chemists validated methods for food and agricultural samples." },
  { name: "CPCB & MoEFCC", desc: "Central Pollution Control Board and Ministry of Environment guidelines for emissions and effluent." }
];

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Certigo Laboratories` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Certigo Laboratories` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  };
}