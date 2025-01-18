import { motion } from "framer-motion";

const B2BMarketingHero = () => {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url('/lovable-uploads/8d2a85d5-41d1-4aa2-abdf-202a4d88e1c1.png')`
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 py-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Paid Media Campaigns 
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Did you know that businesses can boost ROI by up to 300% with properly executed paid media 
campaigns? At Nimais, we tackle challenges like poor targeting and low ROI through strategic 
PPC, social media ads, and display campaigns. Our customized strategies for every business 
size ensure your campaigns are tailored to your specific needs.
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With expert campaign 
optimization, we help you achieve higher conversion rates and enhanced brand visibility. Ready 
to grow? Let Nimais amplify your marketing efforts—contact us today for a customized plan that 
guarantees results
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Book a Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};
export default B2BMarketingHero;