import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div 
      className="bg-cover bg-center min-h-screen relative overflow-x-hidden"
      style={{ 
        backgroundImage: `url('/lovable-uploads/384f3453-667d-40e8-bbef-516a16fc39c4.png')`
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-20 relative z-10">
        <div className="text-center mb-10 sm:mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6"
          >
            Boost Marketing with<br />Neuromarketing Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4"
          >
            We specialize in advanced neuromarketing research to decode consumer behavior, enabling businesses to develop powerful, data-informed marketing strategies.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 px-2"
          >
            <span className="text-raastas-light">Neuroscience</span>
            <span className="text-raastas-light hidden sm:block">•</span>
            <span className="text-raastas-light">Engagement</span>
            <span className="text-raastas-light hidden sm:block">•</span>
            <span className="text-raastas-light">Growth</span>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-0"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/marketing-agency')}
            className="p-6 sm:p-8 rounded-lg bg-opacity-10 bg-white backdrop-blur-lg border border-white/10 hover:border-raastas-light/50 transition-all duration-300 cursor-pointer"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">Marketing Agency</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Boost your business with our neuromarketing-powered Marketing services. We provide SEO, consumer insights, data-driven campaigns, and a full range of marketing solutions.
              </p>
            </div>
            <span className="text-raastas-light hover:text-raastas-accent transition-colors">
              Explore →
            </span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/creative-solutions')}
            className="p-6 sm:p-8 rounded-lg bg-opacity-10 bg-white backdrop-blur-lg border border-white/10 hover:border-raastas-light/50 transition-all duration-300 cursor-pointer"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">Creative Studio</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Elevate your brand with our creative solutions, blending the science of behavior and the art of design to influence decisions and drive engagement.
              </p>
            </div>
            <span className="text-raastas-light hover:text-raastas-accent transition-colors">
              Explore →
            </span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/it-services')}
            className="p-6 sm:p-8 rounded-lg bg-opacity-10 bg-white backdrop-blur-lg border border-white/10 hover:border-raastas-light/50 transition-all duration-300 cursor-pointer sm:col-span-2 md:col-span-1"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">IT Services</h3>
              <p className="text-sm sm:text-base text-gray-300">
                From concept to deployment, we provide end-to-end software development for internal applications or market-ready products.
              </p>
            </div>
            <span className="text-raastas-light hover:text-raastas-accent transition-colors">
              Explore →
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;