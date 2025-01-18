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
          App Icon or Button Creation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          App icons and buttons are key to shaping how users experience your app. At Nimais, we design elements that are not just visually appealing but also enhance usability, ensuring seamless interaction. A well-crafted icon or button can simplify navigation and boost user engagement. If your app struggles 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          with attention or functionality, our custom designs provide effective solutions. With a focus on creativity and purpose, we create designs that align with your brand while making your app intuitive and user-friendly. Let us help you build an interface that delights and retains users.
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