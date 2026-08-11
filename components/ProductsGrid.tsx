"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowUpRight, ShieldCheck, CheckCircle2, FileText } from "lucide-react";
import ProductDetailModal from "./ProductDetailModal";
import { CATEGORIES, PRODUCTS, ProductItem } from "@/lib/products";

export default function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.categoryId === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="py-16 lg:py-24 bg-bg">
      <div className="container-px">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-burgundy/15 bg-[#F8EDEF] px-4 py-1.5 text-xs font-semibold text-burgundy mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-burgundy" />
              Medical Device Products
            </div>
            <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl tracking-tight">
              Clinical Grade Disposable Solutions
            </h2>
            <p className="text-gray text-sm sm:text-base mt-2 max-w-xl">
              Manufactured under strict ISO 13485 &amp; WHO-GMP guidelines, certified for global hospital &amp; distribution supply chains.
            </p>
          </div>

          {/* Live Search Bar */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, specs..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-full text-xs text-navy placeholder:text-slate-400 focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/10 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-border/80">
          <Filter className="w-4 h-4 text-gray mr-1 shrink-0 hidden sm:block" />
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-full whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-burgundy text-white shadow-md font-semibold"
                    : "bg-white text-navy border border-border hover:bg-slate-50 hover:text-burgundy"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  {/* Image Container */}
                  <div className="relative rounded-xl overflow-hidden bg-slate-50 border border-border/60 aspect-[4/3] mb-5 p-4 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-border text-[10px] font-semibold text-burgundy shadow-sm">
                      {product.badge}
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="text-[11px] font-semibold text-burgundy uppercase tracking-wider mb-1">
                    {product.category}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-navy text-lg leading-snug mb-2 group-hover:text-burgundy transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray text-xs line-clamp-2 leading-relaxed mb-4">
                    {product.desc}
                  </p>

                  {/* Spec Bullet points */}
                  <div className="space-y-1.5 mb-6">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2 pt-4 border-t border-border/60">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2.5 px-3 rounded-full bg-[#EEF4FA] text-navy font-semibold text-xs border border-[#D5E3F5] hover:bg-navy hover:text-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="py-2.5 px-4 rounded-full bg-burgundy text-white font-semibold text-xs hover:bg-burgundy-dark transition-colors shadow-sm flex items-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Quote</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-border p-8">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h4 className="font-heading font-bold text-navy text-lg">No medical products found</h4>
            <p className="text-gray text-xs mt-1">Try clearing your search or selecting another category.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2 rounded-full bg-burgundy text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
