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
          Programmatic Advertising
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Programmatic advertising by Nimais ensures that every ad dollar is spent wisely by automating ad buying and targeting the right audience. We help you reach potential customers on the right platforms and at the perfect time. With our expertise, your advertising budget works smarter, not harder, leading to more cost-effective results. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With advanced targeting and real-time insights, we refine campaigns for better engagement and higher conversion rates. Start achieving measurable results today with Nimais and take your ad campaigns to the next level!
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