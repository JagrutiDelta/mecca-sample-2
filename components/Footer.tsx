"use client";
import Image from "next/image";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteContext";
import LanguageTranslator from "@/components/LanguageTranslator";


const COLUMNS = [
  {
    title: "Products",
    links: [
      { name: "Infusion / Perfusion", href: "/products/infusion" },
      { name: "Anesthesia", href: "/products/anesthesia" },
      { name: "Urology", href: "/products/urology" },
      { name: "Gynocology", href: "/products/gynocology" },
      { name: "Gastroenterology", href: "/products/gastroenterology" },
      { name: "Cardiology", href: "/products/cardiology" },
      { name: "General Surgical", href: "/products/surgical" },
      { name: "Mecca Labs", href: "/products/mecca-labs" },
    ],
  },
  {
    title: "OEM",
    links: [
      { name: "Contract Manufacturing", href: "/oem-services" },
      { name: "Private Label", href: "/oem-services" },
      { name: "Loan License", href: "/oem-services" },
      { name: "Custom Packaging", href: "/oem-services" },
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
      { name: "Product Catalogue", href: "/#contact" },
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
    <footer className="bg-navy-gradient text-white/70 pt-20 pb-8">
      <div className="container-px">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-2">
            <a
  href="#"
  className="flex items-center shrink-0"
  aria-label="Company Logo"
>

  <Image
    src="/MeccaLogo.jpg"
    alt="Company Logo"
    width={160}
    height={48}
    className="h-12 w-auto object-contain"
    priority
  />
</a>
            <p className="mt-5 text-sm leading-relaxed max-w-xs">
              Global medical device manufacturer since 1977. ISO 13485 and WHO GMP
              certified, exporting to 50+ countries.
            </p>
            <div className="flex gap-8 mt-10">
              {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-white text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.name}>
                    {l.name === "Request a Quote" ? (
                      <button
                        type="button"
                        onClick={() => openQuoteModal()}
                        className="hover:text-white transition-colors cursor-pointer text-left"
                      >
                        {l.name}
                      </button>
                    ) : (
                      <a href={l.href} className="hover:text-white transition-colors">
                        {l.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 py-10 border-b border-white/10">
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-3">Manufacturing Units</h4>
            <div className="flex flex-wrap gap-3 text-sm">
              {PLANTS.map((p) => (
                <span key={p} className="rounded-full border border-white/15 px-4 py-1.5">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-3">Newsletter</h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full bg-white/5 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              />
              <button
                type="submit"
                className="rounded-full bg-burgundy-gradient text-white text-sm font-semibold px-5 py-2.5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs">
          <div className="flex items-center gap-3 tracking-wide">
            <span className="border border-white/15 rounded-full px-3 py-1">ISO 13485</span>
            <span className="border border-white/15 rounded-full px-3 py-1">ISO 9001</span>
            <span className="border border-white/15 rounded-full px-3 py-1">WHO GMP</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <LanguageTranslator variant="utility" direction="up" />
            <span>&copy; {new Date().getFullYear()} Mecca Healthcare Pvt. Ltd. All rights reserved.</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
