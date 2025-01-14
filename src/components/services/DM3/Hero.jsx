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
          Social Media Marketing (SMM)
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Social Media Marketing (SMM) with Nimais helps your brand connect with the right audience on platforms like Facebook, Instagram, and LinkedIn. We use targeted strategies that increase visibility, build brand loyalty, and create lasting engagement with your audience. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Let Nimais improve your social media efforts with personalized campaigns designed to deliver measurable growth. Our proven approach ensures you build a trustworthy presence that converts followers into loyal customers.
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