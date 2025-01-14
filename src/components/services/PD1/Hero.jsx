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
          Performance Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais's performance marketing helps you achieve consistent, measurable growth tailored to your business needs. Whether you're focusing on lead generation, conversions, or sales growth, our strategies evolve with your goals. We use data-driven insights to ensure every dollar of your marketing budget is spent wisely, empowering your business to scale confidently. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          As your business grows, Nimais continuously optimizes your campaigns for maximum impact. Our transparent approach ensures sustained success, with every campaign being refined to deliver reliable results. Let Nimais guide your growth with strategies that truly work.
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