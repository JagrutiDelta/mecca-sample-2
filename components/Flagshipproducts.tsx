"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Droplets,
  FileCheck,
  Gauge,
  HeartPulse,
  Package,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteContext";

// ---------------------------------------------------------------------------
// 1. Data Types & PDF Source Constants
// ---------------------------------------------------------------------------

type Direction = 1 | -1;

const FLOW_RATES = [
  { rate: 0, label: "OFF", drops: 0 },
  { rate: 10, label: "10 ml/h", drops: 3 },
  { rate: 20, label: "20 ml/h", drops: 7 },
  { rate: 40, label: "40 ml/h", drops: 13 },
  { rate: 60, label: "60 ml/h", drops: 20 },
  { rate: 80, label: "80 ml/h", drops: 27 },
  { rate: 100, label: "100 ml/h", drops: 33 },
  { rate: 104, label: "104 ml/h", drops: 35, benchmark: true },
  { rate: 120, label: "120 ml/h", drops: 40 },
  { rate: 140, label: "140 ml/h", drops: 47 },
  { rate: 200, label: "200 ml/h", drops: 67 },
  { rate: 250, label: "250 ml/h", drops: 83 },
];

const DIAL_FLOW_TYPICAL_USES = [
  { name: "Hydration", icon: Droplets, desc: "Standard electrolyte and maintenance fluid therapy" },
  { name: "Analgesic Sedation", icon: HeartPulse, desc: "Post-operative pain and sedation protocol control" },
  { name: "Antiviral", icon: ShieldCheck, desc: "Controlled antiviral infusion therapies" },
  { name: "Chemotherapy", icon: Activity, desc: "Precision oncology therapeutic protocols" },
  { name: "Parenteral Nutrition", icon: Sparkles, desc: "Continuous micro-metered TPN feeding" },
];

const NFC_STEPS = [
  {
    step: "01",
    title: "DISINFECT",
    desc: "Swab the top of the Needle Free Connector with an alcohol pad for at least three seconds or according to your facility's protocol.",
  },
  {
    step: "02",
    title: "CONNECT",
    desc: "Insert the syringe or connect I.V. tubing directly to the Needle Free Connector and turn clockwise.",
  },
  {
    step: "03",
    title: "DISCONNECT",
    desc: "Turn the syringe or I.V. set counterclockwise to remove. Replace the Needle Free Connector according to facility protocol.",
  },
];

const AIR_STOP_BENEFITS = [
  {
    metric: "Air Embolism Risk Free",
    mecca: "Yes (Automatic Air-Stop Membrane)",
    normal: "No (Requires constant nurse monitoring)",
    highlight: true,
  },
  {
    metric: "Time & Energy Savings in Solution Prep",
    mecca: "Yes (Fast auto-priming)",
    normal: "No (Manual tapping & line venting)",
    highlight: false,
  },
  {
    metric: "Prevention of Infusion Line Drying Out",
    mecca: "Yes (Fluid level maintained when empty)",
    normal: "No (Line drains completely dry)",
    highlight: true,
  },
  {
    metric: "Smooth Switch-Over to Next IV Bottle",
    mecca: "Yes (No-hassle continuous line)",
    normal: "No (Air locks require re-priming)",
    highlight: false,
  },
  {
    metric: "Closed System Maintenance before Therapy",
    mecca: "Yes (Prime-Stop prevents fluid spill)",
    normal: "No (Dripping on floor / bedding)",
    highlight: true,
  },
];

interface FlagshipProduct {
  id: string;
  badge: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  standard: string;
  cataloguePdf: string;
  metrics: { title: string; desc: string; value?: string }[];
  specs: { label: string; value: string }[];
}

