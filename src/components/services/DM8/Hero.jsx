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
          Influencer Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Influencer marketing is an effective way to grow your brand by forming genuine connections with the right people. At Nimais, we focus on connecting your brand with influencers who align with your values and resonate with your audience. This approach helps build real trust, driving brand loyalty and long-term success. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Let Nimais create influencer campaigns that deliver measurable results. We use unique, results-driven strategies to select the best influencers for your brand, ensuring your message reaches the right people. With our tailored methods and continuous optimization, we help you achieve lasting brand visibility and growth.
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