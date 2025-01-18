import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Custom Envelope Design Services",
      description: "Leave a lasting impression with custom envelope design services that align with your brand’s identity. Our personalized custom envelopes ensure a professional and consistent look for your communications, making your mail stand out. ",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Envelope Printing Servicest",
      description: "Get high-quality, polished prints with our envelope printing services. We provide premium custom envelopes that enhance your brand’s image, ensuring every piece of mail is professional and visually appealing.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Branded Business Card Design",
      description: "Make a strong first impression with branded business cards designed to reflect your business’s identity. Our designs ensure your cards stand out and communicate professionalism from the moment they’re handed over.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
        title: "Complete Brand Identity Design",
        description: "Our complete brand identity design services deliver cohesive designs for all your business materials. From logos to custom envelopes, we ensure your brand communicates consistency and professionalism across every touchpoint",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/greater-credibility"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link}
                className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default B2BMarketingContent;