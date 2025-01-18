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
          Character and Mascot Development
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          At Nimais, we believe that relatable and memorable characters bring a personal connection to your brand. Are you struggling to make your brand stand out or connect emotionally with your audience? Our character and mascot development service creates unique, visually appealing designs tailored to reflect your brand’s personality. These characters go beyond being visually appealing—they tell stories, evoke emotions, and turn your brand into something audiences can relate to and remember. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Our mascots are designed to leave a lasting impression. Let Nimais Create a character that brings life and personality to your brand—get in touch with us today to get started!
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