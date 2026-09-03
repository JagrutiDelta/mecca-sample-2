"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteContext";
import LanguageTranslator from "@/components/LanguageTranslator";

const COLUMNS = [
  {
    title: "Products",
    links: [
      { name: "Infusion / Perfusion", href: "/products/infusion" },
      { name: "Anesthesia", href: "/products/anesthesia" },
      { name: "Urology", href: "/products/urology" },
      { name: "Gynecology", href: "/products/gynecology" },
      { name: "Gastroenterology", href: "/products/gastroenterology" },
      { name: "Cardiology", href: "/products/cardiology" },
      { name: "General Surgical", href: "/products/surgical" },
      { name: "Mecca Labs", href: "/products/mecca-labs" },
    ],
  },
  {
    title: "OEM",
    links: [
      { name: "Contract Manufacturing", href: "/oem-services#contract-manufacturing" },
      { name: "Private Label", href: "/oem-services#private-label" },
      { name: "Loan License", href: "/oem-services#loan-license" },
      { name: "Custom Packaging", href: "/oem-services#custom-packaging" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Manufacturing", href: "/manufacturing" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Product Catalogue", href: "/downloads" },
      { name: "Request a Quote", href: "#quote" },
      { name: "Certifications", href: "/certifications" },
      { name: "Downloads", href: "/downloads#resources" },
    ],
  },
];

const PLANTS = ["Kalol", "Chhatral", "Jodhpur"];

export default function Footer() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <footer className="bg-navy-gradient pt-20 pb-0 text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="px-4 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-[1.7fr_repeat(4,minmax(0,1fr))] lg:gap-12 lg:items-start">
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center shrink-0" aria-label="Mecca Healthcare Home">
                <Image
                  src="/MeccaLogoWhite.png"
                  alt="Mecca Healthcare Logo"
                  width={160}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
                Global medical device manufacturer since 1977. ISO 13485 and WHO GMP
                certified, exporting to 50+ countries.
              </p>

              <div className="mt-8 flex items-center gap-3 sm:gap-4">
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
                  { Icon: Twitter, href: "https://twitter.com/@mhpl_india", label: "Twitter" },
                  { Icon: Facebook, href: "https://www.facebook.com/meccahealthcare/?fref=ts", label: "Facebook" },
                  { Icon: Youtube, href: "https://www.youtube.com", label: "YouTube" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {COLUMNS.map((col) => (
              <div key={col.title} className="lg:pt-1">
                <h4 className="mb-4 text-sm font-semibold text-white">{col.title}</h4>
                <ul className="space-y-2.5 text-sm">
                  {col.links.map((l) => (
                    <li key={l.name}>
                      {l.name === "Request a Quote" ? (
                        <button
                          type="button"
                          onClick={() => openQuoteModal()}
                          className="cursor-pointer text-left text-white/70 transition-colors hover:text-white"
                        >
                          {l.name}
                        </button>
                      ) : (
                        <Link href={l.href} className="transition-colors hover:text-white">
                          {l.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-8 border-t border-white/10 py-10 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Manufacturing Units</h4>
              <div className="flex flex-wrap gap-3 text-sm">
                {PLANTS.map((p) => (
                  <span key={p} className="rounded-full border border-white/15 px-4 py-1.5 text-white/70">
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Newsletter</h4>
              <form className="flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/25 focus:ring-2 focus:ring-white/10"
                />
                <button
                  type="submit"
                  className="rounded-full bg-burgundy-gradient px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Subscribe
                </button> 
              </form>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 pb-6 text-xs md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-3 tracking-wide md:justify-start">
              <span className="rounded-full border border-white/15 px-3 py-1">ISO 13485</span>
              <span className="rounded-full border border-white/15 px-3 py-1">ISO 9001</span>
              <span className="rounded-full border border-white/15 px-3 py-1">WHO GMP</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
              <LanguageTranslator variant="utility" direction="up" />
              <Link href="/privacy_policy" className="transition-colors hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
            </div>
          </div>

          <div className="border-t border-white/10 px-4 sm:px-6 lg:px-0">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-5 text-sm text-white/70 md:flex-row">
              <p className="text-center md:text-left">
                © 2026 Mecca Healthcare Pvt. Ltd. All Rights Reserved.
              </p>

              <div className="flex items-center justify-center gap-1.5 text-center md:justify-end">
                <span>Designed &amp; Developed by</span>
                <a href="https://www.deltainfosoft.com/" className="font-medium text-[#8B1E2D]">
                  Delta Infosoft Pvt. Ltd.
                </a>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#8B1E2D]/80" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
