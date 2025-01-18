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
          Book Jacket Creation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          At Nimais, we understand that a book jacket plays a crucial role in making a strong first impression. A poorly designed cover can fail to attract readers or truly represent the heart of your story. Whether it’s a novel, guide, or magazine, your book deserves a cover that reflects its essence and grabs attention. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          We specialize in creating custom book jackets that perfectly capture your book's tone and appeal to your target audience. From choosing fonts and layouts to designing the front, spine, and back covers, we ensure that every detail aligns with your vision. Let Nimais help your book stand out with a design that connects with your readers.
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