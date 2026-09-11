"use client";

import { useEffect, useState } from "react";
import { Category } from "@/lib/mecca-labs/types";
import { ListFilter, ChevronDown, ChevronRight, Hash } from "lucide-react";

interface TOCProps {
  categories: Category[];
}

export default function TOC({ categories }: TOCProps) {
  const [activeId, setActiveId] = useState<string>(categories[0]?.id || "");
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      }
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
      setIsOpenMobile(false);
    }
  };

  const activeCategory = categories.find((c) => c.id === activeId) || categories[0];

  return (
    <aside className="w-full lg:w-72 shrink-0">
      {/* Mobile / Tablet Accordion */}
      <div className="lg:hidden mb-6">
        <button
          type="button"
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="w-full flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 shadow-sm text-left"
        >
          <div className="flex items-center gap-2 min-w-0">
            <ListFilter className="h-4 w-4 text-burgundy shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-navy truncate">
              {activeCategory ? `${activeCategory.number}. ${activeCategory.title}` : "Table of Contents"}
            </span>
          </div>
          <ChevronDown
            className={`h-4 w-4 text-gray transition-transform duration-200 shrink-0 ${
              isOpenMobile ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpenMobile && (
          <div className="mt-2 max-h-80 overflow-y-auto rounded-xl border border-border bg-white p-2 shadow-card space-y-1">
            {categories.map((cat) => {
              const isActive = cat.id === activeId;
              const prodCount = cat.subgroups.reduce((acc, sg) => acc + sg.products.length, 0);
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleScroll(cat.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-burgundy text-white font-semibold"
                      : "text-ink hover:bg-bg hover:text-burgundy"
                  }`}
                >
                  <span className="truncate mr-2">
                    {cat.number}. {cat.title}
                  </span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-bg text-gray"
                    }`}
                  >
                    {prodCount}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <div className="hidden lg:block sticky top-28 rounded-2xl border border-border bg-white p-5 shadow-card max-h-[calc(100vh-140px)] flex flex-col">
        <div className="flex items-center justify-between pb-3 border-b border-border mb-3">
          <div className="flex items-center gap-2">
            <ListFilter className="h-4 w-4 text-burgundy" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-navy">
              Catalogue Index
            </span>
          </div>
          <span className="text-[10px] font-bold text-gray bg-bg px-2 py-0.5 rounded-full border border-border">
            {categories.length} Sections
          </span>
        </div>

        <nav
          aria-label="Catalogue sections"
          className="overflow-y-auto pr-1 space-y-1 flex-1 custom-scrollbar"
        >
          {categories.map((cat) => {
            const isActive = cat.id === activeId;
            const prodCount = cat.subgroups.reduce((acc, sg) => acc + sg.products.length, 0);

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleScroll(cat.id)}
                className={`group w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs transition-all duration-200 ${
                  isActive
                    ? "bg-burgundy text-white font-bold shadow-sm -translate-x-0.5"
                    : "text-ink/80 hover:bg-bg hover:text-burgundy"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0 pr-2">
                  <span
                    className={`font-heading text-[10px] font-bold shrink-0 ${
                      isActive ? "text-white/80" : "text-burgundy group-hover:text-burgundy"
                    }`}
                  >
                    {cat.number}
                  </span>
                  <span className="truncate leading-snug">{cat.title}</span>
                </div>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full shrink-0 font-medium ${
                    isActive ? "bg-white/20 text-white" : "bg-bg text-gray border border-border/60"
                  }`}
                >
                  {prodCount}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
