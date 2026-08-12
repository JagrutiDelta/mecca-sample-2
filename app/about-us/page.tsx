"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Lightbulb,
  Award,
  Scale,
  Handshake,
  HeartPulse,
  Blend,
  Layers,
  ArrowRightFromLine,
  Syringe,
  ShieldCheck,
  Wind,
  Package,
  Factory,
  Clock,
  Workflow,
  BadgeCheck,
  Globe2,
  ImageIcon,
  FileText,
  Download,
  X
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ---------------------------------- Data ---------------------------------- */

const PRODUCT_CATEGORIES = [
  "Nephrology Products",
  "Hemodialysis Catheters",
  "Central Venous Catheters",
  "Dial Flow Regulators",
  "OEM / Contract Manufacturing",
  "Other",
];

const TIMELINE = [
  { year: "1977", desc: "Mecca Industries enters the medical-device manufacturing space." },
  { year: "1986", desc: "Expansion into contract manufacturing." },
  { year: "1987", desc: "In-house medical-grade PVC tubing extrusion and plastic injection molding introduced." },
  { year: "1990", desc: "Drugs manufacturing license obtained from FDCA Gujarat." },
  { year: "1991", desc: "Exports begin to South East Asia and East Africa." },
  { year: "1996", desc: "WHO-GMP certification achieved." },
  { year: "2000–2002", desc: "Annual rate contracts secured with state governments." },
  { year: "2006", desc: "European CE Mark certification through DNV Norway." },
  { year: "2008", desc: "State-of-the-art manufacturing plant opened in Boranada, Jodhpur." },
  { year: "2011", desc: "Supply relationship with B. Braun India begins." },
];

const VALUES = [
  { icon: Lightbulb, title: "Innovation", desc: "Continuously improving products, processes and manufacturing capabilities." },
  { icon: Award, title: "Quality", desc: "Maintaining rigorous quality systems to support safe and reliable healthcare products." },
  { icon: Scale, title: "Integrity", desc: "Building relationships through transparency, responsibility and consistency." },
  { icon: Handshake, title: "Partnership", desc: "Working alongside OEMs, distributors and healthcare organizations for long-term success." },
  { icon: HeartPulse, title: "Care", desc: "Keeping patient safety and healthcare needs at the heart of what we do." },
];

const CAPABILITIES = [
  { icon: Blend, name: "Plastic Compounding", desc: "Controlled preparation of medical-grade materials" },
  { icon: Layers, name: "Granulation", desc: "Material processing for production" },
  { icon: ArrowRightFromLine, name: "PVC Tube Extrusion", desc: "In-house medical-grade PVC tubing" },
  { icon: Syringe, name: "Injection Molding", desc: "Precision component manufacturing" },
  { icon: ShieldCheck, name: "Cleanroom Assembly", desc: "Controlled medical-device assembly" },
  { icon: Wind, name: "ETO Sterilization", desc: "Ethylene oxide sterilization" },
  { icon: Package, name: "Final Packaging", desc: "Controlled product packaging" },
];

const CERTS = [
  {
    title: "ISO 9001:2015",
    description: "Ensuring Consistent Quality & Excellence",
    icon: Award,
  },
  {
    title: "ISO 13485:2016",
    description: "Quality Standards for Medical Devices",
    icon: Globe2,
  },
  {
    title: "WHO–GMP",
    description: "Compliant Manufacturing for Global Standards",
    icon: HeartPulse,
  },
  {
    title: "CE Mark",
    description: "Meeting European Safety & Quality Standards",
    icon: BadgeCheck,
  },
];

const LOCATIONS = [
  { name: "Kalol, Gujarat", area: "GIDC, Gandhinagar" },
  { name: "Chattral, Gujarat", area: "GIDC, Mehsana" },
  { name: "Boranada, Rajasthan", area: "RIICO Industrial Area, Jodhpur" },
];

const REGIONS = ["CIS Countries", "Middle East", "South East Asia", "Africa", "Latin America"];

const WHY_PARTNER = [
  { icon: Clock, title: "Decades of Experience", desc: "A long-standing presence in medical-device manufacturing." },
  { icon: Workflow, title: "End-to-End Manufacturing", desc: "In-house capabilities from material processing through final packaging." },
  { icon: BadgeCheck, title: "Certified Quality", desc: "ISO, WHO-GMP and CE-related compliance credentials." },
  { icon: Handshake, title: "OEM Partnership", desc: "Contract manufacturing and OEM supply capabilities for business partners." },
];

