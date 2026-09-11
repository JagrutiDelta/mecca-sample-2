"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, 
  FileCheck, 
  Layers, 
  GitFork, 
  Clipboard, 
  Settings, 
  HelpCircle, 
  ArrowDown, 
  Activity, 
  Heart, 
  Award, 
  Sparkles, 
  RefreshCw, 
  Eye, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  UserCheck, 
  ArrowRight, 
  ChevronRight,
  Microscope,
  FlaskConical,
  Gauge,
  Cpu,
  Building2,
  Workflow,
  Download,
  FileSpreadsheet,
  Check
} from "lucide-react";

// 6-Stage QC Department Pipeline
const PIPELINE_STEPS = [
  {
    step: "01",
    title: "Conceptualize",
    badge: "Specification",
    desc: "Define quality goals, target physical tolerances, and standard benchmarks conforming to global regulatory and customer requirements.",
    icon: HelpCircle,
    color: "from-blue-500/20 to-blue-600/5 text-blue-600 border-blue-200/80",
    metrics: ["ISO 13485:2016 Alignment", "Risk Analysis (ISO 14971)", "Clinical Usability Specs"]
  },
  {
    step: "02",
    title: "Plan",
    badge: "Protocol Design",
    desc: "Formulate testing protocols, raw material screening standards, cleanroom compliance scripts, and microbiological laboratory validations.",
    icon: Clipboard,
    color: "from-amber-500/20 to-amber-600/5 text-amber-600 border-amber-200/80",
    metrics: ["Validation Master Plan", "Supplier QC Verification", "Sampling Frequencies"]
  },
  {
    step: "03",
    title: "Develop",
    badge: "Tooling & Jigs",
    desc: "Develop advanced compounding controls, precision physical test jigs, high-cavity tooling validations, and certified cleanroom molding assemblies.",
    icon: Settings,
    color: "from-rose-500/20 to-rose-600/5 text-rose-600 border-rose-200/80",
    metrics: ["IQ/OQ/PQ Validations", "Custom Mold Calibration", "Automated Leak Fixtures"]
  },
  {
    step: "04",
    title: "Co-ordinate",
    badge: "Audits & Training",
    desc: "Coordinate cross-department quality audits, supervisor verification checklists, raw material screening, and continuous staff hygienic training.",
    icon: GitFork,
    color: "from-indigo-500/20 to-indigo-600/5 text-indigo-600 border-indigo-200/80",
    metrics: ["5S Daily Audits", "Operator Certification", "Cross-Unit SOP Reviews"]
  },
  {
    step: "05",
    title: "Implement",
    badge: "In-line Controls",
    desc: "Execute 100% inline physical leak checks under pressure and vacuum, continuous airborne particulate monitoring, and Class 100,000 HVAC controls.",
    icon: Layers,
    color: "from-[#8B1E2D]/20 to-[#8B1E2D]/5 text-[#8B1E2D] border-[#8B1E2D]/30",
    metrics: ["100% Inline Pressure Test", "Zero-Leak Guarantee", "Class 100k Air Balance"]
  },
  {
    step: "06",
    title: "Inspect & Release",
    badge: "Sterility & Release",
    desc: "Test compound batches for bioburden levels, evaluate final products for pyrogens and absolute sterility, and release authoritative batch certificates.",
    icon: ShieldCheck,
    color: "from-emerald-500/20 to-emerald-600/5 text-emerald-600 border-emerald-200/80",
    metrics: ["14-Day Sterility Validation", "LAL Endotoxin Assay", "Batch CoA Release"]
  }
];

