"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Droplets,
  Wind,
  Stethoscope,
  HeartPulse,
  FlaskConical,
  Activity,
  Scissors,
  Microscope,
  Building2,
  Users,
  Compass,
  ShieldCheck,
  Award,
  ArrowRight,
  Sparkles,
  FileCheck,
  CheckCircle2,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Image from "next/image";
import { useQuoteModal } from "@/context/QuoteContext";
import LanguageTranslator from "@/components/LanguageTranslator";

/* ─── Product Mega Menu Data (8 Medical Specialties) ─── */
const PRODUCT_CATEGORIES = [
  {
    name: "Infusion / Perfusion Range",
    desc: "Vented & non-vented IV sets, B.T. sets, burette sets, scalp vein & cannulas (12 products)",
    href: "/products/infusion",
    icon: Droplets,
    color: "#3B82F6",
  },
  {
    name: "Anesthesia",
    desc: "Endotracheal tubes (cuffed/plain), oxygen masks, nebulizers, Guedel airways & stop cocks (10 products)",
    href: "/products/anesthesia",
    icon: Wind,
    color: "#EF4444",
  },
  {
    name: "Urology",
    desc: "Urine bags with hanger, Uromesare ICU meters, Foley balloon catheters & TUR sets (13 products)",
    href: "/products/urology",
    icon: Stethoscope,
    color: "#F59E0B",
  },
  {
    name: "Gynecology",
    desc: "Sterile & reusable umbilical cord clamps, neonatal umbilical catheters (3 products)",
    href: "/products/gynecology",
    icon: HeartPulse,
    color: "#EC4899",
  },
  {
    name: "Gastroenterology",
    desc: "Ryle's nasogastric tubes, infant feeding tubes, infant mucus extractors (3 products)",
    href: "/products/gastroenterology",
    icon: FlaskConical,
    color: "#8B5CF6",
  },
  {
    name: "Cardiology",
    desc: "1200 PSI high pressure lines, cardio-thoracic & vascular surgical products (2 products)",
    href: "/products/cardiology",
    icon: Activity,
    color: "#DC2626",
  },
  {
    name: "General Surgical Disposables",
    desc: "Yankauer suction kits, corrugated drainage, close wound vac sets, surgical apparels (6 products)",
    href: "/products/surgical",
    icon: Scissors,
    color: "#059669",
  },
  {
    name: "Mecca Labs",
    desc: "WHO-GMP pharmaceutical formulations, nutraceuticals, milk products & cosmeceuticals (5 products)",
    href: "/products/mecca-labs",
    icon: Microscope,
    color: "#0F2740",
  },
];

/* ─── Company Dropdown Data ─── */
const COMPANY_LINKS = [
  {
    name: "Organization Profile",
    desc: "48+ years manufacturing legacy, 3 cleanroom plants & global footprint",
    href: "/about-us/profile",
    icon: Building2,
    color: "#8B1E2D",
  },
  {
    name: "Management & Leadership",
    desc: "Executive leadership, promoters, board governance & engineering heads",
    href: "/about-us/management",
    icon: Users,
    color: "#0F2740",
    subLinks: [
      { name: "Management Profile", href: "/about-us/management" },
      { name: "Management Responsibility", href: "/about-us/management/responsibility" },
      { name: "Management Commitment", href: "/about-us/management/commitment" },
      { name: "Management Organization Chart", href: "/about-us/management/organization-chart" },
    ],
  },
  {
    name: "Vision & Mission Statement",
    desc: "Our core principles, clinical excellence & healthcare vision",
    href: "/about-us/vision-mission",
    icon: Compass,
    color: "#2563EB",
  },
  {
    name: "QMS & Quality Policy",
    desc: "ISO 13485 & WHO-GMP Quality Management System & testing protocols",
    href: "/about-us/qms",
    icon: ShieldCheck,
    color: "#059669",
  },
  {
    name: "Certificates & Accreditations",
    desc: "CE Mark, ISO 13485:2016, WHO-GMP & global regulatory approvals",
    href: "/certifications",
    icon: Award,
    color: "#D97706",
  },
  {
    name: "Manufacturing Facilities",
    desc: "Class 10,000 cleanroom units in Kalol, Chhatral & Jodhpur",
    href: "/about-us/facilities",
    icon: Sparkles,
    color: "#8B5CF6",
  },
];

