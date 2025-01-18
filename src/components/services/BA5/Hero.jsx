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
          Newspaper Advertisement Design
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          At Nimais, we specialize in designing newspaper advertisements that not only grab attention but also effectively communicate your brand’s message. We understand how competitive the print advertising space can be, and our goal is to make sure your ad stands out and resonates with your target audience. Whether you’re launching a campaign or promoting an event, we focus on clarity and creativity to drive engagement and increase brand visibility. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Our designs are tailored to attract the right audience, build brand awareness, and generate meaningful conversions. By combining innovative design strategies with a deep understanding of your objectives, we ensure your advertisement is not only visually appealing but also effective in delivering results that matter.
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