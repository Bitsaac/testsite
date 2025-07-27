'use client';

import { useState } from 'react';

export default function BrandSupportSection() {
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  return (
    <section className="py-20 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden" >
        
        {/* Section number */}
        <div className="mb-8">
          <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">04</span>
          <span className="text-sm text-gray-400 font-light ml-4">/supported by</span>
        </div>

        {/* Section Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Supported By Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mentors and participants come from top-tier companies, 
            and we&apos;re backed by the tools and platforms that power modern development.
          </p>
        </div>

        {/* Brand Grid with Random Layout */}
        <div className="relative w-full max-w-6xl mx-auto mb-16">
          
          {/* Enhanced fade gradients on left and right */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Grid container - Staggered zig-zag layout */}
          <div className="space-y-3 p-8">
            {(() => {
              const brands = [
                { bg: 'bg-white border-2 border-[#0070BA]', text: 'text-[#0070BA]', content: 'P', url: 'https://paypal.com', name: 'PayPal' },
                { bg: 'bg-[#F59E0B]', text: 'text-white', content: 'S', url: 'https://sketch.com', name: 'Sketch' },
                { bg: 'bg-[#5865F2]', text: 'text-white', content: 'T', url: 'https://teams.microsoft.com', name: 'Microsoft Teams' },
                { bg: 'bg-[#EF4444]', text: 'text-white', content: '///', url: 'https://webflow.com', name: 'Webflow' },
                { bg: 'bg-[#1E293B]', text: 'text-white', content: '3V', url: 'https://expressvpn.com', name: 'Express VPN' },
                { bg: 'bg-[#1F2937] rounded-full', text: 'text-white', content: '♪', url: 'https://pandora.com', name: 'Pandora' },
                { bg: 'bg-white border border-gray-200', text: '', content: 'cengage', url: 'https://cengage.com', name: 'Cengage' },
                { bg: 'bg-[#7952B3]', text: 'text-white', content: 'B', url: 'https://getbootstrap.com', name: 'Bootstrap' },
                { bg: 'bg-[#DC2626]', text: 'text-white', content: '↕', url: 'https://textexpander.com', name: 'TextExpander' }
              ];

              const rows = [];
              const shuffledBrands = [...brands];
              let brandIndex = 0;
              
              // Track logo positions globally to ensure spacing across all rows
              const logoPositions = new Set<number>();

              // First pass: determine logo positions with proper spacing
              const rowSizes = [11, 12, 11];
              let currentBoxIndex = 0;

              for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
                const boxCount = rowSizes[rowIndex];
                for (let colIndex = 0; colIndex < boxCount; colIndex++) {
                  const leftEdgeZone = colIndex < 3;
                  const rightEdgeZone = colIndex >= (boxCount - 3);
                  const isEdgeZone = leftEdgeZone || rightEdgeZone;
                  
                  if (!isEdgeZone && brandIndex < brands.length && (currentBoxIndex % 3 === 1)) {
                    // Check for spacing - no adjacent logos in same row or adjacent rows
                    const hasAdjacentInRow = logoPositions.has(currentBoxIndex - 1) || logoPositions.has(currentBoxIndex + 1);
                    const hasAdjacentAbove = logoPositions.has(currentBoxIndex - rowSizes[Math.max(0, rowIndex - 1)]);
                    const hasAdjacentBelow = logoPositions.has(currentBoxIndex + rowSizes[Math.min(2, rowIndex + 1)]);
                    
                    if (!hasAdjacentInRow && !hasAdjacentAbove && !hasAdjacentBelow) {
                      logoPositions.add(currentBoxIndex);
                      brandIndex++;
                    }
                  }
                  currentBoxIndex++;
                }
              }

              // Ensure all logos are placed - fill remaining spots
              if (brandIndex < brands.length) {
                currentBoxIndex = 0;
                for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
                  const boxCount = rowSizes[rowIndex];
                  for (let colIndex = 0; colIndex < boxCount; colIndex++) {
                    const leftEdgeZone = colIndex < 3;
                    const rightEdgeZone = colIndex >= (boxCount - 3);
                    const isEdgeZone = leftEdgeZone || rightEdgeZone;
                    
                    if (!isEdgeZone && !logoPositions.has(currentBoxIndex) && brandIndex < brands.length) {
                      logoPositions.add(currentBoxIndex);
                      brandIndex++;
                    }
                    currentBoxIndex++;
                  }
                }
              }

              // Second pass: generate the actual components
              currentBoxIndex = 0;
              let usedBrandIndex = 0;

              // Generate 3 rows with staggered layout
              for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
                const isStaggeredRow = rowIndex === 0 || rowIndex === 2; // rows 1 and 3
                const boxCount = isStaggeredRow ? 11 : 12; // Remove one box for zig-zag
                const centerClass = isStaggeredRow ? 'justify-center' : '';
                
                const rowBoxes = [];
                
                // Generate boxes for current row
                for (let colIndex = 0; colIndex < boxCount; colIndex++) {
                  const shouldPlaceLogo = logoPositions.has(currentBoxIndex);
                  
                  if (shouldPlaceLogo) {
                    const brand = shuffledBrands[usedBrandIndex];
                    usedBrandIndex++;
                    
                    const handleBrandClick = () => window.open(brand.url, '_blank');
                    
                    if (brand.content === 'cengage') {
                      rowBoxes.push(
                        <div 
                          key={`${rowIndex}-${colIndex}`}
                          onClick={handleBrandClick}
                          className="aspect-square bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
                          title={`Visit ${brand.name}`}
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-[#0EA5E9] via-[#F59E0B] to-[#EF4444] rounded-full flex items-center justify-center text-white font-bold text-xs">
                            C
                          </div>
                        </div>
                      );
                    } else {
                      rowBoxes.push(
                        <div 
                          key={`${rowIndex}-${colIndex}`}
                          onClick={handleBrandClick}
                          className={`aspect-square ${brand.bg} rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer`}
                          title={`Visit ${brand.name}`}
                        >
                          <span className={`${brand.text} font-bold text-sm`}>
                            {brand.content}
                          </span>
                        </div>
                      );
                    }
                  } else {
                    // White box with bigger, more visible plus sign on hover
                    rowBoxes.push(
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        onClick={() => setShowPartnerModal(true)}
                        className="aspect-square bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer relative group"
                      >
                        {/* Bigger, more visible plus sign on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                          <span className="text-gray-400 font-normal text-2xl">+</span>
                        </div>
                      </div>
                    );
                  }
                  
                  currentBoxIndex++;
                }

                
                const gridClass = isStaggeredRow ? 'grid-cols-11' : 'grid-cols-12';
                rows.push(
                  <div key={rowIndex} className={`grid ${gridClass} gap-3 ${centerClass}`}>
                    {rowBoxes}
                  </div>
                );
              }
              
              return rows;
            })()}
          </div>

        {/* Bottom text */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            Join a network of professionals working with cutting-edge technology and industry-leading companies.
          </p>
        </div>

        {/* Partnership Modal */}
        {showPartnerModal && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowPartnerModal(false)}
          >
            <div 
              className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Partner With Us</h3>
                <button
                  onClick={() => setShowPartnerModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 mb-6">
                  Interested in joining our network of industry partners? Choose how you&apos;d like to collaborate:
                </p>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => window.open('mailto:partnerships@hng.tech?subject=Partnership Opportunity', '_blank')}
                    className="w-full p-4 bg-[#3B82F6] hover:bg-[#2563eb] text-white font-semibold rounded-lg text-left transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold">🤝 Partner</h4>
                        <p className="text-sm text-blue-100">Strategic partnership opportunities</p>
                      </div>
                      <span className="text-2xl">→</span>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => window.open('mailto:sponsorship@hng.tech?subject=Sponsorship Inquiry', '_blank')}
                    className="w-full p-4 bg-[#38BDF8] hover:bg-[#0ea5e9] text-white font-semibold rounded-lg text-left transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold">💎 Sponsor</h4>
                        <p className="text-sm text-sky-100">Support our mission and reach developers</p>
                      </div>
                      <span className="text-2xl">→</span>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => window.open('mailto:careers@hng.tech?subject=Work With Us', '_blank')}
                    className="w-full p-4 bg-[#10B981] hover:bg-[#059669] text-white font-semibold rounded-lg text-left transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold">💼 Work With Us</h4>
                        <p className="text-sm text-emerald-100">Join our team or collaborate on projects</p>
                      </div>
                      <span className="text-2xl">→</span>
                    </div>
                  </button>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    We&apos;ll get back to you within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
       </div>
      </div>
    </section>
  );
}