import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Product Catalog Design",
      description: "Designing product catalogs with visually captivating elements, ensuring your products stand out and engage potential buyers.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Interactive Catalog Layouts",
      description: "Creating interactive catalogs that allow customers to browse, search, and explore your offerings with enhanced functionality.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Print Catalog Design",
      description: "Providing beautiful print-ready catalogs that reflect your brand's identity and make a strong impression on customers.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
        title: "Digital Catalog Design",
        description: "Developing digital catalogs optimized for online browsing, perfect for engaging customers in the digital space.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/greater-credibility"
    },
    {
        title: "Custom Catalog Layouts",
        description: "Tailoring catalogs specifically to meet your business’s unique requirements, from layout to content presentation.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/lead-nurturing"
      },
      {
        title: "Seasonal Catalog Design",
        description: "Creating catalogs designed around seasonal promotions or events, highlighting relevant products and services to boost sales.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/lead-nurturing"
      },
      {
        title: "Wholesale Catalog Design",
        description: "Designing catalogs tailored for wholesale or bulk buyers, featuring easy-to-read product listings and bulk order options.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/greater-credibility"
      },
      {
          title: "Online Product Portfolio Layouts",
          description: "Building online product portfolios that showcase your offerings in a clean, organized, and easily navigable layout.",
          image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
          link: "/services/b2b-marketing/greater-credibility"
      },
      {
        title: "Interactive Pricing Guides",
        description: "Designing pricing guides that are not only informative but also interactive, helping customers quickly find relevant pricing details.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Catalog Conversion Services",
      description: "Converting existing print catalogs into interactive digital formats, ensuring they’re optimized for online platforms.",
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