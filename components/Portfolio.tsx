"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  type LucideIcon,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Download,
  Droplet,
  Eye,
  Factory,
  FileCheck,
  FileText,
  Filter,
  Globe,
  HeartPulse,
  Landmark,
  LayoutGrid,
  List,
  MapPin,
  PackageCheck,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Syringe,
  UserRound,
  Utensils,
  Waves,
  Wind,
  X,
  Plus,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import { useQuoteModal } from "@/context/QuoteContext";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Product {
  name: string;
  description: string;
  image: string;
  badge?: string;
}

interface ProductCategory {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  icon: LucideIcon;
  products: Product[];
}

interface Facility {
  name: string;
  location: string;
  address: string;
  license: string;
  image: string;
  cleanroom: string;
  highlights: string[];
}

interface OfficeCard {
  label: string;
  roleBadge: string;
  icon: LucideIcon;
  lines: string[];
  note?: string;
  region?: string;
}

interface WhyFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

// ---------------------------------------------------------------------------
// Data (Preserved 100% without modification)
// ---------------------------------------------------------------------------

const productCategories: ProductCategory[] = [
  {
    slug: "infusion-vascular-access",
    title: "Infusion & Vascular Access",
    shortDescription:
      "IV administration sets, cannulas, connectors, and flow-control accessories for safe vascular access.",
    image: "/Infusion/image1.png",
    icon: Syringe,
    products: [
      {
        name: "I.V. Infusion Sets",
        description:
          "Vented and non-vented sets with dial flow, in-line filters, auto prime air stop, micro drip, and blood transfusion variants for gravity vascular fluid delivery.",
        image: "/Infusion/image1.png",
        badge: "EO Sterile",
      },
      {
        name: "Intravenous Cannula",
        description:
          "Designed for the infusion of fluids, medications, or blood components, facilitating reliable peripheral vascular access.",
        image: "/Infusion/image6.png",
        badge: "ISO 13485",
      },
      {
        name: "Needle Free Connector",
        description:
          "Utilized for the closed delivery and aspiration of fluids directly from an IV catheter, preventing needle-stick injuries and contamination.",
        image: "/Infusion/image10.png",
        badge: "Closed System",
      },
      {
        name: "Extension Sets",
        description:
          "Sterile, single-use high-pressure and low-pressure kink-resistant lines for medication and fluid administration.",
        image: "/Infusion/image7.png",
        badge: "Kink Resistant",
      },
      {
        name: "Multiple Lumen Catheter",
        description:
          "Intended for central venous pressure (CVP) monitoring, blood sampling, and concurrent multi-solution IV delivery.",
        image: "/Infusion/image8.png",
        badge: "Multi-Lumen",
      },
      {
        name: "I.V. Flow Regulator",
        description:
          "Micro-dial administration device offering precision fluid regulation (5–250 ml/hr) and consistent flow rates.",
        image: "/Infusion/image5.png",
        badge: "Micro-Dial",
      },
      {
        name: "Manifolds",
        description:
          "Indicated for fluid flow directional control and multiple access ports during clinical administration and angiography.",
        image: "/Infusion/image9.png",
        badge: "High Pressure",
      },
      {
        name: "Three-Way Stopcock",
        description:
          "Accessory to perfusion sets indicated for fluid directional control, blood sampling, and pressure monitoring.",
        image: "/Infusion/image11.png",
        badge: "360° Rotation",
      },
      {
        name: "Y-Connector",
        description:
          "Used to connect to perfusion sets or catheters for the concurrent infusion of contrast media or medication.",
        image: "/Infusion/image12.png",
        badge: "Luer Lock",
      },
    ],
  },
  {
    slug: "anesthesia-respiratory-care",
    title: "Anesthesia & Respiratory Care",
    shortDescription:
      "Airway and ventilation devices supporting anesthesia, suction, and oxygen therapy.",
    image: "/Anesthesia/image1.png",
    icon: Wind,
    products: [
      {
        name: "Endotracheal Tube",
        description:
          "Cuffed and un-cuffed tracheal tube inserted to secure airway ventilation and oxygenation during general anesthesia.",
        image: "/Anesthesia/image1.png",
        badge: "High Volume Cuff",
      },
      {
        name: "Tracheostomy / Tracheal Tube",
        description:
          "Breathing tube inserted into a tracheotomy to obtain a secure closed circuit for mechanical ventilation.",
        image: "/Anesthesia/image2.png",
        badge: "Radiopaque Line",
      },
      {
        name: "Nasopharyngeal Catheter",
        description:
          "Passed through the nares to maintain an open airway passage in emergency and intensive care units.",
        image: "/Anesthesia/image3.png",
        badge: "Atraumatic Tip",
      },
      {
        name: "Tracheobronchial Suction Catheter",
        description:
          "Clears airways of mucus, pus, or aspirated materials to improve oxygenation and pulmonary ventilation.",
        image: "/Anesthesia/image4.png",
        badge: "Color Coded",
      },
      {
        name: "Suction Tip and Catheter",
        description:
          "Features a whistle tip and thumb control port for precise and controlled surgical suctioning.",
        image: "/Anesthesia/image5.png",
        badge: "Thumb Control",
      },
      {
        name: "Tonsil Suction Tube",
        description:
          "Yankauer suction instrument used specifically for throat and oral cavity fluid evacuation.",
        image: "/Anesthesia/image6.png",
        badge: "Rigid Suction",
      },
      {
        name: "Nasal Oxygen Catheter",
        description:
          "Twin-bore cannula delivering supplemental oxygen with soft prongs for maximum patient comfort.",
        image: "/Anesthesia/image7.png",
        badge: "Soft Prongs",
      },
      {
        name: "Heat and Moisture Exchange (HME) Filter",
        description:
          "Airway filtration and humidification device with bacterial/viral efficiency exceeding 99.99%.",
        image: "/Anesthesia/image8.png",
        badge: "99.99% Filter",
      },
    ],
  },
  {
    slug: "cardiovascular-interventional-surgery",
    title: "Cardiovascular & Interventional Surgery",
    shortDescription:
      "Catheters, cannulae, and monitoring devices for cardiac and vascular surgical procedures.",
    image: "/Cardiology/image1.png",
    icon: HeartPulse,
    products: [
      {
        name: "Angiographic Catheter",
        description:
          "Provides a smooth, torqueable pathway for delivering contrast media to selected arterial sites in the vascular system.",
        image: "/Cardiology/image1.png",
        badge: "High Flow",
      },
      {
        name: "Angiographic Needle",
        description:
          "Features an ergonomic hub design and orientation marker for clean, single-stick vascular access.",
        image: "/Cardiology/image2.png",
        badge: "Bevel Indicator",
      },
      {
        name: "Arterial Cannula",
        description:
          "Inserted into an artery during major surgical operations for continuous beat-to-beat arterial pressure monitoring.",
        image: "/Cardiology/image3.png",
        badge: "Arterial Line",
      },
      {
        name: "Coronary Artery Cannula",
        description:
          "Engineered for selective perfusion techniques in coronary artery bypass grafting (CABG).",
        image: "/Cardiology/image1.png",
        badge: "Surgical Line",
      },
      {
        name: "Venous Cannula",
        description:
          "Single and dual-stage cannula used for venous drainage and blood return during cardiopulmonary bypass.",
        image: "/Cardiology/image2.png",
        badge: "Wire Reinforced",
      },
      {
        name: "Heart-Lung Bypass Unit Tube",
        description:
          "Medical-grade clear perfusion tubing set placed in cardiac circuits to circulate blood via the heart-lung machine.",
        image: "/Cardiology/image3.png",
        badge: "Extracorporeal",
      },
      {
        name: "Intramuscular Pressure Monitoring Catheter",
        description:
          "Transducer-tipped catheter system for accurate, continuous intramuscular compartment pressure diagnostics.",
        image: "/Cardiology/image1.png",
        badge: "Pressure Sensor",
      },
    ],
  },
  {
    slug: "urology-drainage",
    title: "Urology & Drainage",
    shortDescription:
      "Catheters and drainage systems for reliable, closed urinary management.",
    image: "/Urology/image1.png",
    icon: Droplet,
    products: [
      {
        name: "Urethral Catheter",
        description:
          "Facilitates direct, sterile drainage of the urinary bladder into an attached collection bag.",
        image: "/Urology/image1.png",
        badge: "Soft PVC",
      },
      {
        name: "Nelaton Catheter",
        description:
          "Smooth, medical-grade PVC catheter with lateral eyes for short-term bladder drainage and catheterization.",
        image: "/Urology/image2.png",
        badge: "Atraumatic Eyes",
      },
      {
        name: "Foley Catheter",
        description:
          "2-Way and 3-Way retention catheter with symmetrical balloon for continuous, leak-free urinary drainage.",
        image: "/Urology/image3.png",
        badge: "Silicone Coated",
      },
      {
        name: "Urethrographic Male Catheter",
        description:
          "Specialized catheter designed for diagnostic retrograde urethrography and access in male urological procedures.",
        image: "/Urology/image4.png",
        badge: "Diagnostic Tool",
      },
      {
        name: "Urinary Drainage Unit / Urine Collection Bag",
        description:
          "Closed drainage system including Uromeasure (with measured volume meter) and anti-reflux valve chamber.",
        image: "/Urology/image5.png",
        badge: "Measured Meter",
      },
    ],
  },
  {
    slug: "dialysis-therapy",
    title: "Dialysis Therapy",
    shortDescription:
      "Access devices for haemodialysis and peritoneal dialysis therapy.",
    image: "/Nephrology/Short-Term-Dialysis-Catheter-Kit.png",
    icon: Waves,
    products: [
      {
        name: "Haemodialysis Catheter",
        description:
          "High-flow polyurethane double/triple lumen catheter for hemodialysis access with low recirculation rate.",
        image: "/Nephrology/Short-Term-Dialysis-Catheter-Kit.png",
        badge: "High Flow",
      },
      {
        name: "Peritoneal Dialysis Catheter",
        description:
          "Silicone catheter allowing dialysis fluid to enter the peritoneal cavity, dwell, and drain effectively.",
        image: "/Nephrology/Single-Lumen-Femoral-Catheter.png",
        badge: "Silicone Cuff",
      },
      {
        name: "Single Needle Haemodialysis Catheter / Blood Lines",
        description:
          "Specialized blood tubing set for single-needle hemodialysis therapy and extracorporeal circuits.",
        image: "/Nephrology/Double-Lumen-Curved-Catheter.png",
        badge: "Curved Lumen",
      },
      {
        name: "Fistula Needle",
        description:
          "Ultra-thin wall siliconized needle with back-eye and fixed/rotating wings connecting bloodlines securely.",
        image: "/Nephrology/A.V-Fistula-Needle.png",
        badge: "AV Access",
      },
    ],
  },
  {
    slug: "gastroenterology-enteral-feeding",
    title: "Gastroenterology & Enteral Feeding",
    shortDescription:
      "Feeding and gastric tubes supporting nutrition and GI drainage.",
    image: "/Gastroenterology/image1.png",
    icon: Utensils,
    products: [
      {
        name: "Feeding Tube",
        description:
          "Enteral tube providing precise nutritional and medication delivery into the stomach or small intestine.",
        image: "/Gastroenterology/image1.png",
        badge: "Graduated Scale",
      },
      {
        name: "Levine Tube",
        description:
          "Smooth four-eye tube used for the aspiration of gastric contents, diagnostic lavage, and enteral feeding.",
        image: "/Gastroenterology/image2.png",
        badge: "4-Eye Lateral",
      },
      {
        name: "Nasogastric Tube / Ryles Tube",
        description:
          "Non-toxic radiopaque line tube with lead balls for gastric decompression, lavage, and enteral nutritional delivery.",
        image: "/Gastroenterology/image3.png",
        badge: "Radio-Opaque",
      },
    ],
  },
  {
    slug: "general-surgery-neurosurgery",
    title: "General Surgery & Neurosurgery",
    shortDescription:
      "Drainage, suction, and access devices for general and neurosurgical procedures.",
    image: "/Surgical/image1.png",
    icon: Brain,
    products: [
      {
        name: "Closed Wound Drainage Tube / System",
        description:
          "Intended for post-operative evacuation of blood and serous fluid under gentle, continuous negative pressure.",
        image: "/Surgical/image1.png",
        badge: "Vacuum Bellow",
      },
      {
        name: "Chest Drainage Catheter (With/Without Trocar)",
        description:
          "Facilitates rapid, trauma-free removal of air and fluid from the pleural space with depth markings.",
        image: "/Surgical/image2.png",
        badge: "With Trocar",
      },
      {
        name: "Spinal Needles",
        description:
          "Precision-engineered Quincke and Pencil-point needles for spinal anesthesia, lumbar puncture, and CSF sampling.",
        image: "/Surgical/image3.png",
        badge: "Quincke Bevel",
      },
      {
        name: "Ventricular Cannula",
        description:
          "Graduated blunt-tip cannula designed for safe entry into brain ventricles during neurosurgical interventions.",
        image: "/Surgical/image4.png",
        badge: "Neurosurgical",
      },
    ],
  },
];

