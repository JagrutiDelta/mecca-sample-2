"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Factory,
  ShieldCheck,
  Boxes,
  Wind,
  Syringe,
  Package,
  CheckCircle2,
  Award,
  Sparkles,
  Clock,
  Building2,
  MapPin,
  Cpu,
  Check,
  Send,
  ArrowRight,
  ChevronRight,
  Blend,
  ArrowRightFromLine,
  Activity,
  Gauge,
  FileCheck,
  Microscope,
  Sliders,
  Phone,
  Mail,
  BadgeCheck,
  Share2,
  Link2,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

/* -------------------------------------------------------------------------- */
/*                                DATA SETS                                   */
/* -------------------------------------------------------------------------- */

const PROCESS_STEPS = [
  {
    id: "compounding",
    step: "01",
    name: "Plastic Compounding & Granulation",
    short: "Non-toxic medical polymer formulation",
    icon: Blend,
    desc: "Custom formulation and granulation of 100% virgin, medical-grade non-toxic PVC and polyolefins engineered for maximum kink-resistance, clarity, and biocompatibility.",
    techSpecs: [
      "Class 10,000 compounding environment",
      "DEHP-free & phthalate-free formulation options",
      "Automated gravimetric batch dosing",
      "Strict raw material pyrogen & bioburden screening",
    ],
    image: "/Plastic.png",
  },
  {
    id: "extrusion",
    step: "02",
    name: "Medical PVC Tube Extrusion",
    short: "High-precision micro-tubing extrusion",
    icon: ArrowRightFromLine,
    desc: "High-speed automated extrusion lines dedicated to producing crystal-clear, non-kinking medical tubing with micro-dimensional tolerances for I.V. sets, catheters, and lines.",
    techSpecs: [
      "In-line laser micrometer thickness control",
      "Kink-resistant inner ribbed geometry",
      "Multi-lumen & co-extrusion capabilities",
      "Zero-surge melt pumps for uniform diameter",
    ],
    image: "/Medical_PVC.png",
  },
  {
    id: "moulding",
    step: "03",
    name: "Precision Injection Moulding",
    short: "Automated high-cavity component moulding",
    icon: Syringe,
    desc: "Computer-controlled, fully automated injection moulding machines operating under cleanroom conditions for drip chambers, spikes, luers, valves, and flow regulators.",
    techSpecs: [
      "Robotic part extraction & optical vision inspection",
      "Medical-grade polycarbonate, ABS & polypropylene",
      "Multi-cavity high precision hot runner molds",
      "Zero flash & flash-free micro-molding",
    ],
    image: "/Pricision.png",
  },
  {
    id: "cleanroom",
    step: "04",
    name: "Class 10,000 Cleanroom Assembly",
    short: "ISO Class 7 controlled assembly lines",
    icon: ShieldCheck,
    desc: "Environmentally controlled Class 10,000 cleanrooms equipped with positive pressure AHU systems, HEPA filtration, and trained technicians for zero-defect assembly.",
    techSpecs: [
      "ISO Class 7 (Class 10,000) air purity",
      "3-Stage AHU: 20µ, 5µ, & 0.3µ HEPA filtration",
      "Laminar flow workstation assembly points",
      "Continuous particle, temperature & humidity monitoring",
    ],
    image: "/Class.png",
  },
  {
    id: "sterilization",
    step: "05",
    name: "In-House ETO Gas Sterilization",
    short: "Automated Ethylene Oxide cycle processing",
    icon: Wind,
    desc: "State-of-the-art automated ETO gas sterilization chambers operating with computerized cycle validation, humidity conditioning, and heated aeration degassing cells.",
    techSpecs: [
      "Fully automated computerized sterilization chambers",
      "Biological indicator (B. Stearothermophilus) validation",
      "Enclosed heated aeration cells for rapid degassing",
      "Zero residual gas tolerance compliant with ISO 11135",
    ],
    image: "/ETO.png",
  },
  {
    id: "packaging",
    step: "06",
    name: "Final Packaging & QA Release",
    short: "Medical-grade blister & pouch sealing",
    icon: Package,
    desc: "High-speed medical-grade blister and Tyvek pouch sealing lines integrated with barcode serialization, batch tracking, and micro-biological release testing.",
    techSpecs: [
      "Tyvek® & medical-grade paper peel pouch sealing",
      "Automated leak testing & seal integrity check",
      "Complete lot traceability & serialization",
      "Final QC lot release with COA documentation",
    ],
    image: "/Packaging.png",
  },
];

interface Plant {
  id: string;
  label: string;
  name: string;
  location: string;
  address: string;
  established: string;
  focus: string;
  area: string;
  phone: string;
  phoneHref: string;
  image: string;
  highlights: string[];
}

