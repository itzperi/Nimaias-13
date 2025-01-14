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
          Digital Advertising
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Boost Your Brand’s Online Presence with Nimais Nimais runs targeted digital advertising 
campaigns across various platforms such as Google Ads, Facebook, and YouTube. Our 
campaigns increase conversion rates by up to 60% while reducing ad spend by 30%.
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With 
expert targeting, A/B testing, and real-time data, we ensure your ads reach the right audience. 
24/7 customer support guarantees that we monitor and optimize your campaigns continuously 
to maximize your ROI. Get started with Nimais to boost your online presence and see your 
brand grow with every click. 
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