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
          Media Planning and Buying 
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Effective media planning and buying can increase ROI by over 50%. At Nimais, we specialize in 
strategically placing ads across digital and traditional channels to ensure maximum visibility and 
targeted reach. With our expertise, you’ll achieve cost-effective placements tailored to your 
brand’s goals, ensuring your ad spend works harder for you. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Ready to drive measurable 
results? Let Nimais enhance your media strategy for better reach, higher conversions, and 
greater ROI. Contact us today to get started!
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