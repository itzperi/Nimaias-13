import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Set Up and Manage an Affiliate Program",
      description: "Create an easy-to-follow affiliate program that makes it attractive for people to promote your business. We will handle things like tracking, setting commissions, and bringing affiliates on board. The result: more sales and stronger partnerships.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Affiliate Recruitment and Outreach",
      description: "Find and bring in the right affiliates, such as bloggers, influencers, or content creators, to promote your brand. We focus on finding partners who fit well with your industry to bring quality visitors to your site and help increase sales.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Content and Creative Support",
      description: "Give your affiliates the tools they need to succeed, like banners, videos, and email templates. With these resources, they can run better campaigns and help you grow your business. Providing the right materials makes it easier for affiliates to promote your brand.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Performance Tracking and Analytics",
      description: "Keep track of how your affiliates are doing in real-time. We monitor things like clicks and conversions so you can see how well your campaigns are performing. This helps you make improvements and get better results.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title:"Fraud Detection and Prevention",
      description: "Click fraud and fake conversions can hurt your affiliate program. We use tools to catch these issues early, so your program stays safe. We focus on keeping things honest, building trust with both affiliates and customers.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Seasonal Campaign Support",
      description: "Take advantage of seasonal trends by running special campaigns with your affiliates. We create unique offers and promotions for affiliates to share, bringing in more traffic and boosting sales during key times of the year.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Affiliate Loyalty and Rewards",
      description: "Reward your best affiliates with incentives to keep them motivated. Whether it’s bonuses or special benefits, offering rewards encourages affiliates to keep promoting your brand and delivering great results. It helps build long-lasting relationships.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Integration with e-Commerce Platforms",
      description: "Make your affiliate program work smoothly with your e-commerce system. This way, tracking sales and paying affiliates is simple and efficient. By integrating the two, you can streamline the process and make it easier for everyone involved.",
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