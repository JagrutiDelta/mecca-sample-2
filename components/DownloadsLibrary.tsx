"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  Search,
  X,
  Filter,
  LayoutGrid,
  List,
  Eye,
  Sparkles,
  Clock,
  Building2,
  Landmark,
  Check,
  FileCheck,
  Layers,
  Bookmark,
  FileDown,
  Library,
  ChevronRight,
  FolderOpen,
  Hash,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Info,
  RotateCcw,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */

export interface LibraryDocument {
  id: string;
  title: string;
  category: string;
  shelf: string;
  shelfLabel: string;
  desc: string;
  file: string;
  format: "PDF" | "Interactive Guide" | "Web Guide" | "Certificate";
  size: string;
  version: string;
  badge: string;
  pages?: string;
  topics: string[];
  isLink?: boolean;
  audience?: string;
}

/* -------------------------------------------------------------------------- */
/* DOCUMENT ARCHIVE DATA                                                      */
/* -------------------------------------------------------------------------- */

const DOCUMENTS: LibraryDocument[] = [
  // SHELF 1: Medical Device Catalogues
  {
    id: "mhpl-catalogue-2026",
    title: "Mecca Healthcare Comprehensive Medical Device Catalogue 2026",
    category: "Product Catalogues",
    shelf: "catalogues",
    shelfLabel: "Medical Catalogues",
    desc: "Complete reference catalogue encompassing 54+ sterile medical devices across Infusion, Anesthesia, Urology, Surgery, and Gastroenterology.",
    file: "/catalogues/mhpl-catalogue-2026.pdf",
    format: "PDF",
    size: "6.5 MB",
    version: "2026 Official Edition",
    badge: "Flagship Catalogue",
    pages: "56 Pages",
    audience: "Hospitals, Procurement Officers & Distributors",
    topics: [
      "Infusion sets, flow regulators & cannulas",
      "Endotracheal tubes, spinal needles & catheters",
      "Foley balloons, suction & wound drainage sets",
      "Full technical drawings & gauge matrices",
    ],
  },
  {
    id: "product-list-2026",
    title: "Mecca Healthcare Official Product List (CDSCO Verified)",
    category: "Product Catalogues",
    shelf: "catalogues",
    shelfLabel: "Medical Catalogues",
    desc: "Concise statutory SKU reference list with active CDSCO license brand names, item codes, pack sizes, and standard carton quantities.",
    file: "/catalogues/product-list-2026.pdf",
    format: "PDF",
    size: "70 KB",
    version: "Rev 2026.1",
    badge: "Quick Reference",
    pages: "4 Pages",
    audience: "Distributors & Supply Chain Managers",
    topics: [
      "Complete SKU codes & registered brand names",
      "Inner pack and master shipper dimensions",
      "CDSCO Form MD-9 regulatory mapping",
      "Standard sterile EO packaging configurations",
    ],
  },
  {
    id: "product-category-list-cdsco",
    title: "CDSCO Complete Product Category Classification List",
    category: "Regulatory & Statutory",
    shelf: "regulatory",
    shelfLabel: "Regulatory & Statutory",
    desc: "Statutory Central Licensing Authority documentation detailing medical device risk classifications (Class A/B/C) and clinical indications.",
    file: "/catalogues/product-category-list-cdsco.pdf",
    format: "PDF",
    size: "100 KB",
    version: "CDSCO MDR 2017",
    badge: "Statutory Filing",
    pages: "6 Pages",
    audience: "Regulatory Affairs & Hospital Tenders",
    topics: [
      "Official risk-based regulatory classifications",
      "Central Drugs Standard Control compliance rules",
      "Clinical indications & intended purpose records",
      "License verification references",
    ],
  },

  // SHELF 2: Specialty Clinical Fliers
  {
    id: "nephrology-products-2026",
    title: "Nephrology Care & Dialysis Solutions Catalogue 2026",
    category: "Specialty Clinical Fliers",
    shelf: "clinical",
    shelfLabel: "Specialty Clinical Fliers",
    desc: "Dedicated clinical handbook detailing hemodialysis catheters, AV fistula needles, peritoneal catheters, and extracorporeal bloodline sets.",
    file: "/catalogues/nephrology-products-2026.pdf",
    format: "PDF",
    size: "26.6 MB",
    version: "2026 Clinical Monograph",
    badge: "Nephrology Focus",
    pages: "18 Pages",
    audience: "Nephrologists, Dialysis Centers & ICU Units",
    topics: [
      "Thermosensitive polyurethane catheter specs",
      "Curved & straight double/triple lumen catheters",
      "Ultra-thin wall siliconized fistula needles",
      "Low recirculating flow dynamics data",
    ],
  },
  {
    id: "hemodialysis-catheter-flier",
    title: "Hemodialysis Catheter Kit Technical Detailer",
    category: "Specialty Clinical Fliers",
    shelf: "clinical",
    shelfLabel: "Specialty Clinical Fliers",
    desc: "Engineering specifications and Seldinger guide for short-term and long-term hemodialysis access kits with primed lumen capacities.",
    file: "/catalogues/hemodialysis-catheter-kit-flier.pdf",
    format: "PDF",
    size: "23.1 MB",
    version: "Technical Detailer",
    badge: "Critical Care",
    pages: "8 Pages",
    audience: "Interventional Nephrologists & ICU Teams",
    topics: [
      "Flow rate vs. venous pressure charts",
      "Kink-resistant guidewire & introducer needle specs",
      "Dilators, scalpel & heparin cap inclusions",
      "Sterile peel-open tray packaging details",
    ],
  },
  {
    id: "lifeguard-dial-flow",
    title: "LifeGuard Dial Flow Regulators Product Presentation",
    category: "Specialty Clinical Fliers",
    shelf: "clinical",
    shelfLabel: "Specialty Clinical Fliers",
    desc: "Comprehensive monograph covering precision micro-dial administration sets offering consistent flow delivery from 5 to 250 ml/hr.",
    file: "/catalogues/lifeguard-dial-flow-regulators.pdf",
    format: "PDF",
    size: "8.6 MB",
    version: "Precision Series",
    badge: "Micro-Dial IV",
    pages: "12 Pages",
    audience: "Oncology, Pediatric & Anesthesia Specialists",
    topics: [
      "Micro-channel flow stabilization technology",
      "Dual graduation scale (ml/hr vs gravity)",
      "Pediatric fluid overload prevention data",
      "Compatibility with lipid and antibiotic infusions",
    ],
  },
  {
    id: "cvc-kit-details",
    title: "Central Venous Catheter (CVC) Kit Clinical Monograph",
    category: "Specialty Clinical Fliers",
    shelf: "clinical",
    shelfLabel: "Specialty Clinical Fliers",
    desc: "Single, double, and triple lumen central venous catheter kits designed for continuous CVP monitoring, high-volume infusion, and blood sampling.",
    file: "/catalogues/central-venous-catheter-kit-details.pdf",
    format: "PDF",
    size: "2.6 MB",
    version: "ICU Monograph",
    badge: "Cardiovascular",
    pages: "10 Pages",
    audience: "Critical Care, Anesthesiologists & Surgeons",
    topics: [
      "Radiopaque polyurethane tube construction",
      "Soft atraumatic tip geometry & graduation markings",
      "Color-coded suture wings & clamp locks",
      "Sterile procedural insertion kit contents",
    ],
  },
  {
    id: "nfc-drug-delivery",
    title: "Needle-Free Connectors (NFC) & Closed Drug Delivery Range",
    category: "Specialty Clinical Fliers",
    shelf: "clinical",
    shelfLabel: "Specialty Clinical Fliers",
    desc: "Closed vascular access systems, swabable valves, and extension lines engineered to eliminate sharps injuries and prevent bloodstream infections.",
    file: "/catalogues/catalogue-nfc-drug-delivery-range.pdf",
    format: "PDF",
    size: "3.5 MB",
    version: "Closed Systems",
    badge: "Infection Control",
    pages: "14 Pages",
    audience: "Infection Control Teams & Infusion Nurses",
    topics: [
      "Zero-reflux neutral displacement mechanisms",
      "Microbial barrier swab-test validation protocols",
      "Lipid-compatible and cytotoxic-safe housings",
      "High-pressure extension manifold sets",
    ],
  },

  // SHELF 3: Quality Certifications & Accreditations
  {
    id: "iso-13485-certificate",
    title: "ISO 13485:2016 Medical Devices Quality Management Certificate",
    category: "Certificates & Quality",
    shelf: "certificates",
    shelfLabel: "Quality & Accreditations",
    desc: "Official QMS certificate accredited for design, extrusion, molding, cleanroom assembly, and sterile packaging of single-use medical devices.",
    file: "/certificates/QSA 13485- MECCA INDUSTRIES-1.webp",
    format: "Certificate",
    size: "225 KB",
    version: "Active & Validated",
    badge: "ISO 13485:2016",
    pages: "Certificate",
    audience: "Global Audits, Quality Teams & Tenders",
    topics: [
      "Medical device QMS compliance scope",
      "Validated cleanroom environments (Class 10,000)",
      "Design controls, risk management & post-market surveillance",
      "Accreditation by international registrar",
    ],
  },
  {
    id: "iso-9001-certificate",
    title: "ISO 9001:2015 Quality Management System Accreditation",
    category: "Certificates & Quality",
    shelf: "certificates",
    shelfLabel: "Quality & Accreditations",
    desc: "Enterprise quality management certification assuring continuous process control and traceability across all manufacturing plants.",
    file: "/certificates/ISO 9001-2015-1.webp",
    format: "Certificate",
    size: "274 KB",
    version: "Active & Validated",
    badge: "ISO 9001:2015",
    pages: "Certificate",
    audience: "Supply Chain & Corporate Compliance",
    topics: [
      "Operational standard operating procedures (SOPs)",
      "Incoming raw material polymer inspection protocols",
      "Traceable customer feedback & corrective action systems",
      "Plant audit verification",
    ],
  },
  {
    id: "who-gmp-certificate",
    title: "WHO–GMP Certificate of Good Manufacturing Practices",
    category: "Certificates & Quality",
    shelf: "certificates",
    shelfLabel: "Quality & Accreditations",
    desc: "World Health Organization Good Manufacturing Practices validation issued by FDCA Gujarat for sterile medical disposable production.",
    file: "/certificates/GMP Certificate- 16-18.webp",
    format: "Certificate",
    size: "293 KB",
    version: "WHO Compliance",
    badge: "WHO-GMP",
    pages: "Certificate",
    audience: "Institutional Health Ministries & Export Tenders",
    topics: [
      "Validated air handling units (AHU) with HEPA filtration",
      "Microbiological & bioburden monitoring protocols",
      "Ethylene oxide sterilization parametric release",
      "Personnel hygiene and cleanroom gowning standards",
    ],
  },
  {
    id: "ce-mark-certificate",
    title: "European CE Mark Quality Assurance Notification",
    category: "Certificates & Quality",
    shelf: "certificates",
    shelfLabel: "Quality & Accreditations",
    desc: "Official European Conformity Assessment certification authorizing export distribution of sterile medical devices under European directives.",
    file: "/certificates/QSA Cert-MECCA INDUSTRIES-CE-1.webp",
    format: "Certificate",
    size: "258 KB",
    version: "EU Directive 93/42/EEC",
    badge: "CE Certified",
    pages: "Certificate",
    audience: "European Importers & International Distributors",
    topics: [
      "European Notified Body compliance assessment",
      "Essential requirements safety verification",
      "Technical documentation and CE labeling guidelines",
      "Export authorization for European Union member states",
    ],
  },
  {
    id: "cdsco-manufacturing-license",
    title: "CDSCO Form MD-9 State Manufacturing Licences",
    category: "Certificates & Quality",
    shelf: "certificates",
    shelfLabel: "Quality & Accreditations",
    desc: "Statutory licensing issued by the Central Licensing Authority for medical device manufacturing facilities at Kalol and Boranada (Jodhpur).",
    file: "/certificates/licence.webp",
    format: "Certificate",
    size: "23 KB",
    version: "MFG/MD/2019/000192",
    badge: "CDSCO Licensed",
    pages: "Official License",
    audience: "Statutory Bodies & Government Rate Contracts",
    topics: [
      "License numbers: MFG/MD/2019/000192 & MFG/MD/2022/000047",
      "Form MD-9 statutory medical device approval",
      "Authorized therapeutic product categories",
      "Central regulatory inspection compliance",
    ],
  },

  // SHELF 4: Mecca Labs Specialized Formulations
  {
    id: "mecca-labs-pharmaceutical",
    title: "Mecca Labs Pharmaceutical Formulations Catalogue",
    category: "Mecca Labs Collections",
    shelf: "mecca-labs",
    shelfLabel: "Mecca Labs Formulations",
    desc: "Complete portfolio of sterile pre-filled syringes, beta-lactam antibiotics, oral liquids, tablets, dry syrups, and IV infusions.",
    file: "/catalogues/pharmaceutical.pdf",
    format: "PDF",
    size: "1.9 MB",
    version: "2026 Edition",
    badge: "Pharmaceutical",
    pages: "24 Pages",
    audience: "Pharmacies, Hospital Consortia & Importers",
    topics: [
      "Injectable antibiotics & sterile pre-filled syringes",
      "Sustained-release tablets & dry syrups",
      "Cardiovascular, gastrointestinal & analgesic lines",
      "WHO-GMP cGMP batch release profiles",
    ],
  },
  {
    id: "mecca-labs-domestic-nutra",
    title: "Mecca Labs Domestic Nutraceutical & Wellness Catalogue",
    category: "Mecca Labs Collections",
    shelf: "mecca-labs",
    shelfLabel: "Mecca Labs Formulations",
    desc: "FSSAI-registered dietary supplements, multivitamins, omega-3 softgels, calcium minerals, and effervescent daily wellness formulations.",
    file: "/catalogues/domestic.pdf",
    format: "PDF",
    size: "1.8 MB",
    version: "FSSAI Registered",
    badge: "Domestic Nutra",
    pages: "20 Pages",
    audience: "Retail Distributors & Wellness Brands",
    topics: [
      "High-potency multivitamin & multimineral tablets",
      "Plant-based protein powders & immunity effervescents",
      "Joint health glucosamine & calcium complexes",
      "FSSAI compliant nutritional panel labeling",
    ],
  },
  {
    id: "mecca-labs-export-nutra",
    title: "Mecca Labs Global Export Grade Nutraceutical Catalogue",
    category: "Mecca Labs Collections",
    shelf: "mecca-labs",
    shelfLabel: "Mecca Labs Formulations",
    desc: "Export-grade botanical extracts, advanced herbal formulations, dietary capsules, and health syrups engineered for worldwide distribution.",
    file: "/catalogues/export.pdf",
    format: "PDF",
    size: "1.6 MB",
    version: "Export cGMP",
    badge: "Export Nutra",
    pages: "22 Pages",
    audience: "International Supplement Importers & Private Label",
    topics: [
      "International cGMP stability tested formulations",
      "Customized packaging for global market compliance",
      "Heavy metal, microbial & purity assay certificates",
      "Herbal extracts & antioxidant wellness lines",
    ],
  },
  {
    id: "mecca-labs-milk-range",
    title: "Mecca Labs Infant Milk Formula & Pediatric Nutrition Catalogue",
    category: "Mecca Labs Collections",
    shelf: "mecca-labs",
    shelfLabel: "Mecca Labs Formulations",
    desc: "Scientific infant nutrition formula stages 1 to 3, maternal wellness formulas, follow-on milk powders, and pediatric dietary cereals.",
    file: "/catalogues/milk.pdf",
    format: "PDF",
    size: "1.8 MB",
    version: "HACCP Certified",
    badge: "Infant & Dairy",
    pages: "16 Pages",
    audience: "Pediatricians, Hospital Nurseries & Importers",
    topics: [
      "DHA, ARA, prebiotics & micronutrient balancing",
      "Specialty lactose-free & hypoallergenic formulas",
      "HACCP certified clean dairy processing standards",
      "Maternal and lactating mothers nutritional support",
    ],
  },
  {
    id: "mecca-labs-cosmeceutical",
    title: "Mecca Labs Cosmeceutical & Aesthetic Dermatology Catalogue",
    category: "Mecca Labs Collections",
    shelf: "mecca-labs",
    shelfLabel: "Mecca Labs Formulations",
    desc: "Dermatologist-tested skincare, human intimate hygiene products, and La Splendra aesthetic beauty solutions backed by ISO 22716 GMP.",
    file: "/catalogues/cosmeceutical.pdf",
    format: "PDF",
    size: "1.9 MB",
    version: "ISO 22716 GMP",
    badge: "Cosmeceuticals",
    pages: "18 Pages",
    audience: "Dermatologists, Aesthetic Clinics & Retail Chains",
    topics: [
      "Therapeutic pH-balanced intimate hygiene washes",
      "Anti-aging peptides, hyaluronic acid & sunscreen creams",
      "Dermatologically validated non-irritant clinical assays",
      "Private label packaging for luxury aesthetic brands",
    ],
  },

  // SHELF 5: OEM & Corporate Whitepapers
  {
    id: "oem-services-guide",
    title: "OEM Contract Manufacturing & Loan-License Blueprint",
    category: "OEM & Corporate Guides",
    shelf: "oem",
    shelfLabel: "OEM & Corporate Guides",
    desc: "Detailed blueprint explaining turnkey medical device contract manufacturing, private labeling, custom mold tooling, and Cleanroom Class 10,000 capabilities.",
    file: "/oem-services",
    isLink: true,
    format: "Interactive Guide",
    size: "Web Guide",
    version: "2026 Partnership Guide",
    badge: "OEM Solutions",
    pages: "Interactive",
    audience: "OEM Partners, Medical Startups & Pharma Brands",
    topics: [
      "Feasibility, pilot sampling, mold tooling & mass production",
      "Class 10,000 cleanroom capacity & automated assembly",
      "Full regulatory transfer and loan license arrangements",
      "Custom polymer formulation and extrusion tolerances",
    ],
  },
  {
    id: "company-profile-overview",
    title: "Mecca Healthcare Corporate Governance & Manufacturing Tour",
    category: "OEM & Corporate Guides",
    shelf: "oem",
    shelfLabel: "OEM & Corporate Guides",
    desc: "Corporate documentary summarizing 48+ years legacy, founder ideals, active manufacturing facilities in Gujarat and Rajasthan, and worldwide export presence.",
    file: "/about-us/profile",
    isLink: true,
    format: "Web Guide",
    size: "Web Guide",
    version: "1977-2026 Overview",
    badge: "Company Profile",
    pages: "Interactive",
    audience: "Investors, Institutional Partners & Overseas Clients",
    topics: [
      "Pioneering medical disposable manufacturing since 1977",
      "Kalol Hub & Boranada Mega Plant technical infrastructure",
      "UK Subsidiary Acme UK Inc Limited and international trade",
      "Executive directorate and board governance overview",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* SHELF CATEGORIES                                                           */
/* -------------------------------------------------------------------------- */

const SHELVES = [
  { id: "all", label: "All Library Shelves", icon: Library },
  { id: "catalogues", label: "Medical Catalogues", icon: BookOpen },
  { id: "clinical", label: "Specialty Clinical Fliers", icon: FileText },
  { id: "certificates", label: "Quality Certifications", icon: Award },
  { id: "mecca-labs", label: "Mecca Labs Formulations", icon: Package },
  { id: "regulatory", label: "Regulatory & Statutory", icon: ShieldCheck },
  { id: "oem", label: "OEM & Corporate Guides", icon: Building2 },
];

const FORMAT_FILTERS = [
  { id: "all", label: "All Formats" },
  { id: "PDF", label: "PDF Downloads" },
  { id: "Certificate", label: "Accreditation Certificates" },
  { id: "Interactive Guide", label: "Online Interactive Guides" },
];

/* -------------------------------------------------------------------------- */
/* MAIN DOWNLOADS LIBRARY COMPONENT                                           */
/* -------------------------------------------------------------------------- */

export default function DownloadsLibrary() {
  const [selectedShelf, setSelectedShelf] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedDocModal, setSelectedDocModal] =
    useState<LibraryDocument | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [imageZoom, setImageZoom] = useState(1);

  // Filtered documents
  const filteredDocuments = useMemo(() => {
    return DOCUMENTS.filter((doc) => {
      // Shelf Filter
      if (selectedShelf !== "all" && doc.shelf !== selectedShelf) {
        return false;
      }

      // Format Filter
      if (selectedFormat !== "all" && doc.format !== selectedFormat) {
        return false;
      }

      // Search Filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.trim().toLowerCase();
        const matchesTitle = doc.title.toLowerCase().includes(query);
        const matchesDesc = doc.desc.toLowerCase().includes(query);
        const matchesBadge = doc.badge.toLowerCase().includes(query);
        const matchesCategory = doc.category.toLowerCase().includes(query);
        const matchesTopics = doc.topics.some((t) =>
          t.toLowerCase().includes(query)
        );

        return (
          matchesTitle ||
          matchesDesc ||
          matchesBadge ||
          matchesCategory ||
          matchesTopics
        );
      }

      return true;
    });
  }, [selectedShelf, selectedFormat, searchQuery]);

  return (
    <div className="font-body text-slate-800">
      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO HEADER                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-[#0F2740] pt-24 pb-20 lg:pt-32 lg:pb-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,30,45,0.25),transparent_60%)]" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-burgundy/15 blur-3xl pointer-events-none" />

        <div className="container-px relative z-10 max-w-5xl mx-auto text-center">
          <div className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur-md">
            <Library className="w-4 h-4 text-rose-300" />
            <span>Digital Medical Resource Archive</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Medical Document Library
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Direct access to official 2026 medical device catalogues, clinical monographs, ISO 13485 &amp; WHO-GMP certificates, CDSCO regulatory records, and Mecca Labs formulations.
          </p>

          {/* Library Key Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="block font-heading text-2xl sm:text-3xl font-black text-rose-300">
                {DOCUMENTS.length}+
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Verified Documents
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="block font-heading text-2xl sm:text-3xl font-black text-white">
                6
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Curated Shelves
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="block font-heading text-2xl sm:text-3xl font-black text-emerald-400">
                100%
              </span>
              <span className="text-xs text-slate-400 font-medium">
                CDSCO &amp; ISO QMS
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="block font-heading text-2xl sm:text-3xl font-black text-rose-300">
                Free
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Instant PDF Downloads
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. LIBRARY CONTROL COMMAND BAR & SHELVES (Anchor ID #resources)     */}
      {/* ------------------------------------------------------------------ */}
      <section id="resources" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-20">
        <div className="container-px max-w-7xl mx-auto">
          {/* Main Command Bar Box */}
          <div className="mb-10 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
            {/* Top Row: Live Search & View Mode Switcher */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search library by document title, product name, gauge, standard, or keyword..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-3.5 pl-11 pr-11 text-xs sm:text-sm text-navy placeholder-slate-400 transition-all focus:border-burgundy focus:bg-white focus:outline-hidden focus:ring-3 focus:ring-burgundy/10 font-medium"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-navy cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* View Switcher: Grid vs Table */}
              <div className="flex items-center gap-1 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 self-start md:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-navy text-white shadow-xs"
                      : "text-slate-600 hover:text-navy"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Library Shelves</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "table"
                      ? "bg-navy text-white shadow-xs"
                      : "text-slate-600 hover:text-navy"
                  }`}
                >
                  <List className="w-3.5 h-3.5" />
                  <span>Archive Ledger</span>
                </button>
              </div>
            </div>

            {/* Middle Row: Shelf Tabs */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <FolderOpen className="w-4 h-4 text-burgundy" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Select Library Shelf
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {SHELVES.map((shelf) => {
                  const Icon = shelf.icon;
                  const isActive = selectedShelf === shelf.id;
                  const count =
                    shelf.id === "all"
                      ? DOCUMENTS.length
                      : DOCUMENTS.filter((d) => d.shelf === shelf.id).length;

                  return (
                    <button
                      key={shelf.id}
                      type="button"
                      onClick={() => setSelectedShelf(shelf.id)}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? "bg-burgundy text-white shadow-sm"
                          : "bg-slate-50 border border-slate-200/80 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span>{shelf.label}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-slate-200/70 text-slate-600"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Row: Format Quick Chips */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Format:
                </span>
                {FORMAT_FILTERS.map((fmt) => (
                  <button
                    key={fmt.id}
                    type="button"
                    onClick={() => setSelectedFormat(fmt.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                      selectedFormat === fmt.id
                        ? "bg-navy text-white font-bold"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {fmt.label}
                  </button>
                ))}
              </div>

              {/* Reset Action */}
              {(selectedShelf !== "all" ||
                selectedFormat !== "all" ||
                searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedShelf("all");
                    setSelectedFormat("all");
                    setSearchQuery("");
                  }}
                  className="text-xs font-bold text-burgundy hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset Library Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Showing Count Status */}
          <div className="mb-6 flex items-center justify-between text-xs text-slate-500 font-medium px-2">
            <div>
              Showing <strong className="text-navy">{filteredDocuments.length}</strong> of{" "}
              {DOCUMENTS.length} library items
              {selectedShelf !== "all" && (
                <span> in <strong className="text-burgundy">{SHELVES.find((s) => s.id === selectedShelf)?.label}</strong></span>
              )}
            </div>
            {searchQuery && (
              <span className="text-slate-400">
                Filtered by: &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* VIEW MODE A: LIBRARY SHELVES (GRID VIEW)                          */}
          {/* ---------------------------------------------------------------- */}
          {viewMode === "grid" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDocuments.map((doc, idx) => (
                <div
                  key={doc.id}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-xl hover:border-burgundy/40 transition-all duration-300"
                >
                  {/* Spine Accent Decorator on Left Border */}
                  <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r bg-burgundy/20 group-hover:bg-burgundy transition-colors" />

                  <div>
                    {/* Top Badges & Meta */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-burgundy/10 text-burgundy text-[11px] font-bold uppercase tracking-wider">
                        {doc.badge}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-lg">
                        {doc.format}
                      </span>
                    </div>

                    {/* Document Title */}
                    <h3 className="font-heading text-lg font-bold text-navy group-hover:text-burgundy transition-colors leading-snug">
                      {doc.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                      {doc.desc}
                    </p>

                    {/* Topics Covered */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Included Topics &amp; Specs:
                      </span>
                      {doc.topics.slice(0, 3).map((topic, tIdx) => (
                        <div
                          key={tIdx}
                          className="flex items-start gap-2 text-xs text-slate-700 font-medium"
                        >
                          <Check className="w-3.5 h-3.5 text-burgundy shrink-0 mt-0.5" />
                          <span className="leading-tight">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Document Footer Bar */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4 font-medium">
                      <span>{doc.pages || doc.version}</span>
                      <span>{doc.size}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedDocModal(doc);
                          setIsFullscreen(false);
                          setImageZoom(1);
                        }}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-navy text-xs font-bold border border-slate-200 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-500" />
                        <span>{doc.format === "PDF" ? "View PDF" : "View Doc"}</span>
                      </button>

                      {doc.isLink ? (
                        <Link
                          href={doc.file}
                          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-burgundy hover:bg-burgundy-dark text-white text-xs font-bold transition-all shadow-xs"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <a
                          href={doc.file}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-burgundy hover:bg-burgundy-dark text-white text-xs font-bold transition-all shadow-xs"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ---------------------------------------------------------------- */}
          {/* VIEW MODE B: ARCHIVE LEDGER (TABLE VIEW)                          */}
          {/* ---------------------------------------------------------------- */}
          {viewMode === "table" && (
            <div className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider">
                      <th className="py-4 px-6">Document Title</th>
                      <th className="py-4 px-4">Library Shelf</th>
                      <th className="py-4 px-4">Version / Edition</th>
                      <th className="py-4 px-3">Format</th>
                      <th className="py-4 px-3">Size</th>
                      <th className="py-4 px-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredDocuments.map((doc) => (
                      <tr
                        key={doc.id}
                        className="hover:bg-slate-50/80 transition-colors group"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center shrink-0 mt-0.5">
                              <FileText className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="font-heading font-bold text-sm text-navy group-hover:text-burgundy transition-colors block">
                                {doc.title}
                              </span>
                              <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {doc.desc}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">
                            {doc.shelfLabel}
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap text-slate-600 font-medium">
                          {doc.version}
                        </td>
                        <td className="py-4 px-3 whitespace-nowrap">
                          <span className="font-mono text-[11px] font-bold text-navy bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                            {doc.format}
                          </span>
                        </td>
                        <td className="py-4 px-3 whitespace-nowrap text-slate-500 font-mono">
                          {doc.size}
                        </td>
                        <td className="py-4 px-6 text-right whitespace-nowrap">
                          <div className="inline-flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedDocModal(doc);
                                setIsFullscreen(false);
                                setImageZoom(1);
                              }}
                              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-navy font-bold text-xs cursor-pointer inline-flex items-center gap-1"
                            >
                              <Eye className="w-3 h-3 text-slate-500" />
                              <span>{doc.format === "PDF" ? "View PDF" : "View"}</span>
                            </button>
                            {doc.isLink ? (
                              <Link
                                href={doc.file}
                                className="px-3.5 py-1.5 rounded-lg bg-navy text-white hover:bg-slate-800 font-bold text-xs inline-flex items-center gap-1"
                              >
                                <span>Visit</span>
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                            ) : (
                              <a
                                href={doc.file}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-1.5 rounded-lg bg-burgundy text-white hover:bg-burgundy-dark font-bold text-xs inline-flex items-center gap-1 shadow-2xs"
                              >
                                <Download className="w-3 h-3" />
                                <span>Download</span>
                              </a>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Fallback Empty State */}
          {filteredDocuments.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 max-w-xl mx-auto">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-burgundy/10 text-burgundy flex items-center justify-center mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-navy">
                No Library Documents Found
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                We couldn&apos;t find any records matching &ldquo;{searchQuery}&rdquo;. Try resetting the filters or searching for terms like &ldquo;Catheter&rdquo;, &ldquo;ISO 13485&rdquo;, or &ldquo;Nephrology&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedShelf("all");
                  setSelectedFormat("all");
                  setSearchQuery("");
                }}
                className="mt-6 px-6 py-2.5 rounded-full bg-burgundy text-white font-bold text-xs hover:bg-burgundy-dark transition-all cursor-pointer shadow-sm"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* ---------------------------------------------------------------- */}
          {/* 3. REGULATORY DOSSIER & CUSTOM CoA REQUEST BANNER                 */}
          {/* ---------------------------------------------------------------- */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-[#0F2740] text-white p-8 sm:p-12 shadow-xl border border-slate-800 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Statutory &amp; Custom Documentation</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Require Custom Drug Master Files (DMF) or Batch CoA?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
                Our in-house Regulatory Affairs team supplies validated Certificate of Analysis (CoA), bioburden assay test results, CE technical files, and localized MOH dossier documentation for international tenders and institutional procurement.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-dark text-white text-xs font-bold transition-all shadow-md text-center"
              >
                <span>Request Custom Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="mailto:info@mhplindia.com?subject=Regulatory%20Dossier%20Request"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all text-center"
              >
                <span>Email Regulatory Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. FULL-SCREEN INTERACTIVE DOCUMENT & PDF VIEWER                   */}
      {/* ------------------------------------------------------------------ */}
      <AnimatePresence>
        {selectedDocModal && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center ${
              isFullscreen ? "p-0" : "p-2 sm:p-4 md:p-6"
            }`}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedDocModal(null);
                setIsFullscreen(false);
              }}
              className="fixed inset-0 bg-[#0F2740]/85 backdrop-blur-md"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.2 }}
              className={`relative z-10 flex flex-col bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden ${
                isFullscreen
                  ? "w-screen h-screen rounded-none"
                  : "w-full max-w-7xl h-[92vh] rounded-2xl sm:rounded-3xl"
              }`}
            >
              {/* Header Bar */}
              <div className="shrink-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 text-white">
                {/* Left: Document Info */}
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-rose-300 bg-rose-950/80 px-2.5 py-1 rounded-md border border-rose-800/60">
                    {selectedDocModal.badge}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-sm sm:text-base font-bold text-white truncate max-w-xs sm:max-w-md md:max-w-xl">
                      {selectedDocModal.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="font-mono">{selectedDocModal.format}</span>
                      <span>•</span>
                      <span>{selectedDocModal.size}</span>
                      {selectedDocModal.pages && (
                        <>
                          <span>•</span>
                          <span>{selectedDocModal.pages}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Controls & Actions */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  {/* Image Zoom Controls (if certificate) */}
                  {selectedDocModal.format === "Certificate" && (
                    <div className="hidden sm:flex items-center gap-1 bg-slate-800/80 border border-slate-700/60 rounded-xl p-1 text-slate-300 mr-1">
                      <button
                        type="button"
                        onClick={() => setImageZoom((prev) => Math.max(0.5, prev - 0.25))}
                        title="Zoom Out"
                        className="p-1.5 rounded-lg hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
                      >
                        <ZoomOut className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[11px] font-mono px-1 min-w-[3rem] text-center">
                        {Math.round(imageZoom * 100)}%
                      </span>
                      <button
                        type="button"
                        onClick={() => setImageZoom((prev) => Math.min(3, prev + 0.25))}
                        title="Zoom In"
                        className="p-1.5 rounded-lg hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setImageZoom(1)}
                        title="Reset Zoom"
                        className="p-1.5 rounded-lg hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Toggle Specs / Sidebar */}
                  <button
                    type="button"
                    onClick={() => setShowSidebar((prev) => !prev)}
                    title={showSidebar ? "Hide Document Specs" : "Show Document Specs"}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                      showSidebar
                        ? "bg-slate-700 text-white border-slate-600"
                        : "bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-700/60"
                    }`}
                  >
                    <Info className="w-3.5 h-3.5 text-rose-400" />
                    <span className="hidden sm:inline">Dossier Specs</span>
                  </button>

                  {/* Open in New Tab */}
                  <a
                    href={selectedDocModal.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open In New Window"
                    className="p-2 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {/* Download Button */}
                  {!selectedDocModal.isLink && (
                    <a
                      href={selectedDocModal.file}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Direct Download"
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-burgundy hover:bg-burgundy-dark text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  )}

                  {/* Fullscreen Toggle */}
                  <button
                    type="button"
                    onClick={() => setIsFullscreen((prev) => !prev)}
                    title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
                    className="p-2 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {isFullscreen ? (
                      <Minimize2 className="w-4 h-4" />
                    ) : (
                      <Maximize2 className="w-4 h-4" />
                    )}
                  </button>

                  {/* Close Modal */}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDocModal(null);
                      setIsFullscreen(false);
                    }}
                    title="Close"
                    className="p-2 rounded-xl bg-slate-800/70 hover:bg-rose-900/40 hover:text-rose-300 border border-slate-700/60 text-slate-400 transition-colors cursor-pointer ml-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Body (Viewport + Collapsible Sidebar) */}
              <div className="flex-1 flex relative overflow-hidden bg-slate-950">
                {/* Viewport Area */}
                <div className="flex-1 relative flex items-center justify-center overflow-hidden bg-slate-950">
                  {/* Case 1: PDF */}
                  {selectedDocModal.format === "PDF" ||
                  selectedDocModal.file.toLowerCase().endsWith(".pdf") ? (
                    <iframe
                      src={`${selectedDocModal.file}#view=FitH&toolbar=1`}
                      className="w-full h-full border-0 bg-slate-950"
                      title={selectedDocModal.title}
                      allow="fullscreen"
                    />
                  ) : selectedDocModal.format === "Certificate" ||
                    selectedDocModal.file.match(/\.(webp|png|jpg|jpeg)$/i) ? (
                    /* Case 2: Certificate Image */
                    <div className="w-full h-full overflow-auto flex items-center justify-center p-4 sm:p-8 bg-slate-950/90">
                      {/* eslint-disable-next-js/no-img-element */}
                      <img
                        src={selectedDocModal.file}
                        alt={selectedDocModal.title}
                        style={{
                          transform: `scale(${imageZoom})`,
                          transformOrigin: "center center",
                          transition: "transform 0.15s ease-out",
                        }}
                        className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border border-slate-800"
                      />
                    </div>
                  ) : (
                    /* Case 3: Web Interactive Guide */
                    <div className="max-w-xl text-center p-8 text-white space-y-4">
                      <div className="w-16 h-16 rounded-3xl bg-burgundy/20 text-rose-400 mx-auto flex items-center justify-center border border-rose-500/20">
                        <BookOpen className="w-8 h-8" />
                      </div>
                      <h4 className="font-heading text-2xl font-bold text-white">
                        {selectedDocModal.title}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {selectedDocModal.desc}
                      </p>
                      <div className="pt-4 flex items-center justify-center gap-3">
                        <Link
                          href={selectedDocModal.file}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-burgundy hover:bg-burgundy-dark text-white text-xs font-bold transition-all shadow-md"
                        >
                          <span>Open Interactive Guide</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Collapsible Specs & Topics Sidebar */}
                <AnimatePresence>
                  {showSidebar && (
                    <motion.aside
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 360, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 border-l border-slate-800 bg-slate-900 text-slate-200 flex flex-col overflow-hidden z-10"
                    >
                      <div className="p-5 overflow-y-auto space-y-5 h-full">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <FileCheck className="w-4 h-4 text-rose-400" />
                            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                              Document Dossier
                            </h4>
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowSidebar(false)}
                            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Summary */}
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                            Executive Overview
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {selectedDocModal.desc}
                          </p>
                        </div>

                        {/* Metadata grid */}
                        <div className="space-y-2.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400 text-[11px]">Shelf Category:</span>
                            <span className="font-bold text-white text-[11px]">{selectedDocModal.shelfLabel}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400 text-[11px]">Revision / Year:</span>
                            <span className="font-bold text-white text-[11px] font-mono">{selectedDocModal.version}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400 text-[11px]">Format:</span>
                            <span className="font-bold text-white text-[11px] font-mono">{selectedDocModal.format}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400 text-[11px]">File Size:</span>
                            <span className="font-bold text-white text-[11px] font-mono">{selectedDocModal.size}</span>
                          </div>
                          {selectedDocModal.audience && (
                            <div className="flex justify-between items-center">
                              <span className="text-slate-400 text-[11px]">Target Audience:</span>
                              <span className="font-bold text-white text-[11px] truncate max-w-[150px]">{selectedDocModal.audience}</span>
                            </div>
                          )}
                        </div>

                        {/* Topics covered */}
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">
                            Validated Content &amp; Specs:
                          </span>
                          <div className="space-y-2">
                            {selectedDocModal.topics.map((topic, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-xs text-slate-300 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/80"
                              >
                                <Check className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                                <span className="leading-tight">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="pt-4 border-t border-slate-800 space-y-2">
                          <a
                            href={selectedDocModal.file}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-burgundy hover:bg-burgundy-dark text-white text-xs font-bold transition-all shadow-md"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download Full Document</span>
                          </a>
                          <a
                            href={selectedDocModal.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-all"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Open In New Window</span>
                          </a>
                        </div>
                      </div>
                    </motion.aside>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
