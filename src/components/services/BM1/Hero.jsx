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
          Magazine Layout Creation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          A poorly designed magazine layout can make even great content hard to follow. At Nimais, we focus on creating clean, creative layouts that make your magazine easy to read and visually appealing. Whether it's for articles or ads, we ensure every page looks great and enhances the reading experience. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Our  design services are perfect for both print and digital magazines, helping your content stand out. Let Nimais help you create a magazine that your readers will love. Get started with us today!
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