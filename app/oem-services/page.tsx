import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import OEMHero from "@/components/OEMHero";
import OEMDetailedServices from "@/components/OEMDetailedServices";
import OEMModels from "@/components/OEMModels";
import OEMProcess from "@/components/OEMProcess";
import OEMCapabilities from "@/components/OEMCapabilities";
import OEMContactForm from "@/components/OEMContactForm";

export const metadata = {
  title: "OEM Services & Contract Manufacturing | Meca Care Healthcare",
  description:
    "Partner with Meca Care for custom medical device OEM manufacturing, private label production, loan licensing, cleanroom assembly, and global export.",
};

export default function OEMServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-bg font-body text-navy selection:bg-burgundy selection:text-white">
      <UtilityBar />
      <Header />
      <OEMHero />
      <OEMDetailedServices />
      <OEMModels />
      <OEMProcess />
      <OEMCapabilities />
      <OEMContactForm />
      <Footer />
    </main>
  );
}