const FLAGSHIP_PRODUCTS: FlagshipProduct[] = [
  {
    id: "dial-flow-regulator",
    badge: "PRECISION FLOW CONTROL",
    category: "Flow Regulation",
    title: "MHPL LifeGuard Dial Flow Regulator",
    tagline: "Calibrated 5 to 250 ml/h progressive dial for controlled intravenous delivery.",
    description:
      "Flow Regulators bridge the safety gap between active electronic pumps and inaccurate roller clamps. The MHPL LifeGuard sustains an accurate and constant fluid flow rate across prolonged delivery, eliminating the 50%+ flow rate decay and tubing relaxation drift typical of manual clamps.",
    image: "/Infusion/image1.png",
    standard: "ISO 8536-13:2016",
    cataloguePdf: "/catalogues/lifeguard-dial-flow-regulators.pdf",
    metrics: [
      { title: "ACCURATE FLOW", desc: "Assures linear rate sustained over hours of delivery" },
      { title: "CONSTANT DELIVERY", desc: "Eliminates tubing relaxation creep and flow decay" },
      { title: "IMMEDIATE RESPONSE", desc: "Instantaneous calibration effect upon dial rotation" },
      { title: "PROGRESSIVE RANGE", desc: "Calibrated graduated scale from 5 ml/h to 250 ml/h" },
    ],
    specs: [
      { label: "Graduated Scale", value: "5 to 250 ml/h" },
      { label: "Operating Mode", value: "Gravity Feed Only" },
      { label: "Clinical Benchmark", value: "104 ml/h reached in 1.5 mins" },
      { label: "Distribution", value: "100M–150M units sold annually" },
      { label: "Fluid Contact", value: "Single-Use Medical Polymer" },
      { label: "Original Invention", value: "James Le Voy Sorensons (1976)" },
    ],
  },
  {
    id: "needle-free-valves",
    badge: "CLOSED INFUSION SYSTEM",
    category: "Vascular Access",
    title: "Needle Free Connector & Closed Valves",
    tagline: "Aseptic vascular access eliminating needlestick injuries with minimal dead space.",
    description:
      "Engineered for sterile IV drug delivery, Mecca's Needle Free Connector preserves a hermetically sealed fluid pathway. Accompanied by integrated Y-Port Valves and Tube End Valves, it provides high-velocity flow with superior silicone durability tested to 100+ daily actuations.",
    image: "/Infusion/image2.png",
    standard: "ISO 10993 Compliant",
    cataloguePdf: "/catalogues/catalogue-nfc-drug-delivery-range.pdf",
    metrics: [
      { title: "350 ml/min", desc: "Flow rate tested under 1m water head", value: "350" },
      { title: "0.09 ml", desc: "Ultra-low priming volume & minimal dead space", value: "0.09" },
      { title: "100+ / Day", desc: "Repeated sterile insertions with durable silicone seal", value: "100+" },
      { title: "100% Metal-Free", desc: "Non-magnetic and certified MRI-compatible", value: "100%" },
    ],
    specs: [
      { label: "Housing Material", value: "Polycarbonate or Copolyester" },
      { label: "MRI Compatibility", value: "MRI-Safe & Metal-Free" },
      { label: "Latex Formulation", value: "100% Latex-Free & Pyrogen-Free" },
      { label: "Y-Port Valve Sizes", value: "ID 4.01 mm, ID 3.6 mm" },
      { label: "Tube End Valve Sizes", value: "ID 2.0, 2.5, 2.8, 3.7, 4.1 mm" },
      { label: "Regulatory Auditing", value: "ISO 13485, EU MDRA, CDSCO" },
    ],
  },
  {
    id: "photosensitive-iv-set",
    badge: "LIGHTPROOF DRUG PROTECTION",
    category: "Oncology & Critical Care",
    title: "Lightproof Photosensitive IV Infusion Set",
    tagline: "Protects UV-sensitive oncology drugs from photodegradation with Yellow & Brown polymers.",
    description:
      "Prepared from lightproof and photosensitive polymer materials in specialized Yellow and Brown coloration. Obtainable with or without an integrated Dial Flow Controller (5 to 250 ml/h), safeguarding light-sensitive chemotherapy, antiviral, and parenteral nutrition compounds.",
    image: "/Infusion/image7.png",
    standard: "ISO 8536-4 / ETO Sterile",
    cataloguePdf: "/catalogues/lifeguard-dial-flow-regulators.pdf",
    metrics: [
      { title: "UV/LIGHT BLOCKING", desc: "Brown & Yellow polymer protects sensitive molecules" },
      { title: "DIAL INTEGRATION", desc: "Available with Dial Regulator 5 to 250 ml/hr" },
      { title: "15 MICRON FILTER", desc: "Integrated fluid barrier prevents particulate contamination" },
      { title: "ROTATING LUER LOCK", desc: "Male adaptor with protective seal prevents leakage" },
    ],
    specs: [
      { label: "Tubing Formulation", value: "Lightproof / Photosensitive PVC" },
      { label: "Color Options", value: "Amber Brown & Yellow" },
      { label: "Tubing Dimensions", value: "3.0 x 4.1 mm, Length 30+140+30 cm" },
      { label: "Drip Chamber", value: "60 mm with 15µm Fluid Filter" },
      { label: "Drip Rate", value: "20 drops/ml Vented Spike with Guard" },
      { label: "Packaging", value: "Paper Poly Pack (300 pcs/carton)" },
    ],
  },
  {
    id: "air-stop-prime-stop",
    badge: "PATIENT SAFETY SYSTEM",
    category: "Fluidics Innovation",
    title: "Innovative Air Stop & Prime Stop IV Set",
    tagline: "Prevents air embolism automatically and stops fluid spills during line preparation.",
    description:
      "Developed in technical collaboration with ACME UK Inc. Ltd, London. The Air-Stop membrane automatically maintains a constant fluid level when the IV bottle empties, preventing air from entering the patient's line. The Prime-Stop auto-fill prevents spills on bedding, floors, and nurses' hands.",
    image: "/Infusion/image4.png",
    standard: "ACME UK Collaboration",
    cataloguePdf: "/catalogues/catalogue-nfc-drug-delivery-range.pdf",
    metrics: [
      { title: "AIR-STOP BARRIER", desc: "Prevents air embolism when the IV container drains completely" },
      { title: "PRIME-STOP FILL", desc: "Auto-priming with zero dripping on hands and bedding" },
      { title: "15µm PRECISION FILTER", desc: "Eliminates particulate matter 15 microns and above" },
      { title: "ROTATING LUER LOCK", desc: "Easy, secure fitment to any IV catheter" },
    ],
    specs: [
      { label: "Primary Safety Tech", value: "Air Stop & Prime Stop Membranes" },
      { label: "Particulate Barrier", value: "15 Micron Precision Mesh" },
      { label: "Disposal Mechanism", value: "Fitted Safety Roller Controller" },
      { label: "Inline Connectors", value: "Rotating Luer Lock + Slip Clamp + Y-Site" },
      { label: "Bottle Switch-Over", value: "Smooth continuous transition without air lock" },
      { label: "Technical Partner", value: "ACME UK Inc. Ltd, London" },
    ],
  },
  {
    id: "extension-sets-filtration",
    badge: "SUB-MICRON FILTRATION",
    category: "Critical ICU Lines",
    title: "Standard Bore Extension Sets (0.2µm & 1.2µm)",
    tagline: "Sub-micron filtration lines engineered for high-risk neonatal, ICU, and blood infusions.",
    description:
      "Precision standard bore extension lines fitted with integrated 0.2 micron bacterial retention filters or 1.2 micron particulate filters. Engineered with female luer lock, slide clamp, latex-free Y-site, and rotating male luer adaptor for high-pressure ICU and infusion pump stability.",
    image: "/Infusion/image6.png",
    standard: "ISO 8536-4 / ISO 594",
    cataloguePdf: "/catalogues/lifeguard-dial-flow-regulators.pdf",
    metrics: [
      { title: "0.2µm FILTER", desc: "Sterilizing-grade barrier trapping bacteria & endotoxins" },
      { title: "1.2µm FILTER", desc: "Specialized particulate filter for lipid/TPN infusions" },
      { title: "SLIDE CLAMP", desc: "Instant one-handed temporary shut-off clamp" },
      { title: "EXTENDED LENGTH", desc: "Available in 84\", 82\", and 12\" standard bore setups" },
    ],
    specs: [
      { label: "Available Lengths", value: "84\", 82\", and 12\" (10+10+10 cm)" },
      { label: "Filter Ratings", value: "0.2 Micron & 1.2 Micron Media" },
      { label: "Tubing Size", value: "3.0 mm x 4.1 mm Medical Grade PVC" },
      { label: "Spike Options", value: "Vented 20 drops/ml or Non-Vented 10 drops/ml" },
      { label: "Sterilization", value: "ETO Gas Sterile, Non-Pyrogenic" },
      { label: "Carton Quantity", value: "300 to 400 pcs / export carton" },
    ],
  },
  {
    id: "dial-flow-infusion-set",
    badge: "DUAL-CALIBRATION GRAVITY SET",
    category: "Administration Sets",
    title: "Dial Flow IV Infusion Set (Adult & Micro-Drip)",
    tagline: "Integrated graduated dial flow regulator with 20 drops/ml adult & 60 drops/ml micro-drip chambers.",
    description:
      "Dedicated infusion sets incorporating the precision Dial Flow Regulator directly into the administration line. Available in both 20 drops/ml (macro adult) and 60 drops/ml (micro-drip pediatric) configurations, complete with sharp piercing spike and pinch clamp.",
    image: "/Infusion/image5.png",
    standard: "ISO 8536-4 & ISO 8536-13",
    cataloguePdf: "/catalogues/lifeguard-dial-flow-regulators.pdf",
    metrics: [
      { title: "DUAL DRIP SCALES", desc: "20 drops/ml (adult) or 60 drops/ml (micro-drip)" },
      { title: "SHARP SPIKE", desc: "Pierces plastic bottles and bags without coring" },
      { title: "PINCH CLAMP", desc: "Instant clamp facilitates emergency shut-off" },
      { title: "FLEXIBLE TUBING", desc: "2.7 x 3.9 mm PVC tubing (50+130+15 cm)" },
    ],
    specs: [
      { label: "Adult Drip Rate", value: "20 drops/ml (60 mm Chamber)" },
      { label: "Micro Drip Rate", value: "60 drops/ml (Micro Dropper)" },
      { label: "Dial Range", value: "5 to 250 ml/h progressive scale" },
      { label: "Tubing Dimensions", value: "2.7 x 3.9 mm, Length 50+130+15 cm" },
      { label: "Injection Port", value: "Latex-Free 'Y'-Site + Rotating Luer Lock" },
      { label: "Packaging", value: "Paper Poly Pack (240 pcs/carton)" },
    ],
  },
  {
    id: "back-check-valve-set",
    badge: "RETROGRADE FLOW PREVENTER",
    category: "Infusion Pumps & ICU",
    title: "Infusion Set with Back Check Valve",
    tagline: "Prevents retrograde backflow during active infusion pump and multi-line drug administration.",
    description:
      "Equipped with a one-way back check valve designed to eliminate backflow into primary bags during pump infusions, multi-bottle administration, or parallel piggyback therapy. Manufactured with ISO 8536-4 compliant spikes and ISO 594 compliant connections.",
    image: "/Infusion/image3.png",
    standard: "ISO 8536-4 / ISO 594",
    cataloguePdf: "/catalogues/catalogue-nfc-drug-delivery-range.pdf",
    metrics: [
      { title: "ONE-WAY VALVE", desc: "Eliminates retrograde medication contamination" },
      { title: "PUMP READY", desc: "Engineered for electronic volumetric infusion pumps" },
      { title: "VENTED & NON-VENTED", desc: "Options for rigid bottles and flexible bags" },
      { title: "70mm / 60mm CHAMBER", desc: "Fitted with 15 micron high-velocity fluid filter" },
    ],
    specs: [
      { label: "Vented Set", value: "62\", 20 drops/ml, 70mm Chamber, Luer Lock" },
      { label: "Non-Vented Set", value: "62\", 10 drops/ml, 60mm Chamber, Luer Tip" },
      { label: "Valve Mechanism", value: "Sensitive Inline One-Way Back Check Valve" },
      { label: "Fluid Filter", value: "15 Micron Precision Mesh" },
      { label: "Tubing Size", value: "3.0 x 4.1 mm PVC, Length 135+15 cm" },
      { label: "Carton Quantity", value: "300 pcs per export carton" },
    ],
  },
  {
    id: "paclitaxel-infusion-set",
    badge: "45 PSI PRESSURE RESISTANT",
    category: "Oncology Speciality",
    title: "Paclitaxel Chemotherapy Infusion Set",
    tagline: "100% PVC/DEHP-Free, 45 psi pressure-rated giving set for Taxol/Paclitaxel infusion.",
    description:
      "Paclitaxel and taxane solvents extract toxic plasticizers from standard PVC sets. Mecca's specialized Paclitaxel set is 100% DEHP-Free, withstands 45 psi (3.1 bar) working pressure, curtails nursing time with fast self-priming, and features bacterial retention certified for over 96 hours continuous flow.",
    image: "/Infusion/image9.png",
    standard: "45 psi (3.1 bar) Rated",
    cataloguePdf: "/catalogues/lifeguard-dial-flow-regulators.pdf",
    metrics: [
      { title: "45 PSI RATING", desc: "Withstands minimum 45 psi (3.1 bar) pump pressure" },
      { title: "DEHP-FREE", desc: "Zero plasticizer leaching with active chemotherapy solvents" },
      { title: "AUTO AIR-VENT", desc: "Eliminates flow loss due to air locks in any angle" },
      { title: "96-HR BARRIER", desc: "Certified bacterial retention for over 96 hours flow" },
    ],
    specs: [
      { label: "Working Pressure", value: "Minimum 45 psi (3.1 bar)" },
      { label: "Polymer Formulation", value: "100% PVC / DEHP-Free" },
      { label: "Filter Media", value: "0.2 Micron & 1.2 Micron Options" },
      { label: "Overall Length", value: "76\" (140+15 cm DEHP-Free Tubing)" },
      { label: "Drip Chamber", value: "60 mm with 15µm Fluid Filter, 20 drops/ml" },
      { label: "Packaging", value: "Paper Poly Pack (300 pcs/carton)" },
    ],
  },
];

