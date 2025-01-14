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
          Video Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Video marketing is a powerful way to engage your audience and build a lasting connection. At Nimais, we craft videos that align with your business goals, helping to boost brand awareness and drive conversions. From storytelling to tutorials, we ensure each video is designed to leave a strong impression on your audience, creating real, measurable results. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Partner with Nimais to create video content that speaks to your audience. We handle everything from planning to production, delivering high-quality videos that stand out across platforms. Our unique approach ensures your videos are optimized for maximum reach, so your brand’s message gets noticed where it matters most.
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