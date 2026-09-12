import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import DownloadsLibrary from "@/components/DownloadsLibrary";

export const metadata: Metadata = {
  title: "Digital Document Library & Resources | Mecca Healthcare Pvt. Ltd.",
  description:
    "Explore our complete digital medical library. Download official 2026 medical device catalogues, clinical monographs, ISO 13485 & WHO-GMP certificates, and CDSCO regulatory records from Mecca Healthcare Pvt. Ltd.",
};

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <UtilityBar />
      <Header />
      <DownloadsLibrary />
      <Footer />
    </main>
  );
}
