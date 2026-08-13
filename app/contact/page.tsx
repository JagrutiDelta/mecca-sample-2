"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock,
  FlaskConical,
  Handshake,
  Headset,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  Share2,
  ShieldCheck,
} from "lucide-react";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "./finalCTA";

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const ENQUIRY_CATEGORIES = [
  "General Inquiry",
  "Infusion / Perfusion Range",
  "Nephrology Products",
  "Hemodialysis Catheters",
  "Central Venous Catheters",
  "Dial Flow Regulators",
  "OEM / Contract Manufacturing",
  "Distributor / Export Partnership",
  "Other",
];

interface Unit {
  id: string;
  label: string;
  city: string;
  address: string;
  phone: string;
  phoneHref: string;
}

const UNITS: Unit[] = [
  {
    id: "unit-1",
    label: "Unit 1",
    city: "Kalol, Gandhinagar",
    address:
      "99-102, G.I.D.C., Kalol, Gandhinagar, Gujarat 382725, India",
    phone: "+91 2764 221020",
    phoneHref: "+912764221020",
  },
  {
    id: "unit-2",
    label: "Unit 2",
    city: "Chattral, Mehsana",
    address:
      "L-1202, GIDC, Chattral, Mehsana, Gujarat 382729, India",
    phone: "+91 7990 571693",
    phoneHref: "+917990571693",
  },
  {
    id: "unit-3",
    label: "Unit 3",
    city: "Boranada, Jodhpur",
    address:
      "F-252, Phase 3, RIICO, Boranada, Rajasthan 342012, India",
    phone: "+91 7665 761999",
    phoneHref: "+917665761999",
  },
];

/* -------------------------------------------------------------------------- */
/* Contact form                                                               */
/* -------------------------------------------------------------------------- */

interface ContactFormState {
  fullName: string;
  companyName: string;
  designation: string;
  email: string;
  contactNo: string;
  faxNo: string;
  address: string;
  city: string;
  pinCode: string;
  stateProvince: string;
  country: string;
  category: string;
  quantity: string;
  message: string;
}

const INITIAL_FORM_STATE: ContactFormState = {
  fullName: "",
  companyName: "",
  designation: "",
  email: "",
  contactNo: "",
  faxNo: "",
  address: "",
  city: "",
  pinCode: "",
  stateProvince: "",
  country: "India",
  category: "",
  quantity: "",
  message: "",
};

/* -------------------------------------------------------------------------- */
/* Styles                                                                     */
/* -------------------------------------------------------------------------- */

const inputClasses =
  "w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10";

const labelClasses =
  "mb-1.5 block text-xs font-semibold text-navy";

/* -------------------------------------------------------------------------- */
/* Contact information                                                        */
/* -------------------------------------------------------------------------- */

