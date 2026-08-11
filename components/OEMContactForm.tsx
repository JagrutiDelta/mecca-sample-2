"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, FileText, CheckCircle2, ShieldCheck, Phone, Mail } from "lucide-react";

export default function OEMContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [model, setModel] = useState("turnkey");
  const [volume, setVolume] = useState("50k-250k");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="oem-contact" className="py-20 lg:py-28 bg-white border-t border-border">
      <div className="container-px">
        <div className="bg-[#F8FAFC] rounded-3xl border border-border p-8 lg:p-14 shadow-card">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT TEXT CONTENT */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8EDEF] text-burgundy text-xs font-semibold uppercase tracking-wider mb-3">
                <FileText className="w-3.5 h-3.5" />
                OEM Consultation
              </div>

              <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl leading-tight mb-4">
                Start Your OEM Project Discussion
              </h2>

              <p className="text-gray text-sm sm:text-base leading-relaxed mb-8">
                Speak directly with our senior medical device engineering team. We review your requirements and respond within 24 hours with technical feasibility feedback and pricing estimates.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-xs font-semibold text-navy">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Response in &lt; 24 Hours</span>
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold text-navy">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span>Strict NDA &amp; IP Protection Guaranteed</span>
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold text-navy">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span>CE Technical File &amp; ISO 13485 Support</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex flex-col gap-2 text-xs text-gray">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-burgundy" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-burgundy" />
                  <span>oem@mecacare.com</span>
                </div>
              </div>
            </div>

            {/* RIGHT FORM CONTAINER */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-sm">
              {submitted ? (
                <div className="text-center py-12 text-emerald-600 font-semibold text-sm flex flex-col items-center gap-3">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 animate-bounce" />
                  <span className="text-lg font-heading font-bold text-navy">OEM Project Inquiry Received!</span>
                  <p className="text-gray text-xs max-w-md">Our senior OEM technical lead will review your specifications and contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">Request OEM Partnership Proposal</h3>

                  <div className="grid sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-semibold text-navy mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-border text-navy placeholder:text-gray/50 focus:outline-none focus:border-burgundy"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-navy mb-1.5">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@healthcare.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-border text-navy placeholder:text-gray/50 focus:outline-none focus:border-burgundy"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-semibold text-navy mb-1.5">Company / Brand Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Global Pharma LLC"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-border text-navy placeholder:text-gray/50 focus:outline-none focus:border-burgundy"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-navy mb-1.5">Target Export Region / Country</label>
                      <input
                        type="text"
                        placeholder="e.g. Europe, LATAM, Middle East"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-border text-navy placeholder:text-gray/50 focus:outline-none focus:border-burgundy"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-semibold text-navy mb-1.5">OEM Engagement Model</label>
                      <select
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-border text-navy focus:outline-none focus:border-burgundy"
                      >
                        <option value="private-label">Private Label Manufacturing</option>
                        <option value="turnkey">Full Turnkey OEM Development</option>
                        <option value="loan-license">Loan License Manufacturing</option>
                        <option value="packaging">Contract Packaging &amp; Sterilization</option>
                        <option value="custom-specs">Custom Material &amp; Gauge Specs</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-navy mb-1.5">Estimated Annual Volume</label>
                      <select
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-border text-navy focus:outline-none focus:border-burgundy"
                      >
                        <option value="10k-50k">10,000 – 50,000 units</option>
                        <option value="50k-250k">50,000 – 250,000 units</option>
                        <option value="250k+">250,000+ units</option>
                        <option value="trial">Pilot Trial Order</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-navy text-xs mb-1.5">Product Specifications &amp; Project Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Describe target medical device type, preferred materials (DEHP-free PVC, PTFE), gauge sizes, or packaging specifications..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-border text-navy text-xs placeholder:text-gray/50 focus:outline-none focus:border-burgundy"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-burgundy text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-burgundy-dark transition-colors shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    Submit Request for OEM Proposal
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