const DIVISION_META: Record<
  string,
  { color: string; bg: string; border: string }
> = {
  "infusion-vascular-access": {
    color: "#2563EB",
    bg: "bg-blue-50/80",
    border: "border-blue-200/80",
  },
  "anesthesia-respiratory-care": {
    color: "#DC2626",
    bg: "bg-red-50/80",
    border: "border-red-200/80",
  },
  "cardiovascular-interventional-surgery": {
    color: "#E11D48",
    bg: "bg-rose-50/80",
    border: "border-rose-200/80",
  },
  "urology-drainage": {
    color: "#D97706",
    bg: "bg-amber-50/80",
    border: "border-amber-200/80",
  },
  "dialysis-therapy": {
    color: "#0284C7",
    bg: "bg-sky-50/80",
    border: "border-sky-200/80",
  },
  "gastroenterology-enteral-feeding": {
    color: "#7C3AED",
    bg: "bg-purple-50/80",
    border: "border-purple-200/80",
  },
  "general-surgery-neurosurgery": {
    color: "#059669",
    bg: "bg-emerald-50/80",
    border: "border-emerald-200/80",
  },
};

const QUICK_FILTERS = [
  { id: "all", label: "All Standards" },
  { id: "sterile", label: "EO Sterile", match: "sterile" },
  { id: "iso", label: "ISO 13485", match: "iso" },
  { id: "closed", label: "Closed System", match: "closed" },
  { id: "flow", label: "High Flow", match: "flow" },
];

