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
          Illustration and Graphics
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          DAt Nimais, we know that the right illustration can make all the difference in how your audience perceives your message. Are you struggling to stand out or connect with your audience through generic designs? Our handcrafted illustrations and graphics add character, depth, and uniqueness to your visuals, helping your message resonate and leave a lasting impression. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Whether it’s for personal projects, branding, or marketing, our custom illustrations are tailored to reflect your vision with precision and creativity. Let us bring your ideas to life and transform your visuals into works of art that truly stand out. Ready to create something unforgettable? Contact Service today!
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