'use client';

import { useState } from 'react';

interface EnhancedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export default function EnhancedButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  icon
}: EnhancedButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<Array<{id: number, x: number, y: number}>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    // Create ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#38BDF8] hover:bg-[#0ea5e9] text-white shadow-lg hover:shadow-xl hover:shadow-[#38BDF8]/30';
      case 'secondary':
        return 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl hover:shadow-gray-900/30';
      case 'outline':
        return 'bg-transparent border-2 border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8] hover:text-white shadow-lg hover:shadow-xl hover:shadow-[#38BDF8]/20';
      default:
        return 'bg-[#38BDF8] hover:bg-[#0ea5e9] text-white';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      disabled={disabled || loading}
      className={`
        relative overflow-hidden font-semibold rounded-lg transition-all duration-300 
        transform hover:scale-105 active:scale-95
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${isPressed ? 'scale-95' : ''}
        ${disabled || loading ? 'opacity-60 cursor-not-allowed transform-none hover:scale-100' : ''}
        ${className}
      `}
    >
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 100,
            height: 100,
          }}
        />
      ))}

      {/* Button content */}
      <span className="relative flex items-center justify-center gap-2">
        {loading && (
          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {icon && !loading && icon}
        {children}
      </span>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </button>
  );
}