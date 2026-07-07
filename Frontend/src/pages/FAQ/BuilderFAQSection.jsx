
import React, { useState } from 'react';

const BuilderFAQSection = () => {
  // Track which FAQ index is open. Initialize with null so all are closed by default.
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is real estate project loan?",
      answer: "It is a loan given to developers to fund real estate projects."
    },
    {
      question: "Who can take a loan for real estate developers?",
      answer: "Builders and real estate developers working on residential or commercial projects can apply."
    },
    {
      question: "Can I get a loan to buy land for a Project?",
      answer: "Yes, you can take a land purchase loan to buy land for development."
    },
    {
      question: "What is builder finance used for?",
      answer: "Builder finance is used for construction, land purchase, and project funding needs."
    }
  ];

  const toggleFAQ = (index) => {
    // If the clicked FAQ is already open, close it; otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-medium mb-6 text-center">Frequently Asked Questions</h1>
      
      <div className="space-y-4 ">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left font-semibold text-lg text-gray-800"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                {/* Simple chevron indicator */}
                <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-40 p-4 border-t border-gray-200' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuilderFAQSection;