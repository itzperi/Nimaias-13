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
          Sales Development Representation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais specializes in identifying high-quality leads and nurturing them to help your sales team succeed. We ensure your team focuses only on the best opportunities, saving valuable time and increasing productivity. With the right support, every lead can turn into a lasting customer. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Let Nimais manage your sales development, driving long-term growth. Our targeted strategies foster strong relationships with potential clients, allowing your business to expand steadily. Trust us to help you unlock the full potential of your sales efforts.
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