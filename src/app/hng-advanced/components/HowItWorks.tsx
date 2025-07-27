'use client';

import { useRef, useEffect } from 'react';

export default function HowItWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const isDraggingRef = useRef(false);

  // Original steps data
  const originalSteps = [
    {
      number: 1,
      title: "Apply and select your track",
      description: "Choose your specialization and submit your application with motivation",
      bgColor: "bg-gray-900",
      textColor: "text-white"
    },
    {
      number: 2, 
      title: "Join a cross-functional team",
      description: "Work alongside designers, developers, and product managers",
      bgColor: "bg-gray-200",
      textColor: "text-gray-900"
    },
    {
      number: 3,
      title: "Begin work on real plugin projects", 
      description: "Build features and plugins that will ship to actual Telex users",
      bgColor: "bg-[#38BDF8]",
      textColor: "text-white"
    },
    {
      number: 4,
      title: "Evictions happen weekly — top contributors stay",
      description: "Only the most dedicated and skilled participants advance each week",
      bgColor: "bg-gray-900",
      textColor: "text-white"
    },
    {
      number: 5,
      title: "Finalists earn equity, endorsement, and visibility",
      description: "Get real ownership in Telex plus career-boosting recognition",
      bgColor: "bg-yellow-400",
      textColor: "text-gray-900"
    }
  ];
  
  // Create enough duplicates for seamless scrolling (3 sets total)
  const steps = [...originalSteps, ...originalSteps, ...originalSteps];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let startX: number;
    let scrollStart: number;

    const startAutoScroll = () => {
      if (!isDraggingRef.current) {
        isScrollingRef.current = true;
        const cardWidth = 344; // Width of each card + gap (320px + 24px)
        const scrollSpeed = 1; // Pixels per frame
        const singleSetWidth = cardWidth * originalSteps.length; // Width of one complete set
        
        const scroll = () => {
          if (!isDraggingRef.current && isScrollingRef.current && scrollContainer) {
            scrollContainer.scrollLeft += scrollSpeed;
            
            // Seamless reset: when we've scrolled through one complete set,
            // reset back to the start position (this creates the infinite effect)
            if (scrollContainer.scrollLeft >= singleSetWidth) {
              scrollContainer.scrollLeft = 0;
            }
            
            animationId = requestAnimationFrame(scroll);
          }
        };
        animationId = requestAnimationFrame(scroll);
      }
    };

    const handleMouseEnter = () => {
      isScrollingRef.current = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };

    const handleMouseLeave = () => {
      if (!isDraggingRef.current) {
        startAutoScroll();
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      isScrollingRef.current = false;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollStart = scrollContainer.scrollLeft;
      scrollContainer.style.cursor = 'grabbing';
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; // Multiply by 2 for faster scroll
      scrollContainer.scrollLeft = scrollStart - walk;
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      scrollContainer.style.cursor = 'grab';
      setTimeout(() => {
        if (!isDraggingRef.current) {
          startAutoScroll();
        }
      }, 500); // Delay before resuming auto-scroll
    };

    const handleMouseLeaveWindow = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        scrollContainer.style.cursor = 'grab';
        setTimeout(() => {
          if (!isDraggingRef.current) {
            startAutoScroll();
          }
        }, 500);
      }
    };

    // Start auto-scroll immediately
    startAutoScroll();

    // Add event listeners
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mousemove', handleMouseMove);
    scrollContainer.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      isScrollingRef.current = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('mousedown', handleMouseDown);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);
      scrollContainer.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [originalSteps.length]);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        
        {/* Section number */}
        <div className="mb-8">
          <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">07</span>
          <span className="text-sm text-gray-400 font-light ml-4">/how it works</span>
        </div>
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A competitive filtering process designed to identify and nurture top talent
          </p>
        </div>

        {/* Auto-scrolling Steps Container (No angled container) */}
        <div className="mb-16 w-full overflow-hidden relative">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing py-8 w-full"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              userSelect: 'none'
            }}
            onMouseDown={(e) => e.preventDefault()}
          >
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 w-80 ${step.bgColor} ${step.textColor} rounded-3xl p-8 relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl select-none`}
                style={{ 
                  transform: `rotate(${(index % 2 === 0) ? '1deg' : '-1deg'})` // Individual card tilt
                }}
              >
                  {/* Step Number Circle */}
                  <div className="absolute top-6 left-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                      step.bgColor === 'bg-gray-200' 
                        ? 'bg-gray-900 text-white' 
                        : step.bgColor === 'bg-yellow-400'
                        ? 'bg-gray-900 text-white'
                        : 'bg-white/20 text-current'
                    }`}>
                      {step.number < 10 ? `0${step.number}` : step.number}
                    </div>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="absolute top-6 right-6">
                    <div className={`w-8 h-8 flex items-center justify-center ${
                      step.bgColor === 'bg-gray-200' ? 'text-gray-500' : 'text-current opacity-60'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="mt-16">
                    <h3 className="text-xl font-bold mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      step.bgColor === 'bg-gray-200' 
                        ? 'text-gray-600' 
                        : step.bgColor === 'bg-yellow-400'
                        ? 'text-gray-700'
                        : 'text-current opacity-80'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          
            {/* CSS to hide scrollbar on webkit browsers */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>

        {/* Elimination Warning - Redesigned as metric card */}
        <div className="max-w-md mx-auto transform rotate-1">
          <div className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center shadow-lg">
            <div className="text-6xl font-black text-red-500 mb-2">30%</div>
            <p className="text-sm text-red-600 font-medium mb-1">ELIMINATION RATE</p>
            <p className="text-xs text-red-500">
              Will be eliminated in Stages 1 and 2 — only the best remain
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            💡 Hover to pause • Drag to scroll manually
          </p>
        </div>
      </div>
    </section>
  );
}