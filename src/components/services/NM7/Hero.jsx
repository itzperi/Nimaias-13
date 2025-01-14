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
            Neuro Testing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais helps you improve your marketing with Neuro Testing by understanding how people feel when they see your content. We use special tools to track emotional reactions, so we can adjust your campaigns to make stronger connections with your audience and achieve better results. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With Nimais, we use easy-to-understand methods like Eye-Tracking and A/B Testing to gather real-time feedback. We help you focus on what works best for your audience, making your marketing more engaging and effective. Let us help you optimize your campaigns for better impact and results.
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