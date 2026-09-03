"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Send,
  ArrowRight,
  Sparkles,
  Download,
  Eye,
  Building2,
  Award,
  Globe2,
} from "lucide-react";
import { ProductItem } from "@/lib/products";
import MeccaCatalogueCard from "@/components/MeccaCatalogueCard";
import { useQuoteModal } from "@/context/QuoteContext";

interface ProductDetailClientProps {
  product: ProductItem;
  relatedProducts: ProductItem[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [submitted, setSubmitted] = useState(false);
  const [quantity, setQuantity] = useState("10000");
  const { openQuoteModal } = useQuoteModal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="container-px">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-xs text-gray">
          <li>
            <Link href="/" className="hover:text-burgundy transition-colors">
              Home
            </Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-gray/50" />
          <li>
            <Link href="/products" className="hover:text-burgundy transition-colors">
              Products
            </Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-gray/50" />
          <li>
            {product.categoryId === "mecca-labs" ? (
              <Link
                href="/products/mecca-labs"
                className="text-gray/80 truncate max-w-[150px] sm:max-w-none hover:text-burgundy transition-colors"
              >
                {product.category}
              </Link>
            ) : (
              <span className="text-gray/80 truncate max-w-[150px] sm:max-w-none">
                {product.category}
              </span>
            )}
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-gray/50" />
          <li>
            <span className="font-semibold text-navy truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </li>
        </ol>
      </nav>

      {/* Main Product Hero Grid */}
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
        {/* LEFT COLUMN: Product Image Gallery & Certifications */}
        <div
          className={`lg:col-span-6 space-y-6 ${
            product.categoryId === "mecca-labs" ? "order-1 lg:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative rounded-2xl overflow-hidden bg-white border border-border shadow-card flex items-center justify-center group ${
              product.categoryId === "mecca-labs" ? "aspect-[4/5]" : "aspect-[4/3] p-8"
            }`}
          >
            {product.categoryId === "mecca-labs" && product.pdf ? (
              <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-[#0F2740] via-[#163659] to-[#0A1A2D] p-8 text-white text-center">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-10 [background-size:12px_12px]" />
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#E6B055]">
                    <FileText className="h-3.5 w-3.5 text-[#E6B055]" />
                    <span>Mecca Labs Official Catalogue</span>
                  </div>
                  <span className="rounded bg-white/10 px-2.5 py-0.5 text-[10px] font-bold text-white/80">PDF</span>
                </div>

                <div className="relative z-10 my-auto flex flex-col items-center justify-center py-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white shadow-inner backdrop-blur-md">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold uppercase leading-snug tracking-wide text-white">
                    {product.name}
                  </h4>
                  <p className="mt-2 text-xs text-white/70 max-w-sm">{product.desc}</p>
                  <button
                    type="button"
                    onClick={() => window.open(product.pdf, "_blank", "noopener,noreferrer")}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold text-[#0F2740] shadow-xl hover:bg-slate-100 transition-transform active:scale-95"
                  >
                    <Eye className="h-4 w-4 text-[#800020]" />
                    <span>Open &amp; Read Full PDF</span>
                  </button>
                </div>

                <div className="relative z-10 border-t border-white/10 pt-3 flex items-center justify-between text-[11px] font-medium text-white/70">
                  <span>WHO-GMP &amp; ISO Certified</span>
                  <span className="text-[#E6B055] font-semibold">Official 2026 Edition</span>
                </div>
              </div>
            ) : (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            )}
            {/* Top Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-border text-xs font-semibold text-burgundy shadow-sm">
              {product.badge}
            </div>

            {/* Quality Seal */}
            <div className="absolute bottom-4 right-4 bg-navy/90 text-white backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] font-medium flex items-center gap-1.5 shadow-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 13485 &amp; CE Certified</span>
            </div>
          </motion.div>

          {product.categoryId === "mecca-labs" && product.pdf && (
            <div className="flex justify-end border-b border-border/60 pb-4">
              <a
                href={product.pdf}
                download
                className="inline-flex items-center gap-2 rounded-full bg-burgundy px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-burgundy-dark"
                aria-label={`Download PDF for ${product.name}`}
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </a>
            </div>
          )}

          {/* Compliance & Manufacturing Specs Badges */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-border p-4 text-center shadow-sm">
              <Award className="w-5 h-5 text-burgundy mx-auto mb-1.5" />
              <div className="font-bold text-navy text-xs">WHO-GMP</div>
              <div className="text-[10px] text-gray mt-0.5">Cleanroom Grade</div>
            </div>
            <div className="bg-white rounded-xl border border-border p-4 text-center shadow-sm">
              <Building2 className="w-5 h-5 text-medblue mx-auto mb-1.5" />
              <div className="font-bold text-navy text-xs">Class 100K</div>
              <div className="text-[10px] text-gray mt-0.5">Sterile Manufacturing</div>
            </div>
            <div className="bg-white rounded-xl border border-border p-4 text-center shadow-sm">
              <Globe2 className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
              <div className="font-bold text-navy text-xs">50+ Countries</div>
              <div className="text-[10px] text-gray mt-0.5">Global Export Ready</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Product Details & Specs */}
        <div
          className={`lg:col-span-6 flex flex-col justify-between ${
            product.categoryId === "mecca-labs" ? "order-2 lg:order-1" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Category tag */}
            <span className="inline-block text-xs font-semibold text-burgundy uppercase tracking-widest bg-[#F8EDEF] px-3 py-1 rounded-full mb-3">
              {product.category}
            </span>

            {/* Product Title */}
            <h1 className="font-heading font-extrabold text-navy text-3xl sm:text-4xl leading-tight mb-4">
              {product.name}
            </h1>

            {/* Product Description */}
            <p className="text-gray text-sm sm:text-base leading-relaxed mb-6">
              {product.desc}
            </p>

            {/* Key Features Bullet List */}
            <div className="mb-8">
              <h3 className="font-heading font-semibold text-navy text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-burgundy" />
                Key Clinical Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {product.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-2 bg-white p-3 rounded-lg border border-border text-xs text-navy shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs Table */}
            <div className="mb-8">
              <h3 className="font-heading font-semibold text-navy text-xs uppercase tracking-wider mb-3">
                Technical Specifications
              </h3>
              <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
                <table className="w-full text-xs text-left">
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr
                        key={spec.label}
                        className={idx % 2 === 0 ? "bg-bg" : "bg-white"}
                      >
                        <td className="px-4 py-3 font-medium text-gray w-1/3 border-b border-border/60">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 font-semibold text-navy border-b border-border/60">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bulk Quote & Technical Inquiry Banner */}
      <section className="bg-white rounded-2xl border border-border p-8 lg:p-12 shadow-card mb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8EDEF] text-burgundy text-xs font-semibold mb-3">
              <FileText className="w-4 h-4" />
              Direct OEM &amp; Distributor Supply
            </div>
            <h2 className="font-heading font-bold text-navy text-2xl sm:text-3xl leading-tight mb-3">
              Request a Bulk Quote for {product.name}
            </h2>
            <p className="text-gray text-xs sm:text-sm leading-relaxed mb-6">
              Get factory-direct pricing, custom sterile packaging options, private label solutions, and batch delivery schedules tailored to your hospital network or distribution enterprise.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-navy">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Response in &lt; 24 Hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Custom OEM Branding</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ISO 11135 EO Sterilized</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#EEF4FA] p-6 rounded-xl border border-[#D5E3F5]">
            {submitted ? (
              <div className="text-center py-8 text-emerald-600 font-semibold text-sm flex flex-col items-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 animate-bounce" />
                <span>Quote Inquiry Received! Our medical device specialist will contact you within 24 hours.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-semibold text-navy mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. / Mr. / Ms. John Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-border text-navy placeholder:text-gray/50 focus:outline-none focus:border-burgundy"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-navy mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@hospital.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-border text-navy placeholder:text-gray/50 focus:outline-none focus:border-burgundy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-semibold text-navy mb-1">Organization / Hospital</label>
                    <input
                      type="text"
                      required
                      placeholder="Global Healthcare Ltd."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-border text-navy placeholder:text-gray/50 focus:outline-none focus:border-burgundy"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-navy mb-1">Quantity Required</label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-border text-navy focus:outline-none focus:border-burgundy"
                    >
                      <option value="5000">5,000 units</option>
                      <option value="10000">10,000 units</option>
                      <option value="50000">50,000+ units</option>
                      <option value="oem">Custom OEM / Private Label</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-navy text-xs mb-1">Additional Requirements / Specs</label>
                  <textarea
                    rows={2}
                    placeholder="Specify gauge sizes, packaging preferences, or target delivery country..."
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-border text-navy text-xs placeholder:text-gray/50 focus:outline-none focus:border-burgundy"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-burgundy text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-burgundy-dark transition-colors shadow-md"
                >
                  <Send className="w-4 h-4" />
                  Submit Request for {product.name}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading font-bold text-navy text-2xl sm:text-3xl">
                Related Medical Products
              </h2>
              <p className="text-gray text-xs sm:text-sm mt-1">
                Explore complementary disposable solutions from our certified cleanroom portfolio.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-xs font-semibold text-burgundy hover:underline"
            >
              <span>View All Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div
            className={
              relatedProducts[0]?.categoryId === "mecca-labs"
                ? "grid gap-6 lg:gap-8"
                : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            }
          >
            {relatedProducts.map((rel) => (
              rel.categoryId === "mecca-labs" ? (
                <MeccaCatalogueCard
                  key={rel.id}
                  product={rel}
                  onQuote={() => openQuoteModal(rel.name)}
                />
              ) : (
              <Link
                key={rel.id}
                href={`/products/${rel.id}`}
                className="bg-white rounded-2xl border border-border p-6 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative rounded-xl overflow-hidden bg-slate-50 border border-border/60 aspect-[4/3] mb-5 p-4 flex items-center justify-center">
                    {rel.categoryId === "mecca-labs" && rel.pdf ? (
                      <iframe
                        src={`${rel.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                        title={`${rel.name} PDF preview`}
                        className="h-full w-full rounded-lg border-0 bg-white"
                      />
                    ) : (
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-border text-[10px] font-semibold text-burgundy shadow-sm">
                      {rel.badge}
                    </div>
                    {rel.categoryId === "mecca-labs" && rel.pdf && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-navy/0 transition-colors duration-300 group-hover:bg-navy/40">
                        <button
                          type="button"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            window.open(rel.pdf, "_blank", "noopener,noreferrer");
                          }}
                          className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy opacity-0 shadow-md transition-all duration-300 hover:bg-slate-50 group-hover:translate-y-0 group-hover:opacity-100"
                          aria-label={`View PDF for ${rel.name}`}
                        >
                          <Eye className="h-3.5 w-3.5" />
                          View PDF
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="text-[11px] font-semibold text-burgundy uppercase tracking-wider mb-1">
                    {rel.category}
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg leading-snug mb-2 group-hover:text-burgundy transition-colors">
                    {rel.name}
                  </h3>
                  <p className="text-gray text-xs line-clamp-2 leading-relaxed mb-4">
                    {rel.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-navy group-hover:text-burgundy transition-colors">
                  <span>View Product Details</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