// ---------------------------------------------------------------------------
// 2. Main Component
// ---------------------------------------------------------------------------

export function FlagshipProducts() {
  const { openQuoteModal } = useQuoteModal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const [activeDialIndex, setActiveDialIndex] = useState(7); // 104 ml/h benchmark
  const [activeSetVariant, setActiveSetVariant] = useState<"vented" | "non-vented">("vented");

  const total = FLAGSHIP_PRODUCTS.length;
  const currentProduct = FLAGSHIP_PRODUCTS[currentIndex];
  const currentFlow = FLOW_RATES[activeDialIndex];

  const goTo = useCallback(
    (nextIndex: number, dir: Direction) => {
      const wrapped = ((nextIndex % total) + total) % total;
      setDirection(dir);
      setCurrentIndex(wrapped);
    },
    [total],
  );

  const handleNext = useCallback(() => goTo(currentIndex + 1, 1), [goTo, currentIndex]);
  const handlePrev = useCallback(() => goTo(currentIndex - 1, -1), [goTo, currentIndex]);

  return (
    <section id="flagship-innovations" className="section-py bg-white relative overflow-hidden">
      {/* Background ambient lighting and medical grid decoration */}
      <div className="pointer-events-none absolute inset-0 bg-medical-grid bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_35%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-gradient-to-b from-burgundy/[0.07] via-medblue/[0.04] to-transparent blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-1/3 -right-32 w-[450px] h-[450px] rounded-full bg-medblue/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -left-32 w-[450px] h-[450px] rounded-full bg-burgundy/[0.05] blur-3xl" />

      <div className="container-px relative">

        {/* ===================================================================
            SECTION HEADING — Clean, Authoritative Luxury Healthcare
            =================================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-burgundy/20 bg-burgundy/[0.06] px-5 py-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-burgundy shadow-xs backdrop-blur-md mb-4"
          >
            <Sparkles className="h-4 w-4 text-burgundy" />
            <span>Clinical Innovations &amp; Engineering</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-navy text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight"
          >
            Our Flagship Products
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto font-normal"
          >
            Clinically certified medical devices engineered for infusion precision, vascular safety, and uncompromised healthcare outcomes.
          </motion.p>
        </div>

        {/* ===================================================================
            8-PRODUCT VISUAL SELECTOR DECK (NO UGLY SCROLLBAR)
            =================================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {FLAGSHIP_PRODUCTS.map((prod, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={prod.id}
                type="button"
                onClick={() => goTo(idx, idx > currentIndex ? 1 : -1)}
                className={`group relative flex flex-col items-center justify-between p-3 rounded-2xl border text-center transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#091D33] text-white border-[#091D33] shadow-lg shadow-navy/25 ring-2 ring-burgundy -translate-y-1"
                    : "bg-white text-slate-700 border-slate-200/90 hover:border-burgundy/40 hover:bg-slate-50/80 hover:-translate-y-0.5"
                }`}
              >
                {/* Active Indicator Dot */}
                <div className="w-full flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold ${isActive ? "text-burgundy-light font-mono" : "text-slate-400"}`}>
                    0{idx + 1}
                  </span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      isActive ? "bg-burgundy ring-2 ring-burgundy/40" : "bg-transparent"
                    }`}
                  />
                </div>

                {/* Product Thumbnail */}
                <div
                  className={`relative h-12 w-12 rounded-xl my-1 flex items-center justify-center p-1 transition-colors ${
                    isActive ? "bg-white/10" : "bg-slate-100 group-hover:bg-burgundy/5"
                  }`}
                >
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    width={42}
                    height={42}
                    className="object-contain h-full w-full"
                  />
                </div>

                {/* Title & Category */}
                <div className="w-full mt-1">
                  <span
                    className={`block text-[11px] font-bold leading-tight line-clamp-1 ${
                      isActive ? "text-white" : "text-navy group-hover:text-burgundy"
                    }`}
                  >
                    {prod.title
                      .replace("MHPL LifeGuard ", "")
                      .replace(" & Closed Valves", "")
                      .replace(" IV Infusion Set", "")
                      .replace(" Infusion Set", "")}
                  </span>
                  <span
                    className={`block text-[9px] uppercase tracking-wider font-semibold mt-0.5 truncate ${
                      isActive ? "text-slate-300" : "text-slate-400"
                    }`}
                  >
                    {prod.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ===================================================================
            MAIN ACTIVE SLIDE SHOWCASE HERO CARD
            =================================================================== */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(15,34,64,0.06)] relative overflow-hidden">

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentProduct.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Slide Top Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 mb-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-burgundy/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-burgundy">
                    Product 0{currentIndex + 1} of 0{total}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="font-heading text-xs font-bold text-navy uppercase tracking-wider">
                    {currentProduct.category}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/90 px-3.5 py-1.5 rounded-full">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span>Certified Standard: {currentProduct.standard}</span>
                  </span>
                </div>
              </div>

              {/* Hero Split-Screen Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

                {/* Left Column: Visual Product Stage */}
                <div className="lg:col-span-6 relative">
                  <div className="relative rounded-3xl bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF5FC]/60 p-8 sm:p-12 border border-slate-200/80 flex items-center justify-center min-h-[420px] shadow-sm overflow-hidden group">
                    {/* Background Halo Lighting */}
                    <div className="pointer-events-none absolute -top-12 -left-12 w-64 h-64 rounded-full bg-burgundy/[0.06] blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-medblue/[0.08] blur-3xl" />
                    <div className="pointer-events-none absolute inset-0 bg-medical-grid bg-grid opacity-20" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-navy shadow-xs border border-slate-200">
                      <FileCheck className="h-3.5 w-3.5 text-burgundy" />
                      <span>Single-Use Sterile Device</span>
                    </div>

                    <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-navy shadow-xs border border-slate-200">
                      <span>ISO 13485</span>
                    </div>

                    {/* Product Visual */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                      className="relative aspect-square w-full max-w-[340px] drop-shadow-[0_20px_35px_rgba(15,39,68,0.18)]"
                    >
                      <Image
                        src={currentProduct.image}
                        alt={currentProduct.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    </motion.div>

                    {/* Bottom Floating Bar */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="text-[11px] font-semibold text-slate-500 bg-white/90 backdrop-blur-sm px-3.5 py-1 rounded-full border border-slate-200/80 shadow-xs">
                        {currentProduct.category}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50/90 backdrop-blur-sm px-3.5 py-1 rounded-full border border-emerald-200/80 shadow-xs flex items-center gap-1">
                        <Check className="h-3 w-3 text-emerald-600" />
                        Class 8 Cleanroom Validated
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Technical Narrative & Metrics */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-burgundy/10 px-3.5 py-1 text-xs font-bold text-burgundy uppercase tracking-wider mb-2.5">
                      <Sparkles className="h-3.5 w-3.5 text-burgundy" />
                      {currentProduct.badge}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-tight">
                      {currentProduct.title}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-medblue leading-snug">
                      {currentProduct.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {currentProduct.description}
                  </p>

                  {/* 4 Performance Metric Blocks */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {currentProduct.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-colors hover:bg-white hover:border-burgundy/30 hover:shadow-xs"
                      >
                        <div className="font-heading text-xs font-bold uppercase text-burgundy tracking-wide">
                          {m.title}
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-snug">
                          {m.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons & Prev/Next */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => openQuoteModal(currentProduct.title)}
                      className="font-heading inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-burgundy to-[#9d2433] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-burgundy/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                    >
                      <span>Request Technical Quotation</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <a
                      href={currentProduct.cataloguePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-navy shadow-xs hover:border-burgundy hover:text-burgundy transition-all"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download PDF</span>
                    </a>

                    {/* Quick Prev / Next Controls */}
                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous product"
                        className="h-10 w-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-navy shadow-xs hover:bg-burgundy hover:text-white hover:border-burgundy transition-all cursor-pointer"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next product"
                        className="h-10 w-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-navy shadow-xs hover:bg-burgundy hover:text-white hover:border-burgundy transition-all cursor-pointer"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* =============================================================
                  PRODUCT-SPECIFIC INTERACTIVE & DEEP DOCUMENTATION
                  ============================================================= */}

              {/* Product 01: MHPL LifeGuard Dial Flow Regulator Interactive Details */}
              {currentProduct.id === "dial-flow-regulator" && (
                <div className="mt-12 space-y-10">
                  {/* Flow Simulator */}
                  <div className="rounded-xl2 bg-navy-gradient text-white p-6 sm:p-8 shadow-soft">
                    <div className="max-w-3xl">
                      <span className="eyebrow inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                        INTERACTIVE FLOW CONTROL SIMULATOR
                      </span>
                      <h4 className="font-heading text-2xl sm:text-3xl font-bold mt-2 text-white">
                        Precision You Can See (5–250 ml/h)
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-white/80 leading-relaxed">
                        Unlike roller clamps that confine flow regulation into an uncontrollable 3–4 mm gap,
                        the MHPL LifeGuard graduated dial provides progressive modulation across 5 to 250 ml/h.
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-7 bg-white/10 border border-white/15 rounded-xl2 p-5 sm:p-6 backdrop-blur-md">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-heading font-bold text-white/70 uppercase tracking-wider">DIAL POSITION SELECTOR</span>
                          {currentFlow.benchmark && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-burgundy px-2.5 py-0.5 text-[10px] font-bold text-white uppercase">
                              Clinical Benchmark: 104 ml/h
                            </span>
                          )}
                        </div>

                        <input
                          type="range"
                          min="0"
                          max={FLOW_RATES.length - 1}
                          value={activeDialIndex}
                          onChange={(e) => setActiveDialIndex(Number(e.target.value))}
                          aria-label="Select flow rate"
                          className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#8B1E2D]"
                        />

                        <div className="mt-3 flex justify-between text-[11px] font-heading text-white/70">
                          {FLOW_RATES.map((f, i) => (
                            <button
                              key={f.label}
                              type="button"
                              onClick={() => setActiveDialIndex(i)}
                              suppressHydrationWarning
                              className={`transition-colors cursor-pointer ${i === activeDialIndex ? "text-[#ff91a0] font-bold" : "hover:text-white"
                                }`}
                            >
                              {f.rate}
                            </button>
                          ))}
                        </div>

                        <div className="mt-5 pt-4 border-t border-white/15 grid grid-cols-3 gap-3 text-left">
                          <div>
                            <div className="text-[10px] text-white/60 uppercase font-heading">Selected Flow</div>
                            <div className="text-xl font-heading font-bold text-white mt-0.5">{currentFlow.label}</div>
                          </div>
                          <div>
                            <div className="text-[10px] text-white/60 uppercase font-heading">Drop Frequency</div>
                            <div className="text-xl font-heading font-bold text-emerald-400 mt-0.5">
                              ~{currentFlow.drops} gtts/min
                            </div>
                          </div>
                          <div>
                            <div className="text-[10px] text-white/60 uppercase font-heading">Delivery Status</div>
                            <div className="text-sm font-heading font-semibold text-white/90 mt-1">
                              {currentFlow.rate === 0 ? "Line Closed" : "Active Steady"}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-5 bg-white/10 border border-white/15 rounded-xl2 p-5 sm:p-6 flex flex-col justify-between h-full backdrop-blur-md">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-heading font-bold text-white/80 uppercase tracking-wider">
                            <Gauge className="h-4 w-4 text-burgundy" />
                            <span>Instantaneous Dynamics</span>
                          </div>
                          <div className="text-2xl sm:text-3xl font-heading font-bold mt-2 text-white">
                            {currentFlow.rate === 0 ? "Flow Halted" : `${currentFlow.rate} ml/hour`}
                          </div>
                          <p className="text-xs text-white/80 mt-2 leading-relaxed">
                            {currentFlow.rate === 0
                              ? "Dial locked in OFF position. Zero fluid passage."
                              : `Graduated capillary geometry stabilizes delivery at precisely ${currentFlow.rate} ml/h without continuous manual re-clamping.`}
                          </p>
                        </div>

                        <div className="mt-5 pt-3 border-t border-white/15 text-[11px] text-white/70">
                          Documented: Flow effect is immediate upon dial rotation; continuous drift from tubing relaxation is eliminated.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clinical Comparison Grid */}
                  <div className="rounded-xl2 border border-border bg-bg/50 p-6 sm:p-8">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-burgundy block mb-1">
                      CLINICAL COMPARISON STUDY
                    </span>
                    <h4 className="font-heading font-bold text-xl sm:text-2xl text-navy">
                      Why Control Matters: Roller Clamp vs. Flow Regulator
                    </h4>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="rounded-xl border border-red-200 bg-red-50/40 p-5 shadow-card">
                        <div className="flex items-center justify-between mb-3">
                          <span className="rounded-md bg-red-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-red-700">
                            Conventional Roller Clamp
                          </span>
                          <span className="text-xs font-heading font-semibold text-red-600">3–4 mm Free-Flow Gap</span>
                        </div>
                        <h5 className="font-heading font-bold text-base text-navy">Unstable Flow with High Risk of Rate Decay</h5>
                        <ul className="mt-3 space-y-2 text-xs text-gray">
                          <li className="flex items-start gap-2">
                            <X className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                            <span><strong>Unstable Flow:</strong> Flow rate often decreases by 50% or more within 60 minutes.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                            <span><strong>No Reference Scale:</strong> Nurses must count drops with stopwatch, increasing burden.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-xl border border-emerald-300 bg-emerald-50/40 p-5 shadow-card">
                        <div className="flex items-center justify-between mb-3">
                          <span className="rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                            MHPL LifeGuard Dial Flow Regulator
                          </span>
                          <span className="text-xs font-heading font-semibold text-emerald-700">ISO 8536-13 Compliant</span>
                        </div>
                        <h5 className="font-heading font-bold text-base text-navy">Constant, Reproducible &amp; Safe Delivery</h5>
                        <ul className="mt-3 space-y-2 text-xs text-gray">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span><strong>Constant Flow:</strong> Delivers linear rate accuracy over hours without line starvation.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span><strong>Rapid Setting:</strong> Target 104 ml/h reached in 1.5 minutes vs 3.0 minutes for roller clamp.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Product 02: Needle Free Connector & Valves Protocol */}
              {currentProduct.id === "needle-free-valves" && (
                <div className="mt-12 space-y-8">
                  <div className="rounded-xl2 border border-border bg-bg/50 p-6 sm:p-8">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-burgundy block mb-1">
                      CLINICAL PROTOCOL
                    </span>
                    <h4 className="font-heading font-bold text-xl sm:text-2xl text-navy">
                      How It Works: 3-Step Aseptic Procedure
                    </h4>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                      {NFC_STEPS.map((s, idx) => (
                        <div key={s.step} className="rounded-xl border border-border bg-white p-5 shadow-card">
                          <div className="flex items-center justify-between mb-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-burgundy font-heading text-xs font-bold text-white">
                              {s.step}
                            </span>
                            <span className="text-[10px] font-heading font-semibold text-gray">STEP {idx + 1} OF 3</span>
                          </div>
                          <h5 className="font-heading font-bold text-sm text-navy">{s.title}</h5>
                          <p className="text-xs text-gray mt-1.5 leading-relaxed">{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Product 04: Air Stop & Prime Stop Head-to-Head Table */}
              {currentProduct.id === "air-stop-prime-stop" && (
                <div className="mt-12 space-y-6">
                  <div className="max-w-2xl">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-burgundy block mb-1">
                      CLINICAL EVIDENCE MATRIX
                    </span>
                    <h4 className="font-heading font-bold text-xl sm:text-2xl text-navy">
                      Air Stop &amp; Prime Stop Head-to-Head Safety Comparison
                    </h4>
                  </div>
                  <div className="overflow-x-auto rounded-xl2 border border-border shadow-card">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-bg border-b border-border">
                          <th className="py-3 px-5 font-heading font-bold text-navy uppercase tracking-wider">Key Safety Benefit</th>
                          <th className="py-3 px-5 font-heading font-bold text-burgundy uppercase tracking-wider bg-burgundy/5">Mecca Healthcare Set</th>
                          <th className="py-3 px-5 font-heading font-bold text-gray uppercase tracking-wider">Standard IV Set</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border bg-white">
                        {AIR_STOP_BENEFITS.map((item) => (
                          <tr key={item.metric} className={item.highlight ? "bg-bg/40" : ""}>
                            <td className="py-3 px-5 font-semibold text-navy">{item.metric}</td>
                            <td className="py-3 px-5 font-bold text-emerald-700 bg-burgundy/5 flex items-center gap-1.5">
                              <Check className="h-4 w-4 text-emerald-600" />
                              <span>{item.mecca}</span>
                            </td>
                            <td className="py-3 px-5 text-gray">{item.normal}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Product 07: Back Check Valve Interactive Toggle */}
              {currentProduct.id === "back-check-valve-set" && (
                <div className="mt-12 rounded-xl2 border border-border bg-bg/50 p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="font-heading text-xs font-bold uppercase tracking-wider text-burgundy block mb-1">
                        CONFIGURATION SELECTOR
                      </span>
                      <h4 className="font-heading font-bold text-xl sm:text-2xl text-navy">
                        Vented vs. Non-Vented Infusion Pump Sets
                      </h4>
                    </div>
                    <div className="inline-flex rounded-full border border-border bg-white p-1 shadow-2xs">
                      <button
                        type="button"
                        onClick={() => setActiveSetVariant("vented")}
                        suppressHydrationWarning
                        className={`rounded-full px-4 py-1.5 text-xs font-heading font-bold transition-all cursor-pointer ${activeSetVariant === "vented"
                          ? "bg-burgundy text-white shadow-xs"
                          : "text-navy hover:text-burgundy"
                          }`}
                      >
                        Vented (20 drops/ml)
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveSetVariant("non-vented")}
                        suppressHydrationWarning
                        className={`rounded-full px-4 py-1.5 text-xs font-heading font-bold transition-all cursor-pointer ${activeSetVariant === "non-vented"
                          ? "bg-burgundy text-white shadow-xs"
                          : "text-navy hover:text-burgundy"
                          }`}
                      >
                        Non-Vented (10 drops/ml)
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-white rounded-xl border border-border">
                      <span className="text-gray font-heading uppercase text-[10px] block mb-1">Container Compatibility</span>
                      <span className="font-bold text-navy">
                        {activeSetVariant === "vented"
                          ? "Rigid glass bottles & plastic infusion containers"
                          : "Collapsible plastic infusion containers & bags"}
                      </span>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-border">
                      <span className="text-gray font-heading uppercase text-[10px] block mb-1">Drip Factor &amp; Chamber</span>
                      <span className="font-bold text-navy">
                        {activeSetVariant === "vented"
                          ? "20 drops/ml with 70mm Drip Chamber & 15µm Filter"
                          : "10 drops/ml with 60mm Drip Chamber & 15µm Filter"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Technical Specifications Matrix */}
              <div className="mt-10 rounded-xl2 border border-border bg-white p-6 sm:p-8 shadow-card">
                <h5 className="font-heading font-bold text-base text-navy mb-4">
                  Documented Technical Specifications (from Mecca Product PDF)
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
                  {currentProduct.specs.map((sp, sIdx) => (
                    <div key={sIdx} className="p-3 bg-bg/60 rounded-xl border border-border">
                      <span className="text-gray font-heading uppercase text-[10px] block mb-1">
                        {sp.label}
                      </span>
                      <span className="font-bold text-navy leading-snug block">
                        {sp.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* =================================================================
              SLIDER NAVIGATION CONTROLS IN THE BOTTOM RIGHT BELOW PRODUCT DETAIL
              ================================================================= */}
          <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">

            {/* Left: Product Indicators & Quick Switch */}
            <div className="flex items-center gap-2">
              {FLAGSHIP_PRODUCTS.map((p, pIdx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => goTo(pIdx, pIdx > currentIndex ? 1 : -1)}
                  aria-label={`Jump to ${p.title}`}
                  suppressHydrationWarning
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${pIdx === currentIndex
                    ? "w-8 bg-burgundy"
                    : "w-2.5 bg-gray/30 hover:bg-gray/60"
                    }`}
                />
              ))}
              <span className="ml-3 font-heading text-xs font-bold text-navy hidden sm:inline-block">
                {currentProduct.title}
              </span>
            </div>

            {/* Right: Arrow Buttons with Counter Exactly Below Product Details */}
            <div className="flex items-center gap-3 ml-auto">
              <span className="font-heading text-xs font-bold text-gray uppercase tracking-wider">
                {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous flagship product"
                  suppressHydrationWarning
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-card transition-all duration-200 hover:border-burgundy hover:bg-burgundy hover:text-white active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next flagship product"
                  suppressHydrationWarning
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-card transition-all duration-200 hover:border-burgundy hover:bg-burgundy hover:text-white active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

          </div>

        </div>



        {/* ===================================================================
            QUALITY & REGULATORY RECOGNITION STRIP
            =================================================================== */}
        <div className="rounded-xl2 border border-border bg-bg/60 p-6 sm:p-8 mt-16 mb-16 shadow-card">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="eyebrow justify-center mb-3 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-4 py-1.5 text-xs font-semibold text-[#8B1E2D] backdrop-blur-md">
              REGULATORY AUDITING
            </div>
            <h4 className="font-heading font-bold text-2xl sm:text-3xl text-navy mt-1">
              Manufactured to Recognized International Standards
            </h4>
            <p className="text-xs sm:text-sm text-gray mt-2">
              Manufactured in ISO 9001:2015, ISO 13485:2016, EU MDRA, and WHO-GMP registered cleanroom facilities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
            {[
              { code: "ISO 8536-13", label: "Flow Regulators" },
              { code: "ISO 8536-4", label: "Infusion Sets" },
              { code: "ISO 10993", label: "Biocompatibility" },
              { code: "ISO 594/1 & 2", label: "Luer Connectors" },
              { code: "ISO 13485:2016", label: "Medical QMS" },
              { code: "ISO 9001:2015", label: "Quality System" },
              { code: "WHO-GMP", label: "Sterile Facility" },
              { code: "CE Marked", label: "EU MDRA Reg." },
            ].map((st) => (
              <div key={st.code} className="rounded-xl border border-border bg-white p-3.5 shadow-card hover:shadow-soft transition-all duration-300">
                <div className="font-heading font-bold text-sm text-navy">{st.code}</div>
                <div className="text-[10px] text-gray mt-0.5 uppercase tracking-wider">{st.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[11px] text-gray max-w-2xl mx-auto italic">
              Product specifications and clinical data presented are derived directly from Mecca Healthcare documentation.
              Packaging, tubing length, and custom configurations are available on institutional request.
            </p>
          </div>
        </div>

        {/* ===================================================================
            HOSPITAL PROCUREMENT & OEM INQUIRIES CTA
            =================================================================== */}
        <div className="rounded-xl2 bg-navy-gradient text-white p-8 sm:p-12 shadow-soft flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-white/90 border border-white/15 mb-3">
              HOSPITAL PROCUREMENT &amp; OEM INQUIRIES
            </span>
            <h4 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
              Looking for the Right Medical-Device Solution?
            </h4>
            <p className="mt-2 text-sm sm:text-base text-white/80 leading-relaxed">
              Connect with Mecca Healthcare to request institutional sample evaluation,
              obtain technical dossiers, or discuss customized contract manufacturing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openQuoteModal(currentProduct.title)}
              suppressHydrationWarning
              className="font-heading inline-flex items-center justify-center gap-2 rounded-full bg-burgundy px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:bg-burgundy-dark hover:shadow-soft active:scale-95 cursor-pointer"
            >
              <span>Request Technical Quotation</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href="/products"
              className="font-heading inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-navy active:scale-95"
            >
              Explore Full Catalogue
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FlagshipProducts;