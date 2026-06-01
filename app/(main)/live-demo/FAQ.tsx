'use client'
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are Readymade Solutions?',
    answer: 'Readymade solutions are pre-built applications or products that can be quickly customized and deployed for your business needs, saving development time and cost.'
  },
  {
    question: 'How quickly can I launch a Readymade Solution?',
    answer: 'Most readymade solutions can be launched within a few days to weeks, depending on the level of customization and integration required for your business.'
  },
  {
    question: 'Can I customize the Readymade Solutions?',
    answer: 'Yes, our readymade solutions are fully customizable. We can adjust the design, features, and functionalities to match your exact business requirements.'
  },
  {
    question: 'Do you provide support after purchase?',
    answer: 'Absolutely! We provide technical support, updates, and maintenance to ensure your solution continues to run smoothly after launch.'
  },
  {
    question: 'What industries do you cover with Readymade Solutions?',
    answer: 'We offer solutions for multiple industries including eCommerce, education, healthcare, real estate, travel, and many more.'
  },
  {
    question: 'How do I get started with a Readymade Solution?',
    answer: 'Simply contact our team, share your requirements, and we will recommend the best solution, customize it for you, and guide you through the launch process.'
  }
];

export default function FAQ() {
  // First item open by default, set to null if you want all closed initially
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f8fafc] py-14 md:py-24 px-6 font-sans">
      <div className="max-w-[900px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-6 tracking-tight">
            Frequently <span className="relative inline-block">
              Asked
              {/* Orange Underline exactly like screenshot */}
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#f5a623] rounded-full"></span>
            </span> Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 ease-in-out
                            ${isOpen ? 'border-[#f5a623]/30 shadow-md shadow-[#f5a623]/5' : 'border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'}`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 md:px-8 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[#0a1628] text-lg font-bold pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon Container */}
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 
                                   ${isOpen ? 'bg-[#f5a623]/10 rotate-180' : 'bg-slate-50'}`}>
                    <ChevronDown size={20} strokeWidth={2.5} className={isOpen ? 'text-[#f5a623]' : 'text-slate-400'} />
                  </div>
                </button>

                {/* Answer Section (Smooth Dropdown using Grid Trick) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out 
                              ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 md:px-8 pb-6 text-slate-600 leading-relaxed text-[15px] md:text-base border-t border-transparent pt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}