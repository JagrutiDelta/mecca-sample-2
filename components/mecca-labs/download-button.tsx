"use client";

import { Download, FileText, Sparkles, ShieldCheck } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteContext";

interface DownloadButtonProps {
  title: string;
  pdfUrl: string;
  pdfFileName: string;
}

export default function DownloadButton({
  title,
  pdfUrl,
  pdfFileName,
}: DownloadButtonProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-white via-bg/40 to-bg p-8 sm:p-12 text-center shadow-card mt-16">
      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-burgundy to-transparent" />
      <div className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-burgundy/5 blur-3xl" />

      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-burgundy/10 px-3.5 py-1 text-xs font-semibold text-burgundy mb-4 border border-burgundy/20">
          <FileText className="h-3.5 w-3.5" />
          <span>OFFICIAL PRODUCT DOCUMENTATION</span>
        </div>

        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
          Download Complete {title}
        </h3>

        <p className="mt-3 text-sm text-gray leading-relaxed max-w-lg">
          Get the complete, unedited product catalogue in high-resolution PDF format for institutional review, hospital tenders, and regulatory compliance.
        </p>

        {/* Large Centered CTA Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={pdfUrl}
            download={pdfFileName}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-burgundy px-8 py-4 text-base font-bold text-white shadow-soft transition-all duration-300 hover:bg-burgundy-dark hover:shadow-card hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            <span>Download {title} (PDF)</span>
          </a>

          <button
            type="button"
            onClick={() => openQuoteModal(title)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-4 text-sm font-semibold text-navy transition-all duration-300 hover:border-burgundy/40 hover:bg-bg hover:text-burgundy"
          >
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Request Institutional Quote</span>
          </button>
        </div>

        {/* Verification note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-gray">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          <span>Direct download from Mecca Healthcare servers · No registration required</span>
        </div>
      </div>
    </section>
  );
}
