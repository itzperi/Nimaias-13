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
          Calendar Layout
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Nimais specializes in creating unique calendar layouts that keep your brand in front of your audience all year round. Our designs ensure your calendar is not only functional but also visually appealing, making it a great promotional tool for businesses or a personal keepsake. We focus on layouts that organize schedules effortlessly while reflecting your style.
          </p>
          <p className="text-lg text-gray-300 mb-8">
          From corporate giveaways to personalized calendars, Nimais Crafts designs that blend creativity with practicality. Our team ensures every detail of your calendar speaks to your brand, leaving a memorable impression. Let us design a calendar that not only helps you stay organized but also keeps your brand at the forefront of your audience's mind. Reach out to make every day of the year count!
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