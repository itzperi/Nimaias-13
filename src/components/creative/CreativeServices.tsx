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
          title: "Stationery Development",
          description: "Custom stationery is crucial for maintaining brand professionalism and making a lasting impression. At Nimais, we offer high-quality stationery designs that align with your brand’s identity. Ready to elevate your business image? Start your stationery design with Nimais today!",
          link: "/BI1"
        },
        {
          icon: "/lovable-uploads/Group.png",
          title: "Letterhead Design",
          description: "A unique letterhead is key to projecting professionalism. Nimais creates custom letterheads that reflect your brand’s personality and values. Strengthen your brand identity today—start designing your letterhead with Nimais!",
          link: "/BI2"
        },
        {
          icon: "/lovable-uploads/Group.png",
          title: "Envelope Production",
          description: "A unique letterhead is key to projecting professionalism. Nimais creates custom letterheads that reflect your brand’s personality and values. Strengthen your brand identity today—start designing your letterhead with Nimais!",
          link: "/BI3"
        },
        {
          icon: "/lovable-uploads/Group (1).png",
          title: "Logo Designing",
          description: "A strong logo builds trust and recognition for your brand. At Nimais, we design logos that perfectly capture your brand’s essence. Ready to strengthen your brand’s identity? Let’s create a logo that stands out!",
          link: "/BI4"
        },
        {
          icon: "/lovable-uploads/Group (2).png",
          title: "Business Cards Creation",
          description: "Business cards speak volumes about your brand. Nimais designs unique business cards that leave a lasting impression. Stand out and represent your brand professionally—start your design with Nimais today!",
          link: "/BI5"
        },
        {
          icon: "/lovable-uploads/Frame.png",
          title: "Logo and Business Card Creation",
          description: "A cohesive logo and business card design ensures consistency and builds trust. Nimais provides custom designs that unite your brand’s identity. Ready to establish your brand’s image? Let’s create a unified design with Nimais!",
          link: "/BI6"
        },
        {
          icon: "/lovable-uploads/Frame.png",
          title: "Logo and Brand Identity",
          description: "Your brand’s identity is more than just a logo. Nimais offers full brand identity packages, aligning logos, colors, and typography for a cohesive image. Start building a professional, trustworthy brand identity today with Nimais!",
          link: "/BI7"
        },
        {
          icon: "/lovable-uploads/Frame.png",
          title: "Logo and Social Media Package",
          description: "Your online presence matters. Nimais offers logo and social media branding packages to create consistency across platforms. Elevate your online image today—let Nimais boost your social media presence!",
          link: "/BI8"
        }
      ]
    },
    {
      title: "Business and Advertising",
      description: "Well-designed advertisements increase conversion rates by up to 30%? At Nimais, we specialize in creative advertising solutions that captivate audiences and communicate your message clearly. From presentation design to eye-catching posters and engaging catalogs, we help your business stand out. Our tailored solutions, such as custom newspaper ads, affordable advertising solutions and newsletters, ensure your brand gets noticed and drives results. Transform your advertising strategy with Nimais—get started today!",
      link: "/services/neuromarketing",
      services: [
        {
          icon: "/lovable-uploads/DM1.png",
          title: "Presentation Design",
          description: "Engaging presentations communicate your message effectively and leave a lasting impression. Nimais designs custom presentations that represent your brand professionally. Ready to impress your audience? Let’s design your presentation today!",
          link: "/BA1"
        },
        {
          icon: "/lovable-uploads/DM2.png",
          title: "Poster Creation",
          description: "Effective posters grab attention and communicate your message visually. Nimais creates posters tailored to your brand style. Need an eye-catching poster design? Start creating with Nimais today!",
          link: "/BA2"
        },
        {
          icon: "/lovable-uploads/DM3.png",
          title: "Catalog Layout",
          description: "A well-designed catalog enhances your brand’s image and makes it easy for customers to navigate. Nimais offers custom catalog layouts that reflect your brand’s professionalism. Ready to elevate your marketing? Contact us for your custom design today!",
          link: "/BA3"
        },
        {
          icon: "/lovable-uploads/DM4.png",
          title: "Leaflet Creation",
          description: "Leaflets are an impactful tool to communicate your offer. Nimais designs concise, visually appealing leaflets that represent your brand. Need a branded leaflet that works? Let’s design one today!",
          link: "/BA4"
        },
        {
          icon: "/lovable-uploads/DM5.png",
          title: "Newspaper Advertisement Design",
          description: "Stand out with custom-designed newspaper ads that capture attention and communicate your brand’s message. Nimais creates ads that resonate with your audience. Get started on your advertisement design with Nimais today!",
          link: "/BA5"
        },
        {
          icon: "/lovable-uploads/DM6.png",
          title: "Advertisement Design",
          description: "Nimais creates visually stunning and effective ads that grab attention and drive conversions. Ready for an ad that works? Start designing with Nimais to boost your brand’s visibility!",
          link: "/BA6"
        },
        {
          icon: "/lovable-uploads/DM7.png",
          title: "Newsletter Layout",
          description: "Custom-designed newsletters keep your audience informed and engaged while reflecting your brand’s identity. Nimais designs easy-to-read newsletters. Need a custom newsletter? Let’s design one today!",
          link: "/BA7"
        },
        {
          icon: "/lovable-uploads/DM8.png",
          title: "Menu Creation",
          description: "A functional and visually appealing menu enhances customer experience and strengthens your brand. Nimais creates custom menu designs that reflect your brand’s essence. Ready for a standout menu? Start your design today!",
          link: "/BA8"
        },
        {
          icon: "/lovable-uploads/DM9.png",
          title: "Calendar Layout",
          description: "Custom calendars promote your brand year-round while keeping your audience organized. Nimais designs personalized calendar layouts that match your brand identity. Get started on your custom calendar design with Nimais today!",
          link: "/BA9"
        },
        {
          icon: "/lovable-uploads/DM9.png",
          title: "Brochure Creation",
          description: "A well-designed brochure communicates your brand’s message and values. Nimais creates visually appealing brochures that inform and captivate your audience. Ready to craft your custom brochure? Contact us today!",
          link: "/BA10"
        },
        {
          icon: "/lovable-uploads/DM10.png",
          title: "Infographic Layout",
          description: "Infographics simplify complex information while engaging your audience. Nimais creates custom infographics that clearly convey your message. Need a unique infographic? Let’s design one for you today!",
          link: "/BA11"
        }
      ]
    },
    {
      title: "Packaging and Label",
      description: "Did you know 72% of consumers' purchasing decisions are influenced by packaging? At Nimais, we craft custom packaging solutions that protect and promote your products, ensuring they capture attention. Our expert team specializes in creating impactful product packaging and label designs that reflect quality and brand identity. Whether it’s phone cases or album covers, we ensure your design stands out. Transform your packaging with Nimais—contact us today for a consultation!",
      link: "/services/neuromarketing",
      services: [
        {
          icon: "/lovable-uploads/Vector.png",
          title: "Product Packaging Designing",
          description: " Packaging that stands out grabs attention and reflects your brand’s values. Nimais designs impactful packaging that boosts product visibility. Ready to enhance your product’s packaging? Start designing with Nimais today! ",
          link: "/A1"
        },
        {
          icon: "/lovable-uploads/Group (1).png",
          title: "Label Artwork ",
          description: "A unique label conveys your product’s quality and appeals to your target audience. Nimais designs custom labels that help your products shine. Ready for a standout label design? Let’s get started with Nimais today!w",
          link: "/A2"
        },
        {
          icon: "/lovable-uploads/Group (2).png",
          title: "Phone Case Design",
          description: "Our custom phone case designs reflect your brand’s style and appeal to a broad audience. Nimais delivers eye-catching designs that make a statement. Want a phone case design that stands out? Start your project today!",
          link: "/A3"
        },
        {
          icon: "/lovable-uploads/Group (4).png",
          title: "Album Cover Design ",
          description: "Your album cover should reflect your music’s essence and captivate your audience. Nimais creates stunning, custom album covers. Ready to design an album cover that stands out? Let’s start today!",
          link: "/A6"
        }
      ]
    },
    {
      title: "Website & App",
      description: "A seamless online experience can boost user retention by 88%. At Nimais, we craft high-performing websites and apps that blend design with functionality. Whether it’s responsive website development, engaging landing pages, or user-friendly mobile applications, we address pain points like slow navigation and poor engagement. With our tailored solutions, including custom app icons and blog layouts, we ensure your digital presence stands out. Elevate your online success with Nimais—let's build your digital future today!",
      services: [
        {
          icon: "/lovable-uploads/7b5df6a5-eebe-429d-a2f8-126a4a41ba57.png",
          title: "Banner Advertisement Creation",
          description: "Banner ads are vital for driving traffic and increasing conversions. Nimais designs custom banners that grab attention and align with your brand’s goals. Ready for a banner ad that works? Let’s create one with Nimais today!",
          link: "/services/b2b-marketing"
        },
        {
          icon: "/lovable-uploads/90dd2ef8-fdb5-457f-97cf-80603daa34d4.png",
          title: "Blog Layout Design",
          description: "An engaging blog layout enhances user experience and drives traffic. Nimais designs blog layouts that reflect your brand’s identity and keep readers engaged. Ready for a blog design that attracts visitors? Let’s start with Nimais!",
          link: "/SM2"
        },
        {
          icon: "/lovable-uploads/989b7975-db23-4503-82e3-1e42b855ba2a.png",
          title: "App Icon or Button Creation",
          description: "Custom app icons and buttons enhance user experience and encourage engagement. Nimais designs intuitive icons that boost functionality. Need a custom app icon? Let’s design one with Nimais today!",
          link: "/SM3"
        },
        {
          icon: "/lovable-uploads/7b5df6a5-eebe-429d-a2f8-126a4a41ba57.png",
          title: "Mobile Application Design",
          description: "A user-friendly, visually appealing mobile app ensures a great user experience. Nimais specializes in custom mobile app designs that combine functionality with aesthetics. Ready to develop your mobile app? Let’s create a seamless design today!",
          link: "/services/b2b-marketing"
        },
        {
          icon: "/lovable-uploads/90dd2ef8-fdb5-457f-97cf-80603daa34d4.png",
          title: "Website Development",
          description: "A responsive, optimized website enhances user experience across devices. Nimais offers expert web development services that ensure your site is fast and reliable. Need a website that works everywhere? Start with Nimais today!",
          link: "/SM2"
        },
        {
          icon: "/lovable-uploads/989b7975-db23-4503-82e3-1e42b855ba2a.png",
          title: "Landing Page Creation",
          description: "Maximize conversions with tailored landing pages that focus on your goals. Nimais designs landing pages that engage users and drive actions. Ready to create a high-converting landing page? Let’s get started with Nimais today!",
          link: "/SM3"
        }
      ]
    },
    {
      title: "Social Media Design",
      description: "Over 93% of businesses now use social media to connect with their audience, but inconsistent designs can dilute their brand impact. At Nimais, we leverage design expertise to solve challenges like weak brand recognition and low engagement. Our tailored solutions include professional LinkedIn banners, cohesive profile designs, and captivating Facebook covers that strengthen your online identity. With our unique selling points, such as customized,compelling visuals and audience-focused strategies, Social media posts with compelling visuals increase engagement by up to 650%. Let Nimais elevate your social media game—start designing your success today!",
      services: [
        {
          icon: "/lovable-uploads/d7783e04-215f-4a12-b779-3d7bb0d38f30.png",
          title: "Twitter Banner Creation",
          description: "Transform your Twitter profile with a custom banner that highlights your brand’s identity. Nimais ensures your profile stands out and reflects your brand professionally. Ready to elevate your Twitter presence? Start designing with Nimais!",
          link: "/IM1"
        },
        {
          icon: "/lovable-uploads/a8854b21-250e-4aa0-aaa6-f6fad5fc1472.png",
          title: "Facebook Cover Art",
          description: "Custom Facebook cover art reflects your brand’s message and engages your audience. Nimais creates designs that capture attention and foster engagement. Want a standout cover design? Let Nimais design your Facebook cover today!",
          link: "/IM2"
        },
        {
          icon: "/lovable-uploads/IM3.png",
          title: "Design a Profile on Social Media",
          description: "A cohesive social media profile strengthens your brand presence. Nimais ensures uniformity across platforms with custom designs that align with your brand. Ready for a consistent look across social media? Let’s create it with Nimais!",
          link: "/IM3"
        },
        {
          icon: "/lovable-uploads/IM4.png",
          title: "LinkedIn Banner Design",
          description: "A professional LinkedIn banner boosts your credibility and attracts valuable connections. Nimais designs custom banners that represent your brand. Ready to make a lasting impression? Let’s design your LinkedIn banner today!",
          link: "/IM4"
        }
      ]
    },
    {
      title: "Illustration & Art",
      description: "Over 80% of consumers are more likely to engage with visual content than text alone. At Nimais, we create stunning, personalized illustrations that help brands connect deeply with their audience. From custom invitation cards to unique mascot designs, we solve the challenge of bland visuals by infusing creativity and meaning. Our expert team delivers innovative, handcrafted artwork tailored to your project, ensuring your brand stands out. Let Nimais bring your ideas to life with artistic flair—contact us today to start creating!",
      services: [
        {
          icon: "/lovable-uploads/3bfd031b-d366-498f-bdf2-9ffc21a055b4.png",
          title: "Invitation Card Creation",
          description: "Organize and promote memorable events of every type-from exhibitions to webinars-give your audience a real show and leave an everlasting memory.",
          link: "/TM1"
        },
        {
          icon: "/lovable-uploads/0ac6a20b-47b6-44c8-a745-b90c74ef17df.png",
          title: "Photoshop Artwork",
          description: "Make or bring memories strong and emotional with your audience, have them experience once-in-a-lifetime experiences that would lead to the ultimate sealing of their brand.",
          link: "/TM2"
        },
        {
          icon: "/lovable-uploads/3bfd031b-d366-498f-bdf2-9ffc21a055b4.png",
          title: "Illustration and Graphics",
          description: "Organize and promote memorable events of every type-from exhibitions to webinars-give your audience a real show and leave an everlasting memory.",
          link: "/TM1"
        },
        {
          icon: "/lovable-uploads/0ac6a20b-47b6-44c8-a745-b90c74ef17df.png",
          title: "Character and Mascot Development",
          description: "Make or bring memories strong and emotional with your audience, have them experience once-in-a-lifetime experiences that would lead to the ultimate sealing of their brand.",
          link: "/TM2"
        },
        {
          icon: "/lovable-uploads/TM3.png",
          title: "Tattoo Art Designs",
          description: "Season waves create engaging and brilliant marketing avenues with which traffic will come to your doorstep and help with visibility for the brand. Let's package your brand for such times of the year",
          link: "/TM3"
        }
      ]
    },
    {
      title: "Book & Magazine",
      description: "It works with performance data-driven marketing in focusing on actual business results using targeted data-driven techniques. By performance metrics, we help businesses drive leads, sales, and other key goals. What our approach ensures is having every decision influenced by actionable insights, which allow you to optimize and grow with precision. Do you want to maximize the ROI and scale your business efficiently? Let's leverage data for your marketing goals.",
      services: [
        {
          icon: "/lovable-uploads/PM1.png",
          title: "Magazine Layout Creation",
          description: "Create an engaging and readable magazine layout with Nimais. We specialize in designing layouts that enhance both the aesthetic and functional aspects of your magazine. Want to captivate your readers from the first page? Start designing with Nimais today.",
          link: "/PD1"
        },
        {
          icon: "/lovable-uploads/PM2.png",
          title: "Book Jacket Creation",
          description: "The right book jacket is essential for capturing attention. Nimais designs eye-catching jackets that reflect your book's essence and stand out on shelves. Want your book cover to make an impact? Let Nimais create a design that draws readers in.",
          link: "/PD2"
        },
        {
          icon: "/lovable-uploads/PM2.png",
          title: "Digital Book Cover Design",
          description: "In today’s digital era, your book’s cover must stand out on every screen. Nimais designs professional digital book covers that are optimized for all devices. Need a cover that stands out in the digital marketplace? Let Nimais craft a stunning design for you.",
          link: "/PD2"
        }
      ]
    },
    {
      title: "Clothing and Merchandise",
      description: "Over 60% of consumers choose products based on unique, eye-catching designs. At Nimais, we specialize in custom t-shirt designs for businesses, personalized merchandise for brand promotion, and more. Our expert team creates powerful artwork for stickers, bags, mugs, and hats that speak directly to your audience, boosting brand visibility and engagement. With Nimais, you can stand out in the market with tailored designs that leave a lasting impression. Start designing your custom merchandise today and elevate your brand’s presence with Nimais!",
      services: [
        {
          icon: "/lovable-uploads/LS1.png",
          title: "Sticker Artwork",
          description: "Make a bold statement with custom-designed stickers from Nimais. Our eye-catching designs represent your brand’s personality and help it stand out. Need memorable stickers that speak to your audience? Let Nimais create designs that leave a lasting impression.",
          link: "/LS1"
        },
        {
          icon: "/lovable-uploads/LS2.png",
          title: "T-Shirt Artwork",
          description: "Transform ordinary t-shirts into bold brand statements with Nimais. We create adventurous and unique designs that reflect your brand’s core message. Want to create t-shirt designs that turn heads? Work with Nimais for artwork that makes a statement.",
          link: "/LS2"
        },
        {
          icon: "/lovable-uploads/LS3.png",
          title: "Merchandise Art ",
          description: "Your merchandise is more than an advertisement—it's a brand ambassador. Nimais creates custom artwork that ensures your merchandise stands out and leaves a lasting impression. Ready to make your merchandise unforgettable? Let Nimais design artwork that resonates with your audience.",
          link: "/LS3"
        }
      ]
    },
    {
      title: "Content Writing Agency",
      description: "Did you know that high-quality content can increase conversion rates by up to 6 times? At Nimais, we specialize in creating engaging, SEO-optimized content that helps businesses grow. Our blog writing, social media messaging, and website copy ensure your audience stays informed, engaged, and ready to act. With Nimais, we provide content that not only attracts attention but also converts, leveraging strategies that drive organic traffic and elevate your brand's presence. Get started with Nimais today and boost your conversions with high-quality content!",
      services: [
        {
          icon: "/lovable-uploads/730d71d9-bb3a-411c-b898-dd3bfb8a18b9.png",
          title: "Blog Creation",
          description: "Nimais helps you create engaging blogs that build trust and keep your audience coming back. With consistent, relevant content, we enhance your brand’s online presence. Ready to elevate your brand with a captivating blog? Partner with Nimais today",
          link: "/C1"
        },
        {
          icon: "/lovable-uploads/d0522009-f643-4739-8a94-875cbf3cece8.png",
          title: "Website Text Development",
          description: "Transform casual visitors into loyal clients with compelling website copy. Nimais specializes in crafting persuasive website text that connects and motivates action. Need copy that converts? Let Nimais develop website content that drives results.",
          link: "/C2"
        },
        {
          icon: "/lovable-uploads/a8854b21-250e-4aa0-aaa6-f6fad5fc1472.png",
          title: "Social Media Messaging",
          description: "Engage your audience with social media copy crafted by Nimais. We design messages that align with your brand and spark meaningful interactions across platforms. Want to boost your social media presence? Trust Nimais to craft the perfect message for your brand.    ",
          link: "/C3"
        }
      ]
    },
    {
      title: "Design",
      description: "Did you realize that 94% of first impressions are influenced by design? At Nimais, we craft meaningful designs that do more than just look good; they engage, inspire, and convert. Whether it's graphics, print design, or UI/UX, our designs connect your brand to your audience on a deeper level. With Nimais, you get more than aesthetics; you get results-driven, creative solutions for every business need. Start creating designs that set you apart—contact Nimais today and elevate your brand's identity!",
      services: [
        {
          icon: "/lovable-uploads/PR1.png",
          title: "Design Graphics",
          description: "Create unforgettable brand visuals with Nimais. From logo design to graphics that tell your story, our designs emotionally connect with your audience. Ready to elevate your brand’s identity? Let Nimais bring your ideas to life with stunning designs.",
          link: "/PR1"
        },
        {
          icon: "/lovable-uploads/PR2.png",
          title: "Print Design",
          description: "Nimais designs exceptional print materials that leave lasting impressions. From brochures to packaging, we ensure your printed collateral makes a mark. Ready to make your print designs unforgettable? Partner with Nimais to create materials that stand out.",
          link: "/PR2"
        },
        {
          icon: "/lovable-uploads/PR3.png",
          title: "Brand Activation",
          description: "Connect emotionally with your audience through Nimais’ brand activation designs. We transform ideas into memorable experiences that help your brand resonate. Looking to deepen your brand's connection with customers? Nimais is here to create impactful brand experiences.",
          link: "/PR3"
        }
      ]
    },
    {
      title: "Video Production Service",
      description: "Research indicates that video content is shared 1200% more often than a combination of text and images. At Nimais, we specialize in creating high-quality, engaging videos that drive audience engagement and elevate your brand. Our team of experts crafts customized solutions, from corporate videos for tech startups to promotional content, ensuring your message resonates. With proven results in increasing conversion rates by up to 80%, we make your video strategy impactful. Ready to amplify your brand with compelling videos? Let Nimais help you get started today!",
      services: [
        {
          icon: "/lovable-uploads/DM1.png",
          title: "Corporate Videos",
          description: "Present your business in the best light with Nimais’ corporate videos. We showcase your mission and success stories, building credibility and lasting impressions. Let Nimais transform your vision into a powerful narrative today",
          link: "/DM1"
        },
        {
          icon: "/lovable-uploads/DM2.png",
          title: "Explainer Videos",
          description: "Simplify complex ideas with engaging explainer videos by Nimais. Our videos capture attention while ensuring your message resonates. Partner with Nimais to convey clarity and drive engagement effectively.",
          link: "/DM2"
        },
        {
          icon: "/lovable-uploads/DM3.png",
          title: "Promotional Videos",
          description: "Boost your visibility with high-energy promotional videos from Nimais. Crafted to excite and inspire action, these videos amplify your reach and results. Ready to make your campaign unforgettable? Let Nimais create videos that elevate your marketing.",
          link: "/DM3"
        },
        {
          icon: "/lovable-uploads/DM4.png",
          title: "Social Media Videos",
          description: "Stay ahead with Nimais’ trend-driven social media videos. Perfect for platforms like TikTok, Instagram, and YouTube, these videos build strong connections with your audience. Want your social media videos to shine? Let Nimais create content that speaks to your followers.",
          link: "/DM4"
        },
        {
          icon: "/lovable-uploads/DM5.png",
          title: "Animated Videos",
          description: "Nimais offers custom 2D and 3D animated videos that bring your ideas to life with engaging visuals. Perfect for boosting brand recognition, our animations captivate your audience across platforms. Ready to elevate your brand? Let Nimais create animations that resonate.",
          link: "/DM5"
        },
        {
          icon: "/lovable-uploads/DM6.png",
          title: "Motion Graphics Videos",
          description: "Nimais specializes in motion graphics videos that turn static visuals into dynamic animations. These videos boost your brand’s message with creativity and clarity. Want to tell your story in style? Trust Nimais for motion graphics that make an impac",
          link: "/DM6"
        },
        {
          icon: "/lovable-uploads/DM7.png",
          title: "Kinetic Typography Videos",
          description: "Nimais creates kinetic typography videos that make your message stand out. Combining bold animations and creative text, these videos engage your audience and leave a lasting impression. Ready to amplify your brand’s voice? Let Nimais craft your perfect kinetic typography video.",
          link: "/DM7"
        },
        {
          icon: "/lovable-uploads/DM8.png",
          title: "Product Videos",
          description: "Highlight your product’s unique features with Nimais’ high-definition product videos. Designed to build buyer confidence, these videos turn interest into action. Need product videos that convert? Partner with Nimais to showcase your product’s strengths.",
          link: "/DM8"
        },
        {
          icon: "/lovable-uploads/DM9.png",
          title: "Ad Campaign Videos",
          description: "Nimais crafts ad campaign videos with creative visuals and targeted messaging. Designed to engage and convert, these videos make your campaigns unforgettable. Ready to boost your campaign’s impact? Let Nimais create your perfect ad video today!",
          link: "/DM9"
        },
        {
          icon: "/lovable-uploads/DM10.png",
          title: "Event Coverage",
          description: "Capture every moment of your event with Nimais’ professional coverage. Our videos preserve the essence of your special occasion, making memories last. Want your event captured with precision? Let Nimais handle your event coverage.",
          link: "/DM10"
        },
        {
          icon: "/lovable-uploads/DM11.png",
          title: "Testimonial Videos",
          description: "Nimais creates authentic testimonial videos that build trust through real client stories. These videos add credibility and connect with your audience. Ready to showcase your success? Let Nimais craft testimonial videos that build confidence.",
          link: "/DM11"
        },
        {
          icon: "/lovable-uploads/DM12.png",
          title: "Training and Educational Videos",
          description: "Nimais specializes in creating interactive, engaging training and educational videos. Perfect for simplifying complex ideas, these videos enhance understanding and retention. Need impactful training content? Let Nimais create videos that educate and inspire.",
          link: "/DM12"
        },
        {
          icon: "/lovable-uploads/DM12.png",
          title: "Drone Videography",
          description: "Nimais’ drone videography captures breathtaking aerial views that elevate your visuals. Perfect for adding cinematic flair to your brand’s story, these shots will impress your audience. Ready to enhance your project? Let Nimais take your visuals to new heights.",
          link: "/DM12"
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