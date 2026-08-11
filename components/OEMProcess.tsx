"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Technical Inquiry & NDA",
    desc: "Review product specifications, CAD drawings, compliance requirements, and execute non-disclosure agreements.",
  },
  {
    step: "02",
    title: "Feasibility & Tooling",
    desc: "Mold assessment, medical grade material selection (DEHP-free PVC, PTFE, silicone), and cleanroom tooling setup.",
  },
  {
    step: "03",
    title: "Pilot Batch & Validation",
    desc: "Trial cleanroom production batch, bio-burden testing, sterilization validation (ISO 11135), and client sign-off.",
  },
  {
    step: "04",
    title: "Mass Cleanroom Production",
    desc: "Scaled automated assembly in Class 100K cleanrooms with 100% inline pressure and visual quality control.",
  },
  {
    step: "05",
    title: "Sterile Packaging & Export",
    desc: "Custom branded blister packaging, export regulatory documentation, and dispatch to 50+ international markets.",
  },
];

export default function OEMProcess() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-border">
      <div className="container-px">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FA] text-medblue text-xs font-semibold uppercase tracking-wider mb-3">
            Manufacturing Process
          </div>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl lg:text-[42px] leading-tight">
            End-to-End OEM Workflow
          </h2>
          <p className="text-gray text-base leading-relaxed mt-4">
            Our streamlined 5-step workflow ensures regulatory compliance, strict quality assurance, and predictable delivery timelines for every OEM partnership.
          </p>
        </div>

        {/* Process Cards Timeline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#F8FAFC] rounded-2xl border border-border p-6 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-black text-2xl text-burgundy">
                    {item.step}
                  </span>
                  {idx !== PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray/40 hidden lg:block" />
                  )}
                </div>

                <h3 className="font-heading font-bold text-navy text-lg leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-gray text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                <Check className="w-3.5 h-3.5" />
                <span>Stage Milestone</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
