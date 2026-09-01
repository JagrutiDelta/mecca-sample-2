import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import {
  Download,
  FileText,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Package,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Downloads & Resources | Mecca Healthcare Pvt. Ltd.",
  description:
    "Download official product catalogues, technical brochures, ISO 13485 / WHO-GMP certificates, and corporate profiles from Mecca Healthcare Pvt. Ltd.",
};

const DOWNLOAD_ITEMS = [
  {
    category: "Product Catalogues",
    items: [
      {
        title: "Mecca Healthcare Comprehensive Medical Device Catalogue 2026",
        desc: "Complete 54+ medical devices covering Infusion, Anesthesia, Urology, Gynecology, Gastroenterology, Cardiology & Surgery.",
        file: "/catalogues/mhpl-catalogue-2026.pdf",
        format: "PDF",
        size: "4.8 MB",
        badge: "Official 2026 Edition",
      },
      {
        title: "Mecca Labs Formulation & Pharmaceutical Portfolio",
        desc: "Specialty pharmaceutical range, oral liquids, tablets, dry syrups, and nutraceutical products.",
        file: "/products/mecca-labs/pharmaceutical-product-list",
        isLink: true,
        format: "Interactive / PDF",
        size: "View Online",
        badge: "WHO-GMP",
      },
    ],
  },
  {
    category: "Certificates & Quality Accreditations",
    items: [
      {
        title: "ISO 13485:2016 Certificate (Medical Devices QMS)",
        desc: "Certified Quality Management System for design, manufacturing, and distribution of sterile medical devices.",
        file: "/certificates/iso-13485-2016.pdf",
        format: "PDF",
        size: "1.2 MB",
        badge: "ISO 13485:2016",
      },
      {
        title: "ISO 9001:2015 Quality Management System Certificate",
        desc: "Standardized quality control across manufacturing facilities in Kalol, Chhatral, and Jodhpur.",
        file: "/certificates/iso-9001-2015.pdf",
        format: "PDF",
        size: "1.1 MB",
        badge: "ISO 9001:2015",
      },
      {
        title: "WHO–GMP Certificate of Good Manufacturing Practices",
        desc: "World Health Organization Good Manufacturing Practices validation for sterile cleanrooms.",
        file: "/certificates/who-gmp.pdf",
        format: "PDF",
        size: "1.4 MB",
        badge: "WHO-GMP",
      },
    ],
  },
  {
    category: "OEM & Corporate Resources",
    items: [
      {
        title: "OEM & Contract Manufacturing Capabilities Brochure",
        desc: "Guide to private label manufacturing, cleanroom specifications (Class 10,000 & 100,000), tooling, and custom extrusion.",
        file: "/oem-services",
        isLink: true,
        format: "Web Guide",
        size: "Online",
        badge: "OEM Services",
      },
      {
        title: "Mecca Healthcare Corporate Profile & Factory Tour Overview",
        desc: "48+ years legacy, 3 manufacturing plants, technological infrastructure, and global export footprint in 50+ countries.",
        file: "/about-us/profile",
        isLink: true,
        format: "Web Guide",
        size: "Online",
        badge: "Company Profile",
      },
    ],
  },
];

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <UtilityBar />
      <Header />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-navy-gradient text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-medical-grid opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-burgundy/20 blur-3xl pointer-events-none" />

        <div className="container-px relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider backdrop-blur-md mb-6">
              <Download className="w-4 h-4 text-accent" />
              <span>Resource Center</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">
              Downloads & Documentation
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Access product catalogues, technical documentation, quality compliance certificates, and OEM service brochures.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="resources" className="section-py">
        <div className="container-px max-w-6xl mx-auto space-y-12">
          {DOWNLOAD_ITEMS.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-border pb-3">
                <div className="w-8 h-8 rounded-lg bg-burgundy/10 flex items-center justify-center text-burgundy">
                  {idx === 0 ? <BookOpen className="w-4 h-4" /> : idx === 1 ? <Award className="w-4 h-4" /> : <Package className="w-4 h-4" />}
                </div>
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy">
                  {section.category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-border p-6 shadow-card hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-burgundy/10 text-burgundy">
                          {item.badge}
                        </span>
                        <span className="text-xs text-gray">{item.size} &middot; {item.format}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-navy text-base mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <div>
                      {item.isLink ? (
                        <Link
                          href={item.file}
                          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-bg hover:bg-border text-navy text-xs font-semibold transition-colors"
                        >
                          Explore Online <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <a
                          href={item.file}
                          download
                          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-burgundy hover:bg-burgundy-dark text-white text-xs font-semibold transition-colors shadow-sm"
                        >
                          <Download className="w-3.5 h-3.5" /> Download {item.format}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Need Custom Documentation Banner */}
          <div className="mt-16 rounded-2xl bg-navy-gradient text-white p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs text-accent font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Need Custom Regulatory Dossiers or CoA?
              </div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-white">
                Request Specific Technical Data Sheets & Dossiers
              </h3>
              <p className="text-xs md:text-sm text-white/70 max-w-xl">
                Our regulatory affairs team provides complete DMF (Drug Master Files), CE technical documentation, and batch test records on request for international tenders and institutional buyers.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-burgundy hover:bg-burgundy-dark text-white text-sm font-semibold px-7 py-3 transition-colors shadow-soft"
            >
              Contact Regulatory Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
