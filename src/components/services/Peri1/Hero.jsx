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
          Business development 
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          By 2027, businesses investing in market research are expected to see an average 15%
 increase in revenue. At Nimais, we specialize in market research that helps you make
 informed decisions, leading to up to a 30% improvement in market positioning. Our lead
 generation strategies fill your sales pipeline with 40% more qualified leads, boosting
 your conversion rates.
          </p>
          <p className="text-lg text-gray-300 mb-8">
          With Nimais’ customized sales strategies, businesses experience
 a 25%higher sales conversion rate. Ready to grow? Partner with Nimais today and
 drive your business to new heights with data-driven, result-oriented solutions.
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