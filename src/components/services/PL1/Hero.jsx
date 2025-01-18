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
          Product Packaging Designing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Many businesses struggle with making their product stand out in the marketplace. Even with a high-quality product, poor or generic packaging can turn away potential customers. Without the right design, your product might blend in with others on the shelf, causing you to miss out on valuable opportunities. Customers need to feel an emotional connection, and the right packaging can do just that—create a memorable first impression. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          At Nimais, we specialize in crafting packaging that grabs attention and reflects your brand’s essence. Our designs help you create a lasting impression, build trust, and ensure your product stands out. Whether you're launching a new product or refreshing an existing one, we make sure your packaging is both appealing and functional.
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