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
          Envelope Production
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          70% of consumers judge a business’s professionalism based on its presentation. Custom envelopes are a subtle yet impactful way to elevate your brand’s image. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          At Nimais, we design custom envelopes that align perfectly with your brand identity. From personalized designs to premium envelope printing, we ensure every piece enhances your communication.
          </p>
          <p className="text-xl text-gray-200 mb-8">
          Let’s create envelopes that reflect your brand’s professionalism. Contact us today to get started!
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