const facilities: Facility[] = [
  {
    name: "Facility 1 — Kalol Hub",
    location: "Kalol, Gandhinagar, Gujarat",
    address: "99, G.I.D.C, Kalol (N.G.), Gandhinagar, Gujarat, India – 382725",
    license: "MFG/MD/2019/000192",
    image: "/kalol.png",
    cleanroom: "Class 10,000 / ISO Class 7 Cleanroom",
    highlights: [
      "Dedicated Catheter & Infusion Extrusion Lines",
      "Automated Assembly & EO Gas Sterilization",
      "In-House Microbiological & Chemical Testing Lab",
      "CDSCO Form MD-9 Validated Manufacturing",
    ],
  },
  {
    name: "Facility 2 — Boranada Mega Plant",
    location: "Boranada, Jodhpur, Rajasthan",
    address: "F-252, III Phase, Boranada, Jodhpur, Rajasthan, India – 342012",
    license: "MFG/MD/2022/000047",
    image: "/jodhpur.png",
    cleanroom: "Class 100,000 / ISO Class 8 Cleanroom",
    highlights: [
      "High-Volume Medical Polymer Processing",
      "Precision Mold Tooling & Assembly Units",
      "Comprehensive In-Line Quality Assurance",
      "Scalable Global Export & Bulk Supply Hub",
    ],
  },
];

const offices: OfficeCard[] = [
  {
    label: "Registered Office",
    roleBadge: "Statutory & Compliance",
    icon: Landmark,
    lines: [
      "408, Spectrum, Opp. Relief Cinema,",
      "Near G.P.O. Salapas Road, Ahmedabad,",
      "Gujarat, India – 380001",
    ],
    note: "Official corporate registry and statutory documentation headquarters.",
    region: "Gujarat, India",
  },
  {
    label: "Corporate Head Office",
    roleBadge: "Executive & Operations HQ",
    icon: Building2,
    lines: [
      "B-605, Ratnakar Nine Square,",
      "Opposite ITC Narmada, Vastrapur,",
      "Ahmedabad, Gujarat, India – 380015",
    ],
    note: "Central command for global operations, sales, quality systems, and supply chain.",
    region: "Gujarat, India",
  },
  {
    label: "UK Subsidiary",
    roleBadge: "UK & International Gateway",
    icon: Globe,
    lines: [
      "Acme UK Inc Limited",
      "56 Guildford Street, Chertsey,",
      "England, KT16 9BE",
    ],
    note: "Direct bridge for European distribution, regulatory representation, and global trade.",
    region: "United Kingdom",
  },
  {
    label: "Managing Director",
    roleBadge: "Executive Leadership",
    icon: UserRound,
    lines: [
      "Mr. Rohit Sharma",
      "Founder & Director, Acme UK Inc Limited",
      "Managing Director, Mecca Healthcare Pvt Ltd",
    ],
    note: "Steering clinical innovation, global compliance standards, and strategic growth.",
    region: "Executive Directorate",
  },
];

