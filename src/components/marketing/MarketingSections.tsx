import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MarketingSections = () => {
  const sections = [
    {
      title: "Neuromarketing",
      description: "Nimais helps you connect with your customers by understanding their emotions and needs. We use Neuromarketing to create campaigns that build trust and strengthen your brand.",
      link: "/services/neuromarketing",
      services: [
        {
          icon: "/lovable-uploads/Vector.png",
          title: "Neuromarketing Consultation",
          description: "Get the benefit of experts' insights into how to apply neuroscience in your marketing strategies for improved results.",
          link: "/Neuro1"
        },
        {
          icon: "/lovable-uploads/Group.png",
          title: "Neuromarketing Research",
          description: "Apply the latest research methodologies and understand consumer behavior to design a better marketing strategy.",
          link: "/Neuro2"
        },
        {
          icon: "/lovable-uploads/Group (1).png",
          title: "Neuro Optimization",
          description: "Make your campaigns efficient with neuro-optimized campaigns to reach better results.",
          link: "/Neuro3"
        },
        {
          icon: "/lovable-uploads/Group (2).png",
          title: "Neuro-Advertising",
          description: "Design advertisements creating a better appeal to the consumers' innermost truths, tapping deep into their subconscious to present or sell your product.",
          link: "/Neuro4"
        },
        {
          icon: "/lovable-uploads/Frame.png",
          title: "Neuro-branding",
          description: "Connect the brand to the emotional side of the audience by applying neuroscientific principles.",
          link: "/Neuro5"
        },
        {
          icon: "/lovable-uploads/Group (3).png",
          title: "Neuro-Designing",
          description: "Prepare marketing pieces with efficient better marketing efforts appealing to the brains' decision-making processes.",
          link: "/Neuro6"
        },
        {
          icon: "/lovable-uploads/Group (4).png",
          title: "Neuro Testing",
          description: "Test your campaigns with neuroscience tools to understand emotional reactions and tweak your campaigns.",
          link: "/Neuro7"
        },
        {
          icon: "/lovable-uploads/Group (5).png",
          title: "Neuro Sales",
          description: "Use neuromarketing techniques to perfect the sales process and at the same time achieve conversion improvement and growth.",
          link: "/Neuro8"
        },
      ]
    },
    {
      title: "Digital Marketing",
      description: "With Nimais’s Digital Marketing services, we help your brand connect with the right audience and build trust. From improving your website’s search rankings to running targeted ads, we ensure every strategy is crafted to achieve real, measurable results. Ready to grow your online presence and drive more traffic? Let’s work together to make your brand shine.",
      services: [
        {
          icon: "/lovable-uploads/DM1.png",
          title: "Search Engine Optimization (SEO)",
          description: "SEO increases your visibility to attract visitors to your website who are searching for relevantes keywords. Let's help you rank higher and gain more customers.",
          link: "/DM1"
        },
        {
          icon: "/lovable-uploads/DM2.png",
          title: "Pay-Per-Click Advertising (PPC)",
          description: "PPC brings instant traffic and web exposure with different kinds of targeted advertising either on Google or social media platforms. Let's set your ads up to give you the best return on investment",
          link: "/DM2"
        },
        {
          icon: "/lovable-uploads/DM3.png",
          title: "Social Media Marketing (SMM)",
          description: "This wraps up your brand in a presence within social media sites like Facebook and Instagram. Let's pen down a strategy for how we would connect with your audience.",
          link: "/DM3"
        },
        {
          icon: "/lovable-uploads/DM4.png",
          title: "Content Marketing",
          description: "Content marketing puts a smile on your face through blogs or white papers. Let us develop engaging and converting content for your audience.",
          link: "/DM4"
        },
        {
          icon: "/lovable-uploads/DM5.png",
          title: "Email Marketing",
          description: "Email marketing hatches prospects that build up customer loyalty to the brand. Let's work on campaigns that will leave impressions.",
          link: "/DM5"
        },
        {
          icon: "/lovable-uploads/DM6.png",
          title: "Mobile Marketing",
          description: "Mobile marketing reaches people by sending SMS messages and advertising via mobile-friendly media. Let's get your audience on the move.",
          link: "/DM6"
        },
        {
          icon: "/lovable-uploads/DM7.png",
          title: "Affiliate Marketing",
          description: "Affiliate Marketing allows you to endorse other people or organizations so that they attract traffic to your site and switch it into some cool conversions for your brand; it enables extending yourbrand reach with increased sales!",
          link: "/DM7"
        },
        {
          icon: "/lovable-uploads/DM8.png",
          title: "Influencer Marketing",
          description: "Influencer Marketing is the hype of tapping trusted personas into such an extensive visibility. Well, connect with those influencers now to increase your credibility!",
          link: "/DM8"
        },
        {
          icon: "/lovable-uploads/DM9.png",
          title: "Video Marketing",
          description: "Video marketing actively involves your audience but includes visual advertisements like video tutorials. Create exciting videos and create a strong brand awareness with conversions!",
          link: "/DM9"
        },
        {
          icon: "/lovable-uploads/DM10.png",
          title: "Mobile App Marketing",
          description: "Mobile app marketing promotes your app and turns users to engage through all these amazing techniques. Really boost and download your app today!",
          link: "/DM10"
        },
        {
          icon: "/lovable-uploads/DM11.png",
          title: "Voice search marketing",
          description: "Video marketing actively involves your audience but includes visual advertisements like video tutorials. Create exciting videos and create a strong brand awareness with conversions!",
          link: "/DM11"
        },
        {
          icon: "/lovable-uploads/DM12.png",
          title: "Programmatic Advertising",
          description: "Using programmatic advertising, it would save time because of automating online buying ads where companies could set themselves up for better targeting and cost efficacy. Reach your audience, by time, right now, and precise automatics!",
          link: "/DM12"
        },
        {
          icon: "/lovable-uploads/DM11.png",
          title: "Social Media Management",
          description: " Nimais manages your social media with customized strategies to boost engagementand brand visibility. We craft content that resonates with your audience and ensuresyour brand stays top of mind. Focus on your business while we optimize your onlinepresence for maximum impact",
          link: "/DM13"
        },
        {
          icon: "/lovable-uploads/DM12.png",
          title: "Social Media Optimization",
          description: "Nimais enhances your social profiles to attract the right audience and increaseengagement. By analyzing trends and customer behavior, we optimize your content forbetter reach. We use targeted strategies to help your brand stand out and drivemeaningful results.",
          link: "/DM14"
        }
      ]
    },
    {
      title: "Advertising",
      description: "Effective advertising can boost customer acquisition by over 70% while reducing costs by 30%.At Nimais, we provide tailored solutions, including paid media campaigns, Google Adsmanagement, and creative advertising designs, to address challenges like low ROI and poor targeting. With our future-focused strategies and 24/7 customer support, we help brands achieve 60% and more higher conversion rates and build lasting impact. Let Nimais elevate your advertising efforts—start creating success today!",
      link: "/services/neuromarketing",
      services: [
        {
          icon: "/lovable-uploads/Vector.png",
          title: "Paid Media Campaigns",
          description: " With Nimais' media planning and buying expertise, we strategically place ads across both digital and traditeffective placements tailored to your brand’s goals, helping you get the most value out of your ad spend.  ",
          link: "/A1"
        },
        {
          icon: "/lovable-uploads/Group (1).png",
          title: "Media Planning and Buying ",
          description: "With Nimais' media planning and buying expertise, we strategically place ads across both digital and traditional channels. We ensure cost-effective placements tailored to your brand’s goals, helping you get the most value out of your ad spend.",
          link: "/A2"
        },
        {
          icon: "/lovable-uploads/Group (2).png",
          title: "Digital Advertising",
          description: "Nimais runs impactful digital advertising campaigns across display ads, social media, and video platforms to enhance your brand’s digital presence. We focus on generating quality traffic and boosting your online visibility. ",
          link: "/A3"
        },
        {
          icon: "/lovable-uploads/Frame.png",
          title: "Google Ads Management ",
          description: "Optimize your Google Ads campaigns with Nimais’ expert management. We focus on keyword targeting and bid optimization to drive more visibility and conversions while lowering your ad costs for better ROI. ",
          link: "/A4"
        },
        {
          icon: "/lovable-uploads/Group (3).png",
          title: "Social Media Advertising",
          description: "Nimais creates customized social media ad campaigns on platforms like Facebook, Instagram, and LinkedIn. We help you connect with your audience, increase engagement, and build stronger brand awareness across these channels. ",
          link: "/A5"
        },
        {
          icon: "/lovable-uploads/Group (4).png",
          title: "Amazon marketing. ",
          description: "Boost your Amazon sales by up to 50% with Nimais' expert marketing strategies. From Amazon PPC to SEO optimization, we provide tailored solutions to enhance your brand's visibility and performance. ",
          link: "/A6"
        },
      ]
    },
    {
      title: "Strategic Marketing",
      description: "Using programmatic advertising, it would save time because of automating online buying ads where companies could set themselves up for better targeting and cost efficacy. Reach your audience, by time, right now, and precise automatics!",
      services: [
        {
          icon: "/lovable-uploads/7b5df6a5-eebe-429d-a2f8-126a4a41ba57.png",
          title: "B2B Marketing",
          description: "Create campaigns that will foster longstanding business relationships. Help me reach those important clients to increase your business growth.",
          link: "/services/b2b-marketing"
        },
        {
          icon: "/lovable-uploads/90dd2ef8-fdb5-457f-97cf-80603daa34d4.png",
          title: "B2C Marketing",
          description: "Focus your efforts on the right consumer audience with the appropriate strategy. Let's write B2C campaigns to customers who will convert into sales.",
          link: "/SM2"
        },
        {
          icon: "/lovable-uploads/989b7975-db23-4503-82e3-1e42b855ba2a.png",
          title: "Market Research",
          description: "Understand your consumer and competitor edge. Let's sit together for an analytical review of data for understanding strategic marketing and business decisions.",
          link: "/SM3"
        }
      ]
    },
    {
      title: "Innovative Marketing",
      description: "Innovative marketing relies on modern technology and tools such as Artificial Intelligence, virtual reality (VR) technologies, augmented reality (AR) applications, and gamification to create up-to-date, original, and interactive campaigns that personalize experiences and maintain customer engagement. We design such cutting-edge tactics that make your brand ahead of the competition and help visibility. You want to make innovations and fire up the raison d'etre? Let's develop your brand's future.",
      services: [
        {
          icon: "/lovable-uploads/d7783e04-215f-4a12-b779-3d7bb0d38f30.png",
          title: "AI Marketing",
          description: "Allow contemporary techniques to be included in intelligent AIs to organize a complete personalization campaign as well as automation and always ensure customer engagement is at an all-time high.",
          link: "/IM1"
        },
        {
          icon: "/lovable-uploads/a8854b21-250e-4aa0-aaa6-f6fad5fc1472.png",
          title: "Chatbot Marketing",
          description: "Talk with your customers and give answers and accessible transactions within the best effective use of a chat-bot to get through them any time you want.",
          link: "/IM2"
        },
        {
          icon: "/lovable-uploads/IM3.png",
          title: "Virtual Reality Marketing",
          description: "Building immersive and interactive experiences beyond the promises of bringing your audience into action as active parts of your organization in terms of brand engagement-they happen by coming in virtual reality.",
          link: "/IM3"
        },
        {
          icon: "/lovable-uploads/IM4.png",
          title: "Augmented Reality (AR) Marketing",
          description: "Create up some really cool enhancing immersive and engaging AR experiences and have your campaigns become memorable because of interactivity for your audience.",
          link: "/IM4"
        },
        {
          icon: "/lovable-uploads/IM5.png",
          title: "Gamification Marketing",
          description: "capture moods from campaigns through some whiff of playism that evoked engagement, cultivated loyalty, and brought interaction between brands and their target customers.",
          link: "/IM5"
        }
      ]
    },
    {
      title: "Targeted Marketing",
      description: "Specific marketing refers to the targeted strategy of your business; be it for the launch of products or events, maintaining customer loyalty, or disaster management, we are there to give a voice to your audience. Making possible and long-lasting successful events and strengthening bonds with your brand so found will, however, need to be customized to your brand.",
      services: [
        {
          icon: "/lovable-uploads/3bfd031b-d366-498f-bdf2-9ffc21a055b4.png",
          title: "Event Marketing",
          description: "Organize and promote memorable events of every type-from exhibitions to webinars-give your audience a real show and leave an everlasting memory.",
          link: "/TM1"
        },
        {
          icon: "/lovable-uploads/0ac6a20b-47b6-44c8-a745-b90c74ef17df.png",
          title: "Experiential Marketing",
          description: "Make or bring memories strong and emotional with your audience, have them experience once-in-a-lifetime experiences that would lead to the ultimate sealing of their brand.",
          link: "/TM2"
        },
        {
          icon: "/lovable-uploads/TM3.png",
          title: "Seasonal Marketing",
          description: "Season waves create engaging and brilliant marketing avenues with which traffic will come to your doorstep and help with visibility for the brand. Let's package your brand for such times of the year",
          link: "/TM3"
        }
      ]
    },
    {
      title: "Performance and Data-Driven marketing",
      description: "It works with performance data-driven marketing in focusing on actual business results using targeted data-driven techniques. By performance metrics, we help businesses drive leads, sales, and other key goals. What our approach ensures is having every decision influenced by actionable insights, which allow you to optimize and grow with precision. Do you want to maximize the ROI and scale your business efficiently? Let's leverage data for your marketing goals.",
      services: [
        {
          icon: "/lovable-uploads/PM1.png",
          title: "Performance Marketing",
          description: "Deliver tangible results focused on campaigns that do yield results but targeted at specific performance metrics such as leads, conversions, and sales. Let us defy logic today.",
          link: "/PD1"
        },
        {
          icon: "/lovable-uploads/PM2.png",
          title: "Conversion Rate Optimization (CRO)",
          description: "To improve and optimize the user experience on the site; better operation will produce even more conversions. Convert more visitors into new customers with proven strategies.",
          link: "/PD2"
        }
      ]
    },
    {
      title: "Leads and Sales",
      description: "At Nimais, we offer comprehensive Lead Generation and Sales Enablement services to help your business thrive. From attracting high-quality leads to empowering your sales team, we ensure your growth through tailored strategies that lead to measurable success.",
      services: [
        {
          icon: "/lovable-uploads/LS1.png",
          title: "Lead Generation",
          description: "Producing high-quality leads that would be nurtured and eventually converted into loyal customers",
          link: "/LS1"
        },
        {
          icon: "/lovable-uploads/LS2.png",
          title: "Sales and lead generation",
          description: "Recognize and address the prospects that have the most potential to be converted into long-term business for you.",
          link: "/LS2"
        },
        {
          icon: "/lovable-uploads/LS3.png",
          title: "Sales Enablement",
          description: "Arm your sales team with just the correct tools, content, and insights so that they will close deals faster and more profitably.",
          link: "/LS3"
        },
        {
          icon: "/lovable-uploads/LS4.png",
          title: "Market Development",
          description: "For your future viability, develop and enlarge your market and set up strategic alliances.",
          link: "/LS4"
        },
        {
          icon: "/lovable-uploads/LS5.png",
          title: "Sales Development Representation",
          description: "Supplement your campaign operations with value-based expert outsourcing representation creating opportunities for new openings and growth",
          link: "/Peri"
        },
        {
          icon: "/lovable-uploads/LS5.png",
          title: " Business development",
          description: "Nimais drives business growth with tailored strategies that focus on new opportunitiesand building strong partnerships. Ready to scale your business? Let’s grow togetherwith Nimais! ",
          link: "/Peri1"
        }
      ]
    },
    {
      title: "Communications",
      description: "Communication becomes blood, then oxygen leaves any reputable brand in everyday human life: oxygen because it is fresh, fluid, ever-present, while blood is for life and supplies nutrients. So our communications will carry that message through every possible means that may lead to that point. Let us help you build your brand voice and create those long-lived relationships for success with your audience",
      services: [
        {
          icon: "/lovable-uploads/730d71d9-bb3a-411c-b898-dd3bfb8a18b9.png",
          title: "Integrated Communications",
          description: "Align all communications across platforms for maximum efficiency in mutual connections.",
          link: "/C1"
        },
        {
          icon: "/lovable-uploads/d0522009-f643-4739-8a94-875cbf3cece8.png",
          title: "Online Reputation Management",
          description: "Secure and replenish the online space of your brand to ensure it is perceived positively across all digital platforms.",
          link: "/C2"
        },
        {
          icon: "/lovable-uploads/a8854b21-250e-4aa0-aaa6-f6fad5fc1472.png",
          title: "Employer Branding",
          description: "Brand your organization as an employer of choice and draw the best talent to your organization.",
          link: "/C3"
        },
        {
          icon: "/lovable-uploads/f8ef87fa-d03f-42b9-af65-0c4931343998.png",
          title: "Shopper Marketing",
          description: "Tap into the personal wants and needs of shoppers by creating customized campaigns that affect their purchase decisions.",
          link: "/C4"
        }
      ]
    },
    {
      title: "Public Relations",
      description: "Nimais offers expert Public Relations services to build lasting connections and a strong brand reputation. From Crisis Management to Media Development and Influencer Relations, we ensure your message is clear and impactful. Our Press Release services guarantee your news gets noticed.",
      services: [
        {
          icon: "/lovable-uploads/PR1.png",
          title: "Media Develops",
          description: "An enhanced press profile by effective outreach and publicity creates your bigger visibility.",
          link: "/PR1"
        },
        {
          icon: "/lovable-uploads/PR2.png",
          title: "Crisis Management",
          description: "Force name protection against proactive plans that would eventually minimize the fallout from the PR crisis.",
          link: "/PR2"
        },
        {
          icon: "/lovable-uploads/PR3.png",
          title: "Brand Reputation Management",
          description: "Develop and design the brand positively with strategic communication and brand design.",
          link: "/PR3"
        },
        {
          icon: "/lovable-uploads/PR4.png",
          title: "Write Press Release",
          description: "Acrobatics on a superlative level that you would not be able to deny would have to be tied into press releases that matter in communicating important brand messages.",
          link: "/PR4"
        },
        {
          icon: "/lovable-uploads/PR5.png",
          title: "Influencer Relations",
          description: "I'd employ the celebrity power and bring in respectability in brand marketing.",
          link: "/PR5"
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
