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
          Digital Book Cover Design
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais creates digital book covers that capture attention and reflect your story’s essence. In a crowded market, a striking cover can make all the difference across platforms like Kindle, Amazon, and Apple Books. We focus on making your cover visually appealing, ensuring it grabs attention and entices readers to explore your work. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Our custom designs align with digital trends to ensure your book stands out. Let Nimais bring your digital book to life with a cover that resonates with readers. Start your design today!
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