const whyFeatures: WhyFeature[] = [
  {
    title: "Global Manufacturing",
    description:
      "Two CDSCO-licensed facilities in Gujarat and Rajasthan, with global operations coordinated through UK subsidiary Acme UK Inc Limited.",
    icon: Factory,
  },
  {
    title: "CDSCO Certified",
    description:
      "Both manufacturing units hold active CDSCO MDRA licenses, meeting India's regulatory standard for medical device manufacturing.",
    icon: ShieldCheck,
  },
  {
    title: "OEM & Private Label",
    description:
      "Contract and loan-license manufacturing experience, producing devices for healthcare partners under their own labels.",
    icon: PackageCheck,
  },
  {
    title: "Quality Assurance",
    description:
      "ISO 13485:2016 and WHO GMP compliant manufacturing, with CE marking on exportable product lines across Mecca's facilities.",
    icon: ShieldCheck,
  },
];

const totalProductsCount = productCategories.reduce(
  (acc, c) => acc + c.products.length,
  0
);

const stats: Stat[] = [
  {
    icon: LayoutGrid,
    value: `${productCategories.length}`,
    label: "Therapeutic Divisions",
  },
  {
    icon: Factory,
    value: `${facilities.length}`,
    label: "Manufacturing Facilities",
  },
  {
    icon: ShieldCheck,
    value: "CDSCO",
    label: "Certified Cleanrooms",
  },
  {
    icon: Globe,
    value: "UK",
    label: "Global Operations",
  },
];

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function ProductPortfolio() {
  const router = useRouter();
  const { openQuoteModal, addToQuote, toggleQuoteItem, isItemInQuote } = useQuoteModal();
  const [selectedDivision, setSelectedDivision] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStandard, setSelectedStandard] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const pdfUrl = "/catalogues/MECCA HEALTHCARE PVT LTD Product List 2026.pdf";

  const handleQuote = (name?: string) => {
    if (name) addToQuote(name);
    openQuoteModal(name);
  };

  // Flattened list of all products with their division context
  const allFlattenedProducts = useMemo(() => {
    return productCategories.flatMap((cat) =>
      cat.products.map((prod) => ({
        ...prod,
        divisionSlug: cat.slug,
        divisionTitle: cat.title,
        divisionIcon: cat.icon,
      }))
    );
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return allFlattenedProducts.filter((item) => {
      const matchesDivision =
        selectedDivision === "all" || item.divisionSlug === selectedDivision;

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.divisionTitle.toLowerCase().includes(q) ||
        (item.badge && item.badge.toLowerCase().includes(q));

      const matchesStandard =
        selectedStandard === "all" ||
        (item.badge && item.badge.toLowerCase().includes(selectedStandard)) ||
        item.description.toLowerCase().includes(selectedStandard);

      return matchesDivision && matchesSearch && matchesStandard;
    });
  }, [allFlattenedProducts, selectedDivision, searchQuery, selectedStandard]);

  // Grouped divisions for Sectioned View (when in "all" mode with no active search)
  const groupedSections = useMemo(() => {
    return productCategories
      .map((cat) => {
        const items = cat.products.filter((prod) => {
          const matchesStandard =
            selectedStandard === "all" ||
            (prod.badge && prod.badge.toLowerCase().includes(selectedStandard)) ||
            prod.description.toLowerCase().includes(selectedStandard);
          return matchesStandard;
        });

        return {
          category: cat,
          items: items.map((prod) => ({
            ...prod,
            divisionSlug: cat.slug,
            divisionTitle: cat.title,
            divisionIcon: cat.icon,
          })),
        };
      })
      .filter((section) => section.items.length > 0);
  }, [selectedStandard]);

  const currentDivisionMeta = productCategories.find((c) => c.slug === selectedDivision);

  // Render a product card matching ProductsGrid styling
  const renderProductCard = (
    product: Product & { divisionTitle: string; divisionSlug: string }
  ) => {
    return (
      <div
        key={product.name}
        className="relative flex flex-col justify-between overflow-hidden transition-all bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-[0_8px_30px_rgba(13,34,64,0.05)] hover:shadow-[0_20px_50px_rgba(13,34,64,0.12)] hover:-translate-y-1 group"
      >
        <div>
          {/* Device Image Box with Zoom Effect */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/70 aspect-[4/3] mb-4 p-4 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => {
                e.currentTarget.src = "/products/hero_medical_products.png";
              }}
              className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
            />

            {/* Clinical Badge */}
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200/80 text-[10px] font-bold text-burgundy shadow-xs">
              {product.badge || "EO Sterile"}
            </div>
          </div>

          {/* Division Label */}
          <div className="text-[11px] font-bold text-burgundy uppercase tracking-wider mb-1">
            {product.divisionTitle}
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-navy text-base leading-snug mb-2 group-hover:text-burgundy transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-slate-500 text-xs line-clamp-3 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        {/* Card Bottom CTA Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
          {/* Multi-Product RFQ Toggle Button */}
          <button
            type="button"
            onClick={() => toggleQuoteItem(product.name)}
            className={`flex-1 py-2.5 px-3 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              isItemInQuote(product.name)
                ? "bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
            }`}
            title={
              isItemInQuote(product.name)
                ? "Remove from quote list"
                : "Add to quote list"
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
                <span>Add to RFQ</span>
              </>
            )}
          </button>

          {/* Direct Instant Quote Button */}
          <button
            type="button"
            onClick={() => handleQuote(product.name)}
            className="py-2.5 px-4 rounded-full bg-burgundy text-white font-semibold text-xs hover:bg-burgundy-dark transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Quote</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800">
      <UtilityBar />
      <Header />

      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO SECTION (Polished Modern Aesthetics)                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-[#0F2740] py-20 lg:py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,30,45,0.22),transparent_50%)]" />
        <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-[#8B1E2D]/15 blur-3xl pointer-events-none" />

        <div className="container-px relative z-10">
          <div className="mb-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-navy cursor-pointer backdrop-blur-md"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back</span>
            </button>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-300 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-rose-300" />
                Medical Device Portfolio
              </span>

              <h1 className="font-heading text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-white leading-[1.1]">
                Global Manufacturing &amp; Product Portfolio
              </h1>

              <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Mecca Healthcare Pvt. Ltd. designs and manufactures sterile single-use medical devices across seven therapeutic categories, operating from two CDSCO-licensed cleanroom facilities with UK global distribution.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#catalogue-2026"
                  className="inline-flex items-center gap-2 rounded-full bg-burgundy px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-burgundy-dark shadow-md"
                >
                  <FileText className="h-4 w-4" />
                  <span>Product List 2026 (PDF)</span>
                </a>

                <a
                  href="#catalog"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-white hover:text-navy backdrop-blur-md"
                >
                  <span>Explore Divisions</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={() => handleQuote()}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-white hover:text-navy backdrop-blur-md"
                >
                  <span>Request Quote</span>
                </button>
              </div>
            </div>

            {/* Right Stat Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md shadow-lg"
                >
                  <div className="font-heading text-2xl sm:text-3xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs text-slate-300 font-medium leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. WHY CHOOSE MECCA (Built for Hospitals, Distributors & OEM)      */}
      {/* ------------------------------------------------------------------ */}
      <section id="why-choose-us" className="py-16 lg:py-20 bg-white border-b border-slate-200/90 relative overflow-hidden">
        <div className="container-px">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-burgundy/15 bg-[#F8EDEF] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-burgundy mb-3">
              <ShieldCheck className="w-4 h-4 text-burgundy" />
              <span>Why Choose Mecca</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-black text-navy leading-tight">
              Built for Hospitals, Distributors &amp; OEM Partners
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Engineered with validated cleanroom protocols, comprehensive statutory licenses, and international regulatory accreditations to power clinical trust worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="group relative rounded-3xl border border-slate-200/90 bg-[#F8FAFC] hover:bg-white p-7 shadow-xs hover:shadow-[0_20px_50px_rgba(15,34,64,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-burgundy text-white shadow-md shadow-burgundy/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-navy group-hover:text-burgundy transition-colors mb-2.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-burgundy">
                    <span className="uppercase tracking-wider">Clinical Standard</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. OFFICIAL 2026 PDF RESOURCE CARD                                 */}
      {/* ------------------------------------------------------------------ */}
      <section id="catalogue-2026" className="py-12 lg:py-16 scroll-mt-24 bg-white border-b border-slate-200">
        <div className="container-px">
          <div className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 md:p-10 shadow-[0_10px_35px_rgba(13,34,64,0.04)]">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              
              {/* Left Document Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-burgundy/10 px-3.5 py-1 text-xs font-bold text-burgundy">
                    <FileCheck className="h-3.5 w-3.5" />
                    Official 2026 Publication
                  </span>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                    CDSCO Licensed &bull; ISO 13485:2016
                  </span>
                </div>

                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-black text-navy">
                    MECCA HEALTHCARE PVT LTD Product List 2026.pdf
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-3xl">
                    Complete regulatory catalogue containing technical specifications for 54+ sterile medical devices spanning Infusion, Anesthesia, Cardiology, Urology, Dialysis, Gastroenterology, and Surgery.
                  </p>
                </div>

                {/* Bullet Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {[
                    "IV Sets, Burette Sets & Flow Regulators",
                    "Anesthesia, Endotracheal & Suction Lines",
                    "Cardiovascular Catheters & Bypass Lines",
                    "Urology, Foley & Closed Drainage Sets",
                    "Dialysis Catheters & Fistula Needles",
                    "Gastroenterology & Enteral Feeding Tubes",
                    "General Surgery & Neuro Drainage Cannulae",
                    "WHO-GMP Cleanroom Class 10,000 Specs",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="h-3.5 w-3.5 text-burgundy shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Action Block */}
              <div className="lg:col-span-4 flex flex-col justify-center gap-3 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs text-slate-500">
                  <span className="font-semibold text-navy">Format: PDF Document</span>
                  <span>70 KB</span>
                </div>

                <a
                  href={pdfUrl}
                  download="MECCA HEALTHCARE PVT LTD Product List 2026.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-burgundy px-5 py-3 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-burgundy-dark text-center shadow-xs"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-xs sm:text-sm font-semibold text-navy transition-colors hover:bg-slate-100 text-center"
                >
                  <Eye className="h-4 w-4 text-burgundy" />
                  <span>View in Browser</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleQuote("Complete Product Portfolio 2026")}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <span>Request Full Price Spec</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. CATALOG EXPLORER (Modeled Exactly After Products Page)          */}
      {/* ------------------------------------------------------------------ */}
      <section id="catalog" className="py-12 lg:py-20 scroll-mt-24 bg-[#F8FAFC]">
        <div className="container-px">
          {/* TOP COMMAND BAR */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_35px_rgba(13,34,64,0.06)] p-4 sm:p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Title & Category Breadcrumb */}
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-burgundy uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4 text-burgundy" />
                  <span>{totalProductsCount} Sterile Clinical Devices</span>
                </div>
                <h2 className="font-heading font-black text-navy text-2xl sm:text-3xl tracking-tight flex items-center gap-2">
                  <span>{currentDivisionMeta?.title || "Portfolio Catalog"}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-burgundy/10 text-burgundy border border-burgundy/20">
                    {filteredProducts.length} Devices
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
                    placeholder="Search devices, catheters, sets..."
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
                  <span>Divisions</span>
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

            {/* PRIMARY DIVISION FILTER TABS (Like Products Page) */}
            <div className="pt-4 mt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline-flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" />
                  Division:
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDivision("all");
                    setSelectedStandard("all");
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    selectedDivision === "all"
                      ? "bg-burgundy text-white shadow-sm ring-2 ring-burgundy/20"
                      : "bg-slate-100/90 text-navy hover:bg-slate-200/90 hover:text-burgundy"
                  }`}
                >
                  <LayoutGrid className={`w-3.5 h-3.5 ${selectedDivision === "all" ? "text-white" : "text-slate-500"}`} />
                  <span>All Divisions</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      selectedDivision === "all"
                        ? "bg-white/25 text-white"
                        : "bg-white text-slate-600 border border-slate-200/60"
                    }`}
                  >
                    {totalProductsCount}
                  </span>
                </button>

                {productCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedDivision === cat.slug;

                  return (
                    <button
                      key={cat.slug}
                      type="button"
                      onClick={() => {
                        setSelectedDivision(cat.slug);
                        setSelectedStandard("all");
                      }}
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                        isSelected
                          ? "bg-burgundy text-white shadow-sm ring-2 ring-burgundy/20"
                          : "bg-slate-100/90 text-navy hover:bg-slate-200/90 hover:text-burgundy"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-slate-500"}`} />
                      <span>{cat.title}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                          isSelected
                            ? "bg-white/25 text-white"
                            : "bg-white text-slate-600 border border-slate-200/60"
                        }`}
                      >
                        {cat.products.length}
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
            {/* LEFT SIDEBAR: STICKY DIVISION NAVIGATOR */}
            <aside className="lg:col-span-3 hidden lg:block sticky top-28 space-y-6">
              {/* Category Navigator Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_35px_rgba(13,34,64,0.06)] p-5">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Therapeutic Divisions
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {productCategories.length} Divisions
                  </span>
                </div>

                <div className="space-y-1">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDivision("all");
                      setSelectedStandard("all");
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all duration-150 cursor-pointer group ${
                      selectedDivision === "all"
                        ? "bg-burgundy text-white font-bold shadow-[0_6px_20px_rgba(139,30,45,0.25)]"
                        : "hover:bg-slate-50 text-navy"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          selectedDivision === "all"
                            ? "bg-white/20 text-white"
                            : "bg-slate-100 text-slate-600 group-hover:bg-burgundy/10 group-hover:text-burgundy"
                        }`}
                      >
                        <LayoutGrid className="w-4 h-4" />
                      </div>
                      <span className="text-xs truncate">All Divisions</span>
                    </div>

                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ml-2 shrink-0 ${
                        selectedDivision === "all"
                          ? "bg-white/25 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                      }`}
                    >
                      {totalProductsCount}
                    </span>
                  </button>

                  {productCategories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = selectedDivision === cat.slug;

                    return (
                      <button
                        key={cat.slug}
                        type="button"
                        onClick={() => {
                          setSelectedDivision(cat.slug);
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
                          <span className="text-xs truncate">{cat.title}</span>
                        </div>

                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-bold ml-2 shrink-0 ${
                            isActive
                              ? "bg-white/25 text-white"
                              : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                          }`}
                        >
                          {cat.products.length}
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
                    Cleanroom OEM
                  </div>
                  <h4 className="font-heading font-bold text-sm leading-snug mb-1.5">
                    Need Custom Specs or Loan Licensing?
                  </h4>
                  <p className="text-white/70 text-xs leading-relaxed mb-4">
                    Two CDSCO licensed manufacturing units ready for OEM contract production and sterile export packaging.
                  </p>
                  <button
                    type="button"
                    onClick={() => handleQuote("OEM Contract Inquiry")}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-burgundy-gradient text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Request Custom RFQ</span>
                  </button>
                </div>
              </div>

              {/* Download Official Product Catalog PDF */}
              <a
                href={pdfUrl}
                download="MECCA HEALTHCARE PVT LTD Product List 2026.pdf"
                className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-burgundy hover:shadow-soft transition-all text-navy group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold group-hover:text-burgundy transition-colors">
                      Product List 2026
                    </div>
                    <div className="text-[10px] text-slate-400">PDF Document (70 KB)</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </aside>

            {/* MOBILE DIVISION ACCORDION / DRAWER MODAL */}
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
                      <span className="text-sm font-bold text-navy">Select Division</span>
                      <button
                        onClick={() => setMobileFilterOpen(false)}
                        className="p-1 rounded-full text-slate-400 hover:text-navy"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedDivision("all");
                          setMobileFilterOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-left ${
                          selectedDivision === "all"
                            ? "bg-burgundy text-white font-bold"
                            : "hover:bg-slate-50 text-navy"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <LayoutGrid className="w-4 h-4" />
                          <span className="text-xs">All Divisions</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/10">
                          {totalProductsCount}
                        </span>
                      </button>

                      {productCategories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = selectedDivision === cat.slug;

                        return (
                          <button
                            key={cat.slug}
                            type="button"
                            onClick={() => {
                              setSelectedDivision(cat.slug);
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
                              <span className="text-xs">{cat.title}</span>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/10">
                              {cat.products.length}
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
              {/* Active Filters Bar if search or division is active */}
              {(selectedDivision !== "all" || searchQuery || selectedStandard !== "all") && (
                <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-white rounded-2xl border border-slate-200/80 text-xs">
                  <span className="text-slate-400 font-semibold">Active filters:</span>
                  {selectedDivision !== "all" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy/10 text-burgundy font-semibold">
                      <span>{currentDivisionMeta?.title}</span>
                      <button
                        onClick={() => setSelectedDivision("all")}
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
                      setSelectedDivision("all");
                      setSearchQuery("");
                      setSelectedStandard("all");
                    }}
                    className="ml-auto text-xs text-slate-500 hover:text-burgundy font-semibold underline cursor-pointer"
                  >
                    Show All Divisions
                  </button>
                </div>
              )}

              {/* Single Selected Division Highlight Banner */}
              {selectedDivision !== "all" && currentDivisionMeta && (
                <div className="mb-8 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-burgundy/10 text-burgundy">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Selected Division
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {filteredProducts.length} certified items
                        </span>
                      </div>
                      <h3 className="font-heading font-black text-navy text-2xl">
                        {currentDivisionMeta.title}
                      </h3>
                      <p className="text-slate-500 text-xs mt-1 max-w-xl">
                        {currentDivisionMeta.shortDescription}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        type="button"
                        onClick={() => setSelectedDivision("all")}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-dark transition-colors cursor-pointer shadow-xs"
                      >
                        <span>View All Divisions</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ═════════════════════════════════════════════════════════════════
                  VIEW MODE: GRID
                 ═════════════════════════════════════════════════════════════════ */}
              {viewMode === "grid" && (
                <>
                  {/* CASE A: ALL DIVISIONS (Grouped by department sections like Products Page) */}
                  {selectedDivision === "all" && searchQuery === "" ? (
                    <div className="space-y-12">
                      {groupedSections.map(({ category: cat, items }) => {
                        const Icon = cat.icon;
                        const meta = DIVISION_META[cat.slug];

                        return (
                          <section
                            key={cat.slug}
                            id={`section-${cat.slug}`}
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
                                      {cat.title}
                                    </h3>
                                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                                      {items.length} Products
                                    </span>
                                  </div>
                                  <p className="text-slate-500 text-xs mt-0.5 line-clamp-1">
                                    {cat.shortDescription}
                                  </p>
                                </div>
                              </div>

                              {/* Section Header Action Buttons */}
                              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedDivision(cat.slug);
                                    setSelectedStandard("all");
                                  }}
                                  className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-burgundy hover:text-white text-navy text-xs font-semibold transition-colors cursor-pointer"
                                >
                                  <span>Filter Only {cat.title.split(" ")[0]}</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
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
                    /* CASE B: Filtered or Single Division View */
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                      <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => renderProductCard(product))}
                      </AnimatePresence>
                    </div>
                  )}
                </>
              )}

              {/* ═════════════════════════════════════════════════════════════════
                  VIEW MODE: LIST (Dense Clinical Table View)
                 ═════════════════════════════════════════════════════════════════ */}
              {viewMode === "list" && (
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(13,34,64,0.05)] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-navy border-collapse">
                      <thead>
                        <tr className="bg-slate-50/90 border-b border-slate-200/80 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          <th className="py-4 px-5">Product Name &amp; Code</th>
                          <th className="py-4 px-4">Therapeutic Division</th>
                          <th className="py-4 px-4">Clinical Description</th>
                          <th className="py-4 px-4">Compliance Badge</th>
                          <th className="py-4 px-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredProducts.map((product) => (
                          <tr
                            key={product.name}
                            className="hover:bg-[#F8FAFC] transition-colors group"
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
                                <div className="font-bold text-navy text-xs group-hover:text-burgundy transition-colors">
                                  {product.name}
                                </div>
                              </div>
                            </td>

                            {/* Division */}
                            <td className="py-3.5 px-4 whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                                {product.divisionTitle}
                              </span>
                            </td>

                            {/* Description */}
                            <td className="py-3.5 px-4 text-slate-600 max-w-xs">
                              <div className="line-clamp-2 text-[11px]">
                                {product.description}
                              </div>
                            </td>

                            {/* Badge */}
                            <td className="py-3.5 px-4 whitespace-nowrap">
                              <span className="px-2.5 py-1 rounded-full bg-burgundy/10 text-burgundy text-[11px] font-bold">
                                {product.badge || "EO Sterile"}
                              </span>
                            </td>

                            {/* Actions */}
                            <td className="py-3.5 px-5 text-right whitespace-nowrap">
                              <div className="inline-flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => toggleQuoteItem(product.name)}
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
                                  onClick={() => handleQuote(product.name)}
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
                    We couldn&apos;t find any device matching &ldquo;{searchQuery}&rdquo;. Try resetting your search or selecting a different division.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDivision("all");
                      setSearchQuery("");
                      setSelectedStandard("all");
                    }}
                    className="mt-5 px-6 py-2.5 rounded-full bg-burgundy text-white text-xs font-semibold shadow-card hover:bg-burgundy-dark transition-all cursor-pointer"
                  >
                    Reset Portfolio Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. MANUFACTURING FACILITIES (Preserved 100% & Elevated)            */}
      {/* ------------------------------------------------------------------ */}
      <section id="facilities" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
        <div className="container-px max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-4 py-1.5 rounded-full mb-3">
              <Factory className="w-3.5 h-3.5" />
              <span>Infrastructure</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight">
              CDSCO-Certified Manufacturing Units
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Purpose-built medical device production facilities adhering to rigorous WHO-GMP guidelines, validated cleanroom standards, and statutory Central Drugs Standard Control Organisation licensing.
            </p>
          </div>

          {/* Facility Cards Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {facilities.map((fac, idx) => (
              <div
                key={fac.name}
                className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-navy shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-burgundy" />
                      <span>{fac.location}</span>
                    </span>
                    <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-burgundy text-xs font-bold text-white shadow-sm">
                      Facility {idx + 1}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/95 text-white text-xs font-bold backdrop-blur-sm shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      WHO-GMP Compliant
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/90 text-white text-xs font-medium backdrop-blur-sm shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      {fac.cleanroom}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-burgundy">
                        {fac.location}
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-navy mt-1">
                        {fac.name}
                      </h3>
                    </div>

                    {/* Address Box */}
                    <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">
                        {fac.address}
                      </span>
                    </div>

                    {/* License Badge Box */}
                    <div className="p-3.5 rounded-2xl bg-burgundy/5 border border-burgundy/15 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <FileCheck className="w-4 h-4 text-burgundy shrink-0" />
                        <span className="text-xs font-semibold text-slate-600">License:</span>
                        <span className="text-xs font-bold font-mono text-burgundy tracking-wide bg-white px-2.5 py-0.5 rounded-md border border-burgundy/20">
                          {fac.license}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        CDSCO Validated
                      </span>
                    </div>

                    {/* Facility Capabilities */}
                    <div className="space-y-2 pt-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Facility Capabilities &amp; Standards
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {fac.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50/80 px-3 py-2 rounded-xl border border-slate-200/60"
                          >
                            <Check className="w-3.5 h-3.5 text-burgundy shrink-0" />
                            <span className="leading-tight">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Footer Action */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      ISO 13485:2016 Compliant
                    </span>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-burgundy hover:text-burgundy-dark transition-colors"
                    >
                      Schedule Facility Audit
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Infrastructure Guarantee Ribbon */}
          <div className="mt-12 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              <div className="sm:pr-6 pt-4 sm:pt-0">
                <p className="text-2xl font-black text-navy">CDSCO MD-9</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Dual Manufacturing Licences</p>
              </div>
              <div className="sm:px-6 pt-4 sm:pt-0">
                <p className="text-2xl font-black text-burgundy">WHO-GMP</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Certified Cleanroom Facilities</p>
              </div>
              <div className="sm:px-6 pt-4 sm:pt-0">
                <p className="text-2xl font-black text-navy">ISO 13485</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Medical Device Quality Management</p>
              </div>
              <div className="sm:pl-6 pt-4 sm:pt-0">
                <p className="text-2xl font-black text-emerald-600">100% Sterile</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Validated EO Gas Processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. CORPORATE & OPERATIONAL OFFICES (Preserved 100% & Elevated)      */}
      {/* ------------------------------------------------------------------ */}
      <section id="overview" className="py-20 md:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="container-px max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-4 py-1.5 rounded-full mb-3">
              <Globe className="w-3.5 h-3.5" />
              <span>Global Network</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight">
              Corporate &amp; Operational Offices
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Bridging domestic excellence with international markets through established registered offices, corporate headquarters in Gujarat, European subsidiary operations in England, and executive governance.
            </p>
          </div>

          {/* Global Connectivity Banner with Map */}
          <div className="mb-12 rounded-3xl bg-slate-900 border border-slate-800 text-white overflow-hidden relative shadow-lg">
            <div className="grid lg:grid-cols-12 items-center">
              <div className="p-8 sm:p-10 lg:col-span-5 space-y-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy/40 text-burgundy-light border border-burgundy/30 text-xs font-semibold">
                  <Globe className="w-3.5 h-3.5" />
                  International Footprint
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black leading-snug">
                  Connected from Ahmedabad to the United Kingdom &amp; Worldwide
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our dual Indian manufacturing base is seamlessly coordinated with UK subsidiary Acme UK Inc Limited to facilitate compliant CE/export shipments, institutional healthcare contracts, and OEM partnerships across Europe, Latin America, Africa, and the Middle East.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>India HQ &amp; Plants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-burgundy" />
                    <span>UK European Subsidiary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span>Global Distribution</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-full min-h-[280px] overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src="/Global.png"
                  alt="Mecca Healthcare Global Connectivity Network"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <div
                key={office.label}
                className="rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-burgundy/30 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-burgundy/10 text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-300 shadow-sm">
                      <office.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200/80">
                      {office.roleBadge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">
                      {office.label}
                    </h3>
                  </div>

                  {/* Lines of text / Address / Names */}
                  <div className="rounded-2xl bg-white border border-slate-200/70 p-3.5 space-y-1.5 text-xs text-slate-700 font-medium leading-relaxed shadow-2xs">
                    {office.lines.map((line, lIdx) => (
                      <p
                        key={line}
                        className={
                          office.label === "Managing Director" && lIdx === 0
                            ? "text-sm font-bold text-navy text-burgundy"
                            : office.label === "UK Subsidiary" && lIdx === 0
                            ? "text-sm font-bold text-navy"
                            : ""
                        }
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  {office.note && (
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {office.note}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-600">
                    {office.region}
                  </span>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}