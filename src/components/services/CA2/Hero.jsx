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
          Website Text Development
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          At Nimais, we specialize in website text development that goes beyond just words—it’s about creating connections. Our expert team crafts clear, compelling, and purpose-driven content that resonates with your audience and aligns with your business goals. Every line is designed to captivate visitors, reinforce their value, and guide them toward meaningful actions on your site. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          By integrating user-focused storytelling and SEO-friendly techniques, we ensure your website not only attracts traffic but also converts it into measurable results. Let Nimais help you transform your website into a powerful tool for growth and engagement.
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