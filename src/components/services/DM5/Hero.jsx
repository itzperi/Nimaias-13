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
          Email Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Email marketing is a key way to connect with your customers and build strong relationships. Nimais creates personalized campaigns that speak directly to your audience’s needs, ensuring higher engagement and conversions. We don’t just send emails; we send the right message at the right time. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          What makes Nimais stand out is our focus on automation and targeted segmentation. We use proven strategies to craft custom campaigns that nurture leads and drive growth. Let’s work together to build an email marketing strategy that helps your business grow and build trust.
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