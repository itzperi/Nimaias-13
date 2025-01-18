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
          Poster Creation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais offers bold and creative poster designs that capture attention and effectively communicate your message. Our team focuses on crafting visually striking posters that stand out, ensuring your brand or event gets noticed. Whether you're promoting a product, announcing an event, or sharing important information, our designs ensure that your message is clear and impactful. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          We create posters that not only grab attention but also resonate with your audience, leading to greater engagement and impact. With our expertise, your message will reach the right people in the most compelling way.
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