"use client";

import React, { useState } from "react";
import { FileText, Download, ExternalLink, RefreshCw } from "lucide-react";

export interface ProductPDFPreviewProps {
  file: string;
  title: string;
  badge?: string;
}

export default function ProductPDFPreviewCore({
  file,
  title,
  badge,
}: ProductPDFPreviewProps) {
  const [loadError, setLoadError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  return (
    <div className="relative w-full h-full flex flex-col bg-slate-100 overflow-hidden select-none">
      {/* ─────────────────────────────────────────────────────────────
          STICKY TOP TOOLBAR (Inside the Preview Container)
         ───────────────────────────────────────────────────────────── */}
      <div className="shrink-0 z-10 w-full px-3.5 py-2.5 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs flex items-center justify-between gap-2 text-xs font-medium text-[#173F6B]">
        {/* Left: Badge and Document Title */}
        <div className="flex items-center gap-2 min-w-0">
          {badge && (
            <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] font-bold text-[10px] tracking-wide border border-[#8B1E2D]/20">
              {badge}
            </span>
          )}
          <span className="font-semibold text-slate-700 truncate text-[11px] sm:text-xs">
            {title}
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-[#173F6B] bg-slate-100 hover:bg-[#173F6B] hover:text-white border border-slate-200 transition-colors shadow-2xs"
            title="Open PDF in new tab"
          >
            <ExternalLink className="w-3 h-3" />
            <span className="hidden sm:inline">Open</span>
          </a>
          <a
            href={file}
            download
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white bg-burgundy hover:bg-burgundy-dark transition-colors shadow-2xs"
            title="Download PDF"
          >
            <Download className="w-3 h-3" />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          VERTICAL SCROLLABLE EMBEDDED PDF VIEWPORT
         ───────────────────────────────────────────────────────────── */}
      <div className="relative flex-1 min-h-0 w-full bg-slate-100">
        {loadError ? (
          <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center p-6 text-center bg-slate-50">
            <div className="w-12 h-12 rounded-xl bg-[#8B1E2D]/10 text-[#8B1E2D] flex items-center justify-center mb-3">
              <FileText className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h4 className="text-sm font-bold text-[#173F6B] mb-1">
              PDF Preview Unavailable
            </h4>
            <p className="text-xs text-slate-500 mb-4 max-w-xs leading-relaxed">
              Unable to render the catalogue preview in this window. You can download the file to view it offline.
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setLoadError(false);
                  setRetryKey((k) => k + 1);
                }}
                className="px-3.5 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-[#173F6B] hover:bg-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Retry</span>
              </button>
              <a
                href={file}
                download
                className="px-3.5 py-1.5 rounded-lg bg-[#8B1E2D] text-white text-xs font-semibold hover:bg-[#6E1622] transition-colors shadow-xs flex items-center gap-1.5"
              >
                <Download className="w-3 h-3" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        ) : (
          <iframe
            key={retryKey}
            src={`${file}#toolbar=0&navpanes=0&view=FitH`}
            title={`${title} Catalogue Preview`}
            className="w-full h-full border-0 bg-white"
            onError={() => setLoadError(true)}
          />
        )}
      </div>
    </div>
  );
}
