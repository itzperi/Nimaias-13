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
          LinkedIn Banner Design
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimai creates LinkedIn banner designs that help you stand out and showcase your professional identity. Your banner is the first thing people see, and we ensure it highlights your strengths, making the right impression on potential partners, clients, and employers. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With Nimais’s tailored LinkedIn banner design services, you can enhance your online presence and build trust with the right audience. Let us help you make a lasting impact in your professional network today.
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