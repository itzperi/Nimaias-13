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
          Photoshop Artwork 
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          At Nimais, we understand the power of visuals in telling your story. Are your current designs failing to capture attention or deliver your message effectively? Our Photoshop Artwork service offers custom designs and digital artwork that bring your ideas to life with clarity and creativity. From elevating your brand to creating compelling visuals, we ensure every project aligns with your vision and communicates effectively.
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With Nimais, you’re not just getting designs—you’re getting visuals that resonate with your audience. Let us help you stand out with artwork that’s both unique and impactful. Ready to transform your visuals? Connect with us today!
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