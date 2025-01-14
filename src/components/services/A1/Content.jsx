import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "PPC Campaign Management",
      description: "Maximize ROI with targeted pay-per-click campaigns on platforms like Google Ads. We focus on keyword targeting, bid optimization, and continual campaign refinement to drive high-quality traffic and conversions. ",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Social Media Advertising",
      description: "Reach your ideal audience with customized ad campaigns on Facebook, Instagram, and LinkedIn. We design creative ads that increase engagement, boost brand awareness, and build a strong online presence for your business.", 
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "YouTube Ads",
      description: "Elevate your brand visibility with engaging video ads on YouTube. Our expert team creates impactful video content that captures attention and drives user interaction, helping your business stand out in a crowded digital space. ",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Display Ads ",
      description: "Engage potential customers with visually appealing banner ads displayed on high-traffic websites. We strategically place display ads across the web to ensure maximum reach and visibility for your brand. ",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
        title: "Campaign Optimization",
        description: "We continuously monitor and optimize your paid media campaigns to ensure they achieve optimal performance. Through data analysis and A/B testing, we make informed adjustments that drive better results and ensure cost efficiency. ",
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