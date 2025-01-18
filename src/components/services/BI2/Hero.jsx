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
          Letterhead design
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          A poorly designed business letterhead can impact your company’s professionalism and credibility. With the right design, you create a lasting impression that strengthens your brand’s image and fosters trust in every communication. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          At Nimais, we specialize in professional letterhead design tailored to reflect your unique brand identity. Our company letterhead design ensures your correspondence stands out, whether in print or digital form. We also offer letterhead printing to guarantee the highest quality for every piece of communication. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Let us help you design a letterhead that speaks volumes about your brand. Ready to elevate your business image? Contact us today to get started.
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