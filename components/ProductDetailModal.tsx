"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2, ShieldCheck, Send, FileText } from "lucide-react";

import { ProductItem } from "@/lib/products";

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [quantity, setQuantity] = useState("10000");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white rounded-2xl border border-border shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 text-gray hover:bg-burgundy hover:text-white transition-colors flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Image & Specs */}
            <div>
              <div className="rounded-xl overflow-hidden bg-slate-50 border border-border aspect-[4/3] mb-4 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F8EDEF] text-burgundy">
                  {product.badge}
                </span>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#EEF4FA] text-navy flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  ISO 13485 &amp; CE
                </span>
              </div>

              <h4 className="font-heading font-semibold text-navy text-xs uppercase tracking-wider mb-2">
                Technical Specifications
              </h4>
              <div className="space-y-1.5 bg-bg p-3 rounded-lg border border-border text-xs">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-1 border-b border-border/60 last:border-0">
                    <span className="text-gray">{spec.label}:</span>
                    <span className="font-semibold text-navy">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Details & Inquiry Form */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-burgundy uppercase tracking-widest">
                  {product.category}
                </span>
                <h3 className="font-heading font-bold text-navy text-2xl mt-1 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray text-xs leading-relaxed mb-4">
                  {product.desc}
                </p>

                <h4 className="font-heading font-semibold text-navy text-xs uppercase tracking-wider mb-2">
                  Key Features
                </h4>
                <ul className="space-y-1.5 text-xs text-navy mb-6">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry Form */}
              <div className="bg-[#EEF4FA] p-4 rounded-xl border border-[#D5E3F5]">
                {submitted ? (
                  <div className="text-center py-4 text-emerald-600 font-semibold text-xs flex flex-col items-center gap-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 animate-bounce" />
                    <span>Inquiry Sent Successfully! Our team will contact you shortly.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-heading font-bold text-navy text-xs flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-burgundy" />
                        Request Bulk Quote
                      </span>
                      <span className="text-[10px] text-gray">Fast Response &lt; 24h</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        className="w-full px-3 py-2 rounded-md bg-white border border-border text-navy placeholder:text-slate-400 focus:outline-none focus:border-burgundy"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Work Email"
                        className="w-full px-3 py-2 rounded-md bg-white border border-border text-navy placeholder:text-slate-400 focus:outline-none focus:border-burgundy"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <input
                        type="text"
                        placeholder="Company / Hospital"
                        className="w-full px-3 py-2 rounded-md bg-white border border-border text-navy placeholder:text-slate-400 focus:outline-none focus:border-burgundy"
                      />
                      <select
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-white border border-border text-navy focus:outline-none focus:border-burgundy"
                      >
                        <option value="5000">5,000 units</option>
                        <option value="10000">10,000 units</option>
                        <option value="50000">50,000+ units</option>
                        <option value="oem">Custom OEM order</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-full bg-burgundy text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-burgundy-dark transition-colors shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Quote Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
