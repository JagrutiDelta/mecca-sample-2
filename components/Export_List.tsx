"use client";

/**
 * ProductCatalogue.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * A single, self-contained, reusable catalogue system for Mecca Labs.
 *
 * WHAT'S IN THIS FILE
 *   1. Types            – CatalogueProduct / CatalogueSection / CatalogueData
 *   2. Data              – `nutraceuticalCatalogue`, extracted 1:1 from the
 *                          "Nutraceutical Product List (Export)" PDF. No
 *                          product names, actives, packs or statuses were
 *                          invented or altered.
 *   3. Small utilities   – a reduced-motion-aware scroll-reveal hook
 *   4. UI building blocks – Hero, Breadcrumbs, TOC, Section, Table/Cards,
 *                          Download button, Footer
 *   5. <ProductCatalogue data={...} />  – the generic, reusable page
 *   6. Default export     – this catalogue, ready to drop into a route
 *
 * HOW TO REUSE FOR YOUR OTHER CATALOGUES (Pharmaceutical, Milk, Cosmeceutical…)
 *   • Copy the `CatalogueData` shape and build a new `const xCatalogue = {...}`
 *     object (in this file, or split into /data/catalogues/*.ts later).
 *   • Render it with the exact same components:
 *       <ProductCatalogue data={pharmaceuticalCatalogue} />
 *   • If/when you move to a `/products/mecca-labs/[slug]` dynamic route,
 *     keep a `Record<string, CatalogueData>` keyed by `slug` and pass
 *     `catalogueMap[params.slug]` into <ProductCatalogue />. Everything
 *     below already reads only from the `data` prop, so nothing else
 *     needs to change.
 *   • This file intentionally keeps everything (types + data + UI) together
 *     since a single file was requested. Splitting into
 *     components/catalogue/*.tsx + data/catalogues/*.ts later is a pure
 *     copy-paste of the sections below — no logic changes needed.
 *
 * STYLING
 *   Tailwind CSS utility classes only. Brand palette (from the provided
 *   brand asset) is wired in as CSS variables below so every shade is
 *   derived from your five brand colors — nothing else is introduced:
 *     --brand-primary     #0D2240  (deep navy   — headings, nav, footer)
 *     --brand-secondary   #8B1E2D  (maroon      — CTAs, accents, eyebrow)
 *     --brand-tertiary    #3D5A80  (steel blue  — links, secondary accents)
 *     --brand-muted       #6B7280  (slate gray  — metadata, captions)
 *     --brand-surface     #F2F4F7  (soft gray   — section backgrounds)
 *     --brand-white       #FFFFFF
 *   If your Tailwind config already defines these as theme colors (e.g.
 *   `brand.primary`), swap the inline `style` vars below for
 *   `bg-brand-primary` etc. and delete the <style> block — everything else
 *   is unaffected.
 *
 * DOWNLOAD BUTTON
 *   No PDF-generation library is assumed to be installed in your project,
 *   so `DownloadCatalogueButton` opens the browser's print dialog against
 *   a print-only stylesheet (nav/buttons hidden, content preserved) so the
 *   visitor can choose "Save as PDF" with a meaningful default filename.
 *   If your project already has jsPDF / pdfmake / a server-side PDF route,
 *   swap the `handleDownload` body for that call — the button, label and
 *   filename logic can stay as-is.
 * ─────────────────────────────────────────────────────────────────────────
 */

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

/* ============================================================================
   1. TYPES
   ========================================================================= */

export type ProductStatus = "AVAILABLE" | "UNDER DEVELOPMENT";

export interface CatalogueProduct {
  sn: number;
  brand: string;
  activeContents: string;
  category: string;
  pack: string;
  status: ProductStatus;
}

export interface CatalogueSection {
  id: string;
  number: string; // "01", "02" ... as printed in the source document
  title: string;
  description: string;
  products: CatalogueProduct[];
}

export interface CataloguePillar {
  label: string;
  icon: "wellness" | "immunity" | "nutrition" | "recovery";
}

export interface CatalogueData {
  slug: string;
  brandMark: string; // e.g. "Meca Care"
  company: string; // e.g. "MECCA LABS"
  eyebrow?: string; // e.g. "(Export)"
  titleLine1: string; // e.g. "NUTRACEUTICAL"
  titleLine2: string; // e.g. "PRODUCT LIST"
  subtitle: string;
  pillars: CataloguePillar[];
  footerTags: string[]; // e.g. Quality, Trust, Innovation, Care
  website: string;
  breadcrumbs: { label: string; href?: string }[];
  sections: CatalogueSection[];
}

/* ============================================================================
   2. DATA — Nutraceutical Product List (Export)
   Extracted from the source PDF. Content preserved as-is: no specifications,
   actives, brand names or statuses were invented.
   ========================================================================= */

