"use client";

import { useQuoteModal } from "@/context/QuoteContext";

export default function FinalCTA() {
  const { openQuoteModal } = useQuoteModal();

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
                LET'S CONNECT
              </div>

              <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Let’s Build Better
                <br />
                Healthcare Solutions Together.
              </h2>

              <p className="mt-5 max-w-2xl leading-relaxed text-white/75">
                Whether you’re looking for reliable medical devices, OEM manufacturing, or a long-term healthcare supply partner, our team is ready to understand your requirements and help you move forward.
              </p>
            </div>

            {/* Buttons */}
            <div className="relative z-10 flex flex-col gap-3 lg:min-w-[210px]">
              <a
                href="/#oem"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#8B1E2D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                Talk to Our Team →
              </a>

              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 cursor-pointer"
              >
                Request a Quote →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}