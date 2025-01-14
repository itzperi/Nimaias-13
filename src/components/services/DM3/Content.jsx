import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "WhatsApp Marketing",
      description: "Reach your customers directly through personalized messaging campaigns. Utilize broadcast lists, group chats, and automated chatbots to deliver promotional updates, offers, and support. Build stronger customer relationships with quick responses and real-time interaction on a platform your audience trusts. Ideal for small businesses and localized marketing efforts.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "LinkedIn Marketing",
      description: "Elevate your brand’s professional presence with targeted B2B campaigns. Share industry insights, articles, and company updates to build credibility and thought leadership. Leverage LinkedIn Ads and InMail for lead generation and connecting with key decision-makers. Build and grow a professional network for recruiting, partnerships, and business development.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Facebook Marketing",
      description: "Reach a vast audience with personalized ad campaigns, including carousel, video, and lead generation ads. Build an engaging brand presence through community pages, posts, and interactive groups. Run retargeting campaigns to re-engage past visitors and drive conversions. Utilize Facebook Insights to track performance and optimize campaigns for better ROI",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "X (formerly Twitter) Marketing",
      description: "Engage your audience in real-time with timely updates, trending hashtags, and impactful tweets. Build brand personality with interactive polls, replies, and conversations. Run targeted ad campaigns like promoted tweets and trends to boost visibility. Use Twitter analytics to refine your strategies and improve campaign effectiveness.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Instagram Marketing",
      description: "We create visually stunning content, including posts, stories, reels, and IGTV, to captivate your audience. Collaborate with influencers to amplify your reach and credibility. Utilize shoppable posts and links in stories to drive e-commerce sales. Run engaging ad campaigns that is personalized for Instagram’s highly visual audience.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "YouTube Marketing",
      description: "We produce high-quality video content, such as tutorials, ads, reviews, and storytelling campaigns. Optimize your channel with SEO-friendly titles, tags, and descriptions for better discoverability. Use YouTube Ads to reach potential customers while they consume video content. Build long-term engagement by encouraging subscribers and fostering a loyal community",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Pinterest Marketing",
      description: "Share creative and inspiring visual content to attract users to your products and services. Create pinboards and pins optimized for keywords and hashtags to drive organic traffic. Leverage Pinterest Ads to target niche audiences with a high conversion potential. Ideal for industries like fashion, design, home décor, food, and travel.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Snapchat Marketing",
      description: "Leverage Snapchat’s creative tools, such as custom geofilters, AR lenses, and ads, to connect with a younger demographic. Create engaging and fun stories that highlight your brand’s personality. Use Snapchat Ads Manager to target users by location, interests, and behaviors. Ideal for brands looking to stay relevant with Gen Z and millennials",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Telegram Marketing",
      description: "Engage directly with your audience through Telegram groups and channels. Share promotional messages, updates, and exclusive content to a dedicated subscriber base. Utilize Telegram bots for automated messaging and customer support. Ideal for communities, e-commerce updates, and event promotions.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Reddit Marketing",
      description: "We build authenticity by participating in relevant subreddit discussions related to your industry. Run Reddit Ads to promote your brand to specific interest groups. Share value-driven content that subtly integrates your brand or services. Engage niche audiences by providing genuine insights and solutions",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Quora Marketing",
      description: "We build authority by answering questions related to your niche, showcasing your expertise. Share insightful and helpful responses while subtly linking to your products or services. Use Quora Ads to promote content or drive traffic to your website. Establish your brand as a trusted solution provider in your industry.",
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