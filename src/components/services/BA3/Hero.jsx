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
          Catalog Layout
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          At Nimais, we specialize in creating attractive and functional catalog layouts that enhance your customer’s browsing experience. Our focus is on designing visually engaging catalogs that are easy to navigate, helping your customers quickly find what they need. With a thoughtful layout, we ensure your products or services are presented in the most appealing way, reflecting your brand’s identity and message.  
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Whether you're in retail, fashion, or any other industry, our team understands how to design catalogs that not only look great but also encourage customer engagement and improve usability. Our solutions ensure your business stands out while delivering a seamless experience for your customers.
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