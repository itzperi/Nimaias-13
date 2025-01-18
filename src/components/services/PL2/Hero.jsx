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
          Label Artwork
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          For many businesses, a product label is just a required detail, but it’s so much more than that. If your label doesn’t stand out, customers may overlook the quality and value of your product. A poor or generic label can fail to capture attention, even if your product is of the highest quality. The label serves as the first point of connection, making it essential that it communicates your brand’s message clearly and leaves a lasting impression. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          At Nimais, we specialize in creating label artwork that tells your product’s story with clarity and style. Our designs are more than just visually appealing—they are crafted to build trust and reflect the value your product provides. With careful attention to detail and a focus on your brand identity, we ensure that every label reinforces your product's quality and makes it stand out in a crowded marketplace.
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