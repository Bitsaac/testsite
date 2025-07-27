'use client';

import { useEffect, useRef, useState } from 'react';

interface StaggeredRevealProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  animationType?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
}

export default function StaggeredReveal({ 
  children, 
  className = '', 
  staggerDelay = 150,
  animationType = 'fadeUp'
}: StaggeredRevealProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(children.length).fill(false));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger staggered animation
          children.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * staggerDelay);
          });
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -30% 0px'  // Trigger when element is 30% from bottom
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [children, staggerDelay]);

  const getAnimationClasses = (isVisible: boolean) => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    switch (animationType) {
      case 'fadeUp':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`;
      case 'fadeIn':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100' 
            : 'opacity-0'
        }`;
      case 'slideLeft':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-8'
        }`;
      case 'slideRight':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-8'
        }`;
      case 'scale':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`;
      default:
        return baseClasses;
    }
  };

  return (
    <div ref={containerRef} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={getAnimationClasses(visibleItems[index])}
        >
          {child}
        </div>
      ))}
    </div>
  );
}