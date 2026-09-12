"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  LayoutGrid,
  List,
  CheckCircle2,
  ArrowUpRight,
  FileText,
  ShieldCheck,
  Droplets,
  Wind,
  Stethoscope,
  HeartPulse,
  FlaskConical,
  Activity,
  Scissors,
  Microscope,
  Layers,
  X,
  Sparkles,
  SlidersHorizontal,
  ChevronRight,
  Download,
  Eye,
  Building2,
  Check,
  Plus,
  ArrowRight,
} from "lucide-react";
import ProductDetailModal from "./ProductDetailModal";
import MeccaCatalogueCard from "./MeccaCatalogueCard";
import { CATEGORIES, PRODUCTS, ProductItem } from "@/lib/products";
import { useQuoteModal } from "@/context/QuoteContext";

// Icon mapping for categories
const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  all: Layers,
  infusion: Droplets,
  anesthesia: Wind,
  urology: Stethoscope,
  gynecology: HeartPulse,
  gastroenterology: FlaskConical,
  cardiology: Activity,
  nephrology: Droplets,
  surgical: Scissors,
  "mecca-labs": Microscope,
};

const CATEGORY_META: Record<
  string,
  { desc: string; color: string; bg: string; border: string }
> = {
  infusion: {
    desc: "Clinical grade gravity administration sets, precision flow meters, and sterile vascular delivery systems.",
    color: "#2563EB",
    bg: "bg-blue-50/80",
    border: "border-blue-200/80",
  },
  anesthesia: {
    desc: "Endotracheal intubation, oxygen delivery devices, nebulization systems, and airway management.",
    color: "#DC2626",
    bg: "bg-red-50/80",
    border: "border-red-200/80",
  },
  urology: {
    desc: "Foley balloon catheters, closed system urine meters, TURP surgical sets, and drainage systems.",
    color: "#D97706",
    bg: "bg-amber-50/80",
    border: "border-amber-200/80",
  },
  gynecology: {
    desc: "Sterile obstetric umbilical cord clamps and specialized neonatal vascular access catheters.",
    color: "#DB2777",
    bg: "bg-pink-50/80",
    border: "border-pink-200/80",
  },
  gastroenterology: {
    desc: "Enteral nutrition, pediatric feeding tubes, and sterile infant mucus aspiration systems.",
    color: "#7C3AED",
    bg: "bg-purple-50/80",
    border: "border-purple-200/80",
  },
  cardiology: {
    desc: "High-pressure rated monitoring lines and specialized cardio-thoracic vascular disposables.",
    color: "#E11D48",
    bg: "bg-rose-50/80",
    border: "border-rose-200/80",
  },
  nephrology: {
    desc: "Hemodialysis catheters, A.V. fistula needles, and transducer protectors for clinical renal care.",
    color: "#0284C7",
    bg: "bg-sky-50/80",
    border: "border-sky-200/80",
  },
  surgical: {
    desc: "Closed wound suction vac systems, corrugated drainage sheets, and surgical accessories.",
    color: "#059669",
    bg: "bg-emerald-50/80",
    border: "border-emerald-200/80",
  },
  "mecca-labs": {
    desc: "WHO-GMP audited pharmaceutical dossiers, export nutraceuticals, and specialized formulations.",
    color: "#8B1E2D",
    bg: "bg-[#F8EDEF]",
    border: "border-burgundy/20",
  },
};

const QUICK_FILTERS = [
  { id: "all", label: "All Standards" },
  { id: "iso", label: "ISO 13485", match: "iso" },
  { id: "eo", label: "EO Sterile", match: "eo" },
  { id: "ce", label: "CE Marked", match: "ce" },
  { id: "who", label: "WHO-GMP", match: "who" },
];

