import Header from "@/components/Header";
import NeuroConsultationHero from "@/components/services/BI4/Hero";
import NeuroConsulatationcontent from "@/components/services/BI4/Content";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import NeuroConsultationHer from "@/components/services/BI4/Peri";
import NeuroConsulatationconten from "@/components/services/BI4/Peri1";


const Agency = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <NeuroConsultationHero />
      <NeuroConsulatationconten/>
      <NeuroConsultationHer/>
      <NeuroConsulatationcontent />
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default Agency;