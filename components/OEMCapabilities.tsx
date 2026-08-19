"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Building2, CheckCircle2, Globe2 } from "lucide-react";

export default function OEMCapabilities() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container-px">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Image Showcase */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-[0_20px_56px_rgba(16,43,70,0.16)] border border-white/80 bg-white"
            >
              <img
                src="/oem/business_partnership.png"
                alt="Global healthcare executives in corporate partnership meeting"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md border border-border rounded-xl p-5 shadow-[0_8px_24px_rgba(16,43,70,0.12)] flex items-center gap-4 max-w-[280px]"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-heading font-bold text-navy text-sm">
                  30M+ Annual Units
                </div>
                <div className="text-xs text-gray mt-0.5">
                  100% Quality Pass Rate
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Infrastructure & Compliance Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8EDEF] text-burgundy text-xs font-semibold uppercase tracking-wider mb-3">
              Facilities &amp; Quality
            </div>
            <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl lg:text-[42px] leading-tight mb-4">
              World-Class Cleanroom Infrastructure  
            </h2>
            <p className="text-gray text-base leading-relaxed mb-8">
              Meca Care operates modern ISO 13485 cleanrooms equipped with high-speed automated extrusion lines, micro-injection molding machines, and in-house EO sterilization facilities.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl border border-border p-4 shadow-sm flex items-start gap-3">
                <Building2 className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-navy text-sm">Class 100K Cleanrooms</h4>
                  <p className="text-gray text-xs mt-1">Controlled air filtration &amp; humidity environment</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-4 shadow-sm flex items-start gap-3">
                <Award className="w-5 h-5 text-medblue shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-navy text-sm">In-House Sterilization</h4>
                  <p className="text-gray text-xs mt-1">ISO 11135 validated EO gas sterilization chambers</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-4 shadow-sm flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-navy text-sm">Microbiology Lab</h4>
                  <p className="text-gray text-xs mt-1">Sterility, pyrogen, and bio-burden testing</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-4 shadow-sm flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-navy text-sm">Global Regulatory File</h4>
                  <p className="text-gray text-xs mt-1">CE mark technical dossiers ready for audit</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-navy">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ISO 13485:2016</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>WHO-GMP Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>CE Marked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
