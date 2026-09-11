"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, FileCheck, Layers, GitFork, Clipboard, Settings, HelpCircle, 
  ArrowDown, Activity, Heart, Award, Sparkles, RefreshCw, Eye, Users, 
  TrendingUp, CheckCircle2, UserCheck, ArrowRight, ArrowLeftRight,
  Target, Sliders, LayoutGrid, CheckSquare
} from "lucide-react";

const PIPELINE_STEPS = [
  {
    step: "01",
    title: "Conceptualize",
    desc: "Define quality goals, target specifications, and standard benchmarks conforming to global regulatory and customer requirements.",
    icon: HelpCircle,
    color: "text-blue-500 bg-blue-50 border-blue-100"
  },
  {
    step: "02",
    title: "Plan",
    desc: "Plan testing protocols, raw material checking standards, cleanroom compliance scripts, and laboratory validations.",
    icon: Clipboard,
    color: "text-amber-500 bg-amber-50 border-amber-100"
  },
  {
    step: "03",
    title: "Develop",
    desc: "Develop advanced compounding controls, physical test jigs, tooling validations, and certified cleanroom molding assemblies.",
    icon: Settings,
    color: "text-rose-500 bg-rose-50 border-rose-100"
  },
  {
    step: "04",
    title: "Co-ordinate",
    desc: "Coordinate cross-department quality audits, supervisor checklists, raw materials screening, and staff hygienic training.",
    icon: GitFork,
    color: "text-indigo-500 bg-indigo-50 border-indigo-100"
  },
  {
    step: "05",
    title: "Implement",
    desc: "Implement 100% inline physical leak checks under pressure/vacuum, particulate counters, and cleanroom air volume HVAC controls.",
    icon: Layers,
    color: "text-[#8B1E2D] bg-rose-50 border-rose-100"
  },
  {
    step: "06",
    title: "Inspect",
    desc: "Inspect compound batches for bioburden levels, test final products for pyrogens and absolute sterility, and release certificates.",
    icon: ShieldCheck,
    color: "text-emerald-500 bg-emerald-50 border-emerald-100"
  }
];

const GMP_PRINCIPLES = [
  { title: "Stakeholders' Commitment & Customer Feedback", desc: "Constant dialogue with users, doctors, and distributors." },
  { title: "Supplier Management", desc: "Rigorous vetting and sourcing of medical-grade PVC polymers." },
  { title: "TQC (Total Quality Control)", desc: "Chemical, physical, and biological checks at every cycle." },
  { title: "Benchmarking", desc: "Establishing strict internal standards surpassing standard guidelines." },
  { title: "Awards & Awareness", desc: "Encouraging a zero-defect quality mindset across all ranks." },
  { title: "5S System", desc: "Systematic workplace cleanliness, order, and standardized safety." },
  { title: "Kaizen", desc: "Continuous minor and major improvements to daily processes." }
];

const QUALITY_OBJECTIVES = [
  {
    num: "01",
    title: "QMS Integrity & Policy",
    badge: "Core Benchmark",
    desc: "Achieve zero-compromise quality standards by maintaining the end-to-end integrity of our Quality Management System across all operations.",
    icon: ShieldCheck,
    iconColor: "text-burgundy bg-rose-50 border-rose-200",
    pillColor: "bg-rose-100/70 text-burgundy",
  },
  {
    num: "02",
    title: "Dual ISO Compliance",
    badge: "ISO 13485 & 9001",
    desc: "Continual improvement and verifiable compliance adhering to both ISO 13485:2016 (Medical Devices) and ISO 9001:2015 global requirements.",
    icon: Award,
    iconColor: "text-blue-600 bg-blue-50 border-blue-200",
    pillColor: "bg-blue-100/70 text-blue-700",
  },
  {
    num: "03",
    title: "Controlled Facilities & Staff",
    badge: "Class 10,000 Cleanroom",
    desc: "Rigorous management of manufacturing facilities, cleanroom processes, and certified personnel to cost-effectively fulfill regulatory and customer needs.",
    icon: Settings,
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    pillColor: "bg-emerald-100/70 text-emerald-700",
  },
  {
    num: "04",
    title: "Zero-Defect & Waste Elimination",
    badge: "Lean Kaizen",
    desc: "Continuous process optimization by emphasizing reduction of part-to-part variation and the systematic elimination of operational waste.",
    icon: TrendingUp,
    iconColor: "text-purple-600 bg-purple-50 border-purple-200",
    pillColor: "bg-purple-100/70 text-purple-700",
  },
];

