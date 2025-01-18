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
          Custom Cup or Mug Artwork
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais’s custom cup and mug artwork services add artistic touches that elevate everyday items into impactful brand ambassadors. Whether for corporate gifts, giveaways, or personalized retail products, we create designs that capture attention and create lasting impressions. Our artwork turns simple mugs and cups into unique promotional tools, reinforcing your brand identity and ensuring it stays top-of-mind with your customers. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          By choosing Service, you get high-quality designs that reflect your brand’s personality while serving a functional purpose. Let us help you turn ordinary mugs and cups into eye-catching pieces that connect with your audience and boost your brand visibility.
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