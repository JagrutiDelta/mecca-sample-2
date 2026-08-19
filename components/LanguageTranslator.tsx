"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check, Search, Sparkles } from "lucide-react";

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  region: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", region: "Global" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", region: "Latin America & Spain" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", region: "Middle East & GCC" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", region: "Europe & Africa" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", region: "Europe" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", region: "CIS & East Europe" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇧🇷", region: "Brazil & Portugal" },
  { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "中文", flag: "🇨🇳", region: "East Asia" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", region: "Asia Pacific" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", region: "South Asia" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", flag: "🇻🇳", region: "Southeast Asia" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷", region: "Middle East & Europe" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", region: "Europe" },
];

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay?: boolean; includedLanguages?: string },
          containerId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

interface LanguageTranslatorProps {
  variant?: "utility" | "header" | "footer";
  direction?: "up" | "down";
  align?: "left" | "right";
  className?: string;
}

export default function LanguageTranslator({
  variant = "header",
  direction,
  align = "right",
  className = "",
}: LanguageTranslatorProps) {
  const isUp = direction ? direction === "up" : variant === "footer";
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [currentLang, setCurrentLang] = useState<LanguageOption>(LANGUAGES[0]);
  const [isLoaded, setIsLoaded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize Google Translate Script
  useEffect(() => {
    // Check existing cookie for saved language
    const getCookieLang = () => {
      const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
      if (match && match[1]) {
        const found = LANGUAGES.find((l) => l.code === match[1]);
        if (found) setCurrentLang(found);
      }
    };
    getCookieLang();

    // Define Google translate init callback
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
            includedLanguages: LANGUAGES.map((l) => l.code).join(","),
          },
          "google_translate_element"
        );
        setIsLoaded(true);
      }
    };

    // Load Google script if not already added
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate) {
      setIsLoaded(true);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Translate function
  const handleSelectLanguage = (lang: LanguageOption) => {
    setCurrentLang(lang);
    setIsOpen(false);

    if (lang.code === "en") {
      // Clear cookie to restore English
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
      window.location.reload();
      return;
    }

    // Set Google translate cookie
    document.cookie = `googtrans=/en/${lang.code}; path=/;`;
    document.cookie = `googtrans=/en/${lang.code}; domain=${window.location.hostname}; path=/;`;

    // Attempt to trigger google combo change
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  };

  const filteredLanguages = LANGUAGES.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.nativeName.toLowerCase().includes(search.toLowerCase()) ||
      l.region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      {/* Hidden container for Google widget */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      {/* Trigger Button Variants */}
      {variant === "utility" ? (
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors border border-white/15 cursor-pointer"
          aria-label="Change Website Language"
        >
          <span className="text-sm">{currentLang.flag}</span>
          <span className="font-semibold text-[11px] sm:text-xs">{currentLang.nativeName}</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      ) : variant === "footer" ? (
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 text-xs font-medium transition-colors border border-white/15 cursor-pointer w-full justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="text-base">{currentLang.flag}</span>
            <span>{currentLang.nativeName} ({currentLang.name})</span>
          </div>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      ) : (
        /* Header variant */
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-navy text-xs font-medium transition-colors border border-border cursor-pointer shadow-xs"
          aria-label="Change Language"
        >
          <Globe className="w-3.5 h-3.5 text-burgundy" />
          <span className="text-sm">{currentLang.flag}</span>
          <span className="hidden sm:inline font-semibold">{currentLang.code.toUpperCase()}</span>
          <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      )}

      {/* Language Picker Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: isUp ? 8 : -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isUp ? 8 : -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`absolute z-[100] bg-white rounded-2xl shadow-[0_20px_60px_rgba(13,34,64,0.22)] border border-slate-200/90 overflow-hidden w-72 sm:w-80 max-w-[calc(100vw-2rem)] ${
              isUp ? "bottom-full mb-2.5" : "top-full mt-2.5"
            } ${
              align === "left" ? "left-0" : "right-0"
            }`}
          >
            {/* Header */}
            <div className="p-3.5 bg-slate-50/80 border-b border-border/70">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-navy flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-burgundy" />
                  Select Global Language
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  50+ Countries
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search language or country..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-white border border-border text-navy placeholder:text-slate-400 focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy/10"
                />
              </div>
            </div>

            {/* Language Options List */}
            <div className="max-h-64 overflow-y-auto p-2 space-y-1">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang) => {
                  const isSelected = currentLang.code === lang.code;

                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleSelectLanguage(lang)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-burgundy/10 text-burgundy font-semibold"
                          : "hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg leading-none">{lang.flag}</span>
                        <div>
                          <div className="text-xs font-bold leading-tight text-navy">
                            {lang.nativeName}
                            {lang.nativeName !== lang.name && (
                              <span className="text-[11px] font-normal text-slate-500 ml-1">
                                ({lang.name})
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5 leading-none">
                            {lang.region}
                          </div>
                        </div>
                      </div>

                      {isSelected && (
                        <Check className="w-4 h-4 text-burgundy shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })
              ) : (
                <div className="py-6 text-center text-xs text-slate-400">
                  No languages found matching &ldquo;{search}&rdquo;
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-3.5 py-2 bg-slate-50 border-t border-border/70 text-[10px] text-slate-500 flex items-center justify-between">
              <span>Automatic real-time translation</span>
              <span className="text-burgundy font-semibold">ISO 13485 Global</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
