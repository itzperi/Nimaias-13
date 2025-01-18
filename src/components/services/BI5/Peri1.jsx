const WhyChooseUs = () => {
    return (
      <section className="py-16 bg-raastas-purple text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-left">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                A well-designed business card should be both functional and memorable. We collaborate closely with you to ensure your card is impactful, making you stand out in a competitive market and giving your brand the professional edge it deserve
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                Many businesses struggle with creating business cards that truly represent their brand. A generic design can make you blend in, while poor quality cards can negatively affect your credibility. Let us help you avoid these pitfalls. 
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                Ready for a business card that speaks volumes? Let’s create one that sets you apart.
                </p>
              </div>
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