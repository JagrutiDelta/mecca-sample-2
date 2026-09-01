import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/context/QuoteContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mecca Healthcare Pvt. Ltd. | Global Medical Device Manufacturing & OEM Solutions",
  description:
    "Trusted medical device manufacturer since 1977. ISO 13485 & WHO GMP certified. Infusion systems, catheters, airway devices, and OEM/private-label manufacturing exported to 50+ countries.",
  keywords: [
    "medical device manufacturer",
    "OEM medical devices",
    "infusion sets manufacturer India",
    "ISO 13485 medical devices",
    "private label medical devices",
  ],
  openGraph: {
    title: "Mecca Healthcare Pvt. Ltd.",
    description: "Global Medical Device Manufacturing & OEM Solutions since 1977.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased" suppressHydrationWarning>
        <QuoteProvider>{children}</QuoteProvider>
      </body>
    </html>
  );
}

