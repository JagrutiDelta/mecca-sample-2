import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Product Portfolio 2026 | Mecca Healthcare Pvt. Ltd.",
  description:
    "Explore and download Mecca Healthcare's official 2026 Product List PDF across 54+ medical devices in Infusion, Anesthesia, Cardiology, Urology, Dialysis, Gastroenterology, and Surgery.",
};

export default function PortfolioPage() {
  return <Portfolio />;
}