// GMP Principles
const GMP_PRINCIPLES = [
  { 
    id: "01",
    title: "Stakeholders' Commitment", 
    tag: "Customer Dialogue",
    desc: "Constant feedback loops with hospital surgeons, medical directors, and healthcare distribution partners worldwide.",
    icon: Users,
    color: "border-blue-200/80 bg-blue-50/50 text-blue-700"
  },
  { 
    id: "02",
    title: "Supplier Management", 
    tag: "Raw Materials",
    desc: "Rigorous vetting and sourcing of virgin medical-grade non-toxic PVC polymers and certified medical components.",
    icon: FileCheck,
    color: "border-emerald-200/80 bg-emerald-50/50 text-emerald-700"
  },
  { 
    id: "03",
    title: "Total Quality Control (TQC)", 
    tag: "End-to-End Checks",
    desc: "Chemical, physical, and biological checks conducted from base monomer receipt to final sealed blister pack.",
    icon: Gauge,
    color: "border-purple-200/80 bg-purple-50/50 text-purple-700"
  },
  { 
    id: "04",
    title: "Benchmarking", 
    tag: "Exceeding Standards",
    desc: "Establishing stringent internal testing tolerances that routinely exceed standard regulatory and statutory limits.",
    icon: TrendingUp,
    color: "border-amber-200/80 bg-amber-50/50 text-amber-700"
  },
  { 
    id: "05",
    title: "Awards & Quality Culture", 
    tag: "Human Factor",
    desc: "Incentivizing a zero-defect mindset across all operator shifts and acknowledging proactive error prevention.",
    icon: Award,
    color: "border-rose-200/80 bg-rose-50/50 text-rose-700"
  },
  { 
    id: "06",
    title: "5S Workplace Discipline", 
    tag: "Cleanroom Order",
    desc: "Rigorous Sort, Set in order, Shine, Standardize, and Sustain protocols maintained across all cleanrooms and lines.",
    icon: Sparkles,
    color: "border-cyan-200/80 bg-cyan-50/50 text-cyan-700"
  },
  { 
    id: "07",
    title: "Kaizen Philosophy", 
    tag: "Continuous Evolution",
    desc: "Daily incremental process enhancements ensuring modern tooling, waste reduction, and consistent clinical outputs.",
    icon: RefreshCw,
    color: "border-red-200/80 bg-red-50/50 text-[#8B1E2D]"
  }
];

// Process-Based QMS Loop Interactive Tabs
const QMS_LOOP_STEPS = [
  {
    id: "mgmt",
    title: "Management Responsibility",
    subtitle: "Governance & Commitment",
    icon: Award,
    color: "text-rose-600 bg-rose-50 border-rose-200",
    activeColor: "bg-gradient-to-br from-[#8B1E2D] to-[#6b1622] text-white shadow-rose-900/20",
    details: "Executive leadership provides active direction, sets uncompromising quality objectives, and conducts quarterly management reviews to ensure regulatory compliance and continuous improvement.",
    deliverables: [
      "Quality Policy deployment across all tiers",
      "Executive Management Review Meetings",
      "Regulatory risk mitigation (ISO 14971)",
      "Zero-tolerance defect mandates"
    ]
  },
  {
    id: "resource",
    title: "Resource Management",
    subtitle: "Facilities, People & Infrastructure",
    icon: Building2,
    color: "text-blue-600 bg-blue-50 border-blue-200",
    activeColor: "bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-blue-900/20",
    details: "Allocating state-of-the-art cleanroom facilities, advanced automated injection machines, modern QA test laboratories, and ongoing personnel certifications.",
    deliverables: [
      "Class 100,000 cleanroom HVAC air handling",
      "High-precision multi-cavity tooling systems",
      "Continuous operator hygiene & GMP training",
      "Calibrated physical & bio-testing equipment"
    ]
  },
  {
    id: "realization",
    title: "Product Realization",
    subtitle: "From Polymer to Sterile Device",
    icon: Cpu,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    activeColor: "bg-gradient-to-br from-emerald-700 to-teal-900 text-white shadow-emerald-900/20",
    details: "Translating customer requirements and surgical standards into physical devices through validated plastic compounding, high-speed extrusion, cleanroom assembly, and ETO sterilization.",
    deliverables: [
      "100% inline leak and pressure testing",
      "Laser micrometer wall thickness control",
      "Cleanroom assembly by certified technicians",
      "Validated ETO cycle sterilization & aeration"
    ]
  },
  {
    id: "measurement",
    title: "Measurement & Improvement",
    subtitle: "Analysis, Audits & Kaizen",
    icon: Activity,
    color: "text-purple-600 bg-purple-50 border-purple-200",
    activeColor: "bg-gradient-to-br from-purple-700 to-slate-900 text-white shadow-purple-900/20",
    details: "Systematic measurement through chemical, physical, and microbiology laboratories, coupled with internal audits and customer satisfaction indices to drive continual improvement.",
    deliverables: [
      "Sterility, pyrogen & endotoxin assays",
      "Internal quality audit frequency schedule",
      "Corrective and Preventive Actions (CAPA)",
      "Customer satisfaction metrics & post-market surveillance"
    ]
  }
];

