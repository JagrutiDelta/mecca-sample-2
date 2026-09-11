import { Catalogue } from "./types";

export const pharmaceuticalCatalogue: Catalogue = {
  "slug": "pharmaceutical",
  "title": "Pharmaceutical Product Catalogue",
  "subtitle": "Sterile injectables, oral formulations, beta-lactam antibiotics, and large volume parenterals.",
  "description": "Certified pharmaceutical formulations, sterile injectable solutions, intravenous infusions, and finished dosage forms manufactured under strict WHO-GMP compliance.",
  "badge": "WHO-GMP Certified",
  "compliance": [
    "WHO-GMP Formulations",
    "ISO 9001:2015",
    "EU MDRA & CDSCO Audited",
    "PICS Approved Facilities",
    "Cleanroom Class 10,000 / 100K"
  ],
  "heroImage": "/MeccaLabs/pharmaceutical-hero.png",
  "pdfUrl": "/catalogues/pharmaceutical.pdf",
  "pdfFileName": "Mecca-Labs-Pharmaceutical-Product-Catalogue.pdf",
  "categories": [
    {
      "id": "sterile-prefilled-syringes",
      "number": "01",
      "title": "Sterile Pre-Filled Syringes",
      "subtitle": "Heparins & low-molecular-weight heparins",
      "description": "Advanced sterile pharmaceutical solutions designed for precision, safety and reliability.",
      "subgroups": [
        {
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Heparin",
              "strength": "1000 IU/ml",
              "pack": "10 ml",
              "status": "ACTD / CTD / NON-CTD"
            },
            {
              "sr": 2,
              "name": "Heparin",
              "strength": "5000 IU/ml",
              "pack": "1 ml",
              "status": "ACTD / CTD / NON-CTD"
            },
            {
              "sr": 3,
              "name": "Enoxaparin Sodium",
              "strength": "60 mg/0.6 ml",
              "pack": "0.6 ml",
              "status": "ACTD / CTD / NON-CTD"
            },
            {
              "sr": 4,
              "name": "Enoxaparin Sodium",
              "strength": "40 mg/0.4 ml",
              "pack": "0.4 ml",
              "status": "ACTD / CTD / NON-CTD"
            }
          ]
        }
      ]
    },
    {
      "id": "penicillin-cephalosporins",
      "number": "02",
      "title": "Penicillin & Cephalosporins",
      "subtitle": "Beta-lactam tablets and dry syrups",
      "description": "A trusted range of beta-lactam antibiotics manufactured to the highest international standards.",
      "subgroups": [
        {
          "title": "Tablets",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Amoxicillin + Clavulanate Potassium (625 mg)",
              "strength": "500 mg + 125 mg",
              "pack": "1 x 10 Alu/Alu",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 2,
              "name": "Cefixime",
              "strength": "200 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 3,
              "name": "Cefixime + Clavulanate Potassium (325 mg)",
              "strength": "200 mg + 125 mg",
              "pack": "1 x 10 Alu/Alu",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 4,
              "name": "Cefpodoxime Proxetil",
              "strength": "200 mg",
              "pack": "1 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 5,
              "name": "Cefuroxime Axetil",
              "strength": "250 mg / 500 mg",
              "pack": "1 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Dry Syrup",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Amoxicillin + Clavulanate Potassium (228.5 mg/5 ml)",
              "strength": "200 mg/5 ml + 28.5 mg/5 ml",
              "pack": "60 ml",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 2,
              "name": "Cefixime",
              "strength": "50 mg/5 ml & 100 mg/5 ml",
              "pack": "60 ml",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 3,
              "name": "Cefixime + Clavulanate Potassium (162.5 mg/5 ml)",
              "strength": "100 mg/5 ml + 62.5 mg/5 ml",
              "pack": "60 ml",
              "status": "ACTD / NON-CTD"
            }
          ]
        }
      ]
    },
    {
      "id": "general-formulations",
      "number": "03",
      "title": "General Formulations",
      "subtitle": "Cardiovascular, metabolic, anti-infective & supportive care",
      "description": "A broad, dependable portfolio spanning cardiovascular, metabolic, anti-infective and supportive care therapies.",
      "subgroups": [
        {
          "title": "Antihypertensive Tablets",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Amlodipine Besilate",
              "strength": "5 mg / 10 mg",
              "pack": "5 x 10 Alu/Alu",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 2,
              "name": "Atorvastatin",
              "strength": "10 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 3,
              "name": "Telmisartan",
              "strength": "40 mg / 80 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 4,
              "name": "Lisinopril",
              "strength": "5 mg / 10 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 5,
              "name": "Telmisartan + Hydrochlorothiazide",
              "strength": "40 mg + 12.5 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 6,
              "name": "Clopidogrel",
              "strength": "75 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 7,
              "name": "Enalapril Maleate",
              "strength": "5 mg / 10 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 8,
              "name": "Ramipril",
              "strength": "5 mg / 10 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 9,
              "name": "Rosuvastatin Calcium",
              "strength": "5 mg / 10 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 10,
              "name": "Captopril",
              "strength": "25 mg",
              "pack": "10 x 10 Alu/PVC",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Antidiabetic Tablets",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Metformin Hydrochloride",
              "strength": "500 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "ACTD"
            },
            {
              "sr": 2,
              "name": "Glibenclamide",
              "strength": "5 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 3,
              "name": "Metformin Hydrochloride (SR) + Glimepiride",
              "strength": "500 mg + 2 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Pain Management — Tablets",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Paracetamol + Diclofenac Sodium",
              "strength": "500 mg + 50 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 2,
              "name": "Diclofenac Sodium",
              "strength": "50 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 3,
              "name": "Paracetamol",
              "strength": "500 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 4,
              "name": "Aceclofenac Sodium",
              "strength": "100 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Pain Management — Capsules",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Tramadol",
              "strength": "50 mg / 100 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Antacid / PPI / Antiemetic — Tablets",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Esomeprazole Magnesium (Trihydrate)",
              "strength": "20 mg / 40 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 2,
              "name": "Rabeprazole Sodium",
              "strength": "20 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "NON-CTD"
            },
            {
              "sr": 3,
              "name": "Pantoprazole",
              "strength": "40 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 4,
              "name": "Domperidone",
              "strength": "10 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 5,
              "name": "Ranitidine Hydrochloride",
              "strength": "150 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Antacid / PPI — Capsules",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Omeprazole",
              "strength": "20 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 2,
              "name": "Omeprazole & Domperidone",
              "strength": "20 mg + 10 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "NON-CTD"
            }
          ]
        },
        {
          "title": "Antacid / PPI — Injectables (Lyophilized Powder)",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Esomeprazole Sodium",
              "strength": "40 mg/vial",
              "pack": "1 ml",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 2,
              "name": "Omeprazole Sodium",
              "strength": "40 mg/vial",
              "pack": "1 ml",
              "status": "ACTD / NON-CTD"
            }
          ]
        },
        {
          "title": "Antiallergic Tablets",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Loratadine",
              "strength": "10 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 2,
              "name": "Levocetirizine Hydrochloride",
              "strength": "5 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Antibiotics — Quinolones",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Moxifloxacin Hydrochloride",
              "strength": "400 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 2,
              "name": "Levofloxacin",
              "strength": "500 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 3,
              "name": "Ciprofloxacin",
              "strength": "500 mg",
              "pack": "10 x 10 Alu/PVC",
              "status": "ACTD"
            }
          ]
        },
        {
          "title": "Antibiotics — Macrolides",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Erythromycin Stearate",
              "strength": "500 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 2,
              "name": "Azithromycin",
              "strength": "250 mg / 500 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 3,
              "name": "Clarithromycin",
              "strength": "500 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Antiamoebic / Antidiarrhoeal",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Ofloxacin + Ornidazole",
              "strength": "200 mg + 500 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "ACTD / NON-CTD"
            },
            {
              "sr": 2,
              "name": "Ciprofloxacin + Tinidazole",
              "strength": "500 mg + 600 mg",
              "pack": "10 x 10 Alu/PVC",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Antifungal & Antiprotozoal",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Ketoconazole",
              "strength": "200 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 2,
              "name": "Secnidazole",
              "strength": "500 mg / 1000 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 3,
              "name": "Albendazole",
              "strength": "400 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Tetracyclines",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Doxycycline",
              "strength": "100 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Antimalarial Tablets",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Artemether + Lumefantrine",
              "strength": "80 mg + 480 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 2,
              "name": "Artemether + Lumefantrine",
              "strength": "20 mg + 120 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 3,
              "name": "Artemether + Lumefantrine",
              "strength": "40 mg + 120 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Sexual Wellbeing",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Sildenafil Citrate",
              "strength": "50 mg / 100 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Uterine Stimulant (Liquid Injectable)",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Oxytocin",
              "strength": "5 IU / 10 IU",
              "pack": "10 x 1 ml Amp",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "CNS / Sedative / Hypnotics",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Hyoscine Butyl Bromide",
              "strength": "10 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 2,
              "name": "Citicoline",
              "strength": "500 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Health Supplements",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Riboflavin",
              "strength": "5 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 2,
              "name": "Folic Acid",
              "strength": "5 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 3,
              "name": "Ascorbic Acid",
              "strength": "100 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 4,
              "name": "Oral Rehydration Salts (ORS)",
              "pack": "4.2 g powder sachet",
              "status": "UNDER DEVELOPMENT",
              "detail": "Each sachet contains (to produce 200 ml): Dextrose (Anhydrous) BP 2.70 g · Sodium Chloride BP 0.52 g · Potassium Chloride BP 0.30 g · Sodium Citrate BP 0.58 g · Excipients q.s. · Flavour added"
            },
            {
              "sr": 5,
              "name": "Oral Rehydration Salts (ORS)",
              "pack": "27.9 g powder sachet",
              "status": "UNDER DEVELOPMENT",
              "detail": "Each sachet of 27.9 g contains: Dextrose Anhydrous BP 20 g · Sodium Chloride BP 3.5 g · Sodium Citrate BP 2.9 g · Potassium Chloride BP 1.5 g · Excipients q.s."
            }
          ]
        },
        {
          "title": "Liquid Injectables",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Thiamine (Vitamin B1)",
              "strength": "100 mg",
              "pack": "10 x 1 ml Ampoule",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Other Specialty Products",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Deferasirox Tablets (iron chelating agent)",
              "strength": "250 mg / 500 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 2,
              "name": "Sevelamer Tablets (bile acid sequestrant)",
              "strength": "800 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 3,
              "name": "Betahistine Tablets (antivertigo)",
              "strength": "800 mg",
              "pack": "10 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 4,
              "name": "Tamsulosin HCl & Dutasteride Capsules (BPH)",
              "strength": "0.4 mg + 0.5 mg",
              "pack": "1 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 5,
              "name": "Tamsulosin HCl & Finasteride Tablets (BPH)",
              "strength": "0.4 mg + 5 mg",
              "pack": "1 x 10 Alu/Alu",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        }
      ]
    },
    {
      "id": "large-volume-parenteral",
      "number": "04",
      "title": "Large Volume Parenteral",
      "subtitle": "Crystalloids, colloids & infusion therapy",
      "description": "Sterile infusion therapy manufactured under stringent quality control for hospital and critical-care use.",
      "subgroups": [
        {
          "title": "Crystalloids & Colloids",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Dextrose 5%",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 2,
              "name": "Dextrose 10%",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 3,
              "name": "Dextrose 20%",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 4,
              "name": "Dextrose 25%",
              "strength": "100 / 250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 5,
              "name": "Dextrose 50%",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 6,
              "name": "Glucose 5%",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 7,
              "name": "Glucose 10%",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 8,
              "name": "Glucose 20%",
              "strength": "300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 9,
              "name": "Glucose 25%",
              "strength": "100 / 250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 10,
              "name": "Glucose 50%",
              "strength": "300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 11,
              "name": "Sodium Chloride 0.9%",
              "strength": "100 / 250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 12,
              "name": "Sodium Chloride 3%",
              "strength": "100 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 13,
              "name": "Sodium Chloride 3%",
              "strength": "100 ml",
              "pack": "Glass Bottle",
              "status": "ACTD"
            },
            {
              "sr": 14,
              "name": "Sodium Chloride 0.9%",
              "strength": "100 ml",
              "pack": "Glass Bottle",
              "status": "ACTD"
            },
            {
              "sr": 15,
              "name": "Dextrose 5% + Sodium Chloride 0.9%",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 16,
              "name": "Dextrose 5% + Sodium Chloride 0.45%",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 17,
              "name": "Dextrose 5% + Sodium Chloride 0.33%",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 18,
              "name": "Dextrose 5% + Sodium Chloride 0.22%",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 19,
              "name": "Compound Sodium Lactate",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 20,
              "name": "Multiple Electrolyte \"M\" & Dextrose",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 21,
              "name": "Multiple Electrolyte \"P\" & Dextrose",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 22,
              "name": "Multiple Electrolyte \"G\" & Dextrose",
              "strength": "250 / 300 / 500 / 1000 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 23,
              "name": "Mannitol 10%",
              "strength": "250 / 500 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 24,
              "name": "Mannitol 20%",
              "strength": "100 / 250 / 350 / 500 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 25,
              "name": "Mannitol + Glycerin",
              "strength": "100 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 26,
              "name": "Dextran-40",
              "strength": "500 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 27,
              "name": "Dextran-70",
              "strength": "500 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 28,
              "name": "Invert Sugar 10%",
              "strength": "500 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 29,
              "name": "Invert Sugar with NS",
              "strength": "500 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 30,
              "name": "Hydroxyethyl Starch",
              "strength": "500 ml",
              "pack": "PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            }
          ]
        },
        {
          "title": "Analgesic / Antipyretic",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Paracetamol",
              "strength": "1 gm",
              "pack": "100 ml PE Bottle (Nipple head)",
              "status": "ACTD"
            },
            {
              "sr": 2,
              "name": "Paracetamol",
              "strength": "500 mg / 1 gm",
              "pack": "50/100 ml Glass Bottle",
              "status": "ACTD"
            }
          ]
        },
        {
          "title": "Anti-Infective",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Levofloxacin",
              "pack": "100 ml PE Bottle (Nipple head)",
              "status": "ACTD"
            },
            {
              "sr": 2,
              "name": "Ciprofloxacin",
              "pack": "100 ml PE Bottle (Nipple head)",
              "status": "ACTD"
            },
            {
              "sr": 3,
              "name": "Ofloxacin",
              "pack": "100 ml PE Bottle (Nipple head)",
              "status": "ACTD"
            },
            {
              "sr": 4,
              "name": "Ofloxacin + Ornidazole",
              "pack": "100 ml PE Bottle (Nipple head)",
              "status": "ACTD"
            },
            {
              "sr": 5,
              "name": "Moxifloxacin",
              "pack": "100/250 ml PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 6,
              "name": "Linezolid",
              "pack": "100/300 ml PE Bottle (Nipple head)",
              "status": "ACTD"
            },
            {
              "sr": 7,
              "name": "Tinidazole",
              "pack": "400 ml PE Bottle (Nipple & Euro head)",
              "status": "ACTD"
            },
            {
              "sr": 8,
              "name": "Metronidazole",
              "pack": "100 ml PE Bottle (Nipple head)",
              "status": "ACTD"
            },
            {
              "sr": 9,
              "name": "Metronidazole 100 mg + Dextrose 5%",
              "pack": "100 / 500 ml PE Bottle (Nipple head)",
              "status": "ACTD"
            },
            {
              "sr": 10,
              "name": "Ornidazole",
              "pack": "100 ml PE Bottle (Nipple head)",
              "status": "ACTD"
            },
            {
              "sr": 11,
              "name": "Fluconazole",
              "pack": "100 ml PE Bottle (Nipple head)",
              "status": "ACTD"
            },
            {
              "sr": 12,
              "name": "Gatifloxacin 200 mg",
              "pack": "100 ml PE Bottle (Nipple head)",
              "status": "ACTD"
            }
          ]
        }
      ]
    },
    {
      "id": "small-volume-parenteral",
      "number": "05",
      "title": "Small Volume Parenteral",
      "subtitle": "Injectable ampoules & reconstitution solutions",
      "description": "Precision-manufactured sterile injectables, ampoules and reconstitution solutions.",
      "subgroups": [
        {
          "title": "Anti-Infective",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Amikacin Sulphate",
              "strength": "100 mg/2 ml",
              "pack": "Glass Vial",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 2,
              "name": "Amikacin Sulphate",
              "strength": "250 mg/2 ml",
              "pack": "Glass Vial",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 3,
              "name": "Amikacin Sulphate",
              "strength": "500 mg/2 ml",
              "pack": "Glass Vial",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 4,
              "name": "Gentamicin Sulphate",
              "strength": "40 mg/2 ml",
              "pack": "Glass Vial",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 5,
              "name": "Tobramycin Sulphate",
              "strength": "40 mg/2 ml",
              "pack": "Glass Vial",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Water for Injection",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Sterile Water for Injection",
              "strength": "5 / 10 ml",
              "pack": "PE Ampoule",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 2,
              "name": "NS Injection",
              "strength": "5 / 10 ml",
              "pack": "PE Ampoule",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 3,
              "name": "Sterile Water for Injection",
              "strength": "5 / 10 / 15 / 20 / 25 / 30 ml",
              "pack": "PE Ampoule",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 4,
              "name": "Sterile Water for Reconstitution",
              "strength": "5 / 10 / 15 / 20 / 25 / 28 / 30 ml",
              "pack": "PE Ampoule",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 5,
              "name": "Sterile Water for Reconstitution (Dry Syrup)",
              "strength": "25 / 28 ml",
              "pack": "PE Ampoule",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 6,
              "name": "Sterile Saline Solution",
              "strength": "5 / 10 ml",
              "pack": "PE Ampoule",
              "status": "UNDER DEVELOPMENT"
            },
            {
              "sr": 7,
              "name": "Sterile Saline Wash",
              "strength": "20 ml",
              "pack": "PE Ampoule",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        },
        {
          "title": "Other",
          "columns": [
            "strength",
            "pack",
            "status"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Lidocaine Hydrochloride 1%",
              "strength": "3.6 / 7.2 ml",
              "pack": "PE Ampoule",
              "status": "UNDER DEVELOPMENT"
            }
          ]
        }
      ]
    },
    {
      "id": "cephalosporin-range",
      "number": "06",
      "title": "Cephalosporin Range",
      "subtitle": "PICS EU/TGA & TGA Australia approved plants",
      "description": "A highly organized, internationally certified cephalosporin portfolio across all dosage forms.",
      "subgroups": [
        {
          "title": "PICS (EU & TGA) Approved Plant — Dry Powders for Injection",
          "columns": [
            "strength"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Cefazolin for Injection",
              "strength": "250 mg / 500 mg / 1000 mg"
            },
            {
              "sr": 2,
              "name": "Cefepime for Injection",
              "strength": "250 mg / 500 mg / 1000 mg / 2000 mg"
            },
            {
              "sr": 3,
              "name": "Cefepime and Sulbactam for Injection",
              "strength": "(250+125) mg, (500+250) mg, (1000+500) mg"
            },
            {
              "sr": 4,
              "name": "Cefoperazone and Sulbactam for Injection",
              "strength": "(250+125) mg, (500+500) mg, (1000+1000) mg"
            },
            {
              "sr": 5,
              "name": "Cefoperazone for Injection",
              "strength": "250 mg / 1000 mg / 2000 mg"
            },
            {
              "sr": 6,
              "name": "Cefotaxime and Sulbactam for Injection",
              "strength": "(500+250) mg, (1000+500) mg"
            },
            {
              "sr": 7,
              "name": "Cefotaxime for Injection",
              "strength": "250 mg / 500 mg / 1000 mg / 2000 mg"
            },
            {
              "sr": 8,
              "name": "Cefoxitin for Injection",
              "strength": "1000 mg"
            },
            {
              "sr": 9,
              "name": "Cefpirome for Injection",
              "strength": "1000 mg / 2000 mg"
            },
            {
              "sr": 10,
              "name": "Ceftazidime for Injection",
              "strength": "250 mg / 500 mg / 1000 mg / 2000 mg"
            },
            {
              "sr": 11,
              "name": "Ceftizoxime for Injection",
              "strength": "250 mg / 500 mg / 1000 mg"
            },
            {
              "sr": 12,
              "name": "Ceftriaxone and Sulbactam for Injection",
              "strength": "(250+125) mg, (500+250) mg, (1000+500) mg"
            },
            {
              "sr": 13,
              "name": "Ceftriaxone and Tazobactam for Injection",
              "strength": "(250+31.25) mg, (500+62.5) mg, (1000+125) mg"
            },
            {
              "sr": 14,
              "name": "Ceftriaxone for Injection",
              "strength": "250 mg / 500 mg / 1000 mg / 2000 mg"
            },
            {
              "sr": 15,
              "name": "Cefuroxime for Injection",
              "strength": "250 mg / 500 mg / 750 mg / 1500 mg"
            },
            {
              "sr": 16,
              "name": "Cephalothin for Injection",
              "strength": "250 mg / 500 mg / 1000 mg"
            }
          ]
        },
        {
          "title": "PICS (EU & TGA) Approved Plant — Capsules",
          "columns": [
            "strength"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Cefaclor Capsules",
              "strength": "250 mg / 500 mg"
            },
            {
              "sr": 2,
              "name": "Cefadroxil Capsules",
              "strength": "250 mg / 500 mg"
            },
            {
              "sr": 3,
              "name": "Cefdinir Capsules",
              "strength": "100 mg / 300 mg"
            },
            {
              "sr": 4,
              "name": "Cefixime Capsules",
              "strength": "100 mg / 200 mg / 400 mg"
            },
            {
              "sr": 5,
              "name": "Cefpodoxime Proxetil Capsules",
              "strength": "100 mg / 200 mg"
            },
            {
              "sr": 6,
              "name": "Cephalexin Capsules",
              "strength": "250 mg / 500 mg"
            },
            {
              "sr": 7,
              "name": "Cephradine Capsules",
              "strength": "250 mg / 500 mg"
            }
          ]
        },
        {
          "title": "PICS (EU & TGA) Approved Plant — Tablets",
          "columns": [
            "strength"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Cefaclor Extended Release Tablets",
              "strength": "375 mg"
            },
            {
              "sr": 2,
              "name": "Cefaclor Tablets",
              "strength": "125 mg / 375 mg"
            },
            {
              "sr": 3,
              "name": "Cefadroxil Dispersible Tablets",
              "strength": "125 mg / 250 mg / 500 mg"
            },
            {
              "sr": 4,
              "name": "Cefadroxil Tablets",
              "strength": "250 mg / 500 mg"
            },
            {
              "sr": 5,
              "name": "Cefdinir Dispersible Tablets",
              "strength": "125 mg / 250 mg"
            },
            {
              "sr": 6,
              "name": "Cefixime Tablets",
              "strength": "100 mg / 200 mg / 400 mg"
            },
            {
              "sr": 7,
              "name": "Cefixime Dispersible Tablets",
              "strength": "50 mg / 100 mg / 200 mg"
            },
            {
              "sr": 8,
              "name": "Cefpodoxime Proxetil Dispersible Tablets",
              "strength": "200 mg"
            },
            {
              "sr": 9,
              "name": "Cefpodoxime Proxetil Tablets",
              "strength": "100 mg / 200 mg"
            },
            {
              "sr": 10,
              "name": "Cefprozil Tablets",
              "strength": "250 mg / 500 mg"
            },
            {
              "sr": 11,
              "name": "Cefuroxime Axetil Tablets",
              "strength": "125 mg / 250 mg / 500 mg"
            },
            {
              "sr": 12,
              "name": "Cephalexin Tablets",
              "strength": "250 mg / 500 mg"
            },
            {
              "sr": 13,
              "name": "Cephalexin Dispersible Tablets",
              "strength": "125 mg / 250 mg / 500 mg"
            },
            {
              "sr": 14,
              "name": "Cephalexin Extended Release Tablets",
              "strength": "375 mg"
            }
          ]
        },
        {
          "title": "PICS (EU & TGA) Approved Plant — Oral Suspensions",
          "columns": [
            "strength"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Cefaclor for Oral Suspension",
              "strength": "125 mg/5 ml (30 / 100 ml)"
            },
            {
              "sr": 2,
              "name": "Cefaclor for Oral Suspension",
              "strength": "250 mg/5 ml (30 / 100 ml)"
            },
            {
              "sr": 3,
              "name": "Cefadroxil for Oral Suspension",
              "strength": "125 mg/5 ml (30 / 60 / 100 ml)"
            },
            {
              "sr": 4,
              "name": "Cefadroxil for Oral Suspension",
              "strength": "250 mg/5 ml (30 / 60 / 100 ml)"
            },
            {
              "sr": 5,
              "name": "Cefdinir for Oral Suspension",
              "strength": "125 mg/5 ml (30 / 40 / 60 / 100 ml)"
            },
            {
              "sr": 6,
              "name": "Cefixime for Oral Suspension",
              "strength": "50 mg/5 ml (30 / 60 / 100 ml)"
            },
            {
              "sr": 7,
              "name": "Cefixime for Oral Suspension",
              "strength": "100 mg/5 ml (30 / 60 / 100 ml)"
            },
            {
              "sr": 8,
              "name": "Cefpodoxime Proxetil for Oral Suspension",
              "strength": "50 mg/5 ml (30 / 60 ml)"
            },
            {
              "sr": 9,
              "name": "Cefpodoxime Proxetil for Oral Suspension",
              "strength": "100 mg/5 ml (30 ml)"
            },
            {
              "sr": 10,
              "name": "Cefprozil for Oral Suspension",
              "strength": "125 mg/5 ml (30 / 50 ml)"
            },
            {
              "sr": 11,
              "name": "Cefprozil for Oral Suspension",
              "strength": "250 mg/5 ml (30 / 50 ml)"
            },
            {
              "sr": 12,
              "name": "Cefuroxime Axetil for Oral Suspension",
              "strength": "125 mg/5 ml (30 / 50 / 70 ml)"
            },
            {
              "sr": 13,
              "name": "Cephalexin for Oral Suspension",
              "strength": "125 mg/5 ml (30 / 40 / 60 / 100 ml)"
            },
            {
              "sr": 14,
              "name": "Cephalexin for Oral Suspension",
              "strength": "250 mg/5 ml (30 / 60 / 100 ml)"
            },
            {
              "sr": 15,
              "name": "Cephradine for Oral Suspension",
              "strength": "125 mg/5 ml (30 / 100 ml)"
            },
            {
              "sr": 16,
              "name": "Cephradine for Oral Suspension",
              "strength": "250 mg/5 ml (30 / 100 ml)"
            }
          ]
        },
        {
          "title": "PICS (EU & TGA) Approved Plant — Sachets",
          "columns": [
            "strength"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Cefaclor for Oral Suspension",
              "strength": "125 mg / 250 mg per sachet"
            },
            {
              "sr": 2,
              "name": "Cefadroxil for Oral Suspension",
              "strength": "125 mg / 250 mg per sachet"
            },
            {
              "sr": 3,
              "name": "Cefdinir for Oral Suspension",
              "strength": "125 mg per sachet"
            },
            {
              "sr": 4,
              "name": "Cefixime for Oral Suspension",
              "strength": "50 mg / 100 mg per sachet"
            },
            {
              "sr": 5,
              "name": "Cefpodoxime Proxetil for Oral Suspension",
              "strength": "50 mg / 100 mg per sachet"
            },
            {
              "sr": 6,
              "name": "Cefuroxime Axetil for Oral Suspension",
              "strength": "125 mg per sachet"
            },
            {
              "sr": 7,
              "name": "Cephalexin for Oral Suspension",
              "strength": "125 mg / 250 mg per sachet"
            }
          ]
        },
        {
          "title": "PICS (TGA, Australia) Approved Plant — Dry Powders for Injection — Developed",
          "columns": [
            "strength"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Cefazolin for Injection",
              "strength": "125 mg / 250 mg / 500 mg / 1 g / 2 g"
            },
            {
              "sr": 2,
              "name": "Cefepime for Injection",
              "strength": "250 mg / 500 mg / 1 g / 2 g"
            },
            {
              "sr": 3,
              "name": "Ceftazidime for Injection",
              "strength": "125 mg / 250 mg / 500 mg / 1 g / 2 g"
            },
            {
              "sr": 4,
              "name": "Ceftriaxone for Injection",
              "strength": "125 mg / 250 mg / 500 mg / 1000 mg / 2000 mg"
            },
            {
              "sr": 5,
              "name": "Cefuroxime for Injection",
              "strength": "250 mg / 500 mg / 750 mg / 1.5 g"
            },
            {
              "sr": 6,
              "name": "Cefotaxime for Injection",
              "strength": "250 mg / 500 mg / 1 g / 2 g"
            },
            {
              "sr": 7,
              "name": "Cefpirome for Injection",
              "strength": "250 mg / 500 mg / 1 g / 2 g"
            },
            {
              "sr": 8,
              "name": "Cefoperazone for Injection",
              "strength": "1 g / 2 g"
            },
            {
              "sr": 9,
              "name": "Ceftizoxime for Injection",
              "strength": "500 mg / 1 g / 2 g"
            },
            {
              "sr": 10,
              "name": "Cefoxitin for Injection",
              "strength": "1 g / 2 g / 10 g"
            },
            {
              "sr": 11,
              "name": "Cefotetan for Injection",
              "strength": "1 g / 10 g"
            },
            {
              "sr": 12,
              "name": "Cefodizime for Injection",
              "strength": "500 mg / 1 g / 2 g"
            },
            {
              "sr": 13,
              "name": "Cephalothin for Injection",
              "strength": "1 g / 1.5 g / 2 g"
            },
            {
              "sr": 14,
              "name": "Ceftazidime and Sulbactam for Injection",
              "strength": "250 mg – 2 g"
            },
            {
              "sr": 15,
              "name": "Ceftazidime and Tazobactam for Injection",
              "strength": "(500+62.5) mg, (1000+125) mg"
            },
            {
              "sr": 16,
              "name": "Ceftriaxone and Sulbactam for Injection",
              "strength": "187.5 mg / 375 mg / 750 mg / 1.5 g"
            },
            {
              "sr": 17,
              "name": "Ceftriaxone and Tazobactam for Injection",
              "strength": "281.25 mg / 562.5 mg / 1.125 g / 2.25 g"
            },
            {
              "sr": 18,
              "name": "Cefepime and Amikacin for Injection",
              "strength": "2.5 g"
            },
            {
              "sr": 19,
              "name": "Cefepime and Sulbactam for Injection",
              "strength": "750 mg / 1.5 g / 3 g"
            },
            {
              "sr": 20,
              "name": "Cefepime and Tazobactam for Injection",
              "strength": "(1000+125) mg, (500+62.5) mg"
            },
            {
              "sr": 21,
              "name": "Cefotaxime and Sulbactam for Injection",
              "strength": "375 mg / 750 mg / 1 g / 1.5 g"
            },
            {
              "sr": 22,
              "name": "Cefpirome and Sulbactam for Injection",
              "strength": "750 mg / 1.5 g / 3 g"
            },
            {
              "sr": 23,
              "name": "Cefoperazone and Sulbactam for Injection",
              "strength": "1 g / 1.5 g / 2 g"
            }
          ]
        },
        {
          "title": "PICS (TGA, Australia) Approved Plant — Dry Powders for Injection — Under Development",
          "columns": [
            "strength"
          ],
          "products": [
            {
              "sr": 1,
              "name": "Cephaloridine for Injection",
              "strength": "500 mg / 1 g"
            },
            {
              "sr": 2,
              "name": "Cefamandole Nafate for Injection",
              "strength": "1 g"
            },
            {
              "sr": 3,
              "name": "Cephapirin for Injection",
              "strength": "500 mg / 1 g / 2 g"
            },
            {
              "sr": 4,
              "name": "Cefazedone for Injection",
              "strength": "500 mg / 1 g / 2 g"
            },
            {
              "sr": 5,
              "name": "Cefradine for Injection",
              "strength": "250 mg / 500 mg / 1 g / 2 g"
            },
            {
              "sr": 6,
              "name": "Ceftezole for Injection",
              "strength": "1 g"
            },
            {
              "sr": 7,
              "name": "Cefminox for Injection",
              "strength": "500 mg / 1 g / 2 g"
            },
            {
              "sr": 8,
              "name": "Cefonicid for Injection",
              "strength": "500 mg / 1 g / 2 g"
            },
            {
              "sr": 9,
              "name": "Ceforanide for Injection",
              "strength": "500 mg / 1 g / 2 g"
            },
            {
              "sr": 10,
              "name": "Cefotiam Hydrochloride for Injection",
              "strength": "500 mg / 1 g"
            },
            {
              "sr": 11,
              "name": "Cefbuperazone for Injection",
              "strength": "500 mg / 1 g"
            },
            {
              "sr": 12,
              "name": "Cefluzonam for Injection",
              "strength": "250 mg / 500 mg / 1 g"
            },
            {
              "sr": 13,
              "name": "Cefmetazole for Injection",
              "strength": "500 mg / 1 g / 2 g"
            },
            {
              "sr": 14,
              "name": "Cefpiramide for Injection",
              "strength": "500 mg / 1 g / 2 g"
            }
          ]
        }
      ]
    }
  ]
};
