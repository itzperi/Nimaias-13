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
            Search Engine Optimization (SEO)
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Boost your website’s visibility with Nimais’ SEO services. We focus on improving your rankings with tailored strategies that target the right audience and drive more traffic. Our team uses reliable techniques like in-depth keyword research, on-page SEO, and trusted backlink strategies to ensure lasting results. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Let us help you stand out online and grow your business. Ready to improve your online presence? Let’s work together to achieve better rankings and attract more customers today.
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