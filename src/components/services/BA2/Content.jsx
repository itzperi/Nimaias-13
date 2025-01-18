import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Custom Poster Design for Businesses",
      description: "We create custom poster designs tailored to your brand, ideal for any business marketing campaign. Our designs focus on capturing attention and delivering your key message clearly.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Event Poster Design for Promotions",
      description: "Get event-specific posters that stand out and effectively communicate the details of your event. Our designs are perfect for promoting conferences, concerts, and more.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Business Promotion Poster Design for Marketing",
      description: "Boost your brand visibility with professional business promotion posters. Our designs help you grab attention and drive interest in your services or products.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
        title: "Creative Poster Layout Design for Branding",
        description: "Enhance your brand’s identity with our creative poster layouts. We ensure every design aligns with your branding, using colors and fonts that reflect your business.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/greater-credibility"
    },
    {
        title: "Digital Poster Design for Online Campaigns",
        description: "Our digital poster design service ensures your visuals are optimized for online marketing. We create engaging, shareable posters for social media and email campaigns.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/greater-credibility"
    },
    {
          title: "High-Quality Print Poster Design Services",
          description: "Receive high-quality printed posters that are perfect for both in-store displays and promotional events. Our designs are made to impress with durable, professional finishes.",
          image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
          link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Interactive Poster Design with QR Codes",
      description: "Engage customers with interactive poster designs featuring QR codes. Perfect for marketing campaigns, these posters bridge the gap between physical and digital engagement",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
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