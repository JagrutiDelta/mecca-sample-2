"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  Search,
  Filter,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Building2,
  Award,
  Sparkles,
} from "lucide-react";
import { ProductItem, CATEGORIES, getProductsByCategoryId } from "@/lib/products";
import ProductDetailModal from "@/components/ProductDetailModal";
import { useQuoteModal } from "@/context/QuoteContext";

interface CategoryPageClientProps {
  category: { id: string; label: string };
}

export default function CategoryPageClient({ category }: CategoryPageClientProps) {
  const { openQuoteModal } = useQuoteModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categoryProducts = getProductsByCategoryId(category.id);

  const filteredProducts = categoryProducts.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="container-px">
      {/* Breadcrumbs */}
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
            <span className="font-semibold text-navy">{category.label}</span>
          </li>
        </ol>
      </nav>

      {/* Category Hero Header */}
      <div className="bg-white rounded-3xl border border-border p-8 sm:p-12 shadow-card mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy-soft/50 rounded-full blur-3xl -z-0 pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-burgundy/15 bg-[#F8EDEF] px-4 py-1.5 text-xs font-semibold text-burgundy mb-4">
            <ShieldCheck className="w-4 h-4" />
            Medical Device Category
          </div>

          <h1 className="font-heading font-black text-navy text-3xl sm:text-4xl lg:text-[46px] leading-tight mb-4">
            {category.label} Portfolio
          </h1>

          <p className="text-gray text-sm sm:text-base leading-relaxed mb-6">
            Explore Meca Care's clinical grade {category.label.toLowerCase()} disposables. Manufactured under ISO 13485 &amp; WHO-GMP cleanroom standards, certified for global hospital networks and OEM distribution.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-navy">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{categoryProducts.length} Certified Products</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-medblue" />
              <span>Class 100K Cleanroom Production</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-burgundy" />
              <span>ISO 13485 &amp; CE Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
        {/* Category Tabs Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <Filter className="w-4 h-4 text-gray mr-1 shrink-0 hidden sm:block" />
          {CATEGORIES.map((cat) => {
            const isActive = cat.id === category.id;
            return (
              <Link
                key={cat.id}
                href={cat.id === "all" ? "/products" : `/products/${cat.id}`}
                className={`px-4 py-2 text-xs font-medium rounded-full whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-burgundy text-white shadow-md font-semibold"
                    : "bg-white text-navy border border-border hover:bg-slate-50 hover:text-burgundy"
                }`}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>

        {/* Live Search */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search in ${category.label}...`}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-full text-xs text-navy placeholder:text-gray/50 focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/10 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Category Product Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-border p-6 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Product Image Container */}
                <Link
                  href={`/products/${product.id}`}
                  className="relative block rounded-xl overflow-hidden bg-slate-50 border border-border/60 aspect-[4/3] mb-5 p-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-border text-[10px] font-semibold text-burgundy shadow-sm">
                    {product.badge}
                  </div>
                </Link>

                {/* Category Pill */}
                <div className="text-[11px] font-semibold text-burgundy uppercase tracking-wider mb-1">
                  {product.category}
                </div>

                {/* Title */}
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-heading font-bold text-navy text-lg leading-snug mb-2 group-hover:text-burgundy transition-colors">
                    {product.name}
                  </h3>
                </Link>

                <p className="text-gray text-xs line-clamp-2 leading-relaxed mb-4">
                  {product.desc}
                </p>

                {/* Bullet Features */}
                <div className="space-y-1.5 mb-6">
                  {product.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-4 border-t border-border/60">
                <Link
                  href={`/products/${product.id}`}
                  className="flex-1 py-2.5 px-3 rounded-full bg-[#EEF4FA] text-navy font-semibold text-xs border border-[#D5E3F5] hover:bg-navy hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => openQuoteModal(product.name)}
                  className="py-2.5 px-4 rounded-full bg-burgundy text-white font-semibold text-xs hover:bg-burgundy-dark transition-colors shadow-sm flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Quote</span>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-border p-8 mb-16">
          <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h4 className="font-heading font-bold text-navy text-lg">No medical products found in this category</h4>
          <p className="text-gray text-xs mt-1">Try clearing your search query.</p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-4 px-5 py-2 rounded-full bg-burgundy text-white text-xs font-semibold"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Category OEM Callout Banner */}
      <div className="bg-white rounded-2xl border border-border p-8 lg:p-12 shadow-card mb-12">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8EDEF] text-burgundy text-xs font-semibold mb-3">
              <Sparkles className="w-4 h-4" />
              Private Label &amp; Custom OEM Manufacturing
            </div>
            <h3 className="font-heading font-bold text-navy text-2xl sm:text-3xl leading-tight mb-2">
              Custom OEM Manufacturing for {category.label}
            </h3>
            <p className="text-gray text-xs sm:text-sm leading-relaxed">
              Looking for custom gauge sizes, DEHP-free formulations, private label blister branding, or specialized lengths? Meca Care manufactures custom {category.label.toLowerCase()} solutions tailored to your exact regulatory and commercial requirements.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href="/oem-services"
              className="inline-flex items-center justify-center gap-2 bg-burgundy text-white font-semibold text-xs px-7 py-3.5 rounded-full shadow-md hover:bg-burgundy-dark transition-all"
            >
              <span>Discuss Custom OEM Order</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
