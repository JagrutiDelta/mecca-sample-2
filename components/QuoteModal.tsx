"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Mail,
  User,
  Phone,
  Layers,
  FileCheck,
  Clock,
  Globe2,
  Sparkles,
  ArrowRight,
  Plus,
  Trash2,
  Search,
  Check,
  PackageCheck,
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

export const ORDER_VOLUMES = [
  "Trial / Sample Evaluation Batch",
  "5,000 - 15,000 units",
  "15,000 - 50,000 units",
  "50,000 - 200,000 units",
  "200,000+ units (Recurring Supply)",
  "Custom OEM / Annual Contract",
];

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts?: string[];
  onRemoveProduct?: (productName: string) => void;
  onAddProduct?: (productName: string) => void;
  onClearProducts?: () => void;
  defaultCategory?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  selectedProducts = [],
  onRemoveProduct,
  onAddProduct,
  onClearProducts,
  defaultCategory = "",
}: QuoteModalProps) {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [volume, setVolume] = useState("");
  const [requirements, setRequirements] = useState("");
  const [needNda, setNeedNda] = useState(false);
  const [needSample, setNeedSample] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState("");

  // Search product dropdown inside modal
  const [productSearch, setProductSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (defaultCategory) {
      setCustomCategory(defaultCategory);
    }
  }, [defaultCategory]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        if (typeof document !== "undefined") {
          document.body.style.overflow = "";
        }
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setIsSubmitting(false);
      setIsDropdownOpen(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const refNum = `MQ-${Math.floor(10000 + Math.random() * 90000)}`;
    setQuoteRef(refNum);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFullName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setCustomCategory("");
    setVolume("");
    setRequirements("");
    setNeedNda(false);
    setNeedSample(false);
    setIsSubmitted(false);
    setIsSubmitting(false);
    if (onClearProducts) onClearProducts();
  };

  // Filter available products to add
  const filteredAvailableProducts = useMemo(() => {
    if (!productSearch.trim()) return PRODUCTS;
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
        p.category.toLowerCase().includes(productSearch.toLowerCase())
    );
  }, [productSearch]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-navy/65 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-[0_25px_70px_rgba(13,34,64,0.35)] border border-slate-200/90 overflow-hidden my-auto z-10"
          >
            {/* Top Accent Gradient Bar */}
            <div className="h-2 bg-burgundy-gradient w-full" />

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute right-4 top-5 sm:right-6 sm:top-6 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-burgundy/10 hover:text-burgundy transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy/20 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Content Area */}
            <div className="px-5 py-6 sm:px-8 sm:py-8 max-h-[85vh] overflow-y-auto">
              {isSubmitted ? (
                /* Success View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 sm:py-10 text-center"
                >
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 border-2 border-emerald-100 shadow-inner">
                    <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wide mb-3">
                    <FileCheck className="w-3.5 h-3.5 text-burgundy" />
                    Reference: <span className="text-burgundy font-mono font-bold">{quoteRef}</span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                    Quotation Request Received!
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-navy">{fullName || "valued partner"}</strong>.
                    Our commercial engineering team will prepare your unit pricing &amp; export documentation for{" "}
                    <strong className="text-navy">{email || "your email"}</strong> within <span className="text-burgundy font-bold">24 hours</span>.
                  </p>

                  {/* Summary of Quoted Products */}
                  {selectedProducts.length > 0 && (
                    <div className="mt-5 max-w-md mx-auto bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 text-left">
                      <div className="text-xs font-bold text-navy mb-2 flex items-center gap-1.5">
                        <PackageCheck className="w-4 h-4 text-burgundy" />
                        <span>Requested Products ({selectedProducts.length}):</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
                        {selectedProducts.map((pName) => (
                          <span
                            key={pName}
                            className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 shadow-2xs"
                          >
                            ✓ {pName}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights Card */}
                  <div className="mt-5 max-w-md mx-auto bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 text-left grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-burgundy shrink-0" />
                      <span>Response: <strong>&lt; 24 Hours</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Confidentiality: <strong>Guaranteed</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Building2 className="w-4 h-4 text-medblue shrink-0" />
                      <span>Plants: <strong>ISO 13485 &amp; CE</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Globe2 className="w-4 h-4 text-navy shrink-0" />
                      <span>Export: <strong>50+ Countries</strong></span>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-burgundy-gradient px-8 py-3 text-xs sm:text-sm font-semibold text-white shadow-card hover:shadow-soft transition-all cursor-pointer"
                    >
                      Done
                    </button>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Form View */
                <>
                  {/* Header Badge & Title */}
                  <div className="mb-5 pr-8">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-burgundy/15 bg-[#F8EDEF] px-3.5 py-1 text-xs font-semibold text-burgundy mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Factory Unit Pricing &amp; Multi-Product RFQ
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                      Request a Medical Quote
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Select single or multiple products from our 54 certified lines for bulk pricing, OEM specs, and regulatory documentation.
                    </p>
                  </div>

                  {/* MULTI-PRODUCT SELECTION SECTION */}
                  <div className="mb-5 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-xs font-bold text-navy flex items-center gap-1.5">
                        <PackageCheck className="w-4 h-4 text-burgundy" />
                        Selected Products for Quote ({selectedProducts.length})
                      </span>
                      {selectedProducts.length > 0 && onClearProducts && (
                        <button
                          type="button"
                          onClick={onClearProducts}
                          className="text-[11px] font-semibold text-slate-400 hover:text-burgundy cursor-pointer"
                        >
                          Clear all
                        </button>
                      )}
                    </div>

                    {/* Selected Product Badges */}
                    {selectedProducts.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5 mb-3 max-h-28 overflow-y-auto">
                        {selectedProducts.map((pName) => (
                          <span
                            key={pName}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-navy shadow-2xs"
                          >
                            <span>{pName}</span>
                            {onRemoveProduct && (
                              <button
                                type="button"
                                onClick={() => onRemoveProduct(pName)}
                                className="text-slate-400 hover:text-burgundy p-0.5 rounded-full"
                                aria-label={`Remove ${pName}`}
                              >
                                <X className="w-3 h-3" />
                              </button>
                            )}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="text-xs text-slate-500 py-1 mb-2">
                        No products added yet. Click &ldquo;+ Add Product&rdquo; below or select from the catalog.
                      </div>
                    )}

                    {/* Add More Products Dropdown / Search Trigger */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                        className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-burgundy transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5 text-burgundy font-semibold">
                          <Plus className="w-3.5 h-3.5" />
                          + Add More Products to Quote
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {PRODUCTS.length} Available
                        </span>
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            className="absolute left-0 right-0 top-full mt-1 z-30 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
                          >
                            <div className="p-2 border-b border-slate-100 relative">
                              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                              <input
                                type="text"
                                value={productSearch}
                                onChange={(e) => setProductSearch(e.target.value)}
                                placeholder="Search from 54 products..."
                                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-slate-50 border border-slate-200 text-navy placeholder:text-slate-400 focus:outline-none focus:border-burgundy"
                                autoFocus
                              />
                            </div>

                            <div className="max-h-48 overflow-y-auto p-1 space-y-0.5">
                              {filteredAvailableProducts.map((p) => {
                                const isAdded = selectedProducts.includes(p.name);
                                return (
                                  <button
                                    key={p.id}
                                    type="button"
                                    onClick={() => {
                                      if (isAdded && onRemoveProduct) {
                                        onRemoveProduct(p.name);
                                      } else if (onAddProduct) {
                                        onAddProduct(p.name);
                                      }
                                    }}
                                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                                      isAdded
                                        ? "bg-burgundy/10 text-burgundy font-bold"
                                        : "hover:bg-slate-50 text-slate-700"
                                    }`}
                                  >
                                    <div>
                                      <div className="font-semibold text-navy leading-tight">
                                        {p.name}
                                      </div>
                                      <div className="text-[10px] text-slate-400 mt-0.5">
                                        {p.category}
                                      </div>
                                    </div>

                                    {isAdded ? (
                                      <Check className="w-4 h-4 text-burgundy shrink-0 ml-2" />
                                    ) : (
                                      <Plus className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* FORM INPUTS */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Name & Company */}
                    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-navy">
                          Full Name <span className="text-burgundy">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                          <input
                            required
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Dr. / Mr. / Ms. Name"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-navy placeholder:text-slate-400 focus:border-burgundy focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/10 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block text-xs font-semibold text-navy">
                          Company / Hospital / Distributor <span className="text-burgundy">*</span>
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                          <input
                            required
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Organization name"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-navy placeholder:text-slate-400 focus:border-burgundy focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/10 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-navy">
                          Work Email <span className="text-burgundy">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                          <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-navy placeholder:text-slate-400 focus:border-burgundy focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/10 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block text-xs font-semibold text-navy">
                          Phone / WhatsApp <span className="text-burgundy">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                          <input
                            required
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 / +1 (with country code)"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-navy placeholder:text-slate-400 focus:border-burgundy focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/10 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Order Volume */}
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-navy">
                        Estimated Order Volume
                      </label>
                      <select
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-navy focus:border-burgundy focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/10 transition-all"
                      >
                        <option value="">Select quantity / volume tier</option>
                        {ORDER_VOLUMES.map((vol) => (
                          <option key={vol} value={vol}>
                            {vol}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 4: Custom Specifications / Message */}
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-navy">
                        Custom Specifications / Additional Notes
                      </label>
                      <textarea
                        rows={2}
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        placeholder="Mention required gauge sizes, quantities per product, private labeling / OEM needs, destination country..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-navy placeholder:text-slate-400 focus:border-burgundy focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/10 transition-all"
                      />
                    </div>

                    {/* Checkboxes: NDA & Samples */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={needNda}
                          onChange={(e) => setNeedNda(e.target.checked)}
                          className="mt-0.5 rounded border-slate-300 text-burgundy focus:ring-burgundy/20"
                        />
                        <span>Send mutual NDA prior to engineering exchange</span>
                      </label>

                      <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={needSample}
                          onChange={(e) => setNeedSample(e.target.checked)}
                          className="mt-0.5 rounded border-slate-300 text-burgundy focus:ring-burgundy/20"
                        />
                        <span>Request physical sample / evaluation batch</span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-burgundy-gradient px-6 py-3.5 text-sm font-bold text-white shadow-card hover:shadow-soft hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 transition-all cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="inline-flex items-center gap-2">
                            <svg
                              className="animate-spin h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            <span>Submitting Quote Request...</span>
                          </div>
                        ) : (
                          <>
                            <span>
                              {selectedProducts.length > 1
                                ? `Submit Quote Request for ${selectedProducts.length} Products`
                                : "Submit Quote Request"}
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 border-t border-slate-100">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        ISO 13485 &amp; CE Certified
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-burgundy" />
                        24-Hour Engineering Response
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe2 className="w-3.5 h-3.5 text-medblue" />
                        Exporting to 50+ Countries
                      </span>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
