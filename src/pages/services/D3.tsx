import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import NeuroConsultationHero from "@/components/services/D3/Hero";
import NeuroConsulatationcontent from "@/components/services/D3/Content";

const Agency = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <NeuroConsultationHero />
      <NeuroConsulatationcontent />
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default Agency;