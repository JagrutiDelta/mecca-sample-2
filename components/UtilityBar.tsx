"use client";

import { Globe2, Mail, Phone, ShieldCheck, BadgeCheck } from "lucide-react";
import LanguageTranslator from "@/components/LanguageTranslator";

const ITEMS = [
  {
    icon: <Globe2 className="w-3.5 h-3.5 text-white/90" />,
    label: "Exporting to 50+ Global Countries",
  },
  {
    label: "ISO 9001:2015",
  },
  {
    label: "ISO 13485:2016",
  },
  {
    label: "WHO-GMP",
  },
  {
    label: "CE Certified",
  },
];

export default function UtilityBar() {
  return (
    <div className="w-full bg-[#091D33] border-b border-white/10 text-white relative z-50">
      <div className="container-px flex items-center justify-between py-2 text-xs">
        {/* Badges / Stats on Left & Center */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6 flex-wrap">
          {ITEMS.map((item, i) => (
            <div key={item.label} className="flex items-center gap-4">
              {i !== 0 && <span className="h-3 w-px bg-white/20" aria-hidden="true" />}
              <span className="flex items-center gap-1.5 text-[11px] lg:text-xs font-medium text-white/80 whitespace-nowrap">
                {item.icon}
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile left indicator */}
        <div className="sm:hidden flex items-center gap-1.5 text-[11px] font-medium text-white/85">
          <Globe2 className="w-3.5 h-3.5 text-burgundy" />
          <span>Mecca Global Healthcare</span>
        </div>

        {/* Right Language Translator Dropdown & Contact Info */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919998699090"
            className="hidden lg:inline-flex items-center gap-1.5 text-[11px] text-white/85 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#8B1E2D]" />
            <span>+91 999 869 9090</span>
          </a>
          <a
            href="mailto:info@mhplindia.com"
            className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-white/85 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#8B1E2D]" />
            <span>info@mhplindia.com</span>
          </a>
          <LanguageTranslator variant="utility" />
        </div>
      </div>
    </div>
  );
}