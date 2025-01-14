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
            Content Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Content Marketing is essential for creating a meaningful connection with your audience. At Nimais, we craft customized content strategies that speak to your audience's needs, solving their problems and delivering real value. By focusing on relevant, engaging content such as blogs and videos, we ensure your brand becomes a trusted resource that keeps customers coming back. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Ready to build trust and grow your business? Let Nimais guide you in creating SEO-friendly content that drives traffic and engages your target market across all platforms. Our tailored approach focuses on building loyalty, turning visitors into long-term customers. 
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