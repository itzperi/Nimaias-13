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
          Banner Advertisement Creation 
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Attract more visitors and grow your business with banners that work. At Nimais, we design ads that stand out and encourage people to take action, like making a purchase or signing up. If your banners aren’t catching attention, you could be losing potential customers. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          We focus on creating simple, effective designs that help your audience connect with your brand. Whether you want to promote a product or get more leads, our banners are made to meet your goals. Let’s create banners that bring real results
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