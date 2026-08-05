"use client";

import { Globe2, ShieldCheck, BadgeCheck, ShieldCheck as WhoIcon } from "lucide-react";

const ITEMS = [
  {
    icon: <Globe2 className="w-4 h-4 text-white/90" />,
    label: "Exporting to 5+ Global Regions",
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
    <div className="w-full bg-navy">
      <div className="container-px flex items-center justify-center py-2.5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {ITEMS.map((item, i) => (
            <div key={item.label} className="flex items-center gap-6">
              {i !== 0 && <span className="h-4 w-px bg-white/20" aria-hidden="true" />}
              <span className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-white/85 whitespace-nowrap">
                {item.icon}
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}