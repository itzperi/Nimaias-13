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
          Affiliate Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Businesses generate 16% of their revenue through affiliate marketing? It’s one of the fastest-growing strategies for driving traffic and boosting sales by partnering with influencers, creators, and affiliates who align with your brand. At Nimais, we simplify affiliate management with clear commission structures, real-time tracking, and dedicated support to ensure affiliates feel motivated to help your business grow.
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Our solutions stand out with advanced performance tools, fraud detection systems, and custom incentives designed to maximize results. From personalized content to seasonal campaigns, we keep affiliates engaged while driving measurable growth. Ready to unlock new revenue streams? Let’s build an affiliate program tailored to your success.
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