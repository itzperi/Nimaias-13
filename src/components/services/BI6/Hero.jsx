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
          Logo and Business Card Creation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Your logo and business card are the face of your brand, creating a cohesive identity that resonates with your audience. At Nimais, we specialize in designing logos and matching business cards that align seamlessly with your brand’s personality. Every detail—from typography to color palettes—is crafted to ensure your visual identity stands out while maintaining consistency across platforms. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With Nimais, you gain a professional edge. Our designs are tailored to leave a lasting impression, helping you connect with your audience and differentiate your brand in the marketplace. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Ready to create a seamless brand experience with your logo and business card? Let’s bring your vision to life.
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