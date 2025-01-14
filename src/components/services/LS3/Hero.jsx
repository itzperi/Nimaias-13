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
          Sales Enablement
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais helps your sales team excel with tailored tools and actionable insights that drive productivity and success. Our solutions focus on equipping your team with the right content and strategies to close deals effectively. With Nimais, you can empower your sales force to build stronger relationships and convert leads into loyal customers. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          By integrating sales and marketing efforts, Nimais delivers customized resources that simplify workflows and enhance efficiency. We focus on removing barriers, enabling your team to perform at its best. Partner with Nimais to boost your sales success and achieve consistent growth.
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