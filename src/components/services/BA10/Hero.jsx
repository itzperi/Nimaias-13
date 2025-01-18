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
          Brochure Creation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais Specializes in creating brochures that not only showcase your services but also tell your brand’s story with visual appeal. Our brochures are designed to engage and captivate your audience, ensuring your message is clear, professional, and memorable. We understand the importance of making a strong first impression, and each brochure is tailored to reflect your unique brand identity. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With our expertise, we craft brochures that align with your goals and connect with your target audience. Whether you're looking for a corporate brochure that exudes professionalism or a more creative, dynamic design, Service ensures that every piece communicates your value effectively. Let us help you elevate your brand and engage your customers with brochures that truly stand out.
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