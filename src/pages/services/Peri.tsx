import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import NeuroConsultationHero from "@/components/services/Peri/Hero";
import NeuroConsultationHer from "@/components/services/Peri/Peri";
import NeuroConsulatationcontent from "@/components/services/Peri/Content";

const Agency = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <NeuroConsultationHero />
      <NeuroConsulatationcontent />
      <NeuroConsultationHer/>
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default Agency;