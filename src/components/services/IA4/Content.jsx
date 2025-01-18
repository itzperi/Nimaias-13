import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Brand Mascots for Social Media Engagement",
      description: "Enhance your social media branding with a custom mascot that brings your brand to life, making your online presence more interactive and relatable. Mascots are a great way to increase engagement and audience loyalty on platforms like Instagram, Facebook, and Twitter.",
      image: "/lovable-uploads/52f10db3-a233-4ba9-b476-f62188eb573a.png",
      link: "/services/b2b-marketing/customized-campaigns"
    },
    {
      title: "Custom Character Designs for Campaigns",
      description: "Whether you're launching a new product or running a marketing campaign, our custom character designs will help tell your brand's story and capture your audience’s attention.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Illustrated Characters for Websites and Apps",
      description: "Our illustrated characters are designed for seamless integration into websites and mobile apps, adding a unique visual identity that enhances user experience and reflects your brand's personality.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
        title: "Mascot Designs for Events and Promotions",
        description: "Bring energy to your events or promotions with custom mascot designs that add excitement and engagement, making your brand memorable to your audience.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/account-based-marketing"
      },
      {
        title: "Character Design for Corporate Branding",
        description: "Create a professional and relatable character that embodies your brand's ethos. Our character design for corporate branding services ensure consistency across all marketing materials and digital assets.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/account-based-marketing"
      },
    {
      title: "Social Media Avatar Design",
      description: "Stand out on social platforms with personalized avatar designs that perfectly match your brand’s voice and enhance your profile or page appearance. Our character and mascot development services extend beyond just a design. We craft a persona that aligns with your brand identity for social media, elevating your marketing strategies and ensuring your brand resonates with your audience. Get started today and let us create the perfect character for your brand!",
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