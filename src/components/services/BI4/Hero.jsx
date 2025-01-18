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
          Logo Designing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Did you know that businesses with a well-designed logo can see up to 33% growth in revenue? A strong logo is key to boosting brand awareness and making a memorable first impression. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          At Nimais, we specialize in business logo design that captures the essence of your brand, ensuring you stand out in a competitive market. Whether you're looking for an AI logo maker, a logo maker online, or custom company logo design, our expert team creates logos that resonate with your target audience and set the foundation for all your marketing efforts. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
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