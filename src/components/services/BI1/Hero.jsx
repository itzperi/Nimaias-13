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
          Stationery development
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Your stationery plays a vital role in shaping the professional image of your business. At Nimais, we create bespoke stationery designs that reflect your brand's identity and leave a lasting impression on clients and partners. Every element, from business cards to letterheads, is carefully crafted to communicate professionalism, trust, and consistency. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With Nimais, you can ensure your brand stands out in every interaction. Our attention to detail and commitment to quality ensure that your stationery not only looks great but also strengthens your credibility and reinforces your brand’s message. Let us help you make a statement that resonates
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