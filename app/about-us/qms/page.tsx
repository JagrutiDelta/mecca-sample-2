"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, FileCheck, Layers, GitFork, Clipboard, Settings, HelpCircle, 
  ArrowDown, Activity, Heart, Award, Sparkles, RefreshCw, Eye, Users, 
  TrendingUp, CheckCircle2, UserCheck, ArrowRight, ArrowLeftRight
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

export default function QMSPage() {
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
      <section className="py-20 bg-slate-100 border-t border-b border-slate-200">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto items-start">
            
            {/* Left Box: Quality Objectives */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
                Operational Goals
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mt-2">
                Quality Objectives
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The quality objectives are aimed to improve the organization&apos;s operational effectiveness and customer satisfaction.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  "Our overall quality goal is to achieve our quality policy, by maintaining the integrity of our QMS.",
                  "To seek continual improvement of the QMS in compliance with ISO 13485:2016 & ISO 9001:2015 requirements.",
                  "Manage and control facilities, processes, quality systems & personnel to cost effectively produce products and furnish delivery services that meet regulatory & customer needs.",
                  "Be committed to continuous process improvement by emphasizing reduction of part-to-part variation and the elimination of all waste."
                ].map((objective, oIdx) => (
                  <div key={oIdx} className="bg-white border border-slate-200 p-4 rounded-xl flex items-start gap-3 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-burgundy border border-rose-100 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box: QMS Planning */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Operations System
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mt-2">
                Quality Management System Planning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The quality management system planning is carried out to meet the general requirements of the QMS, quality policy and the quality objectives.
              </p>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
                <h4 className="font-heading text-xs font-bold text-navy uppercase tracking-wider">
                  Quality planning in MHPL focuses on:
                </h4>
                
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  {[
                    "Identifying of processes needed for the quality management system and their application.",
                    "Determining the sequence and interaction of these processes.",
                    "Determining criteria and methods needed to ensure that the operation and control of these processes are effective.",
                    "Ensuring the availability of resources and information necessary to support the operation.",
                    "Monitoring, measurement and analysis of these processes.",
                    "Implementing actions necessary to achieve planned results and continual improvement."
                  ].map((planItem, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 mt-2" />
                      <span>{planItem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Callout box for reviews and equipment */}
              <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl space-y-3 text-xs leading-relaxed text-slate-600">
                <p>
                  <strong>Management Review &amp; Audit Process:</strong> Changes that could affect the quality management system are reviewed and quality planning is carried out through management review process and internal audit process.
                </p>
                <p>
                  <strong>Resource Acquisition:</strong> In MHPL, quality planning includes identification and acquisition of any controls, processes, equipment (including inspection and test equipment), fixtures, resources and skills that may be needed to achieve the required quality.
                </p>
              </div>
            </div>

          </div>
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
