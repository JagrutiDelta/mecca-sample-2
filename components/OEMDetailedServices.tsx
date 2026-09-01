"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Tag,
  FileCheck2,
  PackageCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  FlaskConical,
  Microscope,
  CheckSquare,
  Cpu,
  Globe2,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteContext";

const OEM_SERVICES_DATA = [
  {
    id: "contract-manufacturing",
    eyebrow: "Turnkey Medical Production",
    title: "Contract Manufacturing",
    icon: Factory,
    badgeColor: "bg-blue-500/10 text-blue-700 border-blue-200",
    iconBg: "bg-blue-600 text-white",
    summary:
      "End-to-end medical device manufacturing from resin formulation, precision extrusion, micro-injection molding to automated cleanroom assembly and sterilization.",
    description:
      "Mecca Healthcare provides comprehensive contract manufacturing for global healthcare enterprises, hospitals, and multinational medical device innovators. With 3 world-class production facilities (Kalol, Chhatral, Jodhpur) featuring ISO Class 10,000 (Class 7) & Class 100,000 (Class 8) cleanrooms, we take your conceptual designs or established portfolios and scale them into cost-efficient, high-yield mass production.",
    stats: [
      { label: "Annual Cleanroom Capacity", value: "30M+ Units" },
      { label: "Cleanroom Standards", value: "Class 10K & 100K" },
      { label: "Sterilization Standard", value: "ISO 11135 (EO Gas)" },
      { label: "QA Tolerance", value: "100% Inline Tested" },
    ],
    capabilities: [
      "Custom polymer compounding (Medical-grade PVC, DEHP-free PVC, Polycarbonate, PTFE, TPU)",
      "High-precision multi-lumen tubing extrusion with custom radiopaque barium lines",
      "Micro-injection molding for specialized connectors, luer locks, drip chambers, and valves",
      "Automated and semi-automated assembly lines with 100% leak, flow, and tensile testing",
      "Full batch validation dossiers, Certificates of Analysis (CoA), and audit-ready traceability",
    ],
    idealFor: "Global medical distributors, hospital supply corporations, and MedTech OEMs needing dedicated cleanroom capacity.",
    image: "/oem/hero_engineers.png",
  },
  {
    id: "private-label",
    eyebrow: "Brand Ready Solutions",
    title: "Private Label Manufacturing",
    icon: Tag,
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-600 text-white",
    summary:
      "Launch market-ready, certified infusion, airway, urology, and surgical disposables under your own proprietary brand identity.",
    description:
      "Accelerate your time-to-market without large capital investments in tooling or lengthy regulatory approvals. Our private label program allows healthcare brands and regional distributors to brand Mecca Healthcare’s CE-marked, ISO 13485-certified medical device lines with customized packaging, multilingual Instructions for Use (IFU), and custom color-coded components.",
    stats: [
      { label: "Ready Formulations", value: "54+ Medical Devices" },
      { label: "Packaging Options", value: "Tyvek / Blister / Pouch" },
      { label: "Export Markets", value: "50+ Countries" },
      { label: "Turnaround Time", value: "Rapid Dispatch" },
    ],
    capabilities: [
      "Complete brand customization: outer carton, inner shelf box, individual sterile peel pouch, and barcode printing",
      "Custom component color-coding (hub colors, clamp designs, valve grips) matching your product identity",
      "Multilingual translation and regulatory labeling adhering to EU MDR, US FDA UDI, or local ministry mandates",
      "Access to established CE Mark technical files and clinical evaluation reports for seamless market import",
      "Low flexible Minimum Order Quantities (MOQs) for new brand launches and regional market testing",
    ],
    idealFor: "Regional healthcare brands, pharmaceutical groups, and medical supply importers building brand equity.",
    image: "/oem/business_partnership.png",
  },
  {
    id: "loan-license",
    eyebrow: "Regulatory Infrastructure",
    title: "Loan License Manufacturing",
    icon: FileCheck2,
    badgeColor: "bg-amber-500/10 text-amber-700 border-amber-200",
    iconBg: "bg-amber-600 text-white",
    summary:
      "Utilize our CDSCO-approved and WHO-GMP certified cleanroom plants to manufacture your licensed medical device and pharma formulations.",
    description:
      "For medical device and pharmaceutical brand owners holding regulatory product licenses (Form MD-5 / MD-9 / Form 28 under CDSCO and international regulatory authorities), Mecca Healthcare offers verified Loan Licensing partnerships. We operate as your audited manufacturing site, maintaining strict standard operating procedures (SOPs), complete documentation, and zero cross-contamination protocols.",
    stats: [
      { label: "Regulatory Clearance", value: "CDSCO & WHO-GMP" },
      { label: "Quality System", value: "ISO 13485:2016" },
      { label: "Audit Readiness", value: "100% Documented" },
      { label: "Facility Inspection", value: "Open for Client Audits" },
    ],
    capabilities: [
      "Full regulatory support for license endorsements, site master files (SMF), and dossier submissions",
      "Dedicated production runs with isolated cleanroom scheduling to prevent cross-contamination",
      "Comprehensive in-house microbiology, sterility, pyrogen (LAL), and physicochemical testing labs",
      "Batch manufacturing records (BMR) and batch packaging records (BPR) preserved as per statutory requirements",
      "Seamless raw material reconciliation and transparent cost modeling",
    ],
    idealFor: "Pharma corporations and medical device license holders requiring certified manufacturing premises.",
    image: "/facilities/plant_cleanroom.png",
  },
  {
    id: "custom-packaging",
    eyebrow: "Sterile Packaging & Sterilization",
    title: "Custom Packaging & EO Sterilization",
    icon: PackageCheck,
    badgeColor: "bg-burgundy/10 text-burgundy border-burgundy/20",
    iconBg: "bg-burgundy text-white",
    summary:
      "Medical-grade Tyvek blister packaging, four-side seal pouching, vacuum packing, and ISO 11135 Ethylene Oxide (EO) sterilization services.",
    description:
      "Sterility assurance and packaging integrity are paramount in medical manufacturing. Mecca Healthcare operates automated thermoforming blister packing machines, high-integrity medical paper/film sealing lines, and large-capacity Ethylene Oxide (EO) sterilization chambers validated under ISO 11135 standards with biological indicators (Bacillus atrophaeus) in every cycle.",
    stats: [
      { label: "Sterilization Method", value: "EO Gas (ISO 11135)" },
      { label: "Packaging Formats", value: "Medical Blister / Pouch" },
      { label: "Shelf Life Testing", value: "Up to 5 Years Validated" },
      { label: "Barcode & UDI", value: "GS1 & 2D DataMatrix" },
    ],
    capabilities: [
      "Medical-grade DuPont™ Tyvek® and thermoformable clear film blister packing for high-protection devices",
      "Peelable medical paper/poly pouch sealing with sterile barrier integrity and chevron peel design",
      "In-house validated EO gas sterilization chambers with automated aeration cycles for low residual ETO/ECH levels",
      "GS1 barcode, 2D DataMatrix, batch numbering, manufacturing/expiry date thermal transfer printing",
      "Rigorous seal integrity dye penetration tests, burst pressure testing, and accelerated aging shelf-life validation",
    ],
    idealFor: "Medical device manufacturers seeking outsourced sterile packaging or third-party validated EO gas sterilization.",
    image: "/facilities/plant_sterilization.png",
  },
];

