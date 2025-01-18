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
          Merchandise Art
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais’s custom merchandise art services are designed to make your products unforgettable. Whether it’s t-shirts, mugs, bags, or any other promotional items, we create artwork that helps your brand stand out and leave a lasting impression. With the right design, your merchandise becomes more than just a product—it becomes a statement that connects with your audience and strengthens your brand presence. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Our designs are tailored to elevate your brand’s personality, ensuring that your merchandise captures attention and engages your customers. Let Service help you turn ordinary items into impactful, memorable products that your audience will love to showcase.
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