const CATALOGUES = [
  {
    title: "Product List 2026",
    desc: "Complete range of Mecca Healthcare products",
    file: "/catalogues/product-list-2026.pdf",
  },
  {
    title: "MHPL Catalogue 2026",
    desc: "Comprehensive product catalogue and specifications",
    file: "/catalogues/mhpl-catalogue-2026.pdf",
  },
  {
    title: "Nephrology Products 2026",
    desc: "Complete range of nephrology care solutions",
    file: "/catalogues/nephrology-products-2026.pdf",
  },
  {
    title: "Hemodialysis Catheter Kit",
    desc: "Essential solutions for hemodialysis procedures",
    file: "/catalogues/hemodialysis-catheter-kit-flier.pdf",
  },
  {
    title: "LifeGuard Dial Flow Regulators",
    desc: "Precision flow control for clinical applications",
    file: "/catalogues/lifeguard-dial-flow-regulators.pdf",
  },
  {
    title: "Central Venous Catheter Kit",
    desc: "Reliable access solutions for critical care",
    file: "/catalogues/central-venous-catheter-kit-details.pdf",
  },
  {
    title: "Product Category List (CDSCO)",
    desc: "Comprehensive CDSCO product category reference",
    file: "/catalogues/product-category-list-cdsco.pdf",
  },
  {
    title: "NFC & Drug Delivery Range",
    desc: "Specialized solutions for drug delivery applications",
    file: "/catalogues/catalogue-nfc-drug-delivery-range.pdf",
  },
];

/* ------------------------------- Small parts ------------------------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">
      {children}
    </div>
  );
}

function PlaceholderPanel({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div
      className={`rounded-xl2 border border-border bg-border/40 flex flex-col items-center justify-center gap-3 text-center px-8 ${
        tall ? "h-[420px]" : "h-[340px]"
      }`}
    >
      <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-card">
        <ImageIcon className="w-5 h-5 text-gray" />
      </div>
      <p className="text-xs text-gray max-w-[240px]">{label}</p>
    </div>
  );
}

function JourneyCard({
  step,
  year,
  description,
  align = "left",
}: {
  step: number;
  year: string;
  description: string;
  align?: "left" | "right";
}) {
  const stepNumber = String(step).padStart(2, "0");

  return (
    <div className="group relative w-full max-w-[340px] overflow-hidden rounded-[18px] bg-white shadow-[0_10px_35px_rgba(15,39,64,0.08)]">

      {/* LEFT STEP PANEL */}
      <div className="absolute inset-y-0 left-0 w-[72px] bg-[#F7F7F7]">

        {/* Circle */}
        <div className="absolute left-[8px] top-1/2 flex h-[56px] w-[56px] -translate-y-1/2 items-center justify-center rounded-full border border-burgundy bg-white">
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
      <div className="relative ml-[72px] min-h-[235px] px-5 pb-9 pt-6">

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
        <div className="pt-[43px]">

          {/* Accent */}
          <div className="mb-4 h-[3px] w-[35px] bg-burgundy" />

          {/* YEAR */}
          <h3 className="font-heading text-[37px] font-extrabold leading-none tracking-[-0.04em] text-navy">
            {year}
          </h3>

          {/* Dots */}
          <div className="mt-3 flex items-center gap-2">
            <span className="h-[4px] w-[4px] rounded-full bg-gray" />
            <span className="h-[4px] w-[4px] rounded-full bg-gray" />
            <span className="h-[4px] w-[4px] rounded-full bg-gray" />
            <span className="h-[4px] w-[4px] rounded-full bg-gray" />
            <span className="h-[7px] w-[7px] rounded-full bg-burgundy" />
          </div>

          {/* Description */}
          <p className="mt-3 max-w-[220px] text-[12px] leading-5 text-gray">
            {description}
          </p>

          {/* Dot Grid */}
          <div className="mt-5 grid w-[80px] grid-cols-8 gap-[5px] opacity-60">
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

      {/* BOTTOM BURGUNDY BAR */}
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

/* ---------------------------------- Page ---------------------------------- */

