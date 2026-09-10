import { Catalogue } from "./types";

export const cosmeceuticalCatalogue: Catalogue = {
  slug: "cosmeceutical",
  title: "Cosmeceutical Products Catalogue",
  subtitle: "Advanced therapeutic personal hygiene, dermatological care, and clinical aesthetic formulations.",
  description:
    "Manufactured under ISO 22716 Cosmetic GMP compliance. Our cosmeceutical division delivers clinical-grade intimate hygiene products, hypoallergenic cleansing systems, anti-aging therapies, and specialized dermatological topicals.",
  badge: "ISO 22716 Cosmetic GMP",
  compliance: [
    "ISO 22716 Cosmetic GMP",
    "Dermatologically Tested",
    "Paraben & Sulphate Free",
    "Hypoallergenic Formulations",
    "Cruelty-Free Manufacturing",
  ],
  heroImage: "/MeccaLabs/cosmeceutical-hero.png",
  pdfUrl: "/catalogues/cosmeceutical.pdf",
  pdfFileName: "Mecca-Labs-Cosmeceutical-Product-Catalogue.pdf",
  categories: [
    {
      id: "human-intimate-care",
      number: "01",
      title: "Human Intimate Care Cosmetics",
      subtitle: "Specially formulated personal care solutions for gentle, effective, and intimate hygiene.",
      description:
        "Specialised intimate and body-care formulations designed for hygiene, comfort and confidence.",
      subgroups: [
        {
          title: "Gel",
          columns: ["pack", "use", "status"],
          products: [
            { name: "V SECURE", pack: "100 gm", use: "Female Vaginal Lubrication / Moisturizer", status: "Available" },
            { name: "B SHAPE AGAIN", pack: "100 gm", use: "Breast Toning / Enhancement", status: "Available" },
          ],
        },
        {
          title: "Wash",
          columns: ["pack", "use", "status"],
          products: [
            { name: "V SECURE", pack: "50 ml / 100 ml", use: "Female Vaginal Cleansing / Prevention of Vaginal Infection", status: "Available" },
            { name: "P-WASH", pack: "100 ml", use: "Men’s Personal Intimate Wash for Cleansing / Prevention of Infection", status: "Available" },
          ],
        },
        {
          title: "Liquid Spray",
          columns: ["pack", "use", "status"],
          products: [
            { name: "FEMIFRESH", pack: "50 ml / 100 ml", use: "Female Vaginal Deodorant", status: "Available" },
            { name: "P-STRONG", pack: "100 ml", use: "Men’s Intimate Enlargement / Stimulant", status: "Available" },
          ],
        },
        {
          title: "Lotion",
          columns: ["pack", "use", "status"],
          products: [
            { name: "V SECURE-D", pack: "50 ml", use: "Female Vaginal Dryness", status: "Available" },
            { name: "V SECURE-AF", pack: "50 ml", use: "Female Intimate Preventive Care from Fungus", status: "Available" },
            { name: "V SECURE-AI", pack: "50 ml", use: "Female Intimate Preventive Care for Itching", status: "Available" },
          ],
        },
        {
          title: "Cream",
          columns: ["pack", "use", "status"],
          products: [
            { name: "P-STRONG", pack: "100 gm / 50 gm", use: "Men’s Intimate Enlargement / Stimulant", status: "Available" },
            { name: "PLAYMAX", pack: "50 gm", use: "Female Intimate Enhancement", status: "Available" },
          ],
        },
        {
          title: "Wipes (Single Wipe Sachet Pack)",
          columns: ["pack", "use", "status"],
          products: [
            { name: "V SECURE", pack: "1 Wipe Sachet", use: "Vaginal Hygiene Care", status: "Available" },
            { name: "Natural Wipes with Lemon Extract", pack: "1 Wipe Sachet", use: "Cleaning & Refreshing", status: "Available" },
            { name: "Natural Wipes with Lavender Extract", pack: "1 Wipe Sachet", use: "Cleaning & Refreshing", status: "Available" },
            { name: "Instant Fruit & Vegi Wipes", pack: "1 Wipe Sachet", use: "Cleaning & Refreshing", status: "Available" },
            { name: "Instant Refreshing Soft Moisturizing Wipes", pack: "1 Wipe Sachet", use: "Cleaning & Refreshing", status: "Available" },
            { name: "Natural Wipes with Vitamin-E Oil", pack: "1 Wipe Sachet", use: "Cleaning & Refreshing", status: "Available" },
          ],
        },
      ],
    },
    {
      id: "la-splendra-range",
      number: "02",
      title: "La Splendra Range",
      subtitle: "Premium beauty and personal care formulations designed to enhance everyday skin and beauty care.",
      description:
        "A comprehensive personal-care and dermo-cosmetic range spanning skin, hair and body treatments.",
      subgroups: [
        {
          title: "Gel",
          columns: ["pack", "use", "status"],
          products: [
            { name: "La Splendra’s Aloe Vera Gel", pack: "100 gm", use: "Aloe Vera Gel", status: "Under Development" },
            { name: "La Splendra’s Shower Gel", pack: "100 gm", use: "Shower Gel", status: "Under Development" },
          ],
        },
        {
          title: "Cream",
          columns: ["pack", "use", "status"],
          products: [
            { name: "La Splendra’s Anti-Aging Cream", pack: "50 gm", use: "Anti-Aging Cream", status: "Under Development" },
            { name: "La Splendra’s Anti-Pimple Cream", pack: "30 gm", use: "Anti-Pimple Cream", status: "Under Development" },
            { name: "La Splendra’s Skin Brightening Cream", pack: "50 gm", use: "Skin Brightening Cream", status: "Available" },
            { name: "La Splendra’s Skin Fairness Cream", pack: "50 gm", use: "Fairness", status: "Available" },
            { name: "La Splendra’s Foot Cream", pack: "50 gm", use: "Foot Cream", status: "Under Development" },
            { name: "La Splendra’s Burn Care Cream", pack: "30 gm", use: "Wound Healing in Burns and Surgeries", status: "Under Development" },
          ],
        },
        {
          title: "Lotion",
          columns: ["pack", "use", "status"],
          products: [
            { name: "La Splendra’s Anti-Aging Lotion", pack: "100 gm", use: "Anti-Aging Lotion", status: "Under Development" },
            { name: "La Splendra’s Body Lotion — Skin Glow", pack: "100 gm", use: "Body Lotion — Skin Glow", status: "Under Development" },
            { name: "La Splendra’s Anti-Stretch Mark Lotion", pack: "50 gm", use: "Stretch-Mark Removal Cream, Mainly for Pregnant Women and Post-Surgical Marks", status: "Under Development" },
            { name: "La Splendra Sun Screen Lotion SPF 55", pack: "50 gm", use: "Sun Ray Protection", status: "Available" },
          ],
        },
        {
          title: "Face Mask",
          columns: ["pack", "use", "status"],
          products: [
            { name: "La Splendra’s Anti-Pimple Face Mask", pack: "100 gm", use: "Anti-Pimple Face Mask", status: "Under Development" },
            { name: "La Splendra’s Anti-Aging Face Mask", pack: "100 gm", use: "Anti-Aging Face Mask", status: "Under Development" },
            { name: "La Splendra’s Skin Brightening Face Mask", pack: "100 gm", use: "Skin Brightening Face Mask", status: "Under Development" },
          ],
        },
        {
          title: "Face Wash",
          columns: ["pack", "use", "status"],
          products: [
            { name: "La Splendra’s Face Wash for Men", pack: "100 ml", use: "Face Wash for Men", status: "Under Development" },
            { name: "La Splendra’s Anti-Pimple Face Wash", pack: "100 ml", use: "Anti-Pimple Face Wash", status: "Under Development" },
          ],
        },
        {
          title: "Shampoo",
          columns: ["pack", "use", "status"],
          products: [
            { name: "La Splendra’s Shampoo — Anti-Dandruff", pack: "100 ml", use: "Anti-Dandruff Shampoo", status: "Under Development" },
            { name: "La Splendra’s Shampoo — Color Protection", pack: "100 ml", use: "Color Protection Shampoo", status: "Under Development" },
            { name: "La Splendra’s Shampoo — Daily Shine", pack: "100 ml", use: "Daily Shine Shampoo", status: "Under Development" },
            { name: "La Splendra’s Shampoo — Hair Volumizer", pack: "100 ml", use: "Hair Volumizing Shampoo", status: "Under Development" },
            { name: "La Splendra’s Shampoo — Herbal", pack: "100 ml", use: "Herbal Shampoo", status: "Under Development" },
          ],
        },
        {
          title: "Serum / Spray",
          columns: ["pack", "use", "status"],
          products: [
            { name: "La Splendra’s Spray / Serum for Hair Growth", pack: "100 ml", use: "Hair Growth Serum / Spray", status: "Available" },
          ],
        },
        {
          title: "Soaps",
          columns: ["pack", "use", "status"],
          products: [
            { name: "La Splendra’s Acne Soap", pack: "20 gm", use: "Neem Extract + Triclosan Soap", status: "Under Development" },
            { name: "La Splendra’s Moisturizing Soap", pack: "20 gm", use: "Triclosan + Aloe Vera + Tea Tree Oil + Vitamin E Soap", status: "Under Development" },
            { name: "La Splendra’s Calamine Soap", pack: "20 gm", use: "Kaolin + Zinc Oxide Soap for Overall Skin Care", status: "Under Development" },
            { name: "La Splendra’s Scabies Treatment Soap", pack: "20 gm", use: "Permethrin Soap", status: "Under Development" },
            { name: "La Splendra’s Antidandruff Soap", pack: "20 gm", use: "Ketoconazole Soap", status: "Under Development" },
          ],
        },
      ],
    },
  ],
};
