import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Personalized Tattoo Artwork Design for Special Occasions",
      description: "We offer personalized tattoo design services tailored for significant moments, whether it’s a commemorative tattoo for a loved one or a special event tattoo marking an important date. Our custom designs ensure that your tattoo captures the essence of the occasion in a unique way.",
      image: "/lovable-uploads/52f10db3-a233-4ba9-b476-f62188eb573a.png",
      link: "/services/b2b-marketing/customized-campaigns"
    },
    {
      title: "Custom Tattoo Illustrations for Artistic Expression",
      description: "Our custom tattoo illustrations bring out the deepest layers of creativity in every design. From abstract tattoo art to symbolic tattoo drawings, our designers create tattoos that serve as a visual representation of your inner thoughts and artistic expression.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/lead-nurturing"
    },
    {
      title: "Unique Tattoo Design for Meaningful Stories",
      description: "Our designs are never just tattoos; they are visual stories. We focus on crafting designs that reflect personal journeys, emotions, or values through unique tattoo artwork. Whether it’s a meaningful quote or an intricate symbol, we create tattoos that communicate your story.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
      link: "/services/b2b-marketing/greater-credibility"
    },
    {
        title: "Digital Artwork for Tattoo Mockups",
        description: "Before getting inked, visualize your tattoo design with our digital tattoo mockups. We provide Photoshop digital artwork services that allow you to see your tattoo in detail, ensuring it meets your expectations before the tattooing process begins.",
        image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png",
        link: "/services/b2b-marketing/greater-credibility"
      },
    {
      title: "Custom Sleeve Tattoo Designs for Full-Body Art",
      description: "For those seeking large-scale designs, we offer custom sleeve tattoo designs that are bold, cohesive, and beautifully detailed. Our designers specialize in creating comprehensive tattoo artwork for full-body sleeves that flow seamlessly and tell a compelling story.",
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