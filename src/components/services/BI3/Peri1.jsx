const WhyChooseUs = () => {
    return (
      <section className="py-16 bg-raastas-purple text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-left">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                Every element of your envelope, from size to design, is meticulously crafted. Our solutions highlight your brand’s strength while protecting your message, leaving a memorable impression even before your mail is opened. 
                </p>
              </div>
  
              <p className="text-gray-300 leading-relaxed pt-4">
              Elevate your brand presence with custom envelopes that make an impact. Contact us today to create designs that stand out.
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