const CONTACT_INFO = {
  email: "contact@mhplindia.com",
  phone: "+91 2764 221020",
  whatsapp: "+91 7990 571693",
  hours: "Mon–Sat, 9:30 AM–6:30 PM IST",

  social: [
    {
      label: "MHPL on Twitter / X",
      href: "https://twitter.com/mhpl_india",
      icon: Share2,
    },
    {
      label: "MHPL on Facebook",
      href: "https://www.facebook.com/meccahealthcare/",
      icon: Link2,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Certifications                                                             */
/* -------------------------------------------------------------------------- */

type Certification = {
  code: string;
  label: string;
  icon: typeof ShieldCheck;
};

const CERTIFICATIONS: Certification[] = [
  {
    code: "ISO 9001:2015",
    label: "Quality Management",
    icon: ShieldCheck,
  },
  {
    code: "ISO 13485:2016",
    label: "Medical Devices",
    icon: BadgeCheck,
  },
  {
    code: "WHO GMP",
    label: "Compliant",
    icon: FlaskConical,
  },
  {
    code: "CE Marked",
    label: "Certified",
    icon: Award,
  },
];

/* -------------------------------------------------------------------------- */
/* Why partner                                                                */
/* -------------------------------------------------------------------------- */

const WHY_PARTNER_POINTS = [
  "WHO-GMP, ISO 9001:2015 & ISO 13485 Certified",
  "State-of-the-art manufacturing facilities",
  "Wide range of infusion, nephrology & critical care products",
  "Trusted by distributors in 50+ countries",
  "Dedicated support & timely response",
];

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section
        id="contact-hero"
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-bg" />

        <div className="absolute inset-0 bg-medical-grid bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-medblue/10 blur-3xl" />

        <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-burgundy/10 blur-3xl" />

        <div className="container-px relative grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md"
            >
              <MessageCircle className="h-4 w-4" />
              We Reply Within 24–48 Hours
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl"
            >
              Let's Start a{" "}
              <span className="relative inline-block text-burgundy">
                Conversation

                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="10"
                  viewBox="0 0 300 10"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 6 Q 75 -2 150 6 T 298 6"
                    stroke="#C8D8F5"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.8,
                    }}
                  />
                </svg>
              </span>{" "}
              With Our Team
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="mt-6 max-w-xl text-base leading-relaxed text-gray md:text-lg"
            >
              Whether you're exploring an OEM partnership, sourcing infusion
              and nephrology disposables, or need support as an existing
              distributor, our team across three manufacturing plants is ready
              to help.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-2 rounded-full bg-burgundy-gradient px-8 py-4 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Send a Message

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="tel:+912764221020"
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/70 px-8 py-4 text-sm font-semibold text-navy backdrop-blur transition-colors hover:bg-white"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="absolute inset-0 overflow-hidden rounded-xl2 shadow-soft"
            >
              <img
                src="https://images.unsplash.com/photo-1668600372311-66950b110d64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="MHPL team discussing a partner requirement"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </motion.div>

            {/* 24–48h */}
            <FloatingStat
              value="24–48h"
              label="Avg. Response Time"
              className="-left-4 top-8 md:-left-10"
              animation={[0, -14, 0]}
              duration={6}
            />

            {/* Plants */}
            <FloatingStat
              value="3"
              label="Manufacturing Plants"
              className="-right-2 top-1/3 md:-right-8"
              animation={[0, 14, 0]}
              duration={7}
            />

            {/* Countries */}
            <FloatingStat
              value="50+"
              label="Export Countries"
              className="bottom-10 left-2 md:-left-6"
              animation={[0, -10, 0]}
              duration={6.5}
            />

            {/* Certification */}
            <FloatingStat
              value="ISO 13485"
              label="Certified Facility"
              className="bottom-0 right-4 md:right-0"
              animation={[0, 12, 0]}
              duration={7.5}
            />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CONTACT FORM                                                       */}
      {/* ================================================================== */}

      <section
        id="contact-form"
        className="section-py scroll-mt-24 bg-bg"
      >
        <div className="container-px">
          <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
            <ContactFormCard />
            <ContactSidebarCard />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MANUFACTURING UNITS                                                */}
      {/* ================================================================== */}

      <ManufacturingUnitsSection />

      {/* ================================================================== */}
      {/* FINAL CTA                                                          */}
      {/* ================================================================== */}

      <FinalCTA />

      {/* ================================================================== */}
      {/* FOOTER                                                             */}
      {/* ================================================================== */}

      <Footer />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Floating statistic                                                        */
/* -------------------------------------------------------------------------- */

