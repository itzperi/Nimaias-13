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
            Neuro Sales
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais transforms your sales strategy with Neuro Sales, helping you connect with your customers on a deeper emotional level. By understanding the emotional triggers that influence buying decisions, we make sure your sales approach feels genuine and builds trust, leading to higher conversions. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Our approach uses customer behavior insights to fine-tune your messaging and timing. With Neuro Sales, we ensure your sales process aligns with what your audience truly wants, making every interaction smoother and more effective. Let Nimais help you create lasting, meaningful relationships that drive success
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