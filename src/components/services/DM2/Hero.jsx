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
          Pay-Per-Click Advertising (PPC)
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Nimais makes PPC advertising work for you by delivering targeted ads that reach the right people quickly. We focus on your specific goals, whether it’s boosting sales or enhancing brand visibility. With careful planning, we ensure your ads stand out to the right audience, ensuring higher engagement and faster results. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Our team at Nimais optimizes every aspect of your PPC campaign, from keyword research to refining your ads. By continuously tracking performance, we improve the effectiveness of your campaigns, ensuring every dollar spent brings measurable results. Let’s make your brand shine with PPC today and reach your target audience instantly.
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