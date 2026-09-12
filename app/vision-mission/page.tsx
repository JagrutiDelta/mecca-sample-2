"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuoteModal } from "@/context/QuoteContext";
import {
  Eye,
  Compass,
  HeartPulse,
  Award,
  Scale,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Building2,
  Stethoscope,
  Activity,
  Package,
  Landmark,
  Globe,
  Calendar,
  Factory,
  ArrowRight,
  CheckCircle,
  Quote,
  Target,
  Users,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------------
 * Values & Commitments Data
 * ---------------------------------------------------------------------- */

interface CoreValue {
  icon: LucideIcon;
  title: string;
  badge: string;
  description: string;
  keyPoints: string[];
}

const CORE_VALUES: CoreValue[] = [
  {
    icon: HeartPulse,
    title: "Care & Compassion",
    badge: "Patient-First",
    description:
      "Every medical disposable we manufacture touches human life. Patient safety, comfort, and clinical efficacy are at the center of every design and manufacturing decision.",
    keyPoints: [
      "Patient-centric device ergonomics",
      "Medical-grade non-toxic polymers",
      "Rigorous pyrogen and endotoxin testing",
    ],
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    badge: "Standards & QMS",
    description:
      "We maintain absolute adherence to statutory international standards, validated cleanroom manufacturing, and zero-defect quality systems across all production lines.",
    keyPoints: [
      "ISO 13485:2016 certified facilities",
      "WHO-GMP compliant manufacturing",
      "100% in-line quality inspections",
    ],
  },
  {
    icon: Scale,
    title: "Integrity & Transparency",
    badge: "Ethical Governance",
    description:
      "We believe enduring success is built on honesty, regulatory transparency, strict traceability, and honoring every commitment made to healthcare partners.",
    keyPoints: [
      "Full lot-by-lot batch traceability",
      "Uncompromising regulatory compliance",
      "Transparent partner communications",
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation & Engineering",
    badge: "Continuous R&D",
    description:
      "Continuously advancing medical extrusion, injection mold tooling, cleanroom automation, and sterile barrier packaging to solve evolving healthcare challenges.",
    keyPoints: [
      "In-house tooling & mold engineering",
      "Advanced PVC & polymer extrusion",
      "Validated EO sterilization cycles",
    ],
  },
  {
    icon: Handshake,
    title: "Partnership & Trust",
    badge: "Global Collaboration",
    description:
      "Cultivating long-standing relationships with healthcare systems, government health programs, medical distributors, and contract manufacturing OEM clients.",
    keyPoints: [
      "48+ years of industry trust",
      "Dedicated OEM & private label support",
      "Global supply chain reliability",
    ],
  },
];

const SECTORS_SERVED = [
  {
    icon: Building2,
    title: "Hospitals",
    desc: "Surgical, ICU & General Inpatient Care",
  },
  {
    icon: Stethoscope,
    title: "Clinics",
    desc: "Outpatient Day-Care & Specialty Centers",
  },
  {
    icon: Activity,
    title: "Critical Care",
    desc: "Intensive Care & Emergency Response",
  },
  {
    icon: Package,
    title: "Distributors",
    desc: "Institutional Supply Chains Worldwide",
  },
  {
    icon: Landmark,
    title: "Government Health",
    desc: "State Healthcare Tenders & Annual Rate Contracts",
  },
  {
    icon: Globe,
    title: "OEM Partners",
    desc: "Loan-License & Private Label Manufacturing",
  },
];

/* ------------------------------------------------------------------------
 * Helper UI Components
 * ---------------------------------------------------------------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8B1E2D] backdrop-blur-md">
      <Sparkles className="w-3.5 h-3.5" />
      <span>{children}</span>
    </div>
  );
}

/* ------------------------------------------------------------------------
 * Main Vision & Mission Page Component
 * ---------------------------------------------------------------------- */

export default function VisionMissionPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-body text-slate-800 antialiased selection:bg-burgundy/15 selection:text-navy">
      {/* Global Header */}
      <Header />

      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO SECTION                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-[#0F2740] pt-28 pb-20 lg:pt-36 lg:pb-28 text-white">
        {/* Background Gradient & Geometric Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,30,45,0.25),transparent_60%)]" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-burgundy/10 blur-3xl pointer-events-none" />

        <div className="container-px relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur-md">
              <Compass className="w-4 h-4 text-rose-300" />
              <span>Company Ideals &amp; Purpose</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Vision &amp; Mission Statement
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
              The foundational corporate philosophy and long-term commitments formulated by our founders that govern every sterile medical device we manufacture, test, and deliver across 50+ countries.
            </p>

            {/* Quick Navigation Links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#vision-mission"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-burgundy px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:bg-burgundy-dark hover:shadow-soft cursor-pointer"
              >
                <span>Read Vision &amp; Mission</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/about-us/profile"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-navy cursor-pointer"
              >
                <span>Corporate Profile</span>
              </Link>

              <Link
                href="/about-us/qms"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-navy cursor-pointer"
              >
                <span>Quality Policy &amp; QMS</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. THE CORE VISION & MISSION CARDS                                 */}
      {/* ------------------------------------------------------------------ */}
      <section id="vision-mission" className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="container-px max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow>Enduring Principles</Eyebrow>
            <h2 className="font-heading font-black text-navy text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Our Vision &amp; Mission
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Established in 1977, Mecca Healthcare has always maintained that healthcare manufacturing is a sacred responsibility to human health and societal trust.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* VISION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-200/90 bg-[#F8FAFC] p-8 sm:p-10 shadow-sm hover:border-[#3D5A80]/40 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3D5A80] border border-blue-100 shadow-2xs">
                    <Eye className="h-7 w-7" />
                  </div>
                  <span className="rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#3D5A80]">
                    Long-Term Aspiration
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#3D5A80]">
                  CORPORATE VISION
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mt-1">
                  Our Corporate Vision
                </h3>

                {/* Exact Vision Statement */}
                <div className="mt-6 border-l-4 border-[#3D5A80] bg-white p-6 rounded-r-2xl shadow-sm space-y-3">
                  <Quote className="w-8 h-8 text-[#3D5A80]/20" />
                  <p className="text-lg sm:text-xl font-serif italic leading-relaxed text-slate-800">
                    &ldquo;Our VISION is To be an organisation whose people &amp; products exude{" "}
                    <strong className="font-heading font-black text-navy not-italic tracking-wide">
                      CARE, COMPASSION &amp; TRUST
                    </strong>{" "}
                    towards its customers, business partners and the society at large.&rdquo;
                  </p>
                </div>

                {/* Key Vision Pillars */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-[#3D5A80] shrink-0 mt-0.5" />
                    <span><strong>Human Empathy:</strong> Infusing clinical compassion into every medical component produced.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-[#3D5A80] shrink-0 mt-0.5" />
                    <span><strong>Enduring Trust:</strong> Cultivating transparent and reliable relationships with clinicians worldwide.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-[#3D5A80] shrink-0 mt-0.5" />
                    <span><strong>Societal Impact:</strong> Delivering affordable, hospital-grade safety to diverse communities.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1.5 text-[#3D5A80]">
                  <CheckCircle className="h-4 w-4" />
                  Continuous Quality Since 1977
                </span>
                <span>Mecca Healthcare Pvt. Ltd.</span>
              </div>
            </motion.div>

            {/* MISSION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-200/90 bg-[#F8FAFC] p-8 sm:p-10 shadow-sm hover:border-burgundy/40 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-burgundy border border-rose-100 shadow-2xs">
                    <Compass className="h-7 w-7" />
                  </div>
                  <span className="rounded-full bg-rose-50 border border-rose-200/80 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-burgundy">
                    Five-Year Strategic Roadmap
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-burgundy">
                  STRATEGIC MISSION
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mt-1">
                  Our Mission Statement
                </h3>

                {/* Exact Mission Statement */}
                <div className="mt-6 border-l-4 border-burgundy bg-white p-6 rounded-r-2xl shadow-sm space-y-3">
                  <Quote className="w-8 h-8 text-burgundy/20" />
                  <p className="text-base sm:text-lg font-serif italic leading-relaxed text-slate-800">
                    &ldquo;Our MISSION for coming five years is To be an organisation whose employees strive for growth and values the contribution made by its founding members, through always keeping in mind the{" "}
                    <strong className="font-heading font-black text-navy not-italic">
                      health and safety of the users
                    </strong>{" "}
                    of its products and thus satisfying the growing needs of the healthcare industry and its customers.&rdquo;
                  </p>
                </div>

                {/* Key Mission Pillars */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
                    <span><strong>User &amp; Patient Safety:</strong> Uncompromised sterile barrier protocols protecting patients &amp; nurses.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
                    <span><strong>Honoring Founders&apos; Legacy:</strong> Sustaining the foundational values established by Mr. O.P. Sharma.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
                    <span><strong>Global Healthcare Needs:</strong> Scaling production to support hospitals and OEM partners worldwide.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1.5 text-burgundy">
                  <CheckCircle className="h-4 w-4" />
                  Safety First In Every Component
                </span>
                <span>Active 5-Year Action Plan</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. CORE VALUES (What We Stand For)                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
        <div className="container-px max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow>Guiding Philosophy</Eyebrow>
            <h2 className="font-heading font-black text-navy text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              What We Stand For
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Our core values form the ethical foundation for our workforce across Gujarat and Rajasthan, ensuring consistency, reliability, and human compassion.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-burgundy/30 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-burgundy/10 text-burgundy">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                        {val.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy">
                      {val.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                      {val.keyPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-burgundy shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Quality Statement Card in the Grid */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="rounded-3xl border border-slate-800 bg-slate-900 text-white p-7 sm:p-8 flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-rose-300">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold text-rose-300 bg-white/10 px-3 py-1 rounded-full">
                    Quality Pledge
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white">
                  Zero Compromise on Patient Safety
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every product leaving our facilities is tested under validated microbiological, bio-burden, sterility, and tensile stress protocols before release to hospitals.
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>ISO 13485:2016 Certified QMS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>CDSCO Form MD-9 Validated Facilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Validated Ethylene Oxide Sterilization</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. FOUNDING HERITAGE & MANUFACTURING CAPACITY                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="container-px max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <Eyebrow>Heritage &amp; Continuity</Eyebrow>

              <h2 className="font-heading font-black text-navy text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                Pioneering Medical Device Manufacturing Since 1977
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Founded in 1977 by <strong>Mr. O.P. Sharma</strong>, Mecca Healthcare was established to overcome the shortage of accessible, hospital-grade medical devices in India, actively transitioning the nation away from expensive foreign imports through domestic precision engineering.
                </p>
                <p>
                  Today, Mecca operates two active CDSCO-licensed manufacturing facilities in Kalol (Gujarat) and Boranada (Rajasthan), with global operations coordinated through UK subsidiary <strong>Acme UK Inc Limited</strong>. Our units integrate medical polymer compounding, automated tube extrusion, injection molding, cleanroom assembly, and EO gas sterilization under one quality umbrella.
                </p>
                <p>
                  Backed by <strong>ISO 13485:2016</strong> and <strong>WHO-GMP</strong> compliance, our sterile disposables serve state health departments, hospital consortia, and multinational healthcare brands across 50+ countries.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about-us/profile"
                  className="inline-flex items-center gap-2 text-sm font-bold text-burgundy hover:text-burgundy-dark transition-colors"
                >
                  <span>Explore Company History &amp; Timeline</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Metric Box */}
            <div className="lg:col-span-5 bg-[#0F2740] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-rose-300">
                  <Factory className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-white">
                    Manufacturing Strength
                  </h4>
                  <span className="text-xs text-slate-400">Integrated Infrastructure</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our combined manufacturing operations maintain high production output across specialized plants in Gujarat and Rajasthan:
              </p>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                  <span className="text-2xl sm:text-3xl font-black text-rose-300 font-heading">
                    1977
                  </span>
                  <p className="text-xs text-slate-400 mt-1">Established Legacy</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                  <span className="text-2xl sm:text-3xl font-black text-rose-300 font-heading">
                    30M+
                  </span>
                  <p className="text-xs text-slate-400 mt-1">Annual Pieces Capacity</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                  <span className="text-2xl sm:text-3xl font-black text-rose-300 font-heading">
                    2 Units
                  </span>
                  <p className="text-xs text-slate-400 mt-1">CDSCO-Certified Plants</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                  <span className="text-2xl sm:text-3xl font-black text-rose-300 font-heading">
                    50+
                  </span>
                  <p className="text-xs text-slate-400 mt-1">Export Nations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. SECTORS & ENVIRONMENTS SERVED                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
        <div className="container-px max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow>Global Healthcare Footprint</Eyebrow>
            <h2 className="font-heading font-black text-navy text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Serving Healthcare Worldwide
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              From intensive care units and emergency theatres to national healthcare rate contracts and global private label partnerships.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {SECTORS_SERVED.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.title}
                  className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 text-center shadow-2xs hover:shadow-md hover:border-burgundy/40 transition-all duration-300 group"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-burgundy/10 text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-sm font-bold text-navy">
                    {sector.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-500 leading-tight">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. FINAL SIGNATURE CALL TO ACTION                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 bg-white">
        <div className="container-px max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[32px] bg-burgundy-gradient px-8 py-14 text-white md:px-14 lg:px-16 shadow-xl">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <div className="eyebrow mb-5 inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  <span>Start Your Partnership</span>
                </div>

                <h2 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  Together, We Care Beyond Products
                </h2>

                <p className="mt-5 max-w-2xl leading-relaxed text-white/80 text-sm sm:text-base">
                  Mecca Healthcare manufactures world-class sterile medical devices with innovation, quality, integrity, and compassion. Submit your institutional requirements or connect with our leadership team today.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-3 lg:min-w-[210px]">
                <Link
                  href="/contact"
                  className="font-heading inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-burgundy shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer text-center"
                >
                  Contact Our Team →
                </Link>

                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="font-heading inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 cursor-pointer text-center"
                >
                  Request a Quote →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