export default function QMSPage() {
  const [activeLoopStep, setActiveLoopStep] = useState(0);

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-800 selection:bg-[#8B1E2D]/15 selection:text-[#8B1E2D]">
      <Header />

      {/* 01 — HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F2740] via-[#0A1B2E] to-[#0F2740] text-white pt-36 pb-24 md:pt-44 md:pb-28">
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.05] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#8B1E2D]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-px relative z-10 max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-400">About Us</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-rose-300 font-semibold">QMS &amp; Quality Policy</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-300 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-rose-300" />
                ISO 13485:2016 &amp; ISO 9001:2015 Certified
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
                Uncompromising Precision. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-200 to-amber-200">
                  Zero-Defect Quality Policy.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                At Mecca Healthcare (MHPL), quality is not an afterthought—it is engineered into every stage of medical device manufacturing. From virgin polymer compounding to Class 100,000 cleanroom assembly and final sterility release.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#qms-framework"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8B1E2D] to-[#ab2537] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#8B1E2D]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B1E2D]/40 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Explore QMS Framework</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/certifications"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40 cursor-pointer"
                >
                  <FileCheck className="w-4 h-4 text-rose-300" />
                  <span>View All Certifications</span>
                </Link>
              </div>
            </div>

            {/* Right KPI Panel */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-rose-300 mb-6 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-rose-400" />
                  Quality Assurance Metrics
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs text-slate-300">Cleanroom Standard</span>
                    <span className="text-xs font-bold text-white font-mono bg-white/10 px-2.5 py-1 rounded-md">Class 100,000</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs text-slate-300">Inline Leak Checks</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-md">100% Batch Inspected</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs text-slate-300">Sterility Assurance</span>
                    <span className="text-xs font-bold text-white font-mono bg-white/10 px-2.5 py-1 rounded-md">SAL 10⁻⁶ ETO Validated</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-300">Manufacturing Plants</span>
                    <span className="text-xs font-bold text-rose-300 font-mono bg-rose-950/40 border border-rose-500/30 px-2.5 py-1 rounded-md">Gujarat &amp; Rajasthan</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Zero-compromise compliance adhering to US-FDA, CE Medical Device Directives, and CDSCO rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — EXECUTIVE POLICY STATEMENT & PILLARS */}
      <section className="py-20 lg:py-28 relative">
        <div className="container-px max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-12 items-stretch">
            
            {/* General Policy Statement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#0F2740] via-[#132c48] to-[#0A1B2E] text-white p-8 sm:p-10 shadow-xl border border-slate-700/60 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B1E2D]/20 rounded-full blur-3xl pointer-events-none transition-all group-hover:bg-[#8B1E2D]/30" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-rose-300 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                    General Quality Policy
                  </span>
                  <Heart className="w-5 h-5 text-rose-400" />
                </div>

                <blockquote className="font-heading text-2xl sm:text-3xl font-extrabold leading-tight text-white tracking-tight">
                  &ldquo;Manufacturing Products is a Responsibility.&rdquo;
                </blockquote>

                <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Mecca Healthcare&apos;s Total Quality Control (TQC) system governs chemical, physical, and biological testing parameters from raw monomer to finished sterile products, with strict in-process quality control at every single cycle.
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white font-semibold block mb-1">Patient Safety at the Core:</strong>
                  Every infusion set, cannula, catheter, and surgical tube directly impacts human lives. We maintain zero-tolerance for defects.
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-rose-200">
                <span className="font-semibold uppercase tracking-wider">Patient Care &amp; Clinical Trust</span>
                <span className="text-slate-400">Since 1977</span>
              </div>
            </motion.div>

            {/* Quality Policy Aims Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#8B1E2D] bg-rose-50 border border-rose-200/60 px-3.5 py-1.5 rounded-full">
                    Policy Pillars
                  </span>
                  <Award className="w-5 h-5 text-[#8B1E2D]" />
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F2740] leading-tight">
                  Our Strategic Quality Aims
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Core commitments guiding our workforce, supply chain, and manufacturing excellence:
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Clinician & Patient Confidence",
                      desc: "Build unwavering confidence among healthcare professionals by consistently delivering world-class, defect-free medical devices."
                    },
                    {
                      title: "Medical-Grade Raw Materials",
                      desc: "Acquire certified virgin polymers, medical PVC, and components from globally accredited, audited suppliers."
                    },
                    {
                      title: "Manpower Empowerment & Compliance",
                      desc: "Foster teamwork and strict protocol adherence through ongoing training conforming to ISO 9001:2015 & ISO 13485:2016."
                    },
                    {
                      title: "Continuous Innovation (Kaizen)",
                      desc: "Pioneer product and process improvements through dedicated tooling, automation, and scrap reduction."
                    }
                  ].map((pillar, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3.5 p-3 rounded-2xl transition-colors hover:bg-slate-50">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-navy">{pillar.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>ISO 9001:2015 &amp; ISO 13485:2016 Certified</span>
                <span className="font-semibold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Zero-Defect Goal
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 03 — INTERACTIVE PROCESS-BASED QMS FRAMEWORK */}
      <section id="qms-framework" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 scroll-mt-24">
        <div className="container-px max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Workflow className="w-3.5 h-3.5" /> ISO Continual Improvement Loop
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy mt-2 tracking-tight">
              Process-Based Quality Management System
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore how executive commitment, resource allocation, and real-time laboratory analytics drive an unbroken circular loop of quality enhancement.
            </p>
          </div>

          {/* Interactive Flow Architecture */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Tabs / Pillar Selectors */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">
                Click a QMS Stage to Inspect:
              </div>

              {QMS_LOOP_STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeLoopStep === idx;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveLoopStep(idx)}
                    type="button"
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      isActive 
                        ? `${step.activeColor} border-transparent scale-[1.02] shadow-lg` 
                        : "bg-slate-50 border-slate-200/80 text-navy hover:bg-slate-100/80 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm ${
                        isActive ? "bg-white/20 text-white" : `${step.color} border`
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                          isActive ? "text-white/80" : "text-slate-400"
                        }`}>
                          Stage 0{idx + 1}
                        </span>
                        <h4 className="font-heading text-sm sm:text-base font-bold leading-tight">
                          {step.title}
                        </h4>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      isActive ? "translate-x-1 text-white" : "text-slate-400"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Preview Display */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50/80 p-8 sm:p-10 shadow-lg min-h-[420px] flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy bg-rose-50 border border-rose-200 px-3.5 py-1 rounded-full">
                      Pillar 0{activeLoopStep + 1} Overview
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {QMS_LOOP_STEPS[activeLoopStep].subtitle}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy">
                    {QMS_LOOP_STEPS[activeLoopStep].title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {QMS_LOOP_STEPS[activeLoopStep].details}
                  </p>

                  <div className="mt-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                      Core Activities &amp; Validation Deliverables:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {QMS_LOOP_STEPS[activeLoopStep].deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="bg-white border border-slate-200/90 rounded-xl p-3.5 flex items-start gap-2.5 shadow-xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Circular Loop Notice */}
                <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <RefreshCw className="w-3.5 h-3.5 text-burgundy animate-spin animate-spin-slow" />
                    Feeds directly into Customer Satisfaction &amp; Feedback Loop
                  </span>
                  <span className="font-semibold text-navy">Continual Cycle</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Flow Schematic Bar */}
          <div className="mt-12 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="font-heading text-sm sm:text-base font-bold">Input-to-Outcome Integrity</h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Customer Requirements (Input) &rarr; Controlled realization &rarr; Fully Tested Product Delivery (Output)
                </p>
              </div>
            </div>

            <Link
              href="/certifications"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-5 py-2.5 text-xs font-semibold text-white transition-colors border border-white/15"
            >
              <span>Download ISO Dossier</span>
              <Download className="w-3.5 h-3.5 text-rose-300" />
            </Link>
          </div>

        </div>
      </section>

      {/* 04 — CONCEPT OF QUALITY ASSURANCE */}
      <section className="py-20 lg:py-28 bg-[#FAFAF8]">
        <div className="container-px max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left High-Impact Concept Box */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#0b4d37] via-[#043324] to-[#022016] text-white p-8 sm:p-10 shadow-xl relative overflow-hidden border border-emerald-900/50">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-emerald-300" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full">
                Core Philosophy
              </span>

              <h3 className="font-heading text-2xl font-bold mt-4 leading-tight">
                The Concept of Quality Assurance
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                For Mecca Healthcare, Quality Assurance is a comprehensive discipline that:
              </p>

              <div className="mt-6 space-y-3 text-xs sm:text-sm text-emerald-50">
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span><strong>Begins before</strong> any product is produced (supplier auditing, polymer analysis).</span>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span><strong>Maintained during</strong> all phases of production (cleanroom assembly, 100% leak testing).</span>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span><strong>Active after</strong> production till laboratory sterility and pyrogen testing are complete.</span>
                </div>
              </div>
            </div>

            {/* Right Adequate Process Control Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <Gauge className="w-3.5 h-3.5" /> Uncompromised Verification
              </span>

              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                Adequate Process Control at Every Production Cycle
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We believe the fundamental intent of our **Quality Assurance System** is to ensure that comprehensive, measurable control is maintained across all manufacturing operations.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Every material compound, extrusion temperature profile, cleanroom air differential, and sterilization batch is recorded in verifiable audit logs—eliminating structural anomalies and preserving clinician trust in global operating theaters.
              </p>

              {/* Checkpoint Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white border border-slate-200/90 p-4 rounded-2xl shadow-xs">
                  <div className="text-xs font-bold text-navy flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-emerald-600" />
                    Microbiology Testing
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Bioburden checks, pyrogen endotoxin testing (LAL assay), and 14-day sterility incubation.
                  </p>
                </div>

                <div className="bg-white border border-slate-200/90 p-4 rounded-2xl shadow-xs">
                  <div className="text-xs font-bold text-navy flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-emerald-600" />
                    100% Inline Pressure Test
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Positive pressure &amp; vacuum decay leak testing on every manufactured chamber and line.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 05 — QC DEPARTMENT PIPELINE ROADMAP */}
      <section className="py-20 lg:py-28 bg-white border-y border-slate-200/80">
        <div className="container-px max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#8B1E2D]/20 bg-[#8B1E2D]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8B1E2D]">
              <Settings className="w-3.5 h-3.5" /> Sequential Validation
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy mt-2 tracking-tight">
              Quality Control Department Pipeline
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Step-by-step sequential audit actions and engineering gates executed systematically across every production run.
            </p>
          </div>

          {/* 6 Step Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PIPELINE_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        STEP {item.step}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    {/* Icon + Title */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border bg-gradient-to-br ${item.color} shadow-xs`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-navy">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>

                  {/* Metrics Pills */}
                  <div className="mt-6 pt-4 border-t border-slate-200/70 space-y-1.5">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 06 — GMP PRINCIPLES BENTO GRID */}
      <section className="py-20 lg:py-28 bg-[#FAFAF8]">
        <div className="container-px max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-3 inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-700">
              <Award className="w-3.5 h-3.5" /> World Health Organization Standard
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy mt-2 tracking-tight">
              GMP Principles for Continuous Quality
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Seven foundational pillars of Good Manufacturing Practice (WHO-GMP) embedded across all MHPL operating divisions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GMP_PRINCIPLES.map((gmp, idx) => {
              const Icon = gmp.icon;
              return (
                <motion.div
                  key={gmp.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={`rounded-3xl border p-6 sm:p-7 shadow-xs transition-all hover:shadow-md hover:-translate-y-1 bg-white ${gmp.color.split(' ')[0]}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 font-mono font-bold text-xs flex items-center justify-center">
                      {gmp.id}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full">
                      {gmp.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-slate-700" />
                    </div>
                    <h4 className="font-heading text-base font-bold text-navy leading-tight">
                      {gmp.title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {gmp.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 07 — QUALITY OBJECTIVES & QMS PLANNING */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
        <div className="container-px max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            
            {/* Left Box: Quality Objectives */}
            <div className="space-y-6">
              <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-burgundy">
                <CheckCircle2 className="w-3.5 h-3.5" /> Performance Targets
              </span>

              <h3 className="font-heading text-3xl font-extrabold text-navy tracking-tight">
                Quality Objectives
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our measurable quality goals are established at executive levels to systematically advance operational excellence, batch uniformity, and customer satisfaction:
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  "Achieve and sustain our stated Quality Policy by maintaining uncompromised integrity of our QMS.",
                  "Seek continual improvement of the QMS in full compliance with ISO 13485:2016 and ISO 9001:2015 directives.",
                  "Manage facilities, validated processes, and trained personnel to reliably meet and exceed regulatory and client specifications.",
                  "Emphasize the systematic reduction of part-to-part manufacturing variation and the elimination of scrap and waste."
                ].map((obj, oIdx) => (
                  <div key={oIdx} className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl flex items-start gap-3.5 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-[#8B1E2D] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {obj}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box: QMS Planning */}
            <div className="space-y-6">
              <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                <Clipboard className="w-3.5 h-3.5" /> Systematic Execution
              </span>

              <h3 className="font-heading text-3xl font-extrabold text-navy tracking-tight">
                Quality Management System Planning
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                QMS planning at Mecca Healthcare is structured to proactively fulfill quality policies and maintain system integrity through every process change:
              </p>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7 space-y-3.5 shadow-xs">
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">
                  Quality Planning Protocols:
                </h4>

                {[
                  "Process Identification: Defining all processes required for the complete quality system.",
                  "Sequence & Interaction: Mapping exact interdependencies from raw polymer to hospital box.",
                  "Criteria & Methods: Setting unambiguous thresholds for process control and batch release.",
                  "Resource Allocation: Ensuring state-of-the-art testing equipment, fixtures, and trained analysts.",
                  "Analysis & Improvement: Constant statistical monitoring to trigger preventive actions (CAPA)."
                ].map((item, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Callout Box */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-slate-600 leading-relaxed space-y-2">
                <p>
                  <strong>Management Review &amp; Auditing:</strong> Changes affecting the QMS undergo structured cross-functional management review and internal audit cycles before implementation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 08 — THREE INTER-RELATED SUB-ELEMENTS */}
      <section className="py-20 lg:py-28 bg-[#FAFAF8] border-t border-slate-200/80">
        <div className="container-px max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <Layers className="w-3.5 h-3.5" /> Foundational Framework
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy mt-2 tracking-tight">
              Three Inter-Related Sub-Elements
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Our process-based QMS harmonizes Infrastructure, Personnel, and Validated Measurement into a synchronized manufacturing engine.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Card 1 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-burgundy mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-bold text-navy">
                  Management Commitment
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Steered by leadership dedicated to customer support, team involvement, factual decision making, and long-term ethical partnerships with suppliers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-burgundy">
                ISO 9001:2015 Clause 5.1
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-bold text-navy">
                  Resource Management
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Deploying Class 100,000 cleanrooms, computerized extrusion systems, calibrated tooling, and accredited testing laboratories across our manufacturing campuses.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-blue-600">
                Class 100,000 Cleanroom Infrastructure
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-bold text-navy">
                  Measurement &amp; Improvement
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Continuous inline quality assays, bacterial endotoxin testing, internal compliance audits, and responsive CAPA to ensure zero-defect reliability.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-emerald-600">
                LAL Endotoxin &amp; Bioburden Assays
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 09 — LABORATORY CONTROLS & CERTIFICATION CTA */}
      <section className="bg-gradient-to-br from-[#0F2740] via-[#0D1F33] to-[#0A1B2E] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.05] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8B1E2D]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-px max-w-5xl mx-auto text-center relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-6">
            <Microscope className="w-7 h-7 text-rose-300" />
          </div>

          <span className="text-[11px] font-bold uppercase tracking-widest text-rose-300 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full">
            In-House Certified Laboratories
          </span>

          <h3 className="font-heading text-3xl sm:text-4xl font-extrabold mt-4 leading-tight">
            Strict Bioburden &amp; Bio-Compatibility Validation
          </h3>

          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Our Quality Control system is supported by dedicated chemical, physical, and microbiological laboratories in every manufacturing facility. We execute continuous testing of raw polymers, cleanroom micro-environments, and release full batch Certificate of Analysis (CoA) documentation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8B1E2D] to-[#ab2537] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#8B1E2D]/30 hover:shadow-2xl hover:shadow-[#8B1E2D]/50 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <FileCheck className="w-4 h-4" />
              <span>View All Official Certificates</span>
            </Link>

            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-rose-300" />
              <span>Download Product Catalogues</span>
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Contact Quality Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
