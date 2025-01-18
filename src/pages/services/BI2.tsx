import Header from "@/components/Header";
import NeuroConsultationHero from "@/components/services/BI2/Hero";
import NeuroConsulatationcontent from "@/components/services/BI2/Content";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import NeuroConsultationHer from "@/components/services/BI2/Peri";
import NeuroConsulatationconten from "@/components/services/BI2/Peri1";


const Agency = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <NeuroConsultationHero />
      <NeuroConsultationHer />
      <NeuroConsulatationconten />
      <NeuroConsulatationcontent />
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default Agency;