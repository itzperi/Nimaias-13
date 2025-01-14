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
          Google Ads Management
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Maximize ROI with Nimais’ Google Ads Expertise 
Nimais provides Google Ads management services designed to drive results. By focusing on 
keyword targeting, bid optimization, and advanced performance tracking, we help clients 
achieve up to 50% more conversions and reduce cost-per-click by 30%. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
          We create 
highly-targeted campaigns to ensure every ad dollar works harder for your business. With 24/7 
customer support, we make sure your campaigns are always on track. Let Nimais optimize your 
Google Ads to boost visibility and improve your ROI. 
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