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
          Social Media Management
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Did you know that 73% of marketers believe their social media efforts have been
 “somewhat effective” or “very effective” for their business? At Nimais, we craft
 personalized social media strategies that increase engagement, drive brand awareness,
 and help your business thrive. With customized strategies for every business size, we
 tackle the challenges of audience targeting and content creation. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Stop wasting time on
 inefficient methods—let Nimais take over your social presence. Boost your business
 today with Nimais
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Book a Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};
