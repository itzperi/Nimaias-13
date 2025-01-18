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
          Social Media Messaging 
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Social media messaging is the key to building meaningful connections with your audience. At Nimais, we understand that every post matters, which is why our team crafts engaging, platform-specific content that resonates with your followers and encourages interaction. Whether it’s sparking conversations or delivering your brand’s message, our social media copy helps you stay relevant and relatable in a fast-paced digital world. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With a focus on clarity and creativity, Nimais ensures your brand’s voice is consistent and impactful across all channels. From driving engagement to strengthening relationships, our messaging solutions help your social presence leave a lasting impression. Let us take your social media strategy to the next level.
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