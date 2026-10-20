import { Apple, Droplets, Microscope, GraduationCap, BookOpen, FlaskConical, Wind, Leaf, Trees } from "lucide-react";
import labImage from "@/assets/hero-certigo-lab.jpg";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import foodImage from "@/assets/food-testing-new.png";
import waterImage from "@/assets/water-testing-new.png";
import microImage from "@/assets/microbiology-testing.png";
import chemImage from "@/assets/chemical-testing-new.png";
import envImage from "@/assets/environment-testing.png";
import airImage from "@/assets/air-testing.png";
import researchImage from "@/assets/editorial-science-lab.jpg";
import cellsImage from "@/assets/microscope-study.jpg";
import learningImage from "@/assets/laboratory-research.jpg";
import aboutImage from "@/assets/about-image.png";
import contactImage from "@/assets/contact-image.png";
import allProgrammesImage from "@/assets/All Student Programmes.png";
import allTestingServicesImage from "@/assets/all-testing-sevices.png";
import shortTermProgramImage from "@/assets/short-tem-program.png";
import longTermProgramImage from "@/assets/long-term-program.png";
import academicProjectsImage from "@/assets/bsc-msc-academic-projects.png";
import careerHeroImage from "@/assets/career-hero.png";

export { 
  researchImage, cellsImage, learningImage, labImage, 
  heroSlide1, heroSlide2, heroSlide3,
  foodImage, waterImage, microImage, chemImage, envImage, airImage,
  aboutImage, contactImage, allProgrammesImage, allTestingServicesImage,
  shortTermProgramImage, longTermProgramImage, academicProjectsImage,
  careerHeroImage
};

export function openingImage(path: string) {
  if (path === "/about") return aboutImage;
  if (path === "/contact") return contactImage;
  if (path === "/programmes") return allProgrammesImage;
  if (path.includes("short-term")) return shortTermProgramImage;
  if (path.includes("long-term")) return longTermProgramImage;
  if (path.includes("academic")) return academicProjectsImage;
  if (path === "/apply") return allProgrammesImage;
  if (path === "/quote") return contactImage;
  if (path === "/services" || path === "/services/") return allTestingServicesImage;
  if (path.includes("chemical")) return chemImage;
  if (path.includes("environmental")) return envImage;
  if (path.includes("air-quality")) return airImage;
  if (path.includes("microbiological")) return microImage;
  if (path.includes("food")) return foodImage;
  if (path.includes("water")) return waterImage;
  if (path.includes("career")) return careerHeroImage;
  if (path === "/privacy") return aboutImage;
  return labImage;
}

