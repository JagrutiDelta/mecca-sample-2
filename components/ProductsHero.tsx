"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteContext";

export default function ProductsHero() {
  const { openQuoteModal } = useQuoteModal();
  return (
    <section className="relative overflow-hidden bg-bg pt-36 pb-16 lg:pt-48 lg:pb-24 border-b border-border">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23102B46' stroke-width='0.5' stroke-opacity='0.15'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-px relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#F8EDEF] border border-[#F1D2D6] px-3.5 py-1.5 rounded-full text-burgundy text-xs font-semibold uppercase tracking-wider mb-5"
            >
              <ShieldCheck className="w-4 h-4 text-burgundy" />
              <span>WHO-GMP &amp; ISO 13485 Certified Medical Line</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-navy text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl leading-tight mb-5"
            >
              Precision Medical Disposables &amp; Advanced Infusion Tech
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray text-sm sm:text-base leading-relaxed max-w-lg mb-8"
            >
              Explore Meca Care's comprehensive portfolio of medical disposables,
              infusion systems, and precision-engineered healthcare products manufactured in ISO 13485 cleanroom facilities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 bg-burgundy text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(148,28,43,0.28)] hover:bg-burgundy-dark hover:shadow-xl transition-all group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="inline-flex items-center justify-center gap-2 bg-white text-navy border border-border font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_2px_8px_rgba(16,43,70,0.08)] hover:bg-slate-50 transition-all group cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-gray group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT HERO IMAGE & FLOATING GLASS CARD */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(16,43,70,0.15)] border border-white/80 bg-white"
            >
              <img
                src="/products/hero_medical_products.png"
                alt="Premium medical disposable products"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Glassmorphism Quality Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md border border-border/90 rounded-xl p-4 shadow-[0_8px_24px_rgba(16,43,70,0.12)] flex items-center gap-3 max-w-[280px]"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="font-heading font-bold text-navy text-xs leading-snug">
                  100% Quality Inspected
                </div>
                <div className="text-[11px] text-gray mt-0.5 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>ISO 13485 & CE Compliant</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
