import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Engage Users Directly with SMS Marketing",
      description: "SMS marketing allows you to connect with your audience immediately. It sends targeted messages to your customers' phones, such as promotions, updates, and alerts, ensuring high engagement. SMS is perfect for time-sensitive offers and announcements. You can reach specific audiences with timely campaigns.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Mobile App Marketing",
      description: "We promote your mobile app to boost downloads and keep users engaged. From in-app advertising to push notifications, we help you stay visible in a crowded marketplace. Optimized mobile campaigns will enhance your app’s visibility and keep users loyal.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Mobile Email Campaigns",
      description: "We design email campaigns that are optimized for mobile. Your product messages will display correctly on all mobile devices, increasing conversion and click-through rates. Our designs ensure an engaging user experience with easy-to-read paths for mobile users",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Location-Based Marketing",
      description: "We use geo-location technology to send promotions and alerts to customers in specific areas.This keeps your brand relevant and timely by reaching customers wherever they are with targeted campaigns.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Mobile-Friendly Advertising",
      description: "We create ads for mobile platforms like Google Ads and social media. Our strategies ensure that your brand stands out on small screens with dynamic visuals and vertical videos. These ads increase brand visibility and create lasting impressions for consumers on the go.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Push Notifications and Alerts",
      description: "We use push notifications to update, remind, and offer specials to your audience. Our timely messages are sent to the right person at the right moment, ensuring they don’t feel overwhelmed. This strategy helps promote customer loyalty and retention.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Mobile Commerce Strategies",
      description: "A good mobile shopping experience includes easy navigation, quick checkout, and secure payment options. Mobile commerce provides a seamless service for on-the-go customers, boosting sales and satisfaction. We aim to turn mobile users into paying customers through a smooth shopping experience",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Analytics and Performance Tracking",
      description: "We track important metrics like click-through rates, user transactions, and ROI to measure the success of your mobile campaigns. Using data-driven insights, we continuously optimize your mobile marketing efforts to improve results.",
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