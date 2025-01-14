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
          Press Release
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Get your brand’s message noticed with Nimais's Press Release services. We go beyond simply sharing news; we craft engaging press releases that highlight your brand's story and speak directly to journalists and readers. Our goal is to make sure your message sticks and reaches the right audience. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Tailored for small businesses, our Press Release Distribution ensures your story gets the attention it deserves, from local media to large-scale platforms. Nimais strategically places your release to maximize exposure, boost brand recognition, and deliver real impact. Let Nimais help you share your news in a way that gets noticed and builds trust. 
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