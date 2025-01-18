import Header from "@/components/Header";
import NeuroConsultationHero from "@/components/services/BI3/Hero";
import NeuroConsulatationcontent from "@/components/services/BI3/Content";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import NeuroConsulatationconten from "@/components/services/BI3/Peri1";
import Hello from "@/components/services/BI3/y";


const Agency = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <NeuroConsultationHero />
      <Hello />
      <NeuroConsulatationconten />
      <NeuroConsulatationcontent />
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default Agency;