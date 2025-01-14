import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Customized Campaign Strategies",
      description: "After understanding how the brain processes information, we design personalized campaigns targeted to specific consumer segments. Creating messaging that resonates between the subconscious and conscious consumers using neuroscience in marketing and consumer behavior insights. Let us create personalized campaigns that touch your audience's needs and wants. “Want Customized Solutions? Get In Touch”",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/customized-campaigns"
    },
    {
      title: "Data-Driven Content Optimization:",
      description: "We enable neuroscience-based data in optimizing content from websites to advertisements and even social media to drive consumer actions. This process ensures every piece of content is effective in shaping consumer decision-making and boosting engagement. Join us as we make your content the most effective engagement and conversion tool.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Enhanced User-Experience Designs",
      description: "We neuro-optimize even the design and functionality of digital media through websites and applications. We understand how users go through, process and understand and improve design into an intuitive interface with lesser frictions and much more satisfied ones. Let us refine your user experience for seamless interaction with better engagement.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Call to Action Perfecting",
      description: "A good call to action (CTA) is essential for converting leads. Thanks to neuromarketing insights, we optimize your CTAs to evoke a sense of urgency, aligning them with psychological motivators to drive action and conversions.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Conversion Rate Optimization",
      description: "Through neuro-optimized testing and analysis, we are able to identify bottlenecks in your sales funnel, which we then recommend modifications to improve conversion rates. Collaborate with us to ramp up your conversions and achieve tangible growth for your business.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Real-Time Campaign Adjustments",
      description: "Real-time neural optimization ensures that your campaign adjusts according to market trends and consumer behavior. With constant analysis, your campaigns stay relevant, impactful, and continuously maximize ROI at every stage.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "ROI-Centric Campaign Development",
      description: "All of our neuro-optimized marketing campaigns deliver tangible results. Understanding how the consumer thinks and acts is just the beginning. What really counts is having strategies that engage and convert them to deliver the much talked about return on investment in marketing dollars. Transform your outcomes with ROI-centric campaigns designed to deliver success.",
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