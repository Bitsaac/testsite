'use client';

import { useEffect, useRef, useState } from 'react';

export default function WhatYouGet() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      number: "01",
      title: "Top-notch Mentorship",
      description: "Get mentored by seasoned engineers from Google, Amazon, and other top-tier tech companies.",
      color: "bg-gray-100",
      hoverColor: "hover:bg-gray-100"
    },
    {
      number: "02", 
      title: "Endorsement Letter & Certification", 
      description: "Receive formal endorsement letters and completion certification that sets you apart in the job market.",
      color: "bg-orange-50",
      hoverColor: "hover:bg-orange-50"
    },
    {
      number: "03",
      title: "Portfolio-Ready Projects",
      description: "Work on live projects that remain active for years – real, functioning products for your portfolio.",
      color: "bg-yellow-50",
      hoverColor: "hover:bg-yellow-50"
    },
    {
      number: "05",
      title: "Mentorship Opportunities", 
      description: "Get priority to mentor future HNG cohorts, building leadership experience and professional reputation.",
      color: "bg-blue-50",
      hoverColor: "hover:bg-blue-50"
    },
    {
      number: "04",
      title: "Priority Job Placement",
      description: "Get prioritized for employment opportunities that HNG receives as an organization.",
      color: "bg-gray-100",
      hoverColor: "hover:bg-gray-100"
    },
    {
      number: "06",
      title: "Technical Endorsements",
      description: "Receive professional recommendations from industry experts for senior positions.",
      color: "bg-green-50",
      hoverColor: "hover:bg-green-50"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          setIsVisible(true);
          // Start revealing cards after 200ms, then every 100ms
          setTimeout(() => {
            benefits.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }, 200);
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4],
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section number */}
        <div className="mb-8">
          <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">02</span>
          <span className="text-sm text-gray-400 font-light ml-4">/what you get</span>
        </div>
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What You Get
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We&apos;re not promising you the world, but here&apos;s what we can deliver: a carefully curated program designed to accelerate your career with tangible, long-lasting benefits.
          </p>
        </div>

        {/* Benefits Cards - 3x2 Grid Layout matching moodboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            // Define padding top values for each card (halved from original)
            const paddingTops = ['pt-0', 'pt-[200px]', 'pt-[400px]', 'pt-[250px]', 'pt-[0px]', 'pt-[500px]'];
            const paddingTop = paddingTops[index] || 'pt-5';
            
            return (
              <div key={index} className={paddingTop}>
                <div 
                  className={`group relative bg-white ${benefit.hoverColor} rounded-2xl p-6 transition-all duration-600 ease-out hover:shadow-lg hover:-translate-y-1 border border-gray-200/50 aspect-square flex flex-col justify-between ${
                    visibleCards.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Number Badge - positioned at top */}
                  <div className="text-4xl font-light text-gray-300 group-hover:text-gray-400 transition-colors duration-300">
                    {benefit.number}
                  </div>
                  
                  {/* Content - positioned at bottom */}
                  <div className="flex flex-col">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* End Note */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl border-l-4 border-blue-500 max-w-4xl mx-auto">
          <p className="text-sm text-gray-600 italic text-center">
            All benefits are contingent upon successful completion of the program and maintaining high performance standards throughout the challenge.
          </p>
        </div>
      </div>
    </section>
  );
}