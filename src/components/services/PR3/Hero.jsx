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
          Brand Reputation Management
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais helps protect and grow your brand’s reputation. We start by reviewing your brand's current image and finding ways to improve it. With our ongoing monitoring, we make sure your brand stays strong and trustworthy online. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          If any issues arise, Nimais offers services to fix your reputation and regain trust. Our outreach campaigns focus on sharing your brand’s values and building meaningful connections with your audience. Work with Nimais to create a brand that people can trust and feel loyal to
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
