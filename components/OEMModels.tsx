"use client";

import { motion } from "framer-motion";
import {
  Tag,
  Settings,
  FileCheck,
  PackageCheck,
  Layers,
  Sliders,
  CheckCircle2,
} from "lucide-react";

const OEM_MODELS = [
  {
    icon: Tag,
    title: "Private Label Manufacturing",
    desc: "Launch complete medical disposable product lines under your brand identity with custom packaging, color coding, and label specifications.",
    features: ["Custom Brand Packaging", "Color-Coded Hubs & Caps", "Multilingual IFU Printing"],
  },
  {
    icon: Settings,
    title: "Turnkey OEM Development",
    desc: "From initial CAD engineering and mold design to cleanroom mass production and sterile packaging under one unified manufacturing roof.",
    features: ["CAD Design & Prototyping", "Cleanroom Mold Tooling", "Rapid Pilot Batching"],
  },
  {
    icon: FileCheck,
    title: "Loan License Manufacturing",
    desc: "Leverage our WHO-GMP and ISO 13485 cleanroom infrastructure to produce your licensed medical device formulations seamlessly.",
    features: ["Regulatory Filing Support", "Audit-Ready Batch Records", "ISO 13485 Compliance"],
  },
  {
    icon: PackageCheck,
    title: "Contract Packaging & Sterilization",
    desc: "Custom blister packing, pouch sealing, and EO gas sterilization (ISO 11135) services meeting global hospital regulatory standards.",
    features: ["Tyvek Blister Sealing", "In-House EO Sterilization", "100% Leak & Pressure Testing"],
  },
  {
    icon: Layers,
    title: "White Label Portfolio",
    desc: "Instant access to market-ready CE & ISO 13485 certified infusion, catheter, and respiratory products with flexible minimum order quantities.",
    features: ["Ready CE Technical Files", "Low Initial MOQs", "Fast Commercial Dispatch"],
  },
  {
    icon: Sliders,
    title: "Custom Material & Gauge Specs",
    desc: "Engineered resin options (DEHP-free PVC, silicone, radiopaque PTFE) and bespoke gauge/tubing dimensions tailored to clinical demands.",
    features: ["DEHP-Free PVC & Silicone", "Custom Needle Bevel Cuts", "Radiopaque Line Extrusion"],
  },
];

export default function OEMModels() {
  return (
    <section id="oem-models" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container-px">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8EDEF] text-burgundy text-xs font-semibold uppercase tracking-wider mb-3">
            OEM Solutions
          </div>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl lg:text-[42px] leading-tight">
            Tailored Engagement Models for Healthcare Brands
          </h2>
          <p className="text-gray text-base leading-relaxed mt-4">
            Whether you require full turnkey manufacturing, contract packaging, or private label branding, Meca Care delivers compliant solutions designed around your commercial goals.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {OEM_MODELS.map((model, idx) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-border p-7 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EEF4FA] text-medblue flex items-center justify-center mb-6 group-hover:bg-burgundy group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-navy text-xl leading-snug mb-3 group-hover:text-burgundy transition-colors">
                    {model.title}
                  </h3>

                  <p className="text-gray text-xs sm:text-sm leading-relaxed mb-6">
                    {model.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/80 space-y-2">
                  {model.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-medium text-navy">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
