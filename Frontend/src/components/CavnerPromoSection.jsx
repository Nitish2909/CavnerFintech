import React from 'react';
import { UserCheck, Calendar, Zap, IndianRupee, Globe } from 'lucide-react';

export default function CavnerPromoSection() {
  const features = [
    {
      icon: <UserCheck className="w-5 h-5 text-[#006A75]" />,
      text: "Minimal documentation simplifies loan applications and approval procedures significantly.",
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#006A75]" />,
      text: "Flexible modes for EMI payments increase ease in making payments and managing finances monthly.",
    },
    {
      icon: <Zap className="w-5 h-5 text-[#006A75]" />,
      text: "Fast processing enables borrowers to cope with their urgent financial needs.",
    },
    {
      icon: <IndianRupee className="w-5 h-5 text-[#006A75]" />,
      text: "Different kinds of loans cater to diverse purposes.",
    },
    {
      icon: <Globe className="w-5 h-5 text-[#006A75]" />,
      text: "Online loan comparison helps borrowers choose better financial solutions more confidently.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full bg-white shadow-lg border border-gray-200 rounded-t-lg overflow-hidden flex flex-col">
        
        {/* Top Dark Teal Border Accent */}
        <div className="h-[5px] bg-[#004D54] w-full" />

        {/* Top Section: Hero Content & Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200">
          
          {/* Left Text Column */}
          <div className="md:col-span-2 p-8 flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-[#004D54] mb-4">
              Cavner - Your Reliable Partner for Quick Loan Approval
            </h1>
            <p className="text-gray-600 text-xs leading-relaxed mb-4">
              Cavner focuses on simplifying the borrowing process for individuals and businesses through smarter financial solutions and transparent loan comparisons.
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              If you require instant <a href="#" className="text-blue-600 hover:underline">personal loans</a>,{' '}
              <a href="#" className="text-blue-600 hover:underline">MSME business loans</a>, women business loans, small business loans, or home loan services, working capital loans, and any type of borrowing, then you can easily get all this at Cavner. Through quick loans, better loan comparison, flexible EMIs, and easy online applications, Cavner makes the process easier for you.
            </p>
          </div>

          {/* Right Image Column with Overlap Badge */}
          <div className="relative h-64 md:h-auto min-h-[240px]">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" 
              alt="Business meeting" 
              className="w-full h-full object-cover"
            />
            {/* Absolute Badge */}
            <div className="absolute bottom-6 left-6 right-6 md:-left-6 md:right-auto bg-white p-4 rounded-md shadow-lg border border-gray-100 max-w-xs">
              <span className="text-[10px] uppercase font-bold text-orange-500 tracking-wider block mb-0.5">
                Quick Approval
              </span>
              <span className="text-lg font-bold text-[#004D54]">
                Simple process
              </span>
            </div>
          </div>
        </div>

        {/* Middle Section: "Why Thousands Prefer..." */}
        <div className="p-8 border-b border-gray-200 bg-white">
          <h2 className="text-center text-lg font-bold text-[#004D54] mb-6">
            Why Thousands Prefer Cavner for Financial Support
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icon Container with light background and orange accent border */}
                <div className="p-2 bg-teal-50/50 rounded-lg border border-orange-100 mb-4 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-gray-700 text-xs leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Footer Callout */}
        <div className="p-8 bg-white text-center">
          <h3 className="text-xl font-bold text-orange-500 mb-2">
            Your Trusted Partner for Fulfilling Financial Needs
          </h3>
          <p className="text-gray-600 text-xs">
            With Cavner, you can save time and money through a simple, intuitive, and transparent financial journey.
          </p>
        </div>

      </div>
    </div>
  );
}