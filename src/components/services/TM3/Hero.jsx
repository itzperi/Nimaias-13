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
          Seasonal Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Seasonal marketing can boost sales by up to 30% during key times of the year, yet many businesses miss this opportunity due to poorly timed or irrelevant campaigns. Common challenges include late execution, unclear messaging, and not aligning with customer expectations, which can lead to missed sales potential.
          </p>
          <p className="text-lg text-gray-300 mb-8">
          At Nimais, we help you capitalize on the power of the seasons by crafting targeted campaigns that connect with your audience and drive meaningful results. Let’s create a strategy that makes your brand stand out during key moments of the year and maximizes your sales opportunities. Ready to grow? Get in touch with us today!
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