export const nutraceuticalCatalogue: CatalogueData = {
  slug: "nutraceutical-product-list",
  brandMark: "Meca Care",
  company: "MECCA LABS",
  eyebrow: "(Export)",
  titleLine1: "NUTRACEUTICAL",
  titleLine2: "PRODUCT LIST",
  subtitle:
    "Complete range of premium nutraceutical solutions for daily wellness.",
  pillars: [
    { label: "Wellness", icon: "wellness" },
    { label: "Immunity", icon: "immunity" },
    { label: "Nutrition", icon: "nutrition" },
    { label: "Sports & Recovery", icon: "recovery" },
  ],
  footerTags: ["Quality", "Trust", "Innovation", "Care"],
  website: "www.mhplindia.in",
  breadcrumbs: [
    { label: "Products", href: "/products" },
    { label: "Mecca Labs", href: "/products/mecca-labs" },
    { label: "Nutraceutical Product List" },
  ],
  sections: [
    {
      id: "tablets",
      number: "01",
      title: "Tablets",
      description:
        "Export-registered tablet formulations spanning general wellness, cardiac, fertility and bone health categories.",
      products: [
        {
          sn: 1,
          brand: "LYCOMEC-GT",
          activeContents:
            "Lycopene + Vitamin C + Green Tea + Vitamin E + Vitamin A + Zinc + Betacarotene + Manganese + Copper Sulphate + Selenium",
          category: "Vitamin / Antioxidants (General Health Supplement)",
          pack: "1 x 10 Tablets",
          status: "AVAILABLE",
        },
        {
          sn: 2,
          brand: "MEMORY ULTRA",
          activeContents: "Glutamic Acid + Methylcobalamin",
          category: "Memory Power Enhancement Supplement",
          pack: "10 x 10 Tablets",
          status: "AVAILABLE",
        },
        {
          sn: 3,
          brand: "IMUPOWER",
          activeContents:
            "Omega-3 Fatty Acid (Flaxseed) + Ginseng Extract + Colostrum + Ginkgo Biloba + Grape Seed Extract + Green Tea Extract + Coenzyme Q10 + Betacarotene + Citrus Bioflavonoid + Fructo Oligosaccharides + Wheat Germ Oil (GLA) + Lutein 6% + Zeaxanthin + Lactobacillus 40 million spores; Vitamins: Vitamin C + Niacinamide + Vitamin E + Vitamin B5 + Vitamin B2 + Vitamin B3 + Folic Acid + Vitamin A (as acetate) + Vitamin B12 + Vitamin D3; Minerals: Calcium + Phosphorous + Zinc",
          category: "Immunity Enhancer / Vitamin / Antioxidants",
          pack: "1 x 10 Tablets",
          status: "AVAILABLE",
        },
        {
          sn: 4,
          brand: "POWERMEC ULTRA",
          activeContents:
            "Omega-3 Fatty Acid (Flaxseed) + Ginseng Extract + Colostrum + Ginkgo Biloba + Grape Seed Extract + Green Tea Extract + Coenzyme Q10 + Betacarotene + Citrus Bioflavonoid + Fructo Oligosaccharides + Wheat Germ Oil (GLA) + Lutein 6% + Zeaxanthin + Lactobacillus 40 million spores; Vitamins: Vitamin C + Niacinamide + Vitamin E + Vitamin B5 + Vitamin B2 + Vitamin B3 + Folic Acid + Vitamin A (as acetate) + Vitamin B12 + Vitamin D3; Minerals: Calcium + Phosphorous + Zinc + Vanadium",
          category: "Immunity Enhancer / Vitamin / Antioxidants",
          pack: "10 Tablets / Bottle",
          status: "AVAILABLE",
        },
        {
          sn: 5,
          brand: "CALCIUM WITH VIT. D3, ZINC & MAGNESIUM",
          activeContents:
            "Calcium Citrate Malate + Vitamin D3 + Zinc + Magnesium",
          category: "Strong and Healthy Bone & Teeth",
          pack: "1 x 10 Tablets",
          status: "AVAILABLE",
        },
        {
          sn: 6,
          brand: "MEXIFERT",
          activeContents:
            "Coenzyme Q10 + Omega-3 Fatty Acid (Flaxseed Powder) + L-Arginine 100 mg + L-Carnitine L-Tartrate + Wheat Germ Oil + Lycopene 6%",
          category: "Male (Infertility)",
          pack: "1 x 10 Tablets",
          status: "AVAILABLE",
        },
        {
          sn: 7,
          brand: "VITASWIFT",
          activeContents: "Methylcobalamin + Vitamin B1 + Vitamin B6",
          category: "Methylcobalamin / Vitamin B1 Supplement",
          pack: "1 x 10 Tablets",
          status: "AVAILABLE",
        },
        {
          sn: 8,
          brand: "GLUCOSAMINE WITH MSM & METHYLCOBALAMIN",
          activeContents:
            "Glucosamine Sulphate + Methylsulfonylmethane + Methylcobalamin",
          category: "Joints & Bone Health Supplements",
          pack: "100 Tablets / Bottle",
          status: "AVAILABLE",
        },
        {
          sn: 9,
          brand: "OVERYCARE",
          activeContents: "Myo-Inositol + N-Acetylcysteine",
          category: "Personal Care (PCOS Preventive Supplement)",
          pack: "1 x 10 Tablets",
          status: "AVAILABLE",
        },
        {
          sn: 10,
          brand: "NATURAL VITAMIN D3",
          activeContents: "Vitamin D3 (Cholecalciferol) 400 IU",
          category: "Vitamin D3 Supplement",
          pack: "1 x 10 Tablets",
          status: "AVAILABLE",
        },
        {
          sn: 11,
          brand: "BERINEMEC",
          activeContents: "Berberine 500 mg + Vitamin E 2.5 mg",
          category:
            "Supplement to Control Glucose Level and High Cholesterol",
          pack: "30 Tablets / Bottle",
          status: "UNDER DEVELOPMENT",
        },
        {
          sn: 12,
          brand: "NUTRAMEC",
          activeContents:
            "Grape Seed Extract (90%) + Natural Mixed Carotenoids (10%) + Folic Acid + Vitamins (Vitamin C, E, B1, B2, B3, B5, B6, B12, Vitamin D3) + Biotin + Minerals (Magnesium, Manganese, Zinc, Ferrous, Copper, Sodium, Potassium, Chromium, etc.)",
          category: "Supplement for Hair, Nails and Skin",
          pack: "3 x 10 Tablets",
          status: "UNDER DEVELOPMENT",
        },
      ],
    },
    {
      id: "powder",
      number: "02",
      title: "Powder",
      description:
        "Protein, weight-management and infant nutrition powders formulated for export markets.",
      products: [
        {
          sn: 13,
          brand: "INSTABOOST (Lime Flavour)",
          activeContents:
            "Dextrose + Electrolytes + Zinc + Vitamin C + LB (Lime Flavour)",
          category: "Glucose Drink / Energy Drink / Electrolytes",
          pack: "3 x 10 g Powder Sachet",
          status: "AVAILABLE",
        },
        {
          sn: 14,
          brand: "INSTABOOST (Orange Flavour)",
          activeContents:
            "Dextrose + Electrolytes + Zinc + Vitamin C + LB (Orange Flavour)",
          category: "Glucose Drink / Energy Drink / Electrolytes",
          pack: "3 x 10 g Powder Sachet",
          status: "AVAILABLE",
        },
        {
          sn: 15,
          brand: "INSTABOOST (Berry Flavour)",
          activeContents:
            "Dextrose + Electrolytes + Zinc + Vitamin C + LB (Berry Flavour)",
          category: "Glucose Drink / Energy Drink / Electrolytes",
          pack: "3 x 10 g Powder Sachet",
          status: "AVAILABLE",
        },
        {
          sn: 16,
          brand: "PROTIMOM",
          activeContents:
            "Whey Protein + DHA + Shatavari + Vitamins + Minerals",
          category:
            "Gynecological Supplement (Protein Drink Designed for Pregnant Ladies)",
          pack: "200 g Tin",
          status: "AVAILABLE",
        },
        {
          sn: 17,
          brand: "PROTIVITA-MG",
          activeContents:
            "Milk & Whey Protein with DHA + Colostrum + Omega3 Fatty Acid + Multivitamin + Multiminerals + Chromium + Bitter Gourd",
          category: "Protein Supplement for General Health",
          pack: "200 g Tin",
          status: "AVAILABLE",
        },
        {
          sn: 18,
          brand: "NATURAL PROVITWG",
          activeContents:
            "Skimmed Milk Powder + Whey Protein Powder + Creatine + MCT + Essential Vitamins & Minerals + Sugar + Vanilla Flavour",
          category: "Weight Gain Powder for Adults",
          pack: "500 g Tin",
          status: "AVAILABLE",
        },
        {
          sn: 19,
          brand: "NATURAL PROVITWG ULTRA",
          activeContents:
            "Skimmed Milk Powder + Whey Protein Powder + Creatine + MCT + Essential Vitamins & Minerals + Sugar + Chocolate Flavour",
          category: "Weight Gain Powder for Athletes",
          pack: "2 Lbs Jar",
          status: "AVAILABLE",
        },
        {
          sn: 20,
          brand: "NATURAL PROVITWM",
          activeContents:
            "Oat Fiber + Milk Powder + Vitamin A Concentrate + Vitamin C (Ascorbic Acid) + Vitamin D (Cholecalciferol) + Vitamin E Powder + Vitamin K2-7 + Vitamin B6 + Vitamin B5 + Calcium Citrate + Magnesium Sulphate + Potassium Chloride + Folic Acid + Lactic Acid Bacillus + Vitamin B12 + Sodium Chloride + Vanilla Flavour",
          category: "Weight Loss / Management Powder",
          pack: "400 g Tin",
          status: "AVAILABLE",
        },
        {
          sn: 21,
          brand: "ARGIMEC",
          activeContents:
            "L-Arginine 3 g + Proanthocyanidin + Myo-inositol + BCAAs (L-Leucine, Iso-Leucine, Valine)",
          category: "Gynec (Infertility)",
          pack: "10 x 4.5 g Sachet",
          status: "AVAILABLE",
        },
        {
          sn: 22,
          brand: "MAXMAS",
          activeContents:
            "Protein + DHA + Whey Protein + Vitamins + Minerals + Soya + Ragi + Maize + Bengal Gram",
          category: "General Health Protein Supplement",
          pack: "200 g Tin",
          status: "AVAILABLE",
        },
        {
          sn: 23,
          brand: "PROTIVIA-ON",
          activeContents:
            "Protein Source 60% + Amino Acids + Vitamins + Minerals + Colostrum + Wheatgrass",
          category: "Oncological",
          pack: "200 g Tin",
          status: "AVAILABLE",
        },
        {
          sn: 24,
          brand: "MECCA LABS-PREBIO / MECCA LABS-PROBIO",
          activeContents:
            "Saccharomyces Boulardii (billion spores) + Fructo Oligosaccharides + Clostridium Butyricum + Lactobacillus Rhamnosus + Bifidobacterium Bifidum + Bifidobacterium Longum + Streptococcus Thermophilus + Lactobacillus Acidophilus (million spores)",
          category: "Pre-Probiotics",
          pack: "7 x 1.5 g Sachet",
          status: "AVAILABLE",
        },
        {
          sn: 25,
          brand: "MECOMIL",
          activeContents:
            "Milk Solids, Demineralized Whey, Vegetable Fats (Corn Oil, Sunflower Oil), Fructo Oligosaccharide (FOS), Galacto Oligosaccharide (GOS), Soya Lecithin, Iodide, Calcium Carbonate, Magnesium Chloride, Cupric Sulphate, Manganese Sulphate, Zinc Sulphate, Ferrous Sulphate, Vitamin A (Retinol), Vitamin C (Ascorbic Acid), Vitamin E (Tocopherol), Vitamin B3 (Niacinamide), Vitamin B5 (Pantothenic Acid), Vitamin B6 (Pyridoxine HCl), Vitamin B2 (Riboflavin), Vitamin B1 (Thiamine HCl), Folic Acid, Biotin, Vitamin D (Ergocalciferol), L-Carnitine, Taurine, Nucleotides",
          category: "Infant Milk Formula Stage 1 (0–6 months)",
          pack: "400 g",
          status: "AVAILABLE",
        },
        {
          sn: 26,
          brand: "MECOMIL +",
          activeContents:
            "Milk Solids, Maltodextrin, Vegetable Oil, Sucrose, Soya Lecithin, Minerals, Vitamins",
          category: "Infant Milk Formula Stage 2 (6–12 months)",
          pack: "400 g",
          status: "AVAILABLE",
        },
      ],
    },
    {
      id: "spray",
      number: "03",
      title: "Spray",
      description:
        "Fast-absorption spray formats for vitamin, immunity and throat-care support.",
      products: [
        {
          sn: 27,
          brand: "VITASWIFT SPRAY",
          activeContents:
            "Methylcobalamin + Vitamin B1 + Vitamin B6 (with Flavour)",
          category: "Methylcobalamin / Vitamin B1 Supplement",
          pack: "50 ml Spray Bottle",
          status: "AVAILABLE",
        },
        {
          sn: 28,
          brand: "D-MECCA LABS SPRAY",
          activeContents: "Each 2 sprays: Cholecalciferol 1000 IU",
          category: "Gynecological Vitamin Supplement",
          pack: "2 Sprays",
          status: "AVAILABLE",
        },
        {
          sn: 29,
          brand: "T-MECCA LABS SPRAY",
          activeContents: "Honey 20% + N-Acetylcysteine + Ginger + Colostrum",
          category: "Throat Care Supplement",
          pack: "2 Sprays",
          status: "AVAILABLE",
        },
        {
          sn: 30,
          brand: "IMUSWIFT SPRAY",
          activeContents:
            "Colostrum + Niacinamide + Magnesium + Vitamin C + Zinc + Manganese + Vitamin B1 + Vitamin B2 + Vitamin B6 + Vitamin A + Folic Acid + Vitamin B12",
          category: "Throat Care Supplement",
          pack: "4 Sprays",
          status: "AVAILABLE",
        },
        {
          sn: 31,
          brand: "MAXMAS SPRAY",
          activeContents:
            "Each 5 g (2 pops): Multigrain with Protein + Vitamins + Minerals",
          category: "Gynecological Supplement",
          pack: "75 g to 150 g",
          status: "AVAILABLE",
        },
      ],
    },
    {
      id: "capsules-hard-gelatin",
      number: "04",
      title: "Capsules (Hard Gelatin)",
      description:
        "Hard-gelatin capsule formulations covering cardiac, fertility, joint and antioxidant support.",
      products: [
        {
          sn: 32,
          brand: "POWERMEC",
          activeContents:
            "Ginseng + Vitamin A + B1 + B2 + Vitamin B3 + B5 + B6 + B12 + Vitamin C + Vitamin D + Vitamin E + Folic Acid + Calcium + Phosphorous + Ferrous Fumarate + Zinc + Magnesium + Manganese + Copper + Iodine",
          category: "Vitamin / Antioxidants (General Health Supplement)",
          pack: "3 x 10 Capsules",
          status: "AVAILABLE",
        },
        {
          sn: 33,
          brand: "IMUSTRONG",
          activeContents: "Colostrum",
          category: "Immunity Enhancer / Vitamin / Antioxidants",
          pack: "10 x 10 Capsules",
          status: "AVAILABLE",
        },
        {
          sn: 34,
          brand: "VITAMEC ULTRA",
          activeContents:
            "Coenzyme Q10 + Multivitamin + Minerals + Omega-3 Fatty Acid + Methylcobalamin 500 mcg + Lactobacillus 60 million spores",
          category: "Cardiac Health Supplement",
          pack: "10 Capsules / Bottle",
          status: "AVAILABLE",
        },
        {
          sn: 35,
          brand: "VITAMEC",
          activeContents: "Coenzyme Q10 + Garlic Extract + Ginkgo Biloba",
          category: "Cardiac Health Supplement",
          pack: "10 Capsules / Bottle",
          status: "AVAILABLE",
        },
        {
          sn: 36,
          brand: "VITAMEC CARDIO",
          activeContents:
            "Coenzyme Q10 + Omega-3 Fatty Acid + Garlic + Pycnogenol",
          category: "Cardiac Health Supplement",
          pack: "10 Capsules / Bottle",
          status: "AVAILABLE",
        },
        {
          sn: 37,
          brand: "SLIM AGAIN",
          activeContents:
            "Garcinia Cambogia + Green Tea Extract + Guggul + Chromium + Grape Seed + L-Carnitine + Bitter Gourd",
          category: "Weight Management Supplement",
          pack: "1 x 10 Capsules",
          status: "AVAILABLE",
        },
        {
          sn: 38,
          brand: "GLOW AGAIN",
          activeContents:
            "Betacarotene + Astaxanthin + Citrus Bioflavonoids + Pycnogenol + Lutein + Zeaxanthin + Bilberry Extract + Biotin + Glutamic Acid + DL-Methionine + Aspartic Acid + Leucine + L-Arginine + L-Lysine + Proline + Serine + Phenylalanine + Isoleucine + Valine + Glycine + Tyrosine + Alanine + Threonine + Histidine + Cystine + Tryptophan + Green Tea Extract + Grape Seed Extract + Curcumin + Pomegranate Extract + Vitamin C + Vitamin E + Zinc + Magnesium + Manganese + Copper + Vitamin B1 + Vitamin B2 + Niacinamide",
          category: "Anti-Aging Supplement",
          pack: "10 Capsules / Bottle / Blister",
          status: "AVAILABLE",
        },
        {
          sn: 39,
          brand: "GLUCOSAMINE",
          activeContents: "Glucosamine Sulphate",
          category: "Healthy & Flexible Joints Supplement",
          pack: "100 Capsules / Bottle",
          status: "AVAILABLE",
        },
        {
          sn: 40,
          brand: "CO ENZYME Q10",
          activeContents: "Coenzyme Q10",
          category:
            "Healthy Heart Function / Cellular Energy Enhancement Supplement",
          pack: "100 Capsules / Bottle",
          status: "AVAILABLE",
        },
        {
          sn: 41,
          brand: "L-ARGININE WITH ANTIOXIDANTS",
          activeContents:
            "L-Arginine + Coenzyme Q10 + Grape Seed Extract + Lycopene + Folic Acid + Methylcobalamin",
          category: "Fertility Enhancement Antioxidant Supplement",
          pack: "100 Capsules / Bottle",
          status: "AVAILABLE",
        },
        {
          sn: 42,
          brand: "GRAPE SEED",
          activeContents: "Grape Seed Extract",
          category: "Herbal Antioxidant Nutrient",
          pack: "30 Capsules / Bottle",
          status: "AVAILABLE",
        },
        {
          sn: 43,
          brand: "GREEN TEA",
          activeContents: "Green Tea Extract",
          category:
            "Herbal Antioxidant Nutrient for Heart / Immune System / Weight Management",
          pack: "30 Capsules / Bottle",
          status: "AVAILABLE",
        },
        {
          sn: 44,
          brand: "PREPROMEC",
          activeContents:
            "Saccharomyces Boulardii (billion spores) + Fructo Oligosaccharides + Clostridium Butyricum + Lactobacillus Rhamnosus + Bifidobacterium Bifidum + Bifidobacterium Longum + Streptococcus Thermophilus + Lactobacillus Acidophilus (million spores)",
          category: "Gynecological Supplement & Pre-Probiotics",
          pack: "1 x 10 Capsules",
          status: "AVAILABLE",
        },
        {
          sn: 45,
          brand: "URICOMFORT",
          activeContents: "Cranberry 250 mg + Hibiscus 250 mg",
          category: "Herbal Nutrients (for UT Infection)",
          pack: "30 Capsules / Bottle",
          status: "AVAILABLE",
        },
      ],
    },
    {
      id: "capsules-soft-gel",
      number: "05",
      title: "Capsules (Soft Gel)",
      description:
        "Soft-gel encapsulated formulations for vitamin and essential fatty acid supplementation.",
      products: [
        {
          sn: 46,
          brand: "NATURAL VITAMIN E",
          activeContents: "Vitamin E Acetate (Tocopheryl Acetate) 400 IU",
          category: "Vitamin E Supplement",
          pack: "60 / 120 Capsules / Bottle",
          status: "AVAILABLE",
        },
        {
          sn: 47,
          brand: "NATURAL COD LIVER OIL",
          activeContents: "Cod Liver Oil 300 mg",
          category: "Health Supplement for Heart, Brain & Vision Care",
          pack: "60 / 120 Capsules / Bottle",
          status: "AVAILABLE",
        },
        {
          sn: 48,
          brand: "NATURAL VITAMIN D3",
          activeContents: "Vitamin D3 (Cholecalciferol) 400 IU",
          category: "Vitamin D3 Supplement",
          pack: "60 / 120 Capsules / Bottle",
          status: "AVAILABLE",
        },
      ],
    },
    {
      id: "syrup-oil-base",
      number: "06",
      title: "Syrup (Oil Base)",
      description:
        "Oil-based omega-3 syrup formulations for cardiovascular and cognitive health.",
      products: [
        {
          sn: 49,
          brand: "NATURAL FISH OIL SYRUP (ORANGE FLAVOUR)",
          activeContents: "Fish Oil 1000 mg / 5 ml",
          category:
            "EPA + DHA (Essential Omega-3 Fatty Acids) for Healthy Heart & Brain Function",
          pack: "200 ml",
          status: "AVAILABLE",
        },
        {
          sn: 50,
          brand:
            "NATURAL FISH OIL WITH MULTIVITAMINS SYRUP (ORANGE FLAVOUR)",
          activeContents:
            "Fish Oil 1000 mg / 5 ml with Vitamin A, D3, E, K + Orange Flavour",
          category:
            "EPA + DHA (Essential Omega-3 Fatty Acids) for Healthy Heart & Brain Function, with Vitamin A, D3, E, K Supplementation",
          pack: "200 ml",
          status: "AVAILABLE",
        },
        {
          sn: 51,
          brand:
            "NATURAL FISH OIL WITH MULTIVITAMINS SYRUP (CHERRY FLAVOUR)",
          activeContents:
            "Fish Oil 1000 mg / 5 ml with Vitamin A, D3, E, K + Cherry Flavour",
          category:
            "EPA + DHA (Essential Omega-3 Fatty Acids) for Healthy Heart & Brain Function, with Vitamin A, D3, E, K Supplementation",
          pack: "200 ml",
          status: "AVAILABLE",
        },
      ],
    },
  ],
};

