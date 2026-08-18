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
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    image: "/Cleanrrom.jpg",
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
    image: "/Cleanrrom.jpg",
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
    image: "/Cleanrrom.jpg",
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
    image: "/Cleanrrom.jpg",
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
    image: "/Cleanrrom.jpg",
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
    image: "/Cleanrrom.jpg",
  },
];

const MANUFACTURING_PLANTS = [
  {
    id: "kalol",
    name: "Kalol Manufacturing Hub",
    location: "GIDC, Kalol (N.G.), Gandhinagar, Gujarat",
    established: "1986",
    focus: "PVC Extrusion, Drip Chamber Moulding & ETO Sterilization",
    highlights: [
      "FDCA Drug Manufacturing License since 1990",
      "In-house automated ETO Sterilization chambers",
      "Specialized high-speed PVC tube extrusion lines",
      "WHO-GMP compliant Class 10,000 cleanrooms",
    ],
    area: "35,000 sq. ft.",
  },
  {
    id: "chhattral",
    name: "Chhattral Component Plant",
    location: "GIDC Industrial Estate, Mehsana, Gujarat",
    established: "1987",
    focus: "High-Cavity Moulding & Assembly Components",
    highlights: [
      "Automated injection moulding with robotic handlers",
      "Medical-grade polycarbonate & PP component tooling",
      "Sub-assembly lines for fluid administration sets",
      "Continuous inline optical vision QA inspection",
    ],
    area: "28,000 sq. ft.",
  },
  {
    id: "jodhpur",
    name: "Boranada Mega Facility",
    location: "RIICO Industrial Area, Boranada, Jodhpur, Rajasthan",
    established: "2008",
    focus: "Integrated Mega-Production, OEM & Global Export Hub",
    highlights: [
      "State-of-the-art expanded cleanroom complex",
      "High-volume OEM & Loan License contract production",
      "Advanced packaging, warehousing & logistics bay",
      "TÜV SÜD European CE Mark (0123) certified lines",
    ],
    area: "65,000 sq. ft.",
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
    title: "FDCA License & Core Healthcare Partner",
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
    title: "Loan License Partner to Pharma Leaders",
    desc: "Became premier OEM partner for Cipla, Fresenius Kabi, Wockhardt, Intas, Torrent, Sutures India, and Albert David.",
  },
  {
    year: "2006",
    title: "European CE Marking (DNV Norway)",
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

/* -------------------------------------------------------------------------- */
/*                              PAGE COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function ManufacturingPage() {
  const [activeProcess, setActiveProcess] = useState("compounding");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "OEM / Contract Manufacturing",
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
        message: "",
      });
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-white text-slate-800 selection:bg-[#8B1E2D] selection:text-white">
      <Header />

      {/* -------------------------------------------------------------------- */}
      {/* 1. HERO SECTION (White / Slate Light Design)                        */}
      {/* -------------------------------------------------------------------- */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200/80 overflow-hidden">
        {/* Soft Decorative Ambient Circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#03C4EB]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-px relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy/10 border border-burgundy/20 mb-6 text-xs md:text-sm font-semibold tracking-wide text-[#8B1E2D]"
            >
              <Factory className="w-4 h-4 text-[#8B1E2D]" />
              <span>World-Class Medical Device Manufacturing Facilities Since 1977</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15]"
            >
              Under-One-Roof Medical Device <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#8B1E2D] via-[#A82D3E] to-[#0A2540] bg-clip-text text-transparent">
                Manufacturing & Cleanroom Excellence
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              From raw polymer compounding to sterile, high-precision infusion, transfusion, and catheter devices. Fully integrated ISO Class 7 (Class 10,000) cleanrooms, automated ETO sterilization, and 45+ years of trusted engineering.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#process"
                className="px-8 py-3.5 rounded-full bg-burgundy-gradient text-white font-semibold text-sm shadow-md shadow-burgundy/20 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <span>Explore Workflow</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#inquiry"
                className="px-8 py-3.5 rounded-full bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-200 transition-all flex items-center gap-2"
              >
                <span>Request OEM Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#8B1E2D]" />
              </a>
            </motion.div>
          </div>

          {/* Quick Stat Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {[
              { label: "Manufacturing Legacy", val: "45+ Years", sub: "Est. 1977" },
              { label: "Cleanroom Standard", val: "Class 10,000", sub: "ISO Class 7" },
              { label: "Production Facilities", val: "3 Plants", sub: "Gujarat & Rajasthan" },
              { label: "Annual Scale", val: "100M+ Units", sub: "Global Reach" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#8B1E2D]">
                  {stat.val}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 2. UNDER-ONE-ROOF WORKFLOW SECTION                                  */}
      {/* -------------------------------------------------------------------- */}
      <section id="process" className="py-24 bg-white relative">
        <div className="container-px">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="eyebrow mb-3 !text-[#8B1E2D] inline-flex items-center gap-1 rounded-full border border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <Boxes className="w-3.5 h-3.5 text-[#8B1E2D]" />
              End-to-End Vertical Integration
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900">
              Under-One-Roof Manufacturing Workflow
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              Every production stage — from raw polymer compounding to final sterile device dispatch — is conducted entirely within our integrated facilities under total process control.
            </p>
          </div>

          {/* Interactive Steps Navigation Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = activeProcess === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveProcess(step.id)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? "bg-burgundy-gradient text-white border-transparent shadow-md shadow-burgundy/20 scale-[1.02]"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold font-heading px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-white text-[#8B1E2D]"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {step.step}
                    </span>
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? "text-white" : "text-slate-500"
                      }`}
                    />
                  </div>
                  <div
                    className={`text-xs font-semibold line-clamp-2 ${
                      isActive ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProcessObj.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-slate-50 border border-slate-200 p-6 md:p-10 shadow-sm grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Specs & Overview */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-burgundy-gradient flex items-center justify-center font-heading font-extrabold text-white text-sm shadow">
                    {selectedProcessObj.step}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900">
                      {selectedProcessObj.name}
                    </h3>
                    <p className="text-xs text-[#8B1E2D] font-semibold mt-0.5">
                      {selectedProcessObj.short}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {selectedProcessObj.desc}
                </p>

                {/* Tech Specs Checklist */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Technical Capabilities & Controls
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProcessObj.techSpecs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-slate-700 leading-snug">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual / Cleanroom Image */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3] group shadow-md">
                <Image
                  src={selectedProcessObj.image}
                  alt={selectedProcessObj.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#8B1E2D]" />
                    <span>WHO-GMP & Class 10,000 Certified Environment</span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-1">
                    Continuous environmental monitoring & automated process control.
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 3. CLEANROOM & FACILITY ENGINEERING STANDARDS                        */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/80 relative">
        <div className="container-px">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="eyebrow !text-[#8B1E2D] inline-flex items-center gap-1 rounded-full border border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5 text-[#8B1E2D]" />
                Cleanroom Infrastructure
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Class 10,000 (ISO Class 7) Controlled Environment
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Mecca Healthcare operates WHO-GMP compliant manufacturing premises featuring Class 10,000 cleanrooms. Air purity is rigorously maintained via custom-engineered Air Handling Units (AHU) with multi-stage particulate filtration.
              </p>

              {/* AHU Air Filtration Spec Box */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-heading font-semibold text-sm text-slate-900 flex items-center gap-2">
                  <Wind className="w-4 h-4 text-[#8B1E2D]" />
                  <span>3-Tier Air Filtration Architecture (AHU)</span>
                </h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-bold text-[#8B1E2D]">20 µm</div>
                    <div className="text-[11px] text-slate-500">Pre-Filter Stage</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-bold text-[#8B1E2D]">5 µm</div>
                    <div className="text-[11px] text-slate-500">Secondary Filter</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-bold text-[#8B1E2D]">0.3 µm</div>
                    <div className="text-[11px] text-slate-500">HEPA Filter (99.97%)</div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "Positive room pressure prevents airborne contaminants from entering cleanroom zones",
                  "Automated computer-operated assembly lines reduce direct human touch points",
                  "Microbiological bioburden & particle count monitored every shift",
                  "In-house automated ETO Sterilization chambers with complete cycle validation logs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Box */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 aspect-[4/3] shadow-xl">
                <Image
                  src="/Cleanrrom.jpg"
                  alt="Class 10000 Medical Cleanroom Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#8B1E2D] font-bold uppercase tracking-wider">
                        Facility Certification
                      </div>
                      <div className="text-lg font-bold text-slate-900 font-heading mt-0.5">
                        WHO-GMP & ISO 13485:2016 Compliant
                      </div>
                    </div>
                    <Award className="w-8 h-8 text-[#8B1E2D]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 4. QUALITY CONTROL & QMS POLICY SECTION                             */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-24 bg-white relative">
        <div className="container-px">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="eyebrow mb-3 !text-[#8B1E2D] inline-flex items-center gap-1 rounded-full border border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <FileCheck className="w-3.5 h-3.5 text-[#8B1E2D]" />
              Quality Assurance System
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900">
              Total Quality Management (QMS)
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              "For us, Quality Assurance is a concept that begins before any product is produced, is present during all phases of production, and continues until final testing and QC release."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#8B1E2D]/40 hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-burgundy-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Quality Objectives Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-[#0A2540] text-white border border-slate-200 shadow-xl grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="text-xs font-bold text-[#03C4EB] uppercase tracking-wider">
                ISO 13485:2016 & ISO 9001:2015 Objectives
              </div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-white">
                Zero Defect Target & Continuous Process Optimization
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Our quality objectives focus on eliminating part-to-part variation, eradicating process waste, and maintaining strict regulatory compliance across all CDSCO MDR 2017 & European CE Mark standards.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <a
                href="/certifications"
                className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-xs hover:bg-[#03C4EB] hover:text-black transition-colors flex items-center gap-2 shadow-lg"
              >
                <span>View Certifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 5. MANUFACTURING UNITS & PLANTS SHOWCASE                            */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/80 relative">
        <div className="container-px">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="eyebrow mb-3 !text-[#8B1E2D] inline-flex items-center gap-1 rounded-full border border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#8B1E2D]" />
              Production Hubs
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900">
              Our 3 State-of-the-Art Manufacturing Plants
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              Strategically located across industrial hubs in Gujarat and Rajasthan to serve domestic healthcare state tenders and international global markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MANUFACTURING_PLANTS.map((plant) => (
              <div
                key={plant.id}
                className="rounded-3xl bg-white border border-slate-200 shadow-sm p-7 flex flex-col justify-between hover:border-[#8B1E2D]/40 hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-burgundy/10 border border-burgundy/20 text-[#8B1E2D] text-xs font-semibold">
                      Est. {plant.established}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {plant.area}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-[#8B1E2D] transition-colors">
                    {plant.name}
                  </h3>

                  <div className="flex items-start gap-2 text-xs text-slate-600 mb-4">
                    <MapPin className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>{plant.location}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#8B1E2D] font-medium mb-6">
                    Focus: {plant.focus}
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {plant.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>WHO-GMP Compliant</span>
                  <ShieldCheck className="w-4 h-4 text-[#8B1E2D]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 6. HISTORICAL MILESTONES TIMELINE                                   */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-24 bg-white relative">
        <div className="container-px">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="eyebrow mb-3 !text-[#8B1E2D] inline-flex items-center gap-1 rounded-full border border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#8B1E2D]" />
              Pioneering History
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900">
              45+ Years Manufacturing Journey
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              From engineering metal aircraft rivets in 1972 to manufacturing millions of sterile IV sets & medical devices daily.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#8B1E2D] via-slate-300 to-transparent -translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {MILESTONES.map((m, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={m.year + i}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Card */}
                    <div className="w-full md:w-1/2 md:px-8">
                      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors shadow-sm">
                        <div className="inline-block px-3 py-1 rounded-full bg-burgundy-gradient text-white font-heading font-bold text-xs mb-3 shadow">
                          {m.year}
                        </div>
                        <h3 className="font-heading font-bold text-lg text-slate-900 mb-1">
                          {m.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node Dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#8B1E2D] items-center justify-center shadow-md">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#8B1E2D]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 7. OEM PARTNERS & GLOBAL TRUST                                      */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container-px text-center">
          <div className="eyebrow mb-3 !text-[#8B1E2D] inline-flex items-center gap-1 rounded-full border border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#8B1E2D]" />
            OEM & Loan License Partners
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
            Trusted Contract Manufacturer For Global Pharma Leaders
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
            {CLIENT_PARTNERS.map((partner, i) => (
              <div
                key={i}
                className="px-6 py-3.5 rounded-2xl bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:text-[#8B1E2D] hover:border-[#8B1E2D] shadow-sm transition-all"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 8. INTERACTIVE MANUFACTURING & OEM INQUIRY FORM                      */}
      {/* -------------------------------------------------------------------- */}
      <section id="inquiry" className="py-24 bg-white relative">
        <div className="container-px">
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 border border-slate-200/90 p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <div className="eyebrow mb-3 !text-[#8B1E2D] inline-flex items-center gap-1 rounded-full border border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                <Send className="w-3.5 h-3.5 text-[#8B1E2D]" />
                Contract Manufacturing & OEM Inquiry
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">
                Request Facility Audit or Manufacturing Quote
              </h2>
              <p className="mt-3 text-xs md:text-sm text-slate-600">
                Interested in Loan License manufacturing, private labeling, or visiting our cleanroom facilities in Gujarat & Rajasthan? Connect directly with our engineering team.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-green-500/10 border border-green-500/30 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  Inquiry Received Successfully!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Mecca Healthcare. Our manufacturing technical team will review your requirements and respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8B1E2D] focus:ring-2 focus:ring-burgundy/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. r.sharma@pharma.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8B1E2D] focus:ring-2 focus:ring-burgundy/10 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="e.g. Apex Healthcare Ltd."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8B1E2D] focus:ring-2 focus:ring-burgundy/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8B1E2D] focus:ring-2 focus:ring-burgundy/10 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Inquiry Category
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceType: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#8B1E2D] focus:ring-2 focus:ring-burgundy/10 transition-colors"
                  >
                    <option value="OEM / Contract Manufacturing">
                      OEM / Contract Manufacturing
                    </option>
                    <option value="Loan License Production">
                      Loan License Production
                    </option>
                    <option value="Custom Tooling & Moulding">
                      Custom Tooling & Moulding
                    </option>
                    <option value="Facility Audit Request">
                      Facility Audit Request
                    </option>
                    <option value="Global Export Distribution">
                      Global Export Distribution
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Manufacturing Requirements / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe target products, estimated monthly volume, technical specs, or required certifications..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8B1E2D] focus:ring-2 focus:ring-burgundy/10 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-burgundy-gradient text-white font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Submit Manufacturing Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
