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
          Blog Creation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          A lack of engaging and well-structured blog content can make it difficult for your brand to capture attention and build trust. At Nimais, we address this by delivering blog content that informs, educates, and connects with your audience. From insightful articles to actionable posts, our services provide value to your readers while aligning with your business goals. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With Nimais, every blog is crafted with precision and purpose. We focus on delivering SEO-optimized, reader-friendly content that resonates with your target audience and enhances your online presence. Let us help you create blogs that keep your brand relevant and inspire loyalty in your readers.
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