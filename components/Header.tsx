"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Droplets,
  Syringe,
  FlaskConical,
  Stethoscope,
  Wind,
  ArrowRight,
  Factory,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Image from "next/image";

/* ─── Navigation data ─── */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", mega: true },
  { label: "OEM Services", href: "/oem-services" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Certifications", href: "/certifications" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const PRODUCT_CATEGORIES = [
  {
    name: "Infusion & Transfusion",
    desc: "IV sets, blood transfusion sets, extension lines",
    href: "/products/category/infusion",
    icon: Droplets,
    color: "#3B82F6",
    image: "/products/iv_infusion_set.png",
  },
  {
    name: "IV Cannulas",
    desc: "FEP radiopaque, winged & port cannulas",
    href: "/products/category/cannulas",
    icon: Syringe,
    color: "#10B981",
    image: "/products/iv_cannula_wings.png",
  },
  {
    name: "Burette Sets",
    desc: "Pediatric 110ml/150ml volume chamber sets",
    href: "/products/category/burette",
    icon: FlaskConical,
    color: "#8B5CF6",
    image: "/products/burette_infusion_set.png",
  },
  {
    name: "Catheters & Drainage",
    desc: "Foley catheters, urinary drainage & tubes",
    href: "/products/category/catheters",
    icon: Stethoscope,
    color: "#F59E0B",
    image: "/products/iv_cannula_wings.png",
  },
  {
    name: "Airway & Respiratory",
    desc: "Endotracheal tubes, oxygen masks, circuits",
    href: "/products/category/respiratory",
    icon: Wind,
    color: "#EF4444",
    image: "/products/iv_infusion_set.png",
  },
  {
    name: "OEM Manufacturing",
    desc: "Contract & private-label production",
    href: "/oem-services",
    icon: Factory,
    color: "#0F2740",
    image: "/products/hero_medical_products.png",
  },
];

/* ─── Component ─── */
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  /* Handlers with grace period so the cursor can travel from link → dropdown */
  const openMega = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <UtilityBar />

      {/* ── Main nav bar ── */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-card border-b border-border"
            : "bg-white/30 backdrop-blur-md"
        }`}
      >
        <div className="container-px flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Mecca Healthcare Home">
            <Image
              src="/MeccaLogo.jpg"
              alt="Mecca Healthcare Logo"
              width={180}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              /* ── Products mega-dropdown trigger ── */
              if (link.mega) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={openMega}
                    onMouseLeave={closeMega}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-burgundy font-semibold"
                          : "text-ink hover:text-burgundy"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          megaOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.97 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="absolute top-full -left-6 pt-4 z-50"
                          style={{ width: "720px" }}
                        >
                          <div className="bg-white rounded-2xl shadow-soft border border-border overflow-hidden">
                            {/* Header */}
                            <div className="px-6 pt-5 pb-3 border-b border-border/60">
                              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">
                                Product Categories
                              </p>
                            </div>

                            {/* Category grid */}
                            <div className="p-4 grid grid-cols-2 gap-2">
                              {PRODUCT_CATEGORIES.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                  <Link
                                    key={cat.name}
                                    href={cat.href}
                                    className="group flex items-start gap-4 p-3.5 rounded-xl hover:bg-gradient-to-br hover:from-bg hover:to-white transition-all duration-200"
                                  >
                                    {/* Icon circle */}
                                    <div
                                      className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                                      style={{
                                        backgroundColor: `${cat.color}14`,
                                        border: `1px solid ${cat.color}28`,
                                      }}
                                    >
                                      <Icon
                                        className="w-5 h-5 transition-colors"
                                        style={{ color: cat.color }}
                                      />
                                    </div>

                                    {/* Text */}
                                    <div className="min-w-0">
                                      <div className="text-sm font-semibold text-navy group-hover:text-burgundy transition-colors flex items-center gap-1.5">
                                        {cat.name}
                                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                      </div>
                                      <div className="text-xs text-gray mt-0.5 leading-relaxed">
                                        {cat.desc}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Footer CTA */}
                            <div className="px-6 py-3.5 bg-bg/60 border-t border-border/60 flex items-center justify-between">
                              <span className="text-xs text-gray">
                                ISO 13485 · CE Certified · WHO-GMP
                              </span>
                              <Link
                                href="/products"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-burgundy hover:text-burgundy-dark transition-colors"
                              >
                                View All Products
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              /* ── Regular nav link ── */
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

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center rounded-full bg-burgundy-gradient text-white text-sm font-semibold px-6 py-2.5 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
            >
              Request Quote
            </Link>
            <button
              className="lg:hidden text-navy"
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

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-border overflow-hidden shadow-soft"
          >
            <div className="container-px py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);

                /* ── Mobile Products accordion ── */
                if (link.mega) {
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileProductsOpen((v) => !v)}
                        className={`w-full flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "text-burgundy bg-burgundy/5"
                            : "text-ink hover:bg-bg"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileProductsOpen ? "rotate-180" : ""
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
                            <div className="pl-3 pr-1 py-2 flex flex-col gap-1">
                              {PRODUCT_CATEGORIES.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                  <Link
                                    key={cat.name}
                                    href={cat.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm text-ink hover:bg-bg transition-colors"
                                  >
                                    <Icon
                                      className="w-4 h-4 shrink-0"
                                      style={{ color: cat.color }}
                                    />
                                    {cat.name}
                                  </Link>
                                );
                              })}
                              <Link
                                href="/products"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold text-burgundy hover:bg-burgundy/5 transition-colors"
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

                /* ── Regular mobile link ── */
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-burgundy bg-burgundy/5"
                        : "text-ink hover:bg-bg"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex justify-center rounded-full bg-burgundy-gradient text-white text-sm font-semibold px-6 py-3 shadow-card"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
