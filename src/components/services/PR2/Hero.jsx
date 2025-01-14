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
          Crisis Management
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          In times of crisis, your brand needs a clear plan of action. Nimais's Crisis Management services help prepare your team to respond swiftly and effectively when unexpected events arise. Our simulations and training ensure that your team is ready to protect your brand’s integrity. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          When a crisis hits, Nimais steps in with tailored response plans to minimize damage and safeguard your reputation. We guide you through rebuilding trust, offering transparent communication that turns challenges into opportunities for renewed loyalty. Let Nimais strengthen your brand’s resilience and prepare you for the unexpected today.
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