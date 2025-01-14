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
          Augmented Reality Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Enhance your brand experience with Nimais's augmented Reality (AR) Marketing. Our AR solutions merge the physical and digital worlds, allowing customers to engage with your products in an interactive environment. This personal connection boosts trust and increases conversions by making your offerings more tangible and relatable. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With AR, customers can visualize products in their own space, such as trying on clothes or placing furniture virtually. Let Nimais help you stand out and offer an unforgettable marketing experience.
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