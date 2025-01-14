import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Data-Driven Design Elements",
      description: "Our neuro-designing services With consumer data and behavioral insight develop design elements that align with audience preferences. From the button placements to font choices, everything design functionality has science backing it for better conversion. Let our precision optimize your marketing materials using data.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Emotionally Engaging Content Layouts",
      description: "We understand that the information processing skills of the brain are engaged to design layouts that facilitate the seamless journey of users through your content. Be it websites, brochures, or advertisement, our design guarantees that the users will feel involved and informed.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Cognitively Friendly User Interfaces",
      description: "We create user interfaces (UI) for websites and apps that are intuitive and reduce cognitive load. Everything is focused on improving the user experience, making it easier for your audience to use your brand.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Multisensory Marketing Designs",
      description: "Our neuro-design comprises integrating auditory stimuli, touch, and visuals as a holistic marketing experience. Such a multisensory approach strengthens your brand's connection with the audience.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Testing and Fine-tuning",
      description: "To validate as well as bring designs to a proven science, we use neuroscience techniques like eye-tracking and heat maps to measure user response. In such ways, your marketing pieces do not only look perfect, they also serve their purposes. Trust us to perfect your design for maximum impact.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
      title: "Interactive and Adaptive Designs",
      description: "We create adaptive and interactive designs, where the user behavior feeds the system in real-time. Thus, enhancing engagement and making the audience feel involved with your brand.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/account-based-marketing"
    },
    {
      title: "Personalized Marketing Materials",
      description: "We have a good understanding of the psychological preferences of your target audience, which significantly enhances the creation of individualized marketing materials that speak to them personally. Let us personalize your designs for better relationships with customers",
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