const QMS_PLANNING_STEPS = [
  {
    step: "01",
    title: "Process Identification",
    desc: "Identify and map all required clinical, production, and quality control processes across the organization.",
    icon: Layers,
    badge: "Mapping",
  },
  {
    step: "02",
    title: "Sequence & Interaction",
    desc: "Define the operational sequence, inputs/outputs, and interdepartmental handoffs from compounding to final packaging.",
    icon: GitFork,
    badge: "Workflows",
  },
  {
    step: "03",
    title: "Criteria & Methods",
    desc: "Establish strict in-line inspection criteria, calibration standards, and leak-testing methods to ensure tight control.",
    icon: Clipboard,
    badge: "Controls",
  },
  {
    step: "04",
    title: "Resource Deployment",
    desc: "Ensure continuous availability of validated cleanroom machinery, instrumentation, documentation, and expert operators.",
    icon: Users,
    badge: "Readiness",
  },
  {
    step: "05",
    title: "Monitoring & Analytics",
    desc: "Continuous bioburden testing, statistical defect tracking, environmental HVAC monitoring, and quality data audits.",
    icon: Activity,
    badge: "Metrics",
  },
  {
    step: "06",
    title: "Continual CAPA Loops",
    desc: "Execute targeted corrective and preventive actions (CAPA) to realize planned goals and sustain quality evolution.",
    icon: RefreshCw,
    badge: "Improvement",
  },
];

