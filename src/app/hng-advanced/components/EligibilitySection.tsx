'use client';

import { useRef, useEffect } from 'react';

export default function EligibilitySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const isDraggingRef = useRef(false);

  // Original cohorts data
  const originalCohorts = [
    { cohort: "HNG i12", year: "2025", status: "not-eligible" },
    { cohort: "HNG i11", year: "2024", status: "eligible" },
    { cohort: "HNG i10", year: "2023", status: "eligible" },
    { cohort: "HNG i9", year: "2022", status: "eligible" },
    { cohort: "HNG i8", year: "2021", status: "eligible" },
    { cohort: "HNG i7", year: "2020", status: "eligible" },
    { cohort: "HNG i6", year: "2019", status: "eligible" },
    { cohort: "HNG i5", year: "2018", status: "eligible" },
    { cohort: "HNG i4", year: "2017", status: "eligible" },
    { cohort: "HNG i3", year: "2016", status: "eligible" },
    { cohort: "HNG i2", year: "2015", status: "eligible" },
    { cohort: "HNG i1", year: "2014", status: "eligible" }
  ];
  
  // Create enough duplicates for seamless scrolling (3 sets total)
  const cohorts = [...originalCohorts, ...originalCohorts, ...originalCohorts];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let startX: number;
    let scrollStart: number;

    const startAutoScroll = () => {
      if (!isDraggingRef.current) {
        isScrollingRef.current = true;
        const cardWidth = 200; // Width of each card + gap (192px + 8px)
        const scrollSpeed = 0.5; // Slower speed for readability
        const singleSetWidth = cardWidth * originalCohorts.length; // Width of one complete set
        
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
      }, 1000);
    };

    const handleMouseLeaveWindow = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        scrollContainer.style.cursor = 'grab';
        setTimeout(() => {
          if (!isDraggingRef.current) {
            startAutoScroll();
          }
        }, 1000);
      }
    };

    startAutoScroll();

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
  }, [originalCohorts.length]);

  return (
    <section className="py-20 bg-white relative overflow-hidden w-full">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
        
        {/* Section number */}
        <div className="mb-8">
          <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">05</span>
          <span className="text-sm text-gray-400 font-light ml-4">/who can apply</span>
        </div>
        
        {/* Main heading with highlight */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-8">
            We&apos;re looking for{" "}
            <span className="relative">
              <span className="text-[#38BDF8]">challengers</span>
              <div className="absolute -inset-2 bg-[#38BDF8]/10 rounded-lg -z-10"></div>
            </span>
            {" "}at heart and{" "}
            <span className="relative">
              <span className="text-gray-900">builders</span>
              <div className="absolute -inset-2 bg-yellow-200/50 rounded-lg -z-10"></div>
            </span>
            {" "}by nature.
          </h2>
        </div>

        {/* Eligibility description */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            <strong className="text-gray-900">HNG Advanced</strong> is open to participants 
            from diverse HNG cohorts who bring years of experience, dedication and 
            commitment to building real products that matter.
          </p>
        </div>

        {/* Auto-scrolling Cohorts */}
        <div className="mb-12 w-full overflow-hidden relative">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto cursor-grab active:cursor-grabbing py-8 w-full"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              userSelect: 'none'
            }}
            onMouseDown={(e) => e.preventDefault()}
          >
            {cohorts.map((item, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 w-48 border rounded-2xl p-4 text-center transition-all duration-300 select-none ${
                  item.status === 'eligible' 
                    ? 'bg-green-50 border-green-200 hover:border-green-300' 
                    : 'bg-red-50 border-red-200 hover:border-red-300'
                }`}
                style={{
                  transform: `rotate(${(index % 2 === 0) ? '1deg' : '-1deg'})`
                }}
              >
                <div className="text-sm text-gray-500 mb-1">Cohort</div>
                <div className="text-lg font-bold text-gray-900 mb-1">{item.cohort}</div>
                <div className="text-sm text-gray-600 mb-3">({item.year})</div>
                <div className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                  item.status === 'eligible'
                    ? 'text-green-600 bg-green-100'
                    : 'text-red-600 bg-red-100'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    item.status === 'eligible' ? 'bg-green-500' : 'bg-red-500'
                  }`}></span>
                  {item.status === 'eligible' ? 'Eligible' : 'Not Eligible'}
                </div>
              </div>
            ))}
          </div>
          
          {/* CSS to hide scrollbar */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* Important notice - reduced width */}
        <div className="max-w-lg mx-auto mb-8">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-gray-900">!</span>
              </div>
              <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">Important</span>
            </div>
            <p className="text-base text-gray-800 font-medium">
              We will accept only{" "}
              <span className="font-bold text-[#38BDF8]">10–15 participants per track</span>.
              Applications are competitive.
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            💡 Hover to pause scrolling • Drag to scroll manually
          </p>
        </div>
      </div>
    </section>
  );
}