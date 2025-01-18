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
          Logo and Social Media Package
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais’s Logo and Social Media Package is designed to help you establish a consistent and professional online presence. With a unique logo and matching social media branding, this package ensures your business is easily recognizable and communicates a clear message to your audience across all platforms. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Let Nimais Assist in creating a cohesive visual identity for your brand. Our package makes sure your logo and social media designs work together, strengthening your brand’s impact and helping you connect with customers more effectively.
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