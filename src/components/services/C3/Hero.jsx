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
          Employer Branding
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Attract the best talent with Nimais's Employer Branding services, designed to showcase your unique company culture. We focus on highlighting your values, work environment, and growth opportunities, giving candidates a true sense of what it’s like to be part of your team. This transparent approach helps you build trust and position your organization as a top choice for talented individuals. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          
Nimais's Employer Branding strategies ensure that potential employees see the full picture of your commitment to diversity, employee growth, and career development. Let us help you stand out with authentic employee stories and real-life examples that align with your brand values. Together, we’ll make your company the preferred destination for talent.
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