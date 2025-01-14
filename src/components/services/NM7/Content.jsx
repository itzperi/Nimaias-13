import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Emotional Response Analysis",
      description: "Using neuroscience tools, we measure how people emotionally react to your campaigns. This helps us understand how the audience feels and identify the elements that trigger strong emotional responses. Partner with us to refine your campaigns and create a deep emotional connection with your audience.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Eye-Tracking for Attention Mapping",
      description: "Eye-tracking technology shows where people focus their attention in your ads, websites, and other marketing materials. With this insight, we can optimize designs, visuals, and messages to capture attention effectively. Let’s use this technology to create designs that keep your audience engaged from the very first look.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Behavioral Testing and User Interaction",
      description: "Help potential customers move from initial interest to loyal clients. We help build trust and maintain relationships through consistent, targeted messaging that nurtures leads effectively.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Testing for Subconscious Preferences",
      description: "Neuro tools help us uncover subconscious preferences by testing colors, messages, and layouts. This ensures your campaigns align with the psychological triggers that work best. Let’s align your campaigns with what resonates most deeply with your audience.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Multisensory Testing of Campaigns",
      description: "We test how different sensory elements—such as visuals, sounds, and textures—work together in your campaigns. This approach helps us create a richer, more engaging experience. Work with us to build campaigns that connect with your audience on all levels.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Real-Time Campaign Adjustments",
      description: "We believe in constant refinement. With real-time data from neuroscience tools, we adjust your campaigns on the go to keep them performing at their best. Trust us to maintain and improve your campaign performance continuously.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "A/B Testing with Neuroscience Insights",
      description: "We enhance traditional A/B testing by measuring emotional and cognitive responses. This deeper analysis helps us understand which version of your campaign works best. Let us guide you with data-backed decisions that improve your campaign’s success.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Predictive Campaign Success Metrics",
      description: "Neuro analytics help us predict the success of your campaigns before they launch, reducing risks and ensuring the strategies with the highest potential return are implemented. Stay ahead of your competitors with our predictive testing services and make confident marketing decisions.",
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