const MANUFACTURING_PLANTS: Plant[] = [
  {
    id: "kalol",
    label: "Unit 1",
    name: "Kalol Manufacturing Hub",
    location: "GIDC, Kalol, Gandhinagar, Gujarat",
    address: "99-102, G.I.D.C., Kalol, Gandhinagar, Gujarat 382725, India",
    established: "1986",
    focus: "PVC Extrusion, Drip Chamber Moulding & ETO Sterilization",
    area: "35,000 sq. ft.",
    phone: "+91 2764 221020",
    phoneHref: "+912764221020",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "FDCA Drug Manufacturing License since 1990",
      "In-house automated ETO Sterilization chambers",
      "Specialized high-speed PVC tube extrusion lines",
      "WHO-GMP compliant Class 10,000 cleanrooms",
    ],
  },
  {
    id: "chhattral",
    label: "Unit 2",
    name: "Chhattral Component Plant",
    location: "GIDC Industrial Estate, Mehsana, Gujarat",
    address: "L-1202, GIDC, Chattral, Mehsana, Gujarat 382729, India",
    established: "1987",
    focus: "High-Cavity Moulding & Assembly Components",
    area: "28,000 sq. ft.",
    phone: "+91 7990 571693",
    phoneHref: "+917990571693",
    image:
      "https://images.unsplash.com/photo-1581092335879-11c5d985a73e?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "Automated injection moulding with robotic handlers",
      "Medical-grade polycarbonate & PP component tooling",
      "Sub-assembly lines for fluid administration sets",
      "Continuous inline optical vision QA inspection",
    ],
  },
  {
    id: "jodhpur",
    label: "Unit 3",
    name: "Boranada Mega Facility",
    location: "RIICO Industrial Area, Boranada, Jodhpur, Rajasthan",
    address: "F-252, Phase 3, RIICO, Boranada, Rajasthan 342012, India",
    established: "2008",
    focus: "Integrated Mega-Production, OEM & Global Export Hub",
    area: "65,000 sq. ft.",
    phone: "+91 7665 761999",
    phoneHref: "+917665761999",
    image:
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "State-of-the-art expanded cleanroom complex",
      "High-volume OEM & Loan License contract production",
      "Advanced packaging, warehousing & logistics bay",
      "TÜV SÜD European CE Mark (0123) certified lines",
    ],
  },
];

const QUALITY_PILLARS = [
  {
    icon: Sliders,
    title: "5S Methodology",
    desc: "Sort, Set in order, Shine, Standardize, and Sustain — strictly implemented across every moulding machine and cleanroom assembly workstation.",
  },
  {
    icon: Activity,
    title: "Kaizen Culture",
    desc: "Continuous, incremental process improvement embedded into daily line management to minimize waste and optimize cycle efficiency.",
  },
  {
    icon: Gauge,
    title: "In-Process Control (IPC)",
    desc: "Multi-point inline automated and manual physical inspections performed at every 30 minutes of continuous production runs.",
  },
  {
    icon: Microscope,
    title: "In-House Micro & QC Labs",
    desc: "Fully equipped chemical, physical, and microbiological laboratories conducting bioburden, endotoxin (LAL), pyrogen, and tensile testing.",
  },
];

const MILESTONES = [
  {
    year: "1972",
    title: "Engineering Roots",
    desc: "ACMEC Industries founded by Mr. O.P. Sharma, specializing in high-precision railway and aerospace metal rivets.",
  },
  {
    year: "1977",
    title: "Mecca Industries Established",
    desc: "Pioneered medical device manufacturing in India; amongst the first Indian companies to manufacture I.V. Infusion Sets.",
  },
  {
    year: "1986",
    title: "OEM Expansion & In-House ETO",
    desc: "Current Chairman Mr. N.P. Sharma joins; expands into contract manufacturing and installs first in-house ETO Sterilization plant.",
  },
  {
    year: "1987",
    title: "In-House Extrusion & Moulding",
    desc: "Installed in-house medical PVC tubing extrusion and precision plastic injection moulding facilities in Kalol & Chhattral.",
  },
  {
    year: "1990",
    title: "FDCA License & Core Partner",
    desc: "Accredited with FDCA Gujarat Drug License; became key approved partner for IV fluid giant Core Healthcare Ltd.",
  },
  {
    year: "1991",
    title: "Global Exports Initiated",
    desc: "Expanded distribution footprint to South East Asia, East Africa, and international global healthcare markets.",
  },
  {
    year: "1996",
    title: "WHO-GMP Accreditation",
    desc: "Achieved official WHO-GMP certification from FDCA Gujarat, solidifying quality assurance standards.",
  },
  {
    year: "2005",
    title: "Partner to Pharma Leaders",
    desc: "Became premier OEM partner for Cipla, Fresenius Kabi, Wockhardt, Intas, Torrent, Sutures India, and Albert David.",
  },
  {
    year: "2006",
    title: "European CE Marking (DNV)",
    desc: "Accredited with European CE Mark Certification under EU Directive 93/42/EEC.",
  },
  {
    year: "2008",
    title: "Boranada Jodhpur Mega Plant",
    desc: "Expanded production capacity with a modern state-of-the-art facility in RIICO Industrial Area, Jodhpur, Rajasthan.",
  },
  {
    year: "2011",
    title: "B. Braun India Partnership",
    desc: "Selected as approved supplier of medical devices and critical components for B. Braun India Pvt. Ltd.",
  },
  {
    year: "2019",
    title: "CDSCO MDR 2017 License",
    desc: "Granted CDSCO License (MFG/MD/2019/000192) for 40+ specialized products across Cardiology, Anesthesia, Surgery, Urology, & Gynecology.",
  },
  {
    year: "2020",
    title: "TÜV SÜD CE Certification",
    desc: "Re-certified with European CE Mark from TÜV SÜD (0123) under international safety & performance standards.",
  },
];

