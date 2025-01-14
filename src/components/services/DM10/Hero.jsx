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
          Mobile App Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          When you choose Nimais, you’re not just getting a service; you’re getting a trusted partner who understands your unique challenges. We explain our solutions clearly, showing how they address your specific needs and deliver real results. Our proven track record and customer testimonials speak for themselves, ensuring you can trust us to help your business grow. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Nimais offers tailored strategies that bring measurable results. We focus on your goals, providing transparent, actionable steps to achieve them. With expertise and a personal touch, we’re here to guide your business forward, helping you succeed with clarity and confidence.
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