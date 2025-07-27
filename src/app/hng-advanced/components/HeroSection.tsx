'use client';

import ParallaxSection from './ParallaxSection';
import EnhancedButton from './EnhancedButton';

interface HeroSectionProps {
  onApplyClick?: () => void;
  onViewTracksClick?: () => void;
  cloudImageUrl?: string; // Optional cloud background image
}

export default function HeroSection({ onApplyClick, onViewTracksClick, cloudImageUrl }: HeroSectionProps) {
  return (
    <section className="max-h-[1320px] bg-gradient-to-b from-sky-300 via-sky-200 to-white relative overflow-hidden w-screen">
      {/* Cloud background - either image or coded clouds */}
      <ParallaxSection speed={0.1} className="absolute inset-0 mt-20 ">
        {cloudImageUrl ? (
          /* Cloud background image */
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{ backgroundImage: `url(${cloudImageUrl})` }}
          />
        ) : (
          /* Coded cloud formations with layered lighting */
          <>
        {/* Main cloud formations with layered lighting */}
        <div className="absolute top-16 left-10 w-64 h-32 bg-gradient-to-br from-white via-blue-50/80 to-white/60 rounded-full blur-sm shadow-xl"></div>
        <div className="absolute top-18 left-12 w-60 h-28 bg-gradient-to-tl from-yellow-100/40 via-white/90 to-white/70 rounded-full blur-md"></div>
        
        <div className="absolute top-24 right-16 w-48 h-24 bg-gradient-to-bl from-white/90 via-orange-50/60 to-white/70 rounded-full blur-sm shadow-lg"></div>
        <div className="absolute top-26 right-18 w-44 h-20 bg-gradient-to-tr from-pink-50/30 via-white/80 to-white/60 rounded-full blur-md"></div>
        
        <div className="absolute top-40 left-1/3 w-56 h-28 bg-gradient-to-r from-white/70 via-blue-50/50 to-white/80 rounded-full blur-sm shadow-2xl"></div>
        <div className="absolute top-42 left-1/3 transform translate-x-4 w-52 h-24 bg-gradient-to-l from-yellow-50/40 via-white/60 to-white/50 rounded-full blur-lg"></div>
        
        <div className="absolute top-12 right-1/3 w-40 h-20 bg-gradient-to-bl from-white/95 via-purple-50/40 to-white/70 rounded-full blur-sm shadow-lg"></div>
        <div className="absolute top-14 right-1/3 transform translate-x-2 w-36 h-16 bg-gradient-to-br from-orange-50/30 via-white/70 to-white/50 rounded-full blur-md"></div>
        
        {/* Layered accent clouds with depth */}
        <div className="absolute top-32 left-1/4 w-32 h-16 bg-gradient-to-r from-white/60 via-blue-50/40 to-white/50 rounded-full blur-sm shadow-md"></div>
        <div className="absolute top-34 left-1/4 transform translate-x-2 w-28 h-12 bg-gradient-to-l from-yellow-50/30 via-white/50 to-white/40 rounded-full blur-lg"></div>
        
        <div className="absolute top-48 right-1/4 w-28 h-14 bg-gradient-to-bl from-white/80 via-pink-50/30 to-white/60 rounded-full blur-sm shadow-lg"></div>
        <div className="absolute top-50 right-1/4 transform translate-x-1 w-24 h-10 bg-gradient-to-tr from-orange-50/20 via-white/40 to-white/30 rounded-full blur-md"></div>
        
        {/* Additional atmospheric layers */}
        <div className="absolute top-20 left-1/2 w-72 h-36 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-35 left-1/5 w-80 h-40 bg-gradient-to-br from-blue-50/10 via-white/15 to-yellow-50/10 rounded-full blur-3xl"></div>
        
        {/* Highlight effects for sun-like lighting */}
        <div className="absolute top-8 right-20 w-20 h-20 bg-gradient-radial from-yellow-100/50 via-white/30 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-30 left-8 w-16 h-16 bg-gradient-radial from-orange-100/40 via-white/20 to-transparent rounded-full blur-lg"></div>
        <div className="absolute top-45 right-8 w-12 h-12 bg-gradient-radial from-pink-100/30 via-white/15 to-transparent rounded-full blur-md"></div>
        
        {/* Subtle shadow effects */}
        <div className="absolute top-22 left-14 w-60 h-8 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent rounded-full blur-lg opacity-40"></div>
        <div className="absolute top-38 right-20 w-44 h-6 bg-gradient-to-l from-transparent via-gray-300/15 to-transparent rounded-full blur-md opacity-30"></div>
          </>
        )}
      </ParallaxSection>
      
      {/* Gradient transition to white at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-64 pb-20 w-full text-center">
        
        {/* Centered Content with floating tech icons */}
        <div className="relative space-y-8 my-16">
          {/* Floating tech favicons around text */}
          <div className="absolute -top-8 -right-16 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center opacity-80 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
            <span className="text-2xl">⚛️</span>
          </div>
          <div className="absolute top-16 -left-20 w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center opacity-75 animate-bounce" style={{animationDelay: '0.8s', animationDuration: '3.5s'}}>
            <span className="text-xl">🐍</span>
          </div>
          <div className="absolute -top-4 right-32 w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center opacity-70 animate-bounce" style={{animationDelay: '1.2s', animationDuration: '4s'}}>
            <span className="text-lg">🔗</span>
          </div>
          <div className="absolute top-8 -left-8 w-11 h-11 bg-white rounded-xl shadow-lg flex items-center justify-center opacity-80 animate-bounce" style={{animationDelay: '1.8s', animationDuration: '3.2s'}}>
            <span className="text-xl">💻</span>
          </div>
          <div className="absolute top-32 -right-12 w-9 h-9 bg-white rounded-lg shadow-md flex items-center justify-center opacity-75 animate-bounce" style={{animationDelay: '2.2s', animationDuration: '3.8s'}}>
            <span className="text-lg">📱</span>
          </div>
          <div className="absolute bottom-16 right-16 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center opacity-80 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.3s'}}>
            <span className="text-xl">🚀</span>
          </div>
          <div className="absolute bottom-8 -left-16 w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center opacity-70 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4.2s'}}>
            <span className="text-lg">⚙️</span>
          </div>
          <div className="absolute bottom-20 left-20 w-9 h-9 bg-white rounded-lg shadow-md flex items-center justify-center opacity-75 animate-bounce" style={{animationDelay: '2.8s', animationDuration: '3.6s'}}>
            <span className="text-lg">🔧</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="font-['Space_Grotesk'] font-black">HNG Advanced</span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-700 block mt-4">
                Taking a Product to Market
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Build real-world tools, gain equity, and work with top engineers from Google, Amazon, and more — all in 4 weeks.
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <EnhancedButton
              onClick={onApplyClick}
              variant="secondary"
              size="lg"
              icon="🔘"
            >
              Apply Now
            </EnhancedButton>
            <EnhancedButton
              onClick={onViewTracksClick}
              variant="outline"
              size="lg"
              icon="🔍"
            >
              View Tracks
            </EnhancedButton>
          </div>
        </div>
        
        {/* Centered Rocket Illustration Below */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-lg h-96 flex items-center justify-center">
            
            {/* Professional Animated Rocket SVG - LottieFiles Style */}
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <svg 
                width="320" 
                height="420" 
                viewBox="0 0 320 420" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-2xl"
              >
                {/* Background glow effect */}
                <defs>
                  <radialGradient id="rocketGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                  </radialGradient>
                  
                  <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F3F4F6"/>
                    <stop offset="50%" stopColor="#E5E7EB"/>
                    <stop offset="100%" stopColor="#D1D5DB"/>
                  </linearGradient>
                  
                  <linearGradient id="noseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA"/>
                    <stop offset="100%" stopColor="#3B82F6"/>
                  </linearGradient>
                  
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Background glow circle that pulses */}
                <circle cx="160" cy="200" r="80" fill="url(#rocketGlow)">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="3s" repeatCount="indefinite"/>
                </circle>

                {/* Main rocket body group with floating animation */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="4s" repeatCount="indefinite"/>
                  
                  {/* Rocket body with gradient */}
                  <ellipse cx="160" cy="260" rx="45" ry="125" fill="url(#bodyGradient)" stroke="#9CA3AF" strokeWidth="2" filter="url(#glow)">
                    <animate attributeName="opacity" values="0.95;1;0.95" dur="2s" repeatCount="indefinite"/>
                  </ellipse>
                  
                  {/* Rocket nose cone with gradient and glow */}
                  <path d="M160 135 L115 260 L205 260 Z" fill="url(#noseGradient)" filter="url(#glow)">
                    <animate attributeName="fill" values="url(#noseGradient);#60A5FA;url(#noseGradient)" dur="4s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Main window with blinking effect */}
                  <circle cx="160" cy="210" r="18" fill="#38BDF8" stroke="#1E40AF" strokeWidth="3" filter="url(#glow)">
                    <animate attributeName="fill" values="#38BDF8;#60A5FA;#F59E0B;#38BDF8" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="r" values="18;20;18" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Window inner reflection */}
                  <circle cx="165" cy="205" r="6" fill="#FFFFFF" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Left stabilizer fin */}
                  <path d="M115 330 L85 365 L115 365 Z" fill="#6B7280" stroke="#4B5563" strokeWidth="1">
                    <animate attributeName="fill" values="#6B7280;#8B8B8B;#6B7280" dur="3s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Right stabilizer fin */}
                  <path d="M205 330 L235 365 L205 365 Z" fill="#6B7280" stroke="#4B5563" strokeWidth="1">
                    <animate attributeName="fill" values="#6B7280;#8B8B8B;#6B7280" dur="3s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Engine compartment */}
                  <rect x="140" y="360" width="40" height="25" fill="#DC2626" rx="8" filter="url(#glow)">
                    <animate attributeName="fill" values="#DC2626;#F87171;#EF4444;#DC2626" dur="0.8s" repeatCount="indefinite"/>
                  </rect>
                  
                  {/* Side boosters */}
                  <rect x="125" y="340" width="15" height="20" fill="#7C2D12" rx="3">
                    <animate attributeName="fill" values="#7C2D12;#B91C1C;#7C2D12" dur="1.2s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="180" y="340" width="15" height="20" fill="#7C2D12" rx="3">
                    <animate attributeName="fill" values="#7C2D12;#B91C1C;#7C2D12" dur="1.2s" repeatCount="indefinite"/>
                  </rect>
                </g>
                
                {/* Dynamic exhaust flames */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0; 2,-1; 0,0" dur="0.3s" repeatCount="indefinite"/>
                  
                  {/* Main exhaust flames */}
                  <path d="M150 385 L160 410 L170 385" fill="#F59E0B" opacity="0.9">
                    <animate attributeName="fill" values="#F59E0B;#EF4444;#F97316;#FBBF24;#F59E0B" dur="0.4s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="scale" values="1;1.3;0.9;1.2;1" dur="0.4s" repeatCount="indefinite"/>
                  </path>
                  
                  <path d="M155 385 L160 405 L165 385" fill="#EF4444" opacity="0.8">
                    <animate attributeName="fill" values="#EF4444;#F59E0B;#DC2626;#FBBF24;#EF4444" dur="0.5s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="scale" values="1;1.4;0.8;1.3;1" dur="0.5s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Side booster flames */}
                  <path d="M130 360 L132 375 L135 360" fill="#F97316" opacity="0.7">
                    <animate attributeName="fill" values="#F97316;#EF4444;#F59E0B;#F97316" dur="0.3s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="scale" values="1;1.2;0.9;1" dur="0.3s" repeatCount="indefinite"/>
                  </path>
                  
                  <path d="M185 360 L188 375 L190 360" fill="#F97316" opacity="0.7">
                    <animate attributeName="fill" values="#F97316;#EF4444;#F59E0B;#F97316" dur="0.3s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="scale" values="1;1.2;0.9;1" dur="0.3s" repeatCount="indefinite"/>
                  </path>
                </g>
                
                {/* Professional particle system */}
                <g opacity="0.8">
                  {/* Orbiting particles */}
                  <circle cx="90" cy="150" r="3" fill="#FBBF24">
                    <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="rotate" values="0 160 200;360 160 200" dur="8s" repeatCount="indefinite"/>
                  </circle>
                  
                  <circle cx="230" cy="120" r="2" fill="#60A5FA">
                    <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="rotate" values="360 160 200;0 160 200" dur="10s" repeatCount="indefinite"/>
                  </circle>
                  
                  <circle cx="250" cy="180" r="2.5" fill="#34D399">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="rotate" values="0 160 200;360 160 200" dur="12s" repeatCount="indefinite"/>
                  </circle>
                  
                  <circle cx="70" cy="250" r="2" fill="#F472B6">
                    <animate attributeName="opacity" values="1;0.2;1" dur="2.2s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="rotate" values="360 160 200;0 160 200" dur="15s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Twinkling stars */}
                  <polygon points="100,90 102,98 110,98 104,104 106,112 100,108 94,112 96,104 90,98 98,98" fill="#FBBF24" opacity="0.6">
                    <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="rotate" values="0 100 99;360 100 99" dur="6s" repeatCount="indefinite"/>
                  </polygon>
                  
                  <polygon points="240,90 242,98 250,98 244,104 246,112 240,108 234,112 236,104 230,98 238,98" fill="#60A5FA" opacity="0.7">
                    <animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="rotate" values="360 240 99;0 240 99" dur="8s" repeatCount="indefinite"/>
                  </polygon>
                </g>
                
                {/* Subtle energy waves */}
                <g opacity="0.3">
                  <circle cx="160" cy="200" r="100" fill="none" stroke="#3B82F6" strokeWidth="1">
                    <animate attributeName="r" values="100;120;100" dur="4s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  
                  <circle cx="160" cy="200" r="80" fill="none" stroke="#60A5FA" strokeWidth="1">
                    <animate attributeName="r" values="80;100;80" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite"/>
                  </circle>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}