"use client";

import { useEffect, useState } from "react";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Send,
  FileText,
  Building2,
  Clock,
  Sparkles,
  Download,
  Share2,
} from "lucide-react";
import { ProductItem } from "@/lib/products";
import { useQuoteModal } from "@/context/QuoteContext";

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  const { openQuoteModal } = useQuoteModal();
  const [activeTab, setActiveTab] = useState<"specs" | "features">("specs");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-navy/70 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_25px_80px_rgba(13,34,64,0.35)] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-up my-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient */}
        <div className="h-2 bg-burgundy-gradient w-full" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-burgundy/10 hover:text-burgundy transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* LEFT IMAGE & COMPLIANCE BADGES */}
            <div className="md:col-span-5 flex flex-col">
              <div className="relative mb-4 flex w-full aspect-[8.5/11] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                {product.categoryId === "mecca-labs" && product.pdf ? (
                  <iframe
                    src={`${product.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={`${product.name} PDF preview`}
                    className="h-full w-full border-0 bg-white"
                  />
                ) : (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-6"
                  />
                )}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 text-[10px] font-bold text-burgundy shadow-xs">
                  {product.badge}
                </div>
              </div>

              {product.categoryId === "mecca-labs" && product.pdf && (
                <a
                  href={product.pdf}
                  download
                  className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-burgundy px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-burgundy-dark"
                  aria-label={`Download PDF for ${product.name}`}
                >
                  <Download className="h-3.5 w-3.5" />
                  Download PDF
                </a>
              )}

              {/* Verified Trust Tags */}
              <div className="bg-[#F8FAFC] rounded-2xl p-3.5 border border-slate-200/80 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ISO 13485 &amp; WHO-GMP Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Building2 className="w-4 h-4 text-medblue shrink-0" />
                  <span>Class 100,000 Cleanroom Manufactured</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="w-4 h-4 text-burgundy shrink-0" />
                  <span>100% Inline Pressure &amp; Leak Tested</span>
                </div>
              </div>
            </div>

            {/* RIGHT DETAILS & SPECS */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                {/* Category Pill */}
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-burgundy uppercase tracking-wider mb-1.5">
                  <span>{product.category}</span>
                </div>

                {/* Product Name */}
                <h3 className="font-heading font-black text-navy text-xl sm:text-2xl leading-snug mb-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {product.desc}
                </p>

                {/* Tab Switcher: Specs vs Features */}
                <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-full border border-slate-200 mb-4 max-w-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab("specs")}
                    className={`flex-1 py-1.5 px-3 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === "specs"
                        ? "bg-white text-burgundy shadow-xs"
                        : "text-slate-600 hover:text-navy"
                    }`}
                  >
                    Specifications
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("features")}
                    className={`flex-1 py-1.5 px-3 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === "features"
                        ? "bg-white text-burgundy shadow-xs"
                        : "text-slate-600 hover:text-navy"
                    }`}
                  >
                    Clinical Features
                  </button>
                </div>

                {/* Tab 1: Specs Table */}
                {activeTab === "specs" && (
                  <div className="space-y-1.5 bg-[#F8FAFC] p-3.5 rounded-2xl border border-slate-200/80 text-xs mb-6 max-h-48 overflow-y-auto">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between py-1.5 border-b border-slate-200/60 last:border-0"
                      >
                        <span className="text-slate-500 font-medium">{spec.label}:</span>
                        <span className="font-bold text-navy text-right ml-2">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 2: Features List */}
                {activeTab === "features" && (
                  <ul className="space-y-2 bg-[#F8FAFC] p-3.5 rounded-2xl border border-slate-200/80 text-xs text-navy mb-6 max-h-48 overflow-y-auto">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    openQuoteModal(product.name);
                  }}
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-burgundy-gradient text-white text-xs font-bold shadow-card hover:shadow-soft transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Unit Price &amp; RFQ</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    openQuoteModal(`OEM Custom Specs - ${product.name}`);
                  }}
                  className="w-full sm:w-auto py-3 px-5 rounded-full bg-slate-100 hover:bg-slate-200 text-navy text-xs font-bold transition-colors cursor-pointer"
                >
                  Custom OEM Specs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
