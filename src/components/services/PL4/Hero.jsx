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
          Album Cover Design
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Creating a compelling album cover is essential to reflect the soul of your music and make a lasting impression on your audience. A well-designed album cover serves as the first interaction potential listeners have with your work, making it crucial to visually capture the mood, tone, and message of your music. It’s not just a design—it’s a reflection of who you are as an artist and a powerful tool for engaging your audience. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          At Nimais, we specialize in designing album covers that capture the essence of your sound and visually appeal to your audience. Let us help your music stand out with a design that resonates.
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