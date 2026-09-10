"use client";

import { ArrowUpRight, CheckCircle2, Download, Eye, FileText } from "lucide-react";
import Link from "next/link";
import { ProductItem } from "@/lib/products";

interface MeccaCatalogueCardProps {
  product: ProductItem;
  onQuote: () => void;
}

export default function MeccaCatalogueCard({
  product,
  onQuote,
}: MeccaCatalogueCardProps) {
  // Coded catalogue page opened when clicking the product name
  const catalogueHref =
    product.id === "pharmaceutical-product-list"
      ? "/mecca-labs/pharmaceutical"
      : product.id === "nutraceutical-product-list-domestic"
        ? "/mecca-labs/domestic"
        : product.id === "nutraceuticals-product-list-export"
          ? "/mecca-labs/export"
          : product.id === "milk-product-list"
            ? "/mecca-labs/milk"
            : product.id === "cosmeceutical-product-list"
              ? "/mecca-labs/cosmeceutical"
              : `/products/${product.id}`;

  // Existing/original product detail page opened when clicking View Details
  const detailsHref = `/products/${product.id}`;

  const openPdf = () => {
    if (product.pdf) {
      window.open(product.pdf, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_28px_rgba(13,34,64,0.05)] sm:p-5">
      <div className="flex flex-col gap-5 md:flex-row md:gap-6">
        <div
          role="button"
          tabIndex={0}
          onClick={openPdf}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              openPdf();
            }
          }}
          suppressHydrationWarning
          className="group relative h-[250px] w-full shrink-0 cursor-pointer overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 text-left shadow-md transition-all duration-300 hover:shadow-xl md:h-[270px] md:w-[200px] lg:h-[290px] lg:w-[220px]"
          aria-label={`View PDF for ${product.name}`}
        >
          {product.pdf ? (
            <iframe
              src={`${product.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
              title={`${product.name} PDF preview`}
              className="pointer-events-none h-full w-full border-0 bg-white"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-navy text-center text-xs font-semibold text-white">
              PDF unavailable
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors duration-300 group-hover:bg-navy/40">
            <span className="inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-navy opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Eye className="h-3.5 w-3.5 text-burgundy" />
              <span>Open PDF</span>
            </span>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex h-7 items-center rounded-full bg-burgundy px-3 text-[10px] font-bold text-white">
              {product.badge}
            </span>
            <span className="inline-flex h-7 items-center rounded-full bg-[#EEF4FA] px-3 text-[10px] font-bold text-medblue">
              <FileText className="mr-1 h-3 w-3" />
              PDF Catalogue
            </span>
          </div>

          <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-burgundy">
            MECCA LABS
          </div>
          <Link
            href={catalogueHref}
            className="group/title mt-1 block"
            aria-label={`Open catalogue for ${product.name}`}
          >
            <h3 className="line-clamp-2 font-heading text-xl font-bold leading-tight text-navy transition-colors group-hover/title:text-burgundy sm:text-2xl">
              {product.name}
            </h3>
          </Link>
          <p className="mt-2 line-clamp-3 text-sm leading-[1.65] text-slate-500">
            {product.desc}
          </p>

          <div className="my-5 border-t border-slate-100 pt-4">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-navy">
              Catalogue Highlights
            </h4>
            <div className="grid gap-2 sm:grid-cols-3 sm:gap-4">
              {product.features.slice(0, 3).map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-xs font-medium leading-relaxed text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
              <FileText className="h-3.5 w-3.5" />
              <span>PDF Brochure</span>
            </div>
            <div className="flex w-full items-center gap-2 sm:w-auto">
              {product.pdf && (
                <a
                  href={product.pdf}
                  download
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-burgundy hover:bg-burgundy hover:text-white sm:flex-none"
                  aria-label={`Download PDF for ${product.name}`}
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </a>
              )}
              <Link
                href={detailsHref}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-burgundy hover:bg-burgundy hover:text-white sm:flex-none"
              >
                <span>View Details</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <button
                type="button"
                onClick={onQuote}
                suppressHydrationWarning
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-burgundy px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-burgundy-dark sm:flex-none"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
