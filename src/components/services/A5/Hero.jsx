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
          Social Media Advertising 
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Boost Engagement with Nimais’ Social Media Campaigns 
Nimais creates tailored social media advertising strategies to grow your brand’s visibility. Our 
campaigns, running on platforms like Facebook, Instagram, and LinkedIn, have increased brand 
awareness by over 40% and user engagement by 60%. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          We focus on reaching your target 
audience with ads that speak to their needs. With 24/7 customer support, we ensure your 
campaigns are constantly optimized to drive the best results. Get started with Nimais today and 
watch your brand thrive online. 
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