function FloatingStat({
  value,
  label,
  className,
  animation,
  duration,
}: {
  value: string;
  label: string;
  className: string;
  animation: number[];
  duration: number;
}) {
  return (
    <motion.div
      animate={{
        y: animation,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-2xl border border-white/60 bg-white/80 px-5 py-4 shadow-glass backdrop-blur-xl ${className}`}
    >
      <div className="font-heading text-2xl font-extrabold text-navy">
        {value}
      </div>

      <div className="text-xs text-gray">
        {label}
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact form                                                              */
/* -------------------------------------------------------------------------- */

function ContactFormCard() {
  const [formData, setFormData] =
    useState<ContactFormState>(INITIAL_FORM_STATE);

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // TODO:
    // Connect this to your API / email service.
    setIsSubmitted(true);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative overflow-hidden rounded-[32px] border border-border bg-white shadow-soft"
    >
      <div className="h-2 bg-burgundy-gradient" />

      <div className="px-7 py-9 sm:px-10 sm:py-10">

        {isSubmitted ? (
          <SuccessMessage
            onReset={() => {
              setFormData(INITIAL_FORM_STATE);
              setIsSubmitted(false);
            }}
          />
        ) : (
          <>
            <div className="mb-1 inline-flex items-center rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-4 py-1.5 text-xs font-semibold text-[#8B1E2D]">
              OEM & Product Enquiry
            </div>

            <h2 className="mt-3 font-heading text-2xl font-bold text-navy sm:text-[28px]">
              Send Us Your Requirement
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray">
              Share your details below and our team will respond with
              pricing, lead times, or the information you need.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >

              {/* Name + Company */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <FormInput
                  label="Full Name *"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />

                <FormInput
                  label="Company Name *"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company / Organization"
                  required
                />

              </div>

              {/* Designation + Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <FormInput
                  label="Designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Your role"
                />

                <FormInput
                  label="Email *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                />

              </div>

              {/* Phone + Fax */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <FormInput
                  label="Contact No. *"
                  name="contactNo"
                  type="tel"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="+91"
                  required
                />

                <FormInput
                  label="Fax No. (optional)"
                  name="faxNo"
                  value={formData.faxNo}
                  onChange={handleChange}
                  placeholder="Optional"
                />

              </div>

              {/* Address */}
              <FormInput
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street address"
              />

              {/* City + State */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <FormInput
                  label="City *"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                />

                <FormInput
                  label="State / Province *"
                  name="stateProvince"
                  value={formData.stateProvince}
                  onChange={handleChange}
                  placeholder="State / Province"
                  required
                />

              </div>

              {/* Pin + Country */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <FormInput
                  label="Pin / Zip Code"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="Pin / Zip code"
                />

                <FormInput
                  label="Country *"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  required
                />

              </div>

              {/* Category */}
              <div>
                <label className={labelClasses}>
                  Product / Category *
                </label>

                <select
                  required
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Select a category
                  </option>

                  {ENQUIRY_CATEGORIES.map((category) => (
                    <option
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <FormInput
                label="Estimated Quantity (optional)"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 10,000 units / month"
              />

              {/* Message */}
              <div>
                <label className={labelClasses}>
                  Message / Requirement *
                </label>

                <textarea
                  required
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about specifications, certifications needed, or your requirement"
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-burgundy-gradient px-6 py-3 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
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
  );
}

/* -------------------------------------------------------------------------- */
/* Reusable input                                                            */
/* -------------------------------------------------------------------------- */

function FormInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className={labelClasses}>
        {label}
      </label>

      <input
        required={required}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Success message                                                           */
/* -------------------------------------------------------------------------- */

function SuccessMessage({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="py-10 text-center">

      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-burgundy/10">
        <Handshake className="h-6 w-6 text-burgundy" />
      </div>

      <h3 className="font-heading text-2xl font-bold text-navy">
        Thank You
      </h3>

      <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray">
        Your request has been received. Our team will get back to you
        within 24–48 hours.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-7 inline-flex items-center justify-center rounded-full bg-burgundy-gradient px-6 py-2.5 text-sm font-semibold text-white shadow-card transition-all hover:shadow-soft"
      >
        Send Another Message
      </button>

    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Sidebar                                                                   */
/* -------------------------------------------------------------------------- */

function ContactSidebarCard() {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 24,
        },
        whileInView: {
          opacity: 1,
          y: 0,
        },
        viewport: {
          once: true,
          amount: 0.2,
        },
      };

  return (
    <div className="flex w-full max-w flex-col gap-5 sm:gap-6">

      {/* Direct contact */}
      <motion.div
        {...animationProps}
        transition={{
          duration: 0.6,
        }}
        className="relative overflow-hidden rounded-[28px] bg-burgundy-gradient px-6 py-7 text-white sm:rounded-[32px] sm:px-8 sm:py-8"
      >

        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-20 -left-14 h-56 w-56 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:16px_16px] opacity-[0.06]" />

        <div className="relative z-10">

          <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
            Talk To Us Directly
          </div>

          <div className="flex flex-col gap-4">

            <ContactRow
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
              icon={Phone}
              label="Phone"
              value={CONTACT_INFO.phone}
            />

            <ContactRow
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(
                /[^\d]/g,
                ""
              )}`}
              icon={MessageCircle}
              label="Mobile / WhatsApp"
              value={CONTACT_INFO.whatsapp}
              external
            />

            <ContactRow
              href={`mailto:${CONTACT_INFO.email}`}
              icon={Mail}
              label="Email"
              value={CONTACT_INFO.email}
            />

          </div>

          <div className="mt-5 flex items-center gap-3 text-sm text-white/75">
            <IconBadge>
              <Clock className="h-4 w-4" />
            </IconBadge>

            <span>{CONTACT_INFO.hours}</span>
          </div>

          <div className="mt-6 flex items-center gap-3">

            {CONTACT_INFO.social.map(
              ({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            )}

          </div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        {...animationProps}
        transition={{
          duration: 0.6,
          delay: 0.1,
        }}
        className="rounded-xl2 border border-border bg-white px-6 py-6 shadow-card sm:px-7 sm:py-7"
      >

        <div className="mb-4 font-heading text-sm font-bold text-navy">
          Compliance & Certifications
        </div>

        <div className="grid grid-cols-2 gap-3">

          {CERTIFICATIONS.map(
            ({ code, label, icon: Icon }) => (
              <motion.div
                key={code}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -3 }
                }
                className="flex flex-col items-center gap-1.5 rounded-xl2 border border-medblue/15 bg-medblue/5 px-3 py-4 text-center transition-colors hover:bg-medblue/10"
              >
                <Icon
                  className="h-5 w-5 text-medblue"
                  strokeWidth={1.75}
                />

                <span className="text-xs font-bold leading-tight text-navy">
                  {code}
                </span>

                <span className="text-[11px] leading-tight text-navy/60">
                  {label}
                </span>
              </motion.div>
            )
          )}

        </div>
      </motion.div>

      {/* Why partner */}
      <motion.div
        {...animationProps}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="rounded-xl2 border border-border bg-white px-6 py-6 shadow-card sm:px-7 sm:py-7"
      >

        <div className="mb-4 font-heading text-sm font-bold text-navy">
          Why Partner With Us?
        </div>

        <ul className="flex flex-col gap-3">

          {WHY_PARTNER_POINTS.map(
            (point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm text-navy/80"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-medblue" />

                <span>{point}</span>
              </li>
            )
          )}

        </ul>
      </motion.div>

      {/* Immediate assistance */}
      <motion.div
        {...animationProps}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        className="flex items-center justify-between gap-4 rounded-xl2 border border-border bg-white px-5 py-5 shadow-card sm:px-6"
      >

        <div className="flex items-center gap-3">

          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burgundy-gradient text-white">

            {!shouldReduceMotion && (
              <span className="absolute inset-0 animate-ping rounded-full bg-burgundy opacity-30" />
            )}

            <Headset className="relative h-5 w-5" />
          </span>

          <div>
            <div className="font-heading text-sm font-bold text-navy">
              Need Immediate Assistance?
            </div>

            <p className="text-xs text-navy/60">
              Our team is ready to help you right away.
            </p>
          </div>

        </div>

        <motion.a
          href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
          whileHover={
            shouldReduceMotion
              ? undefined
              : { scale: 1.04 }
          }
          whileTap={
            shouldReduceMotion
              ? undefined
              : { scale: 0.97 }
          }
          className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-burgundy-gradient px-3.5 py-2.5 text-xs font-semibold text-white hover:shadow-lg"
        >
          <PhoneCall className="h-3.5 w-3.5" />
          Call Now
        </motion.a>

      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact row                                                               */
/* -------------------------------------------------------------------------- */

function ContactRow({
  href,
  icon: Icon,
  label,
  value,
  external = false,
}: {
  href: string;
  icon: typeof Phone;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={
        external
          ? "noopener noreferrer"
          : undefined
      }
      className="group flex items-center gap-3 outline-none"
    >

      <IconBadge>
        <Icon className="h-4 w-4" />
      </IconBadge>

      <span className="flex flex-col">

        <span className="text-[11px] font-medium uppercase tracking-wide text-white/60">
          {label}
        </span>

        <span className="text-sm font-semibold transition-colors group-hover:text-white/80">
          {value}
        </span>

      </span>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Icon badge                                                                */
/* -------------------------------------------------------------------------- */

function IconBadge({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Manufacturing units                                                       */
/* -------------------------------------------------------------------------- */

function ManufacturingUnitsSection() {
  const [activeUnit, setActiveUnit] =
    useState<Unit>(UNITS[0]);

  return (
    <section className="section-py bg-bg">
      <div className="container-px">

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-12 max-w-2xl"
        >

          <div className="eyebrow mb-4 inline-flex items-center rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D]">
            Our Facilities
          </div>

          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-4xl">
            Three Plants. One Standard of Quality.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray">
            Every unit operates under the same ISO 9001:2015 and ISO
            13485:2016 quality system, so wherever your order ships from,
            the standard doesn't change.
          </p>

        </motion.div>

        {/* Plant cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {UNITS.map(
            (unit, index) => (
              <motion.div
                key={unit.id}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                onClick={() =>
                  setActiveUnit(unit)
                }
                className={`cursor-pointer rounded-xl2 border bg-white p-6 text-left shadow-card transition-all hover:-translate-y-1 hover:shadow-soft ${
                  activeUnit.id === unit.id
                    ? "border-burgundy/40 ring-1 ring-burgundy/10"
                    : "border-border"
                }`}
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-burgundy/10">
                  <Building2 className="h-5 w-5 text-burgundy" />
                </div>

                <div className="mt-4 font-heading text-lg font-bold text-navy">
                  {unit.label} — {unit.city}
                </div>

                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {unit.address}
                </p>

                <a
                  href={`tel:${unit.phoneHref}`}
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-medblue transition-colors hover:text-navy"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {unit.phone}
                </a>

              </motion.div>
            )
          )}

        </div>

        {/* Map */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-8 overflow-hidden rounded-xl2 border border-border shadow-card"
        >

          <div className="flex flex-wrap items-center justify-between gap-3 bg-white px-6 py-4">

            <div className="flex items-center gap-2 text-sm font-semibold text-navy">
              <MapPin className="h-4 w-4 text-burgundy" />

              Viewing {activeUnit.label} —{" "}
              {activeUnit.city}
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                activeUnit.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-medblue transition-colors hover:text-navy"
            >
              Get Directions →
            </a>

          </div>

          <iframe
            key={activeUnit.id}
            title={`Map showing ${activeUnit.label}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              activeUnit.address
            )}&output=embed`}
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </motion.div>
      </div>
    </section>
  );
}