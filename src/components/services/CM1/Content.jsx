import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Custom Sticker Designs for Marketing Campaigns",
      description: "We craft custom stickers specifically designed for marketing campaigns that boost engagement and brand visibility.",
      image: "/lovable-uploads/52f10db3-a233-4ba9-b476-f62188eb573a.png",
      link: "/services/b2b-marketing/customized-campaigns"
    },
    {
        title: "Durable Vinyl Sticker Artwork for Brand Recognition",
        description: "Our vinyl sticker designs ensure long-lasting visibility, helping establish your brand in the market.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/lead-nurturing"
    },
    {
        title: "Custom Event Promotion Sticker Designs",
        description: "Special event stickers designed to leave a lasting impression and boost event participation.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/lead-nurturing"
    },
    {
        title: "Unique Sticker Designs for Product Packaging",
        description: "Add an eye-catching touch to your product packaging with custom sticker designs that communicate your brand’s message.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/lead-nurturing"
    },
    {
        title: "Branded Merchandise Sticker Design",
        description: "We create custom stickers that seamlessly integrate with branded merchandise, turning your products into walking advertisements.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/lead-nurturing"
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