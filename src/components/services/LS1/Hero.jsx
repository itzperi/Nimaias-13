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
          Lead Generation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Attracting the right leads is key to growing your business, and Nimais excels at crafting tailored lead generation strategies that resonate with your ideal customers. By focusing on precision targeting, we ensure your campaigns engage prospects who are ready to take action and become long-term clients. Our data-driven methods focus on delivering clear, actionable results. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Nimais also specializes in nurturing leads with consistent, personalized communication. By understanding your audience's needs and providing the right content, we build trust and guide leads smoothly through their buying journey. Let Nimais help you turn opportunities into loyal customers with strategies that deliver lasting impact.
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