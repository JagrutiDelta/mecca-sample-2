import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Mecca Healthcare Pvt. Ltd.",
  description:
    "Terms & Conditions governing the use of the Mecca Healthcare Pvt. Ltd. website.",
};

const LAST_UPDATED = "[LAST UPDATED DATE]";

const TOC = [
  { id: "acceptance-of-terms", label: "1. Acceptance of Terms" },
  { id: "website-use", label: "2. Website Use" },
  { id: "business-product-information", label: "3. Business & Product Information" },
  { id: "oem-enquiry-requests", label: "4. OEM and Enquiry Requests" },
  { id: "quotations-commercial", label: "5. Quotations and Commercial Discussions" },
  { id: "intellectual-property", label: "6. Intellectual Property" },
  { id: "user-submitted-information", label: "7. User-Submitted Information" },
  { id: "accuracy-of-information", label: "8. Accuracy of Information" },
  { id: "third-party-links", label: "9. Third-Party Links" },
  { id: "website-availability", label: "10. Website Availability" },
  { id: "disclaimer", label: "11. Disclaimer" },
  { id: "limitation-of-liability", label: "12. Limitation of Liability" },
  { id: "indemnification", label: "13. Indemnification" },
  { id: "privacy", label: "14. Privacy" },
  { id: "changes-to-terms", label: "15. Changes to These Terms" },
  { id: "governing-law", label: "16. Governing Law" },
  { id: "contact-us", label: "17. Contact Us" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-slate-200 py-10 last:border-b-0">
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-[26px]">{title}</h2>
      <div className="mt-4 space-y-4 text-[16px] leading-[1.75] text-slate-600">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Breadcrumb */}
        <div className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto flex max-w-[1200px] items-center gap-2 px-6 py-3 text-sm text-slate-500">
            <Link href="/" className="transition-colors hover:text-teal-700">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700">Terms & Conditions</span>
          </div>
        </div>

        {/* Hero */}
        <div className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-[1200px] px-6 py-14 sm:py-16">
            <p className="text-sm font-medium tracking-wide text-teal-700">Legal</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Terms & Conditions
            </h1>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.75] text-slate-600 sm:text-base">
              Please read these Terms & Conditions carefully before using the Mecca Healthcare
              website and its services.
            </p>
            <p className="mt-6 text-sm text-slate-500">
              Last Updated: <span className="font-medium text-slate-700">{LAST_UPDATED}</span>
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-[1200px] px-6 py-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
            {/* Table of Contents */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">On this page</p>
                <nav className="mt-4">
                  <ul className="space-y-1 text-sm">
                    {TOC.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="block rounded-md px-2 py-1.5 text-slate-600 transition-colors hover:bg-white hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Sections */}
            <div>
              <Section id="acceptance-of-terms" title="1. Acceptance of Terms">
                <p>
                  By accessing or using the Mecca Healthcare website, you agree to be bound by
                  these Terms & Conditions. If you do not agree with these terms, please
                  discontinue use of the website.
                </p>
              </Section>

              <Section id="website-use" title="2. Website Use">
                <p>This website may be used only for lawful purposes. Users must not:</p>
                <List
                  items={[
                    "Misuse the website",
                    "Attempt unauthorized access to any part of the website or its systems",
                    "Interfere with website functionality",
                    "Introduce viruses, malware or other malicious code",
                    "Copy or reproduce website content without permission",
                    "Use website information for unlawful purposes",
                  ]}
                />
              </Section>

              <Section id="business-product-information" title="3. Business & Product Information">
                <p>
                  This website provides general information about medical devices, product
                  categories, manufacturing capabilities, OEM services, certifications,
                  facilities, and company information.
                </p>
                <p>
                  Product information, specifications, images, certifications, capacities and
                  other content may be updated from time to time and does not constitute a
                  legally binding product specification unless explicitly confirmed by Mecca
                  Healthcare in writing.
                </p>
                <p>
                  For final product specifications, regulatory documentation, commercial
                  specifications or technical requirements, please contact Mecca Healthcare
                  directly.
                </p>
              </Section>

              <Section id="oem-enquiry-requests" title="4. OEM and Enquiry Requests">
                <p>
                  This website allows users to submit OEM, contract manufacturing, private-label
                  and other business enquiries. Submitting an enquiry does not automatically
                  create:
                </p>
                <List
                  items={[
                    "A contract",
                    "A purchase order",
                    "A manufacturing agreement",
                    "A supply agreement",
                    "A commercial commitment",
                  ]}
                />
                <p>
                  Mecca Healthcare may review enquiries and contact the requester for additional
                  information. Any manufacturing or commercial relationship will be governed by
                  separate written agreements where applicable.
                </p>
              </Section>

              <Section id="quotations-commercial" title="5. Quotations and Commercial Discussions">
                <p>Website enquiries are preliminary in nature. In relation to any indicative information provided:</p>
                <List
                  items={[
                    "Indicative information is subject to confirmation",
                    "Pricing, minimum order quantities, lead times, specifications, regulatory requirements, delivery terms and other commercial conditions may vary",
                    "A quotation or proposal does not automatically constitute acceptance of an order unless explicitly stated",
                    "Final commercial terms should be documented separately",
                  ]}
                />
              </Section>

              <Section id="intellectual-property" title="6. Intellectual Property">
                <p>Website content may include text, logos, product images, graphics, videos, icons, documents, designs, branding and other digital materials.</p>
                <p>
                  These materials may be owned by or licensed to Mecca Healthcare. Users may not
                  reproduce, modify, distribute, publish or commercially exploit website content
                  without appropriate authorization.
                </p>
              </Section>

              <Section id="user-submitted-information" title="7. User-Submitted Information">
                <p>
                  This section covers information submitted through contact forms,
                  request-a-quote forms, OEM enquiry forms, career applications, newsletter
                  subscription, and other website forms.
                </p>
                <p>
                  Users are responsible for ensuring that information they submit is accurate and
                  that they have the right to provide it. For details on how submitted
                  information is handled, please refer to our{" "}
                  <Link href="/privacy-policy" className="font-medium text-teal-700 underline underline-offset-2 hover:text-teal-800">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </Section>

              <Section id="accuracy-of-information" title="8. Accuracy of Information">
                <p>
                  Reasonable efforts are made to keep website information accurate and current.
                  However, Mecca Healthcare does not guarantee that every piece of information
                  will always be complete, accurate, current or error-free. The company may
                  update, correct or remove website content without prior notice.
                </p>
              </Section>

              <Section id="third-party-links" title="9. Third-Party Links">
                <p>
                  This website may contain links to third-party websites or resources. Mecca
                  Healthcare does not control those external websites and is not responsible for
                  their content, availability, security, privacy practices or terms. Users should
                  review the terms and privacy policies of any third-party website they visit.
                </p>
              </Section>

              <Section id="website-availability" title="10. Website Availability">
                <p>
                  Reasonable efforts may be made to keep the website available; however,
                  uninterrupted or error-free availability cannot be guaranteed. The website may
                  occasionally be unavailable because of:
                </p>
                <List
                  items={[
                    "Maintenance",
                    "Updates",
                    "Technical issues",
                    "Security events",
                    "Hosting / network problems",
                    "Circumstances outside reasonable control",
                  ]}
                />
              </Section>

              <Section id="disclaimer" title="11. Disclaimer">
                <p>
                  Website content is provided for general informational purposes only. It should
                  not be interpreted as medical advice, professional medical guidance, a
                  substitute for regulatory documentation, a final technical specification, or a
                  guarantee of product suitability for a particular application.
                </p>
                <p>
                  For product-specific, regulatory, technical or commercial requirements, please
                  contact Mecca Healthcare directly.
                </p>
              </Section>

              <Section id="limitation-of-liability" title="12. Limitation of Liability">
                <p>
                  To the extent permitted by applicable law, Mecca Healthcare will not be
                  responsible for indirect or consequential losses arising from use of the
                  website or reliance on general website information. This provision is subject
                  to applicable law.
                </p>
              </Section>

              <Section id="indemnification" title="13. Indemnification">
                <p>
                  To the extent permitted by applicable law, users may be responsible for losses
                  or claims arising from their unlawful use of the website, violation of these
                  Terms, or infringement of third-party rights.
                </p>
              </Section>

              <Section id="privacy" title="14. Privacy">
                <p>Use of this website is also subject to our Privacy Policy.</p>
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-1.5 rounded-md border border-teal-600 px-4 py-2 text-sm font-medium text-teal-700 transition-colors hover:bg-teal-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Read Privacy Policy →
                </Link>
              </Section>

              <Section id="changes-to-terms" title="15. Changes to These Terms">
                <p>
                  Mecca Healthcare may update these Terms & Conditions from time to time. The
                  updated version will be published on this page.
                </p>
                <p className="text-sm text-slate-500">
                  Last Updated: <span className="font-medium text-slate-700">{LAST_UPDATED}</span>
                </p>
              </Section>

              {/* CLIENT / LEGAL TEAM MUST CONFIRM GOVERNING LAW AND JURISDICTION */}
              <Section id="governing-law" title="16. Governing Law">
                <p>
                  [APPLICABLE GOVERNING LAW / JURISDICTION TO BE CONFIRMED BY CLIENT]
                </p>
              </Section>

              <Section id="contact-us" title="17. Contact Us">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                  <p className="text-sm font-medium tracking-wide text-teal-700">
                    Questions about these Terms & Conditions?
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    Mecca Healthcare Pvt. Ltd.
                  </p>
                  <dl className="mt-4 space-y-2 text-[16px] text-slate-600">
                    <div className="flex gap-2">
                      <dt className="w-20 shrink-0 font-medium text-slate-900">Email</dt>
                      <dd>[OFFICIAL EMAIL]</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="w-20 shrink-0 font-medium text-slate-900">Phone</dt>
                      <dd>[OFFICIAL PHONE]</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="w-20 shrink-0 font-medium text-slate-900">Address</dt>
                      <dd>[OFFICIAL REGISTERED ADDRESS]</dd>
                    </div>
                  </dl>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
