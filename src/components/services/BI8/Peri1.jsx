const WhyChooseUs = () => {
    return (
      <section className="py-16 bg-raastas-purple text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-left">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                In the digital age, social media is a key part of any brand strategy. With our logo and social media package, we ensure your online presence mirrors your offline branding, helping you build a strong, recognizable brand that engages your audience. 
                </p>
              </div>
  
              <p className="text-gray-300 leading-relaxed pt-4">
              Let’s get your brand seen and heard on social media. Ready to start?
              </p>
            </div>
            
            <div className="relative h-full">
              <img 
                src="/lovable-uploads/overworked-workaholic-entrepreneur-woman-shwoing-marketing-graphs-using-tablet-overworking-company-solution-late-night-meeting-room 3.png"
                alt="Business meeting with data presentation"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;