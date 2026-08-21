"use client";

/**
 * PharmaceuticalProductCatalogue.tsx
 * ---------------------------------------------------------------------------
 * A single-file, data-driven product catalogue system for Mecca Healthcare
 * (MHPL) / Mecca Labs. Recreates the "Pharmaceutical Product List" PDF as a
 * real, responsive Next.js page — no PDF embed, no iframe, no page images.
 *
 * REUSE FOR FUTURE CATALOGUES (Nutraceutical, Milk, Cosmeceutical, ...):
 *   1. Keep everything below `ICONS` and the `<ProductCatalogue>` component —
 *      that part is generic and content-agnostic.
 *   2. Copy the shape of `pharmaceuticalCatalogue` into a new `CatalogueData`
 *      object (e.g. `nutraceuticalCatalogue`) in a new file, importing the
 *      types + <ProductCatalogue /> from here.
 *   3. Render it with <ProductCatalogue data={nutraceuticalCatalogue} />.
 * You only ever add a new data object — the layout, tables, animations,
 * download button and styling are shared automatically.
 *
 * ASSUMPTIONS (no existing repo was provided to inspect, so please adjust):
 *   - App Router, Tailwind CSS (JIT / no custom theme tokens required — all
 *     brand colors below use Tailwind arbitrary-value syntax so this drops
 *     into any Tailwind config unmodified).
 *   - `framer-motion` and `lucide-react` are already installed (per your
 *     earlier Mecca Healthcare build notes) — remove the motion wrapper and
 *     swap icons if that's no longer the case.
 *   - Breadcrumb hrefs follow the routing pattern you described
 *     (`/products/mecca-labs/...`) — update if your real routes differ.
 *   - If your site has a fixed global header, adjust the `top-0` on the
 *     sticky in-page nav below to that header's height.
 * ---------------------------------------------------------------------------
 */

