import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react";
import { Button } from "./ui/button";
const Footer = () => {
  return (
    <footer className="bg-raastas-purple text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 flex flex-col"
          >
            <div className="mb-6">
              <Link to="/">
                <img 
                  src="/lovable-uploads/logos.png" 
                  alt="Raastas Logo" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <p className="text-sm mb-6 text-gray-300 leading-relaxed">
            Nimais.com, a venture by Cryptaesthesia Solutions, is your trusted partner for
neuroscience-driven digital marketing and IT solutions. We
craft tailored strategies, including
SEO, content creation, data-driven campaigns, and custom web and app development to boost
+
engagement, conversions, and brand loyalty.
Leveraging neuroscience, we deliver
+
results-driven solutions that grow your business. Partner with Nimais today to experience the
power of creativity and science in transforming your digital presence.
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">Email: info@nimais.com</p>
              <p className="text-sm">Phone no: +916239999236</p>
              <p className="text-sm">
                Address: #28 1st floor, 1st Main Shivshankar Layout<br />
                Khattigenhalli Yelahanka Bangalore 562114
              </p>
            </div>
          </motion.div>
          {/* Our Core Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Our Core Services</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Marketing",
                "Design",
                "Advertising",
                "Neuromarketing",
                "Website & App",
                "Software",
                "Sales & Leads",
                "Communications",
                "Services"
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <span className="text-raastas-light">→</span>
                  <a href="#" className="text-sm">{service}</a>
                </div>
              ))}
            </div>
          </motion.div>
          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">About us</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Our core values",
                "Our brands",
                "Our expert team",
                "Career opportunities",
                "Industries we serve",
                "Certifications & Awards",
                "Client success stories"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <span className="text-raastas-light">→</span>
                  <a href="#" className="text-sm">{item}</a>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Legal & Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Legal & Resources</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Terms & Conditions",
                  "Privacy Policy",
                  "Accessibility Statement",
                  "Sitemap",
                  "Articles & Blogs",
                  "News"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                    <span className="text-raastas-light">→</span>
                    <a href="#" className="text-sm">{item}</a>
                  </div>
                ))}
              </div>
            </div>
            {/* Connect with us */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold">Connect with us</h3>
              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/showcase/nimais/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-raastas-light transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/nimaisi?igsh=a2hyNm5heDlrMm8y" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-raastas-light transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61571702312928&mibextid=ZbWKwL" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-raastas-light transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/Nimaisx?t=wDMfIqXFzycHVSPcP-j4ZQ&s=09" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-raastas-light transition-colors"
                >
                  <X className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCYMtEiPx9p5R90KBJ7Wz3og" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-raastas-light transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Newsletter Signup</h3>
              <p className="text-sm text-gray-300">Stay updated with the latest insights and offers</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded bg-white/10 text-white placeholder:text-gray-400 flex-1 border border-gray-700 focus:outline-none focus:border-raastas-light text-sm"
                />
                <Button variant="outline" size="sm" className="whitespace-nowrap hover:bg-raastas-light hover:text-white">
                  Subscribe
                </Button>
              </div>
            </div>
            {/* Ready to Grow */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Ready to grow your business?</h3>
              <Button 
                variant="outline"
                size="sm"
                className="w-full hover:bg-raastas-light hover:text-white transition-colors"
              >
                Contact us today!
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">Copyright © 2025 Nimais.com</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;