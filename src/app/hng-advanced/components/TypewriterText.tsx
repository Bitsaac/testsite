'use client';

import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypewriterText({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = '',
  onComplete 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start typing after delay
          setTimeout(() => {
            setIsTyping(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -30% 0px'  // Start when 30% visible from bottom
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay, isVisible]);

  useEffect(() => {
    if (isTyping && indexRef.current <= text.length) {
      intervalRef.current = setInterval(() => {
        if (indexRef.current <= text.length) {
          setDisplayedText(text.slice(0, indexRef.current));
          indexRef.current++;
        } else {
          setIsTyping(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          onComplete?.();
        }
      }, speed);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isTyping, text, speed, onComplete]);

  return (
    <div ref={sectionRef} className={className}>
      <span>
        {displayedText}
        {isTyping && (
          <span className="animate-pulse text-[#38BDF8] font-bold">|</span>
        )}
      </span>
    </div>
  );
}