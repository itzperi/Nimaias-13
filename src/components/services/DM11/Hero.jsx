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
          Voice Search Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Voice search marketing helps your business stay ahead by optimizing your content for the way people ask questions. Nimais ensures your brand gets noticed in voice searches by focusing on long-tail queries and user behavior. We create strategies that align with voice search trends, giving you more visibility and attracting the right users. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          We dive deep into understanding how users interact with voice assistants. By tailoring your content to provide clear, conversational answers, we help your business rank higher in voice search results. Let Nimais optimize your voice search presence today and watch your business grow!
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