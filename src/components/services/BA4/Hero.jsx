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
          Leaflet Creation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          At Nimais, we understand the power of a well-designed leaflet to convey your message effectively and with impact. Our leaflet creation service is focused on delivering concise, clear communication while reflecting your brand’s identity. Whether you're promoting a product, event, or campaign, we design leaflets that grab attention and drive action. By combining creative visuals with strategic messaging, we ensure your message stands out and resonates with your audience. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With our expertise in creating media advertising, we ensure every leaflet design is purposeful and aligned with your marketing goals. From bold graphics to sharp messaging, our leaflets are designed to engage and inform, offering a powerful tool to support your marketing efforts and grow your business.
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