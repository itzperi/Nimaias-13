import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider,QueryClient} from "@tanstack/react-query";
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollTop";
import Index from "./pages/Index";
import CreativeSolutions from "./pages/CreativeSolutions";
import MarketingAgency from "./pages/MarketingAgency";
import ITServices from "./pages/ITServices";
import StrategicMarketing from "./pages/services/StrategicMarketing";
import B2BMarketing from "./pages/services/B2BMarketing";
import InnovativeMarketing from "./pages/services/InnovativeMarketing";
import CustomizedCampaigns from "./pages/services/b2b-services/CustomizedCampaigns";
import LeadNurturing from "./pages/services/b2b-services/LeadNurturing";
import GreaterCredibility from "./pages/services/b2b-services/GreaterCredibility";
import AccountBasedMarketing from "./pages/services/b2b-services/AccountBasedMarketing";
import NeuroConsultation from "./pages/services/NeuroMarketingAgency.tsx";
import NM2 from "./pages/services/NM2.tsx";
import DM1 from "./pages/services/DM1.tsx";
import DM2 from "./pages/services/DM2.tsx";
import DM3 from "./pages/services/DM3.tsx";
import DM4 from "./pages/services/DM4.tsx";
import DM5 from "./pages/services/DM5.tsx";
import DM6 from "./pages/services/DM6.tsx";
import DM7 from "./pages/services/DM7.tsx";
import DM8 from "./pages/services/DM8.tsx";
import DM9 from "./pages/services/DM9.tsx";
import DM10 from "./pages/services/DM10.tsx";
import DM11 from "./pages/services/DM11.tsx";
import DM12 from "./pages/services/DM12.tsx";
import DM13 from "./pages/services/DM13.tsx";
import DM14 from "./pages/services/DM14.tsx";
import NM3 from "./pages/services/NM3.tsx";
import NM4 from "./pages/services/NM4.tsx";
import NM5 from "./pages/services/NM5.tsx";
import NM6 from "./pages/services/NM6.tsx";
import NM7 from "./pages/services/NM7.tsx";
import NM8 from "./pages/services/NM8.tsx";
import SM2 from "./pages/services/SM2.tsx";
import SM3 from "./pages/services/SM3.tsx";
import IM1 from "./pages/services/IM1.tsx";
import IM2 from "./pages/services/IM2.tsx";
import IM3 from "./pages/services/IM3.tsx";
import IM4 from "./pages/services/IM4.tsx";
import IM5 from "./pages/services/IM5.tsx";
import TM1 from "./pages/services/TM1.tsx";
import TM2 from "./pages/services/TM2.tsx";
import TM3 from "./pages/services/TM3.tsx";
import PD1 from "./pages/services/PD1.tsx";
import PD2 from "./pages/services/PD2.tsx";
import LS1 from "./pages/services/LS1.tsx";
import LS2 from "./pages/services/LS2.tsx";
import LS3 from "./pages/services/LS3.tsx";
import LS4 from "./pages/services/LS4.tsx";
import Peri from "./pages/services/Peri.tsx";
import C1 from "./pages/services/C1.tsx";
import C2 from "./pages/services/C2.tsx";
import C3 from "./pages/services/C3.tsx";
import C4 from "./pages/services/C4.tsx";
import PR1 from "./pages/services/PR1.tsx";
import PR2 from "./pages/services/PR2.tsx";
import PR3 from "./pages/services/PR3.tsx";
import PR4 from "./pages/services/PR4.tsx";
import PR5 from "./pages/services/PR5.tsx";
import A1 from "./pages/services/A1.tsx";
import A2 from "./pages/services/A2.tsx";
import A3 from "./pages/services/A3.tsx";
import A4 from "./pages/services/A4.tsx";
import A5 from "./pages/services/A5.tsx";
import A6 from "./pages/services/A6.tsx";
import A7 from "./pages/services/A7.tsx";
import Peri1 from "./pages/services/Peri1.tsx";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/" element={<Index />} />
          <Route path="/creative-solutions" element={<CreativeSolutions />} />
          <Route path="/marketing-agency" element={<MarketingAgency />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/strategic-marketing/service" element={<StrategicMarketing />} />
          <Route path="/services/b2b-marketing" element={<B2BMarketing />} />
          <Route path="/services/innovative-marketing" element={<InnovativeMarketing />} />
          <Route path="/services/b2b-marketing/customized-campaigns" element={<CustomizedCampaigns />} />
          <Route path="/services/b2b-marketing/lead-nurturing" element={<LeadNurturing />} />
          <Route path="/services/b2b-marketing/greater-credibility" element={<GreaterCredibility />} />
          <Route path="/services/b2b-marketing/account-based-marketing" element={<AccountBasedMarketing />} />
          <Route path="/Neuro1" element={<NeuroConsultation/>} />
          <Route path="/Neuro2" element={<NM2/>} />
          <Route path="/Neuro3" element={<NM3/>} />
          <Route path="/Neuro4" element={<NM4/>} />
          <Route path="/Neuro5" element={<NM5/>} />
          <Route path="/Neuro6" element={<NM6/>} />
          <Route path="/Neuro7" element={<NM7/>} />
          <Route path="/Neuro8" element={<NM8/>} />
          <Route path="/DM1" element={<DM1/>} />
          <Route path="/DM2" element={<DM2/>} />
          <Route path="/DM3" element={<DM3/>} />
          <Route path="/DM4" element={<DM4/>} />
          <Route path="/DM5" element={<DM5/>} />
          <Route path="/DM6" element={<DM6/>} />
          <Route path="/DM7" element={<DM7/>} />
          <Route path="/DM8" element={<DM8/>} />
          <Route path="/DM9" element={<DM9/>} />
          <Route path="/DM10" element={<DM10/>} />
          <Route path="/DM11" element={<DM11/>} />
          <Route path="/DM12" element={<DM12/>} />
          <Route path="/DM13" element={<DM13/>} />
          <Route path="/DM14" element={<DM14/>} />
          <Route path="/SM2" element={<SM2/>} />
          <Route path="/SM3" element={<SM3/>} />
          <Route path="/IM1" element={<IM1/>} />
          <Route path="/IM2" element={<IM2/>} />
          <Route path="/IM3" element={<IM3/>} />
          <Route path="/IM4" element={<IM4/>} />
          <Route path="/IM5" element={<IM5/>} />
          <Route path="/TM1" element={<TM1/>} />
          <Route path="/TM2" element={<TM2/>} />
          <Route path="/TM3" element={<TM3/>} />
          <Route path="/PD1" element={<PD1/>} />
          <Route path="/PD2" element={<PD2/>} />
          <Route path="/LS1" element={<LS1/>} />
          <Route path="/LS2" element={<LS2/>} />
          <Route path="/LS3" element={<LS3/>} />
          <Route path="/LS4" element={<LS4/>} />
          <Route path="/Peri" element={<Peri/>} />
          <Route path="/C1" element={<C1/>} />
          <Route path="/C2" element={<C2/>} />
          <Route path="/C3" element={<C3/>} />
          <Route path="/C4" element={<C4/>} />
          <Route path="/PR1" element={<PR1/>} />
          <Route path="/PR2" element={<PR2/>} />
          <Route path="/PR3" element={<PR3/>} />
          <Route path="/PR4" element={<PR4/>} />
          <Route path="/PR5" element={<PR5/>} />
          <Route path="/A1" element={<A1/>} />
          <Route path="/A2" element={<A2/>} />
          <Route path="/A3" element={<A3/>} />
          <Route path="/A4" element={<A4/>} />
          <Route path="/A5" element={<A5/>} />
          <Route path="/A6" element={<A6/>} />
          <Route path="/A7" element={<A7/>} />
          <Route path="/Peri1" element={<Peri1/>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
