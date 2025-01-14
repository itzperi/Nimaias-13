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
          Market Research
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Market research with Nimais is the key to making smarter business decisions. We dive deep into consumer behavior, uncovering insights into preferences, buying patterns, and trends that drive the market. By understanding your customers' needs, we help you tailor your products and services to meet demand, building stronger relationships and boosting loyalty. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Our competitor analysis ensures you’re always one step ahead. We identify gaps in the market and assess your competition’s strengths and weaknesses, helping you seize new opportunities. Nimais transforms insights into actionable strategies that power your business growth and competitive edge.
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