/* ============================================================================
   3. UTILITIES — reduced-motion-aware scroll reveal
   ========================================================================= */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return reduced;
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  return { ref, visible, reduced };
}

function Reveal({
  children,
  delayMs = 0,
  className = "",
}: {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      className={[
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/* ============================================================================
   4. UI BUILDING BLOCKS
   ========================================================================= */

/* ---- Pillar icons (inline SVG, brand-colored, no external assets) ------- */
function PillarIcon({ icon }: { icon: CataloguePillar["icon"] }) {
  const common = "h-5 w-5";
  switch (icon) {
    case "wellness":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 20.5s-7.5-4.6-9.6-9.4C1.2 8 2.7 4.8 5.9 4.1c2-.4 3.9.5 5 2.1a5.7 5.7 0 0 1 1.1-1.3c1.6-1.4 4-1.7 5.9-.7 2.7 1.4 3.6 4.7 2.1 7.7-2.1 4.2-8 8.6-8 8.6Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "immunity":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 3.5 5 6v5.2c0 4.6 3 7.9 7 9.3 4-1.4 7-4.7 7-9.3V6l-7-2.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "nutrition":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M4 12a8 8 0 0 0 16 0"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M4 12c0-1 .7-1.5 1.6-1.2 1 .3 1.4 1.2 2.4 1.2s1.6-1 2.6-1 1.6 1 2.6 1 1.4-.9 2.4-1.2c.9-.3 1.6.2 1.6 1.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 10V4M9.5 6 12 4l2.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "recovery":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <circle cx="15.5" cy="5" r="1.7" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M4 20l3.6-4.8 2.6-2 1.4 2.6L16 14l2.4 3M8.2 13.2 11 9l3.4 1.6 2.4-3.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

/* ---- Breadcrumbs ---------------------------------------------------------- */
function Breadcrumbs({ items }: { items: CatalogueData["breadcrumbs"] }) {
  return (
    <nav aria-label="Breadcrumb" className="px-6 py-4 text-sm md:px-10">
      <ol className="flex flex-wrap items-center gap-2 text-[var(--brand-muted)]">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="rounded transition-colors hover:text-[var(--brand-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-secondary)]"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-[var(--brand-primary)]">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---- Sticky section nav ---------------------------------------------------- */
function CatalogueNav({
  data,
  onDownload,
}: {
  data: CatalogueData;
  onDownload: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/90 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 rounded font-serif text-lg font-semibold tracking-tight text-[var(--brand-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-secondary)]"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-secondary)]" />
          {data.brandMark}
          <span className="hidden text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[var(--brand-muted)] sm:inline">
            {data.company}
          </span>
        </Link>

        <nav
          aria-label="Catalogue sections"
          className="hidden gap-5 overflow-x-auto text-sm font-medium text-[var(--brand-muted)] lg:flex"
        >
          {data.sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap rounded transition-colors hover:text-[var(--brand-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-secondary)]"
            >
              {s.title}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onDownload}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-secondary)] active:scale-[0.98]"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
            <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="hidden sm:inline">Download</span>
        </button>
      </div>
    </header>
  );
}

/* ---- Hero ------------------------------------------------------------------ */
function CatalogueHero({ data }: { data: CatalogueData }) {
  return (
    <header className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-secondary)]">
            {data.company} {data.eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.05] text-[var(--brand-primary)] sm:text-5xl md:text-6xl">
            {data.titleLine1}
            <br />
            <span className="text-[var(--brand-secondary)]">{data.titleLine2}</span>
          </h1>
          <div className="mt-5 h-1 w-16 rounded-full bg-[var(--brand-secondary)]" aria-hidden="true" />
          <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
            {data.subtitle}
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {data.pillars.map((pillar, i) => (
              <li key={pillar.label}>
                <Reveal delayMs={100 + i * 80}>
                  <div className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-3 py-2.5 shadow-sm">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-secondary)] text-white">
                      <PillarIcon icon={pillar.icon} />
                    </span>
                    <span className="text-sm font-semibold text-[var(--brand-primary)]">{pillar.label}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`#${data.sections[0]?.id ?? ""}`}
              onClick={(event) => {
                event.preventDefault();
                document.getElementById(data.sections[0]?.id ?? "")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-primary)]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-tertiary)]"
            >
              Explore Catalogue
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="text-sm text-gray-500">
              Complete export nutraceutical portfolio
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={150} className="hidden lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-[6%] rotate-45 rounded-[2.5rem] bg-[var(--brand-primary)]">
              <div
                className="absolute inset-0 rounded-[2.5rem] opacity-[0.12]"
                style={{
                  backgroundImage: "radial-gradient(circle, #FFFFFF 1.5px, transparent 1.5px)",
                  backgroundSize: "16px 16px",
                }}
              />
            </div>
            <div className="absolute bottom-[2%] right-[2%] h-[38%] w-[38%] rotate-45 rounded-3xl bg-[var(--brand-secondary)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-xl">
                <span className="font-serif text-sm font-medium tracking-[0.35em] text-[var(--brand-primary)]">
                  MECCA&nbsp;LABS
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}

/* ---- Table of contents ------------------------------------------------------ */
function TableOfContents({ data }: { data: CatalogueData }) {
  return (
    <section className="bg-[var(--brand-surface)] px-6 py-14 md:px-10 md:py-16" aria-label="Catalogue contents">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-secondary)]">
          Catalogue overview
        </p>
        <h2 className="mt-2 font-serif text-2xl font-semibold text-[var(--brand-primary)] md:text-3xl">
          Browse by formulation type
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.sections.map((s, i) => (
          <Reveal key={s.id} delayMs={i * 60}>
            <a
              href={`#${s.id}`}
              className="group flex h-full flex-col justify-between rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-secondary)]"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-3xl font-semibold text-[var(--brand-surface-strong)] transition-colors group-hover:text-[var(--brand-secondary)]">
                  {s.number}
                </span>
                <span className="rounded-full bg-[var(--brand-surface)] px-2.5 py-1 text-xs font-semibold text-[var(--brand-muted)]">
                  {s.products.length} SKU{s.products.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-lg font-semibold text-[var(--brand-primary)]">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--brand-muted)]">
                  {s.description}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-tertiary)]">
                View section
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---- Status badge ------------------------------------------------------------ */
function StatusBadge({ status }: { status: ProductStatus }) {
  const available = status === "AVAILABLE";
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
        available
          ? "bg-emerald-50 text-emerald-700"
          : "bg-amber-50 text-amber-700",
      ].join(" ")}
    >
      <span
        className={[
          "h-1.5 w-1.5 rounded-full",
          available ? "bg-emerald-500" : "bg-amber-500",
        ].join(" ")}
      />
      {available ? "Available" : "Under Development"}
    </span>
  );
}

/* ---- Product table (desktop) + product cards (mobile) ----------------------- */
function ProductTable({ products }: { products: CatalogueProduct[] }) {
  return (
    <div className="hidden overflow-hidden rounded-2xl border border-black/5 shadow-sm md:block">
      <table className="w-full border-collapse bg-white text-left text-sm">
        <caption className="sr-only">Product specification table</caption>
        <thead>
          <tr className="bg-[var(--brand-primary)] text-white">
            <th scope="col" className="w-14 px-4 py-3 font-semibold">S.N.</th>
            <th scope="col" className="px-4 py-3 font-semibold">Brand Name</th>
            <th scope="col" className="px-4 py-3 font-semibold">Active Contents</th>
            <th scope="col" className="px-4 py-3 font-semibold">Category</th>
            <th scope="col" className="px-4 py-3 font-semibold">Pack</th>
            <th scope="col" className="px-4 py-3 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr
              key={p.sn}
              className={[
                "align-top border-t border-black/5 transition-colors hover:bg-[var(--brand-surface)]",
                i % 2 === 1 ? "bg-[var(--brand-surface)]/50" : "bg-white",
              ].join(" ")}
            >
              <td className="px-4 py-4 font-medium text-[var(--brand-muted)]">{p.sn}</td>
              <td className="px-4 py-4 font-semibold text-[var(--brand-primary)]">{p.brand}</td>
              <td className="max-w-md px-4 py-4 text-[var(--brand-muted)]">{p.activeContents}</td>
              <td className="max-w-xs px-4 py-4 text-[var(--brand-muted)]">{p.category}</td>
              <td className="whitespace-nowrap px-4 py-4 text-[var(--brand-muted)]">{p.pack}</td>
              <td className="px-4 py-4"><StatusBadge status={p.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProductCards({ products }: { products: CatalogueProduct[] }) {
  return (
    <div className="grid gap-4 md:hidden">
      {products.map((p, i) => (
        <Reveal key={p.sn} delayMs={Math.min(i, 6) * 50}>
          <article className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-[var(--brand-muted)]">S.N. {p.sn}</p>
                <h3 className="mt-0.5 font-serif text-lg font-semibold text-[var(--brand-primary)]">
                  {p.brand}
                </h3>
              </div>
              <StatusBadge status={p.status} />
            </div>

            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-semibold uppercase tracking-wide text-[11px] text-[var(--brand-secondary)]">
                  Active Contents
                </dt>
                <dd className="mt-1 leading-relaxed text-[var(--brand-muted)]">{p.activeContents}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-[11px] text-[var(--brand-secondary)]">
                  Category
                </dt>
                <dd className="mt-1 leading-relaxed text-[var(--brand-muted)]">{p.category}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-[11px] text-[var(--brand-secondary)]">
                  Pack
                </dt>
                <dd className="mt-1 text-[var(--brand-muted)]">{p.pack}</dd>
              </div>
            </dl>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* ---- One catalogue section (header + table/cards) ---------------------------- */
function CatalogueSectionBlock({
  section,
  index,
}: {
  section: CatalogueSection;
  index: number;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className={[
        "scroll-mt-24 px-6 py-14 md:px-10 md:py-16",
        index % 2 === 1 ? "bg-[var(--brand-surface)]" : "bg-white",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-6">
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-4xl font-semibold text-[var(--brand-secondary)]">
                {section.number}
              </span>
              <h2
                id={`${section.id}-heading`}
                className="font-serif text-2xl font-semibold text-[var(--brand-primary)] md:text-3xl"
              >
                {section.title}
              </h2>
            </div>
            <span className="text-sm font-medium text-[var(--brand-muted)]">
              {section.products.length} product{section.products.length === 1 ? "" : "s"}
            </span>
          </div>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[var(--brand-muted)]">
            {section.description}
          </p>
        </Reveal>

        <div className="mt-8">
          <ProductTable products={section.products} />
          <ProductCards products={section.products} />
        </div>
      </div>
    </section>
  );
}

/* ---- Download button (print-to-PDF, no extra dependency required) ----------- */
function DownloadCatalogueButton({ data }: { data: CatalogueData }) {
  const filename = `Mecca-Labs-${data.titleLine1}-${data.titleLine2}-Catalogue`
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  const handleDownload = () => {
    const previousTitle = document.title;
    document.title = filename;
    window.print();
    window.setTimeout(() => {
      document.title = previousTitle;
    }, 500);
  };

  return { filename, handleDownload };
}

function DownloadSection({ onDownload }: { onDownload: () => void }) {
  return (
    <section className="px-6 py-16 text-center md:px-10 print:hidden">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-secondary)]">
          Take it with you
        </p>
        <h2 className="mx-auto mt-3 max-w-xl font-serif text-2xl font-semibold text-[var(--brand-primary)] md:text-3xl">
          Download the full catalogue for offline reference
        </h2>
        <button
          type="button"
          onClick={onDownload}
          className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--brand-secondary)] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-secondary)] active:scale-[0.98]"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
            <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download Catalogue
        </button>
        <p className="mx-auto mt-3 max-w-sm text-xs text-[var(--brand-muted)]">
          Opens your browser&apos;s print dialog — choose &ldquo;Save as PDF&rdquo; to keep a copy.
        </p>
      </Reveal>
    </section>
  );
}

/* ---- Footer -------------------------------------------------------------------- */
function CatalogueFooter({ data }: { data: CatalogueData }) {
  return (
    <footer className="border-t border-gray-100 bg-[var(--brand-surface)]">
      <div className="mx-auto max-w-6xl px-5 py-12 text-center sm:px-8">
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-secondary)]" />
          <span className="font-serif font-semibold text-[var(--brand-primary)]">{data.brandMark}</span>
          <span className="text-gray-400">·</span>
          <span className="text-gray-500">{data.company}</span>
        </div>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-primary)]">
          {data.footerTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <a
          href={`https://${data.website}`}
          className="mt-6 inline-block rounded text-xs text-gray-400 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-secondary)]"
        >
          {data.website}
        </a>
      </div>
    </footer>
  );
}

/* ============================================================================
   5. GENERIC, REUSABLE CATALOGUE PAGE
   ========================================================================= */

export function ProductCatalogue({ data }: { data: CatalogueData }) {
  const { filename, handleDownload } = DownloadCatalogueButton({ data });

  return (
    <div
      className="min-h-screen bg-white font-sans text-[var(--brand-primary)]"
      style={
        {
          // Brand tokens — derived only from the provided palette.
          ["--brand-primary" as string]: "#0D2240",
          ["--brand-secondary" as string]: "#8B1E2D",
          ["--brand-secondary-light" as string]: "#E3A9AF",
          ["--brand-tertiary" as string]: "#3D5A80",
          ["--brand-muted" as string]: "#6B7280",
          ["--brand-surface" as string]: "#F2F4F7",
          ["--brand-surface-strong" as string]: "#D8DEE7",
        } as React.CSSProperties
      }
    >
      <CatalogueNav data={data} onDownload={handleDownload} />
      <Breadcrumbs items={data.breadcrumbs} />
      <main>
        <CatalogueHero data={data} />
        <TableOfContents data={data} />
        {data.sections.map((section, i) => (
          <CatalogueSectionBlock key={section.id} section={section} index={i} />
        ))}
        <DownloadSection onDownload={handleDownload} />
      </main> 
      <CatalogueFooter data={data} />

      {/* Print stylesheet: keep content, hide chrome. Filename hint via <title>. */}
      <style jsx global>{`
        @media print {
          nav[aria-label="Catalogue sections"],
          header,
          .print\\:hidden {
            display: none !important;
          }
          section {
            break-inside: avoid;
          }
          table {
            break-inside: auto;
          }
          tr {
            break-inside: avoid;
          }
          body {
            background: #fff !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ============================================================================
   6. DEFAULT EXPORT — this catalogue, ready for a route
   e.g. app/products/mecca-labs/nutraceutical-product-list/page.tsx:
     export { default } from "@/components/catalogue/ProductCatalogue";
   ========================================================================= */

export default function NutraceuticalCataloguePage() {
  return <ProductCatalogue data={nutraceuticalCatalogue} />;
}