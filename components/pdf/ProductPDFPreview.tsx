"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import type { ProductPDFPreviewProps } from "./ProductPDFPreviewCore";

const ProductPDFPreviewCore = dynamic(() => import("./ProductPDFPreviewCore"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[560px] flex flex-col items-center justify-center bg-slate-100 p-8 text-center">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#173F6B] shadow-xs">
        <Loader2 className="w-4 h-4 text-[#8B1E2D] animate-spin" />
        <span>Loading PDF Preview…</span>
      </div>
    </div>
  ),
});

export default function ProductPDFPreview(props: ProductPDFPreviewProps) {
  return <ProductPDFPreviewCore {...props} />;
}
