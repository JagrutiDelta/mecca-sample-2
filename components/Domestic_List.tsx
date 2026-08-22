"use client";

import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { getProductById } from "@/lib/products";

export default function DomesticCataloguePage() {
  const catalogue = getProductById("nutraceutical-product-list-domestic");

  if (!catalogue?.pdf) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-5 text-center text-navy">
        <p>Domestic catalogue PDF is unavailable.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-navy">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link
            href="/products/mecca-labs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-burgundy"
          >
            <ArrowLeft className="h-4 w-4" />
            Mecca Labs
          </Link>
          <a
            href={catalogue.pdf}
            download
            className="inline-flex items-center gap-2 rounded-full bg-burgundy px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-burgundy-dark"
          >
            <Download className="h-3.5 w-3.5" />
            Download PDF
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-burgundy">
            Mecca Labs · Domestic Catalogue
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-navy sm:text-5xl">
            {catalogue.name}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {catalogue.desc}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(13,34,64,0.08)]">
          <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-3 text-xs font-semibold text-slate-500">
            <FileText className="h-4 w-4 text-burgundy" />
            PDF Catalogue Preview
          </div>
          <iframe
            src={`${catalogue.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
            title={`${catalogue.name} PDF preview`}
            className="h-[70vh] min-h-[560px] w-full border-0 bg-slate-100"
          />
        </div>
      </section>
    </main>
  );
}
