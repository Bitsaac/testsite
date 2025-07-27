'use client';

import { useState } from 'react';
import BidirectionalStagger from './BidirectionalStagger';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  const faqs = [
    {
      question: "Who is eligible to apply for HNG Advanced?",
      answer: "HNG Advanced is open to finalists from HNG i1 through i11. Unfortunately, HNG i12 participants are not eligible for this program as it's designed for those with prior HNG experience and completion."
    },
    {
      question: "What is the time commitment for HNG Advanced?",
      answer: "HNG Advanced is a 4-week intensive program requiring significant daily commitment. Expect to dedicate 6-8 hours daily working on real projects, attending team meetings, code reviews, and masterclasses with industry mentors."
    },
    {
      question: "Will I receive equity in Telex for participating?",
      answer: "Yes, finalists who successfully complete the program and contribute meaningfully to Telex development will receive equity stakes. The exact percentage depends on your role, contributions, and final evaluation."
    },
    {
      question: "How many participants will be selected per track?",
      answer: "We accept only 10-15 participants per track to ensure quality mentorship and meaningful project contribution. This makes the selection process highly competitive."
    },
    {
      question: "What happens if I get evicted during the program?",
      answer: "Evictions happen weekly based on performance, contribution, and team dynamics. If evicted, you'll receive feedback for improvement and can apply for future HNG programs, but won't receive the completion benefits."
    },
    {
      question: "Do I need to be available full-time during the 4 weeks?",
      answer: "Yes, HNG Advanced requires full-time commitment. You'll be working on real products with tight deadlines alongside cross-functional teams. Part-time participation isn't feasible given the intensive nature."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        
        {/* Section number */}
        <div className="mb-8">
          <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">10</span>
          <span className="text-sm text-gray-400 font-light ml-4">/frequently asked</span>
        </div>

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Frequently<br />
            Asked Questions
          </h2>
        </div>

        {/* FAQ Items with Staggered Animation */}
        <BidirectionalStagger 
          staggerDelay={150}
          animationType="fadeUp"
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'border-gray-300 bg-gray-50' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-all duration-200 hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <div className={`w-6 h-6 flex items-center justify-center text-gray-600 font-light transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : 'rotate-0'
                  }`}>
                    <span className="text-xl">+</span>
                  </div>
                </div>
              </button>

              {/* Answer with smooth accordion animation */}
              <div className={`transition-all duration-500 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </BidirectionalStagger>

        {/* Contact note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Have more questions? Reach out to us at{" "}
            <a href="mailto:advanced@hng.tech" className="text-[#38BDF8] hover:underline font-medium">
              advanced@hng.tech
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}