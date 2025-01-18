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
          Invitation Card Creation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Every special event deserves an invitation that reflects its importance and sets the right tone. Are you tired of generic cards that fail to capture the essence of your occasion? At Nimais, we believe your invitations should not just inform but inspire excitement. That’s why we design cards that truly stand out and leave a lasting impression. Whether it’s a wedding, a birthday, or a corporate event, your invitations will be as unique and special as the moments they represent. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          Let us help you create custom invitations tailored to your style and theme. Our team focuses on combining creativity and simplicity to design cards that connect emotionally with your guests. Don’t settle for ordinary—choose Nimais to make your invitations unforgettable. Reach out today, and let’s bring your vision to life!
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