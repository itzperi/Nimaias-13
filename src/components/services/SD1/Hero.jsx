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
          Twitter Banner Creation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Your Twitter banner is the first thing people notice when they visit your profile. If it’s not eye-catching, you may lose the chance to engage with your audience right away. A weak design can fail to represent your brand, causing visitors to quickly move on. The key is having a banner that stands out and builds your brand’s identity at a glance. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          At Nimais, we specialize in creating custom Twitter banners that help you make a strong first impression. Our team designs banners that reflect your brand and attract the right audience. With our help, your Twitter profile will look professional and engaging, leading to more followers and better connections. Contact us today to elevate your Twitter profile!
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