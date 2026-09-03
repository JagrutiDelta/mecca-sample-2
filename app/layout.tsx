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
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      { url: "/favicon/apple-touch-icon.png" },
      { url: "/favicon/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon/manifest.webmanifest",
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

