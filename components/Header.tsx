"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Globe2, ChevronDown, Menu, X } from "lucide-react";
import UtilityBar from "@/components/UtilityBar";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", mega: true },
  { label: "OEM Services", href: "/#oem" },
  { label: "Manufacturing", href: "/#manufacturing" },
  { label: "Certifications", href: "/#certifications" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/#contact" },
];

const PRODUCT_CATEGORIES = [
  { name: "Infusion & Transfusion", desc: "IV sets, transfusion sets, extension lines", href: "/products#catalog" },
  { name: "IV Cannulas", desc: "FEP radiopaque, winged, & port cannulas", href: "/products#catalog" },
  { name: "Burette Sets", desc: "Pediatric 110ml/150ml volume chamber sets", href: "/products#catalog" },
  { name: "Catheters & Drainage", desc: "Foley catheters, urinary drainage & tubes", href: "/products#catalog" },
  { name: "Airway & Respiratory", desc: "Endotracheal tubes, oxygen masks, circuits", href: "/products#catalog" },
  { name: "OEM Manufacturing", desc: "Contract & private-label production", href: "/#oem" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <UtilityBar />

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-card border-b border-border"
            : "bg-white/30 backdrop-blur-md"
        }`}
      >
        <div className="container-px flex items-center justify-between h-20">

          <a
            href="#"
            className="flex items-center shrink-0"
            aria-label="Company Logo"
            >
  <Image
    src="/MeccaLogo.jpg"
    alt="Company Logo"
    width={180}
    height={50}
    className="h-12 w-auto object-contain"
    priority
  />
</a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.mega ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-ink hover:text-burgundy transition-colors"
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </a>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[640px]"
                      >
                        <div className="bg-white rounded-2xl shadow-soft border border-border p-6 grid grid-cols-2 gap-3">
                          {PRODUCT_CATEGORIES.map((cat) => (
                            <a
                              key={cat.name}
                              href={cat.href}
                              className="group p-3 rounded-xl hover:bg-bg transition-colors"
                            >
                              <div className="text-sm font-semibold text-navy group-hover:text-burgundy transition-colors">
                                {cat.name}
                              </div>
                              <div className="text-xs text-gray mt-1">{cat.desc}</div>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-ink hover:text-burgundy transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/#contact"
              className="hidden md:inline-flex items-center rounded-full bg-burgundy-gradient text-white text-sm font-semibold px-6 py-2.5 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
            >
              Request Quote
            </a>
            <button
              className="lg:hidden text-navy"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="container-px py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                className="inline-flex justify-center rounded-full bg-burgundy-gradient text-white text-sm font-semibold px-6 py-3"
              >
                Request Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
