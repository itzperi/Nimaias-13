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
          Business Cards Creation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Well-designed business cards significantly boost your networking success? At Nimais, we specialize in crafting custom business cards that capture your brand’s essence and leave a powerful impression. Our designs highlight your contact information while showcasing your professionalism. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Many businesses face challenges with generic, uninspiring cards that fail to represent their brand effectively. A poorly designed card can miss the opportunity to leave a lasting impact. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With Nimais, every element of your business card is tailored to your needs, ensuring it serves as a gateway to meaningful connections and strengthens your brand’s identity. Let’s create a card that truly reflects your business.
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