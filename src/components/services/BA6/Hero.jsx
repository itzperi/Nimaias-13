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
          Advertisement Design
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          At Nimais, we create advertisements designed to capture attention and drive conversions, whether in digital or print. Our expertise in crafting visually compelling and strategically impactful ads ensures your message stands out in a crowded marketplace. We focus on delivering results, ensuring that each ad we design is tailored to meet your business goals and effectively engage your target audience. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          We understand the unique challenges businesses face when it comes to advertising, which is why we provide solutions that are both visually striking and effective in delivering measurable results. Whether you're promoting a product or launching a new campaign, our designs are crafted to help you succeed.
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