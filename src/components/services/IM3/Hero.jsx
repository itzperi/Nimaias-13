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
          Virtual Reality Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais's Virtual Reality Marketing brings your brand to life in ways traditional methods can't. Through immersive VR experiences, your customers can explore your products firsthand, whether it's stepping into a virtual store or trying on items virtually. This interactive engagement creates deep emotional connections, making your brand memorable and fostering long-term loyalty. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Incorporating VR into your marketing strategy helps your business stand out. It enhances engagement, improves brand recall, and motivates quicker purchasing decisions, creating unforgettable experiences that elevate your brand.
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