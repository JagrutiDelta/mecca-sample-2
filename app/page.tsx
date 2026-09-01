import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import ProductCategories from "@/components/ProductCategories";
import WhyChoose from "@/components/WhyChoose";
import Manufacturing from "@/components/Manufacturing";
import OEMServices from "@/components/OEMServices";
import Certifications from "@/components/Certifications";
import GlobalPresence from "@/components/GlobalPresence";
import Testimonials from "@/components/Testimonials";
import News from "@/components/News";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Flagship from "@/components/Flagshipproducts";


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <ProductCategories />
      <Flagship />
      <WhyChoose />
      <Manufacturing />
      <OEMServices />
      <Certifications />
      <GlobalPresence />
      <Testimonials />
      <News />
      <FinalCTA />
      <Footer />
    </main>
  );
}
