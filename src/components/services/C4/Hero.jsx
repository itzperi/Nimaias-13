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
          Shopper Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          At Nimais, Shopper Marketing is all about delivering tailored experiences that resonate with individual shoppers. We focus on understanding their unique shopping behaviors and preferences, ensuring that your messaging hits the right note at the perfect time. With our data-driven approach, we help you reach the right audience, driving engagement and enhancing customer loyalty. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Whether it's through personalized in-store displays or targeted online campaigns, Nimais helps you create memorable shopping experiences that influence purchasing decisions. Our solutions, including loyalty programs, ensure that customers return time and time again, fostering long-term relationships with your audience.
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