"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Eye,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { ALL_CERTIFICATES, CertificateItem } from "@/lib/certificates";

const CATEGORIES = [
  "All Certifications",
  "Quality Management",
  "International & CE",
  "Statutory & Government",
] as const;

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState<string>("All Certifications");
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const filteredCerts =
    activeCategory === "All Certifications"
      ? ALL_CERTIFICATES
      : ALL_CERTIFICATES.filter((c) => c.category === activeCategory);

  const currentIndex = selectedCert
    ? ALL_CERTIFICATES.findIndex((c) => c.id === selectedCert.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > -1) {
      const prevIdx = (currentIndex - 1 + ALL_CERTIFICATES.length) % ALL_CERTIFICATES.length;
      setSelectedCert(ALL_CERTIFICATES[prevIdx]);
    }
  };

  const handleNext = () => {
    if (currentIndex > -1) {
      const nextIdx = (currentIndex + 1) % ALL_CERTIFICATES.length;
      setSelectedCert(ALL_CERTIFICATES[nextIdx]);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCert) return;
      if (e.key === "Escape") setSelectedCert(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <section id="certifications" className="section-py bg-[#FAFAF8] relative overflow-hidden">
      {/* Subtle background aesthetics */}
      <div className="pointer-events-none absolute inset-0 bg-medical-grid bg-grid opacity-25 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_35%,black,transparent)]" />
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-gradient-to-b from-burgundy/[0.06] via-medblue/[0.04] to-transparent blur-3xl rounded-full" />

      <div className="container-px relative">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-burgundy/20 bg-burgundy/[0.06] px-5 py-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-burgundy shadow-sm backdrop-blur-md mb-4"
          >
            <ShieldCheck className="h-4 w-4 text-burgundy" />
            <span>Institutional Trust &amp; Compliance</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-navy text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15]"
          >
            Compliance &amp; Certifications Built Into{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-burgundy via-[#a82234] to-medblue bg-clip-text text-transparent">
                Every Facility
              </span>
              <svg
                className="absolute left-0 -bottom-1.5 w-full overflow-visible"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5 Q 50 1 100 5 T 199 5"
                  stroke="#ff91a0"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-slate-600 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto font-normal"
          >
            Mecca Healthcare operates under stringent international quality standards, validated cleanroom protocols, and complete statutory licensing.
          </motion.p>
        </div>

        {/* Category Navigation Pills */}
        <div className="mb-10 flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count =
                cat === "All Certifications"
                  ? ALL_CERTIFICATES.length
                  : ALL_CERTIFICATES.filter((c) => c.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`font-heading rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-r from-burgundy to-[#9d2433] text-white shadow-md shadow-burgundy/25"
                      : "text-slate-600 hover:text-navy hover:bg-slate-50"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Certificates Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredCerts.map((cert, idx) => (
              <motion.article
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_20px_rgba(15,34,64,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_35px_rgba(15,34,64,0.1)] hover:border-burgundy/30 overflow-hidden"
              >
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-burgundy/10 px-3 py-1 text-[11px] font-bold text-burgundy">
                    <BadgeCheck className="h-3.5 w-3.5 text-burgundy" />
                    {cert.code}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    {cert.category}
                  </span>
                </div>

                {/* Certificate Document Frame Preview */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedCert(cert)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedCert(cert);
                    }
                  }}
                  aria-label={`View certificate ${cert.title}`}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-[#F4F6F8] p-3 shadow-inner cursor-pointer group/frame transition-all"
                >
                  {/* Parchment border effect inside preview */}
                  <div className="relative h-full w-full rounded-lg overflow-hidden bg-white shadow-sm border border-slate-200/60 flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-2 transition-transform duration-500 group-hover/frame:scale-105"
                    />

                    {/* Interactive Hover Shield */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors duration-300 group-hover/frame:bg-navy/40">
                      <span className="inline-flex translate-y-3 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-navy opacity-0 shadow-xl transition-all duration-300 group-hover/frame:translate-y-0 group-hover/frame:opacity-100">
                        <Eye className="h-4 w-4 text-burgundy" />
                        <span>View Certificate</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="mt-4 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-navy text-base leading-snug group-hover:text-burgundy transition-colors">
                      {cert.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      <Award className="h-3.5 w-3.5 text-medblue shrink-0" />
                      <span className="truncate">{cert.issuer}</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {cert.desc}
                    </p>
                  </div>

                  {/* Card Action Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-burgundy hover:text-burgundy-dark transition-colors cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>Inspect Document</span>
                    </button>

                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-navy hover:bg-burgundy hover:border-burgundy hover:text-white transition-all shadow-sm"
                      title="Open full-resolution image in new tab"
                    >
                      <Download className="h-3 w-3" />
                      <span>HD Document</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout & Dossier Link */}
        <div className="mt-14 rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-burgundy/10 flex items-center justify-center shrink-0">
              <FileCheck2 className="h-6 w-6 text-burgundy" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-navy text-base sm:text-lg">
                Require Institutional Auditing Dossiers or Notarized Copies?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Full technical documentation, batch test reports, and regulatory master files are accessible for procurement verification.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/certifications"
              className="inline-flex flex-1 md:flex-none items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-navy/90 transition-all"
            >
              <span>Explore Complete QMS Dossier</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================================
          HIGH-RESOLUTION CERTIFICATE LIGHTBOX MODAL
          ===================================================================== */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/85 backdrop-blur-md p-3 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col w-full max-w-4xl max-h-[92vh] rounded-3xl bg-white shadow-2xl overflow-hidden border border-white/20"
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-burgundy px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {selectedCert.code}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-sm sm:text-base leading-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-slate-500">{selectedCert.issuer}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 px-3 rounded-full border border-slate-200 bg-white flex items-center gap-1.5 text-xs font-semibold text-navy hover:bg-slate-100 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5 text-burgundy" />
                    <span className="hidden sm:inline">Open HD</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close certificate viewer"
                    className="h-9 w-9 rounded-full bg-slate-200/80 hover:bg-burgundy hover:text-white flex items-center justify-center text-navy transition-colors cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body: Certificate Image Display with Navigation Arrows */}
              <div className="relative flex-1 bg-[#EEF2F6] min-h-[420px] max-h-[68vh] overflow-auto flex items-center justify-center p-4 sm:p-6 select-none">
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Certificate"
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg hover:bg-burgundy hover:text-white transition-all cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Certificate Display */}
                <div className="relative w-full h-full max-w-2xl min-h-[400px] flex items-center justify-center">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    sizes="100vw"
                    className="object-contain drop-shadow-[0_12px_28px_rgba(15,34,64,0.18)]"
                    priority
                  />
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Certificate"
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg hover:bg-burgundy hover:text-white transition-all cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Footer Info */}
              <div className="px-6 py-3.5 border-t border-slate-100 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-600">
                  <span className="font-bold text-navy">Scope: </span>
                  <span>{selectedCert.desc}</span>
                </div>
                <div className="text-slate-400 shrink-0 font-medium">
                  Document {currentIndex + 1} of {ALL_CERTIFICATES.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
