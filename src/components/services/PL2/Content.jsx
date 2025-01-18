import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Product Packaging Design",
      description: "Our creative brand packaging service includes product packaging design that perfectly complements your label, ensuring a unified and compelling presentation. We focus on delivering top packaging design solutions that reflect your brand’s identity and capture consumer attention.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Phone Case Design",
      description: "Our innovative brand packaging extends to phone case designs, delivering unique and functional designs that cater to your specific market. This includes stylish, durable cases that align with your branding and stand out from the competition.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Album Cover Design",
      description: "We offer custom product packaging designs for album covers, ensuring your music's visual identity matches its auditory impact. Whether you're an indie artist or part of a larger label, our designs help your album speak volumes visually. ",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
        title: "Brand Identity Design",
        description: "As a full-service advertising agency, we offer comprehensive creative packaging design services that align with your overall brand identity to build a consistent and recognizable presence. Our brand identity design includes logo creation, color palette development, and font styling to ensure all elements work harmoniously.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Point-of-Sale Display Design",
      description: "Our creative advertising agency also specializes in designing point-of-sale displays that grab attention and drive sales. These designs are tailored to create a powerful in-store presence for your product, increasing visibility and boosting your brand’s impact.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
        title: "Retail Packaging Solutions",
        description: "We offer unique packaging solutions tailored for retail environments, ensuring your product not only stands out on the shelf but also adheres to retail standards. Our solutions combine function and form to create packaging that’s both appealing and practical.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/lead-nurturing"
      },
      {
        title: "E-commerce Packaging Design",
        description: "With the rise of online shopping, we create best packaging design solutions for e-commerce businesses. We focus on providing packaging that’s visually appealing, protective during shipping, and optimized for customer unboxing experiences. ",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/greater-credibility"
      },
      {
          title: "Sustainable Packaging Design",
          description: "In addition to innovative brand packaging, we offer eco-friendly packaging designs that reflect your commitment to sustainability. From biodegradable materials to minimalistic designs, we create packaging that supports both your brand’s image and the environment.",
          image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
          link: "/services/b2b-marketing/greater-credibility"
      },
      {
        title: "Product Label Printing",
        description: "Our services also include product label printing, where we take your custom label artwork and bring it to life with high-quality printing techniques. This ensures your labels maintain their vibrancy and durability, enhancing the overall presentation of your product.",
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