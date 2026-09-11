import { Catalogue } from "./types";

export const milkCatalogue: Catalogue = {
  slug: "milk",
  title: "Milk Products Catalogue",
  subtitle: "Nutritious milk products for daily health, pediatric development, and athletic wellness.",
  description:
    "Manufactured under clinical food-grade standards and HACCP compliance. Our dairy portfolio encompasses advanced infant formula stages, maternal care powders, cereal weaning nutrition, and high-purity sports isolates.",
  badge: "HACCP & FSSAI Certified",
  compliance: [
    "HACCP Food Safety",
    "ISO 22000 Certified",
    "FSSAI Compliant",
    "Non-GMO Dairy Sourcing",
    "Clinical Grade Infant Nutrition",
  ],
  heroImage: "/MeccaLabs/milk-hero.png",
  pdfUrl: "/catalogues/milk.pdf",
  pdfFileName: "Mecca-Labs-Milk-Products-Catalogue.pdf",
  categories: [
    {
      id: "infant-formula-prebiotics",
      number: "01",
      title: "Infant Milk Formula (with Prebiotics, FOS, GOS & Nucleotides)",
      subtitle: "Convenient oral formulations for effective and reliable healthcare support.",
      description:
        "Advanced infant nutrition formulated across three growth stages, enriched with prebiotics and nucleotides.",
      subgroups: [
        {
          columns: ["status"],
          products: [
            { sr: "A", name: "MECOMIL — Stage 1 (up to 6 months)", status: "Available", pack: "400 g Tin / Bag" },
            { sr: "B", name: "MECOMIL+ — Stage 2 (6 to 12 months)", status: "Available", pack: "400 g Tin / Bag" },
            { sr: "C", name: "MECOMIL++ — Stage 3 (1 year to 3 years)", status: "Available", pack: "400 g Tin / Bag" },
          ],
        },
      ],
    },
    {
      id: "infant-formula-nucleotides",
      number: "02",
      title: "Infant Milk Formula (with Nucleotides)",
      subtitle: "Complete nutritional support for healthy infant growth and development.",
      description:
        "Two-stage infant formula range fortified with nucleotides for healthy early development.",
      subgroups: [
        {
          columns: ["status"],
          products: [
            { sr: "A", name: "Smart Baby — Stage 1", status: "Available", pack: "400 g Tin" },
            { sr: "B", name: "Smart Baby — Stage 2", status: "Available", pack: "400 g Tin" },
          ],
        },
      ],
    },
    {
      id: "infant-lactose-free",
      number: "03",
      title: "Infant Lactose-Free Formula",
      subtitle: "Specially formulated nutritional support for infants with lactose intolerance.",
      description:
        "A specialised lactose-free formula designed for infants with lactose sensitivity.",
      subgroups: [
        {
          columns: ["status"],
          products: [
            { sr: "A", name: "Health 1st L-Free", status: "Available", pack: "400 g Tin" },
          ],
        },
      ],
    },
    {
      id: "weight-diabetes-management",
      number: "04",
      title: "Weight & Diabetes Management",
      subtitle: "Targeted nutritional support for healthy weight and blood sugar management.",
      description:
        "Targeted nutritional powders supporting healthy weight and metabolic management.",
      subgroups: [
        {
          columns: ["status"],
          products: [
            { sr: "A", name: "Health 1st Slimming Formula", status: "Available", pack: "400 g / 500 g" },
            { sr: "B", name: "Health 1st Complete Fat Burner", status: "Available", pack: "400 g / 500 g" },
            { sr: "C", name: "Health 1st Diabetes – Cholesterol – Management Powder", status: "Available", pack: "400 g / 500 g" },
          ],
        },
      ],
    },
    {
      id: "vitamins-minerals",
      number: "05",
      title: "Vitamins & Minerals",
      subtitle: "Essential nutritional support for overall health, wellness, and daily vitality.",
      description:
        "Broad-spectrum micronutrient and essential fatty acid supplementation for everyday wellness.",
      subgroups: [
        {
          columns: ["status"],
          products: [
            { sr: "A", name: "Health 1st Multivitamins", status: "Available", pack: "Powder / Sachet" },
            { sr: "B", name: "Health 1st Omega 3", status: "Available", pack: "Powder / Liquid" },
          ],
        },
      ],
    },
    {
      id: "mother-child-nutrition",
      number: "06",
      title: "Mother & Child Nutrition",
      subtitle: "Essential nutritional support for maternal health and healthy child development.",
      description:
        "Dedicated nutritional formulations supporting maternal health and childhood growth.",
      subgroups: [
        {
          columns: ["status"],
          products: [
            { sr: "A", name: "Health 1st MECogold Mom", status: "Available", pack: "200 g / 400 g Tin" },
            { sr: "B", name: "Health 1st ProMEC Junior", status: "Available", pack: "200 g / 400 g Tin" },
          ],
        },
      ],
    },
    {
      id: "baby-milk-cereals",
      number: "07",
      title: "Baby Milk Cereals",
      subtitle: "Nutritious cereal-based formulations to support healthy growth and development.",
      description:
        "Wholesome wheat and rice-based cereal formulations for growing infants and toddlers.",
      subgroups: [
        {
          title: "Wheat & Wheat Variants",
          columns: ["status"],
          products: [
            { sr: "A", name: "Health 1st Wheat with Milk", status: "Available", pack: "300 g / 400 g Box" },
            { sr: "B", name: "Health 1st Wheat with Banana", status: "Available", pack: "300 g / 400 g Box" },
            { sr: "C", name: "Health 1st Wheat with Apple", status: "Available", pack: "300 g / 400 g Box" },
            { sr: "D", name: "Health 1st Wheat with Honey", status: "Available", pack: "300 g / 400 g Box" },
            { sr: "E", name: "Health 1st Wheat with Mixed Fruits (Banana, Apple, Pear, Orange)", status: "Available", pack: "300 g / 400 g Box" },
            { sr: "F", name: "Health 1st Wheat with Vegetables (Carrot, Tomato, Spinach, Peas)", status: "Available", pack: "300 g / 400 g Box" },
          ],
        },
        {
          title: "Rice & Rice Variants",
          columns: ["status"],
          products: [
            { sr: "A", name: "Health 1st Rice with Milk", status: "Available", pack: "300 g / 400 g Box" },
            { sr: "B", name: "Health 1st Rice with Carrot", status: "Available", pack: "300 g / 400 g Box" },
            { sr: "C", name: "Health 1st Rice with No Milk", status: "Available", pack: "300 g / 400 g Box" },
            { sr: "D", name: "Health 1st Rice and Dal", status: "Available", pack: "300 g / 400 g Box" },
          ],
        },
      ],
    },
    {
      id: "sports-nutrition",
      number: "08",
      title: "Sports Nutrition",
      subtitle: "Targeted nutritional support to enhance energy, performance, strength, and recovery.",
      description:
        "High-performance protein, amino acid and pre-workout formulations for athletic training.",
      subgroups: [
        {
          columns: ["status"],
          products: [
            { sr: "A", name: "Health 1st Rapid 100% Whey Protein", status: "Available", pack: "1 kg / 2 kg Tub" },
            { sr: "B", name: "Health 1st Powerful Whey Protein", status: "Available", pack: "1 kg / 2 kg Tub" },
            { sr: "C", name: "Health 1st Golden Whey Protein", status: "Available", pack: "1 kg / 2 kg Tub" },
            { sr: "D", name: "Health 1st Anabolic Weight Gainer", status: "Available", pack: "1 kg / 3 kg Tub" },
            { sr: "E", name: "Health 1st Pro Weight Gainer", status: "Available", pack: "1 kg / 3 kg Tub" },
            { sr: "F", name: "Health 1st Creatine Monohydrate 100%", status: "Available", pack: "250 g / 500 g Tub" },
            { sr: "G", name: "Health 1st Complete Glutamine Powder", status: "Available", pack: "250 g / 500 g Tub" },
            { sr: "H", name: "Health 1st Pre-Workout Complete Formula", status: "Available", pack: "300 g Tub" },
            { sr: "I", name: "Health 1st MECogold Whey Protein General", status: "Available", pack: "1 kg Tub" },
          ],
        },
      ],
    },
    {
      id: "fitness-pure-performance",
      number: "09",
      title: "Fitness Pure Performance Series",
      subtitle: "Advanced nutrition designed to support strength, performance, endurance, and recovery.",
      description:
        "A dedicated performance range of isolates, concentrates and single-ingredient formulations for serious athletes.",
      subgroups: [
        {
          columns: ["status"],
          products: [
            { sr: "A", name: "Health 1st 100% Grass-Fed Whey Protein Isolate", status: "Available", pack: "1 kg / 2 kg Tub" },
            { sr: "B", name: "Health 1st 100% Whey Protein Concentrate", status: "Available", pack: "1 kg / 2 kg Tub" },
            { sr: "C", name: "Health 1st 100% Micellar Casein", status: "Available", pack: "1 kg / 2 kg Tub" },
            { sr: "D", name: "Health 1st 100% Soy Protein Isolate", status: "Available", pack: "1 kg / 2 kg Tub" },
            { sr: "E", name: "Health 1st 100% Skimmed Milk Powder", status: "Available", pack: "500 g / 1 kg Pack" },
            { sr: "F", name: "Health 1st 100% BCAA 2:1:1 Aminos", status: "Available", pack: "250 g / 500 g Tub" },
            { sr: "G", name: "Health 1st 100% Complete Carbs", status: "Available", pack: "1 kg / 2.5 kg Tub" },
            { sr: "H", name: "Health 1st 100% Complete L-Arginine", status: "Available", pack: "250 g Tub" },
            { sr: "I", name: "Health 1st 100% Complete L-Taurine", status: "Available", pack: "250 g Tub" },
          ],
        },
      ],
    },
  ],
};