export const contact = {
  companyName: "Certigo Laboratories Private Limited",
  tagline: "Reliable Testing. Accurate Results. Trusted Quality.",
  nablNumber: "NABLT0626AD18278",
  gstin: "37AAMCC7866K1ZU",
  cin: "U86905AP2025PTC119663",
  isoStandard: "ISO/IEC 17025:2017",
  phone: "+91 82474 42084",
  phoneHref: "tel:+918247442084",
  landline: "0891-4568391",
  email: "certigolabs@gmail.com",
  instagram: "https://www.instagram.com/certigo_labs?cplk=MWIwYjdmNTJxdHJmdg==",
  address: "D.No.49-55-19/A, Saligramapuram, Vidyut Nagar, Beside Port Stadium, Visakhapatnam - 530024, Andhra Pradesh, India",
  officialVision: "To be a globally recognized leader in food and water testing, ensuring safety, quality and compliance through cutting-edge technology, expert analysis, and unwavering commitment to excellence.",
  officialMission: "Delivering trusted, accurate, and timely testing services for food and water safety, fostering health and confidence in every sample analyzed with 'excellence'.",
  qualityPolicy: "Certigo Laboratories Pvt Ltd. is committed to provide best laboratory services by adopting procedures, professional practices and international standards complying with the requirements of ISO/IEC 17025:2017 to the satisfaction of all concerned while ensuring integrity, confidentiality and impartiality."
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
    icon: Trees,
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
    image: shortTermProgramImage,
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
    image: longTermProgramImage,
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
    image: academicProjectsImage,
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

export interface JobListing {
  id: string;
  slug: string;
  path: `/careers/${string}`;
  title: string;
  department: "Microbiology" | "Chemical Analysis" | "Environmental Testing" | "Quality Assurance" | "Food Testing" | "Water Testing";
  location: string;
  type: "Full-Time" | "Field / Site" | "Shift-Based";
  experience: "Freshers / 0-1 Yr" | "1-3 Years" | "3-5 Years" | "3-6 Years";
  experienceLevel: "entry" | "mid" | "senior";
  education: string;
  salary: string;
  vacancies: number;
  postedDate: string;
  deadline: string;
  status: "Actively Hiring" | "Immediate Requirement";
  summary: string;
  tags: string[];
  keySkills: string[];
  responsibilities: string[];
  requirements: string[];
  preferredQualifications: string[];
  benefits: string[];
}

export const jobOpenings: JobListing[] = [
  {
    id: "JOB-MB-01",
    slug: "senior-food-microbiologist",
    path: "/careers/senior-food-microbiologist",
    title: "Senior Food & Water Microbiologist",
    department: "Microbiology",
    location: "Visakhapatnam (On-Site)",
    type: "Full-Time",
    experience: "3-5 Years",
    experienceLevel: "senior",
    education: "M.Sc. in Microbiology / Food Science / Biotechnology",
    salary: "₹35,000 - ₹50,000 / month",
    vacancies: 2,
    postedDate: "14 Oct 2026",
    deadline: "Open until filled",
    status: "Actively Hiring",
    summary: "Lead microbiological analysis of packaged food, dairy products, drinking water, and processed food samples in our NABL accredited sterile culture facility.",
    tags: ["Pathogen Detection", "ISO/IEC 17025", "FSSAI", "Bacteriological Quality"],
    keySkills: [
      "Coliform & E. coli enumeration",
      "Salmonella & Listeria isolation",
      "Media preparation & Sterilization QC",
      "Biohazard handling & Autoclaving",
      "Measurement Uncertainty & Reporting"
    ],
    responsibilities: [
      "Perform qualitative and quantitative microbiological testing of food, drinking water, and raw ingredient samples according to BIS, FSSAI, and ISO standards.",
      "Isolate and identify foodborne pathogens including Salmonella, Listeria monocytogenes, Staphylococcus aureus, and Vibrio species.",
      "Maintain reference culture collections (ATCC/MTCC), monitor strain viability, and execute regular sub-culturing routines.",
      "Execute environmental microbiological monitoring of laminar flow cabinets, clean rooms, and sterile preparation benches.",
      "Participate actively in proficiency testing (PT) rounds and inter-laboratory comparisons (ILC).",
      "Ensure compliant biomedical waste disposal, autoclaving cycles, and biosafety protocols."
    ],
    requirements: [
      "Master's degree (M.Sc.) in Microbiology, Food Microbiology, or Biotechnology.",
      "Minimum 3 years of hands-on testing experience in an ISO/IEC 17025 accredited analytical facility.",
      "Strong understanding of FSSAI food product standards and IS 10500 drinking water parameters.",
      "Demonstrated competency operating laminar air flow workstations, autoclaves, colony counters, and BOD incubators.",
      "Rigorous documentation discipline for audit logs, test sheets, and measurement traceability."
    ],
    preferredQualifications: [
      "Formal 4-day ISO/IEC 17025:2017 Internal Auditor certification.",
      "Experience handling rapid pathogen screening systems or automated microbial assays."
    ],
    benefits: [
      "Competitive compensation with performance-linked annual increments",
      "Statutory PF, ESI, and comprehensive health insurance coverage",
      "Hands-on work with high-end, calibrated NABL analytical infrastructure",
      "Technical workshop attendance and continuous scientific career development"
    ]
  },
  {
    id: "JOB-CH-02",
    slug: "analytical-chemist-spectroscopy",
    path: "/careers/analytical-chemist-spectroscopy",
    title: "Analytical Chemist - Instrumental Analysis",
    department: "Chemical Analysis",
    location: "Visakhapatnam (On-Site)",
    type: "Full-Time",
    experience: "1-3 Years",
    experienceLevel: "mid",
    education: "M.Sc. Analytical Chemistry / Applied Chemistry / General Chemistry",
    salary: "₹30,000 - ₹45,000 / month",
    vacancies: 2,
    postedDate: "16 Oct 2026",
    deadline: "Open until filled",
    status: "Actively Hiring",
    summary: "Operate high-precision analytical instruments for quantification of trace heavy metals, mineral profiling, and proximate constituents in industrial and food samples.",
    tags: ["UV-Vis Spectrophotometry", "AAS / Trace Metals", "Heavy Metals", "Proximate Analysis"],
    keySkills: [
      "Spectrophotometric assays",
      "Heavy metal digestion",
      "Standard calibration curves",
      "Method validation (LOD/LOQ)",
      "CRM traceability verification"
    ],
    responsibilities: [
      "Operate and calibrate UV-Vis Spectrophotometers, Atomic Absorption Spectrometers (AAS), and auto-titrators.",
      "Perform trace heavy metal testing (Lead, Cadmium, Arsenic, Mercury) in food commodities and drinking water.",
      "Execute proximate chemical assays: moisture, total ash, acid-insoluble ash, fat, protein, and crude fiber analysis.",
      "Prepare certified reference standards, check calibration drift, and maintain equipment maintenance logbooks.",
      "Calculate measurement uncertainty (MU) for analytical parameters and prepare audit-ready test reports."
    ],
    requirements: [
      "M.Sc. in Analytical Chemistry, Inorganic Chemistry, or Applied Chemistry.",
      "1-3 years of direct bench experience in a commercial or industrial analytical laboratory.",
      "Familiarity with BIS, AOAC, and APHA analytical methodologies.",
      "Strict compliance with Good Laboratory Practices (GLP) and chemical hygiene procedures."
    ],
    preferredQualifications: [
      "Hands-on experience with microwave digestion systems for trace metal preparation.",
      "Familiarity with NABL audit documentation in chemical disciplines."
    ],
    benefits: [
      "Structured career growth into senior analytical and instrumentation specialist roles",
      "Provident Fund, medical allowance, and daylight operational shifts",
      "Direct pair-working with experienced senior chemists and technical directors"
    ]
  },
  {
    id: "JOB-EV-03",
    slug: "environmental-field-analyst",
    path: "/careers/environmental-field-analyst",
    title: "Environmental Field & Stack Monitoring Analyst",
    department: "Environmental Testing",
    location: "Visakhapatnam & Field Sites",
    type: "Field / Site",
    experience: "1-3 Years",
    experienceLevel: "mid",
    education: "B.Sc. / M.Sc. Environmental Science / Chemical Engineering / Chemistry",
    salary: "₹25,000 - ₹38,000 / month + Field Allowances",
    vacancies: 3,
    postedDate: "18 Oct 2026",
    deadline: "Open until filled",
    status: "Actively Hiring",
    summary: "Lead on-site ambient air quality monitoring, industrial stack emissions sampling, and effluent characterization across Visakhapatnam industrial corridors.",
    tags: ["Stack Emission Sampling", "Ambient Air Quality", "Effluent Characterization", "APPCB / CPCB Protocols"],
    keySkills: [
      "Respirable Dust Sampler (RDS)",
      "Isokinetic stack sampling kit",
      "Flue gas analyzer & Orsat apparatus",
      "ETP/STP effluent sampling",
      "Noise level meters"
    ],
    responsibilities: [
      "Travel to manufacturing plants, chemical units, and industrial facilities across Andhra Pradesh for scheduled monitoring.",
      "Set up and operate High Volume Air Samplers (PM10, PM2.5, SO2, NOx, and volatile organics).",
      "Conduct isokinetic stack emissions sampling from industrial boilers, furnaces, and DG exhaust chimneys.",
      "Collect industrial effluent, trade waste, and groundwater samples maintaining strict temperature and preservative controls.",
      "Measure industrial ambient noise levels, lux levels, and ambient meteorological conditions."
    ],
    requirements: [
      "Degree in Environmental Science, Chemistry, or Environmental Engineering.",
      "Willingness to travel for field testing assignments across coastal Andhra Pradesh.",
      "Physical fitness for climbing industrial stack sampling platforms with personal protective gear.",
      "Knowledge of CPCB/MoEFCC sampling guidelines and APPCB statutory requirements."
    ],
    preferredQualifications: [
      "Valid driving license (two-wheeler or four-wheeler).",
      "Prior experience in an environmental monitoring consultancy or accredited testing laboratory."
    ],
    benefits: [
      "Attractive daily field allowances and company travel reimbursement",
      "Complete personal protective equipment (PPE) and premium safety gear provided",
      "Comprehensive accidental insurance and medical benefits"
    ]
  },
  {
    id: "JOB-QA-04",
    slug: "quality-assurance-nabl-officer",
    path: "/careers/quality-assurance-nabl-officer",
    title: "Quality Assurance Officer (NABL & ISO 17025)",
    department: "Quality Assurance",
    location: "Visakhapatnam (On-Site)",
    type: "Full-Time",
    experience: "3-6 Years",
    experienceLevel: "senior",
    education: "M.Sc. Chemistry / Microbiology / Quality Management",
    salary: "₹40,000 - ₹60,000 / month",
    vacancies: 1,
    postedDate: "10 Oct 2026",
    deadline: "Open until filled",
    status: "Immediate Requirement",
    summary: "Manage the quality management system (QMS) complying with ISO/IEC 17025:2017, coordinate NABL surveillance audits, and maintain analytical integrity.",
    tags: ["ISO/IEC 17025:2017", "QMS Administration", "Internal Audits", "PT / ILC Management"],
    keySkills: [
      "Quality Manual & SOP authoring",
      "Root Cause Analysis (CAPA)",
      "Method validation dossiers",
      "Equipment calibration schedules",
      "NABL Portal compliance"
    ],
    responsibilities: [
      "Maintain and update laboratory Quality Manual, Quality System Procedures (QSP), and technical SOPs.",
      "Plan, schedule, and lead internal quality audits across biological and chemical testing disciplines.",
      "Manage participation in national and international proficiency testing schemes (PT/ILC) and evaluate z-scores.",
      "Oversee annual calibration schedules for analytical balances, thermal instruments, and volumetric glassware.",
      "Review customer test reports for technical accuracy, reference standard traceability, and uncertainty documentation."
    ],
    requirements: [
      "Minimum 3 years in Quality Assurance within an ISO/IEC 17025 accredited laboratory.",
      "Certified Internal Auditor for ISO/IEC 17025:2017 standard.",
      "Deep understanding of measurement traceability, certified reference materials (CRM), and statistical QC.",
      "Exemplary organizational and communication skills for interacting with NABL assessors."
    ],
    preferredQualifications: [
      "Hands-on experience facing NABL desktop audits and on-site surveillance assessments."
    ],
    benefits: [
      "Key leadership role working directly with Laboratory Directors",
      "Top-tier compensation package with performance incentives",
      "Active role in shaping laboratory accreditation scope expansions"
    ]
  },
  {
    id: "JOB-FS-05",
    slug: "food-safety-lab-analyst",
    path: "/careers/food-safety-lab-analyst",
    title: "Food Safety & Wet Chemistry Analyst",
    department: "Food Testing",
    location: "Visakhapatnam (On-Site)",
    type: "Full-Time",
    experience: "1-3 Years",
    experienceLevel: "mid",
    education: "B.Sc. / M.Sc. Food Science / Chemistry / Food Technology",
    salary: "₹22,000 - ₹32,000 / month",
    vacancies: 2,
    postedDate: "12 Oct 2026",
    deadline: "Open until filled",
    status: "Actively Hiring",
    summary: "Conduct standard physical and wet chemical assays on agricultural commodities, packaged foods, spices, dairy products, and edible oils.",
    tags: ["FSSAI Protocols", "Proximate Analysis", "Adulteration Screening", "Edible Oils & Spices"],
    keySkills: [
      "Soxhlet Fat Extraction",
      "Kjeldahl Nitrogen/Protein",
      "Acid-insoluble ash",
      "Peroxide value & Free Fatty Acids",
      "Refractometry & Density"
    ],
    responsibilities: [
      "Perform routine food testing: total solids, moisture, ash, acidity, iodine value, and peroxide values.",
      "Screen food samples for synthetic colorants, adulterants, and forbidden chemical preservatives.",
      "Prepare chemical reagents, standardized solutions, and manage inventory of analytical grade chemicals.",
      "Maintain raw analytical data sheets and assist with report preparation."
    ],
    requirements: [
      "Degree in Food Science, Chemistry, or Food Technology.",
      "1+ year experience in a food testing laboratory.",
      "Familiarity with FSSAI regulations and Manuals of Methods of Analysis of Foods.",
      "Meticulous bench skills and pipetting precision."
    ],
    preferredQualifications: [
      "Experience testing seafood, spices, or packaged dairy products."
    ],
    benefits: [
      "Structured mentorship under senior analysts",
      "Regular daylight working shifts",
      "Provident Fund and health coverage"
    ]
  },
  {
    id: "JOB-WT-06",
    slug: "junior-lab-technician-water",
    path: "/careers/junior-lab-technician-water",
    title: "Junior Laboratory Technician - Water Testing & Prep",
    department: "Water Testing",
    location: "Visakhapatnam (On-Site)",
    type: "Full-Time",
    experience: "Freshers / 0-1 Yr",
    experienceLevel: "entry",
    education: "B.Sc. Chemistry / Life Sciences / Diploma in MLT",
    salary: "₹18,000 - ₹24,000 / month",
    vacancies: 2,
    postedDate: "18 Oct 2026",
    deadline: "Open until filled",
    status: "Actively Hiring",
    summary: "Support the water testing team with sample receipt, accessioning, physical-chemical testing, reagent preparation, and laboratory hygiene.",
    tags: ["IS 10500 Potability", "Sample Accessioning", "pH & Turbidity", "Freshers Welcome"],
    keySkills: [
      "pH meter calibration",
      "Conductivity & TDS testing",
      "Hardness & Alkalinity titration",
      "Glassware wash & autoclave cycle prep"
    ],
    responsibilities: [
      "Receive water samples, verify seals and chain-of-custody documentation, and assign unique sample IDs.",
      "Perform basic physical and chemical tests: pH, Electrical Conductivity, TDS, Turbidity, Total Hardness, and Chlorides.",
      "Clean, acid-wash, and dry analytical glassware following strict contamination prevention SOPs.",
      "Prepare distilled and deionized water supplies for analytical benches.",
      "Assist with sample storage, retention, and systematic disposal after report delivery."
    ],
    requirements: [
      "B.Sc. in Chemistry or Life Sciences, or Diploma in Lab Technology.",
      "Fresh graduates with strong laboratory enthusiasm are welcome to apply.",
      "Good attention to detail, handwriting legibility, and punctuality.",
      "Basic computer skills (MS Excel / Word)."
    ],
    preferredQualifications: [
      "Completed laboratory internship or student project at a testing laboratory."
    ],
    benefits: [
      "Ideal stepping stone for recent graduates to enter the NABL laboratory sector",
      "Comprehensive on-the-job training in standard analytical techniques",
      "Prompt monthly salary and PF benefits"
    ]
  }
];

export function getJobBySlug(slug: string): JobListing | undefined {
  return jobOpenings.find((j) => j.slug === slug);
}