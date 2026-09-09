"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  type LucideIcon,
  ArrowLeft,
  ArrowRight,
  Brain,
  Building2,
  Check,
  CheckCircle2,
  Download,
  Droplet,
  Eye,
  Factory,
  FileCheck,
  FileText,
  Globe,
  HeartPulse,
  Landmark,
  LayoutGrid,
  MapPin,
  PackageCheck,
  Search,
  ShieldCheck,
  Syringe,
  UserRound,
  Utensils,
  Waves,
  Wind,
  X,
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
}

interface OfficeCard {
  label: string;
  icon: LucideIcon;
  lines: string[];
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
// Data with individual device images
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
        description: "Yankauer suction instrument used specifically for throat and oral cavity fluid evacuation.",
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

const facilities: Facility[] = [
  {
    name: "Facility 1 — Kalol Hub",
    location: "Kalol, Gandhinagar, Gujarat",
    address: "99, G.I.D.C, Kalol (N.G.), Gandhinagar, Gujarat, India – 382725",
    license: "MFG/MD/2019/000192",
  },
  {
    name: "Facility 2 — Boranada Mega Plant",
    location: "Boranada, Jodhpur, Rajasthan",
    address: "F-252, III Phase, Boranada, Jodhpur, Rajasthan, India – 342012",
    license: "MFG/MD/2022/000047",
  },
];

const offices: OfficeCard[] = [
  {
    label: "Registered Office",
    icon: Landmark,
    lines: [
      "408, Spectrum, Opp. Relief Cinema,",
      "Near G.P.O. Salapas Road, Ahmedabad,",
      "Gujarat, India – 380001",
    ],
  },
  {
    label: "Corporate Head Office",
    icon: Building2,
    lines: [
      "B-605, Ratnakar Nine Square,",
      "Opposite ITC Narmada, Vastrapur,",
      "Ahmedabad, Gujarat, India – 380015",
    ],
  },
  {
    label: "UK Subsidiary",
    icon: Globe,
    lines: [
      "Acme UK Inc Limited",
      "56 Guildford Street, Chertsey,",
      "England, KT16 9BE",
    ],
  },
  {
    label: "Managing Director",
    icon: UserRound,
    lines: [
      "Mr. Rohit Sharma",
      "Founder & Director, Acme UK Inc Limited",
      "Managing Director, Mecca Healthcare Pvt Ltd",
    ],
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
  const { openQuoteModal, addToQuote } = useQuoteModal();
  const [selectedDivision, setSelectedDivision] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const pdfUrl = "/catalogues/MECCA HEALTHCARE PVT LTD Product List 2026.pdf";

  const handleQuote = (name?: string) => {
    if (name) addToQuote(name);
    openQuoteModal(name);
  };

  // Filtered categories based on selected division tab & search query
  const displayedCategories = useMemo(() => {
    return productCategories
      .map((cat) => {
        if (selectedDivision !== "all" && cat.slug !== selectedDivision) {
          return null;
        }

        const filteredProducts = cat.products.filter((p) => {
          if (!searchQuery.trim()) return true;
          const q = searchQuery.toLowerCase();
          return (
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            cat.title.toLowerCase().includes(q)
          );
        });

        if (searchQuery.trim() && filteredProducts.length === 0) {
          return null;
        }

        return {
          ...cat,
          products: filteredProducts,
        };
      })
      .filter((cat): cat is ProductCategory => cat !== null);
  }, [selectedDivision, searchQuery]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <UtilityBar />
      <Header />

      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO SECTION                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-[#0F2740] py-20 lg:py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,30,45,0.18),transparent_50%)]" />
        <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-[#8B1E2D]/10 blur-3xl pointer-events-none" />

        <div className="container-px relative z-10">
          <div className="mb-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-navy cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back</span>
            </button>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <span className="eyebrow inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-300">
                Medical Device Portfolio
              </span>

              <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
                Global Manufacturing &amp; Product Portfolio
              </h1>

              <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
                Mecca Healthcare Pvt. Ltd. designs and manufactures sterile single-use medical devices across seven therapeutic categories, operating from two CDSCO-licensed cleanroom facilities with UK global distribution.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#catalogue-2026"
                  className="inline-flex items-center gap-2 rounded-full bg-[#8B1E2D] px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-burgundy-dark"
                >
                  <FileText className="h-4 w-4" />
                  <span>Product List 2026 (PDF)</span>
                </a>

                <a
                  href="#catalog"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
                >
                  <span>Explore Divisions</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={() => handleQuote()}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
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
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. OFFICIAL 2026 PDF RESOURCE CARD                                 */}
      {/* ------------------------------------------------------------------ */}
      <section id="catalogue-2026" className="py-12 lg:py-16 scroll-mt-16 bg-white border-b border-slate-200">
        <div className="container-px">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              
              {/* Left Document Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-burgundy/10 px-3 py-1 text-xs font-bold text-burgundy">
                    <FileCheck className="h-3.5 w-3.5" />
                    Official 2026 Publication
                  </span>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                    CDSCO Licensed &bull; ISO 13485:2016
                  </span>
                </div>

                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                    MECCA HEALTHCARE PVT LTD Product List 2026.pdf
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Complete regulatory catalogue containing technical specifications for 54+ sterile medical devices spanning Infusion, Anesthesia, Cardiology, Urology, Dialysis, Gastroenterology, and Surgery.
                  </p>
                </div>

                {/* Bullet Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
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
              <div className="lg:col-span-4 flex flex-col justify-center gap-3 bg-white p-5 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs text-slate-500">
                  <span className="font-semibold text-navy">Format: PDF Document</span>
                  <span>70 KB</span>
                </div>

                <a
                  href={pdfUrl}
                  download="MECCA HEALTHCARE PVT LTD Product List 2026.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-burgundy px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-burgundy-dark text-center"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-xs sm:text-sm font-semibold text-navy transition-colors hover:bg-slate-100 text-center"
                >
                  <Eye className="h-4 w-4 text-burgundy" />
                  <span>View in Browser</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleQuote("Complete Product Portfolio 2026")}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
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
      {/* 3. THERAPEUTIC DIVISIONS EXPLORER & CATALOG (With Individual Images)*/}
      {/* ------------------------------------------------------------------ */}
      <section id="catalog" className="py-16 md:py-20 scroll-mt-16 bg-white border-b border-slate-200">
        <div className="container-px">
          {/* Header & Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 border-b border-slate-200 pb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
                Product Portfolio
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-3">
                Seven Therapeutic Divisions
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                Explore our comprehensive sterile medical devices manufactured under WHO-GMP &amp; ISO 13485:2016 cleanroom standards.
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search medical devices..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-10 py-2.5 text-xs sm:text-sm text-navy placeholder:text-slate-400 focus:bg-white focus:border-burgundy focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Clean Division Tab Filter Buttons (Flex Wrap, No Scrollbar) */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <button
              type="button"
              onClick={() => setSelectedDivision("all")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                selectedDivision === "all"
                  ? "bg-burgundy text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span>All Divisions</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] ${
                  selectedDivision === "all"
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 text-slate-700"
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
                  onClick={() => setSelectedDivision(cat.slug)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-navy text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-navy"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{cat.title}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {cat.products.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Division Blocks with Products + Product Image Thumbnails */}
          {displayedCategories.length > 0 ? (
            <div className="space-y-12">
              {displayedCategories.map((division) => (
                <div
                  key={division.slug}
                  id={division.slug}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 md:p-8 space-y-6"
                >
                  {/* Division Header Banner */}
                  <div className="grid gap-6 lg:grid-cols-12 items-center border-b border-slate-200/80 pb-6">
                    <div className="lg:col-span-8 space-y-2">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-burgundy/10 px-3 py-1 text-xs font-bold text-burgundy">
                        <division.icon className="h-3.5 w-3.5" />
                        <span>{division.title}</span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-navy">
                        {division.title} Division
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                        {division.shortDescription}
                      </p>
                    </div>

                    <div className="lg:col-span-4 flex justify-start lg:justify-end">
                      <div className="relative aspect-[4/3] w-full max-w-[240px] rounded-xl overflow-hidden border border-slate-200 bg-white">
                        <Image
                          src={division.image}
                          alt={division.title}
                          fill
                          sizes="(min-width: 1024px) 240px, 100vw"
                          className="object-cover"
                        />
                        <span className="absolute bottom-2 right-2 rounded bg-navy/90 px-2 py-0.5 text-[9.5px] font-semibold text-white">
                          {division.products.length} Products
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Division Products Grid with Small Individual Images */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {division.products.map((product) => (
                      <div
                        key={product.name}
                        className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-slate-300 hover:shadow-xs"
                      >
                        <div>
                          {/* Small Device Thumbnail */}
                          <div className="relative mb-3 flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-slate-200/70 bg-gradient-to-b from-slate-50 to-white p-2.5">
                            <img
                              src={product.image}
                              alt={product.name}
                              onError={(e) => {
                                e.currentTarget.src = "/products/hero_medical_products.png";
                              }}
                              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="absolute top-2 right-2 rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] font-bold text-emerald-700">
                              {product.badge || "EO Sterile"}
                            </span>
                          </div>

                          <h4 className="font-heading text-sm font-bold text-navy group-hover:text-burgundy transition-colors">
                            {product.name}
                          </h4>
                          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                            {product.description}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                          <span className="text-[10px] text-slate-400 font-medium">
                            ISO 13485 Spec
                          </span>
                          <button
                            type="button"
                            onClick={() => handleQuote(product.name)}
                            className="cursor-pointer text-xs font-semibold text-burgundy hover:text-burgundy-dark hover:underline flex items-center gap-0.5"
                          >
                            <span>Quote</span>
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-slate-500 rounded-2xl border border-slate-200 bg-white">
              <p className="text-sm font-medium">No medical devices found matching "{searchQuery}".</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDivision("all");
                }}
                className="mt-3 text-xs font-bold text-burgundy hover:underline cursor-pointer"
              >
                Clear Search &amp; Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. MANUFACTURING FACILITIES                                        */}
      {/* ------------------------------------------------------------------ */}
      <section id="facilities" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="container-px">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
              Infrastructure
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-3">
              CDSCO-Certified Manufacturing Units
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            {facilities.map((fac) => (
              <div
                key={fac.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-burgundy">
                  <MapPin className="h-4 w-4" />
                  <span>{fac.location}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">
                  {fac.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {fac.address}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-slate-100 border border-slate-200 px-2.5 py-1 text-xs font-medium text-navy">
                    License: {fac.license}
                  </span>
                  <span className="rounded-md bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs font-semibold">
                    WHO-GMP Compliant
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. CORPORATE & OPERATIONAL OFFICES                                 */}
      {/* ------------------------------------------------------------------ */}
      <section id="overview" className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="container-px">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
              Global Network
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-3">
              Corporate &amp; Operational Offices
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <div
                key={office.label}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-burgundy/10 text-burgundy">
                  <office.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-sm font-bold text-navy">
                  {office.label}
                </h3>
                <div className="space-y-0.5 text-xs text-slate-600 leading-relaxed">
                  {office.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. WHY CHOOSE MECCA                                                */}
      {/* ------------------------------------------------------------------ */}
      <section id="why-choose-us" className="py-16 md:py-20 bg-slate-50">
        <div className="container-px">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
              Why Choose Mecca
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-3">
              Built for Hospitals, Distributors &amp; OEM Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyFeatures.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-burgundy text-white">
                  <feat.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-bold text-navy">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}