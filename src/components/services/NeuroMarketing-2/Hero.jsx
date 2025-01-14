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
            Neuromarketing Research
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Nimais uses neuromarketing research to uncover hidden consumer behaviors and emotional triggers that drive decisions. By leveraging tools like eye-tracking and emotional response analysis, we help shape more effective, targeted marketing strategies that truly connect with your audience. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With Nimais, your campaigns will resonate deeply with customers, creating lasting impressions. Our insights lead to stronger brand loyalty and improved customer engagement. Start transforming your marketing approach today and watch your brand stand out
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