'use client';

import Image from 'next/image';
import { useState } from 'react';
import BidirectionalStagger from './BidirectionalStagger';

export default function MentorSection() {
  const [showMentorModal, setShowMentorModal] = useState(false);

  const mentors = [
    {
      name: "John Doe",
      title: "Engineer",
      company: "Google",
      image: "/mentor1.jpg"
    },
    {
      name: "Jane Smith", 
      title: "Engineer",
      company: "Amazon",
      image: "/mentor2.png"
    },
    {
      name: "Bob Johnson",
      title: "Engineer", 
      company: "Meta",
      image: "/mentor3.png"
    },
    {
      name: "John Doe",
      title: "Engineer",
      company: "Google",
      image: "/mentor1.jpg"
    },
    {
      name: "Jane Smith", 
      title: "Engineer",
      company: "Amazon",
      image: "/mentor2.png"
    },
    {
      name: "Bob Johnson",
      title: "Engineer", 
      company: "Meta",
      image: "/mentor3.png"
    }
  ];

  return (
    <section className="py-20 bg-white w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        
        {/* Section number */}
        <div className="mb-8">
          <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">03</span>
          <span className="text-sm text-gray-400 font-light ml-4">/our mentors</span>
        </div>
        
        {/* Section Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Our Mentors
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Industry experts from Google, Amazon, Meta, and other top tech firms will mentor, 
            host code reviews, and lead masterclasses.
          </p>
        </div>

        {/* Mentor Grid with Staggered Animation */}
        <BidirectionalStagger 
          staggerDelay={150}
          animationType="fadeUp"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {mentors.map((mentor, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              
              {/* Mentor Info */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {mentor.name}
              </h3>
              <p className="text-gray-600">
                {mentor.title}, {mentor.company}
              </p>
            </div>
          ))}
        </BidirectionalStagger>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => setShowMentorModal(true)}
            className="px-8 py-4 bg-[#3B82F6] hover:bg-[#2563eb] text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:scale-105"
          >
            🔍 Meet the Mentors
          </button>
        </div>

        {/* Simple Mentor Modal */}
        {showMentorModal && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowMentorModal(false)}
          >
            <div 
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Our Mentors</h3>
                <button
                  onClick={() => setShowMentorModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                {mentors.map((mentor, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{mentor.name}</h4>
                      <p className="text-gray-600">{mentor.title} at {mentor.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}