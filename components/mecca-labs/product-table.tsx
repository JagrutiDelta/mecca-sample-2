import { SubCategory, Product } from "@/lib/mecca-labs/types";
import { CheckCircle2, Clock, ShieldAlert, Sparkles } from "lucide-react";

interface ProductTableProps {
  subgroup: SubCategory;
}

function StatusBadge({ status }: { status: string }) {
  const norm = (status || "").trim().toUpperCase();

  if (norm === "AVAILABLE") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200/80 shadow-xs">
        <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
        <span>Available</span>
      </span>
    );
  }

  if (norm.includes("UNDER DEVELOPMENT") || norm === "DEVELOPMENT") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 border border-amber-200/80 shadow-xs">
        <Clock className="h-3 w-3 text-amber-600 shrink-0" />
        <span>Under Development</span>
      </span>
    );
  }

  // Dossier status badges (ACTD / CTD / NON-CTD)
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-burgundy/5 px-2.5 py-1 text-[10px] font-bold text-burgundy border border-burgundy/25 shadow-xs uppercase tracking-wider">
      <Sparkles className="h-3 w-3 text-burgundy shrink-0" />
      <span>{status}</span>
    </span>
  );
}

export default function ProductTable({ subgroup }: ProductTableProps) {
  const hasStrength = subgroup.products.some((p) => Boolean(p.strength));
  const hasPack = subgroup.products.some((p) => Boolean(p.pack));
  const hasUse = subgroup.products.some((p) => Boolean(p.use));
  const hasStatus = subgroup.products.some((p) => Boolean(p.status));

  return (
    <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
      {/* Subgroup Title if present */}
      {subgroup.title && (
        <div className="border-b border-border bg-gradient-to-r from-bg via-white to-bg px-5 py-3 flex items-center justify-between">
          <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-burgundy" />
            {subgroup.title}
          </h3>
          <span className="text-[11px] font-semibold text-gray">
            {subgroup.products.length} {subgroup.products.length === 1 ? "Item" : "Items"}
          </span>
        </div>
      )}

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-border bg-navy text-white text-[11px] font-semibold uppercase tracking-wider">
              <th scope="col" className="w-12 px-4 py-3.5 text-center text-accent/80 font-heading">
                #
              </th>
              <th scope="col" className="px-4 py-3.5 min-w-[200px]">
                Product Name
              </th>
              {hasStrength && (
                <th scope="col" className="px-4 py-3.5 min-w-[220px]">
                  Strength / Composition
                </th>
              )}
              {hasUse && (
                <th scope="col" className="px-4 py-3.5 min-w-[240px]">
                  Indications / Application
                </th>
              )}
              {hasPack && (
                <th scope="col" className="px-4 py-3.5 min-w-[130px]">
                  Packaging
                </th>
              )}
              {hasStatus && (
                <th scope="col" className="px-4 py-3.5 min-w-[150px] text-right sm:text-left">
                  Status / Dossier
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {subgroup.products.map((product, pIdx) => {
              const rowNum = product.sr !== undefined ? product.sr : pIdx + 1;
              return (
                <tr
                  key={`${product.name}-${pIdx}`}
                  className="transition-colors duration-150 hover:bg-bg/80 group"
                >
                  <td className="px-4 py-3.5 text-center font-heading font-semibold text-gray/70 group-hover:text-burgundy">
                    {rowNum}
                  </td>
                  <td className="px-4 py-3.5 font-medium text-navy">
                    <span className="font-semibold text-[13px] text-navy group-hover:text-burgundy transition-colors block">
                      {product.name}
                    </span>
                    {product.detail && (
                      <span className="text-[11px] text-gray mt-0.5 block leading-relaxed">
                        {product.detail}
                      </span>
                    )}
                  </td>
                  {hasStrength && (
                    <td className="px-4 py-3.5 text-ink leading-relaxed font-normal">
                      {product.strength || <span className="text-gray/40">—</span>}
                    </td>
                  )}
                  {hasUse && (
                    <td className="px-4 py-3.5 text-ink/90 leading-relaxed font-normal">
                      {product.use || <span className="text-gray/40">—</span>}
                    </td>
                  )}
                  {hasPack && (
                    <td className="px-4 py-3.5 font-medium text-medblue">
                      {product.pack || <span className="text-gray/40">—</span>}
                    </td>
                  )}
                  {hasStatus && (
                    <td className="px-4 py-3.5 text-right sm:text-left">
                      {product.status ? (
                        <StatusBadge status={product.status} />
                      ) : (
                        <span className="text-gray/40">—</span>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
