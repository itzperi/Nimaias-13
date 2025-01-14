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
          AI Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          AI marketing with Nimais revolutionizes how you connect with your audience. By using machine learning and natural language processing, we craft personalized campaigns that speak directly to your customers' needs. This results in stronger engagement, as your audience feels understood and valued, building lasting relationships that drive loyalty.   
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Our AI-powered tools don’t just automate tasks—they predict customer behavior, allowing you to make informed decisions that enhance your marketing strategy. With Nimais, you can save time, optimize your campaigns, and boost ROI. Let us help you unlock the power of AI and take your marketing to the next level!
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