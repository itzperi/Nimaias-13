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
            Neuro-Designing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais uses Neuro-Designing to create marketing materials that both look great and work better. We focus on making your designs easy to use and connect with your audience, ensuring better results. Our designs are based on how your customers think and behave, helping to increase engagement and conversions. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Let us help you build designs that not only grab attention but also feel natural and inviting. By focusing on simplicity and clear messaging, we make sure your brand connects deeply with your customers, leading to stronger relationships and lasting impac
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