export default function OEMDetailedServices() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-px">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8EDEF] text-burgundy text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OEM &amp; Contract Capabilities</span>
          </div>
          <h2 className="font-heading font-black text-navy text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Specialized OEM Service Pillars
          </h2>
          <p className="text-gray text-base md:text-lg leading-relaxed mt-4">
            Explore our four core manufacturing and licensing models engineered to deliver clinical precision, regulatory compliance, and scalable global output.
          </p>
        </div>

        {/* Quick Anchor Navigation Bar */}
        <div className="sticky top-20 z-30 bg-[#F8FAFC]/95 backdrop-blur-md border border-border rounded-2xl p-2.5 mb-16 shadow-card hidden md:flex items-center justify-between gap-2 max-w-4xl mx-auto">
          {OEM_SERVICES_DATA.map((srv) => {
            const Icon = srv.icon;
            return (
              <a
                key={srv.id}
                href={`#${srv.id}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-navy hover:text-burgundy hover:bg-white transition-all shadow-sm flex-1 justify-center text-center"
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{srv.title}</span>
              </a>
            );
          })}
        </div>

        {/* Four Dedicated Service Sections */}
        <div className="space-y-20 md:space-y-28">
          {OEM_SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-[#F8FAFC] border border-border rounded-3xl p-6 sm:p-10 lg:p-14 shadow-card relative overflow-hidden"
              >
                {/* Decorative background accent */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-medblue/5 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Content Column */}
                  <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${service.iconBg} flex items-center justify-center shadow-sm`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${service.badgeColor}`}>
                        {service.eyebrow}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-navy text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4">
                      {service.title}
                    </h3>

                    <p className="text-navy/90 font-medium text-sm sm:text-base leading-relaxed mb-4">
                      {service.summary}
                    </p>

                    <p className="text-gray text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                      {service.stats.map((st, i) => (
                        <div key={i} className="bg-white border border-border/80 rounded-xl p-3 text-center shadow-sm">
                          <span className="text-[11px] text-gray block leading-tight mb-1">{st.label}</span>
                          <span className="text-xs sm:text-sm font-heading font-bold text-navy">{st.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Capabilities Checklist */}
                    <div className="bg-white border border-border rounded-2xl p-5 sm:p-6 mb-8 shadow-sm">
                      <h4 className="font-heading font-bold text-navy text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-burgundy" /> Key Engineering &amp; QA Capabilities
                      </h4>
                      <ul className="space-y-2.5">
                        {service.capabilities.map((cap, ci) => (
                          <li key={ci} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy/80">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For + CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border">
                      <div className="text-xs text-gray max-w-sm">
                        <strong className="text-navy font-semibold">Recommended for: </strong>
                        {service.idealFor}
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => openQuoteModal()}
                          className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm transition-colors shrink-0"
                        >
                          <span>Request OEM Quote</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <a
                          href="#oem-contact"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-burgundy transition-colors shrink-0"
                        >
                          Contact Engineers
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Visual / Feature Column */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 shadow-card relative">
                      <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h4 className="font-heading font-bold text-navy text-lg mb-2">
                        Compliance &amp; Quality Guarantee
                      </h4>
                      <p className="text-xs text-gray leading-relaxed mb-6">
                        Every production run at Mecca Healthcare is executed under audited ISO 13485:2016 and WHO-GMP protocols with complete batch documentation and full traceability.
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-border text-xs">
                          <span className="font-medium text-navy">Facility Location</span>
                          <span className="font-semibold text-burgundy">Kalol &amp; Chhatral (India)</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-border text-xs">
                          <span className="font-medium text-navy">Confidentiality</span>
                          <span className="font-semibold text-emerald-600">Strict NDA Protected</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-border text-xs">
                          <span className="font-medium text-navy">Quality Assurance</span>
                          <span className="font-semibold text-navy">100% Tested &amp; Certified</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-border text-xs">
                          <span className="font-medium text-navy">Global Logistics</span>
                          <span className="font-semibold text-medblue">FOB / CIF / Ex-Works</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-burgundy/5 border border-burgundy/15 text-xs text-burgundy font-medium flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        <span>Backed by 48+ years manufacturing legacy since 1977.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
