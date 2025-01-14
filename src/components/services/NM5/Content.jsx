import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Emotion-Driven Brand Identity",
      description: "We use neuroscience to help your brand connect emotionally with your audience. From your logo to your tagline, everything about your brand will make people feel something special, making it memorable and relatable. Let us help you build a brand that earns trust and emotional connection.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Sensory Branding Solutions",
      description: "We use colors, sounds, and textures to build connections with your audience that they don’t even realize. These sensory cues help people easily recognize your brand and remember it. Work with us to create sensory experiences that stick with your audience.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Value-Based Brand Messaging",
      description: "Using neuroscience, we craft messages that reflect what your audience truly values. We make sure your brand speaks to their desires and dreams, building trust and emotional bonds. Let us help you create brand messages that really connect with your audience.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Consistent Emotional Branding Across Channels",
      description: "Whether it’s a social media post or an in-store experience, we make sure your brand consistently connects emotionally with your audience. Our brain-based research ensures that every point of contact strengthens your brand identity. Let us help you build a complete, emotionally engaging brand.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Storytelling for Emotional Impact",
      description: "We help you tell stories that create a deep emotional connection with your audience. These stories make your brand relatable, keeping it top of mind and helping you build lasting relationships with customers. Let’s create stories that leave a lasting impression.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Emotional Testing and Brand Element Refinement",
      description: "We use brain science tools to test and improve every part of your brand—from your logo to your ads and website designs. We analyze how people emotionally respond and fine-tune your brand to improve connection. Trust us to refine your brand for deeper emotional engagement.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Personalized Brand Strategies",
      description: "We customize branding strategies based on the psychological preferences of your audience. By aligning your brand with their subconscious desires, we help you build stronger connections and set your brand apart in the market. Let’s personalize your branding strategies to create stronger emotional resonanc",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Building Trust Through Transparency",
      description: "We help your brand build trust by promoting honesty and openness. Using neuroscience, we create campaigns that show your brand’s integrity, which is key to establishing a lasting emotional bond. Let’s work together to make your brand one that people trust and admire.",
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