export default function AboutPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsQuoteModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isQuoteModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isQuoteModalOpen]);

  return (
    
    <main className="overflow-x-hidden">
      <Header />

      {/* 01 — Hero */}
<section className="pt-40 pb-24 bg-white">
  <div className="container-px grid lg:grid-cols-2 gap-14 items-center">

    <div>
      <Eyebrow>About Mecca Healthcare</Eyebrow>

      <h1 className="font-heading font-extrabold text-navy text-5xl md:text-6xl lg:text-[50px] leading-[0.95] tracking-[-0.03em]">
        Decades of Experience. 
        <br />
        <span className="text-burgundy">
          Built Around Care,
          <br />
          <span className="text-medblue"> Quality &amp; Trust.</span>
        
        </span>
      </h1>

      <p className="mt-7 text-gray leading-relaxed max-w-lg">
        Mecca Healthcare is an Indian medical-device manufacturer delivering
        reliable healthcare solutions through advanced manufacturing, OEM
        partnerships and a commitment to quality and patient safety.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#manufacturing-excellence"
          className="inline-flex items-center rounded-full bg-burgundy-gradient text-white text-sm font-semibold px-6 py-3 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
        >
          Explore Our Capabilities →
        </a>

        <a
          href="/#contact"
          className="text-sm font-semibold text-navy hover:text-burgundy transition-colors"
        >
          Talk to Our Team
        </a>
      </div>
    </div>

   <div className="relative h-full min-h-[420px] overflow-hidden rounded-xl2">
  <img
    src="/Cleanrrom.jpg"
    alt="Mecca Healthcare manufacturing facility"
    className="h-full w-full object-cover"
  />
</div>

  </div>
</section>

      {/* 02 — Company Introduction */}
<section className="relative overflow-hidden bg-[#F8FAFC] py-20 lg:py-28">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">

      {/* =========================================================
          LEFT — COMPANY INTRODUCTION
      ========================================================== */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >

        {/* Small Label */}
        <div className="mb-5 flex items-center gap-3">
      

          <span className="eyebrow mb-6 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">
            Who We Are
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0D2240] sm:text-5xl lg:text-[52px]">
          Built on Experience.
          <br />

          <span className="text-[#8B1E2D]">
            Driven by Healthcare.
          </span>
        </h2>

        {/* Decorative line */}
        <div className="mt-7 flex items-center gap-2">
          <span className="h-[2px] w-14 bg-[#8B1E2D]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#8B1E2D]" />
        </div>

        {/* Description */}
        <div className="mt-7 max-w-xl space-y-5 text-[15px] leading-7 text-slate-600">

          <p>
            Established in 1977, Mecca Healthcare has grown from an Indian
            medical-device manufacturing business into a trusted partner for
            healthcare organizations, distributors and OEM customers.
          </p>

          <p>
            The company specializes in contract manufacturing and OEM supply,
            combining in-house manufacturing capabilities with quality-focused
            processes to deliver dependable medical products at scale.
          </p>

        </div>


        {/* =========================================================
            FEATURE ITEMS
        ========================================================== */}
        <div className="mt-10 grid grid-cols-3 border-t border-slate-200 pt-7">

          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="pr-4"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#8B1E2D]/10">
              <svg
                className="h-5 w-5 text-[#8B1E2D]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4"
                />
              </svg>
            </div>

            <h3 className="text-xs font-bold text-[#0D2240] sm:text-sm">
              Trusted Partner
            </h3>

            <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
              Decades of trust from global healthcare brands
            </p>
          </motion.div>


          {/* Divider */}
          <div className="border-l border-slate-200 pl-4 sm:pl-6">

            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#8B1E2D]/10">
              <svg
                className="h-5 w-5 text-[#8B1E2D]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21h18"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 21V8h5v4h4V5h5v16"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 11h1M8 15h1M14 9h1M14 13h1"
                />
              </svg>
            </div>

            <h3 className="text-xs font-bold text-[#0D2240] sm:text-sm">
              In-House Excellence
            </h3>

            <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
              Advanced manufacturing capabilities under one roof
            </p>
          </div>


          {/* Divider + Feature 3 */}
          <div className="border-l border-slate-200 pl-4 sm:pl-6">

            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#8B1E2D]/10">
              <svg
                className="h-5 w-5 text-[#8B1E2D]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="8" r="4" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12l-2 9 6-3 6 3-2-9"
                />
              </svg>
            </div>

            <h3 className="text-xs font-bold text-[#0D2240] sm:text-sm">
              Quality Focused
            </h3>

            <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
              Commitment to quality, consistency & compliance
            </p>
          </div>

        </div>
      </motion.div>


      {/* =========================================================
          RIGHT — STATISTICS VISUAL
      ========================================================== */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[520px] lg:min-h-[560px]"
      >

        {/* Background world/map style decoration */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-full overflow-hidden rounded-[28px]">

          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage: `
                radial-gradient(#0D2240 1px, transparent 1px)
              `,
              backgroundSize: "7px 7px",
              maskImage:
                "radial-gradient(circle at 70% 20%, black, transparent 60%)",
              WebkitMaskImage:
                "radial-gradient(circle at 70% 20%, black, transparent 60%)",
            }}
          />

          {/* Large decorative circle */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#8B1E2D]/10" />

          <div className="absolute -right-10 top-5 h-52 w-52 rounded-full border border-[#0D2240]/10" />

        </div>


        {/* =====================================================
            TOP WHITE INFORMATION CARD
        ====================================================== */}
        <div className="absolute right-0 top-10 w-[72%] rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_15px_45px_rgba(13,34,64,0.08)]">

          <div className="flex items-center gap-5">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8B1E2D] text-white shadow-lg">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <rect
                  x="4"
                  y="5"
                  width="16"
                  height="15"
                  rx="2"
                />
                <path d="M8 3v4M16 3v4M4 10h16" />
                <path d="M12 13v4M10 15h4" />
              </svg>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Our Journey
              </div>

              <div className="mt-1 text-sm font-semibold text-[#0D2240]">
                Building trust since 1977
              </div>
            </div>

          </div>
        </div>


        {/* =====================================================
            1977 HEXAGON
        ====================================================== */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="absolute left-[12%] top-[12%] z-20"
        >

          <div className="relative flex h-[155px] w-[135px] items-center justify-center">

            {/* Hexagon */}
            <div
              className="absolute inset-0 bg-[#8B1E2D]"
              style={{
                clipPath:
                  "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
              }}
            />

            <div className="relative z-10 text-center text-white">

              <svg
                className="mx-auto mb-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <rect
                  x="4"
                  y="5"
                  width="16"
                  height="15"
                  rx="2"
                />
                <path d="M8 3v4M16 3v4M4 10h16" />
              </svg>

              <div className="font-heading text-3xl font-extrabold">
                1977
              </div>

              <div className="mt-1 text-[7px] font-semibold uppercase tracking-[0.2em] text-white/80">
                Established
              </div>

            </div>
          </div>
        </motion.div>


        {/* =====================================================
            TOP CONNECTING LINE
        ====================================================== */}
        <div className="absolute left-[30%] top-[30%] z-10 h-px w-[38%] bg-slate-300" />

        <div className="absolute left-[48%] top-[28.5%] z-30 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#F8FAFC] bg-[#8B1E2D] text-xs font-bold text-white">
          +
        </div>


        {/* =====================================================
            BOTTOM WHITE INFORMATION CARD
        ====================================================== */}
        <div className="absolute bottom-10 right-0 w-[72%] rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_15px_45px_rgba(13,34,64,0.08)]">

          <div className="flex items-center gap-5">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0D2240] text-white shadow-lg">

              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 19V9M10 19V5M16 19v-8M22 19H2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7l6-3 6 3 6-4"
                />
              </svg>

            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Manufacturing Expertise
              </div>

              <div className="mt-1 text-sm font-semibold text-[#0D2240]">
                Nearly five decades of experience
              </div>
            </div>

          </div>
        </div>


        {/* =====================================================
            48+ HEXAGON
        ====================================================== */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="absolute bottom-[11%] left-[12%] z-20"
        >

          <div className="relative flex h-[175px] w-[150px] items-center justify-center">

            {/* Hexagon */}
            <div
              className="absolute inset-0 bg-[#0D2240]"
              style={{
                clipPath:
                  "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
              }}
            />

            <div className="relative z-10 text-center text-white">

              <svg
                className="mx-auto mb-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <path d="M4 19V9M10 19V5M16 19v-8M22 19H2" />
                <path d="M4 7l6-3 6 3 6-4" />
              </svg>

              <div className="font-heading text-4xl font-extrabold">
                48+
              </div>

              <div className="mt-1 max-w-[90px] text-[7px] font-semibold uppercase leading-3 tracking-[0.16em] text-white/75">
                Years of Manufacturing Experience
              </div>

            </div>
          </div>
        </motion.div>


        {/* =====================================================
            BOTTOM CONNECTING LINE
        ====================================================== */}
        <div className="absolute bottom-[31%] left-[30%] z-10 h-px w-[38%] bg-slate-300" />

        <div className="absolute bottom-[29.5%] left-[48%] z-30 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#F8FAFC] bg-[#0D2240] text-xs font-bold text-white">
          +
        </div>


        {/* Decorative vertical line */}
        <div className="absolute left-[18%] top-[31%] h-[28%] w-px bg-gradient-to-b from-[#8B1E2D] via-slate-200 to-[#0D2240]" />

      </motion.div>

    </div>
  </div>
</section>

 {/* 03 — Our Journey */}
<section className="relative overflow-hidden bg-bg py-24 md:py-32">
  {/* Soft background decoration */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
    <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-burgundy/5 blur-3xl" />
    <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />
  </div>

  <div className="container-px relative">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-20 max-w-2xl text-center"
    >
      <Eyebrow>Our Journey</Eyebrow>

      <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-navy md:text-5xl">
        Decades of Progress.
        <br />
        <span className="text-burgundy">
          Built on Trust.
        </span>
      </h2>

      <p className="mt-5 text-sm leading-7 text-gray md:text-base">
        From our beginnings in 1977 to becoming a trusted medical-device
        manufacturing partner, every milestone reflects our commitment to
        quality, innovation and healthcare.
      </p>
    </motion.div>


    {/* Journey Timeline */}
    <div className="relative mx-auto max-w-5xl">

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

        {TIMELINE.map((item, index) => {
          const isRight = index % 2 === 0;

          return (
            <motion.div
              key={item.year}
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
                delay: index * 0.08,
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
                    border-bg
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
                  ${isRight ? "justify-end pr-8" : "justify-start"}
                `}
              >
                {!isRight && (
                  <JourneyCard
                    step={index + 1}
                    year={item.year}
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
                    border-bg
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
                  <JourneyCard
                    step={index + 1}
                    year={item.year}
                    description={item.desc}
                    align="right"
                  />
                )}
              </div>


              {/* MOBILE CARD */}
              <div className="md:hidden">
                <JourneyCard
                  step={index + 1}
                  year={item.year}
                  description={item.desc}
                  align="left"
                />
              </div>

            </motion.div>
          );
        })}

      </div>
    </div>


    {/* Bottom statement */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mt-20 max-w-xl text-center"
    >
      <div className="inline-flex items-center gap-3 rounded-full border border-burgundy/10 bg-white px-5 py-3 shadow-sm">
        <div className="h-2 w-2 rounded-full bg-burgundy" />

        <span className="text-xs font-semibold tracking-[0.12em] text-navy">
          CONTINUOUSLY MOVING FORWARD
        </span>

        <div className="h-2 w-2 rounded-full bg-burgundy" />
      </div>
    </motion.div>

  </div>
</section>

      {/* 04 — What We Stand For */}
      <section className="section-py bg-bg">
        <div className="container-px">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Eyebrow>Our Values</Eyebrow>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">What We Stand For</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-xl2 bg-white border border-border p-6 text-center hover:shadow-soft hover:border-transparent transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-navy/5 group-hover:bg-burgundy-gradient flex items-center justify-center transition-colors duration-300">
                  <v.icon className="w-5 h-5 text-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="font-heading font-semibold text-navy mt-4">{v.title}</div>
                <p className="text-xs text-gray mt-2 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Manufacturing Excellence */}
      <section id="manufacturing-excellence" className="section-py bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.04]" />
        <div className="container-px relative">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-4 !text-accent inline-flex items-center gap-1 rounded-full border border-[#f3f4ff]/15 bg-[#dde6ff]/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
              Capabilities
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl">
              Manufacturing Excellence, From Inside Out
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Our integrated manufacturing infrastructure enables greater control over materials,
              production, sterilization and final packaging — helping us maintain consistency
              across large-scale production.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAPABILITIES.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-xl2 bg-white/5 border border-white/10 backdrop-blur p-6 transition-colors duration-300 hover:bg-white/[0.08] hover:border-white/20"
              >
                <div className="w-11 h-11 rounded-full bg-burgundy-gradient flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                </div>
                <div className="font-heading font-semibold mt-4">{c.name}</div>
                <p className="text-xs text-white/60 mt-1.5 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Quality & Certifications */}
<section className="relative bg-white py-20 overflow-hidden">
  {/* Very subtle background decoration */}
  <div className="absolute left-0 top-20 w-40 h-40 rounded-full bg-burgundy/[0.02] blur-3xl pointer-events-none" />
  <div className="absolute right-0 bottom-0 w-72 h-72 rounded-full bg-navy/[0.02] blur-3xl pointer-events-none" />

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-14">

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="
          inline-flex items-center
          px-5 py-2
          rounded-full
          bg-burgundy/[0.06]
          border border-burgundy/10
          text-burgundy
          text-[11px]
          font-bold
          tracking-[0.25em]
          uppercase
        "
      >
        Compliance
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="
          mt-5
          font-heading
          font-bold
          text-navy
          text-3xl
          sm:text-4xl
          lg:text-[42px]
          leading-tight
        "
      >
        Quality Is Built Into Every Process
      </motion.h2>

      {/* Heading Accent */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="h-[3px] bg-burgundy mx-auto mt-5 rounded-full"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="
          mt-6
          text-gray
          text-sm
          sm:text-base
          leading-7
        "
      >
        Our quality management approach focuses on facilities, personnel and
        processes, supported by continuous improvement practices such as 5S,
        Kaizen and Total Quality Control.
      </motion.p>
    </div>


    {/* Certification Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

      {CERTS.map((cert, i) => {
        const Icon = cert.icon;

        return (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
            }}
            className="
               group
  relative
  min-h-[300px]
  rounded-[20px]
  border
  border-slate-200
  bg-white
  px-5
  pt-6
  pb-5
              text-center
              overflow-hidden

              shadow-[0_8px_30px_rgba(15,34,64,0.04)]

              transition-all
              duration-500

              hover:-translate-y-2
              hover:border-burgundy/20
              hover:shadow-[0_20px_45px_rgba(15,34,64,0.10)]
            "
          >

            {/* Background glow */}
            <div
              className="
                absolute
                -top-16
                -right-16
                w-36
                h-36
                rounded-full
                bg-burgundy/[0.025]
                group-hover:bg-burgundy/[0.06]
                transition-colors
                duration-500
              "
            />

            {/* Certification Icon */}
            <div className="relative flex justify-center">

              <div
                className="
                  relative
                  w-[92px]
                  h-[92px]
                  rounded-full
                  border
                  border-burgundy/30
                  bg-white
                  flex
                  items-center
                  justify-center

                  shadow-[0_8px_20px_rgba(139,30,45,0.08)]

                  group-hover:border-burgundy
                  group-hover:shadow-[0_10px_25px_rgba(139,30,45,0.15)]

                  transition-all
                  duration-500
                "
              >

                {/* Inner circle */}
                <div
                  className="
                    absolute
                    inset-[7px]
                    rounded-full
                    border
                    border-burgundy/10
                  "
                />

                <Icon
                  strokeWidth={1.8}
                  className="
                    relative
                    w-10
                    h-10
                    text-burgundy
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>
            </div>


            {/* Small Divider */}
            <div className="flex justify-center mt-6">
              <span
                className="
                  block
                  w-9
                  h-[2px]
                  bg-burgundy
                  rounded-full
                "
              />
            </div>


            {/* Certification Name */}
            <h3
              className="
                mt-5
                font-heading
                font-bold
                text-navy
                text-[17px]
                leading-6
              "
            >
              {cert.title}
            </h3>


            {/* Description */}
            <p
              className="
                relative
                mt-3
                text-gray
                text-sm
                leading-6
                max-w-[210px]
                mx-auto
              "
            >
              {cert.description}
            </p>


            {/* Subtle Laurel / watermark */}
            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                bottom-10
                w-44
                h-20
                opacity-[0.045]
                pointer-events-none
              "
            >
              <svg
                viewBox="0 0 200 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-burgundy"
              >
                <path
                  d="M100 92C70 88 45 72 30 45"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M100 92C130 88 155 72 170 45"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {[0, 1, 2, 3, 4].map((item) => (
                  <g key={item}>
                    <ellipse
                      cx={48 + item * 10}
                      cy={62 - item * 7}
                      rx="8"
                      ry="4"
                      transform={`rotate(-35 ${48 + item * 10} ${
                        62 - item * 7
                      })`}
                      fill="currentColor"
                    />

                    <ellipse
                      cx={152 - item * 10}
                      cy={62 - item * 7}
                      rx="8"
                      ry="4"
                      transform={`rotate(35 ${152 - item * 10} ${
                        62 - item * 7
                      })`}
                      fill="currentColor"
                    />
                  </g>
                ))}
              </svg>
            </div>


            {/* Bottom Burgundy Accent */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                h-[5px]
                bg-burgundy
                rounded-t-full
                scale-x-100
                group-hover:h-[6px]
                transition-all
                duration-300
              "
            />

          </motion.div>
        );
      })}

    </div>

  </div>
</section>  

{/* 06B — Catalogues & Resources */}
<section className="section-py bg-bg">
  <div className="container-px">
    <div className="max-w-2xl mx-auto text-center mb-16">
      <Eyebrow>Resources</Eyebrow>
      <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
        Catalogues &amp; Product Literature
      </h2>
      <p className="mt-4 text-gray leading-relaxed">
        Download our latest catalogues and product literature for detailed specifications.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {CATALOGUES.map((c, i) => (
        <motion.a
          key={c.title}
          href={c.file}
          target="_blank"
          rel="noopener noreferrer"
          download
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="group rounded-xl2 bg-white border border-border p-6 text-center hover:shadow-soft hover:border-burgundy/30 transition-all duration-300"
        >
          <div className="w-12 h-12 mx-auto rounded-full bg-navy/5 group-hover:bg-burgundy-gradient flex items-center justify-center transition-colors duration-300">
            <FileText className="w-5 h-5 text-navy group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="font-heading font-semibold text-navy mt-4 text-sm">
            {c.title}
          </div>
          <p className="text-xs text-gray mt-2 leading-relaxed">{c.desc}</p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-burgundy">
            <Download className="w-3.5 h-3.5" />
            Download PDF
          </div>
        </motion.a>
      ))}
    </div>
  </div>
</section>

{/* 07 — Manufacturing Footprint */}
<section className="section-py bg-bg">
  <div className="container-px">

    <div className="max-w-2xl mx-auto text-center mb-16">
      <Eyebrow>Footprint</Eyebrow>

      <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
        Three Manufacturing Units. One Integrated Standard.
      </h2>
    </div>


    <div className="grid lg:grid-cols-2 gap-10 items-center">

     <div className="h-[420px] overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
  <iframe
    title="Mecca Healthcare Manufacturing Locations"
    src={`https://www.google.com/maps/embed/v1/search?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=medical+device+manufacturing+India&center=22.9734,78.6569&zoom=5`}
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>


      {/* MANUFACTURING LOCATIONS */}
      <div>

        <div className="space-y-4">

          {LOCATIONS.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
              className="group flex items-start gap-4 rounded-xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-burgundy/30 hover:shadow-[0_12px_30px_rgba(13,34,64,0.08)]"
            >

              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy/5 transition-colors group-hover:bg-burgundy/10">
                <Factory className="h-4 w-4 text-navy group-hover:text-burgundy" />
              </div>

              <div>
                <div className="font-heading font-semibold text-navy">
                  {l.name}
                </div>

                <div className="mt-0.5 text-xs text-gray">
                  {l.area}
                </div>
              </div>

            </motion.div>
          ))}

        </div>


        {/* PRODUCTION STAT */}
        <div className="mt-8 rounded-xl2 bg-navy-gradient p-6 text-center text-white">

          <div className="font-heading text-4xl font-extrabold">
            30M+
          </div>

          <div className="mt-1 text-sm text-white/70">
            Pieces manufactured annually
          </div>

        </div>

      </div>

    </div>
  </div>
</section>

      {/* 08 — Global Reach */}
      <section className="section-py bg-white">
        <div className="container-px">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Eyebrow>Global Reach</Eyebrow>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
              Made in India. Trusted Across Markets.
            </h2>
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-border bg-[#F8FAFC] shadow-sm">
  <Image
    src="/Global.png"
    alt="Mecca Healthcare global healthcare reach and export regions"
    width={1600}
    height={900}
    className="h-auto w-full object-cover"
    priority
  />
</div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {REGIONS.map((r) => (
              <span
                key={r}
                className="inline-flex items-center gap-1.5 rounded-full bg-bg border border-border px-4 py-2 text-sm font-medium text-navy"
              >
                <Globe2 className="w-3.5 h-3.5 text-burgundy" />
                {r}
              </span>
            ))}
          </div>
          <p className="text-center text-xs tracking-[0.18em] uppercase text-gray mt-8">
            Global Healthcare Partner
          </p>
        </div>
      </section>

      {/* 09 — Why Partner With Mecca */}
      <section className="section-py bg-bg">
        <div className="container-px">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Eyebrow>Why Mecca</Eyebrow>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
              Why Healthcare Businesses Choose Mecca
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_PARTNER.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl2 bg-white border border-border p-6"
              >
                <div className="w-11 h-11 rounded-full bg-navy/5 flex items-center justify-center">
                  <w.icon className="w-5 h-5 text-navy" />
                </div>
                <div className="font-heading font-semibold text-navy mt-4">{w.title}</div>
                <p className="text-sm text-gray mt-2 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* 10 — Final CTA */}
<section className="section-py bg-bg">
  <div className="container-px">

    <div className="relative overflow-hidden rounded-[32px] bg-burgundy-gradient px-8 py-14 text-white md:px-14 lg:px-16">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.035]" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">

        {/* Content */}
        <div className="max-w-3xl">

          {/* Small label */}
          <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
            Start Your Project
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Looking for a Reliable Medical Manufacturing Partner?
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-2xl leading-relaxed text-white/75">
            Explore our manufacturing capabilities or connect with our team to
            discuss your product and OEM requirements.
          </p>

        </div>


        {/* Buttons */}
        <div className="relative z-10 flex flex-col gap-3 lg:min-w-[210px]">

          <a
            href="/#oem"
            className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#8B1E2D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Explore OEM Services →
          </a>

          <button
  type="button"
  onClick={() => setIsQuoteModalOpen(true)}
  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
>
  Request a Quote →
</button>

        </div>

      </div>
    </div>

  </div>

  {/* Quote Request Modal */}
<AnimatePresence>
  {isQuoteModalOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsQuoteModalOpen(false)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 backdrop-blur-sm px-4 py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[24px] bg-white shadow-[0_25px_70px_rgba(13,34,64,0.25)]"
      >
        <div className="h-2 bg-burgundy-gradient" />

        <button
          type="button"
          onClick={() => setIsQuoteModalOpen(false)}
          aria-label="Close"
          className="absolute right-5 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-bg text-gray hover:bg-burgundy/10 hover:text-burgundy transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-7 pb-8 pt-7 sm:px-9 sm:pb-10">
          {isSubmitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-burgundy/10">
                <Handshake className="h-6 w-6 text-burgundy" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy">
                Thank You
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray max-w-xs mx-auto">
                Your request has been received. Our team will get back to you within 24–48 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsQuoteModalOpen(false);
                  setIsSubmitted(false);
                }}
                className="mt-7 inline-flex items-center justify-center rounded-full bg-burgundy-gradient px-6 py-2.5 text-sm font-semibold text-white shadow-card hover:shadow-soft transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-1 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-4 py-1.5 text-xs font-semibold text-[#8B1E2D]">
                OEM &amp; Product Enquiry
              </div>

              <h3 className="mt-3 font-heading text-2xl font-bold text-navy sm:text-[28px]">
                Request a Quote
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray">
                Share your requirement and our team will get back to you with pricing and lead times.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitted(true);
                }}
                className="mt-6 space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy">
                      Company Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Company / Organization"
                      className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy">
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91"
                      className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-navy">
                    Product / Category
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-navy">
                    Estimated Quantity (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 10,000 units / month"
                    className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-navy">
                    Requirement Details
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about specifications, certifications needed, or OEM requirements"
                    className="w-full resize-none rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full inline-flex items-center justify-center rounded-xl bg-burgundy-gradient px-6 py-3 text-sm font-semibold text-white shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
                >
                  Submit Request →
                </button>

                <p className="text-center text-[11px] text-gray">
                  We typically respond within 24–48 business hours.
                </p>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


</section>

      <Footer />
    </main>
  );
}