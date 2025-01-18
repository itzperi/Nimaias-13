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
          Website Development
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          At Nimais, we focus on building responsive, optimized websites that offer a smooth and engaging experience across all devices. We know that your website is often the first point of contact for customers, so we prioritize making it visually appealing, easy to navigate, and fully functional. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          From concept to launch, we provide complete website development services, customizing each project to suit your business needs. Whether it’s a simple landing page or a complex e-commerce site, we ensure your website is optimized for performance and designed to boost user engagement. Let Nimais help create a website that not only looks great but also supports your business growth.
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