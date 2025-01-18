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
          Logo and Brand Identity
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Your brand identity plays a crucial role in how your business is seen by others, and Nimaisknows how important it is to present a consistent, professional image. Our logo and brand identity package offers everything you need, from a distinctive logo to color choices and fonts that match your brand’s personality, ensuring all your materials feel unified. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Let Nimais help you create a brand that truly represents your business. With our custom solutions, we’ll make sure your brand stands out and connects with your audience, leaving a lasting impression wherever it appears. Trust us to craft an identity that aligns with your vision and goals.
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