import Header from "@/components/Header";
import NeuroConsultationHero from "@/components/services/BI1/Hero";
import NeuroConsulatationcontent from "@/components/services/BI1/Content";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";




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