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
          Infographic Layout
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Infographics are a great way to simplify complex information and make it easier to understand. At Nimais, we specialize in creating eye-catching infographics that break down complicated details into simple, clear visuals. Whether it's data-driven designs or story-based graphics, our infographics help your audience easily understand your message. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Our designs not only make information simple but also keep your audience engaged. Nimais focuses on creating visuals that capture attention and help your brand communicate effectively. Let us turn your complex data into simple, attractive infographics that people will remember and share.
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