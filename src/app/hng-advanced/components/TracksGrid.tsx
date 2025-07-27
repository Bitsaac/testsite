'use client';

import BidirectionalStagger from './BidirectionalStagger';

interface TracksGridProps {
  onTrackSelect?: (track: string) => void;
}

export default function TracksGrid({ onTrackSelect }: TracksGridProps) {
  const tracks = [
    { name: "UI Design", icon: "🎨", description: "Create beautiful, user-friendly interfaces" },
    { name: "Graphics Design", icon: "🖼️", description: "Design compelling visual assets and branding" },
    { name: "Frontend Development", icon: "💻", description: "Build responsive, interactive web applications" },
    { name: "Backend Development", icon: "⚙️", description: "Develop robust server-side systems and APIs" },
    { name: "QA Testing", icon: "🔍", description: "Ensure quality through comprehensive testing" },
    { name: "Product Management", icon: "📊", description: "Lead product strategy and roadmap planning" },
    { name: "Sales & Marketing", icon: "📢", description: "Drive growth and customer acquisition" },
    { name: "Video Editing", icon: "🎬", description: "Create engaging video content and tutorials" },
    { name: "DevOps", icon: "🔧", description: "Manage infrastructure and deployment pipelines" },
    { name: "Data Analysis", icon: "📈", description: "Extract insights from data to drive decisions" },
    { name: "Context Engineering", icon: "🤖", description: "Optimize AI/ML systems and workflows" },
    { name: "Growth Marketing", icon: "🚀", description: "Scale user acquisition and retention" },
    { name: "Admin Roles", icon: "👥", description: "Coordinate teams and manage operations" }
  ];

  const handleApplyClick = (trackName: string) => {
    if (onTrackSelect) {
      onTrackSelect(trackName);
    }
  };

  return (
    <section className="py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        
        {/* Section number */}
        <div className="mb-8">
          <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">06</span>
          <span className="text-sm text-gray-400 font-light ml-4">/available tracks</span>
        </div>
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Available Tracks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your specialization and join a cross-functional team to build real products
          </p>
        </div>

        {/* Tracks Grid with Staggered Animation */}
        <BidirectionalStagger 
          staggerDelay={100}
          animationType="scale"
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {tracks.map((track, index) => (
            <div 
              key={index}
              className="bg-gray-50 hover:bg-white border border-gray-200 hover:border-[#38BDF8] rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-[#38BDF8]/20 group transform hover:-translate-y-2"
            >
              {/* Track Icon with bounce animation */}
              <div className="text-3xl mb-3 text-center group-hover:scale-110 transition-transform duration-300">
                {track.icon}
              </div>
              
              {/* Track Name */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center group-hover:text-[#38BDF8] transition-colors duration-300">
                {track.name}
              </h3>
              
              {/* Track Description */}
              <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {track.description}
              </p>
              
              {/* Enhanced Apply Button */}
              <button
                onClick={() => handleApplyClick(track.name)}
                className="w-full py-2 px-4 bg-[#38BDF8] hover:bg-[#0ea5e9] text-white font-medium rounded-lg text-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#38BDF8]/50 transform active:scale-95"
              >
                Apply Now
              </button>
            </div>
          ))}
        </BidirectionalStagger>

        {/* Mobile Horizontal Scroll Version (hidden on larger screens) */}
        <div className="md:hidden mt-8">
          <div className="flex gap-4 overflow-x-auto pb-4 px-2">
            {tracks.map((track, index) => (
              <div 
                key={`mobile-${index}`}
                className="flex-shrink-0 w-64 bg-gray-50 border border-gray-200 rounded-xl p-4"
              >
                <div className="text-2xl mb-2 text-center">{track.icon}</div>
                <h3 className="text-md font-bold text-gray-900 mb-1 text-center">{track.name}</h3>
                <p className="text-xs text-gray-600 mb-3 text-center">{track.description}</p>
                <button
                  onClick={() => handleApplyClick(track.name)}
                  className="w-full py-2 px-3 bg-[#38BDF8] text-white font-medium rounded-lg text-xs"
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}