const CLIENT_PARTNERS = [
  "B. Braun India",
  "Cipla Ltd",
  "Fresenius Kabi",
  "Intas Pharmaceuticals",
  "Torrent Pharma",
  "Wockhardt",
  "Albert David",
  "Sutures India",
];

const CERTIFICATIONS = [
  {
    code: "ISO 9001:2015",
    label: "Quality Management",
    icon: ShieldCheck,
  },
  {
    code: "ISO 13485:2016",
    label: "Medical Devices",
    icon: BadgeCheck,
  },
  {
    code: "WHO-GMP",
    label: "Certified Cleanrooms",
    icon: Award,
  },
  {
    code: "CE Marked (0123)",
    label: "TÜV SÜD Certified",
    icon: Sparkles,
  },
];

/* -------------------------------------------------------------------------- */
/*                        JOURNEY CARD COMPONENT                              */
/* -------------------------------------------------------------------------- */

function ManufacturingJourneyCard({
  step,
  year,
  title,
  description,
  align = "left",
}: {
  step: number;
  year: string;
  title: string;
  description: string;
  align?: "left" | "right";
}) {
  const stepNumber = String(step).padStart(2, "0");

  return (
    <div className="group relative w-full max-w-[360px] overflow-hidden rounded-[18px] bg-white shadow-[0_10px_35px_rgba(15,39,64,0.08)] border border-slate-100 hover:shadow-[0_15px_40px_rgba(139,30,45,0.12)] transition-all duration-300">
      {/* LEFT STEP PANEL */}
      <div className="absolute inset-y-0 left-0 w-[72px] bg-[#F7F7F7]">
        {/* Circle with Step Number */}
        <div className="absolute left-[8px] top-1/2 flex h-[56px] w-[56px] -translate-y-1/2 items-center justify-center rounded-full border border-burgundy bg-white shadow-xs">
          <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-burgundy">
            <span className="text-[19px] font-extrabold text-white">
              {stepNumber}
            </span>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="absolute left-[36px] top-[32px] bottom-[32px] w-px bg-burgundy" />

        {/* Top Dot */}
        <div className="absolute left-[32px] top-[26px] h-[8px] w-[8px] rounded-full bg-burgundy" />

        {/* Bottom Dot */}
        <div className="absolute bottom-[26px] left-[32px] h-[8px] w-[8px] rounded-full bg-burgundy" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative ml-[72px] min-h-[245px] px-5 pb-8 pt-5">
        {/* YEAR BADGE */}
        <div className="absolute right-3 top-3 flex h-[33px] items-center gap-2 rounded-[10px] bg-[#FAF1F2] px-2.5">
          <svg
            className="h-4 w-4 text-burgundy"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <div className="h-4 w-px bg-burgundy/30" />
          <span className="text-xs font-extrabold text-burgundy">
            {year}
          </span>
        </div>

        {/* CONTENT */}
        <div className="pt-[36px]">
          {/* Accent line */}
          <div className="mb-3 h-[3px] w-[35px] bg-burgundy" />

          {/* YEAR */}
          <h3 className="font-heading text-[34px] sm:text-[37px] font-extrabold leading-none tracking-[-0.04em] text-navy">
            {year}
          </h3>

          {/* Dots */}
          <div className="mt-2.5 flex items-center gap-2">
            <span className="h-[4px] w-[4px] rounded-full bg-slate-300" />
            <span className="h-[4px] w-[4px] rounded-full bg-slate-300" />
            <span className="h-[4px] w-[4px] rounded-full bg-slate-300" />
            <span className="h-[4px] w-[4px] rounded-full bg-slate-300" />
            <span className="h-[7px] w-[7px] rounded-full bg-burgundy" />
          </div>

          {/* Title */}
          {title && (
            <h4 className="font-heading text-[13px] font-bold text-navy mt-3 leading-snug">
              {title}
            </h4>
          )}

          {/* Description */}
          <p className="mt-1.5 max-w-[240px] text-[11px] sm:text-[12px] leading-[1.6] text-slate-500">
            {description}
          </p>

          {/* Dot Grid */}
          <div className="mt-4 grid w-[80px] grid-cols-8 gap-[5px] opacity-60">
            {Array.from({ length: 32 }).map((_, index) => (
              <span
                key={index}
                className="h-[3px] w-[3px] rounded-full bg-[#C8CDD2]"
              />
            ))}
          </div>
        </div>

        {/* WATERMARK */}
        <div className="pointer-events-none absolute bottom-6 right-[-22px] hidden opacity-[0.07] sm:block">
          <div className="relative h-[100px] w-[100px]">
            <div className="absolute inset-0 rounded-full border-[11px] border-burgundy" />
            <div className="absolute inset-[19px] rounded-full border-[7px] border-burgundy" />
            <svg
              className="absolute left-[30px] top-[30px]"
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M20 50L41 71L80 28"
                stroke="currentColor"
                className="text-burgundy"
                strokeWidth="11"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute bottom-[-23px] left-[25px] h-[35px] w-[14px] rotate-[18deg] bg-burgundy" />
            <div className="absolute bottom-[-23px] right-[25px] h-[35px] w-[14px] -rotate-[18deg] bg-burgundy" />
          </div>
        </div>
      </div>

      {/* BOTTOM NAVY BAR */}
      <div className="absolute bottom-0 left-0 h-[14px] w-[75%] bg-[#062B49]" />

      {/* BOTTOM BURGUNDY BAR WITH ANGLE */}
      <div
        className="
          absolute
          bottom-0
          right-0
          h-[14px]
          w-[25%]
          bg-burgundy
          [clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)]
        "
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Styles matching Contact Page                                               */
/* -------------------------------------------------------------------------- */

const inputClasses =
  "w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10";

const labelClasses = "mb-1.5 block text-xs font-semibold text-navy";

/* -------------------------------------------------------------------------- */
/* Floating statistic card                                                    */
/* -------------------------------------------------------------------------- */

function FloatingStat({
  value,
  label,
  className,
  animation,
  duration,
}: {
  value: string;
  label: string;
  className: string;
  animation: number[];
  duration: number;
}) {
  return (
    <motion.div
      animate={{
        y: animation,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-2xl border border-white/60 bg-white/85 px-5 py-4 shadow-glass backdrop-blur-xl ${className}`}
    >
      <div className="font-heading text-2xl font-extrabold text-navy">
        {value}
      </div>
      <div className="text-xs text-gray">{label}</div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              PAGE COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function ManufacturingPage() {
  const [activeProcess, setActiveProcess] = useState("compounding");
  const [activePlant, setActivePlant] = useState<Plant>(MANUFACTURING_PLANTS[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "OEM / Contract Manufacturing",
    targetPlant: "Any / Technical Evaluation",
    volume: "10,000 – 50,000 units/mo",
    message: "",
  });

  const selectedProcessObj =
    PROCESS_STEPS.find((p) => p.id === activeProcess) || PROCESS_STEPS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        serviceType: "OEM / Contract Manufacturing",
        targetPlant: "Any / Technical Evaluation",
        volume: "10,000 – 50,000 units/mo",
        message: "",
      });
    }, 4500);
  };

  return (
    <main className="overflow-x-hidden bg-bg text-navy selection:bg-burgundy selection:text-white">
      <Header />

      {/* ==================================================================== */}
      {/* 1. HERO SECTION (Split 2-Column with Floating Spec Cards)           */}
      {/* ==================================================================== */}
      <section
        id="manufacturing-hero"
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      >
        {/* Background Layers */}
        <div className="absolute inset-0 bg-bg" />
        <div className="absolute inset-0 bg-medical-grid bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-medblue/10 blur-3xl" />
        <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-burgundy/10 blur-3xl" />

        <div className="container-px relative grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md"
            >
              <Factory className="h-4 w-4" />
              World-Class Facilities Since 1977
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl"
            >
              Under-One-Roof{" "}
              <span className="relative inline-block text-burgundy">
                Manufacturing
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="10"
                  viewBox="0 0 300 10"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 6 Q 75 -2 150 6 T 298 6"
                    stroke="#C8D8F5"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.8,
                    }}
                  />
                </svg>
              </span>{" "}
              &amp; Cleanroom Excellence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="mt-6 max-w-xl text-base leading-relaxed text-gray md:text-lg"
            >
              From raw polymer compounding to finished sterile medical devices.
              Operating integrated ISO Class 7 (Class 10,000) cleanrooms, automated
              ETO sterilization, and 45+ years of precision medical engineering
              across three certified manufacturing plants.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#process"
                className="group inline-flex items-center gap-2 rounded-full bg-burgundy-gradient px-8 py-4 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <span>Explore Workflow</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/70 px-8 py-4 text-sm font-semibold text-navy backdrop-blur transition-colors hover:bg-white"
              >
                <Cpu className="h-4 w-4 text-medblue" />
                <span>Request OEM Audit</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT VISUAL WITH FLOATING STAT CARDS */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="absolute inset-0 overflow-hidden rounded-xl2 shadow-soft"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
                alt="Mecca Healthcare Manufacturing & Cleanroom Facilities"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Glass Stat 1 */}
            <FloatingStat
              value="45+ Years"
              label="Manufacturing Legacy"
              className="-left-4 top-8 md:-left-10"
              animation={[0, -14, 0]}
              duration={6}
            />

            {/* Floating Glass Stat 2 */}
            <FloatingStat
              value="Class 10,000"
              label="ISO Class 7 Cleanrooms"
              className="-right-2 top-1/3 md:-right-8"
              animation={[0, 14, 0]}
              duration={7}
            />

            {/* Floating Glass Stat 3 */}
            <FloatingStat
              value="3 Plants"
              label="Gujarat & Rajasthan"
              className="bottom-10 left-2 md:-left-6"
              animation={[0, -10, 0]}
              duration={6.5}
            />

            {/* Floating Glass Stat 4 */}
            <FloatingStat
              value="100M+"
              label="Annual Device Capacity"
              className="bottom-0 right-4 md:right-0"
              animation={[0, 12, 0]}
              duration={7.5}
            />
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. THREE MANUFACTURING PLANTS & INTERACTIVE GOOGLE MAP              */}
      {/* ==================================================================== */}
      <section id="plants" className="section-py bg-white">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-2xl"
          >
            <div className="eyebrow mb-4 inline-flex items-center rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D]">
              Our Production Hubs
            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-4xl">
              Three Plants. One Standard of Quality.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray">
              Strategically located across premier industrial hubs in Gujarat and
              Rajasthan to serve domestic healthcare tenders and global OEM export
              partners in 50+ countries.
            </p>
          </motion.div>

          {/* Plant Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {MANUFACTURING_PLANTS.map((plant, index) => {
              const isSelected = activePlant.id === plant.id;
              return (
                <motion.div
                  key={plant.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActivePlant(plant)}
                  className={`cursor-pointer rounded-xl2 border bg-white p-6 text-left shadow-card transition-all hover:-translate-y-1 hover:shadow-soft flex flex-col justify-between ${
                    isSelected
                      ? "border-burgundy ring-1 ring-burgundy/20 bg-burgundy/[0.02]"
                      : "border-border hover:border-burgundy/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                            isSelected
                              ? "bg-burgundy text-white shadow-sm"
                              : "bg-burgundy/10 text-burgundy"
                          }`}
                        >
                          <Building2 className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-burgundy">
                            {plant.label}
                          </span>
                          <div className="text-[11px] text-gray">Est. {plant.established}</div>
                        </div>
                      </div>

                      <span className="text-xs font-mono font-semibold text-gray bg-slate-100 px-2.5 py-1 rounded-md">
                        {plant.area}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-navy">
                      {plant.name}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-gray leading-relaxed">
                      {plant.location}
                    </p>

                    <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-[#8B1E2D]">
                      Focus: {plant.focus}
                    </div>

                    <ul className="mt-4 space-y-2 text-xs text-gray">
                      {plant.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-burgundy shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <a
                      href={`tel:${plant.phoneHref}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-medblue hover:text-navy transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {plant.phone}
                    </a>

                    <span
                      className={`text-xs font-semibold ${
                        isSelected ? "text-burgundy font-bold" : "text-gray"
                      }`}
                    >
                      {isSelected ? "Active Map •" : "View Map →"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Google Map with Active Unit Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-8 overflow-hidden rounded-xl2 border border-border shadow-card bg-white"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white px-6 py-4 border-b border-border">
              <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                <MapPin className="h-4 w-4 text-burgundy" />
                <span>
                  Viewing {activePlant.label} — {activePlant.name} ({activePlant.location})
                </span>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  activePlant.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-medblue transition-colors hover:text-navy"
              >
                Get Directions →
              </a>
            </div>

            <iframe
              key={activePlant.id}
              title={`Google Map showing ${activePlant.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                activePlant.address
              )}&output=embed`}
              className="h-[380px] w-full border-0 bg-slate-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. VERTICAL INTEGRATION MANUFACTURING WORKFLOW                      */}
      {/* ==================================================================== */}
      <section id="process" className="section-py bg-bg">
        <div className="container-px">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="eyebrow mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D]">
              <Boxes className="h-4 w-4" />
              End-to-End Vertical Integration
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl tracking-tight">
              Under-One-Roof Manufacturing Workflow
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray leading-relaxed">
              Every production stage — from raw polymer compounding to sterile, high-precision
              medical devices — is conducted entirely within our integrated facilities under total
              process control.
            </p>
          </div>

          {/* Interactive Step Switcher Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = activeProcess === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveProcess(step.id)}
                  className={`p-4 rounded-xl2 text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? "bg-burgundy-gradient text-white border-transparent shadow-card -translate-y-0.5"
                      : "bg-white border-border text-navy hover:border-burgundy/30 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold font-heading px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-white text-burgundy font-extrabold"
                          : "bg-slate-100 text-gray"
                      }`}
                    >
                      {step.step}
                    </span>
                    <Icon
                      className={`h-5 w-5 ${
                        isActive ? "text-white" : "text-gray"
                      }`}
                    />
                  </div>
                  <div
                    className={`text-xs font-semibold line-clamp-2 ${
                      isActive ? "text-white" : "text-navy"
                    }`}
                  >
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProcessObj.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl2 bg-white border border-border p-8 md:p-12 shadow-card grid lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3.5">
                  <span className="h-11 w-11 rounded-full bg-burgundy-gradient flex items-center justify-center font-heading font-extrabold text-white text-sm shadow-soft">
                    {selectedProcessObj.step}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-navy">
                      {selectedProcessObj.name}
                    </h3>
                    <p className="text-xs font-bold text-burgundy mt-0.5">
                      {selectedProcessObj.short}
                    </p>
                  </div>
                </div>

                <p className="text-gray text-sm sm:text-base leading-relaxed">
                  {selectedProcessObj.desc}
                </p>

                {/* Tech Specs Grid */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy/70 mb-3">
                    Technical Capabilities &amp; In-Line Controls
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProcessObj.techSpecs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-border"
                      >
                        <CheckCircle2 className="h-4 w-4 text-burgundy shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-navy leading-snug">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Image Showcase */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-border aspect-[4/3] shadow-md group">
                <img
                  src={selectedProcessObj.image}
                  alt={selectedProcessObj.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
                  <div className="text-xs font-bold text-navy flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-burgundy" />
                    <span>WHO-GMP &amp; Class 10,000 Verified</span>
                  </div>
                  <div className="text-[11px] text-gray mt-1">
                    Continuous environmental bioburden monitoring &amp; automated cycle validation.
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. CLEANROOM & AIR FILTRATION ARCHITECTURE (AHU)                    */}
      {/* ==================================================================== */}
      <section className="section-py bg-white border-y border-border">
        <div className="container-px">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="eyebrow inline-flex items-center gap-2 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D]">
                <Cpu className="h-4 w-4" />
                Cleanroom Infrastructure
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy leading-tight">
                Class 10,000 (ISO Class 7) Controlled Environment
              </h2>
              <p className="text-gray text-base leading-relaxed">
                Mecca Healthcare operates WHO-GMP certified manufacturing premises featuring
                environmentally sealed Class 10,000 cleanrooms. Air purity is rigorously maintained via
                custom-engineered Air Handling Units (AHU) with multi-stage particulate filtration.
              </p>

              {/* AHU Air Filtration Spec Box */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-border shadow-sm space-y-4">
                <h3 className="font-heading font-semibold text-sm text-navy flex items-center gap-2">
                  <Wind className="h-4 w-4 text-burgundy" />
                  <span>3-Tier Air Filtration Architecture (AHU)</span>
                </h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white border border-border">
                    <div className="text-lg font-bold text-burgundy">20 µm</div>
                    <div className="text-[11px] text-gray">Pre-Filter Stage</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-border">
                    <div className="text-lg font-bold text-burgundy">5 µm</div>
                    <div className="text-[11px] text-gray">Secondary Filter</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-border">
                    <div className="text-lg font-bold text-burgundy">0.3 µm</div>
                    <div className="text-[11px] text-gray">HEPA Filter (99.97%)</div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-gray">
                {[
                  "Positive room pressure prevents airborne contaminants from entering cleanroom zones",
                  "Automated computer-operated assembly lines reduce direct human touch points",
                  "Microbiological bioburden & particle counts continuously logged per shift",
                  "In-house automated ETO Sterilization chambers with biological indicator release",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-burgundy shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Cleanroom Image Box */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3] shadow-soft">
                <img
                  src="/Environment.png"
                  alt="Class 10,000 Medical Cleanroom Facility"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl2 bg-white/95 backdrop-blur-xl border border-border shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-burgundy font-bold uppercase tracking-wider">
                        Facility Certification
                      </div>
                      <div className="text-lg font-bold text-navy font-heading mt-0.5">
                        WHO-GMP &amp; ISO 13485:2016 Compliant
                      </div>
                    </div>
                    <Award className="h-8 w-8 text-burgundy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. QUALITY MANAGEMENT SYSTEM (QMS) & 5S PILLARS                     */}
      {/* ==================================================================== */}
      <section className="section-py bg-bg">
        <div className="container-px">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="eyebrow mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D]">
              <FileCheck className="h-4 w-4" />
              Quality Assurance System
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl tracking-tight">
              Total Quality Management (QMS)
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray leading-relaxed">
              &ldquo;For us, Quality Assurance is a concept that begins before any product is
              manufactured, governs every phase of production, and validates final release testing.&rdquo;
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl2 bg-white border border-border hover:border-burgundy/40 hover:shadow-soft transition-all duration-300 group hover:-translate-y-1 shadow-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center mb-5 group-hover:bg-burgundy-gradient transition-colors">
                    <Icon className="w-6 h-6 text-burgundy group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Zero Defect Target Banner */}
          <div className="mt-12 p-8 md:p-10 rounded-xl2 bg-navy-gradient text-white border border-white/10 shadow-card grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="text-xs font-bold text-accent uppercase tracking-wider">
                ISO 13485:2016 &amp; ISO 9001:2015 Objectives
              </div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-white">
                Zero Defect Target &amp; Continuous Process Optimization
              </h3>
              <p className="text-xs md:text-sm text-white/75 leading-relaxed">
                Our quality objectives eliminate dimensional variation, eradicate cleanroom particulates,
                and sustain strict compliance across CDSCO MDR 2017 &amp; European CE Mark frameworks.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <a
                href="/certifications"
                className="px-6 py-3.5 rounded-full bg-white text-navy font-bold text-xs hover:bg-accent transition-colors flex items-center gap-2 shadow-md"
              >
                <span>View Certifications</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. HISTORICAL MILESTONES TIMELINE                                   */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-24 bg-[#FAFAFA] border-b border-slate-200/80 relative overflow-hidden">
        <div className="container-px">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="eyebrow mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D]">
              <Clock className="h-4 w-4" />
              Pioneering History
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl tracking-tight">
              45+ Years Manufacturing Journey
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              From engineering metal aircraft rivets in 1972 to manufacturing millions of sterile IV sets &amp; medical devices daily.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Timeline Line */}
            <div
              className="
                absolute left-5 top-0 h-full w-px
                bg-gradient-to-b
                from-transparent
                via-burgundy/30
                to-transparent
                md:left-1/2
                md:-translate-x-1/2
              "
            />

            <div className="space-y-10 md:space-y-14">
              {MILESTONES.map((item, index) => {
                const isRight = index % 2 !== 0;

                return (
                  <motion.div
                    key={item.year + index}
                    initial={{
                      opacity: 0,
                      y: 30,
                      x: isRight ? 20 : -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: (index % 4) * 0.08,
                    }}
                    className="
                      relative
                      grid
                      grid-cols-[40px_1fr]
                      gap-5
                      md:grid-cols-[1fr_56px_1fr]
                      md:gap-0
                    "
                  >
                    {/* Mobile Timeline Marker */}
                    <div className="relative z-10 flex justify-center md:hidden">
                      <div
                        className="
                          mt-7
                          flex h-4 w-4
                          items-center justify-center
                          rounded-full
                          border-4
                          border-white
                          bg-burgundy
                          shadow-[0_0_0_4px_rgba(139,30,45,0.08)]
                        "
                      />
                    </div>

                    {/* LEFT CARD */}
                    <div
                      className={`
                        hidden
                        md:flex
                        ${!isRight ? "justify-end pr-8" : "justify-start"}
                      `}
                    >
                      {!isRight && (
                        <ManufacturingJourneyCard
                          step={index + 1}
                          year={item.year}
                          title={item.title}
                          description={item.desc}
                          align="left"
                        />
                      )}
                    </div>

                    {/* CENTER MARKER */}
                    <div className="relative hidden md:flex items-start justify-center">
                      <div
                        className="
                          relative z-20
                          mt-7
                          flex h-7 w-7
                          items-center justify-center
                          rounded-full
                          border-[5px]
                          border-white
                          bg-burgundy
                          shadow-[0_0_0_1px_rgba(139,30,45,0.2)]
                        "
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div
                      className={`
                        hidden
                        md:flex
                        ${isRight ? "justify-start pl-8" : "justify-end"}
                      `}
                    >
                      {isRight && (
                        <ManufacturingJourneyCard
                          step={index + 1}
                          year={item.year}
                          title={item.title}
                          description={item.desc}
                          align="right"
                        />
                      )}
                    </div>

                    {/* MOBILE CARD */}
                    <div className="md:hidden">
                      <ManufacturingJourneyCard
                        step={index + 1}
                        year={item.year}
                        title={item.title}
                        description={item.desc}
                        align="left"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7. OEM PARTNERS STRIP                                               */}
      {/* ==================================================================== */}
      <section className="py-16 bg-bg border-b border-border">
        <div className="container-px text-center">
          <div className="eyebrow mb-3 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-4 py-1.5 text-xs font-semibold text-[#8B1E2D]">
            <Sparkles className="h-3.5 w-3.5" />
            Approved Contract Partner
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy">
            Trusted Manufacturer For Global Pharma Leaders
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 max-w-4xl mx-auto">
            {CLIENT_PARTNERS.map((partner, i) => (
              <div
                key={i}
                className="px-5 py-3 rounded-xl bg-white border border-border text-sm font-semibold text-navy hover:text-burgundy hover:border-burgundy/40 shadow-xs transition-all"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 8. INTERACTIVE INQUIRY FORM (Contact-Page Style Grid)               */}
      {/* ==================================================================== */}
      <section id="inquiry-form" className="section-py bg-white scroll-mt-24">
        <div className="container-px">
          <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
            {/* LEFT: FORM CARD */}
            <div className="rounded-xl2 border border-border bg-white p-8 md:p-10 shadow-card">
              <div className="eyebrow mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D]">
                <Send className="h-4 w-4" />
                Technical &amp; OEM Inquiry
              </div>

              <h2 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl">
                Request Facility Audit or Manufacturing Quote
              </h2>

              <p className="mt-3 text-sm text-gray leading-relaxed">
                Connect directly with our engineering and plant leadership for contract
                manufacturing, custom tooling, cleanroom inspections, or private labeling.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="font-heading font-bold text-xl text-navy">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-xs text-gray max-w-md mx-auto">
                    Thank you for reaching out to Mecca Healthcare. Our manufacturing technical team
                    will review your specifications and respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses}>Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>Business Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. r.sharma@pharma.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses}>Company / Organization *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="e.g. Apex Healthcare Ltd."
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses}>Inquiry Category</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceType: e.target.value })
                        }
                        className={inputClasses}
                      >
                        <option value="OEM / Contract Manufacturing">
                          OEM / Contract Manufacturing
                        </option>
                        <option value="Loan License Production">
                          Loan License Production
                        </option>
                        <option value="Custom Tooling & Moulding">
                          Custom Tooling &amp; Moulding
                        </option>
                        <option value="Facility Cleanroom Audit">
                          Facility Cleanroom Audit
                        </option>
                        <option value="Global Export Distribution">
                          Global Export Distribution
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClasses}>Target Monthly Volume</label>
                      <select
                        value={formData.volume}
                        onChange={(e) =>
                          setFormData({ ...formData, volume: e.target.value })
                        }
                        className={inputClasses}
                      >
                        <option value="Pilot Batch (< 10,000 units)">
                          Pilot Batch (&lt; 10,000 units)
                        </option>
                        <option value="10,000 – 50,000 units/mo">
                          10,000 – 50,000 units/mo
                        </option>
                        <option value="50,000 – 200,000 units/mo">
                          50,000 – 200,000 units/mo
                        </option>
                        <option value="High Scale (200,000+ units/mo)">
                          High Scale (200,000+ units/mo)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Preferred Plant Evaluation</label>
                    <select
                      value={formData.targetPlant}
                      onChange={(e) =>
                        setFormData({ ...formData, targetPlant: e.target.value })
                      }
                      className={inputClasses}
                    >
                      <option value="Any / Technical Evaluation">
                        Any / Technical Evaluation
                      </option>
                      <option value="Unit 1 — Kalol (PVC Extrusion & ETO Hub)">
                        Unit 1 — Kalol (PVC Extrusion &amp; ETO Hub)
                      </option>
                      <option value="Unit 2 — Chattral (Precision Moulding)">
                        Unit 2 — Chattral (Precision Moulding)
                      </option>
                      <option value="Unit 3 — Boranada Jodhpur (Mega Export Plant)">
                        Unit 3 — Boranada Jodhpur (Mega Export Plant)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClasses}>
                      Manufacturing Requirements / Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Specify target products, polymer grades, regulatory standards (CDSCO, CE, WHO-GMP), or testing protocols..."
                      className={inputClasses}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-burgundy-gradient text-white font-semibold text-sm shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="h-4 w-4 text-white" />
                    <span>Submit Manufacturing Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT: SIDEBAR CARD */}
            <div className="space-y-6">
              {/* Technical Desk Card */}
              <div className="rounded-xl2 border border-border bg-white p-7 shadow-card">
                <div className="eyebrow mb-3 inline-flex items-center gap-2 text-xs font-semibold text-[#8B1E2D]">
                  <Phone className="h-4 w-4" />
                  Direct Plant Contact
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">
                  Engineering &amp; Audit Desk
                </h3>
                <p className="mt-2 text-xs text-gray leading-relaxed">
                  Discuss project timelines, technical drawing feasibility, or mold tooling directly
                  with plant heads.
                </p>

                <div className="mt-6 space-y-3.5 text-xs text-navy">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-border">
                    <Mail className="h-4 w-4 text-burgundy shrink-0" />
                    <div>
                      <div className="text-[11px] text-gray">Technical Inquiries</div>
                      <a
                        href="mailto:contact@mhplindia.com"
                        className="font-semibold text-medblue hover:underline"
                      >
                        contact@mhplindia.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-border">
                    <Phone className="h-4 w-4 text-burgundy shrink-0" />
                    <div>
                      <div className="text-[11px] text-gray">Direct Plant Hotline</div>
                      <a
                        href="tel:+912764221020"
                        className="font-semibold text-medblue hover:underline"
                      >
                        +91 2764 221020
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-border">
                    <Clock className="h-4 w-4 text-burgundy shrink-0" />
                    <div>
                      <div className="text-[11px] text-gray">Operating Hours</div>
                      <div className="font-semibold text-navy">
                        Mon–Sat, 9:00 AM – 6:30 PM IST
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plant Locations Quick List */}
              <div className="rounded-xl2 border border-border bg-white p-7 shadow-card">
                <h4 className="font-heading text-base font-bold text-navy mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-burgundy" />
                  <span>Licensed Production Units</span>
                </h4>
                <div className="space-y-3 text-xs text-gray">
                  <div className="pb-3 border-b border-border/80">
                    <div className="font-bold text-navy">Unit 1 — Kalol, Gandhinagar</div>
                    <div className="text-[11px] mt-0.5">
                      99-102 GIDC, Kalol, Gujarat 382725
                    </div>
                  </div>
                  <div className="pb-3 border-b border-border/80">
                    <div className="font-bold text-navy">Unit 2 — Chattral, Mehsana</div>
                    <div className="text-[11px] mt-0.5">
                      L-1202 GIDC, Chattral, Gujarat 382729
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-navy">Unit 3 — Boranada, Jodhpur</div>
                    <div className="text-[11px] mt-0.5">
                      F-252 Phase 3, RIICO, Boranada, Rajasthan 342012
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications Badge Card */}
              <div className="rounded-xl2 border border-border bg-navy-gradient text-white p-7 shadow-card">
                <div className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                  Audit Ready
                </div>
                <h4 className="font-heading text-lg font-bold text-white mb-4">
                  Accredited Compliance
                </h4>

                <div className="grid grid-cols-2 gap-2.5">
                  {CERTIFICATIONS.map((cert, idx) => {
                    const Icon = cert.icon;
                    return (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm"
                      >
                        <Icon className="h-4 w-4 text-accent mb-1" />
                        <div className="text-xs font-bold text-white">{cert.code}</div>
                        <div className="text-[10px] text-white/70">{cert.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 9. FINAL CTA                                                        */}
      {/* ==================================================================== */}
      <FinalCTA />

      {/* ==================================================================== */}
      {/* 10. FOOTER                                                          */}
      {/* ==================================================================== */}
      <Footer />
    </main>
  );
}
