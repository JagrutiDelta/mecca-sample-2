"use client";

/**
 * Mecca Healthcare — Global Manufacturing & Product Portfolio page
 * ---------------------------------------------------------------------
 * Drop this file into your project (e.g. components/ProductPortfolio.tsx)
 * and render it from a route, e.g. app/products/page.tsx:
 *
 *   import ProductPortfolio from "@/components/ProductPortfolio";
 *   import type { Metadata } from "next";
 *
 *   export const metadata: Metadata = {
 *     title: "Product Portfolio | Mecca Healthcare Pvt. Ltd.",
 *     description:
 *       "Explore Mecca Healthcare's global manufacturing and medical device " +
 *       "portfolio across infusion, respiratory, cardiovascular, urology, " +
 *       "dialysis, gastroenterology, and surgical product lines.",
 *   };
 *
 *   export default function Page() {
 *     return <ProductPortfolio />;
 *   }
 *
 * (metadata must live in a server file — this component is "use client"
 * because of the sticky scroll-spy nav and Framer Motion animations.)
 *
 * Before it's production-ready:
 * 1. Images — add files under public/images/portfolio/:
 *    hero-device-illustration.png, infusion-vascular-access.jpg,
 *    anesthesia-respiratory-care.jpg, cardiovascular-interventional-surgery.jpg,
 *    urology-drainage.jpg, dialysis-therapy.jpg,
 *    gastroenterology-enteral-feeding.jpg, general-surgery-neurosurgery.jpg
 *    (or swap the `image` fields below for your own URLs).
 * 2. Email — no email address was in the source PDFs, so the contact strip
 *    doesn't show one. Add it in the ContactStrip component below once you
 *    have the official address.
 * 3. Smooth scrolling — for the hash-link CTAs to animate, add
 *    className="scroll-smooth" to the <html> tag in your root layout.
 * 4. Social links — LinkedIn/Facebook/Instagram hrefs are placeholders
 *    ("#") in `socialLinks` below; point them at real profile URLs.
 * 5. Font — assumes Inter is already the site's default sans font.
 * ---------------------------------------------------------------------
 */

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  type LucideIcon,
  ArrowLeft,
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Download,
  Droplet,
  Facebook,
  Factory,
  Globe,
  HeartPulse,
  Instagram,
  Landmark,
  LayoutGrid,
  Linkedin,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Syringe,
  UserRound,
  Utensils,
  Waves,
  Wind,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Product {
  name: string;
  description: string;
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
// Data — everything below is sourced from the Mecca Healthcare product-list
// PDF. Add a new product by pushing to a category's `products` array, or a
// new category by adding an entry to `productCategories`; the nav, grid,
// and detailed sections all read from this one array.
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
          "Vented and non-vented sets with dial flow, in-line filters, auto prime air stop, micro drip, and blood transfusion variants — used to administer blood or drugs directly to a patient's vascular system.",
      },
      {
        name: "Intravenous Cannula",
        description:
          "Designed for the infusion of fluids, drugs, or blood components, and facilitates vascular access.",
      },
      {
        name: "Needle Free Connector",
        description:
          "Utilized for the delivery and aspiration of fluids directly from an IV catheter.",
      },
      {
        name: "Extension Sets",
        description:
          "Sterile, single-use devices intended as part of a system for the infusion of fluids and medications.",
      },
      {
        name: "Multiple Lumen Catheter",
        description:
          "Intended for monitoring central venous pressure (CVP), sampling blood, and simultaneous administration of multiple IV solutions.",
      },
      {
        name: "I.V. Flow Regulator",
        description: "An administration device offering precision care and consistent fluid delivery.",
      },
      {
        name: "Manifolds",
        description:
          "Indicated for fluid flow directional control and providing access ports for solution administration.",
      },
      {
        name: "Three-Way Stopcock",
        description:
          "An accessory to perfusion sets indicated for fluid directional control, fluid withdrawal, and pressure monitoring.",
      },
      {
        name: "Y-Connector",
        description: "Used to connect to perfusion sets or catheters for the infusion of contrast media.",
      },
    ],
  },
  {
    slug: "anesthesia-respiratory-care",
    title: "Anesthesia & Respiratory Care",
    shortDescription: "Airway and ventilation devices supporting anesthesia, suction, and oxygen therapy.",
    image: "/Anesthesia/image1.png",
    icon: Wind,
    products: [
      {
        name: "Endotracheal Tube",
        description:
          "Inserted with the help of a laryngoscope to secure the upper portion of the trachea for ventilation.",
      },
      {
        name: "Tracheostomy / Tracheal Tube",
        description: "A breathing tube inserted into a tracheotomy to obtain a closed circuit for ventilation.",
      },
      {
        name: "Nasopharyngeal Catheter",
        description: "Passed through the nares to remove air choke or obstruction in adults.",
      },
      {
        name: "Tracheobronchial Suction Catheter",
        description:
          "Clears airways of mucus, pus, or aspirated materials to improve oxygenation and ventilation.",
      },
      {
        name: "Suction Tip and Catheter",
        description: "Features a whistle tip and thumb control port for precise and accurate suctioning.",
      },
      {
        name: "Tonsil Suction Tube",
        description: "Used specifically to extract stones in tonsils.",
      },
      {
        name: "Nasal Oxygen Catheter",
        description: "Delivers supplemental oxygen or increased airflow to patients needing respiratory assistance.",
      },
      {
        name: "Heat and Moisture Exchange (HME) Filter",
        description: "Utilized for airway management by anesthesia and respiratory care departments.",
      },
    ],
  },
  {
    slug: "cardiovascular-interventional-surgery",
    title: "Cardiovascular & Interventional Surgery",
    shortDescription: "Catheters, cannulae, and monitoring devices for cardiac and vascular surgical procedures.",
    image: "/Cardiology/image1.png",
    icon: HeartPulse,
    products: [
      {
        name: "Angiographic Catheter",
        description:
          "Provides a pathway for delivering contrast media to selected sites in the vascular system, including carotid arteries.",
      },
      {
        name: "Angiographic Needle",
        description:
          "Features a unique hub design with an ergonomic feel and a black triangle indicator to orient the bevel.",
      },
      {
        name: "Arterial Cannula",
        description: "Inserted into an artery during major operations to measure beat-to-beat blood pressure and draw samples.",
      },
      {
        name: "Coronary Artery Cannula",
        description: "Designed for cannulation techniques in left-side coronary artery surgery.",
      },
      {
        name: "Venous Cannula",
        description:
          "A single cannula used for venous drainage and reinfusion of blood via the internal jugular vein during extracorporeal life support.",
      },
      {
        name: "Heart-Lung Bypass Unit Tube",
        description: "Placed in the heart to drain blood to the bypass machine during surgical procedures.",
      },
      {
        name: "Intramuscular Pressure Monitoring Catheter",
        description: "A modified fiber optic transducer-tipped system for measuring intramuscular pressure.",
      },
    ],
  },
  {
    slug: "urology-drainage",
    title: "Urology & Drainage",
    shortDescription: "Catheters and drainage systems for reliable, closed urinary management.",
    image: "/Urology/image1.png",
    icon: Droplet,
    products: [
      {
        name: "Urethral Catheter",
        description: "Facilitates direct drainage of the urinary bladder into an attached collection bag or container.",
      },
      {
        name: "Nelaton Catheter",
        description: "A long, small gauge catheter designed for insertion directly into the ureter.",
      },
      {
        name: "Foley Catheter",
        description: "A routine medical catheter designed for insertion into the ureter or bladder for direct drainage.",
      },
      {
        name: "Urethrographic Male Catheter",
        description: "A specialized catheter used to pass into a male patient's bladder.",
      },
      {
        name: "Urinary Drainage Unit / Urine Collection Bag",
        description:
          "A closed drainage system including Uromeasure (with measured volume meter) and adult/pediatric leg bags.",
      },
    ],
  },
  {
    slug: "dialysis-therapy",
    title: "Dialysis Therapy",
    shortDescription: "Access devices for haemodialysis and peritoneal dialysis therapy.",
    image: "/products/hero_medical_products.png",
    icon: Waves,
    products: [
      {
        name: "Haemodialysis Catheter",
        description: "Used for exchanging blood to and from the haemodialysis machine.",
      },
      {
        name: "Peritoneal Dialysis Catheter",
        description: "Allows dialysis fluid to enter the abdominal cavity, dwell, and then drain back out.",
      },
      {
        name: "Single Needle Haemodialysis Catheter / Blood Lines",
        description: "Utilized for single needle dialysis where only one cannula or lumen accesses the blood.",
      },
      {
        name: "Fistula Needle",
        description: "Connects blood lines with blood vessels securely during dialysis procedures.",
      },
    ],
  },
  {
    slug: "gastroenterology-enteral-feeding",
    title: "Gastroenterology & Enteral Feeding",
    shortDescription: "Feeding and gastric tubes supporting nutrition and GI drainage.",
    image: "/Gastroenterology/image1.png",
    icon: Utensils,
    products: [
      {
        name: "Feeding Tube",
        description: "Inserted into the stomach through the abdomen to supply nutrition when oral eating is restricted.",
      },
      {
        name: "Levine Tube",
        description: "Used for the aspiration of gastric and intestinal contents, and administration of tube feedings or medications.",
      },
      {
        name: "Nasogastric Tube / Ryles Tube",
        description: "Carries food and medicine to the stomach through the nose.",
      },
    ],
  },
  {
    slug: "general-surgery-neurosurgery",
    title: "General Surgery & Neurosurgery",
    shortDescription: "Drainage, suction, and access devices for general and neurosurgical procedures.",
    image: "/Surgical/image1.png",
    icon: Brain,
    products: [
      {
        name: "Closed Wound Drainage Tube / System",
        description:
          "Intended for the evacuation of biological fluid from a wound or body cavity during surgery or wound care management.",
      },
      {
        name: "Chest Drainage Catheter (With/Without Trocar)",
        description: "Functions as a portal for surgical instruments and removes air or fluid from the pleural space in a closed, one-way fashion.",
      },
      {
        name: "Spinal Needles",
        description: "Used for diagnostic sampling of cerebrospinal fluid, delivering anaesthetics, and introducing contrast medium.",
      },
      {
        name: "Ventricular Cannula",
        description:
          "Specially designed to penetrate delicate brain tissue and provide continued access to the brain's ventricular system during neurosurgical procedures.",
      },
    ],
  },
];