export default function QMSPage() {
  const [qmsView, setQmsView] = useState<"both" | "objectives" | "planning">("both");

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F2740] py-20 lg:py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,30,45,0.15),transparent_50%)]" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-[#8B1E2D]/5 blur-3xl" />
        
        <div className="container-px relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-300">
              Quality Management System
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
              QMS &amp; Quality Policy
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Discover the Quality Control System, objectives, policies, and continuous improvement loops guiding Mecca Healthcare (MHPL) toward zero-defect operations.
            </p>
          </div>
        </div>
      </section>

      {/* General Policy & Philosophy Cards */}
      <section className="py-20 lg:py-24">
        <div className="container-px">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            
            {/* General Policy Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#0F2740] to-slate-900 text-white rounded-3xl p-8 shadow-md border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  General Policy Statement
                </span>
                <h3 className="font-heading text-2xl font-bold mt-6 leading-tight">
                  &ldquo;Manufacturing Products is a Responsibility&rdquo;
                </h3>
                <p className="text-slate-300 text-sm mt-4 leading-relaxed">
                  MHPL&apos;s Total Quality Control System consists of chemical, physical and biological control systems from basic monomer to finished products, and in-process quality control checks at every production cycle.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-rose-300">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Patient Care &amp; Well-being First</span>
              </div>
            </motion.div>

            {/* Quality Policy Aims Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B1E2D] bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
                  Quality Policy Pillars
                </span>
                <h3 className="font-heading text-2xl font-bold text-navy mt-6 leading-tight">
                  Our Policy Aims
                </h3>
                
                <ul className="mt-6 space-y-3.5">
                  {[
                    "Aims to build-up confidence among the consumers by providing world class quality products.",
                    "Focuses on acquiring best raw material from the suppliers.",
                    "Encourages team work by proper training of manpower and complying with ISO 9001:2015 & ISO 13485:2016 standard requirements.",
                    "Encourages the organisation to be committed towards 'constant innovation' (both product and process)."
                  ].map((policyPoint, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{policyPoint}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ISO Process-Based QMS Diagram (Continual Improvement Loop) */}
      <section className="py-20 lg:py-24 bg-white border-y border-slate-200">
        <div className="container-px">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-3 inline-flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
              QMS Framework
            </span>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl mt-3">
              Process-Based Quality Management System
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm">
              Visualizing the circular flow of resource planning, product realization, and measurement parameters driving continual QMS improvement.
            </p>
          </div>

          {/* Continual Improvement Interactive Flow Diagram */}
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xs relative">
            <div className="absolute top-4 right-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Continual Improvement Cycle
            </div>

            {/* Loop Visual Layout */}
            <div className="grid gap-8 md:grid-cols-12 items-center mt-6">
              
              {/* Left Column: Customer Inputs */}
              <div className="md:col-span-3 flex flex-col gap-4 text-center">
                <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase">Input</span>
                  <span className="block text-xs font-bold text-navy uppercase mt-1">Customer Requirement</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 mx-auto transform rotate-90 md:rotate-0" />
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl shadow-xs">
                  <span className="block text-[9px] font-bold text-emerald-600 uppercase">Stage A</span>
                  <span className="block text-xs font-bold text-emerald-800 uppercase mt-1">Product Realization</span>
                </div>
              </div>

              {/* Middle Column: Circular Core Loop */}
              <div className="md:col-span-6 flex flex-col items-center justify-center py-6">
                
                {/* Visual Cycle Box */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 border-4 border-slate-200 rounded-full flex flex-col justify-between p-4 bg-white shadow-soft">
                  
                  {/* Top Node */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#0F2740] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-xl shadow-xs z-10 text-center w-48 border border-slate-800">
                    Management Responsibility
                  </div>

                  {/* Left Node */}
                  <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-blue-50 text-blue-800 border border-blue-100 text-[11px] font-bold uppercase tracking-wider px-3 py-2 rounded-xl shadow-xs z-10 text-center w-36">
                    Resource Management
                  </div>

                  {/* Right Node */}
                  <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-amber-50 text-amber-800 border border-amber-100 text-[11px] font-bold uppercase tracking-wider px-3 py-2 rounded-xl shadow-xs z-10 text-center w-36">
                    Measurement &amp; Improvement
                  </div>

                  {/* Inner loop animation icons */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <RefreshCw className="w-12 h-12 text-[#8B1E2D]/20 animate-spin animate-spin-slow" />
                  </div>

                </div>

              </div>

              {/* Right Column: Customer Outputs */}
              <div className="md:col-span-3 flex flex-col gap-4 text-center">
                <div className="bg-[#8B1E2D]/5 border border-[#8B1E2D]/10 p-4 rounded-xl shadow-xs">
                  <span className="block text-[9px] font-bold text-[#8B1E2D] uppercase">Output</span>
                  <span className="block text-xs font-bold text-[#8B1E2D] uppercase mt-1">Product Delivery</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 mx-auto transform rotate-90 md:rotate-0" />
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl shadow-xs">
                  <span className="block text-[9px] font-bold text-emerald-600 uppercase">Result</span>
                  <span className="block text-xs font-bold text-emerald-800 uppercase mt-1">Customer Satisfaction</span>
                </div>
              </div>

            </div>

            {/* Loop Description Footnote */}
            <p className="mt-8 text-center text-xs text-slate-400 italic">
              *Continually improving the Quality Management System effectiveness in compliance with international ISO and WHO-GMP norms.
            </p>

          </div>

        </div>
      </section>

      {/* Quality Assurance Intent & Concept Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Box: Concept Callout */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#059669] to-emerald-950 text-white rounded-3xl p-8 shadow-md relative overflow-hidden border border-emerald-900">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" />
              <ShieldCheck className="w-10 h-10 text-emerald-300 mb-6" />
              <h3 className="font-heading text-lg font-bold">Concept of Quality Assurance</h3>
              <p className="text-xs sm:text-sm text-emerald-100 mt-3 leading-relaxed">
                For us, Quality Assurance is a concept that **begins before any product is produced**, is present **during all phases of production**, and remains active **after production** till final testing is complete.
              </p>
            </div>

            {/* Right Box: Intent narrative */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Core Intent
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mt-2">
                Adequate Process Control
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We believe the intent of the **Quality Assurance System** is to assure that adequate control is maintained throughout the manufacturing process.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Every material compound, extrusion parameter, assembly step, and sterilization batch is backed by systematic audit logs to eliminate structural defects and ensure clinician trust.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* QC Department Pipeline Flowchart */}
      <section className="py-20 lg:py-28 relative bg-white border-b border-slate-200">
        <div className="container-px">
          
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="eyebrow mb-3 inline-flex items-center gap-1 rounded-full border border-[#8B1E2D]/15 bg-[#8B1E2D]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8B1E2D]">
              System Activities
            </span>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl mt-3">
              Quality Control Department Pipeline
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm">
              Visualizing the sequential phases and audit actions executed systematically by our quality controllers.
            </p>
          </div>

          {/* Visual Step Timeline */}
          <div className="relative max-w-3xl mx-auto flex flex-col items-center">
            {/* Connecting Vertical Line (Desktop only) */}
            <div className="absolute top-10 bottom-10 w-0.5 bg-slate-200 hidden md:block" />

            {PIPELINE_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="w-full flex flex-col items-center relative">
                  
                  {/* Step Card Container */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="w-full bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative z-10 flex flex-col sm:flex-row gap-5 items-start"
                  >
                    {/* Badge Indicator */}
                    <div className="absolute -top-3 left-6 sm:left-auto sm:right-6 bg-slate-100 text-slate-500 border border-slate-200 text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                      Stage {item.step}
                    </div>

                    {/* Left side Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Text block */}
                    <div>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-navy">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Visual Down Connector Arrow (only if not the last step) */}
                  {idx < PIPELINE_STEPS.length - 1 && (
                    <div className="my-4 text-slate-300 flex items-center justify-center h-8 relative z-0">
                      <ArrowDown className="w-5 h-5 animate-bounce" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* GMP Principles & Improvement Framework */}
      <section className="py-20 lg:py-24">
        <div className="container-px">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-3 inline-flex items-center gap-1 rounded-full border border-purple-100 bg-purple-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-600">
              GMP Framework
            </span>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl mt-3">
              GMP Principles for QMS
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm">
              We continuously strive to improve QMS effectiveness by aiming for core GMP principles.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {GMP_PRINCIPLES.map((gmp, idx) => (
              <motion.div
                key={gmp.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs hover:border-[#8B1E2D]/20 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-burgundy flex items-center justify-center font-bold text-xs mb-4">
                  {idx + 1}
                </div>
                <h4 className="font-heading text-sm font-bold text-navy">{gmp.title}</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{gmp.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Quality Objectives & QMS Planning Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 border-t border-b border-slate-200/80">
        <div className="container-px">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="eyebrow mb-3 inline-flex items-center gap-1.5 rounded-full border border-burgundy/15 bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-burgundy">
              <ShieldCheck className="w-3.5 h-3.5 text-burgundy" />
              Operational Standards &amp; Architecture
            </span>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl mt-3">
              Quality Objectives &amp; System Planning
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed text-sm max-w-2xl mx-auto">
              How Mecca Healthcare structures operational goals and ISO-certified execution frameworks to eliminate process variation and secure zero-defect clinical reliability.
            </p>

            {/* View Selector Controls */}
            <div className="mt-8 inline-flex p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300/70 shadow-inner">
              <button
                type="button"
                onClick={() => setQmsView("both")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  qmsView === "both"
                    ? "bg-white text-navy shadow-sm"
                    : "text-slate-600 hover:text-navy hover:bg-white/50"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Executive Overview</span>
              </button>
              <button
                type="button"
                onClick={() => setQmsView("objectives")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  qmsView === "objectives"
                    ? "bg-burgundy text-white shadow-sm"
                    : "text-slate-600 hover:text-navy hover:bg-white/50"
                }`}
              >
                <Target className="w-4 h-4" />
                <span>Quality Objectives</span>
              </button>
              <button
                type="button"
                onClick={() => setQmsView("planning")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  qmsView === "planning"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-navy hover:bg-white/50"
                }`}
              >
                <Sliders className="w-4 h-4" />
                <span>QMS Planning</span>
              </button>
            </div>
          </div>

          {/* Animate View Switcher Content */}
          <AnimatePresence mode="wait">
            {/* ─── 1. EXECUTIVE OVERVIEW (SIDE BY SIDE) ─── */}
            {qmsView === "both" && (
              <motion.div
                key="both-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto items-start"
              >
                {/* Left Column: Quality Objectives */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy bg-rose-50 px-2.5 py-0.5 rounded-full">
                        Operational Goals
                      </span>
                      <h3 className="font-heading text-xl font-bold text-navy mt-1">
                        Quality Objectives
                      </h3>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">4 Core Pillars</span>
                  </div>

                  <div className="grid gap-3.5 pt-1">
                    {QUALITY_OBJECTIVES.map((obj) => {
                      const Icon = obj.icon;
                      return (
                        <div
                          key={obj.num}
                          className="group bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200"
                        >
                          <div className="flex items-start gap-3.5">
                            <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${obj.iconColor} transition-transform group-hover:scale-105`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <h4 className="font-heading text-sm font-bold text-navy group-hover:text-burgundy transition-colors">
                                  {obj.title}
                                </h4>
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md shrink-0 ${obj.pillColor}`}>
                                  {obj.badge}
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                {obj.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: QMS Planning Framework */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                        Operations System
                      </span>
                      <h3 className="font-heading text-xl font-bold text-navy mt-1">
                        QMS Planning Framework
                      </h3>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">6 Lifecycle Steps</span>
                  </div>

                  {/* 6 Step Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {QMS_PLANNING_STEPS.map((step) => {
                      const StepIcon = step.icon;
                      return (
                        <div
                          key={step.step}
                          className="bg-white border border-slate-200/90 rounded-xl p-3 shadow-xs hover:border-blue-200 transition-all duration-200"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-bold text-blue-600 font-mono">
                              Step {step.step}
                            </span>
                            <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                              {step.badge}
                            </span>
                          </div>
                          <h5 className="font-heading text-xs font-bold text-navy flex items-center gap-1.5">
                            <StepIcon className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                            <span className="truncate">{step.title}</span>
                          </h5>
                          <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                            {step.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* 2 Streamlined Governance Callouts */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-1">
                    <div className="bg-gradient-to-br from-blue-50/70 to-indigo-50/50 border border-blue-200/80 rounded-xl p-3.5 shadow-2xs">
                      <div className="flex items-center gap-2 mb-1">
                        <FileCheck className="w-4 h-4 text-blue-600 shrink-0" />
                        <h5 className="font-heading text-xs font-bold text-navy">Audit &amp; Review Loops</h5>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Internal audits and executive reviews proactively inspect system health and integrate standard adjustments.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50/70 to-teal-50/50 border border-emerald-200/80 rounded-xl p-3.5 shadow-2xs">
                      <div className="flex items-center gap-2 mb-1">
                        <Sliders className="w-4 h-4 text-emerald-600 shrink-0" />
                        <h5 className="font-heading text-xs font-bold text-navy">Resource Readiness</h5>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Strategic acquisition of precision inspection tooling, cleanroom fixtures, and technical manpower capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─── 2. QUALITY OBJECTIVES ONLY VIEW ─── */}
            {qmsView === "objectives" && (
              <motion.div
                key="objectives-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="max-w-5xl mx-auto"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  {QUALITY_OBJECTIVES.map((obj) => {
                    const Icon = obj.icon;
                    return (
                      <div
                        key={obj.num}
                        className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:border-burgundy/30 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${obj.iconColor}`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${obj.pillColor}`}>
                              {obj.badge}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-400">OBJECTIVE {obj.num}</span>
                          <h4 className="font-heading text-lg font-bold text-navy mt-1">
                            {obj.title}
                          </h4>
                          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                            {obj.desc}
                          </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                          <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Active Standard
                          </span>
                          <span className="font-medium text-slate-400">Zero-Defect Protocol</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ─── 3. QMS PLANNING ONLY VIEW ─── */}
            {qmsView === "planning" && (
              <motion.div
                key="planning-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="max-w-5xl mx-auto space-y-8"
              >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {QMS_PLANNING_STEPS.map((step) => {
                    const StepIcon = step.icon;
                    return (
                      <div
                        key={step.step}
                        className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs font-mono">
                            {step.step}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                            {step.badge}
                          </span>
                        </div>
                        <h4 className="font-heading text-sm font-bold text-navy flex items-center gap-2">
                          <StepIcon className="w-4 h-4 text-blue-500" />
                          <span>{step.title}</span>
                        </h4>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Audit & Acquisition Cards in full width */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="bg-white border border-blue-200/90 rounded-2xl p-5 shadow-xs flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-navy">Management Review &amp; Audits</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Changes that could affect the quality system are reviewed systematically through planned management review cycles and internal audits.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-emerald-200/90 rounded-2xl p-5 shadow-xs flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                      <Sliders className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-navy">Strategic Resource Acquisition</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Planning includes proactive identification and acquisition of specialized controls, cleanroom fixtures, test equipment, and training resources.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Resource Sub-elements Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container-px">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-3 inline-flex items-center gap-1 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600">
              QMS Pillars
            </span>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl mt-3">
              Three Inter-related Sub-elements
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm">
              Our process-based QMS emphasizes Facilities, Personnel, and Processes to ensure consistent clinical outputs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            
            {/* Management Commitment */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <h4 className="font-heading text-base font-bold text-navy">Management Commitment</h4>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Focused towards customer support, leadership, involvement of people, process-based approach, continual improvement, factual decision making, and mutually beneficial supplier relationships.
              </p>
            </div>

            {/* Resource Management */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <h4 className="font-heading text-base font-bold text-navy">Resource Management</h4>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Effective fulfillment of customer needs by organizing state-of-the-art manufacturing plants, machinery, cleanroom assembly units, and highly trained personnel.
              </p>
            </div>

            {/* Measurement & Improvement */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <h4 className="font-heading text-base font-bold text-navy">Measurement &amp; Improvement</h4>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Continuous inspection of production cycles in accordance with regulatory guidelines and pharmacopoeias to secure uniform device quality.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Laboratory controls summary */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Activity className="w-10 h-10 text-rose-400 mx-auto mb-4" />
          <h4 className="font-heading text-lg sm:text-xl font-bold">Strict Bioburden &amp; Bio-Compatibility Validation</h4>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed max-w-2xl mx-auto">
            Our Quality Control system is backed by fully equipped chemical, physical, and microbiology laboratories inside each manufacturing plant. We execute continuous testing of raw polymers, cleanroom environment compliance, and post-sterilization documentation release.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
