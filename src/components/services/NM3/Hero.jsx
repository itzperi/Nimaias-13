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
            Neuro Optimization
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Are your marketing campaigns falling short? Nimais uses insights from neuroscience to optimize every touchpoint of your marketing. We analyze how your audience reacts on a deeper, emotional level, ensuring your messaging drives results.  
          </p>
          <p className="text-lg text-gray-300 mb-8">
            By understanding subconscious behaviors, Nimais creates more engaging campaigns. Whether refining ad strategies or optimizing content, our neuro-optimization approach ensures better ROI and deeper connections with your target market.
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