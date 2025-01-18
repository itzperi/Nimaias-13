import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Photo manipulations with advanced Photoshop techniques",
      description: "Transform ordinary images into visually stunning artwork with our expert photo manipulation services, blending creativity and precision to tell your story",
      image: "/lovable-uploads/52f10db3-a233-4ba9-b476-f62188eb573a.png",
      link: "/services/b2b-marketing/customized-campaigns"
    },
    {
      title: "Custom digital illustrations for brand campaigns",
      description: "Elevate your marketing campaigns with bespoke digital illustrations tailored to reflect your brand’s unique identity and message.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Creative poster designs optimized for social media branding",
      description: "Capture attention with custom poster designs crafted for maximum impact on social media platforms.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Digital artwork for personalized invitations and events",
      description: "Make your events memorable with custom digital artwork for invitations that combine creativity and professionalism.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
        title: "Corporate promotional designs with a focus on branding",
        description: "Enhance your corporate image with promotional designs that effectively convey your brand values and message.",
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