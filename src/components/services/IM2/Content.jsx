import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Instant Customer Interaction",
      description: "Chatbots are available 24/7 to provide quick responses to customers. This means no more long waits for answers, and your customers will always feel like they’re being taken care of. Fast replies lead to happy customers who stay loyal.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Streamlined Transactions",
      description: "With chatbots, customers can make purchases, book appointments, or ask questions all in one place. This makes shopping or getting information super easy. They don’t need to call or wait for an email, which saves time and makes them more likely to complete the action.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Personalized Conversations",
      description: "Chatbots can be designed to talk in a way that feels personal. They can remember past conversations and offer helpful suggestions based on what the customer likes or needs. This helps build a relationship and trust with your customers, making them feel valued and more likely to return.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Cost-Effective Engagement",
      description: "Chatbots help reduce costs by automating simple tasks like answering common questions or processing orders. This way, your team can focus on solving bigger issues, while the chatbot handles the everyday interactions. This keeps your business running smoothly and efficiently.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Boost Customer Loyalty and Increase Sales",
      description: "By using chatbots, you can keep your customers happy and engaged. The quicker you respond and provide a seamless experience, the more likely your customers will come back.Plus, chatbots can help you drive more sales by guiding customers through the purchasing process smoothly.",
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