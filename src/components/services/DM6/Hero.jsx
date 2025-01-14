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
          Mobile Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais helps you stay connected with customers on the go through effective mobile marketing. From SMS marketing to push notifications and app promotions, we ensure your brand reaches the right people at the right time with relevant messages that drive engagement. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Our mobile marketing strategies focus on seamless customer experiences, whether through ads or mobile shopping. We track key results, ensuring your campaigns deliver value and convert customers. Ready to boost your mobile presence? Let’s create a strategy that brings your brand closer to its audience.
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