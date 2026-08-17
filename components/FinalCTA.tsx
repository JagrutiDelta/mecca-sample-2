"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Handshake, X } from "lucide-react";
import { useState } from "react";

const PRODUCT_CATEGORIES = [
  "Nephrology Products",
  "Hemodialysis Catheters",
  "Central Venous Catheters",
  "Dial Flow Regulators",
  "OEM / Contract Manufacturing",
  "Other",
];

export default function FinalCTA() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="section-py bg-bg">
      {/* 10 — Final CTA */}

      <div className="container-px">
        <div className="relative overflow-hidden rounded-[32px] bg-burgundy-gradient px-8 py-14 text-white md:px-14 lg:px-16">

          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

          {/* Subtle grid */}
          <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.035]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">

            {/* Content */}
            <div className="max-w-3xl">

              <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                Start Your Project
              </div>

              <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Ready to partner with a trusted OEM Manufacturing Leader?
              </h2>

              <p className="mt-5 max-w-2xl leading-relaxed text-white/75">
                Submit your requirements today.Our team responds within 24 hours with a detailed proposal and manufacturing timeline.
              </p>

            </div>

            {/* Buttons */}
            <div className="relative z-10 flex flex-col gap-3 lg:min-w-[210px]">

              <a
                href="/#oem"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#8B1E2D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Explore OEM Services →
              </a>

              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                Request a Quote →
              </button>

            </div>
          </div>
        </div>
      </div>
{/* Quote Request Modal */}
<AnimatePresence>
  {isQuoteModalOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsQuoteModalOpen(false)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 backdrop-blur-sm px-4 py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[24px] bg-white shadow-[0_25px_70px_rgba(13,34,64,0.25)]"
      >
        <div className="h-2 bg-burgundy-gradient" />

        <button
          type="button"
          onClick={() => setIsQuoteModalOpen(false)}
          aria-label="Close"
          className="absolute right-5 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-bg text-gray hover:bg-burgundy/10 hover:text-burgundy transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-7 pb-8 pt-7 sm:px-9 sm:pb-10">
          {isSubmitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-burgundy/10">
                <Handshake className="h-6 w-6 text-burgundy" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy">
                Thank You
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray max-w-xs mx-auto">
                Your request has been received. Our team will get back to you within 24–48 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsQuoteModalOpen(false);
                  setIsSubmitted(false);
                }}
                className="mt-7 inline-flex items-center justify-center rounded-full bg-burgundy-gradient px-6 py-2.5 text-sm font-semibold text-white shadow-card hover:shadow-soft transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-1 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-4 py-1.5 text-xs font-semibold text-[#8B1E2D]">
                OEM &amp; Product Enquiry
              </div>

              <h3 className="mt-3 font-heading text-2xl font-bold text-navy sm:text-[28px]">
                Request a Quote
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray">
                Share your requirement and our team will get back to you with pricing and lead times.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitted(true);
                }}
                className="mt-6 space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy">
                      Company Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Company / Organization"
                      className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy">
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91"
                      className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-navy">
                    Product / Category
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-navy">
                    Estimated Quantity (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 10,000 units / month"
                    className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-navy">
                    Requirement Details
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about specifications, certifications needed, or OEM requirements"
                    className="w-full resize-none rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full inline-flex items-center justify-center rounded-xl bg-burgundy-gradient px-6 py-3 text-sm font-semibold text-white shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
                >
                  Submit Request →
                </button>

                <p className="text-center text-[11px] text-gray">
                  We typically respond within 24–48 business hours.
                </p>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}

