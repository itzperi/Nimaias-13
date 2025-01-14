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
          B2C Marketing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais’s B2C marketing services are designed to build emotional connections that resonate with your customers. We use data-driven insights to segment your audience, ensuring that your campaigns target the right people at the right time. By understanding what truly matters to your customers, we create campaigns that not only engage but also foster loyalty and trust, turning them into long-term advocates for your brand. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          We take a multichannel approach to reach your customers wherever they are—whether through social media, digital ads, or email marketing. With a strong focus on optimizing the customer journey, Nimais ensures a seamless and enjoyable experience that drives real results and improves your ROI.
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