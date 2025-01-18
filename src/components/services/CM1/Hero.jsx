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
          Sticker Artwork
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Stickers are a powerful tool for branding, but they need to stand out. If your stickers aren’t memorable, they won’t effectively promote your brand. Nimais understands that stickers should not only look good but also engage and spark conversation. Whether for giveaways, events, or merchandise, we design stickers that capture attention and build connections with your audience.
          </p>
          <p className="text-lg text-gray-300 mb-8">
          We specialize in creating custom stickers that leave a lasting impression. From bold, vibrant designs to minimalist styles, each sticker reflects your brand’s personality. Let Nimais help your brand shine with unique, unforgettable stickers!
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