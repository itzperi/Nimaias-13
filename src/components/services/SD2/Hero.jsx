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
          Facebook Cover art
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Your Facebook cover art is the first thing visitors see, and it’s key to making a strong impression. A well-designed cover not only grabs attention but also communicates your brand’s message, setting the tone for your online presence. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          At Nimais, we specialize in custom Facebook cover art that reflects your brand’s personality and engages your audience. Let us help you create cover art that boosts brand recognition and drives engagement. Contact us today!
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