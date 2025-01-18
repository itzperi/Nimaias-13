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
          Newsletter Layout
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Keeping your audience informed starts with a well-designed newsletter. Service specializes in creating layouts that are simple to read, visually appealing, and aligned with your brand identity. Each design ensures your content stands out and keeps readers engaged, delivering your message effectively and professionally. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          When you choose Nimais, you get more than just a layout – you get a tool that strengthens your brand communication. Whether it’s updating clients or sharing news, our newsletters help you connect meaningfully with your audience. Let us design a newsletter that your readers will look forward to every time.
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