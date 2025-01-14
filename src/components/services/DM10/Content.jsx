import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "ASO (App Store Optimization)",
      description: "We improve your app’s presence and visibility in app stores through ASO. By optimizing app titles, descriptions, and visuals with keywords, we ensure your app ranks higher in searches, attracting more organic users and building credibility. Effective ASO increases your app’s visibility and helps it grow.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "In-App Advertising Campaigns",
      description: "Use in-app ads to engage users with native ads, banners, and video ads. These ads blend seamlessly into the app experience, ensuring users are attracted and stay engaged. Increase user interaction and turn casual users into loyal customers.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "User Acquisition Strategies",
      description: "We help you acquire users through cost-effective strategies, including paid ads, influencer marketing, and targeted campaigns on social media. Each download adds to a stronger, more engaged community. Reach the right audience and boost app downloads.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Push Notification Campaigns",
      description: "Send personalized push notifications to bring back users who lost interest. Keep users informed about updates, offers, and features without leaving the app. Increase user engagement with timely and relevant notifications.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Mobile Retargeting",
      description: "We use advanced retargeting tactics to bring back previous users. By showing ads that remind them of your app, we encourage them to return. Re-engage users and retain your audience with targeted ads.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "App Reviews and Reputation Management",
      description: "Encourage users to leave positive reviews and address any concerns quickly to build trust. Positive reviews help boost downloads and improve your app’s reputation. Use feedback to make improvements and build loyal users.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Influencer Partnerships for Applications",
      description: "Partner with influencers who resonate with your brand to increase app downloads. Influencers help build trust and drive more users to your app. Enhance your app's reach and downloads through trusted influencers.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Gamification and Reward Integration",
      description: "Add gamification features like challenges and loyalty rewards to make the app more engaging. These interactive features motivate users to keep using the app and stay loyal for longer",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Cross-Platform Marketing Campaigns",
      description: "Promote your app across various platforms like social media, search engines, and email to reach a wider audience. This boosts visibility and ensures your app reaches different user segments. Build a strong brand presence across key channels.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Pre-launch and Launch Strategies",
      description: "Plan a smooth app launch with influencer endorsements, targeted ads, and special offers to drive initial downloads. Ensure a strong first impression with a well-executed launch strategy",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Performance Analysis and Tracking",
      description: "We analyze your app’s performance with detailed reports on user behavior, campaign success, and market trends. Use this data to optimize features, improve user experience, and drive continuous growth. Empower your app's success with data-driven insights and strategies",
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