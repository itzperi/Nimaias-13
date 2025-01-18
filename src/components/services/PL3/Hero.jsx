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
          Phone Case Design
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Phone cases are not just about protection—they also show off your style and brand. If the design isn’t right, your product may get overlooked in a crowded market. Customers want cases that are both strong and stylish, but many options don't deliver both. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          At Nimais, we create custom phone case designs that offer the perfect mix of style and protection. Our designs connect with your audience and reflect your brand. Whether you want a bold look or something more subtle, we make sure your cases are eye-catching and built to last.
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