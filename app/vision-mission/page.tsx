"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuoteModal } from "@/context/QuoteContext";
import {
  Droplet,
  Activity,
  Wind,
  ShieldCheck,
  Stethoscope,
  GitMerge,
  HeartPulse,
  Scissors,
  Syringe,
  CheckCircle,
  Building2,
  Landmark,
  Globe,
  Eye,
  Compass,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Package,
  Layers,
  Award,
  Factory,
  Calendar,
  Sparkles,
  Search,
  X,
  LayoutGrid,
  List,
  SlidersHorizontal,
  FileText,
  Plus,
  Check,
  RotateCcw,
  Filter,
  CheckCircle2,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------------
 * 1. Types & Data Structures
 * ---------------------------------------------------------------------- */

interface ProductDetail {
  name: string;
  description?: string;
  material?: string;
  usage?: string;
  brand?: string;
  sterilized?: string;
  priceRange?: string;
  length?: string;
  size?: string;
  packaging?: string;
  features?: string[];
}

interface ProductCategory {
  id: string;
  title: string;
  navLabel: string;
  description: string;
  icon: LucideIcon;
  products: ProductDetail[];
  features?: string[];
  applications?: string[];
}

/* ------------------------------------------------------------------------
 * 2. Complete 9 Categories & Product Data
 * ---------------------------------------------------------------------- */

const CATEGORIES: ProductCategory[] = [
  {
    id: "infusion-therapy",
    title: "Infusion Therapy",
    navLabel: "Infusion Therapy",
    description:
      "Precision-engineered intravenous administration systems for safe, accurate, and sterile fluid delivery.",
    icon: Droplet,
    products: [
      {
        name: "Lightproof Photosensitive IV Infusion Set (Micro Infusion Set)",
        description:
          "Prepared from Lightproof / Photosensitive polymer materials. Available in Yellow and Brown color, obtainable with or without Precision Flow Controller [Dial Type] 5 ml to 250 ml/hr.",
        material: "Lightproof / Photosensitive medical polymer (Yellow & Brown)",
        usage: "Hospital, Oncology, Critical Care",
        sterilized: "Yes (E.O. Ethylene Oxide Sterile, Non-Toxic & Pyrogen-Free)",
        packaging: "Paper Poly Pack (300 pcs per carton)",
        features: [
          "Latex-free, soft clear and flexible tubing",
          "With or without Precision Flow Controller (5 to 250 ml/hr)",
          "88\" IV Administration Set Vented Spike (20 drops/ml) with Guard",
          "60mm Drip Chamber & 15 Micron Fluid Filter",
          "Rotating Luer Lock Male Adaptor with Cap",
          "3.0 x 4.1mm PVC Tubing (Length 30+140+30cm)",
        ],
      },
      {
        name: "Dial Flow IV Infusion Set (Micro Infusion Set)",
        description:
          "Comprises a device dialed to a specific infusion rate. Ideally suited for gravity infusions, available in vented (for bottles/bags) and non-vented (for plastic bottles).",
        material: "Medical Grade PVC, Polycarbonate",
        usage: "Hospital, Gravity Infusion (Bottles & Bags)",
        sterilized: "Yes (ETO Sterile, Non-Toxic & Pyrogen-Free)",
        packaging: "Paper Poly Pack (240 pcs per carton)",
        features: [
          "Micro-calibrated dial flow regulator across full adjustable scale (5 to 250 ml/hr)",
          "Sharp spike for better penetration, 100% Latex-free",
          "Rotating lock to facilitate immediate stop-off",
          "Pinch clamp to facilitate immediate shut-off when necessary",
          "Vented Spike (20 drops/ml) or Micro-Drip (60 drops/ml) with Guard",
          "60mm Drip Chamber, 15 Micron Fluid Filter, 2.7 x 3.9mm PVC Tubing (50+130+15cm)",
        ],
      },
      {
        name: "Infusion Set for Infusion Pump (Micro Infusion Set)",
        description:
          "Efficient in pumping liquid into the body with variable tubing lengths. Tested and validated according to Harmonized Standards.",
        material: "High-elastic medical-grade PVC tubing",
        usage: "Hospital, ICU, Surgical Ward (for Infusion Pumps)",
        sterilized: "Yes (ETO Sterilization validated to Harmonized Standards)",
        packaging: "Paper Poly Pack (300 pcs per carton)",
        features: [
          "ISO 8536-4 compliant spike / ISO 594/1 & ISO 594/2 compliant end-connections",
          "Available in vented (20 drops/ml) and non-vented (10 drops/ml) with Guard",
          "60mm - 70mm Drip Chamber with 15 Micron Fluid Filter",
          "Latex-free 'Y' site & precision flow regulator",
          "Luer lock adapter with cap, 3.0mm x 4.1mm PVC Tubing (Length 135+15cm)",
        ],
      },
      {
        name: "Paclitaxel Infusion Set (Micro Infusion Set)",
        description:
          "Suit and fast priming adult set to curtail nursing time. Automatic air-venting in any position prevents loss of flow due to air locks. Able to withstand minimum 45 psi (3.1 bar) pressure.",
        material: "PVC / DEHP-Free Tubing",
        usage: "Hospital, Chemotherapy, Oncology (Taxane Infusions)",
        sterilized: "Yes (EO Sterile, Non-Toxic & Pyrogen-Free)",
        packaging: "Paper Poly Pack (300 pcs per carton)",
        features: [
          "Bacterial retention for over 96 hours continuous flow",
          "Options available with filter media 0.2 / 1.2 micron",
          "76\" Infusion line for Paclitaxel Administration",
          "Vented Spike (20 drops/ml) with Guard & 60mm Drip Chamber",
          "1.5 micron fluid filter with 0.2 micron in-line filter",
          "3.0mm x 4.1mm DEHP-Free PVC tubing (Length 140+15cm)",
        ],
      },
      {
        name: "Standard IV Infusion Set",
        description:
          "High-volume infusion administration sets with micro-mesh fluid filtration and flexible kink-resistant lines.",
        material: "Medical Grade PVC, Polycarbonate fittings",
        usage: "Hospital, Clinical Wards",
        sterilized: "Yes (EO Sterile)",
        packaging: "Paper Poly Pack (300 pcs per carton)",
        features: [
          "82\" / 84\" IV Administration Set: Vented (20 drops/ml) or Non-Vented (10 drops/ml)",
          "Drip Chamber 70mm with 15-micron fluid filter",
          "Dial flow regulator / roller flow regulator",
          "Latex-free 'Y'-site, 0.2 micron filter, rotating luer lock male adaptor with cap",
          "3.0mm x 4.1mm PVC Tubing (Length 115+30+15cm / 60+50+30+15cm)",
        ],
      },
      {
        name: "Innovative Air Stop & Prime Stop Infusion System",
        description:
          "Engineered under technical collaboration with ACHG UK Inc. Limited, London, Great Britain. Revolutionary safety technology that prevents air embolism and maintains a closed system.",
        material: "DEHP-Free Medical Grade PVC, Polycarbonate",
        usage: "ICU, Emergency, Surgery & General Infusion",
        sterilized: "Yes (EO Sterile)",
        features: [
          "Air Stop Feature: Avoids air infusion when bottle empties, maintains constant fluid level in line",
          "Unique Precision-Filter acts as barrier for particulate matter 15 microns & below",
          "Prime Stop Feature: Auto Fill with no dripping of IV fluid on hands, floors & bedding",
          "Smooth switch-over to next IV bottle without re-priming",
          "Fitted with Safety Roller Controller, Rotating Luer Lock, Slip Clamp, and Y-Site",
          "Technical collaboration with ACHG UK Inc. Limited, London",
        ],
      },
      {
        name: "BSDA Extension Sets / Micro Infusion Sets",
        description:
          "Precision extension lines for infusion control, syringe pumps, and pediatric fluid delivery.",
        material: "Medical Grade PVC",
        usage: "Pediatric, Intensive Care & Syringe Pump Titration",
        sterilized: "Yes (EO Sterile)",
        packaging: "Paper Poly Pack (400 pcs per carton)",
        features: [
          "12\" Standard BSDA Extension Set, Female Luer with Cap",
          "0.2 Micron or 1.2 Micron Filter options",
          "Slide clamp & rotating luer lock male adapter with cap",
          "3.0mm x 4.1mm PVC Tubing (Length 10+15+15cm / 10+10+10cm)",
        ],
      },
    ],
    features: [
      "Lightproof photosensitive tubing",
      "Air-stop technology",
      "Prime-stop safety valve",
      "DEHP-free PVC tubing",
      "Latex-free",
      "Sterile EO sterilized",
      "Precision flow regulation",
      "Rotating luer lock connector",
    ],
  },
  {
    id: "catheters",
    title: "Catheters & Critical Care",
    navLabel: "Catheters",
    description:
      "Comprehensive catheter solutions designed for drainage, vascular access, respiratory care, and specialized hospital procedures.",
    icon: Activity,
    products: [
      {
        name: "Chest Drainage Catheter (With / Without Trocar)",
        description:
          "Atraumatic, soft rounded catheter. Without Trocar: open distal end with 6 lateral eyes for non-traumatic insertion. With Trocar: open distal end with 2 lateral eyes and cross side eyes to prevent tissue aspiration.",
        material: "PVC, HDPE, PP, Stainless Steel (SS)",
        usage: "Hospital, Thoracic Surgery, Trauma",
        sterilized: "Yes",
        priceRange: "Rs 24 to 74",
        length: "33 - 40 cm",
        size: "FG 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40",
        features: [
          "Without Trocar: open distal end with 6 lateral eyes",
          "With Trocar: open distal end with 2 lateral eyes & cross side eyes",
          "Radio-opaque line for radiological position verification",
        ],
      },
      {
        name: "Peritoneal Dialysis Catheter (Curled)",
        description:
          "Composed of a flexible silicone tube with an open end and several side holes to provide optimal drainage and absorption of the dialysate. The extraperitoneal component has one or two Dacron cuffs for optimal ingrowth and fixation.",
        material: "Silicone rubber",
        usage: "Hospital, Nephrology, Peritoneal Dialysis",
        sterilized: "Yes",
        priceRange: "Over Rs 300 to 9,000 per set",
        length: "57 cm and 62 cm",
        size: "Diameter 7Mv",
        packaging: "Poly Pack",
        features: [
          "Curled Outer Cuff design",
          "One or two Dacron cuffs for tissue ingrowth & fixation",
          "Flexible silicone tube with multiple side drainage holes",
        ],
      },
      {
        name: "Tracheobronchial Suction Catheter",
        description:
          "Medical devices used to remove bodily secretions from the trachea and bronchial region of a patient. Features anti-crush tubing and soft atraumatic tip.",
        material: "PVC, Polystyrene",
        usage: "Hospital, Critical Care, Post-Op",
        sterilized: "Sterilized, Disposable",
        priceRange: "Rs 3 to 8",
        length: "53 cm",
        size: "FG 8, 10, 12, 14, 16, 18",
        packaging: "Packet",
        features: [
          "Radio-opaque, soft, kink-free non-toxic PVC tube",
          "Anti-Crush transparent tube design",
          "Atraumatic soft rounded, beveled open tip with one lateral eye",
          "Color-coded plain connector for easy size identification",
        ],
      },
      {
        name: "Suction Tip & Catheter",
        description:
          "Medical device used to extract bodily secretions, such as mucus or saliva from the upper airway.",
        material: "Plastic PVC",
        usage: "Hospital, ICU, Emergency",
        priceRange: "Rs 5",
        length: "53 cm",
        size: "FG 8, 10, 12, 14, 16, 18",
        features: [
          "Radio-opaque, soft, kink-free non-toxic PVC tube",
          "Atraumatic soft rounded, beveled open tip with one lateral eye",
          "Color-coded plain connector for rapid size identification",
        ],
      },
      {
        name: "Angiographic Catheter",
        description:
          "Plastic tube which functions as a conduit for contrast, fluids and pressure measurement during cardiac catheterization of coronary arteries and the left ventricle.",
        material: "Polyurethane (Plastic), Single Wire Braiding",
        usage: "Hospital, Cath Lab, Cardiology",
        sterilized: "Sterilized, Disposable",
        priceRange: "Rs 900 per packet",
        length: "100 cm",
        size: "Thickness: 0.038 Inch",
        features: [
          "High torque transmission with single-wire braided shaft",
          "Winged hub for ergonomic manipulation",
          "Conduit for contrast media injection and hemodynamic pressure measurement",
        ],
      },
      {
        name: "Hemodialysis Catheter",
        description:
          "Catheter used for exchanging blood to and from a hemodialysis machine and a patient during acute or chronic renal therapy.",
        material: "Silicone",
        usage: "Hospital, Nephrology, Dialysis",
        sterilized: "Sterilized",
        priceRange: "Rs 1,200 / pc",
        length: "13.5 - 20 cm",
        size: "11.5 Fr to 12 Fr",
        features: [
          "Optimized lumen geometry for maximum blood flow rates",
          "Soft silicone construction to minimize vessel trauma",
        ],
      },
      {
        name: "Multiple Lumen Catheter",
        description:
          "Single catheter with more than one internal channel (lumen). Different intravenous infusions can be connected to each lumen, exiting at slightly different points along the catheter.",
        material: "Radiopaque Polyurethane (PU)",
        usage: "Hospital, ICU, Critical Care",
        sterilized: "Sterilized, Disposable",
        priceRange: "Rs 1,350 to 2,000 / pc",
        size: "Fr 12 to Fr 16 / Length 16 - 30 cm",
        features: [
          "Complete Seldinger Technique Insertion Set",
          "Radiopaque Polyurethane Catheter & Vessel Dilator",
          "Y-shape Introducer Needle (18G x 7cm)",
          "One injection cap per lumen, optional suture loop with box clamp",
          "0.035\" x 60cm guide wire with straight & J-tip and insertion device",
          "5ml syringe with 22g Needle",
        ],
      },
      {
        name: "Intramuscular Pressure Monitoring Catheter",
        description:
          "Monitors fluent blood pressure accurately and connects patient to syringe infusion pump across multiple clinical configurations.",
        material: "Transparent PVC",
        usage: "Hospital, ICU, Critical Care",
        priceRange: "Rs 12 to 23",
        length: "13 cm, 25 cm, 50 cm, 100 cm, 150 cm (0.50m, 1.40m, 2.00m, 5.00m, 8.50m)",
        features: [
          "High-pressure monitoring integrity without compliance loss",
          "Accurate connection between patient and syringe infusion pump",
        ],
      },
      {
        name: "Nasal Oxygen Catheter",
        description:
          "Delivers supplemental oxygen or increased airflow to a patient in need of respiratory help via nasopharyngeal route.",
        material: "Medical PVC",
        usage: "Hospital, Respiratory Ward",
        priceRange: "Rs 13 to 20",
        length: "40 cm",
        size: "FG 8, 10, 12, 14",
        packaging: "Single Piece in PE Pouch",
        features: [
          "Lightweight tube splitting into dual prongs placed in nostrils",
          "Smooth atraumatic edges for prolonged patient comfort",
        ],
      },
      {
        name: "Urethral Catheter / Nelaton Catheter / Foley Catheter",
        description:
          "Indicated for catheterization of the urinary tract during intraoperative procedures and postoperative bladder management.",
        material: "PVC",
        usage: "Hospital, Clinical Urology",
        priceRange: "Rs 4 to 35",
        length: "400 mm",
        size: "FG 8, 10, 12, 14, 18, 20, 21, 24",
        features: [
          "Funnel shaped connector for secure drainage unit attachment",
          "Smooth atraumatic insertion with dual lateral eyes",
        ],
      },
      {
        name: "Urethrographic Male Catheter",
        description:
          "In Descending Urethrography, a catheter placed to fill the bladder with a solution containing contrast medium, and then removed.",
        material: "Medical Grade PVC",
        usage: "Hospital, Radiology, Urology",
        priceRange: "Custom Quote (NA)",
        size: "30 mm - 15 mm",
        features: ["Designed specifically for contrast medium instillation into bladder"],
      },
      {
        name: "Nasopharyngeal Catheter / Airway (NPA)",
        description:
          "Airway adjunct (nasal trumpet) designed to be inserted into the nasal passageway to secure an open airway. Features flared trumpet end.",
        material: "Soft, non-irritant medical grade PVC (Light Blue)",
        usage: "Hospital, Emergency, Anesthesia",
        sterilized: "Sterilized (E.T.O. Sterile & Pyrogen Free, Disposable)",
        priceRange: "Rs 135 to 180",
        packaging: "Packet",
        features: [
          "Anatomically designed with smooth round edges",
          "Thin wall and kink resistance for maximum patient comfort",
          "Flared end prevents airway loss into nasal cavity",
        ],
      },
      {
        name: "Single Needle Hemodialysis Catheter / Blood Lines",
        description:
          "Bloodlines connecting the patient to the dialyzer filter during hemodialysis kidney failure treatment.",
        material: "PVC, HDPE, Polycarbonate",
        usage: "Hospital, Dialysis Centers",
        sterilized: "Sterilized",
        priceRange: "Rs 230 to 850",
        features: [
          "Priming volume: 0.10 ml",
          "Integrated pressure sensor protector lines",
          "Smooth inner lumen to prevent hemolysis and clotting",
        ],
      },
    ],
    applications: [
      "ICU",
      "Critical Care",
      "Dialysis",
      "Urology",
      "Cardiology",
      "Respiratory Care",
    ],
  },
  {
    id: "respiratory",
    title: "Respiratory Care",
    navLabel: "Respiratory",
    description:
      "High-quality airway management products developed for oxygen therapy, suction, and respiratory support.",
    icon: Wind,
    products: [
      {
        name: "Tracheostomy Tube / Tracheal Tube",
        description:
          "A high-volume, low-pressure cuff provides an airtight fit between tube and trachea, offering typical inflation near the distal tip to help secure it in place and protect the airway from blood, gastric contents, and secretions.",
        material: "PVC, Polystyrene",
        usage: "Hospital, ICU, Surgical Airway",
        priceRange: "Rs 20 to 40 / 15%",
        size: "2.5 mm to 9.0 mm",
        features: [
          "High-volume, low-pressure cuff for tracheal wall protection",
          "Gas Monitoring Port: Yes",
          "Radio-opaque line for positioning confirmation",
        ],
      },
      {
        name: "Tonsil Suction Tube (Yankauer Tonsil Aspirator)",
        description:
          "The Yankauer tonsil aspirator is used for precision suction in the oral cavity and pharyngeal area to remove blood, saliva, and fragments of tissue and bone. The end of the suction is rounded to be gentle on soft tissue with suction holes on the sides. Detachable tip for easy cleaning.",
        material: "PVC (Anti-broken material)",
        usage: "Hospital, OT, Dental & Pharyngeal Surgery",
        sterilized: "Disposable (Yes)",
        priceRange: "Rs 30 to 40",
        length: "210 cm, 250 cm, 300 cm (and 1.8m Suction tube)",
        features: [
          "Available with Crown tip and Plain tip",
          "Options: With slid vent, without vent, with 1.8m suction tube",
          "100% Latex-free, shatter-resistant construction",
          "Side holes around rounded atraumatic tip",
        ],
      },
      {
        name: "Nasal Oxygen Catheter",
        description:
          "Delivers supplemental oxygen via nasopharyngeal route with dual prongs fitted into the nostrils.",
        material: "Medical PVC",
        usage: "Hospital, Oxygen Therapy",
        priceRange: "Rs 13 to 20",
        length: "40 cm",
        size: "FG 8, 10, 12, 14",
        packaging: "Single Piece in PE Pouch",
        features: ["Kink-resistant lightweight tubing", "Soft nasal prongs for comfort"],
      },
      {
        name: "Tracheobronchial Suction Catheter",
        description:
          "Removes bodily secretions from trachea and bronchial tree during mechanical ventilation.",
        material: "PVC, Polystyrene",
        usage: "Hospital, Critical Care",
        priceRange: "Rs 3 to 8",
        length: "53 cm",
        size: "FG 8, 10, 12, 14, 16, 18",
        features: ["Anti-crush transparent tube", "Atraumatic beveled open tip"],
      },
      {
        name: "Nasopharyngeal Catheter / Airway",
        description:
          "Nasal trumpet airway adjunct inserted into the nasal passageway to secure an unobstructed open airway.",
        material: "Soft, non-irritant medical PVC (Light Blue)",
        usage: "Hospital, Emergency, Anesthesia",
        priceRange: "Rs 135 to 180",
        features: ["Anatomically designed smooth round edges", "Thin wall, kink-resistant"],
      },
      {
        name: "Suction Tip & Catheter",
        description:
          "Extracts bodily secretions such as mucus or saliva from the upper respiratory airway.",
        material: "Plastic PVC",
        usage: "Hospital",
        priceRange: "Rs 5",
        length: "53 cm",
        size: "FG 8, 10, 12, 14, 16, 18",
        features: ["Color-coded plain connector", "Radio-opaque line"],
      },
    ],
    features: [
      "Soft medical-grade PVC",
      "Kink resistant",
      "Sterile disposable",
      "Patient comfort design",
    ],
  },
  {
    id: "urology",
    title: "Urology Solutions",
    navLabel: "Urology",
    description:
      "Reliable urinary drainage and catheterization devices for hospitals and clinical applications.",
    icon: ShieldCheck,
    products: [
      {
        name: "Urinary Drainage Unit (Carrying Urine Collection Bag)",
        description:
          "Qualitative range of carrying urine collection bags for catering to diversified patient drainage requirements in hospitals and nursing homes.",
        material: "Medical Grade PVC",
        usage: "Hospital, Clinics, Wards",
        priceRange: "Rs 12.80",
        packaging: "(10 Pcs in Polybag) x (25 bags in carton) = 250 Pcs per carton",
        features: [
          "Type: Poly bag with clear graduated volume markings",
          "Non-return flutter valve to prevent backflow and infection",
          "Kink-resistant drainage tube with universal connector",
        ],
      },
      {
        name: "Foley Catheter",
        description:
          "Indicated for long-term or intraoperative urinary tract catheterization with symmetrical retention balloon.",
        material: "PVC / Silicone Elastomer",
        usage: "Hospital, Urology",
        priceRange: "Rs 4 to 35",
        length: "400 mm",
        size: "FG 8, 10, 12, 14, 18, 20, 21, 24",
        features: ["Smooth funnel connector", "Soft rounded atraumatic tip"],
      },
      {
        name: "Nelaton Catheter",
        description:
          "Indicated for short-term bladder drainage and catheterization through the urethra.",
        material: "Medical Grade PVC",
        usage: "Hospital, Urology",
        priceRange: "Rs 4 to 35",
        length: "400 mm",
        size: "FG 8 to FG 24",
        features: ["Funnel shaped connector", "Dual lateral eyes for rapid drainage"],
      },
      {
        name: "Urethral Catheter",
        description:
          "Catheterization of the urinary tract during intraoperative procedures.",
        material: "PVC",
        usage: "Hospital, Intraoperative Drainage",
        priceRange: "Rs 4 to 35",
        length: "400 mm",
        size: "FG 8, 10, 12, 14, 18, 20, 21, 24",
        features: ["Funnel connector", "Thermo-sensitive soft medical PVC"],
      },
      {
        name: "Urethrographic Male Catheter",
        description:
          "Placed in the bladder during Descending Urethrography to fill with contrast medium solution, then removed.",
        material: "PVC",
        usage: "Hospital, Diagnostic Radiology",
        priceRange: "Custom Quote (NA)",
        size: "30 mm - 15 mm",
        features: ["Specialized for male retrograde and descending urethrography"],
      },
    ],
    features: [
      "Funnel connector",
      "Multiple FG sizes",
      "Sterile disposable",
      "Smooth atraumatic insertion",
    ],
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    navLabel: "Gastroenterology",
    description:
      "Enteral feeding and gastrointestinal care devices manufactured with medical-grade materials.",
    icon: Stethoscope,
    products: [
      {
        name: "Ryles Tube",
        description:
          "Special tube that carries food and medicine to the stomach through the nose. It can be used for all feedings or for giving a person extra calories.",
        material: "PVC-PP (Polypropylene / PVC)",
        usage: "Clinical, Hospital",
        sterilized: "Yes (Sterilized)",
        priceRange: "Rs 11.70",
        size: "FG 08, 10, 12, 14, 16",
        features: [
          "Color: Transparent with depth markings",
          "Carries food, enteral nutrition and medicine to stomach through nose",
          "Smooth outer surface to minimize esophageal tissue irritation",
        ],
      },
      {
        name: "Feeding Tube (Infant Feeding Tube)",
        description:
          "Assortment of infant feeding tubes designed for enteral nutrition in pediatric, clinical, and veterinary applications.",
        material: "Smooth, non-toxic, non-irritant, flexible medical-grade PVC",
        usage: "Clinical Purpose, Veterinary Purpose, Hospital",
        sterilized: "Sterile, Non-toxic and Pyrogen Free (ETO Sterilization)",
        priceRange: "Rs 3.60",
        size: "FG 5, 6, 7, 8, 9, 10",
        packaging: "Poly bag packing",
        features: [
          "Siliconized and smooth with rounded outer surface finish for minimal tissue irritation",
          "Thermo-sensitive material softens at body temperature to conform to internal anatomy",
          "Transparent for ease of checking for obstruction",
          "Nested tips and eyes for optimal fluid distribution",
          "X-ray visible full-length radio-opaque line",
          "Easy and aseptic removal from package",
        ],
      },
      {
        name: "Infant Mucus Extractor / Feeding Set",
        description:
          "Aspiration of mucus from newborn infant's upper airways to ensure immediate unobstructed breathing.",
        material: "Medical Grade PVC",
        usage: "Neonatal Care, Maternity Wards",
        sterilized: "Yes (EO Sterile)",
        priceRange: "Rs 3.60 to 15.00",
        size: "FG 6, 8, 10",
        features: [
          "Transparent graduated chamber",
          "Soft suction catheter with rounded tip",
        ],
      },
    ],
    features: [
      "EO Sterile",
      "Soft PVC",
      "X-ray visible",
      "Non-toxic & pyrogen free",
    ],
  },
  {
    id: "perfusion",
    title: "Perfusion Accessories",
    navLabel: "Perfusion",
    description:
      "Essential accessories for pressure monitoring, infusion management, and perfusion systems.",
    icon: GitMerge,
    products: [
      {
        name: "I.V. Flow Regulator",
        description:
          "Used to accurately control & regulate the flow of I.V. fluids directly into a vein without requiring electronic pumps.",
        material: "Medical Polycarbonate, Non-Latex, Non-DEHP",
        usage: "Hospital, Infusion Therapy",
        priceRange: "Rs 30 to 80",
        length: "125 cm tube length",
        packaging: "Individual blister packs",
        features: [
          "Simply dial the ml/hour for precise flow regulation",
          "Smooth-veering translucent flow regulator dial with range of 1ml - 250ml per hour",
          "100% Non-Latex and non-DEHP",
        ],
      },
      {
        name: "3way Stopcock as an Accessory to Perfusion Sets",
        description:
          "Manufactured from transparent polycarbonate/PE for pressure infusion and drug administration lines.",
        material: "Transparent Polycarbonate / PE",
        usage: "Clinical, Hospital (Single Use Only)",
        sterilized: "Yes (E.T.O. Sterile & Pyrogen Free)",
        priceRange: "Rs 11 to 25",
        features: [
          "Inside is completely smooth bore for non-turbulent fluid transfer",
          "Available with rotating male luer lock connector",
          "Manufactured from non-toxic medical grade material",
          "Color options: Red, White, Blue",
        ],
      },
      {
        name: "Needle Free Connector",
        description:
          "Needleless connectors (NCs) are essential devices which connect to the end of vascular catheters and enable catheter access for infusion and aspiration.",
        material: "Polypropylene body, Silicone injection site",
        usage: "Hospital, Blood Dialysis Treatment, Vascular Catheters",
        sterilized: "Yes (Latex-free and DEHP-free)",
        priceRange: "Rs 10 to 42",
        length: "PVC Tube Length: 10 - 300 cm / Extension Tube: 10 - 30 cm",
        features: [
          "PV-I straight form structural composition: interface, joint, piston, and silicon spring",
          "Positive Pressure Type valve prevents blood reflux and clotting",
          "All materials are 100% latex-free and DEHP-free",
        ],
      },
      {
        name: "Heat And Moisture Exchange / Filter (HME Filter)",
        description:
          "Heat and Moisture Exchangers (HME) commercial humidification system for anesthesia and mechanical ventilation in ICU.",
        material: "Polypropylene housing, electrostatic filter media",
        usage: "Hospital, Anesthesia, Mechanical Ventilation",
        sterilized: "Yes",
        priceRange: "Rs 50 to 350 / pc",
        size: "Connections: 22M/15F - 22F/15M (Available sizes: 20G to 27G x 3.5\")",
        features: [
          "Moisture output: 31 mg H2O/L",
          "Filtration efficiency: 99.99% bacterial & viral retention",
          "Tidal volume range: 150 - 1500 ml",
          "Gas Monitoring Port: Yes",
        ],
      },
      {
        name: "Y Connector as an Accessory to Perfusion Sets",
        description:
          "A device in the shape of the letter Y that connects the end of one piece of tubing to two outlets for concurrent infusions.",
        material: "Polycarbonate (Color: Transparent)",
        usage: "Hospital / Clinical",
        sterilized: "Yes (Sterile / Disposable / Individually Packed)",
        priceRange: "Rs 35 to 250",
        length: "20 cm extension tube",
        features: [
          "Manual flow rate range from 5ml/hr to 250ml/hr",
          "Built-on 'Y' Connector Injection site for extra medication",
          "Male and female luer lock compatible with standard infusion devices",
          "Available in DEHP-Free material",
        ],
      },
      {
        name: "Manifolds",
        description:
          "Provides 3-way flow (from inlet to outlet, inlet to side-port, or side-port to outlet) by use of the handle on the top of the stopcock to open and close lines. Also used to reduce lines down to one for drug infusion.",
        material: "Plastic, Polycarbonate",
        usage: "Hospital, Hemodynamics, Angiography",
        sterilized: "Yes (Ethylene Oxide Sterile)",
        priceRange: "Rs 180 to 240",
        packaging: "Packet",
        features: [
          "Working Pressure: 250 psi, 500 psi, 800 psi ratings",
          "Port Sizes: 2 Port, 3 Port; rotating luer and block body / half body styles",
          "Large bore (.091\" / 2.3mm) inner lumen throughout, including rotator",
          "Control operation with 6\" (15.4cm) extended rotator",
          "Control ordering option with 146 styles",
        ],
      },
      {
        name: "Extension Sets",
        description:
          "Available with low pressure resistance designed for infusion bags and high pressure resistance designed for infusion pumps. Prevents dislodgement of catheter and adds length to existing tubing.",
        material: "Medical Grade PVC, DEHP-Free, Latex-Free",
        usage: "Hospital, Infusion Pumps & Bags",
        sterilized: "Yes",
        priceRange: "Rs 16 to 40",
        length: "8 in (20 cm)",
        packaging: "Poly pack / box",
        features: [
          "Removable Sure-Lok® Needle-Free Connector",
          "Precision pinch clamp & rotating male luer lock",
          "Priming volume: 1.8 mL",
          "High pressure and low pressure resistance variants",
        ],
      },
    ],
    features: [
      "Transparent polycarbonate body",
      "Rotating luer lock",
      "Positive pressure valve",
      "High pressure resistance",
      "DEHP free",
      "Sterile disposable",
    ],
  },
  {
    id: "vascular-access",
    title: "Vascular Access",
    navLabel: "Vascular Access",
    description:
      "Safe venous and arterial access devices for diagnostic and therapeutic procedures.",
    icon: HeartPulse,
    products: [
      {
        name: "Venous Cannula",
        description:
          "Intravenous cannulation device placed inside a vein to provide venous access for sampling of blood, administration of fluids, medications, parenteral nutrition, chemotherapy, and blood products.",
        material: "Polypropylene",
        usage: "Hospital, Critical Care",
        sterilized: "Yes",
        length: "21 cm",
        size: "28/36FR, 30/38FR, 32/40FR, 34/46FR, 36/46FR, 36/51FR, 38/46FR",
        features: [
          "Provides secure venous access for fluids and chemotherapy",
          "High flow rate lumen with thin wall technology",
        ],
      },
      {
        name: "Intravenous Cannula (IV Cannula)",
        description:
          "I.V. Cannula is designed with or without wings. It ensures painless & smooth penetration. Biologically acceptable radiopaque shaft with metallic needle.",
        material: "PVC, Teflon-made radiopaque shaft with metallic needle",
        usage: "Hospital, Clinic",
        sterilized: "Yes (E.T.O. Sterile & Pyrogen Free)",
        priceRange: "Rs 4 to 7",
        features: [
          "Designed with/without wings for painless and smooth penetration",
          "Injection port with one-way valve with flange attached to catheter shaft",
          "Injection port with color-coded cap for size identification",
          "Standard size hub attached to distal end for IV line attachment",
          "Transparent blister packing with Tyvek paper",
        ],
      },
      {
        name: "Arterial Cannula",
        description:
          "Inserted into an artery, commonly the radial artery, and used during major operations and in critical care areas to measure beat-to-beat blood pressure and to draw repeated blood samples.",
        material: "PVC, PC, Stainless steel (SS needle)",
        usage: "Hospital, Critical Care, Cardiac Surgery",
        priceRange: "Rs 1 to 6 per pc",
        size: "18 - 22 mm",
        packaging: "Packet",
        features: [
          "Inserted into radial artery for continuous arterial pressure monitoring",
          "Enables painless repeated arterial blood gas (ABG) sampling",
        ],
      },
      {
        name: "Coronary Artery Cannula (Coronary Ostial Perfusion Cannula)",
        description:
          "Intended for use in delivery of cardioplegia solution directly to the coronary arteries during cardiopulmonary bypass surgery.",
        material: "Medical Grade PVC with malleable stainless steel shaft",
        usage: "Hospital, Open Heart Surgery",
        sterilized: "Sterilized (Poly Pouch)",
        priceRange: "Custom Quote (NA)",
        size: "10 fr, 12 fr, 14 fr (Length: 21 cm)",
        features: [
          "Different configurations: 45° or 90° tip",
          "Atraumatic basket tip to prevent ostial injury",
          "Malleable stainless steel shaft for precision positioning",
        ],
      },
      {
        name: "Ventricular Cannula",
        description:
          "For use in neurosurgical procedures. Specially designed to penetrate delicate brain tissue and give continued access to brain's ventricular system.",
        material: "Precision Surgical Steel",
        usage: "Hospital, Neurosurgery",
        size: "3 x 90 mm",
        features: [
          "Penetrates delicate brain tissue atraumatically",
          "Enables continued access to ventricular system for CSF drainage and pressure monitoring",
        ],
      },
    ],
    features: [
      "Radiopaque catheter",
      "Butterfly wings",
      "Injection port",
      "EO sterile",
      "Color coded sizes",
    ],
  },
  {
    id: "surgical-drainage",
    title: "Surgical Drainage",
    navLabel: "Surgical Drainage",
    description:
      "Advanced wound drainage and surgical tubing systems for post-operative patient care.",
    icon: Scissors,
    products: [
      {
        name: "Closed Wound Drainage Tube or System",
        description:
          "Intended for evacuation of biological fluid from wound or body cavity during surgical procedure or in wound care management. A closed suction drain removes fluids that build up in areas of body after surgery or when one has an infection.",
        material: "PVC, Stainless Steel (SS), ABS, LDPE, HDPE",
        usage: "Hospital, General Surgery, Orthopedic & Plastic Surgery",
        priceRange: "Rs 99 to 135",
        size: "FG 6, 8, Adult FG 10, 12, 14, 16, 18",
        features: [
          "Negative pressure bellows bottle with graduated volume scale",
          "Curved sharp trocar needle for non-traumatic placement",
          "Prevents hematoma and post-surgical site infection",
        ],
      },
      {
        name: "Heart Lung Bypass Unit Tube",
        description:
          "Tubes placed in the heart to drain blood to the bypass machine during cardiopulmonary bypass surgery.",
        material: "Silicone / Rubber / PVC",
        usage: "Hospital, Cardiac Surgery",
        sterilized: "Yes",
        priceRange: "Custom Quote (NA)",
        features: [
          "Biocompatible non-thrombogenic smooth inner bore",
          "Extreme kink resistance under high volumetric flow",
        ],
      },
      {
        name: "Chest Drainage Catheter (With / Without Trocar)",
        description:
          "Atraumatic, soft rounded catheter for rapid evacuation of air and fluid from pleural cavity.",
        material: "PVC, HDPE, PP, SS",
        usage: "Hospital, Thoracic Surgery",
        sterilized: "Yes",
        priceRange: "Rs 24 to 74",
        length: "33 - 40 cm",
        size: "FG 20 to FG 40",
      },
      {
        name: "Peritoneal Dialysis Catheter (Curled)",
        description:
          "Flexible silicone catheter with Dacron cuffs for acute and chronic peritoneal dialysis drainage.",
        material: "Silicone rubber",
        usage: "Hospital, Nephrology",
        sterilized: "Yes",
        priceRange: "Over Rs 300 to 9,000 per set",
        length: "57 cm and 62 cm",
        packaging: "Poly Pack",
      },
    ],
    applications: ["OT", "ICU", "Cardiac Surgery", "General Surgery"],
  },
  {
    id: "needles",
    title: "Needles & Specialized Access",
    navLabel: "Needles",
    description:
      "Precision needles for anesthesia, dialysis, angiography, and specialized clinical procedures.",
    icon: Syringe,
    products: [
      {
        name: "Spinal Needles",
        description:
          "Spinal needles are used to inject analgesia and/or an anesthetic directly into the CSF usually at a point below the second lumbar vertebra. Spinal needles enter the cerebral spinal fluid (CSF) through the membranes surrounding the spinal cord.",
        material: "Stainless steel with Polycarbonate hub",
        usage: "Clinic / Hospital, Anesthesia",
        sterilized: "Yes",
        priceRange: "Rs 20 to 40",
        length: "70 mm (3.5 inches)",
        size: "Available in 11 sizes: 16G X 3.5\", 17G X 3.5\", 18G X 3.5\", 19G X 3.5\", 20G X 3.5\", 21G X 3.5\", 22G X 3.5\", 23G X 3.5\", 24G X 3.5\", 25G X 3.5\", 26G X 3.5\", 27G X 3.5\"",
        features: [
          "Transparent polycarbonate hub to offer rapid, easy CSF visualization",
          "Sharp bevel point for minimal dural puncture headache",
          "Precision-matched stylet prevents tissue coring",
        ],
      },
      {
        name: "Fistula Needle",
        description:
          "A Fistula cannula, Fistula catheter, or plastic needle that is designed specifically for hemodialysis cannulation. The metal needle is used to access an AVF (arteriovenous fistula) and to also guide the insertion of the plastic sheath into the vessel.",
        material: "Medical Plastic with Stainless Steel needle",
        usage: "Hospital, Hemodialysis Centers",
        sterilized: "Yes (Waterproof, Sterile)",
        priceRange: "Rs 12 to 20",
        length: "30 mm",
        size: "15 g, 16 g, and 17 g (Outer Diameter: 1.40 - 1.90 mm)",
        features: [
          "Relative humidity requirement: Less than 80%",
          "Waterproof and sterile construction",
          "Designed specifically for AVF access with minimal vessel trauma",
        ],
      },
      {
        name: "Angiographic Needle",
        description:
          "Angiographic needles have a unique hub design with an ergonomic feel and a black triangle indicator to orient the bevel. Used for percutaneous entry into veins. Gripped hub gives better control. Used for angiography.",
        material: "Surgical Stainless Steel",
        usage: "Hospital, Angiography & Cath Lab",
        brand: "Mecca",
        features: [
          "Unique ergonomic gripped hub for superior tactile puncture control",
          "Black triangle indicator to orient the bevel position",
          "Engineered for percutaneous vascular entry during angiography",
        ],
      },
      {
        name: "Single Needle Hemodialysis Catheter / Blood Lines",
        description:
          "Single-needle dialysis catheter and bloodlines circuit for exchanging blood to and from the dialyzer outside the body.",
        material: "PVC, HDPE, Polycarbonate",
        usage: "Hospital, Nephrology",
        sterilized: "Sterilized",
        priceRange: "Rs 230 to 850",
        features: [
          "Priming volume: 0.10 ml",
          "Smooth interior to maintain blood cell integrity during high pump velocity",
        ],
      },
      {
        name: "Disposable Hypodermic Needles",
        description:
          "Precision disposable needles for clinical injections, vaccine administration, and fluid aspiration.",
        material: "AISI 304 Stainless Steel with polypropylene hub",
        usage: "Hospital, Clinic",
        sterilized: "Yes (EO Sterile)",
        features: [
          "Sharp triple-bevel design with medical-grade precision",
          "Color-coded hubs conforming to international gauge standards",
        ],
      },
    ],
    features: [
      "Stainless steel",
      "Sterile disposable",
      "Sharp bevel design",
      "Medical-grade precision",
    ],
  },
];

/* ------------------------------------------------------------------------
 * 3. Catalogue-Inspired Geometric Decoration Component (GeoSquares)
 * ---------------------------------------------------------------------- */

function GeoSquares({
  className = "",
  variant = "panel",
}: {
  className?: string;
  variant?: "panel" | "badge" | "minimal";
}) {
  if (variant === "badge") {
    return (
      <div aria-hidden="true" className={`pointer-events-none select-none inline-flex items-center gap-1 opacity-75 ${className}`}>
        <div className="h-2 w-2 rounded-2xs bg-[#8B1E2D]" />
        <div className="h-2 w-2 rounded-2xs bg-[#3D5A80]" />
        <div className="h-2 w-2 rounded-2xs border border-[#3D5A80]" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <div className="relative h-28 w-28 md:h-36 md:w-36">
        <div className="absolute inset-0 rounded-xs border border-[#3D5A80]/30" />
        <div className="absolute left-3 top-3 h-full w-full rounded-xs border border-[#3D5A80]/20 bg-[#3D5A80]/5" />
        <div className="absolute left-7 top-7 h-14 w-14 rounded-xs bg-[#3D5A80]/10 border border-[#3D5A80]/30" />
        <div className="absolute -bottom-2 -left-2 grid grid-cols-3 gap-1 opacity-60">
          <div className="h-1.5 w-1.5 rounded-2xs bg-[#8B1E2D]" />
          <div className="h-1.5 w-1.5 rounded-2xs bg-[#3D5A80]" />
          <div className="h-1.5 w-1.5 rounded-2xs bg-[#002240]" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------
 * 4. Section Heading Component
 * ---------------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-16`}>
      {eyebrow && (
        <div className="eyebrow justify-center mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">
          {eyebrow}
        </div>
      )}
      <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray leading-relaxed text-base sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------------
 * 5. Reusable Product Category Card (Catalogue Style + Accordion)
 * ---------------------------------------------------------------------- */

/* ------------------------------------------------------------------------
 * 5. Reusable Product Category Card (Catalogue Style + Pro Interactive Specs)
 * ---------------------------------------------------------------------- */

function ProductCategoryCard({
  category,
  index,
  onQuickView,
  onInquire,
  onToggleQuote,
  isQuoteItem,
}: {
  category: ProductCategory;
  index: number;
  onQuickView: (product: ProductDetail, categoryTitle: string) => void;
  onInquire: (productName: string) => void;
  onToggleQuote: (productName: string) => void;
  isQuoteItem: (productName: string) => boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = category.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,34,64,0.04)] transition-all duration-300 hover:border-[#3D5A80]/40 hover:shadow-[0_12px_36px_rgba(0,34,64,0.08)]"
    >
      <div>
        {/* Card Header: Icon & Counter */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#3D5A80] transition-colors duration-300 group-hover:bg-[#002240] group-hover:text-white group-hover:border-[#002240]">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex items-center gap-2">
            <GeoSquares variant="badge" />
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-[#002240]">
              {category.products.length} Products
            </span>
          </div>
        </div>

        {/* Category Title & Description */}
        <div className="mt-5">
          <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-burgundy">
            Category 0{index + 1}
          </span>
          <h3 className="font-heading font-bold text-navy text-xl mt-1 group-hover:text-medblue transition-colors">
            {category.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray">
            {category.description}
          </p>
        </div>

        {/* Key Features or Applications Pills */}
        {(category.features || category.applications) && (
          <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
            {(category.features || category.applications)?.slice(0, 4).map((f, i) => (
              <span
                key={i}
                className="font-heading rounded-md bg-slate-50 border border-slate-200 px-2 py-0.5 text-[10px] font-medium text-slate-700"
              >
                {f}
              </span>
            ))}
          </div>
        )}

        {/* Product List Preview */}
        <div className="mt-5 rounded-xl bg-[#F8FAFC] border border-slate-100 p-3.5">
          <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-gray block mb-2">
            Included Formulations &amp; Sizes:
          </span>
          <ul className="space-y-1.5 text-xs text-navy">
            {category.products.slice(0, expanded ? undefined : 3).map((prod, idx) => (
              <li
                key={idx}
                onClick={() => onQuickView(prod, category.title)}
                className="flex items-center justify-between gap-2 p-1.5 rounded-lg hover:bg-white transition-colors cursor-pointer group/item"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-medblue" />
                  <span className="font-heading font-medium line-clamp-1 group-hover/item:text-burgundy transition-colors">
                    {prod.name}
                  </span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-burgundy shrink-0" />
              </li>
            ))}
          </ul>

          {/* Expandable detailed product accordion */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-3 border-t border-slate-200 space-y-3.5 overflow-hidden"
              >
                {category.products.map((prod, pIdx) => (
                  <div
                    key={pIdx}
                    className="rounded-xl bg-white border border-slate-200 p-3.5 text-xs space-y-2.5 shadow-2xs transition-all hover:border-medblue/40"
                  >
                    {/* Header: Product Name & Badges */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="font-heading font-bold text-navy text-xs leading-snug">
                        {prod.name}
                      </h4>
                      <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
                        {prod.brand && (
                          <span className="font-heading text-[10px] text-indigo-700 font-bold bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded">
                            {prod.brand}
                          </span>
                        )}
                        {prod.sterilized && (
                          <span className="font-heading text-[10px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded">
                            Sterile
                          </span>
                        )}
                        {prod.priceRange && (
                          <span className="font-heading text-[10px] text-burgundy font-bold bg-rose-50 border border-rose-100 px-1.5 py-0.5 rounded">
                            {prod.priceRange}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Medical Description from Catalogue Slide */}
                    {prod.description && (
                      <p className="text-[11px] leading-relaxed text-slate-600 bg-slate-50/90 p-2.5 rounded-lg border border-slate-100">
                        {prod.description}
                      </p>
                    )}

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 pt-1 text-[11px] text-slate-600">
                      {prod.usage && (
                        <div>
                          <strong className="text-slate-800">Usage:</strong> {prod.usage}
                        </div>
                      )}
                      {prod.material && (
                        <div>
                          <strong className="text-slate-800">Material:</strong> {prod.material}
                        </div>
                      )}
                      {prod.size && (
                        <div>
                          <strong className="text-slate-800">Size:</strong> {prod.size}
                        </div>
                      )}
                      {prod.length && (
                        <div>
                          <strong className="text-slate-800">Length:</strong> {prod.length}
                        </div>
                      )}
                      {prod.packaging && (
                        <div className="sm:col-span-2">
                          <strong className="text-slate-800">Packaging:</strong> {prod.packaging}
                        </div>
                      )}
                    </div>

                    {/* Features List */}
                    {prod.features && prod.features.length > 0 && (
                      <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600 space-y-1">
                        <span className="font-semibold text-slate-700 block text-[10px] uppercase tracking-wider">
                          Key Specifications:
                        </span>
                        {prod.features.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-1.5">
                            <CheckCircle className="h-3 w-3 mt-0.5 text-[#3D5A80] shrink-0" />
                            <span className="leading-tight">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Interactive Product Actions */}
                    <div className="pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => onQuickView(prod, category.title)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#002240] hover:text-[#8B1E2D] transition-colors py-1 px-2 rounded-lg hover:bg-slate-100"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#3D5A80]" />
                        <span>Full Specifications</span>
                      </button>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => onToggleQuote(prod.name)}
                          className={`inline-flex items-center gap-1 text-[11px] font-semibold py-1 px-2.5 rounded-lg border transition-all ${
                            isQuoteItem(prod.name)
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          {isQuoteItem(prod.name) ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span>In Quote</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3 h-3 text-slate-500" />
                              <span>Add</span>
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => onInquire(prod.name)}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#8B1E2D] hover:bg-[#a82437] text-white py-1 px-2.5 rounded-lg shadow-2xs transition-all cursor-pointer"
                        >
                          <FileText className="w-3 h-3" />
                          <span>Quote</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Accordion Toggle Action */}
      <button
        type="button"
        suppressHydrationWarning
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="mt-6 inline-flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-[#002240] transition-all hover:border-[#3D5A80] hover:bg-[#F8FAFC]"
      >
        <span>
          {expanded
            ? "Collapse Specifications"
            : `View All ${category.products.length} Products & Specs`}
        </span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-[#3D5A80]" />
        ) : (
          <ChevronDown className="h-4 w-4 text-[#3D5A80]" />
        )}
      </button>
    </motion.div>
  );
}

/* ------------------------------------------------------------------------
 * 5B. Clinical Master Table View (Pro Procurement & Distributor Layout)
 * ---------------------------------------------------------------------- */

function ClinicalTableView({
  products,
  onQuickView,
  onInquire,
  onToggleQuote,
  isQuoteItem,
}: {
  products: (ProductDetail & {
    categoryId: string;
    categoryTitle: string;
    categoryNav: string;
  })[];
  onQuickView: (product: ProductDetail, categoryTitle: string) => void;
  onInquire: (productName: string) => void;
  onToggleQuote: (productName: string) => void;
  isQuoteItem: (productName: string) => boolean;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-border bg-[#F8FAFC] text-gray uppercase tracking-wider text-[10px] font-heading font-bold">
              <th className="py-4 px-5">Medical Device</th>
              <th className="py-4 px-4">Category</th>
              <th className="py-4 px-4 hidden md:table-cell">Material &amp; Build</th>
              <th className="py-4 px-4 hidden sm:table-cell">Size / Length</th>
              <th className="py-4 px-4 hidden lg:table-cell">Packaging</th>
              <th className="py-4 px-4">Indicative Price</th>
              <th className="py-4 px-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {products.map((prod, idx) => (
              <tr
                key={idx}
                className="group hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                onClick={() => onQuickView(prod, prod.categoryTitle)}
              >
                <td className="py-3.5 px-5">
                  <div className="font-heading font-semibold text-navy group-hover:text-medblue transition-colors text-xs sm:text-sm">
                    {prod.name}
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    {prod.brand && (
                      <span className="text-[9px] font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100">
                        {prod.brand}
                      </span>
                    )}
                    {prod.sterilized && (
                      <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                        Sterile
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span className="inline-block rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-[#002240]">
                    {prod.categoryNav}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-slate-600 hidden md:table-cell max-w-[180px] truncate" title={prod.material}>
                  {prod.material || "Medical Polymer"}
                </td>
                <td className="py-3.5 px-4 text-slate-600 hidden sm:table-cell">
                  {prod.size || prod.length || "Standard"}
                </td>
                <td className="py-3.5 px-4 text-slate-500 hidden lg:table-cell max-w-[160px] truncate" title={prod.packaging}>
                  {prod.packaging || "Carton / Poly Pack"}
                </td>
                <td className="py-3.5 px-4">
                  {prod.priceRange ? (
                    <span className="font-semibold text-[#8B1E2D] bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-full text-[11px]">
                      {prod.priceRange}
                    </span>
                  ) : (
                    <span className="text-slate-400 italic text-[11px]">Custom Quote</span>
                  )}
                </td>
                <td className="py-3.5 px-5 text-right" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      type="button"
                      onClick={() => onQuickView(prod, prod.categoryTitle)}
                      title="Quick View Full Specs"
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-[#002240] hover:bg-slate-100 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onToggleQuote(prod.name)}
                      title={isQuoteItem(prod.name) ? "Remove from Quote" : "Add to Quote"}
                      className={`p-1.5 rounded-lg border transition-all ${
                        isQuoteItem(prod.name)
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {isQuoteItem(prod.name) ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => onInquire(prod.name)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#8B1E2D] hover:bg-[#a82437] text-white px-2.5 py-1.5 rounded-lg shadow-2xs transition-all cursor-pointer"
                    >
                      <span>Quote</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------
 * 5C. Product Quick View Modal (Clinical Specs Deep-Dive)
 * ---------------------------------------------------------------------- */

function ProductQuickViewModal({
  item,
  onClose,
  onInquire,
  onToggleQuote,
  isQuoteItem,
}: {
  item: { product: ProductDetail; categoryTitle: string } | null;
  onClose: () => void;
  onInquire: (productName: string) => void;
  onToggleQuote: (productName: string) => void;
  isQuoteItem: (productName: string) => boolean;
}) {
  if (!item) return null;
  const { product: prod, categoryTitle } = item;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#002240]/60 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto border border-slate-200"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div>
          <span className="font-heading inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-burgundy bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-100 mb-2">
            {categoryTitle}
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy leading-snug">
            {prod.name}
          </h3>
        </div>

        {/* Status Badges */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {prod.brand && (
            <span className="text-xs text-indigo-700 font-bold bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full">
              Brand: {prod.brand}
            </span>
          )}
          {prod.sterilized && (
            <span className="text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">
              Sterility: {prod.sterilized}
            </span>
          )}
          {prod.priceRange && (
            <span className="text-xs text-[#8B1E2D] font-bold bg-rose-50 border border-rose-100 px-2.5 py-0.5 rounded-full">
              Price: {prod.priceRange}
            </span>
          )}
          <span className="text-xs text-slate-600 font-medium bg-slate-100 px-2.5 py-0.5 rounded-full">
            ISO 13485 &amp; WHO-GMP Validated
          </span>
        </div>

        {/* Description */}
        {prod.description && (
          <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm leading-relaxed text-slate-700">
            <strong className="text-[#002240] block mb-1 font-semibold uppercase text-[10px] tracking-wider">
              Clinical Indication &amp; Function
            </strong>
            {prod.description}
          </div>
        )}

        {/* Technical Specifications Grid */}
        <div className="mt-5 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            Technical Specifications
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {prod.usage && (
              <div className="p-2.5 rounded-lg border border-slate-100 bg-white">
                <span className="text-slate-400 block text-[10px] uppercase">Usage / Setting</span>
                <span className="font-medium text-slate-800">{prod.usage}</span>
              </div>
            )}
            {prod.material && (
              <div className="p-2.5 rounded-lg border border-slate-100 bg-white">
                <span className="text-slate-400 block text-[10px] uppercase">Material</span>
                <span className="font-medium text-slate-800">{prod.material}</span>
              </div>
            )}
            {prod.size && (
              <div className="p-2.5 rounded-lg border border-slate-100 bg-white">
                <span className="text-slate-400 block text-[10px] uppercase">Size / Gauge</span>
                <span className="font-medium text-slate-800">{prod.size}</span>
              </div>
            )}
            {prod.length && (
              <div className="p-2.5 rounded-lg border border-slate-100 bg-white">
                <span className="text-slate-400 block text-[10px] uppercase">Length</span>
                <span className="font-medium text-slate-800">{prod.length}</span>
              </div>
            )}
            {prod.packaging && (
              <div className="p-2.5 rounded-lg border border-slate-100 bg-white sm:col-span-2">
                <span className="text-slate-400 block text-[10px] uppercase">Standard Packaging</span>
                <span className="font-medium text-slate-800">{prod.packaging}</span>
              </div>
            )}
          </div>
        </div>

        {/* Features Checklist */}
        {prod.features && prod.features.length > 0 && (
          <div className="mt-5 pt-4 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Salient Engineering Features
            </span>
            <div className="space-y-1.5 text-xs text-slate-700">
              {prod.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-[#3D5A80] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => onToggleQuote(prod.name)}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold border transition-all cursor-pointer ${
              isQuoteItem(prod.name)
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {isQuoteItem(prod.name) ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Selected in Quote</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-slate-500" />
                <span>Add to Inquiry List</span>
              </>
            )}
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onInquire(prod.name);
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-[#8B1E2D] px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-[#a82437] transition-all cursor-pointer"
          >
            <span>Request Institutional Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------------
 * 6. Main Mecca Catalogue & Vision-Mission Page Component
 * ---------------------------------------------------------------------- */

export default function MeccaCataloguePage() {
  const { openQuoteModal, addToQuote, toggleQuoteItem, isItemInQuote } =
    useQuoteModal();
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStandard, setSelectedStandard] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedProductModal, setSelectedProductModal] = useState<{
    product: ProductDetail;
    categoryTitle: string;
  } | null>(null);

  // Flattened list of all products for search, counter and table view
  const allProducts = useMemo(() => {
    return CATEGORIES.flatMap((cat) =>
      cat.products.map((prod) => ({
        ...prod,
        categoryId: cat.id,
        categoryTitle: cat.title,
        categoryNav: cat.navLabel,
      }))
    );
  }, []);

  // Filtered by Search Query, Category Tab, and Standard filter
  const filteredCategories = useMemo(() => {
    return CATEGORIES.map((cat) => {
      if (activeTab !== "All" && cat.navLabel !== activeTab) {
        return null;
      }

      const matchingProducts = cat.products.filter((prod) => {
        const query = searchQuery.trim().toLowerCase();
        const matchesSearch =
          query === "" ||
          prod.name.toLowerCase().includes(query) ||
          (prod.description && prod.description.toLowerCase().includes(query)) ||
          (prod.material && prod.material.toLowerCase().includes(query)) ||
          (prod.size && prod.size.toLowerCase().includes(query)) ||
          (prod.length && prod.length.toLowerCase().includes(query)) ||
          (prod.usage && prod.usage.toLowerCase().includes(query)) ||
          (prod.packaging && prod.packaging.toLowerCase().includes(query)) ||
          (prod.features &&
            prod.features.some((f) => f.toLowerCase().includes(query)));

        let matchesStandard = true;
        if (selectedStandard === "sterile") {
          matchesStandard = !!(
            prod.sterilized && prod.sterilized.toLowerCase().includes("steril")
          );
        } else if (selectedStandard === "dehp") {
          matchesStandard = !!(
            (prod.material &&
              (prod.material.toLowerCase().includes("dehp") ||
                prod.material.toLowerCase().includes("latex"))) ||
            (prod.features &&
              prod.features.some(
                (f) =>
                  f.toLowerCase().includes("dehp") ||
                  f.toLowerCase().includes("latex")
              ))
          );
        } else if (selectedStandard === "critical") {
          matchesStandard = !!(
            (prod.usage &&
              (prod.usage.toLowerCase().includes("icu") ||
                prod.usage.toLowerCase().includes("critical") ||
                prod.usage.toLowerCase().includes("surgery") ||
                prod.usage.toLowerCase().includes("hospital"))) ||
            cat.id === "catheters" ||
            cat.id === "perfusion" ||
            cat.id === "surgical-drainage"
          );
        }

        return matchesSearch && matchesStandard;
      });

      if (matchingProducts.length === 0) return null;

      return {
        ...cat,
        products: matchingProducts,
      };
    }).filter(Boolean) as ProductCategory[];
  }, [activeTab, searchQuery, selectedStandard]);

  const filteredProductsFlat = useMemo(() => {
    return allProducts.filter((prod) => {
      const matchesCategory =
        activeTab === "All" || prod.categoryNav === activeTab;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        prod.name.toLowerCase().includes(query) ||
        (prod.description && prod.description.toLowerCase().includes(query)) ||
        (prod.material && prod.material.toLowerCase().includes(query)) ||
        (prod.size && prod.size.toLowerCase().includes(query)) ||
        (prod.length && prod.length.toLowerCase().includes(query)) ||
        (prod.usage && prod.usage.toLowerCase().includes(query)) ||
        (prod.packaging && prod.packaging.toLowerCase().includes(query)) ||
        (prod.features &&
          prod.features.some((f) => f.toLowerCase().includes(query)));

      let matchesStandard = true;
      if (selectedStandard === "sterile") {
        matchesStandard = !!(
          prod.sterilized && prod.sterilized.toLowerCase().includes("steril")
        );
      } else if (selectedStandard === "dehp") {
        matchesStandard = !!(
          (prod.material &&
            (prod.material.toLowerCase().includes("dehp") ||
              prod.material.toLowerCase().includes("latex"))) ||
          (prod.features &&
            prod.features.some(
              (f) =>
                f.toLowerCase().includes("dehp") ||
                f.toLowerCase().includes("latex")
            ))
        );
      } else if (selectedStandard === "critical") {
        matchesStandard = !!(
          (prod.usage &&
            (prod.usage.toLowerCase().includes("icu") ||
              prod.usage.toLowerCase().includes("critical") ||
              prod.usage.toLowerCase().includes("surgery") ||
              prod.usage.toLowerCase().includes("hospital"))) ||
          prod.categoryId === "catheters" ||
          prod.categoryId === "perfusion" ||
          prod.categoryId === "surgical-drainage"
        );
      }

      return matchesCategory && matchesSearch && matchesStandard;
    });
  }, [allProducts, activeTab, searchQuery, selectedStandard]);

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-20 font-body text-slate-800 antialiased selection:bg-[#3D5A80]/20 selection:text-[#002240]">
      {/* Existing Global Header */}
      <Header />

      {/* ================================================================
          1. HERO SECTION (Aligned with Organization Profile Hero)
          ================================================================ */}
      <section className="relative overflow-hidden bg-[#0F2740] py-20 lg:py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,30,45,0.15),transparent_50%)]" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-[#8B1E2D]/5 blur-3xl" />

        <div className="container-px relative z-10">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
              Company Ideals
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
              Vision &amp; Mission Statement
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Discover the core principles, clinical excellence, and long-term goals guiding Mecca Healthcare&apos;s global team across three manufacturing plants.
            </p>

            {/* Quick Action Navigation */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-burgundy px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:bg-burgundy-dark hover:shadow-soft active:scale-95 cursor-pointer"
              >
                <span>Explore Product Portfolio</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-navy active:scale-95 cursor-pointer"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          2. VISION & MISSION SECTION (Exact Company Ideals)
          ================================================================ */}
      <section className="section-py bg-white border-b border-border">
        <div className="container-px">
          <SectionHeading
            eyebrow="Company Ideals"
            title="Our Vision &amp; Mission"
            subtitle="The enduring corporate principles formulated by our founders that govern every device we engineer and deliver."
          />

          <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto items-stretch">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-100 bg-[#F8FAFC] p-8 sm:p-10 shadow-soft transition-all duration-300 hover:border-[#3D5A80]/30 hover:shadow-md"
            >
              <GeoSquares className="absolute -right-6 -top-6 opacity-30" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#3D5A80] border border-blue-100">
                    <Eye className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#3D5A80]">
                    Long-Term Aspiration
                  </span>
                </div>

                <span className="font-heading text-xs font-bold uppercase tracking-wider text-medblue">
                  VISION
                </span>
                <h3 className="font-heading text-2xl font-bold text-navy mt-1">
                  Our Corporate Vision
                </h3>

                {/* Exact Vision Statement */}
                <div className="mt-6 border-l-4 border-medblue bg-white p-5 rounded-r-2xl shadow-2xs">
                  <p className="text-base sm:text-lg font-medium italic leading-relaxed text-slate-800">
                    &ldquo;Our VISION is To be an organisation whose people &amp; products exude{" "}
                    <strong className="font-heading font-bold text-navy not-italic">
                      CARE, COMPASSION &amp; TRUST
                    </strong>{" "}
                    towards its customers, business partners and the society at large.&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200/70 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle className="h-4 w-4 text-medblue" />
                <span className="font-heading">Exuding Care &amp; Trust Since 1977</span>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-100 bg-[#F8FAFC] p-8 sm:p-10 shadow-soft transition-all duration-300 hover:border-burgundy/30 hover:shadow-md"
            >
              <GeoSquares className="absolute -right-6 -top-6 opacity-30" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-burgundy border border-rose-100">
                    <Compass className="h-6 w-6" />
                  </div>
                  <span className="font-heading rounded-full bg-rose-50 border border-rose-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-burgundy">
                    Five-Year Action Statement
                  </span>
                </div>

                <span className="font-heading text-xs font-bold uppercase tracking-wider text-burgundy">
                  MISSION
                </span>
                <h3 className="font-heading text-2xl font-bold text-navy mt-1">
                  Our Mission Statement
                </h3>

                {/* Exact Mission Statement */}
                <div className="mt-6 border-l-4 border-burgundy bg-white p-5 rounded-r-2xl shadow-2xs">
                  <p className="text-base sm:text-lg font-medium italic leading-relaxed text-slate-800">
                    &ldquo;Our MISSION for coming five years is To be an organisation whose employees strive for growth and values the contribution made by its founding members, through always keeping in mind the{" "}
                    <strong className="font-heading font-bold text-navy not-italic">
                      health and safety of the users
                    </strong>{" "}
                    of its products and thus satisfying the growing needs of the healthcare industry and its customers.&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200/70 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle className="h-4 w-4 text-burgundy" />
                <span className="font-heading">Upholding Safety &amp; Growth First</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          3. ABOUT MECCA HEALTHCARE (Editorial Split Layout)
          ================================================================ */}
      <section className="section-py bg-bg">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="eyebrow mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">
                Corporate Profile
              </div>

              <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
                Pioneering Medical Device Manufacturing Since 1977
              </h2>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                <p>
                  Founded in 1977 by <strong>Mr. O.P. Sharma</strong>, Mecca Healthcare (MHPL) was established to overcome the shortage of accessible, high-grade medical devices in India, transitioning the nation away from expensive foreign imports.
                </p>
                <p>
                  Today, Mecca operates as a major contract manufacturer and OEM supplier of disposable infusion systems, catheters, surgical drainage sets, and hypodermic needles. All facilities house in-house PVC compounding, automated extrusion, mold engineering, and Class 10,000 cleanrooms.
                </p>
                <p>
                  With certified quality management systems conforming to <strong>ISO 13485:2016</strong> and <strong>WHO-GMP</strong>, our products serve state health departments, hospital consortia, and multinational healthcare brands across 50+ countries.
                </p>
              </div>
            </div>

            {/* Right Statistics Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#002240] to-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden border border-slate-800">
              <GeoSquares className="absolute -right-6 -top-6 opacity-20" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-rose-300">
                    <Factory className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-white">
                      One-Roof Production Power
                    </h4>
                    <span className="text-xs text-slate-400">Integrated Infrastructure</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our combined manufacturing capacities exceed <strong>30 million units per annum</strong> across units in Kalol, Chhatral, and Boranada (Jodhpur).
                </p>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                  <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                    <span className="text-xl font-bold text-rose-300 font-heading">30M+</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">Annual Pieces</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                    <span className="text-xl font-bold text-rose-300 font-heading">50+</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">Export Nations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          4. MANUFACTURING STRENGTH (4 Stat Cards)
          ================================================================ */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container-px">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat Card 1 */}
            <div className="group rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3D5A80]/40 hover:bg-white hover:shadow-md">
              <div className="flex items-center justify-between text-slate-400 mb-3">
                <Calendar className="h-5 w-5 text-[#8B1E2D]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Metric 01</span>
              </div>
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#002240] block">
                1977
              </span>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#8B1E2D]">
                Established
              </p>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                48+ years of uninterrupted healthcare manufacturing legacy in India.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="group rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3D5A80]/40 hover:bg-white hover:shadow-md">
              <div className="flex items-center justify-between text-slate-400 mb-3">
                <Factory className="h-5 w-5 text-[#3D5A80]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Metric 02</span>
              </div>
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#002240] block">
                3
              </span>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#3D5A80]">
                Manufacturing Plants
              </p>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Class 10,000 cleanroom units in Kalol, Chhatral, and Boranada.
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="group rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3D5A80]/40 hover:bg-white hover:shadow-md">
              <div className="flex items-center justify-between text-slate-400 mb-3">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Metric 03</span>
              </div>
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#002240] block truncate">
                ISO Certified
              </span>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-emerald-600">
                Production Standards
              </p>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                ISO 13485:2016, European CE Mark, and WHO-GMP audits.
              </p>
            </div>

            {/* Stat Card 4 */}
            <div className="group rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3D5A80]/40 hover:bg-white hover:shadow-md">
              <div className="flex items-center justify-between text-slate-400 mb-3">
                <Globe className="h-5 w-5 text-indigo-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Metric 04</span>
              </div>
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#002240] block">
                Global
              </span>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-indigo-600">
                Export Presence
              </p>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Distributing certified medical disposables across 50+ countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          5. OUR MEDICAL PRODUCT PORTFOLIO
          ================================================================ */}
      <section id="portfolio" className="section-py bg-bg">
        <div className="container-px">
          <SectionHeading
            eyebrow="Clinical Excellence"
            title="Our Medical Product Portfolio"
            subtitle="Precision-engineered medical devices designed to support safer, more reliable, and efficient healthcare delivery."
          />

          {/* ============================================================
              PRO UX COMMAND BAR: Live Search, Chips, Standard Filters & View Switcher
              ============================================================ */}
          <div className="mb-8 rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-[0_10px_35px_rgba(13,34,64,0.06)]">
            {/* Top row: Live Search & View Mode Switcher */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 50+ devices by name, material, gauge, or clinical indication..."
                  className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] py-3 pl-10 pr-10 text-xs sm:text-sm text-[#002240] placeholder-slate-400 transition-all focus:border-[#3D5A80] focus:bg-white focus:outline-hidden focus:ring-3 focus:ring-[#3D5A80]/15"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-1.5 self-start md:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`font-heading inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-navy text-white shadow-2xs"
                      : "text-gray hover:text-navy"
                  }`}
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                  <span>Category View</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  className={`font-heading inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    viewMode === "table"
                      ? "bg-navy text-white shadow-2xs"
                      : "text-gray hover:text-navy"
                  }`}
                >
                  <List className="h-3.5 w-3.5" />
                  <span>Master Table</span>
                </button>
              </div>
            </div>

            {/* Middle Row: Quick Search Keyword Chips */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Popular Searches:
              </span>
              {[
                "Cannula",
                "Catheter",
                "Infusion Set",
                "Needle",
                "Stopcock",
                "Dialysis",
                "Silicone",
                "PVC",
              ].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() =>
                    setSearchQuery(
                      searchQuery.toLowerCase() === chip.toLowerCase() ? "" : chip
                    )
                  }
                  className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-all cursor-pointer ${
                    searchQuery.toLowerCase() === chip.toLowerCase()
                      ? "bg-[#3D5A80] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Bottom Row: Clinical Standards Filter */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Filter by Standard:
                </span>
                {[
                  { id: "all", label: "All Standards" },
                  { id: "sterile", label: "ETO Sterile" },
                  { id: "dehp", label: "DEHP-Free / Latex-Free" },
                  { id: "critical", label: "Critical Care / ICU" },
                ].map((std) => (
                  <button
                    key={std.id}
                    type="button"
                    onClick={() => setSelectedStandard(std.id)}
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold border transition-all cursor-pointer ${
                      selectedStandard === std.id
                        ? "border-[#8B1E2D] bg-[#8B1E2D] text-white shadow-2xs"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {std.label}
                  </button>
                ))}
              </div>

              {/* Reset All Filters if any is active */}
              {(searchQuery || selectedStandard !== "all" || activeTab !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedStandard("all");
                    setActiveTab("All");
                  }}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8B1E2D] hover:underline cursor-pointer"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Sticky Category Tabs with Counter Badges */}
          <div className="sticky top-20 z-30 mb-8 -mx-4 px-4 py-3 bg-[#F8FAFC]/95 backdrop-blur-md border-y border-slate-200 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2 min-w-max">
              <button
                type="button"
                onClick={() => setActiveTab("All")}
                className={`font-heading inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "All"
                    ? "bg-navy text-white shadow-xs"
                    : "bg-white text-navy border border-border hover:border-burgundy/40"
                }`}
              >
                <span>All Categories</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    activeTab === "All"
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {allProducts.length}
                </span>
              </button>

              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const count = cat.products.length;
                const isActive = activeTab === cat.id;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveTab(cat.id)}
                    className={`font-heading inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-burgundy text-white shadow-xs"
                        : "bg-white text-navy border border-border hover:border-burgundy/40"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{cat.navLabel}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {cat.products.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
            <div>
              Showing{" "}
              <strong className="text-[#002240]">
                {filteredProductsFlat.length}
              </strong>{" "}
              medical devices across{" "}
              <strong className="text-[#002240]">
                {filteredCategories.length}
              </strong>{" "}
              categories
              {searchQuery && (
                <span>
                  {" "}
                  matching &ldquo;
                  <span className="text-[#8B1E2D] font-semibold">
                    {searchQuery}
                  </span>
                  &rdquo;
                </span>
              )}
            </div>
          </div>

          {/* Content: Either Grid or Table View or Empty State */}
          {filteredProductsFlat.length === 0 ? (
            <div className="my-12 text-center p-12 rounded-3xl bg-white border border-slate-200 shadow-soft">
              <div className="mx-auto w-12 h-12 rounded-2xl bg-rose-50 text-[#8B1E2D] flex items-center justify-center mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#002240]">
                No Medical Devices Found
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                We couldn&apos;t find any products matching &ldquo;{searchQuery}&rdquo;.
                Try checking the spelling or resetting filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedStandard("all");
                  setActiveTab("All");
                }}
                className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-[#002240] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#003366] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category, idx) => (
                <ProductCategoryCard
                  key={category.id}
                  category={category}
                  index={idx}
                  onQuickView={(prod, catTitle) =>
                    setSelectedProductModal({
                      product: prod,
                      categoryTitle: catTitle,
                    })
                  }
                  onInquire={(prodName) => openQuoteModal(prodName)}
                  onToggleQuote={(prodName) => toggleQuoteItem(prodName)}
                  isQuoteItem={(prodName) => isItemInQuote(prodName)}
                />
              ))}
            </div>
          ) : (
            <ClinicalTableView
              products={filteredProductsFlat}
              onQuickView={(prod, catTitle) =>
                setSelectedProductModal({
                  product: prod,
                  categoryTitle: catTitle,
                })
              }
              onInquire={(prodName) => openQuoteModal(prodName)}
              onToggleQuote={(prodName) => toggleQuoteItem(prodName)}
              isQuoteItem={(prodName) => isItemInQuote(prodName)}
            />
          )}

          {/* Product Quick View Modal */}
          <AnimatePresence>
            {selectedProductModal && (
              <ProductQuickViewModal
                item={selectedProductModal}
                onClose={() => setSelectedProductModal(null)}
                onInquire={(prodName) => openQuoteModal(prodName)}
                onToggleQuote={(prodName) => toggleQuoteItem(prodName)}
                isQuoteItem={(prodName) => isItemInQuote(prodName)}
              />
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ================================================================
          6. QUALITY & CERTIFICATIONS ("Quality You Can Trust")
          ================================================================ */}
      <section className="section-py bg-white border-y border-border">
        <div className="container-px">
          <SectionHeading
            eyebrow="Audited Compliance"
            title="Quality You Can Trust"
            subtitle="Mecca Healthcare operates under stringent international regulatory frameworks to ensure zero compromise on patient safety."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl border border-border bg-[#F8FAFC] p-6 shadow-2xs transition-all duration-300 hover:border-burgundy/40 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-burgundy border border-border mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy">
                ISO 13485:2016
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray">
                Quality Management System audited by TÜV SÜD for sterile medical device manufacturing.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-border bg-[#F8FAFC] p-6 shadow-2xs transition-all duration-300 hover:border-burgundy/40 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-burgundy border border-border mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy">
                ISO 9001:2015
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray">
                Standardized enterprise processes, risk management, and client feedback integration.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-border bg-[#F8FAFC] p-6 shadow-2xs transition-all duration-300 hover:border-burgundy/40 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-burgundy border border-border mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy">
                CE Certified
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray">
                European Medical Device Directive (MDD 93/42/EEC Annex V) conformity certification.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-border bg-[#F8FAFC] p-6 shadow-2xs transition-all duration-300 hover:border-burgundy/40 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-burgundy border border-border mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy">
                WHO-GMP
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray">
                Compliant Class 10,000 cleanroom environments with continuous air and bioburden monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          7. TARGET INDUSTRIES
          ================================================================ */}
      <section className="section-py bg-bg">
        <div className="container-px">
          <SectionHeading
            eyebrow="Market Footprint"
            title="Serving Healthcare Across Critical Environments"
            subtitle="From emergency critical care to large-scale hospital distribution, our products empower healthcare providers daily."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-border bg-white p-5 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-burgundy/40 hover:shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10 text-burgundy group-hover:bg-navy group-hover:text-white transition-colors">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-heading text-sm font-bold text-navy">
                Hospitals
              </h3>
              <p className="mt-1 text-[11px] text-gray">Surgical &amp; general wards</p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-border bg-white p-5 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-burgundy/40 hover:shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10 text-burgundy group-hover:bg-navy group-hover:text-white transition-colors">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-heading text-sm font-bold text-navy">
                Clinics
              </h3>
              <p className="mt-1 text-[11px] text-gray">Outpatient care units</p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-border bg-white p-5 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-burgundy/40 hover:shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10 text-burgundy group-hover:bg-navy group-hover:text-white transition-colors">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-heading text-sm font-bold text-navy">
                ICU &amp; Critical Care
              </h3>
              <p className="mt-1 text-[11px] text-gray">Intensive therapy lines</p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-2xl border border-border bg-white p-5 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-burgundy/40 hover:shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10 text-burgundy group-hover:bg-navy group-hover:text-white transition-colors">
                <Package className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-heading text-sm font-bold text-navy">
                Distributors
              </h3>
              <p className="mt-1 text-[11px] text-gray">Global supply chains</p>
            </div>

            {/* Card 5 */}
            <div className="group rounded-2xl border border-border bg-white p-5 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-burgundy/40 hover:shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10 text-burgundy group-hover:bg-navy group-hover:text-white transition-colors">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-heading text-sm font-bold text-navy">
                Government Health
              </h3>
              <p className="mt-1 text-[11px] text-gray">Annual rate contracts</p>
            </div>

            {/* Card 6 */}
            <div className="group rounded-2xl border border-border bg-white p-5 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-burgundy/40 hover:shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10 text-burgundy group-hover:bg-navy group-hover:text-white transition-colors">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-heading text-sm font-bold text-navy">
                OEM Partners
              </h3>
              <p className="mt-1 text-[11px] text-gray">Loan-license manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          8. FINAL CTA (Aligned with Global Website FinalCTA Design)
          ================================================================ */}
      <section className="section-py bg-white">
        <div className="container-px">
          <div className="relative overflow-hidden rounded-[32px] bg-burgundy-gradient px-8 py-14 text-white md:px-14 lg:px-16 shadow-xl">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

            {/* Subtle grid */}
            <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.035]" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              {/* Content */}
              <div className="max-w-3xl">
                <div className="eyebrow mb-5 inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  Start Your Project
                </div>

                <h2 className="font-heading font-bold text-white text-3xl leading-tight md:text-4xl lg:text-5xl">
                  Together, We Care Beyond Products
                </h2>

                <p className="mt-5 max-w-2xl leading-relaxed text-white/80 text-sm sm:text-base">
                  Mecca Healthcare manufactures world-class sterile medical devices with innovation, quality, integrity, and compassion. Submit your requirements or connect with our team for contract manufacturing and institutional supply.
                </p>
              </div>

              {/* Signature CTA Buttons matching all other website pages */}
              <div className="relative z-10 flex flex-col gap-3 lg:min-w-[210px]">
                <Link
                  href="/contact"
                  className="font-heading inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-burgundy shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
                >
                  Contact Our Team →
                </Link>

                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => openQuoteModal()}
                  className="font-heading inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 cursor-pointer"
                >
                  Request a Quote →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Global Footer */}
      <Footer />
    </main>
  );
}
