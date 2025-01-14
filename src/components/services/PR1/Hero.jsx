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
          Media Development
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais’s Media Development services help your brand stand out and get noticed. We create strategies that ensure your message reaches the right people, making your brand more visible and trusted. Our focus is on consistent media coverage that builds a strong reputation for your brand. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          By forming strong relationships with key publications, Nimais ensures your brand gets the attention it deserves. We help increase your reach and impact, making your brand a trusted name. Let Nimais help you grow your brand’s visibility and reputation today.
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