import { useEffect, useMemo, useState, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Syringe,
  Pill,
  FlaskConical,
  Droplets,
  Beaker,
  ShieldCheck,
  Download,
  ChevronRight,
  Clock,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

/* =============================================================================
   BRAND TOKENS
   Source: uploaded brand palette. Five colors, used consistently throughout.
   To re-skin for another product line, change these five values only.
============================================================================= */
const BRAND = {
  maroon: "#8B1E2D",
  maroonDark: "#6E1622",
  navy: "#0D2240",
  blue: "#3D5A80",
  surface: "#F2F4F7",
  white: "#FFFFFF",
} as const;

const ICONS = {
  syringe: Syringe,
  pill: Pill,
  flask: FlaskConical,
  droplets: Droplets,
  beaker: Beaker,
  shield: ShieldCheck,
} satisfies Record<string, LucideIcon>;

/* =============================================================================
   TYPES — the reusable contract every catalogue plugs into
============================================================================= */
export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface CatalogueFeature {
  label: string;
  icon: keyof typeof ICONS;
}

export interface Product {
  sr: number;
  name: string;
  strength?: string;
  pack?: string;
  status?: string;
  /** Long-form note (e.g. full composition) shown behind a disclosure toggle */
  detail?: string;
}

export interface ProductSubgroup {
  /** Omit when the section has only one unlabeled table in the source */
  label?: string;
  /** Override the "Strength" column header, e.g. "Available Strengths" */
  strengthLabel?: string;
  columns: Array<"strength" | "pack" | "status">;
  products: Product[];
}

export interface ProductGroup {
  /** e.g. "PICS (EU & TGA) Approved Plant" — omit when not present in source */
  label?: string;
  subgroups: ProductSubgroup[];
}

export interface CatalogueSection {
  id: string;
  number: string;
  icon: keyof typeof ICONS;
  title: string;
  subtitle: string;
  description: string;
  groups: ProductGroup[];
}

export interface CatalogueData {
  brand: string;
  breadcrumbs: Breadcrumb[];
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  tagline: string;
  features: CatalogueFeature[];
  footerTags: string[];
  sourceLine: string;
  downloadFileName: string;
  sections: CatalogueSection[];
}

/* =============================================================================
   DATA — extracted verbatim from "Pharmaceutical Product List" (Mecca Labs).
   No specification, strength, status or product name has been invented.
============================================================================= */
export const pharmaceuticalCatalogue: CatalogueData = {
  brand: "Mecca Labs",
  breadcrumbs: [
    { label: "Products", href: "/products" },
    { label: "Mecca Labs", href: "/products/mecca-labs" },
    { label: "Pharmaceutical Product List" },
  ],
  eyebrow: "Mecca Labs",
  titleLine1: "Pharmaceutical",
  titleLine2: "Product List",
  tagline: "Quality Healthcare Solutions. Trusted Worldwide.",
  features: [
    { label: "Sterile Injectables", icon: "syringe" },
    { label: "Oral Formulations", icon: "pill" },
    { label: "Cephalosporin Range", icon: "flask" },
    { label: "Parenterals", icon: "droplets" },
  ],
  footerTags: ["Quality", "Trust", "Innovation", "Care"],
  sourceLine: "Mecca Labs · Pharmaceutical Product Catalogue · www.mhplindia.in",
  downloadFileName: "Mecca-Labs-Pharmaceutical-Product-Catalogue.pdf",
  sections: [
    {
      id: "sterile-prefilled-syringes",
      number: "01",
      icon: "syringe",
      title: "Sterile Pre-Filled Syringes",
      subtitle: "Heparins & low-molecular-weight heparins",
      description:
        "Advanced sterile pharmaceutical solutions designed for precision, safety and reliability.",
      groups: [
        {
          subgroups: [
            {
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Heparin", strength: "1000 IU/ml", pack: "10 ml", status: "ACTD / CTD / NON-CTD" },
                { sr: 2, name: "Heparin", strength: "5000 IU/ml", pack: "1 ml", status: "ACTD / CTD / NON-CTD" },
                { sr: 3, name: "Enoxaparin Sodium", strength: "60 mg/0.6 ml", pack: "0.6 ml", status: "ACTD / CTD / NON-CTD" },
                { sr: 4, name: "Enoxaparin Sodium", strength: "40 mg/0.4 ml", pack: "0.4 ml", status: "ACTD / CTD / NON-CTD" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "penicillin-cephalosporins",
      number: "02",
      icon: "pill",
      title: "Penicillin & Cephalosporins",
      subtitle: "Beta-lactam tablets and dry syrups",
      description:
        "A trusted range of beta-lactam antibiotics manufactured to the highest international standards.",
      groups: [
        {
          subgroups: [
            {
              label: "Tablets",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Amoxicillin + Clavulanate Potassium (625 mg)", strength: "500 mg + 125 mg", pack: "1 x 10 Alu/Alu", status: "ACTD / NON-CTD" },
                { sr: 2, name: "Cefixime", strength: "200 mg", pack: "10 x 10 Alu/Alu", status: "ACTD / NON-CTD" },
                { sr: 3, name: "Cefixime + Clavulanate Potassium (325 mg)", strength: "200 mg + 125 mg", pack: "1 x 10 Alu/Alu", status: "ACTD / NON-CTD" },
                { sr: 4, name: "Cefpodoxime Proxetil", strength: "200 mg", pack: "1 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 5, name: "Cefuroxime Axetil", strength: "250 mg / 500 mg", pack: "1 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Dry Syrup",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Amoxicillin + Clavulanate Potassium (228.5 mg/5 ml)", strength: "200 mg/5 ml + 28.5 mg/5 ml", pack: "60 ml", status: "ACTD / NON-CTD" },
                { sr: 2, name: "Cefixime", strength: "50 mg/5 ml & 100 mg/5 ml", pack: "60 ml", status: "ACTD / NON-CTD" },
                { sr: 3, name: "Cefixime + Clavulanate Potassium (162.5 mg/5 ml)", strength: "100 mg/5 ml + 62.5 mg/5 ml", pack: "60 ml", status: "ACTD / NON-CTD" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "general-formulations",
      number: "03",
      icon: "flask",
      title: "General Formulations",
      subtitle: "Cardiovascular, metabolic, anti-infective & supportive care",
      description:
        "A broad, dependable portfolio spanning cardiovascular, metabolic, anti-infective and supportive care therapies.",
      groups: [
        {
          subgroups: [
            {
              label: "Antihypertensive Tablets",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Amlodipine Besilate", strength: "5 mg / 10 mg", pack: "5 x 10 Alu/Alu", status: "ACTD / NON-CTD" },
                { sr: 2, name: "Atorvastatin", strength: "10 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 3, name: "Telmisartan", strength: "40 mg / 80 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 4, name: "Lisinopril", strength: "5 mg / 10 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 5, name: "Telmisartan + Hydrochlorothiazide", strength: "40 mg + 12.5 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 6, name: "Clopidogrel", strength: "75 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 7, name: "Enalapril Maleate", strength: "5 mg / 10 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 8, name: "Ramipril", strength: "5 mg / 10 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 9, name: "Rosuvastatin Calcium", strength: "5 mg / 10 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 10, name: "Captopril", strength: "25 mg", pack: "10 x 10 Alu/PVC", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Antidiabetic Tablets",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Metformin Hydrochloride", strength: "500 mg", pack: "10 x 10 Alu/Alu", status: "ACTD" },
                { sr: 2, name: "Glibenclamide", strength: "5 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 3, name: "Metformin Hydrochloride (SR) + Glimepiride", strength: "500 mg + 2 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Pain Management — Tablets",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Paracetamol + Diclofenac Sodium", strength: "500 mg + 50 mg", pack: "10 x 10 Alu/Alu", status: "ACTD / NON-CTD" },
                { sr: 2, name: "Diclofenac Sodium", strength: "50 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 3, name: "Paracetamol", strength: "500 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 4, name: "Aceclofenac Sodium", strength: "100 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Pain Management — Capsules",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Tramadol", strength: "50 mg / 100 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Antacid / PPI / Antiemetic — Tablets",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Esomeprazole Magnesium (Trihydrate)", strength: "20 mg / 40 mg", pack: "10 x 10 Alu/Alu", status: "ACTD / NON-CTD" },
                { sr: 2, name: "Rabeprazole Sodium", strength: "20 mg", pack: "10 x 10 Alu/Alu", status: "NON-CTD" },
                { sr: 3, name: "Pantoprazole", strength: "40 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 4, name: "Domperidone", strength: "10 mg", pack: "10 x 10 Alu/Alu", status: "ACTD / NON-CTD" },
                { sr: 5, name: "Ranitidine Hydrochloride", strength: "150 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Antacid / PPI — Capsules",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Omeprazole", strength: "20 mg", pack: "10 x 10 Alu/Alu", status: "ACTD / NON-CTD" },
                { sr: 2, name: "Omeprazole & Domperidone", strength: "20 mg + 10 mg", pack: "10 x 10 Alu/Alu", status: "NON-CTD" },
              ],
            },
            {
              label: "Antacid / PPI — Injectables (Lyophilized Powder)",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Esomeprazole Sodium", strength: "40 mg/vial", pack: "1 ml", status: "ACTD / NON-CTD" },
                { sr: 2, name: "Omeprazole Sodium", strength: "40 mg/vial", pack: "1 ml", status: "ACTD / NON-CTD" },
              ],
            },
            {
              label: "Antiallergic Tablets",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Loratadine", strength: "10 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 2, name: "Levocetirizine Hydrochloride", strength: "5 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Antibiotics — Quinolones",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Moxifloxacin Hydrochloride", strength: "400 mg", pack: "10 x 10 Alu/Alu", status: "ACTD / NON-CTD" },
                { sr: 2, name: "Levofloxacin", strength: "500 mg", pack: "10 x 10 Alu/Alu", status: "ACTD / NON-CTD" },
                { sr: 3, name: "Ciprofloxacin", strength: "500 mg", pack: "10 x 10 Alu/PVC", status: "ACTD" },
              ],
            },
            {
              label: "Antibiotics — Macrolides",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Erythromycin Stearate", strength: "500 mg", pack: "10 x 10 Alu/Alu", status: "ACTD / NON-CTD" },
                { sr: 2, name: "Azithromycin", strength: "250 mg / 500 mg", pack: "10 x 10 Alu/Alu", status: "ACTD / NON-CTD" },
                { sr: 3, name: "Clarithromycin", strength: "500 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Antiamoebic / Antidiarrhoeal",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Ofloxacin + Ornidazole", strength: "200 mg + 500 mg", pack: "10 x 10 Alu/Alu", status: "ACTD / NON-CTD" },
                { sr: 2, name: "Ciprofloxacin + Tinidazole", strength: "500 mg + 600 mg", pack: "10 x 10 Alu/PVC", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Antifungal & Antiprotozoal",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Ketoconazole", strength: "200 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 2, name: "Secnidazole", strength: "500 mg / 1000 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 3, name: "Albendazole", strength: "400 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Tetracyclines",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Doxycycline", strength: "100 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Antimalarial Tablets",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Artemether + Lumefantrine", strength: "80 mg + 480 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 2, name: "Artemether + Lumefantrine", strength: "20 mg + 120 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 3, name: "Artemether + Lumefantrine", strength: "40 mg + 120 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Sexual Wellbeing",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Sildenafil Citrate", strength: "50 mg / 100 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Uterine Stimulant (Liquid Injectable)",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Oxytocin", strength: "5 IU / 10 IU", pack: "10 x 1 ml Amp", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "CNS / Sedative / Hypnotics",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Hyoscine Butyl Bromide", strength: "10 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 2, name: "Citicoline", strength: "500 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Health Supplements",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Riboflavin", strength: "5 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 2, name: "Folic Acid", strength: "5 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 3, name: "Ascorbic Acid", strength: "100 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                {
                  sr: 4,
                  name: "Oral Rehydration Salts (ORS)",
                  pack: "4.2 g powder sachet",
                  status: "UNDER DEVELOPMENT",
                  detail:
                    "Each sachet contains (to produce 200 ml): Dextrose (Anhydrous) BP 2.70 g · Sodium Chloride BP 0.52 g · Potassium Chloride BP 0.30 g · Sodium Citrate BP 0.58 g · Excipients q.s. · Flavour added",
                },
                {
                  sr: 5,
                  name: "Oral Rehydration Salts (ORS)",
                  pack: "27.9 g powder sachet",
                  status: "UNDER DEVELOPMENT",
                  detail:
                    "Each sachet of 27.9 g contains: Dextrose Anhydrous BP 20 g · Sodium Chloride BP 3.5 g · Sodium Citrate BP 2.9 g · Potassium Chloride BP 1.5 g · Excipients q.s.",
                },
              ],
            },
            {
              label: "Liquid Injectables",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Thiamine (Vitamin B1)", strength: "100 mg", pack: "10 x 1 ml Ampoule", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Other Specialty Products",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Deferasirox Tablets (iron chelating agent)", strength: "250 mg / 500 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 2, name: "Sevelamer Tablets (bile acid sequestrant)", strength: "800 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 3, name: "Betahistine Tablets (antivertigo)", strength: "800 mg", pack: "10 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 4, name: "Tamsulosin HCl & Dutasteride Capsules (BPH)", strength: "0.4 mg + 0.5 mg", pack: "1 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
                { sr: 5, name: "Tamsulosin HCl & Finasteride Tablets (BPH)", strength: "0.4 mg + 5 mg", pack: "1 x 10 Alu/Alu", status: "UNDER DEVELOPMENT" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "large-volume-parenteral",
      number: "04",
      icon: "droplets",
      title: "Large Volume Parenteral",
      subtitle: "Crystalloids, colloids & infusion therapy",
      description:
        "Sterile infusion therapy manufactured under stringent quality control for hospital and critical-care use.",
      groups: [
        {
          subgroups: [
            {
              label: "Crystalloids & Colloids",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Dextrose 5%", strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 2, name: "Dextrose 10%", strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 3, name: "Dextrose 20%", strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 4, name: "Dextrose 25%", strength: "100 / 250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 5, name: "Dextrose 50%", strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 6, name: "Glucose 5%", strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 7, name: "Glucose 10%", strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 8, name: "Glucose 20%", strength: "300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 9, name: "Glucose 25%", strength: "100 / 250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 10, name: "Glucose 50%", strength: "300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 11, name: "Sodium Chloride 0.9%", strength: "100 / 250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 12, name: "Sodium Chloride 3%", strength: "100 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 13, name: "Sodium Chloride 3%", strength: "100 ml", pack: "Glass Bottle", status: "ACTD" },
                { sr: 14, name: "Sodium Chloride 0.9%", strength: "100 ml", pack: "Glass Bottle", status: "ACTD" },
                { sr: 15, name: "Dextrose 5% + Sodium Chloride 0.9%", strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 16, name: "Dextrose 5% + Sodium Chloride 0.45%", strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 17, name: "Dextrose 5% + Sodium Chloride 0.33%", strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 18, name: "Dextrose 5% + Sodium Chloride 0.22%", strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 19, name: "Compound Sodium Lactate", strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 20, name: 'Multiple Electrolyte "M" & Dextrose', strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 21, name: 'Multiple Electrolyte "P" & Dextrose', strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 22, name: 'Multiple Electrolyte "G" & Dextrose', strength: "250 / 300 / 500 / 1000 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 23, name: "Mannitol 10%", strength: "250 / 500 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 24, name: "Mannitol 20%", strength: "100 / 250 / 350 / 500 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 25, name: "Mannitol + Glycerin", strength: "100 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 26, name: "Dextran-40", strength: "500 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 27, name: "Dextran-70", strength: "500 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 28, name: "Invert Sugar 10%", strength: "500 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 29, name: "Invert Sugar with NS", strength: "500 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 30, name: "Hydroxyethyl Starch", strength: "500 ml", pack: "PE Bottle (Nipple & Euro head)", status: "ACTD" },
              ],
            },
            {
              label: "Analgesic / Antipyretic",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Paracetamol", strength: "1 gm", pack: "100 ml PE Bottle (Nipple head)", status: "ACTD" },
                { sr: 2, name: "Paracetamol", strength: "500 mg / 1 gm", pack: "50/100 ml Glass Bottle", status: "ACTD" },
              ],
            },
            {
              label: "Anti-Infective",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Levofloxacin", pack: "100 ml PE Bottle (Nipple head)", status: "ACTD" },
                { sr: 2, name: "Ciprofloxacin", pack: "100 ml PE Bottle (Nipple head)", status: "ACTD" },
                { sr: 3, name: "Ofloxacin", pack: "100 ml PE Bottle (Nipple head)", status: "ACTD" },
                { sr: 4, name: "Ofloxacin + Ornidazole", pack: "100 ml PE Bottle (Nipple head)", status: "ACTD" },
                { sr: 5, name: "Moxifloxacin", pack: "100/250 ml PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 6, name: "Linezolid", pack: "100/300 ml PE Bottle (Nipple head)", status: "ACTD" },
                { sr: 7, name: "Tinidazole", pack: "400 ml PE Bottle (Nipple & Euro head)", status: "ACTD" },
                { sr: 8, name: "Metronidazole", pack: "100 ml PE Bottle (Nipple head)", status: "ACTD" },
                { sr: 9, name: "Metronidazole 100 mg + Dextrose 5%", pack: "100 / 500 ml PE Bottle (Nipple head)", status: "ACTD" },
                { sr: 10, name: "Ornidazole", pack: "100 ml PE Bottle (Nipple head)", status: "ACTD" },
                { sr: 11, name: "Fluconazole", pack: "100 ml PE Bottle (Nipple head)", status: "ACTD" },
                { sr: 12, name: "Gatifloxacin 200 mg", pack: "100 ml PE Bottle (Nipple head)", status: "ACTD" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "small-volume-parenteral",
      number: "05",
      icon: "beaker",
      title: "Small Volume Parenteral",
      subtitle: "Injectable ampoules & reconstitution solutions",
      description:
        "Precision-manufactured sterile injectables, ampoules and reconstitution solutions.",
      groups: [
        {
          subgroups: [
            {
              label: "Anti-Infective",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Amikacin Sulphate", strength: "100 mg/2 ml", pack: "Glass Vial", status: "UNDER DEVELOPMENT" },
                { sr: 2, name: "Amikacin Sulphate", strength: "250 mg/2 ml", pack: "Glass Vial", status: "UNDER DEVELOPMENT" },
                { sr: 3, name: "Amikacin Sulphate", strength: "500 mg/2 ml", pack: "Glass Vial", status: "UNDER DEVELOPMENT" },
                { sr: 4, name: "Gentamicin Sulphate", strength: "40 mg/2 ml", pack: "Glass Vial", status: "UNDER DEVELOPMENT" },
                { sr: 5, name: "Tobramycin Sulphate", strength: "40 mg/2 ml", pack: "Glass Vial", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Water for Injection",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Sterile Water for Injection", strength: "5 / 10 ml", pack: "PE Ampoule", status: "UNDER DEVELOPMENT" },
                { sr: 2, name: "NS Injection", strength: "5 / 10 ml", pack: "PE Ampoule", status: "UNDER DEVELOPMENT" },
                { sr: 3, name: "Sterile Water for Injection", strength: "5 / 10 / 15 / 20 / 25 / 30 ml", pack: "PE Ampoule", status: "UNDER DEVELOPMENT" },
                { sr: 4, name: "Sterile Water for Reconstitution", strength: "5 / 10 / 15 / 20 / 25 / 28 / 30 ml", pack: "PE Ampoule", status: "UNDER DEVELOPMENT" },
                { sr: 5, name: "Sterile Water for Reconstitution (Dry Syrup)", strength: "25 / 28 ml", pack: "PE Ampoule", status: "UNDER DEVELOPMENT" },
                { sr: 6, name: "Sterile Saline Solution", strength: "5 / 10 ml", pack: "PE Ampoule", status: "UNDER DEVELOPMENT" },
                { sr: 7, name: "Sterile Saline Wash", strength: "20 ml", pack: "PE Ampoule", status: "UNDER DEVELOPMENT" },
              ],
            },
            {
              label: "Other",
              columns: ["strength", "pack", "status"],
              products: [
                { sr: 1, name: "Lidocaine Hydrochloride 1%", strength: "3.6 / 7.2 ml", pack: "PE Ampoule", status: "UNDER DEVELOPMENT" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "cephalosporin-range",
      number: "06",
      icon: "shield",
      title: "Cephalosporin Range",
      subtitle: "PICS EU/TGA & TGA Australia approved plants",
      description:
        "A highly organized, internationally certified cephalosporin portfolio across all dosage forms.",
      groups: [
        {
          label: "PICS (EU & TGA) Approved Plant",
          subgroups: [
            {
              label: "Dry Powders for Injection",
              strengthLabel: "Available Strengths",
              columns: ["strength"],
              products: [
                { sr: 1, name: "Cefazolin for Injection", strength: "250 mg / 500 mg / 1000 mg" },
                { sr: 2, name: "Cefepime for Injection", strength: "250 mg / 500 mg / 1000 mg / 2000 mg" },
                { sr: 3, name: "Cefepime and Sulbactam for Injection", strength: "(250+125) mg, (500+250) mg, (1000+500) mg" },
                { sr: 4, name: "Cefoperazone and Sulbactam for Injection", strength: "(250+125) mg, (500+500) mg, (1000+1000) mg" },
                { sr: 5, name: "Cefoperazone for Injection", strength: "250 mg / 1000 mg / 2000 mg" },
                { sr: 6, name: "Cefotaxime and Sulbactam for Injection", strength: "(500+250) mg, (1000+500) mg" },
                { sr: 7, name: "Cefotaxime for Injection", strength: "250 mg / 500 mg / 1000 mg / 2000 mg" },
                { sr: 8, name: "Cefoxitin for Injection", strength: "1000 mg" },
                { sr: 9, name: "Cefpirome for Injection", strength: "1000 mg / 2000 mg" },
                { sr: 10, name: "Ceftazidime for Injection", strength: "250 mg / 500 mg / 1000 mg / 2000 mg" },
                { sr: 11, name: "Ceftizoxime for Injection", strength: "250 mg / 500 mg / 1000 mg" },
                { sr: 12, name: "Ceftriaxone and Sulbactam for Injection", strength: "(250+125) mg, (500+250) mg, (1000+500) mg" },
                { sr: 13, name: "Ceftriaxone and Tazobactam for Injection", strength: "(250+31.25) mg, (500+62.5) mg, (1000+125) mg" },
                { sr: 14, name: "Ceftriaxone for Injection", strength: "250 mg / 500 mg / 1000 mg / 2000 mg" },
                { sr: 15, name: "Cefuroxime for Injection", strength: "250 mg / 500 mg / 750 mg / 1500 mg" },
                { sr: 16, name: "Cephalothin for Injection", strength: "250 mg / 500 mg / 1000 mg" },
              ],
            },
            {
              label: "Capsules",
              strengthLabel: "Available Strengths",
              columns: ["strength"],
              products: [
                { sr: 1, name: "Cefaclor Capsules", strength: "250 mg / 500 mg" },
                { sr: 2, name: "Cefadroxil Capsules", strength: "250 mg / 500 mg" },
                { sr: 3, name: "Cefdinir Capsules", strength: "100 mg / 300 mg" },
                { sr: 4, name: "Cefixime Capsules", strength: "100 mg / 200 mg / 400 mg" },
                { sr: 5, name: "Cefpodoxime Proxetil Capsules", strength: "100 mg / 200 mg" },
                { sr: 6, name: "Cephalexin Capsules", strength: "250 mg / 500 mg" },
                { sr: 7, name: "Cephradine Capsules", strength: "250 mg / 500 mg" },
              ],
            },
            {
              label: "Tablets",
              strengthLabel: "Available Strengths",
              columns: ["strength"],
              products: [
                { sr: 1, name: "Cefaclor Extended Release Tablets", strength: "375 mg" },
                { sr: 2, name: "Cefaclor Tablets", strength: "125 mg / 375 mg" },
                { sr: 3, name: "Cefadroxil Dispersible Tablets", strength: "125 mg / 250 mg / 500 mg" },
                { sr: 4, name: "Cefadroxil Tablets", strength: "250 mg / 500 mg" },
                { sr: 5, name: "Cefdinir Dispersible Tablets", strength: "125 mg / 250 mg" },
                { sr: 6, name: "Cefixime Tablets", strength: "100 mg / 200 mg / 400 mg" },
                { sr: 7, name: "Cefixime Dispersible Tablets", strength: "50 mg / 100 mg / 200 mg" },
                { sr: 8, name: "Cefpodoxime Proxetil Dispersible Tablets", strength: "200 mg" },
                { sr: 9, name: "Cefpodoxime Proxetil Tablets", strength: "100 mg / 200 mg" },
                { sr: 10, name: "Cefprozil Tablets", strength: "250 mg / 500 mg" },
                { sr: 11, name: "Cefuroxime Axetil Tablets", strength: "125 mg / 250 mg / 500 mg" },
                { sr: 12, name: "Cephalexin Tablets", strength: "250 mg / 500 mg" },
                { sr: 13, name: "Cephalexin Dispersible Tablets", strength: "125 mg / 250 mg / 500 mg" },
                { sr: 14, name: "Cephalexin Extended Release Tablets", strength: "375 mg" },
              ],
            },
            {
              label: "Oral Suspensions",
              strengthLabel: "Available Strengths",
              columns: ["strength"],
              products: [
                { sr: 1, name: "Cefaclor for Oral Suspension", strength: "125 mg/5 ml (30 / 100 ml)" },
                { sr: 2, name: "Cefaclor for Oral Suspension", strength: "250 mg/5 ml (30 / 100 ml)" },
                { sr: 3, name: "Cefadroxil for Oral Suspension", strength: "125 mg/5 ml (30 / 60 / 100 ml)" },
                { sr: 4, name: "Cefadroxil for Oral Suspension", strength: "250 mg/5 ml (30 / 60 / 100 ml)" },
                { sr: 5, name: "Cefdinir for Oral Suspension", strength: "125 mg/5 ml (30 / 40 / 60 / 100 ml)" },
                { sr: 6, name: "Cefixime for Oral Suspension", strength: "50 mg/5 ml (30 / 60 / 100 ml)" },
                { sr: 7, name: "Cefixime for Oral Suspension", strength: "100 mg/5 ml (30 / 60 / 100 ml)" },
                { sr: 8, name: "Cefpodoxime Proxetil for Oral Suspension", strength: "50 mg/5 ml (30 / 60 ml)" },
                { sr: 9, name: "Cefpodoxime Proxetil for Oral Suspension", strength: "100 mg/5 ml (30 ml)" },
                { sr: 10, name: "Cefprozil for Oral Suspension", strength: "125 mg/5 ml (30 / 50 ml)" },
                { sr: 11, name: "Cefprozil for Oral Suspension", strength: "250 mg/5 ml (30 / 50 ml)" },
                { sr: 12, name: "Cefuroxime Axetil for Oral Suspension", strength: "125 mg/5 ml (30 / 50 / 70 ml)" },
                { sr: 13, name: "Cephalexin for Oral Suspension", strength: "125 mg/5 ml (30 / 40 / 60 / 100 ml)" },
                { sr: 14, name: "Cephalexin for Oral Suspension", strength: "250 mg/5 ml (30 / 60 / 100 ml)" },
                { sr: 15, name: "Cephradine for Oral Suspension", strength: "125 mg/5 ml (30 / 100 ml)" },
                { sr: 16, name: "Cephradine for Oral Suspension", strength: "250 mg/5 ml (30 / 100 ml)" },
              ],
            },
            {
              label: "Sachets",
              strengthLabel: "Available Strengths",
              columns: ["strength"],
              products: [
                { sr: 1, name: "Cefaclor for Oral Suspension", strength: "125 mg / 250 mg per sachet" },
                { sr: 2, name: "Cefadroxil for Oral Suspension", strength: "125 mg / 250 mg per sachet" },
                { sr: 3, name: "Cefdinir for Oral Suspension", strength: "125 mg per sachet" },
                { sr: 4, name: "Cefixime for Oral Suspension", strength: "50 mg / 100 mg per sachet" },
                { sr: 5, name: "Cefpodoxime Proxetil for Oral Suspension", strength: "50 mg / 100 mg per sachet" },
                { sr: 6, name: "Cefuroxime Axetil for Oral Suspension", strength: "125 mg per sachet" },
                { sr: 7, name: "Cephalexin for Oral Suspension", strength: "125 mg / 250 mg per sachet" },
              ],
            },
          ],
        },
        {
          label: "PICS (TGA, Australia) Approved Plant",
          subgroups: [
            {
              label: "Dry Powders for Injection — Developed",
              strengthLabel: "Available Strengths",
              columns: ["strength"],
              products: [
                { sr: 1, name: "Cefazolin for Injection", strength: "125 mg / 250 mg / 500 mg / 1 g / 2 g" },
                { sr: 2, name: "Cefepime for Injection", strength: "250 mg / 500 mg / 1 g / 2 g" },
                { sr: 3, name: "Ceftazidime for Injection", strength: "125 mg / 250 mg / 500 mg / 1 g / 2 g" },
                { sr: 4, name: "Ceftriaxone for Injection", strength: "125 mg / 250 mg / 500 mg / 1000 mg / 2000 mg" },
                { sr: 5, name: "Cefuroxime for Injection", strength: "250 mg / 500 mg / 750 mg / 1.5 g" },
                { sr: 6, name: "Cefotaxime for Injection", strength: "250 mg / 500 mg / 1 g / 2 g" },
                { sr: 7, name: "Cefpirome for Injection", strength: "250 mg / 500 mg / 1 g / 2 g" },
                { sr: 8, name: "Cefoperazone for Injection", strength: "1 g / 2 g" },
                { sr: 9, name: "Ceftizoxime for Injection", strength: "500 mg / 1 g / 2 g" },
                { sr: 10, name: "Cefoxitin for Injection", strength: "1 g / 2 g / 10 g" },
                { sr: 11, name: "Cefotetan for Injection", strength: "1 g / 10 g" },
                { sr: 12, name: "Cefodizime for Injection", strength: "500 mg / 1 g / 2 g" },
                { sr: 13, name: "Cephalothin for Injection", strength: "1 g / 1.5 g / 2 g" },
                { sr: 14, name: "Ceftazidime and Sulbactam for Injection", strength: "250 mg – 2 g" },
                { sr: 15, name: "Ceftazidime and Tazobactam for Injection", strength: "(500+62.5) mg, (1000+125) mg" },
                { sr: 16, name: "Ceftriaxone and Sulbactam for Injection", strength: "187.5 mg / 375 mg / 750 mg / 1.5 g" },
                { sr: 17, name: "Ceftriaxone and Tazobactam for Injection", strength: "281.25 mg / 562.5 mg / 1.125 g / 2.25 g" },
                { sr: 18, name: "Cefepime and Amikacin for Injection", strength: "2.5 g" },
                { sr: 19, name: "Cefepime and Sulbactam for Injection", strength: "750 mg / 1.5 g / 3 g" },
                { sr: 20, name: "Cefepime and Tazobactam for Injection", strength: "(1000+125) mg, (500+62.5) mg" },
                { sr: 21, name: "Cefotaxime and Sulbactam for Injection", strength: "375 mg / 750 mg / 1 g / 1.5 g" },
                { sr: 22, name: "Cefpirome and Sulbactam for Injection", strength: "750 mg / 1.5 g / 3 g" },
                { sr: 23, name: "Cefoperazone and Sulbactam for Injection", strength: "1 g / 1.5 g / 2 g" },
              ],
            },
            {
              label: "Dry Powders for Injection — Under Development",
              strengthLabel: "Available Strengths",
              columns: ["strength"],
              products: [
                { sr: 1, name: "Cephaloridine for Injection", strength: "500 mg / 1 g" },
                { sr: 2, name: "Cefamandole Nafate for Injection", strength: "1 g" },
                { sr: 3, name: "Cephapirin for Injection", strength: "500 mg / 1 g / 2 g" },
                { sr: 4, name: "Cefazedone for Injection", strength: "500 mg / 1 g / 2 g" },
                { sr: 5, name: "Cefradine for Injection", strength: "250 mg / 500 mg / 1 g / 2 g" },
                { sr: 6, name: "Ceftezole for Injection", strength: "1 g" },
                { sr: 7, name: "Cefminox for Injection", strength: "500 mg / 1 g / 2 g" },
                { sr: 8, name: "Cefonicid for Injection", strength: "500 mg / 1 g / 2 g" },
                { sr: 9, name: "Ceforanide for Injection", strength: "500 mg / 1 g / 2 g" },
                { sr: 10, name: "Cefotiam Hydrochloride for Injection", strength: "500 mg / 1 g" },
                { sr: 11, name: "Cefbuperazone for Injection", strength: "500 mg / 1 g" },
                { sr: 12, name: "Cefluzonam for Injection", strength: "250 mg / 500 mg / 1 g" },
                { sr: 13, name: "Cefmetazole for Injection", strength: "500 mg / 1 g / 2 g" },
                { sr: 14, name: "Cefpiramide for Injection", strength: "500 mg / 1 g / 2 g" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

/* =============================================================================
   MOTION VARIANTS
============================================================================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

/* =============================================================================
   SMALL UTILITIES
============================================================================= */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined" || ids.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);

  return active;
}

function countProducts(data: CatalogueData) {
  return data.sections.reduce(
    (sectionSum, section) =>
      sectionSum +
      section.groups.reduce(
        (groupSum, group) =>
          groupSum + group.subgroups.reduce((sgSum, sg) => sgSum + sg.products.length, 0),
        0
      ),
    0
  );
}

/* =============================================================================
   STATUS PILL
============================================================================= */
function StatusPill({ status }: { status?: string }) {
  if (!status) return <span className="text-gray-300">—</span>;
  const pending = status.toUpperCase().includes("UNDER DEVELOPMENT");
  const Icon = pending ? Clock : BadgeCheck;
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium",
        pending
          ? "border-gray-200 bg-gray-50 text-gray-500"
          : "border-[#3D5A80]/20 bg-[#3D5A80]/[0.08] text-[#3D5A80]",
      ].join(" ")}
    >
      <Icon className="h-3 w-3" aria-hidden="true" />
      {pending ? "Under Development" : status}
    </span>
  );
}

/* =============================================================================
   DATA TABLE (renders one ProductSubgroup)
============================================================================= */
function DataTable({ subgroup }: { subgroup: ProductSubgroup }) {
  const showStrength = subgroup.columns.includes("strength");
  const showPack = subgroup.columns.includes("pack");
  const showStatus = subgroup.columns.includes("status");

  return (
    <div className="mt-8 first:mt-0">
      {subgroup.label && (
        <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#3D5A80]">
          <span className="h-3 w-1 rounded-full bg-[#8B1E2D]" aria-hidden="true" />
          {subgroup.label}
        </h4>
      )}
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full min-w-[600px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#F2F4F7] text-xs uppercase tracking-wide text-gray-500">
              <th scope="col" className="sticky left-0 z-10 bg-[#F2F4F7] px-4 py-3 font-semibold text-[#0D2240]">
                Product / Generic Name
              </th>
              {showStrength && (
                <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">
                  {subgroup.strengthLabel ?? "Strength"}
                </th>
              )}
              {showPack && (
                <th scope="col" className="px-4 py-3 font-semibold">
                  Pack
                </th>
              )}
              {showStatus && (
                <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">
                  Dossier Status
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {subgroup.products.map((product) => (
              <tr key={`${product.sr}-${product.name}`} className="group transition-colors hover:bg-[#3D5A80]/[0.05]">
                <td className="sticky left-0 z-10 bg-white px-4 py-3 font-medium text-[#0D2240] group-hover:bg-[#F7F9FB]">
                  {product.name}
                  {product.detail && (
                    <details className="mt-1 max-w-xs">
                      <summary className="cursor-pointer text-xs font-normal text-[#3D5A80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D5A80]">
                        View composition
                      </summary>
                      <p className="mt-1 text-xs font-normal leading-relaxed text-gray-500">{product.detail}</p>
                    </details>
                  )}
                </td>
                {showStrength && (
                  <td className="px-4 py-3 text-gray-600">{product.strength ?? "—"}</td>
                )}
                {showPack && <td className="px-4 py-3 text-gray-600">{product.pack ?? "—"}</td>}
                {showStatus && (
                  <td className="px-4 py-3">
                    <StatusPill status={product.status} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* =============================================================================
   SECTION BLOCK
============================================================================= */
function SectionBlock({ section }: { section: CatalogueSection }) {
  const Icon = ICONS[section.icon];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-32 border-t border-gray-100 py-14 first:border-t-0 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="relative"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-2 -top-8 select-none text-[88px] font-black leading-none text-[#0D2240]/[0.05] md:text-[120px]"
          >
            {section.number}
          </span>
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0D2240] text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8B1E2D]">
                  {section.number} · {section.subtitle}
                </p>
              </div>
              <h2 id={`${section.id}-heading`} className="mt-4 text-2xl font-bold text-[#0D2240] md:text-3xl">
                {section.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">{section.description}</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-10">
          {section.groups.map((group, gi) => (
            <div key={group.label ?? gi} className={gi > 0 ? "mt-12" : undefined}>
              {group.label && (
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0D2240]/10 bg-[#0D2240]/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#0D2240]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#8B1E2D]" aria-hidden="true" />
                  {group.label}
                </div>
              )}
              {group.subgroups.map((subgroup) => (
                <DataTable key={subgroup.label ?? subgroup.products[0]?.name} subgroup={subgroup} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================================================
   SECTION NAV (sticky, active-state aware)
============================================================================= */
function SectionNav({ sections }: { sections: CatalogueSection[] }) {
  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const active = useActiveSection(ids);

  const handleJump = (id: string) => (event: MouseEvent) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Catalogue sections"
      className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur print:hidden"
    >
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 py-2.5 sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={handleJump(section.id)}
              aria-current={isActive ? "true" : undefined}
              className={[
                "shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D5A80]",
                isActive ? "bg-[#0D2240] text-white" : "text-gray-500 hover:bg-[#F2F4F7] hover:text-[#0D2240]",
              ].join(" ")}
            >
              <span className="mr-1.5 opacity-60">{section.number}</span>
              {section.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

/* =============================================================================
   BREADCRUMB
============================================================================= */
function CatalogueBreadcrumb({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-white print:hidden">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1.5 px-5 py-3 text-sm text-gray-500 sm:px-8">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-300" aria-hidden="true" />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="rounded transition-colors hover:text-[#0D2240] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D5A80]"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "font-medium text-[#0D2240]" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* =============================================================================
   HERO
============================================================================= */
function CatalogueHero({ data, productCount }: { data: CatalogueData; productCount: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <motion.div
          initial={shouldReduceMotion ? "show" : "hidden"}
          animate="show"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B1E2D]">
            {data.eyebrow}
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-[#0D2240] md:text-5xl lg:text-6xl">
            {data.titleLine1}
            <br />
            <span className="text-[#8B1E2D]">{data.titleLine2}</span>
          </motion.h1>
          <motion.div variants={fadeUp} className="mt-5 h-1 w-16 rounded-full bg-[#8B1E2D]" aria-hidden="true" />
          <motion.p variants={fadeUp} className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
            {data.tagline}
          </motion.p>

          <motion.ul variants={stagger} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {data.features.map((feature) => {
              const Icon = ICONS[feature.icon];
              return (
                <motion.li
                  key={feature.label}
                  variants={fadeUp}
                  className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-3 py-2.5 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#8B1E2D] text-white">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-[#0D2240]">{feature.label}</span>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`#${data.sections[0]?.id ?? ""}`}
              onClick={(event) => {
                event.preventDefault();
                document.getElementById(data.sections[0]?.id ?? "")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#0D2240] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0D2240]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D5A80]"
            >
              Explore Catalogue
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-[#0D2240]">{productCount}+</span> formulations across{" "}
              <span className="font-semibold text-[#0D2240]">{data.sections.length}</span> categories
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-md"
          aria-hidden="true"
        >
          <div className="absolute inset-[6%] rotate-45 rounded-[2.5rem] bg-[#0D2240]">
            <div
              className="absolute inset-0 rounded-[2.5rem] opacity-[0.12]"
              style={{
                backgroundImage: "radial-gradient(circle, #FFFFFF 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
              }}
            />
          </div>
          <div className="absolute bottom-[2%] right-[2%] h-[38%] w-[38%] rotate-45 rounded-3xl bg-[#8B1E2D]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-xl">
              <ShieldCheck className="h-12 w-12 text-[#0D2240]" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

/* =============================================================================
   DOWNLOAD BUTTON
   Uses the browser's native print-to-PDF (no extra dependency required).
   Sets document.title first so "Save as PDF" suggests a meaningful filename.
============================================================================= */
function DownloadCatalogueButton({ fileName }: { fileName: string }) {
  const handleDownload = () => {
    if (typeof window === "undefined") return;
    const originalTitle = document.title;
    document.title = fileName.replace(/\.pdf$/i, "");
    window.print();
    window.setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="group inline-flex items-center gap-2 rounded-full bg-[#8B1E2D] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#8B1E2D]/20 transition-all hover:bg-[#6E1622] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E2D] print:hidden"
    >
      <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
      Download Catalogue
    </button>
  );
}

/* =============================================================================
   FOOTER
============================================================================= */
function CatalogueFooter({ data }: { data: CatalogueData }) {
  return (
    <footer className="border-t border-gray-100 bg-[#F2F4F7]">
      <div className="mx-auto max-w-6xl px-5 py-12 text-center sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {data.footerTags.map((tag) => (
            <span key={tag} className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0D2240]">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <DownloadCatalogueButton fileName={data.downloadFileName} />
        </div>
        <p className="mt-6 text-xs text-gray-400">{data.sourceLine}</p>
      </div>
    </footer>
  );
}

/* =============================================================================
   PRODUCT CATALOGUE — the generic, reusable component.
   Pass any CatalogueData object to render a fully-featured catalogue page.
============================================================================= */
export function ProductCatalogue({ data }: { data: CatalogueData }): ReactNode {
  const productCount = useMemo(() => countProducts(data), [data]);

  return (
    <div className="min-h-screen bg-white">
      <CatalogueBreadcrumb items={data.breadcrumbs} />
      <SectionNav sections={data.sections} />
      <main>
        <CatalogueHero data={data} productCount={productCount} />
        {data.sections.map((section) => (
          <SectionBlock key={section.id} section={section} />
        ))}
      </main>
      <CatalogueFooter data={data} />
    </div>
  );
}

/* =============================================================================
   PAGE — drop this file at, e.g., app/products/mecca-labs/pharmaceutical-product-list/page.tsx
   (or import { ProductCatalogue, pharmaceuticalCatalogue } elsewhere).
============================================================================= */
export default function PharmaceuticalProductCataloguePage() {
  return <ProductCatalogue data={pharmaceuticalCatalogue} />;
}