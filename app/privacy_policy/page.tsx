import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Mecca Healthcare Pvt. Ltd.",
  description: "Privacy Policy for Mecca Healthcare Pvt. Ltd.",
};

const LAST_UPDATED = "[LAST UPDATED DATE]";

const TOC = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-information", label: "How We Use Information" },
  { id: "cookies-tracking", label: "Cookies & Tracking Technologies" },
  { id: "website-forms", label: "Website Forms & Enquiries" },
  { id: "newsletter", label: "Newsletter & Communications" },
  { id: "data-sharing", label: "Data Sharing & Disclosure" },
  { id: "data-security", label: "Data Security" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "third-party-links", label: "Third-Party Links" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "policy-updates", label: "Policy Updates" },
  { id: "contact-us", label: "Contact Us" },
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
      <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-600">{children}</div>
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

export default function PrivacyPolicyPage() {
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
            <span className="text-slate-700">Privacy Policy</span>
          </div>
        </div>

        {/* Hero */}
        <div className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-[1200px] px-6 py-14 sm:py-16">
            <p className="text-sm font-medium tracking-wide text-teal-700">Legal</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base">
              Your privacy matters to us. This policy explains how Mecca Healthcare Pvt. Ltd.
              collects, uses, protects and manages information when you use our website and
              services.
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
                          className="block rounded-md px-2 py-1.5 text-slate-600 transition-colors hover:bg-white hover:text-teal-700"
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
              <Section id="information-we-collect" title="Information We Collect">
                <p>
                  Mecca Healthcare may collect information when visitors interact with the
                  website, including when someone:
                </p>
                <List
                  items={[
                    "Submits a contact form",
                    "Requests a quotation",
                    "Submits an OEM / manufacturing enquiry",
                    "Applies for a career opportunity",
                    "Subscribes to the newsletter",
                    "Contacts the company directly",
                  ]}
                />
                <p>The information collected through these interactions may include:</p>
                <List
                  items={[
                    "Name",
                    "Company name",
                    "Job title",
                    "Email address",
                    "Phone number",
                    "Country / location",
                    "Business requirements",
                    "Product or OEM enquiry details",
                    "Information voluntarily submitted through forms",
                  ]}
                />
              </Section>

              <Section id="how-we-use-information" title="How We Use Information">
                <p>Information collected through the website may be used to:</p>
                <List
                  items={[
                    "Respond to enquiries",
                    "Process quotation or OEM requests",
                    "Communicate regarding products and services",
                    "Handle career applications",
                    "Provide requested information",
                    "Improve website functionality and user experience",
                    "Maintain website security",
                    "Comply with applicable legal requirements",
                  ]}
                />
              </Section>

              <Section id="cookies-tracking" title="Cookies & Tracking Technologies">
                <p>
                  Cookies and similar technologies may be used on the Mecca Healthcare website to
                  support core functionality and, where enabled, to understand how the site is
                  used.
                </p>
                <div className="grid gap-4 sm:grid-cols-1">
                  <div className="rounded-lg border border-slate-200 p-4">
                    <p className="font-medium text-slate-900">Essential cookies</p>
                    <p className="mt-1">
                      Required for the website to function correctly, such as remembering
                      preferences and enabling core features.
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-200 p-4">
                    <p className="font-medium text-slate-900">Analytics cookies (if enabled)</p>
                    <p className="mt-1">
                      May be used to understand how visitors use the website in order to improve
                      content and performance.
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-200 p-4">
                    <p className="font-medium text-slate-900">Marketing cookies (if enabled)</p>
                    <p className="mt-1">
                      May be used to deliver relevant communications and measure their
                      effectiveness.
                    </p>
                  </div>
                </div>
                <p>
                  Where analytics or marketing cookies are used, visitors can typically manage or
                  disable cookie preferences through their browser settings or, where available,
                  a cookie preference tool on the website.
                </p>
              </Section>

              <Section id="website-forms" title="Website Forms & Enquiries">
                <p>
                  Information submitted through the Contact, Request a Quote, OEM enquiry,
                  Careers, and Newsletter subscription forms may be processed by authorized Mecca
                  Healthcare personnel for the relevant business purpose — such as responding to
                  an enquiry, preparing a quotation, or reviewing a career application.
                </p>
              </Section>

              <Section id="newsletter" title="Newsletter & Communications">
                <p>
                  The website includes a newsletter subscription field. Email addresses submitted
                  through this field may be used to send company updates, industry information,
                  and product or business communications, or other communications that have been
                  requested.
                </p>
                <p>
                  Subscribers may opt out or unsubscribe from these communications at any time,
                  typically using the unsubscribe link included in each email.
                </p>
              </Section>

              <Section id="data-sharing" title="Data Sharing & Disclosure">
                <p>Mecca Healthcare does not sell or rent personal information.</p>
                <p>Information may be shared only where reasonably necessary, with:</p>
                <List
                  items={[
                    "Authorized service providers",
                    "Technology / hosting providers",
                    "Professional advisors",
                    "Government or regulatory authorities, when legally required",
                    "Authorized personnel involved in responding to enquiries",
                  ]}
                />
              </Section>

              <Section id="data-security" title="Data Security">
                <p>
                  Reasonable technical and organizational measures are used to help protect
                  information from unauthorized access, alteration, disclosure, or destruction.
                  No method of transmission or storage is completely secure, and Mecca Healthcare
                  cannot guarantee absolute security.
                </p>
              </Section>

              <Section id="data-retention" title="Data Retention">
                <p>
                  Information is retained only for as long as reasonably necessary for the
                  purpose for which it was collected, taking into account business requirements,
                  legal obligations, and the need to resolve any disputes.
                </p>
              </Section>

              <Section id="your-rights" title="Your Rights">
                <p>
                  Depending on applicable law, individuals may have certain rights regarding
                  their personal information, including the right to:
                </p>
                <List
                  items={[
                    "Request access to personal information held",
                    "Request correction of inaccurate information",
                    "Request deletion of information, where applicable",
                    "Withdraw consent, where applicable",
                    "Object to certain processing, where applicable",
                  ]}
                />
                <p>Requests can be directed to the contact details provided below.</p>
              </Section>

              <Section id="third-party-links" title="Third-Party Links">
                <p>
                  The website may contain links to third-party websites. Mecca Healthcare is not
                  responsible for the content or privacy practices of external websites, and
                  encourages visitors to review the privacy policies of any third-party site they
                  visit.
                </p>
              </Section>

              <Section id="childrens-privacy" title="Children's Privacy">
                <p>
                  The Mecca Healthcare website is intended for business and professional
                  audiences and is not knowingly directed toward children.
                </p>
              </Section>

              <Section id="policy-updates" title="Policy Updates">
                <p>
                  This Privacy Policy may be updated periodically to reflect changes in practices
                  or for other operational, legal, or regulatory reasons. The "Last Updated" date
                  at the top of this page will be revised whenever material changes are made.
                </p>
              </Section>

              <Section id="contact-us" title="Contact Us">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                  <p className="text-sm font-medium tracking-wide text-teal-700">
                    Privacy-related questions?
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    Mecca Healthcare Pvt. Ltd.
                  </p>
                  <dl className="mt-4 space-y-2 text-[15px] text-slate-600">
                    <div className="flex gap-2">
                      <dt className="w-20 shrink-0 font-medium text-slate-900">Email</dt>
                      <dd>[OFFICIAL PRIVACY / CONTACT EMAIL]</dd>
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