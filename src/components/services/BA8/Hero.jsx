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
          Menu Creation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais creates simple yet attractive menus that show off your restaurant’s style while making it easy for customers to choose their meals. We focus on designs that catch the eye and organize your dishes clearly, helping your menu look professional and inviting. A well-designed menu can make a big difference in how your customers experience your restaurant, encouraging them to return. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Nimais designs menus fit with your brand and make your food stand out. Our team ensures every menu highlights your offerings in the best way possible, combining functionality with beauty. Let us help you create a menu that is not only beautiful but also makes your customers excited to order. Work with us to leave a lasting impression with every meal.
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