const facilities: Facility[] = [
  {
    name: "Facility 1 — Gujarat",
    location: "Kalol, Gandhinagar, Gujarat",
    address: "99, G.I.D.C, Kalol (N.G.), Gandhinagar, Gujarat, India – 382725",
    license: "MFG/MD/2019/000192",
  },
  {
    name: "Facility 2 — Rajasthan",
    location: "Boranada, Jodhpur, Rajasthan",
    address: "F-252, III Phase, Boranada, Jodhpur, Rajasthan, India – 342012",
    license: "MFG/MD/2022/000047",
  },
];

const offices: OfficeCard[] = [
  {
    label: "Registered Office",
    icon: Landmark,
    lines: ["408, Spectrum, Opp. Relief Cinema,", "Near G.P.O. Salapas Road, Ahmedabad,", "Gujarat, India – 380001"],
  },
  {
    label: "Corporate Head Office",
    icon: Building2,
    lines: ["B-605, Ratnakar Nine Square,", "Opposite ITC Narmada, Vastrapur,", "Ahmedabad, Gujarat, India – 380015"],
  },
  {
    label: "UK Subsidiary",
    icon: Globe,
    lines: ["Acme UK Inc Limited", "56 Guildford Street, Chertsey,", "England, KT16 9BE"],
  },
  {
    label: "Managing Director",
    icon: UserRound,
    lines: ["Mr. Rohit Sharma", "Founder & Director, Acme UK Inc Limited", "Managing Director, Mecca Healthcare Pvt Ltd"],
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
    icon: ClipboardCheck,
  },
];

