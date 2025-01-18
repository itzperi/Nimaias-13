const WhyChooseUs = () => {
    return (
      <section className="py-16 bg-raastas-purple text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-left">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-raastas-light">Consistency Across Communications</h3>
                <p className="text-gray-300 leading-relaxed">
                  We ensure your letterhead integrates seamlessly with your other branded materials, creating a cohesive and professional look that strengthens your brand identity across all communication channels.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-raastas-light">Experienced Design Team</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our skilled team collaborates with you to design a letterhead that not only looks visually appealing but also aligns with your business values and goals.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-raastas-light">Attention to Detail</h3>
                <p className="text-gray-300 leading-relaxed">
                  We pay close attention to every detail, from the choice of typography to the placement of logos, ensuring your letterhead communicates professionalism and builds trust with your audience.
                </p>
              </div>
  
              <p className="text-gray-300 leading-relaxed pt-4">
                Ready to elevate your business correspondence? Let us help you design a letterhead that truly reflects your brand's professionalism and leaves a lasting impression.
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