/* ─── Main Navigation Bar Links ─── */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", mega: "products" },
  { label: "Company", href: "/about-us", mega: "company" },
  { label: "OEM Services", href: "/oem-services" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { openQuoteModal, selectedProducts } = useQuoteModal();
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu & megas on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
    setMobileCompanyOpen(false);
    setActiveMega(null);
  }, [pathname]);

  const handleMouseEnter = (megaKey: string) => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setActiveMega(megaKey);
  };

  const handleMouseLeave = () => {
    megaTimeout.current = setTimeout(() => {
      setActiveMega(null);
    }, 180);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <UtilityBar />

      {/* ── Main nav bar ── */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(13,34,64,0.07)] border-b border-border/80"
            : "bg-white/75 backdrop-blur-md border-b border-white/60"
        }`}
      >
        <div className="container-px flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Mecca Healthcare Home">
            <Image
              src="/MeccaLogoTransparent.png"
              alt="Mecca Healthcare Logo"
              width={175}
              height={48}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              /* ── Dropdown / Mega Menu Triggers ── */
              if (link.mega) {
                const isCurrentMegaOpen = activeMega === link.mega;

                return (
                  <div
                    key={link.label}
                    className="relative py-6"
                    onMouseEnter={() => handleMouseEnter(link.mega as string)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                        isCurrentMegaOpen || isActive
                          ? "text-burgundy font-semibold"
                          : "text-ink hover:text-burgundy"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isCurrentMegaOpen ? "rotate-180 text-burgundy" : "text-slate-400"
                        }`}
                      />
                    </Link>

                    {/* ── FIREFLIES.AI STYLE MEGA MENU ── */}
                    <AnimatePresence>
                      {isCurrentMegaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={`absolute top-full pt-2 z-50 ${
                            link.mega === "products"
                              ? "-left-48 xl:-left-36 w-[980px] xl:w-[1040px]"
                              : "-left-20 xl:-left-12 w-[900px] xl:w-[940px]"
                          }`}
                        >
                          <div className="bg-white rounded-3xl shadow-[0_25px_80px_rgba(13,34,64,0.18)] border border-slate-200/90 overflow-hidden p-7 xl:p-8">
                            {link.mega === "products" ? (
                              /* ── PRODUCTS MEGA MENU LAYOUT (Fireflies Style) ── */
                              <div className="grid grid-cols-12 gap-8 items-stretch">
                                {/* LEFT SIDE: 2 Columns of Category Items (8 Items Total) */}
                                <div className="col-span-8 grid grid-cols-2 gap-x-6 gap-y-5">
                                  {PRODUCT_CATEGORIES.map((cat) => {
                                    const Icon = cat.icon;
                                    return (
                                      <Link
                                        key={cat.name}
                                        href={cat.href}
                                        className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#F8FAFC] transition-all duration-150 border border-transparent hover:border-slate-200/70"
                                      >
                                        {/* Icon */}
                                        <div
                                          className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                                          style={{
                                            backgroundColor: `${cat.color}12`,
                                            border: `1px solid ${cat.color}25`,
                                          }}
                                        >
                                          <Icon
                                            className="w-5 h-5 transition-colors"
                                            style={{ color: cat.color }}
                                          />
                                        </div>

                                        {/* Text */}
                                        <div className="min-w-0">
                                          <div className="text-[13px] font-bold text-navy group-hover:text-burgundy transition-colors flex items-center gap-1.5 leading-snug">
                                            <span>{cat.name}</span>
                                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 text-burgundy" />
                                          </div>
                                          <p className="text-[11px] text-gray mt-1 leading-relaxed line-clamp-2">
                                            {cat.desc}
                                          </p>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>

                                {/* RIGHT SIDE: Fireflies Spotlight Showcase Card */}
                                <div className="col-span-4 flex flex-col">
                                  <div className="h-full rounded-2xl bg-gradient-to-b from-[#F8FAFC] to-[#EFF4FA] border border-slate-200/80 p-6 flex flex-col justify-between relative overflow-hidden">
                                    {/* Top Spotlight Badge & Logo */}
                                    <div className="flex items-center justify-between mb-4">
                                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-2.5 py-1 rounded-full">
                                        <Sparkles className="w-3 h-3 text-burgundy" />
                                        Spotlight
                                      </span>
                                      <span className="text-[11px] font-semibold text-slate-400">
                                        ISO 13485
                                      </span>
                                    </div>

                                    {/* Concentric Ring Circle Frame (Fireflies Avatar Style) */}
                                    <div className="my-2 flex items-center justify-center">
                                      <div className="relative flex items-center justify-center p-3">
                                        {/* Outer Ring */}
                                        <div className="absolute inset-0 rounded-full border border-burgundy/20 animate-pulse" />
                                        {/* Middle Ring */}
                                        <div className="absolute inset-1.5 rounded-full border border-medblue/25" />
                                        {/* Inner Image Circle */}
                                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md bg-white">
                                          <img
                                            src="/products/hero_medical_products.png"
                                            alt="Mecca Healthcare Medical Line"
                                            className="w-full h-full object-cover"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    {/* Content & Story Headline */}
                                    <div className="text-center mt-3">
                                      <h4 className="font-heading text-sm font-bold text-navy leading-snug">
                                        Precision Infusion &amp; Catheter Solutions
                                      </h4>
                                      <p className="text-[11px] text-slate-600 mt-2 leading-relaxed italic">
                                        &ldquo;100% inline leak-tested, Class 100,000 cleanroom manufactured &amp; CE marked.&rdquo;
                                      </p>
                                    </div>

                                    {/* Bottom CTA link */}
                                    <div className="mt-5 pt-3 border-t border-slate-200/80 text-center">
                                      <Link
                                        href="/products"
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-burgundy hover:text-burgundy-dark transition-colors group"
                                      >
                                        <span>Explore Full 2026 Portfolio</span>
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              /* ── COMPANY MEGA MENU LAYOUT (Fireflies Style) ── */
                              <div className="grid grid-cols-12 gap-8 items-stretch">
                                {/* LEFT SIDE: 2 Columns of Company Links */}
                                <div className="col-span-8 grid grid-cols-2 gap-x-6 gap-y-5">
                                  {COMPANY_LINKS.map((item) => {
                                    const Icon = item.icon;
                                    const hasSubLinks = "subLinks" in item;

                                    const linkContent = (
                                      <>
                                        {/* Icon */}
                                        <div
                                          className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                                          style={{
                                            backgroundColor: `${item.color}12`,
                                            border: `1px solid ${item.color}25`,
                                          }}
                                        >
                                          <Icon
                                            className="w-5 h-5"
                                            style={{ color: item.color }}
                                          />
                                        </div>

                                        {/* Text */}
                                        <div className="min-w-0">
                                          <div className="text-[13px] font-bold text-navy group-hover:text-burgundy transition-colors flex items-center gap-1.5 leading-snug">
                                            <span>{item.name}</span>
                                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 text-burgundy" />
                                          </div>
                                          <p className="text-[11px] text-gray mt-1 leading-relaxed">
                                            {item.desc}
                                          </p>
                                        </div>
                                      </>
                                    );

                                    if (hasSubLinks && "subLinks" in item && item.subLinks) {
                                      return (
                                        <div
                                          key={item.name}
                                          className="group flex flex-col p-3.5 rounded-2xl hover:bg-[#F8FAFC] transition-all duration-150 border border-transparent hover:border-slate-200/70"
                                        >
                                          <Link href={item.href} className="flex items-start gap-3.5">
                                            {linkContent}
                                          </Link>
                                          <div className="mt-3 ml-[54px] flex flex-col gap-1.5 border-l-2 border-slate-100 pl-3">
                                            {item.subLinks.map((sub) => (
                                              <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="text-[11px] text-slate-500 hover:text-burgundy font-medium transition-colors py-0.5"
                                              >
                                                {sub.name}
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      );
                                    }

                                    return (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        className="group flex items-start gap-3.5 p-3.5 rounded-2xl hover:bg-[#F8FAFC] transition-all duration-150 border border-transparent hover:border-slate-200/70"
                                      >
                                        {linkContent}
                                      </Link>
                                    );
                                  })}
                                </div>

                                {/* RIGHT SIDE: Company Legacy Spotlight Card */}
                                <div className="col-span-4 flex flex-col">
                                  <div className="h-full rounded-2xl bg-gradient-to-b from-[#F8FAFC] to-[#EFF4FA] border border-slate-200/80 p-6 flex flex-col justify-between relative overflow-hidden">
                                    {/* Top Tag */}
                                    <div className="flex items-center justify-between mb-4">
                                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#059669] bg-emerald-50 px-2.5 py-1 rounded-full">
                                        <FileCheck className="w-3 h-3 text-[#059669]" />
                                        WHO-GMP Certified
                                      </span>
                                      <span className="text-[11px] font-semibold text-slate-400">
                                        Est. 1977
                                      </span>
                                    </div>

                                    {/* Concentric Ring Frame with Cleanroom Image */}
                                    <div className="my-2 flex items-center justify-center">
                                      <div className="relative flex items-center justify-center p-3">
                                        <div className="absolute inset-0 rounded-full border border-[#059669]/25 animate-pulse" />
                                        <div className="absolute inset-1.5 rounded-full border border-burgundy/20" />
                                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md bg-white">
                                          <img
                                            src="/Cleanrrom.jpg"
                                            alt="Cleanroom Plant"
                                            className="w-full h-full object-cover"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center mt-3">
                                      <h4 className="font-heading text-sm font-bold text-navy leading-snug">
                                        Trusted Healthcare Supply Partner
                                      </h4>
                                      <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                                        Exporting to 50+ countries with 3 high-capacity medical manufacturing plants in Gujarat &amp; Rajasthan.
                                      </p>
                                    </div>

                                    {/* Bottom CTA */}
                                    <div className="mt-5 pt-3 border-t border-slate-200/80 text-center">
                                      <Link
                                        href="/about-us"
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-burgundy hover:text-burgundy-dark transition-colors group"
                                      >
                                        <span>Read Company Story</span>
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              /* ── Standard Navigation Link ── */
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-burgundy font-semibold"
                      : "text-ink hover:text-burgundy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/certifications"
              className="hidden 2xl:inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-burgundy transition-colors py-2 px-3 rounded-full hover:bg-slate-100/70"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certificates</span>
            </Link>

            {/* Language Translator */}
            <LanguageTranslator variant="header" className="hidden sm:inline-block" />

            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-burgundy-gradient text-white text-xs sm:text-sm font-semibold px-5 xl:px-6 py-2.5 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all cursor-pointer relative"
            >
              <span>Request Quote</span>
              {selectedProducts && selectedProducts.length > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-burgundy text-[11px] font-bold shadow-xs">
                  {selectedProducts.length}
                </span>
              )}
            </button>

            <button
              className="lg:hidden text-navy p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-border overflow-hidden shadow-soft max-h-[85vh] overflow-y-auto"
          >
            <div className="container-px py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);

                /* Mobile Products Accordion */
                if (link.mega === "products") {
                  return (
                    <div key={link.label} className="border-b border-slate-100 pb-1">
                      <button
                        onClick={() => setMobileProductsOpen((v) => !v)}
                        className={`w-full flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "text-burgundy bg-burgundy/5"
                            : "text-ink hover:bg-bg"
                        }`}
                      >
                        <span className="font-semibold">{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileProductsOpen ? "rotate-180 text-burgundy" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-3 pr-1 py-2 flex flex-col gap-1 bg-slate-50/70 rounded-xl mb-2">
                              {PRODUCT_CATEGORIES.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                  <Link
                                    key={cat.name}
                                    href={cat.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-xs sm:text-sm text-ink hover:bg-white hover:text-burgundy transition-colors"
                                  >
                                    <Icon
                                      className="w-4 h-4 shrink-0"
                                      style={{ color: cat.color }}
                                    />
                                    <span>{cat.name}</span>
                                  </Link>
                                );
                              })}
                              <Link
                                href="/products"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold text-burgundy hover:bg-burgundy/5 transition-colors"
                              >
                                View All Products
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                /* Mobile Company Accordion */
                if (link.mega === "company") {
                  return (
                    <div key={link.label} className="border-b border-slate-100 pb-1">
                      <button
                        onClick={() => setMobileCompanyOpen((v) => !v)}
                        className={`w-full flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "text-burgundy bg-burgundy/5"
                            : "text-ink hover:bg-bg"
                        }`}
                      >
                        <span className="font-semibold">{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileCompanyOpen ? "rotate-180 text-burgundy" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileCompanyOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-3 pr-1 py-2 flex flex-col gap-1 bg-slate-50/70 rounded-xl mb-2">
                              {COMPANY_LINKS.map((item) => {
                                const Icon = item.icon;
                                const hasSubLinks = "subLinks" in item;

                                return (
                                  <div key={item.name} className="flex flex-col">
                                    <Link
                                      href={item.href}
                                      onClick={() => !hasSubLinks && setMobileOpen(false)}
                                      className="flex items-center gap-3 py-2 px-3 rounded-lg text-xs sm:text-sm text-ink hover:bg-white hover:text-burgundy transition-colors"
                                    >
                                      <Icon
                                        className="w-4 h-4 shrink-0"
                                        style={{ color: item.color }}
                                      />
                                      <span>{item.name}</span>
                                    </Link>
                                    {hasSubLinks && "subLinks" in item && item.subLinks && (
                                      <div className="ml-9 pl-3 flex flex-col gap-1 border-l border-slate-200 pb-2">
                                        {item.subLinks.map((sub) => (
                                          <Link
                                            key={sub.name}
                                            href={sub.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="text-[11px] text-slate-500 hover:text-burgundy py-1.5 px-2 rounded-md hover:bg-white transition-colors"
                                          >
                                            {sub.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                /* Regular Mobile Link */
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-burgundy bg-burgundy/5 font-semibold"
                        : "text-ink hover:bg-bg"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile Language Translator */}
              <div className="pt-2 pb-1 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Language:</span>
                <LanguageTranslator variant="utility" />
              </div>

              {/* Mobile CTA */}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openQuoteModal();
                }}
                className="mt-2 inline-flex justify-center rounded-full bg-burgundy-gradient text-white text-sm font-semibold px-6 py-3 shadow-card cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
