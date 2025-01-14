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
          Online Reputation Management
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          At Nimais, we understand the importance of a strong, positive online presence. Our Online Reputation Management services focus on proactively monitoring your brand across social media and review sites, ensuring that potential issues are identified early and addressed directly. By engaging with your audience in real time, we help maintain a trustworthy and positive reputation.  
          </p>
          <p className="text-lg text-gray-300 mb-8">
          When challenges arise, Nimais steps in to manage crises thoughtfully. We resolve negative feedback with care and transparency, while also promoting positive customer experiences through creative content and testimonials. Let Nimais safeguard your reputation and help you foster lasting trust with your audience.
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