export default function ProductsGrid() {
  const {
    openQuoteModal,
    addToQuote,
    toggleQuoteItem,
    isItemInQuote,
  } = useQuoteModal();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStandard, setSelectedStandard] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync with URL query parameter on initial load (e.g. /products?category=urology)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("category") || params.get("cat");
      if (catParam) {
        const found = CATEGORIES.find(
          (c) => c.id.toLowerCase() === catParam.toLowerCase()
        );
        if (found) {
          setActiveCategory(found.id);
        }
      }
    }
  }, []);

  const totalProducts = PRODUCTS.length;
  const categoryCount = CATEGORIES.filter((cat) => cat.id !== "all").length;

  // Filter products by category, search text, and standard tags
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.categoryId === activeCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.specs.some(
          (s) =>
            s.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.value.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesStandard =
        selectedStandard === "all" ||
        item.badge.toLowerCase().includes(selectedStandard) ||
        item.specs.some((s) => s.value.toLowerCase().includes(selectedStandard));

      return matchesCategory && matchesSearch && matchesStandard;
    });
  }, [activeCategory, searchQuery, selectedStandard]);

  // Grouped departments when in "all" mode with no search
  const departmentSections = useMemo(() => {
    const departments = CATEGORIES.filter((c) => c.id !== "all");
    return departments
      .map((cat) => {
        const items = PRODUCTS.filter((p) => {
          const matchCat = p.categoryId === cat.id;
          const matchStandard =
            selectedStandard === "all" ||
            p.badge.toLowerCase().includes(selectedStandard) ||
            p.specs.some((s) => s.value.toLowerCase().includes(selectedStandard));
          return matchCat && matchStandard;
        });
        return {
          category: cat,
          items,
        };
      })
      .filter((dept) => dept.items.length > 0);
  }, [selectedStandard]);

  const currentCategoryMeta = CATEGORIES.find((c) => c.id === activeCategory);

  // Render an individual product card (used in both sectioned and filtered views)
  const renderProductCard = (product: ProductItem) => {
    const isMeccaLabs = product.categoryId === "mecca-labs";

    if (isMeccaLabs) {
      return (
        <div key={product.id} className="sm:col-span-2 xl:col-span-3">
          <MeccaCatalogueCard
            product={product}
            onQuote={() => {
              addToQuote(product.name);
              openQuoteModal(product.name);
            }}
          />
        </div>
      );
    }

    return (
      <div
        key={product.id}
        className="relative flex flex-col justify-between overflow-hidden transition-all bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-[0_8px_30px_rgba(13,34,64,0.05)] hover:shadow-[0_20px_50px_rgba(13,34,64,0.12)] hover:-translate-y-1 group"
      >
        <div>
          {/* Device Image Box with Zoom Effect */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/70 aspect-[4/3] mb-4 p-4 flex items-center justify-center">
            <Link href={`/products/${product.id}`} className="block h-full w-full">
              <img
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  e.currentTarget.src = "/products/hero_medical_products.png";
                }}
                className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
              />
            </Link>

            {/* Clinical Badge */}
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200/80 text-[10px] font-bold text-burgundy shadow-xs">
              {product.badge}
            </div>
          </div>

          {/* Category Label */}
          <div className="text-[11px] font-bold text-burgundy uppercase tracking-wider mb-1">
            {product.category}
          </div>

          {/* Title */}
          <Link href={`/products/${product.id}`}>
            <h3 className="font-heading font-bold text-navy text-base leading-snug mb-2 group-hover:text-burgundy transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed mb-4">
            {product.desc}
          </p>

          {/* Key Specs Pills Grid */}
          <div className="space-y-1 bg-slate-50/90 rounded-xl p-3 border border-slate-100 mb-5 text-[11px]">
            {product.specs.slice(0, 2).map((spec) => (
              <div key={spec.label} className="flex items-center justify-between">
                <span className="text-slate-400">{spec.label}:</span>
                <span className="font-semibold text-navy truncate max-w-[150px]">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Bottom CTA Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setSelectedProduct(product)}
            className="flex-1 py-2.5 px-3 rounded-full bg-[#EEF4FA] text-navy font-semibold text-xs border border-[#D5E3F5] hover:bg-navy hover:text-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>Specs</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Multi-Product RFQ Toggle Button */}
          <button
            type="button"
            onClick={() => toggleQuoteItem(product.name)}
            className={`py-2.5 px-3 rounded-full text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
              isItemInQuote(product.name)
                ? "bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
            }`}
            title={
              isItemInQuote(product.name)
                ? "Remove from multi-product quote"
                : "Add to multi-product quote list"
            }
          >
            {isItemInQuote(product.name) ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>In RFQ</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 text-slate-500" />
                <span>RFQ</span>
              </>
            )}
          </button>

          {/* Direct Instant Quote Button */}
          <button
            type="button"
            onClick={() => {
              addToQuote(product.name);
              openQuoteModal(product.name);
            }}
            className="py-2.5 px-4 rounded-full bg-burgundy text-white font-semibold text-xs hover:bg-burgundy-dark transition-colors shadow-xs flex items-center gap-1 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Quote</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="catalog" className="py-12 lg:py-20 bg-[#F8FAFC] min-h-screen">
      <div className="container-px">
        {/* TOP COMMAND BAR */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_35px_rgba(13,34,64,0.06)] p-4 sm:p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Title & Category Breadcrumb */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-burgundy uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4 text-burgundy" />
                <span>{totalProducts} Clinical Grade Medical Disposables</span>
              </div>
              <h2 className="font-heading font-black text-navy text-2xl sm:text-3xl tracking-tight flex items-center gap-2">
                <span>{currentCategoryMeta?.label || "Medical Catalog"}</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-burgundy/10 text-burgundy border border-burgundy/20">
                  {filteredProducts.length} Products
                </span>
              </h2>
            </div>

            {/* Search + View Switcher + Mobile Filter Button */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-72 lg:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, sizes, drip rate, gauges..."
                  className="w-full pl-10 pr-9 py-2.5 bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 rounded-full text-xs text-navy placeholder:text-slate-400 focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/15 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy p-0.5"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Mobile Filter Toggle */}
              <button
                type="button"
                onClick={() => setMobileFilterOpen((v) => !v)}
                className="lg:hidden inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-navy font-semibold text-xs rounded-full transition-colors cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-burgundy" />
                <span>Categories</span>
              </button>

              {/* View Mode Toggle */}
              <div className="hidden sm:flex items-center p-1 bg-slate-100 rounded-full border border-slate-200/80">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-all cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-white text-burgundy shadow-xs font-bold"
                      : "text-slate-500 hover:text-navy"
                  }`}
                  aria-label="Grid view"
                  title="Card Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-full transition-all cursor-pointer ${
                    viewMode === "list"
                      ? "bg-white text-burgundy shadow-xs font-bold"
                      : "text-slate-500 hover:text-navy"
                  }`}
                  aria-label="Dense list view"
                  title="Dense Clinical Spec View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* PRIMARY CATEGORY FILTER TABS (Infusion, Urology, Anesthesia, etc.) */}
          <div className="pt-4 mt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline-flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                Specialty:
              </span>
              {CATEGORIES.map((cat) => {
                const Icon = CATEGORY_ICONS[cat.id] || Layers;
                const isSelected = activeCategory === cat.id;
                const count =
                  cat.id === "all"
                    ? PRODUCTS.length
                    : PRODUCTS.filter((p) => p.categoryId === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSelectedStandard("all");
                    }}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                      isSelected
                        ? "bg-burgundy text-white shadow-sm ring-2 ring-burgundy/20"
                        : "bg-slate-100/90 text-navy hover:bg-slate-200/90 hover:text-burgundy"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-slate-500"}`} />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected
                          ? "bg-white/25 text-white"
                          : "bg-white text-slate-600 border border-slate-200/60"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Standard Filter Badges */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-3 mt-3 border-t border-slate-100 text-[11px]">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
              Compliance Standard:
            </span>
            {QUICK_FILTERS.map((qf) => {
              const isSelected = selectedStandard === qf.id;
              return (
                <button
                  key={qf.id}
                  onClick={() => setSelectedStandard(qf.id)}
                  className={`px-3 py-1 text-xs rounded-full whitespace-nowrap transition-all cursor-pointer font-medium ${
                    isSelected
                      ? "bg-navy text-white shadow-xs font-semibold"
                      : "bg-slate-100/90 text-slate-600 hover:bg-slate-200/80 hover:text-navy"
                  }`}
                >
                  {qf.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN LAYOUT: SIDEBAR + PRODUCT FEED */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDEBAR: STICKY CATEGORY NAVIGATOR */}
          <aside className="lg:col-span-3 hidden lg:block sticky top-28 space-y-6">
            {/* Category Navigator Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_35px_rgba(13,34,64,0.06)] p-5">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Medical Departments
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {categoryCount} Categories
                </span>
              </div>

              <div className="space-y-1">
                {CATEGORIES.map((cat) => {
                  const Icon = CATEGORY_ICONS[cat.id] || Layers;
                  const isActive = activeCategory === cat.id;
                  const count =
                    cat.id === "all"
                      ? PRODUCTS.length
                      : PRODUCTS.filter((p) => p.categoryId === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setSelectedStandard("all");
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all duration-150 cursor-pointer group ${
                        isActive
                          ? "bg-burgundy text-white font-bold shadow-[0_6px_20px_rgba(139,30,45,0.25)]"
                          : "hover:bg-slate-50 text-navy"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-slate-100 text-slate-600 group-hover:bg-burgundy/10 group-hover:text-burgundy"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs truncate">{cat.label}</span>
                      </div>

                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ml-2 shrink-0 ${
                          isActive
                            ? "bg-white/25 text-white"
                            : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom OEM & Cleanroom Manufacturing Promo Box */}
            <div className="rounded-3xl bg-gradient-to-b from-[#0F2740] to-[#091D33] text-white p-6 shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-burgundy/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-white text-[10px] font-semibold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3 h-3 text-burgundy" />
                  OEM Customization
                </div>
                <h4 className="font-heading font-bold text-sm leading-snug mb-1.5">
                  Need Custom Gauge, Length or Private Label?
                </h4>
                <p className="text-white/70 text-xs leading-relaxed mb-4">
                  Class 100K cleanroom injection molding, automated assembly &amp; custom blister packaging.
                </p>
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-burgundy-gradient text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request Custom RFQ</span>
                </button>
              </div>
            </div>

            {/* Download Official Product Catalog PDF */}
            <a
              href="/catalogues/mhpl-catalogue-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-burgundy hover:shadow-soft transition-all text-navy group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold group-hover:text-burgundy transition-colors">
                    2026 Product Catalog
                  </div>
                  <div className="text-[10px] text-slate-400">PDF Documentation (6.5 MB)</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </aside>

          {/* MOBILE CATEGORY ACCORDION / DRAWER MODAL */}
          <AnimatePresence>
            {mobileFilterOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm lg:hidden flex items-end sm:items-center justify-center p-4"
                onClick={() => setMobileFilterOpen(false)}
              >
                <motion.div
                  initial={{ y: 50, scale: 0.95 }}
                  animate={{ y: 0, scale: 1 }}
                  exit={{ y: 50, scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl max-h-[80vh] overflow-y-auto"
                >
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <span className="text-sm font-bold text-navy">Select Category</span>
                    <button
                      onClick={() => setMobileFilterOpen(false)}
                      className="p-1 rounded-full text-slate-400 hover:text-navy"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {CATEGORIES.map((cat) => {
                      const Icon = CATEGORY_ICONS[cat.id] || Layers;
                      const isActive = activeCategory === cat.id;
                      const count =
                        cat.id === "all"
                          ? PRODUCTS.length
                          : PRODUCTS.filter((p) => p.categoryId === cat.id).length;

                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setActiveCategory(cat.id);
                            setMobileFilterOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-3 rounded-xl text-left ${
                            isActive
                              ? "bg-burgundy text-white font-bold"
                              : "hover:bg-slate-50 text-navy"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4" />
                            <span className="text-xs">{cat.label}</span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/10">
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* RIGHT PRODUCT FEED */}
          <main className="lg:col-span-9">
            {/* Active Filters Bar if search or category is active */}
            {(activeCategory !== "all" || searchQuery || selectedStandard !== "all") && (
              <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-white rounded-2xl border border-slate-200/80 text-xs">
                <span className="text-slate-400 font-semibold">Active filters:</span>
                {activeCategory !== "all" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy/10 text-burgundy font-semibold">
                    <span>{currentCategoryMeta?.label}</span>
                    <button
                      onClick={() => setActiveCategory("all")}
                      className="hover:text-burgundy-dark"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-navy font-semibold">
                    <span>&ldquo;{searchQuery}&rdquo;</span>
                    <button onClick={() => setSearchQuery("")}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedStandard !== "all" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-navy font-semibold">
                    <span>{selectedStandard.toUpperCase()}</span>
                    <button onClick={() => setSelectedStandard("all")}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                    setSelectedStandard("all");
                  }}
                  className="ml-auto text-xs text-slate-500 hover:text-burgundy font-semibold underline cursor-pointer"
                >
                  Show All Departments
                </button>
              </div>
            )}

            {/* Single Selected Category Department Banner */}
            {activeCategory !== "all" && currentCategoryMeta && (
              <div className="mb-8 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-burgundy/10 text-burgundy">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Selected Range
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {filteredProducts.length} certified items
                      </span>
                    </div>
                    <h3 className="font-heading font-black text-navy text-2xl">
                      {currentCategoryMeta.label}
                    </h3>
                    <p className="text-slate-500 text-xs mt-1 max-w-xl">
                      {CATEGORY_META[activeCategory]?.desc ||
                        "Clinical grade medical disposables manufactured under ISO 13485 cleanroom standards."}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      href={`/products/${activeCategory}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-xs font-semibold text-navy hover:bg-slate-50 transition-colors"
                    >
                      <span>Category Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => setActiveCategory("all")}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-dark transition-colors cursor-pointer shadow-xs"
                    >
                      <span>View All Categories</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ═════════════════════════════════════════════════════════════════════
                VIEW MODE: GRID
               ═════════════════════════════════════════════════════════════════════ */}
            {viewMode === "grid" && (
              <>
                {/* CASE A: ALL CATEGORIES (Grouped by department sections: Infusion, Urology, Anesthesia, etc.) */}
                {activeCategory === "all" && searchQuery === "" ? (
                  <div className="space-y-12">
                    {departmentSections.map(({ category: cat, items }) => {
                      const Icon = CATEGORY_ICONS[cat.id] || Layers;
                      const meta = CATEGORY_META[cat.id];

                      return (
                        <section
                          key={cat.id}
                          id={`section-${cat.id}`}
                          className="pt-2 scroll-mt-28"
                        >
                          {/* Department Section Header Banner */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 mb-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                            <div className="flex items-center gap-3.5">
                              <div
                                className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                                  meta?.bg || "bg-slate-100"
                                } border ${meta?.border || "border-slate-200"}`}
                              >
                                <Icon
                                  className="w-5 h-5"
                                  style={{ color: meta?.color || "#8B1E2D" }}
                                />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-heading font-black text-navy text-lg sm:text-xl">
                                    {cat.label}
                                  </h3>
                                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                                    {items.length} Products
                                  </span>
                                </div>
                                <p className="text-slate-500 text-xs mt-0.5 line-clamp-1">
                                  {meta?.desc}
                                </p>
                              </div>
                            </div>

                            {/* Section Header Action Buttons */}
                            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveCategory(cat.id);
                                  setSelectedStandard("all");
                                }}
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-burgundy hover:text-white text-navy text-xs font-semibold transition-colors cursor-pointer"
                              >
                                <span>Filter Only {cat.label.split(" ")[0]}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                              <Link
                                href={`/products/${cat.id}`}
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 hover:text-navy hover:border-slate-300 text-xs font-medium transition-colors"
                              >
                                <span>Dedicated Page</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>

                          {/* Department Products Grid */}
                          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {items.map((product) => renderProductCard(product))}
                          </div>
                        </section>
                      );
                    })}
                  </div>
                ) : (
                  /* CASE B: Filtered or Single Category View */
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                      {filteredProducts.map((product) => renderProductCard(product))}
                    </AnimatePresence>
                  </div>
                )}
              </>
            )}

            {/* ═════════════════════════════════════════════════════════════════════
                VIEW MODE: LIST (Dense Clinical Table View)
               ═════════════════════════════════════════════════════════════════════ */}
            {viewMode === "list" && (
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(13,34,64,0.05)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-navy border-collapse">
                    <thead>
                      <tr className="bg-slate-50/90 border-b border-slate-200/80 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-4 px-5">Product Name &amp; Code</th>
                        <th className="py-4 px-4">Specialty Category</th>
                        <th className="py-4 px-4">Primary Specification</th>
                        <th className="py-4 px-4">Compliance Badge</th>
                        <th className="py-4 px-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredProducts.map((product) => (
                        <tr
                          key={product.id}
                          className="hover:bg-[#F8FAFC] transition-colors group cursor-pointer"
                          onClick={() => setSelectedProduct(product)}
                        >
                          {/* Name + Thumb */}
                          <td className="py-3.5 px-5">
                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/70 p-1 shrink-0 flex items-center justify-center">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  onError={(e) => {
                                    e.currentTarget.src = "/products/hero_medical_products.png";
                                  }}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div>
                                <div className="font-bold text-navy text-xs group-hover:text-burgundy transition-colors">
                                  {product.name}
                                </div>
                                <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                                  {product.desc}
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* Category */}
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                              {product.category}
                            </span>
                          </td>

                          {/* Primary Spec */}
                          <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                            <div>
                              <span className="font-medium text-navy">
                                {product.specs[0]?.label}:
                              </span>{" "}
                              {product.specs[0]?.value}
                            </div>
                            {product.specs[1] && (
                              <div className="text-[10px] text-slate-400 mt-0.5">
                                {product.specs[1]?.label}: {product.specs[1]?.value}
                              </div>
                            )}
                          </td>

                          {/* Badge */}
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <span className="px-2.5 py-1 rounded-full bg-burgundy/10 text-burgundy text-[11px] font-bold">
                              {product.badge}
                            </span>
                          </td>

                          {/* Actions */}
                          <td className="py-3.5 px-5 text-right whitespace-nowrap">
                            <div className="inline-flex items-center gap-2">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedProduct(product);
                                }}
                                className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-navy hover:text-white text-navy font-semibold text-xs transition-colors cursor-pointer"
                              >
                                Specs
                              </button>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleQuoteItem(product.name);
                                }}
                                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                                  isItemInQuote(product.name)
                                    ? "bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold"
                                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                                }`}
                              >
                                {isItemInQuote(product.name) ? "✓ In RFQ" : "+ RFQ"}
                              </button>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addToQuote(product.name);
                                  openQuoteModal(product.name);
                                }}
                                className="px-3.5 py-1.5 rounded-full bg-burgundy text-white font-semibold text-xs hover:bg-burgundy-dark transition-colors shadow-xs cursor-pointer"
                              >
                                Quote
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-card">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="font-heading font-bold text-navy text-xl">
                  No matching medical devices found
                </h4>
                <p className="text-slate-500 text-xs mt-1 max-w-sm mx-auto">
                  We couldn&apos;t find any product matching &ldquo;{searchQuery}&rdquo;. Try resetting the filters or searching by a different medical specialty.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                    setSelectedStandard("all");
                  }}
                  className="mt-5 px-6 py-2.5 rounded-full bg-burgundy text-white text-xs font-semibold shadow-card hover:bg-burgundy-dark transition-all cursor-pointer"
                >
                  Reset Catalog Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
