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
          Event Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          When you partner with Nimais for Event Marketing, you're choosing to elevate your brand with impactful, unforgettable events. We specialize in curating tailored experiences that resonate deeply with your audience, from engaging webinars to high-profile trade shows. Nimais ensures every detail is managed seamlessly to create an event that not only builds awareness but also strengthens relationships and drives business growth.  
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Ready to elevate your event? With Nimais, we amplify your brand visibility and audience engagement through targeted strategies. Our approach guarantees each event delivers real, measurable results, turning participation into long-term business success.
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