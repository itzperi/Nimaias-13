import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Targeted Email Campaigns for Better Engagement",
      description: "Email marketing helps reach your audience with personalized messages like newsletters, promotions, and product updates that are relevant to their needs. We ensure your emails connect with the right people and increase engagement.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Automated Email Sequences",
      description: "Streamline your processes with automated email workflows that nurture leads and keep your audience engaged at every stage of their journey. From welcoming new subscribers to sending re-engagement messages, automation ensures your emails are timely and consistent.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Drip Campaigns for Lead Nurturing",
      description:"With drip campaigns, you can stay in touch with customers over time, sending a series of helpful emails. We deliver the right message at the right moment, keeping your brand top-of-mind and guiding customers toward a purchase.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Creating Engaging Email Content",
      description: "Maximize campaign impact by dividing your audience based on demographics, behavior, or preferences. By tailoring messages to different segments, we ensure that each email feels personal and relevant.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Responsive Email Design",
      description: "We make sure your emails look great on any device, from desktops to mobile phones, with responsive design templates. This ensures a seamless experience for your readers, regardless of where they open the email.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "A/B Testing for Email Optimization",
      description: "A/B testing helps us find the best-performing elements in your emails, like subject lines or images. With data-driven insights, we continually refine campaigns to improve results.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Data Analysis for Better Results",
      description: "We track important metrics like open rates, click-through rates, and conversions to evaluate your email campaigns. Our data-driven approach helps identify areas for improvement and optimize future campaigns for better performance.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Building Loyalty and Retention",
      description: "Focus on customer retention with special offers and personalized messages. We help you develop loyalty programs that encourage repeat business and keep customers engaged long-term.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Compliance with Privacy Regulations",
      description: "We ensure your email marketing campaigns are fully compliant with privacy regulations like GDPR and CAN-SPAM. Your audience’s trust is essential, so we make sure consent is obtained, and privacy is respected in every step of the campaign.",
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