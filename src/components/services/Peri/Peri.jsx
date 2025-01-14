import React from 'react';
import { ArrowRight } from 'lucide-react';

const Peri = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="/lovable-uploads/cv.png"
              alt="Sales Development Team"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8 text-left">
            <h1 className="text-4xl sm:text-3xl font-bold text-white leading-tight">
              How Our Sales Development Representative Can Help You
            </h1>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  High-Quality Lead Generation
                </h3>
                <p className="text-gray-300">
                  Identify potential customers who are ready to buy, ensuring your sales team spends time on the most promising leads.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Personalized Outreach
                </h3>
                <p className="text-gray-300">
                  Using personalized communication strategies to engage with customers in a way that's most relevant to them, increasing engagement and response rates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Market Expansion
                </h3>
                <p className="text-gray-300">
                  Tap into new geographic regions or customer segments, opening up fresh revenue streams.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ongoing Lead Nurturing
                </h3>
                <p className="text-gray-300">
                  Build relationships over time, providing continuous value until leads are ready to convert into sales.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Focus on Long-Term Growth
                </h3>
                <p className="text-gray-300">
                  Foster sustainable growth through strategies that ensure your business continues to grow steadily over time.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-300">
              Let our expert team handle the complex task of sales development so you can focus on what matters most growing your business.
            </p>

            <button className="inline-flex items-center px-6 py-3 bg-white text-[#1A1F2C] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Book a call now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peri;
