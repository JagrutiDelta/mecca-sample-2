export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  desc: string;
  image: string;
  badge: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "infusion", label: "Infusion & Transfusion" },
  { id: "cannulas", label: "IV Cannulas" },
  { id: "burette", label: "Burette Sets" },
  { id: "catheters", label: "Catheters & Drainage" },
  { id: "respiratory", label: "Airway & Respiratory" },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "iv-set-vented",
    name: "Vented IV Infusion Set with Air Filter",
    category: "Infusion & Transfusion",
    categoryId: "infusion",
    desc: "Premium sterile IV administration set featuring clear cylindrical drip chamber, hydrophobic air inlet, roller clamp, and luer lock connector.",
    image: "/products/iv_infusion_set.png",
    badge: "Medical Grade PVC",
    features: [
      "DEHP-Free medical grade tubing (150cm / 180cm)",
      "Vented spike with 1.2 micron hydrophobic air filter",
      "Soft, clear drip chamber (20 drops/ml or 60 drops/ml micro)",
      "Latex-free Y-injection site & luer lock adapter",
      "Sterilized by ETO gas, non-pyrogenic",
    ],
    specs: [
      { label: "Drip Rate", value: "20 drops/ml (Macro) / 60 drops/ml (Micro)" },
      { label: "Tubing Length", value: "150 cm / 180 cm" },
      { label: "Filter Size", value: "15 micron fluid filter" },
      { label: "Sterilization", value: "EO Sterile (ISO 11135)" },
      { label: "Packaging", value: "Individual Blister Pack, Box of 25" },
    ],
  },
  {
    id: "iv-cannula-wings",
    name: "Disposable IV Cannula with Wings & Port",
    category: "IV Cannulas",
    categoryId: "cannulas",
    desc: "Precision catheter with color-coded wings and injection port for safe peripheral vascular access and continuous intravenous therapy.",
    image: "/products/iv_cannula_wings.png",
    badge: "Japanese Steel Needle",
    features: [
      "Siliconized stainless steel needle with 3-facet bevel cut",
      "Flexible FEP/PTFE radiopaque cannula tubing",
      "Color-coded wings for instant gauge size identification",
      "Self-sealing injection valve with snap cap",
      "Transparent flashback chamber for easy blood visualization",
    ],
    specs: [
      { label: "Gauges Available", value: "14G, 16G, 18G, 20G, 22G, 24G, 26G" },
      { label: "Flow Rate", value: "13 ml/min (24G) to 270 ml/min (14G)" },
      { label: "Needle Point", value: "Ultra-sharp 3-bevel back cut" },
      { label: "Material", value: "Radiopaque FEP Catheter" },
      { label: "Packaging", value: "Rigid blister pack, Box of 50" },
    ],
  },
  {
    id: "burette-set-110",
    name: "Burette Infusion Set (110ml Chamber)",
    category: "Burette Sets",
    categoryId: "burette",
    desc: "Volume measured burette set with 110ml/150ml graduated cylinder chamber and floating shut-off valve for controlled medication delivery.",
    image: "/products/burette_infusion_set.png",
    badge: "Micro Drip 60 Drops/ml",
    features: [
      "110ml or 150ml transparent calibrated volume chamber",
      "Automatic floating shut-off valve prevents air entrapment",
      "Precision roller clamp & secondary slide clamp for exact dosing",
      "Built-in 15 micron fluid filter & injection site",
      "Ideal for pediatric & critical care fluid administration",
    ],
    specs: [
      { label: "Chamber Volume", value: "110 ml / 150 ml graduated" },
      { label: "Drip Factor", value: "60 drops/ml" },
      { label: "Shut-Off Valve", value: "Auto floating disc valve" },
      { label: "Sterility", value: "Sterile, Non-toxic, Non-pyrogenic" },
      { label: "Standards", value: "ISO 8536-5 Compliant" },
    ],
  },
  {
    id: "foley-catheter-2way",
    name: "2-Way Silicone Coated Foley Catheter",
    category: "Catheters & Drainage",
    categoryId: "catheters",
    desc: "Single-use 100% latex balloon catheter with smooth silicone coating for comfortable urethral catheterization and continuous urinary drainage.",
    image: "/products/iv_cannula_wings.png",
    badge: "Silicone Elastomer",
    features: [
      "Symmetrical balloon expands uniformly in all directions",
      "Soft rounded closed tip with two lateral eyes for efficient drainage",
      "Smooth hydrophobic surface minimizes encrustation",
      "Color-coded valve connector for easy size identification",
      "Sterile individual blister packaging",
    ],
    specs: [
      { label: "Sizes", value: "Fr 12, 14, 16, 18, 20, 22, 24" },
      { label: "Balloon Capacity", value: "5ml - 30ml" },
      { label: "Material", value: "Natural Latex with Silicone Coating" },
      { label: "Sterilization", value: "EO Gas" },
      { label: "Shelf Life", value: "5 Years" },
    ],
  },
  {
    id: "endotracheal-tube-cuffed",
    name: "Cuffed Endotracheal Airway Tube",
    category: "Airway & Respiratory",
    categoryId: "respiratory",
    desc: "High-volume low-pressure cuffed tracheal tube engineered for safe airway management, mechanical ventilation, and surgical anesthesia.",
    image: "/products/iv_infusion_set.png",
    badge: "Radiopaque Line",
    features: [
      "Kink-resistant clear medical PVC construction",
      "High-volume low-pressure cuff seals trachea smoothly",
      "Full-length Murphy eye & radiopaque X-ray line",
      "Standard 15mm male connector pre-attached",
      "Accurate depth scale markings along tube length",
    ],
    specs: [
      { label: "Inner Diameter (ID)", value: "3.0mm to 10.0mm" },
      { label: "Cuff Type", value: "HVLP Soft Seal Cuff" },
      { label: "Connector", value: "Standard 15mm ISO 5356-1" },
      { label: "Material", value: "Thermosensitive Medical PVC" },
      { label: "Certifications", value: "CE 0123 / ISO 13485" },
    ],
  },
  {
    id: "blood-transfusion-set",
    name: "Blood Transfusion Set with Filter",
    category: "Infusion & Transfusion",
    categoryId: "infusion",
    desc: "Heavy-duty sterile blood administration set equipped with 200 micron blood filter to capture clots and cellular debris during transfusion.",
    image: "/products/burette_infusion_set.png",
    badge: "200 Micron Mesh",
    features: [
      "Flexible cylindrical chamber with integrated 200µm filter",
      "Sharp piercing spike for easy penetration of blood bags",
      "Smooth roller clamp for precise flow velocity adjustment",
      "Soft kink-resistant PVC tubing with latex injection bulb",
      "Sterile EO packed for immediate clinical readiness",
    ],
    specs: [
      { label: "Drip Rate", value: "20 drops/ml" },
      { label: "Filter Size", value: "200 micron nylon filter mesh" },
      { label: "Needle Gauge", value: "18G / 19G needle option" },
      { label: "Compatibility", value: "Whole blood & blood components" },
      { label: "Sterilization", value: "ETO Gas" },
    ],
  },
];

export function getProductById(id: string): ProductItem | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getCategoryById(categoryId: string) {
  return CATEGORIES.find((c) => c.id === categoryId);
}

export function getProductsByCategoryId(categoryId: string): ProductItem[] {
  if (categoryId === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.categoryId === categoryId);
}

export function getRelatedProducts(currentId: string, limit = 3): ProductItem[] {
  return PRODUCTS.filter((p) => p.id !== currentId).slice(0, limit);
}
