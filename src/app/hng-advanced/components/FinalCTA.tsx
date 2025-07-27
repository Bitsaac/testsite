'use client';

import EnhancedButton from './EnhancedButton';

interface FinalCTAProps {
  onApplyClick?: () => void;
}

export default function FinalCTA({ onApplyClick }: FinalCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B1120] via-[#0B1120] to-[#1a2332] relative w-full overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/5 to-[#3B82F6]/5"></div>
      <div className="absolute top-10 left-20 w-32 h-32 bg-[#38BDF8]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full overflow-hidden">
        
        {/* Main heading */}
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          Ready to build?
        </h2>
        
        {/* Subheading */}
        <p className="text-2xl sm:text-3xl text-gray-300 mb-12 font-light">
          Let&apos;s take your skills to the market.
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          {/* Primary CTA */}
          <EnhancedButton
            onClick={onApplyClick}
            variant="primary"
            size="lg"
            icon="🔘"
            className="text-xl px-10 py-5"
          >
            Apply Now
          </EnhancedButton>
          
          {/* Secondary CTA - Disabled */}
          <div className="relative group">
            <EnhancedButton
              disabled
              variant="outline"
              size="lg"
              icon="🔗"
              className="text-gray-400 border-gray-400 cursor-not-allowed opacity-60"
            >
              Join Slack for updates
            </EnhancedButton>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              Slack link coming soon
            </span>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <p className="text-gray-300 text-lg">
            ⏰ Applications close soon. Limited spots available. Apply now to secure your place in this elite challenge.
          </p>
        </div>
      </div>
    </section>
  );
}