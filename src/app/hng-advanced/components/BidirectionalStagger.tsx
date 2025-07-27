'use client';

import { useEffect, useRef, useState } from 'react';

interface BidirectionalStaggerProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  animationType?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
}

export default function BidirectionalStagger({ 
  children, 
  className = '', 
  staggerDelay = 150,
  animationType = 'fadeUp'
}: BidirectionalStaggerProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(children.length).fill(false));
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        const intersectionRatio = entry.intersectionRatio;
        
        if (isIntersecting && intersectionRatio > 0.3) {
          // Element is coming into view
          setHasAnimated(true);
          children.forEach((_, index) => {
            const timeout = setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * staggerDelay);
            timeoutsRef.current.push(timeout);
          });
        } else if (hasAnimated && !isIntersecting) {
          // Element is going out of view - reverse animation
          // Clear any pending timeouts
          timeoutsRef.current.forEach(clearTimeout);
          timeoutsRef.current = [];
          
          // Reverse stagger - hide items from last to first
          children.forEach((_, index) => {
            const reverseIndex = children.length - 1 - index;
            const timeout = setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[reverseIndex] = false;
                return newState;
              });
            }, index * (staggerDelay / 2)); // Faster reverse
            timeoutsRef.current.push(timeout);
          });
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: '0px 0px -30% 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      // Clear all timeouts
      timeoutsRef.current.forEach(clearTimeout);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [children, staggerDelay, hasAnimated]);

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