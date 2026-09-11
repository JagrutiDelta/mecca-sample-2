"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Cookie,
  Check,
  ChevronDown,
  X,
  Lock,
  Settings2,
  Sliders,
  Sparkles,
} from "lucide-react";

const COOKIE_CONSENT_KEY = "mecca_cookie_consent_v1";

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and locked
    analytics: true,
    functional: true,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!stored) {
        // Small delay so page renders first and user is not jarred
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 750);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage may be disabled in restricted environments
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      status: "accepted_all",
      preferences: { necessary: true, analytics: true, functional: true },
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    } catch {}
    setIsOpen(false);
  };

  const handleAcceptEssential = () => {
    const consent = {
      status: "essential_only",
      preferences: { necessary: true, analytics: false, functional: false },
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    } catch {}
    setIsOpen(false);
  };

  const handleSaveCustom = () => {
    const consent = {
      status: "custom",
      preferences,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    } catch {}
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <aside
          role="dialog"
          aria-labelledby="cookie-heading"
          aria-describedby="cookie-description"
          className="fixed bottom-3 left-3 right-3 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-xl z-[9999] pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-slate-200/90 bg-white/95 p-5 sm:p-6 shadow-[0_20px_50px_rgba(13,34,64,0.18)] backdrop-blur-xl"
          >
            {/* ─── Top Bar: Icon + Eyebrow + Close ─── */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-burgundy/10 text-burgundy border border-burgundy/20 shrink-0">
                  <Cookie className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-burgundy">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Data Protection &amp; Cookies</span>
                  </div>
                  <h3
                    id="cookie-heading"
                    className="font-heading text-base sm:text-lg font-bold text-navy leading-snug"
                  >
                    We Value Your Privacy
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAcceptEssential}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                aria-label="Dismiss cookie notice with essential cookies only"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* ─── Body Text ─── */}
            <p
              id="cookie-description"
              className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4"
            >
              Mecca Healthcare uses necessary cookies to ensure secure site operation, preserve language selections, and support medical device inquiries. With your consent, we also use analytical tools to enhance catalogue performance in compliance with GDPR and Indian DPDP standards.
            </p>

            {/* ─── Expandable Preferences Section ─── */}
            {showPreferences && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 space-y-2.5 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 text-xs"
              >
                {/* 1. Necessary Cookies */}
                <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-200/70">
                  <div className="flex items-center gap-2">
                    <Lock className="h-3.5 w-3.5 text-slate-500" />
                    <div>
                      <div className="font-semibold text-navy">Strictly Necessary</div>
                      <div className="text-[11px] text-slate-500">Security, session integrity &amp; translation</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                    Always Active
                  </span>
                </div>

                {/* 2. Analytical Cookies */}
                <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-200/70">
                  <div className="flex items-center gap-2">
                    <Sliders className="h-3.5 w-3.5 text-medblue" />
                    <div>
                      <div className="font-semibold text-navy">Analytics &amp; Performance</div>
                      <div className="text-[11px] text-slate-500">Anonymous visitor statistics &amp; page speed</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-burgundy"></div>
                  </label>
                </div>

                {/* 3. Functional Cookies */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                    <div>
                      <div className="font-semibold text-navy">Functional &amp; RFQ Storage</div>
                      <div className="text-[11px] text-slate-500">Remember quotation items &amp; catalogue views</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) =>
                        setPreferences((prev) => ({ ...prev, functional: e.target.checked }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-burgundy"></div>
                  </label>
                </div>
              </motion.div>
            )}

            {/* ─── Links & Customize Toggle ─── */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-4 pt-1">
              <Link
                href="/privacy-policy#cookies"
                className="text-slate-500 hover:text-burgundy underline transition-colors"
              >
                Privacy &amp; Cookie Policy
              </Link>

              <button
                type="button"
                onClick={() => setShowPreferences((v) => !v)}
                className="inline-flex items-center gap-1 font-semibold text-navy hover:text-burgundy transition-colors cursor-pointer"
              >
                <Settings2 className="h-3.5 w-3.5" />
                <span>{showPreferences ? "Hide Settings" : "Customise Preferences"}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    showPreferences ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* ─── Action Buttons ─── */}
            <div className="flex flex-wrap items-center gap-2.5">
              {showPreferences ? (
                <>
                  <button
                    type="button"
                    onClick={handleSaveCustom}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-burgundy px-4 py-2.5 text-xs font-semibold text-white shadow-soft hover:bg-burgundy-dark transition-all cursor-pointer"
                  >
                    <Check className="h-3.5 w-3.5" />
                    <span>Save My Choices</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-navy hover:bg-slate-50 transition-all cursor-pointer"
                  >
                    <span>Accept All</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-burgundy px-4 py-2.5 text-xs font-semibold text-white shadow-soft hover:bg-burgundy-dark hover:shadow-card hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  >
                    <Check className="h-3.5 w-3.5" />
                    <span>Accept All Cookies</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleAcceptEssential}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-navy transition-all cursor-pointer"
                  >
                    <span>Essential Only</span>
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </aside>
      )}
    </AnimatePresence>
  );
}