const stats: Stat[] = [
  { icon: LayoutGrid, value: `${productCategories.length}`, label: "Product Categories" },
  { icon: Factory, value: `${facilities.length}`, label: "Manufacturing Facilities" },
  { icon: ShieldCheck, value: "CDSCO", label: "Certified Facilities" },
  { icon: Globe, value: "UK", label: "Global Operations" },
];

const socialLinks: { label: string; icon: LucideIcon; href: string }[] = [
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
];

// ---------------------------------------------------------------------------
// Small shared pieces
// ---------------------------------------------------------------------------

function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="rounded-full bg-[#E6F8F7] px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-[#8B1E2D]">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold text-[#0F172A] md:text-4xl">{title}</h2>
    </div>
  );
}

function useScrollSpy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  const tickingRef = useRef(false);

  useEffect(() => {
    function update() {
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }
      setActiveId(current);
      tickingRef.current = false;
    }
    function handleScroll() {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(update);
      }
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|"), offset]);

  return activeId;
}

// ---------------------------------------------------------------------------
// 1. Hero
// ---------------------------------------------------------------------------

function Hero() {
  const router = useRouter();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(32,160,178,0.18),_transparent_38%),linear-gradient(135deg,_#fdf0f0_0%,_#fff8f8_34%,_#fdecec_100%)] py-8 text-slate-900 md:py-12"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="group inline-flex items-center gap-2 rounded-full border border-[#8B1E2D]/20 bg-white/80 px-3.5 py-2 text-sm font-medium text-[#0F172A] shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:border-[#8B1E2D]/40 hover:text-[#8B1E2D]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden="true" />
          Back
        </button>
      </div>

      <div className="mx-auto mt-8 grid max-w-[1200px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <span className="w-fit  tracking-[0.18em]  eyebrow justify-center mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">
            Global Manufacturing Partner
          </span>
          <h1 className=" leading-tight lg:text-6xl font-heading font-bold text-navy text-3xl md:text-4xl">
            Global Manufacturing &amp; Product Portfolio
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            Mecca Healthcare Pvt. Ltd. designs and manufactures medical devices across seven
            therapeutic categories, from two CDSCO-licensed facilities in India and a UK
            subsidiary coordinating global operations.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full bg-[#8B1E2D] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_25px_rgba(32,160,178,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8B1E2D]"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#8B1E2D]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:border-[#8B1E2D]/40 hover:text-[#8B1E2D]"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm"
          >
            <Image
              src="/products/hero_medical_products.png"
              alt="Mecca Healthcare medical device illustration"
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-contain p-6"
            />
          </motion.div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 rounded-2xl border border-[#f6dfdf] bg-white/90 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8e6e6] text-[#8B1E2D]">
                  <stat.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#0F172A]">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 2. Company Overview
// ---------------------------------------------------------------------------

function CompanyOverview() {
  return (
    <section id="overview" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start ">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <SectionHeading
              eyebrow="COMPANY OVERVIEW"
              title="A CDSCO-licensed manufacturer with global reach"
              align="left"
            />
            <p className="text-base leading-relaxed text-slate-600">
              Mecca Healthcare Pvt. Ltd. is a CDSCO-licensed medical device manufacturer with two
              production facilities in Gujarat and Rajasthan, and global operations coordinated
              through its UK subsidiary, Acme UK Inc Limited. The company manufactures devices
              spanning infusion, respiratory, cardiovascular, urology, dialysis, gastroenterology,
              and surgical product lines — supplying hospitals, distributors, and OEM partners in
              India and abroad.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {offices.map((office, index) => (
              <motion.div
                key={office.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[24px] border border-[#f5e2e2] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f8e6e6] text-[#8B1E2D]">
                  <office.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-[#0F172A]">{office.label}</h3>
                <div className="mt-2 space-y-0.5 text-sm text-slate-600">
                  {office.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 3. Manufacturing Facilities
// ---------------------------------------------------------------------------

function ManufacturingFacilities() {
  return (
    <section id="facilities" className="bg-[#fcf8f8] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="MANUFACTURING FACILITIES" title="Two CDSCO-certified production units" />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute bottom-2 left-6 top-2 w-px bg-[#8B1E2D]/20" aria-hidden="true" />
          <ol className="flex flex-col gap-10">
            {facilities.map((facility, index) => (
              <motion.li
                key={facility.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 pl-16"
              >
                <span className="absolute left-6 top-1 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-[#8B1E2D] ring-4 ring-[#F8FAFC]">
                  <ShieldCheck className="h-3 w-3 text-white" aria-hidden="true" />
                </span>
                <div className="w-full rounded-[24px] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] ring-1 ring-[#E8F9F8]">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B1E2D]">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {facility.location}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-[#0F172A]">{facility.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{facility.address}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F0FBFB] px-3 py-1 text-xs font-medium text-[#0F172A]">
                      CDSCO MDRA License: {facility.license}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-medium text-[#10B981]">
                      <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                      Certified
                    </span>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 4. Product Categories Grid
// ---------------------------------------------------------------------------

function CategoryCard({ category, index }: { category: ProductCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-[24px] border border-[#E2F5F5] bg-white shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#20A0B2]/40 hover:shadow-[0_18px_40px_rgba(32,160,178,0.16)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F0FBFB]">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#8B1E2D] shadow-sm backdrop-blur-sm">
          <category.icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold leading-snug text-[#0F172A]">{category.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600">{category.shortDescription}</p>
        <p className="text-xs font-medium text-[#8B1E2D]">
          {category.products.length} product{category.products.length !== 1 ? "s" : ""}
        </p>
        <a
          href={`#${category.slug}`}
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-full border border-[#8B1E2D]/20 bg-[#f8e6e6] px-5 py-2.5 text-sm font-medium text-[#8B1E2D] transition-all duration-300 group-hover:border-[#8B1E2D] group-hover:bg-[#8B1E2D] group-hover:text-white"
        >
          Explore
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  );
}

function CategoryGrid() {
  return (
    <section id="categories" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <SectionHeading eyebrow="PRODUCT CATEGORIES" title="Seven therapeutic categories, one manufacturing partner" />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category, index) => (
            <CategoryCard key={category.slug} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryNav() {
  const ids = productCategories.map((c) => c.slug);
  const activeId = useScrollSpy(ids);

  return (
    <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <nav
        aria-label="Product category navigation"
        className="mx-auto flex max-w-[1200px] gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8"
      >
        {productCategories.map((category) => {
          const isActive = category.slug === activeId;
          return (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive ? "bg-[#8B1E2D] text-white shadow-[0_10px_25px_rgba(139,30,45,0.25)]" : "text-[#0F172A] hover:bg-[#F0FBFB]"
              }`}
            >
              <category.icon className="h-4 w-4" aria-hidden="true" />
              {category.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 5. Detailed Product Sections
// ---------------------------------------------------------------------------

function ProductMiniCard({ product }: { product: Product }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-colors duration-300 hover:border-[#8B1E2D]/30">
      <h4 className="text-sm font-semibold text-[#173F6B]">{product.name}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{product.description}</p>
    </div>
  );
}

function CategorySection({ category, index }: { category: ProductCategory; index: number }) {
  const isReversed = index % 2 === 1;

  const imageBlock = (
    <motion.div
      key="image"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-white shadow-[0_10px_40px_rgba(15,39,68,0.1)]"
    >
      <Image
        src={category.image}
        alt={category.title}
        fill
        sizes="(min-width: 1024px) 45vw, 90vw"
        className="object-cover"
      />
    </motion.div>
  );

  const infoBlock = (
    <motion.div
      key="info"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col gap-4"
    >
      <span className="flex w-fit items-center gap-2 rounded-full bg-[#8B1E2D]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#8B1E2D]">
        <category.icon className="h-4 w-4" aria-hidden="true" />
        {category.title}
      </span>
      <h2 className="text-2xl font-semibold text-[#173F6B] md:text-3xl">{category.title}</h2>
      <p className="text-base leading-relaxed text-slate-600">{category.shortDescription}</p>
      <div className="mt-2 grid gap-4 sm:grid-cols-2">
        {category.products.map((product) => (
          <ProductMiniCard key={product.name} product={product} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      id={category.slug}
      className={`scroll-mt-20 py-16 md:py-20 ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {isReversed ? (
            <>
              {infoBlock}
              {imageBlock}
            </>
          ) : (
            <>
              {imageBlock}
              {infoBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 6. Why Choose Mecca
// ---------------------------------------------------------------------------

function WhyCard({ feature, index }: { feature: WhyFeature; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-[24px] border border-white/60 bg-white/70 p-6 shadow-[0_4px_20px_rgba(15,39,68,0.08)] backdrop-blur-md"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B1E2D] to-[#8B1E2D]">
        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-[#173F6B]">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
    </motion.div>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-[#fcf8f8] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <SectionHeading eyebrow="WHY CHOOSE MECCA" title="Built for hospitals, distributors, and OEM partners" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyFeatures.map((feature, index) => (
            <WhyCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ProductPortfolio() {
  return (
    <main className="bg-white">
      <Hero />
      <CompanyOverview />
      <ManufacturingFacilities />
      <div className="relative">
        <CategoryNav />
        <CategoryGrid />
        {productCategories.map((category, index) => (
          <CategorySection key={category.slug} category={category} index={index} />
        ))}
      </div>
      <WhyChooseUs />
    </main>
  );
}