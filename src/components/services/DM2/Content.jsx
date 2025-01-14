import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Targeted Ad Campaigns for Instant Results",
      description: "We create PPC campaigns that bring quick results by targeting the right audience. PPC advertising allows your brand to instantly appear in front of specific groups based on factors like location, age, interests, and what they’re searching for. Reach your most important audience and get measurable results through well-planned PPC campaigns.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Keyword Research and Bid Strategy",
      description: "Effective PPC campaigns rely on choosing the right keywords. We identify the best-performing keywords that match your audience’s search behavior and balance the cost of clicks with return on investment. Use competitive bidding strategies to keep your ads at the top of search results without overspending.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Ad Copy and Creative Optimization",
      description: "Strong ad copy and visuals grab attention and drive clicks. We create headlines, descriptions, and calls to action that appeal to your target audience, paired with eye-catching graphics that reflect your brand. We continually optimize ads through split testing for better results.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Landing Page Optimization",
      description: "After a click, a smooth experience is key to converting visitors into customers. Our optimized landing pages are designed to match your PPC campaigns with clear messaging and a strong call to action, increasing your conversion rate and maximizing the value of your ad spend.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Performance Tracking and Analytics",
      description: "PPC campaigns rely on data to succeed. We track key metrics such as click-through rates, conversion rates, and cost per acquisition using Google Analytics and other tools. This allows us to adjust campaigns in real-time for optimal performance. Stay ahead of the competition with insights and continuous campaign improvement.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nuturing"
    },
    {
      title: "Retargeting and Remarketing",
      description: "Don't lose potential customers who left without buying. We focus on building loyal customers who stay, trust, and grow with your brand. We use retargeting to bring back users who have engaged with your ads or website. Ads, emails, and dynamic ads keep your brand top of mind, encouraging them to complete their purchase.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Platform-Specific Advertising Expertise",
      description: "Each platform requires a different advertising strategy. From Google’s search and display ads to Facebook carousel ads and LinkedIn lead generation forms, we tailor our approach to each platform. Maximize your impact and ROI by leveraging our expertise across various platforms.",
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