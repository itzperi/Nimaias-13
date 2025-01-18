import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MarketingSections = () => {
  const sections = [
    {
      title: "Brand and Identity",
      description: "Did you know businesses with strong branding see a 23% increase in revenue? At Nimais, we understand that creating a unique brand identity is key to standing out. Our streamlined process ensures your brand's consistency across all touchpoints, We specialize in branding for tech startups and retail businesses, addressing pain points like inconsistent visuals and lack of recognition. Whether it's a memorable logo, customized business cards, or professional stationery, we ensure your brand resonates across platforms. Let Nimais help you make a lasting impression—contact us today!",
      link: "/services/neuromarketing",
      services: [
        {
          icon: "/lovable-uploads/Vector.png",
          title: "Tailored Designs",
          description: "We create customized letterheads that bring your brand’s visual identity to life, ensuring a unique look that reflects the essence of your business",
          link: "/Neuro1"
        },
        {
          icon: "/lovable-uploads/Group.png",
          title: "Professional Appeal:",
          description: "With high-quality visuals and thoughtful layouts, we make sure your letterhead exudes professionalism, establishing trust with every letter you send.",
          link: "/Neuro2"
        },
        {
          icon: "/lovable-uploads/Group.png",
          title: "Versatility for All Occasions:",
          description: "Whether for formal communication, client proposals, or invoices, we ensure your letterheads meet every need, while maintaining a consistent and compelling brand presence.",
          link: "/Neuro2"
        }
    ]
  },
];

    return (
      <div className="w-full">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container mx-auto px-4">
              <Link to={section.link} className="group">
                <h2 className="text-4xl font-bold text-center mb-4 hover:text-gray-700 transition-colors">
                  {section.title}
                  <ArrowRight className="inline-block ml-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h2>
              </Link>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                {section.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.services?.map((service, serviceIndex) => (
                  <Link key={serviceIndex} to={service.link}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: serviceIndex * 0.1 }}
                      className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white group hover:scale-[1.02]"
                    >
                      <div className="flex items-start space-x-4">
                        <img 
                          src={service.icon} 
                          alt={service.title} 
                          className="w-8 h-8 object-contain"
                        />
                        <div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-700 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };
  
  export default MarketingSections;