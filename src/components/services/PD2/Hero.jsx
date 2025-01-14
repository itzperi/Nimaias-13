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
          Conversion Rate Optimization (CRO)
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais specializes in conversion rate optimization (CRO) strategies that transform your website into a high-performing asset. By improving critical elements such as layout, speed, and mobile responsiveness, we create a seamless user experience that encourages visitors to take action. With a data-driven approach, every change we make is designed to boost conversions and align with your business goals.   
          </p>
          <p className="text-lg text-gray-300 mb-8">
         
Through in-depth A/B testing and behavioral insights, Nimais refines your site to better meet the needs of your audience. We identify pain points and implement actionable improvements to convert visitors into loyal customers. Trust Nimais to optimize your website and turn it into a consistent revenue-generating tool.
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