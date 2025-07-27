import Image from 'next/image';

export default function ThemeFocus() {
  const pluginExamples = [
    "📅 Calendar Integrations",
    "📹 Zoom Meeting Tools", 
    "📝 Form Builders",
    "⚙️ Admin Dashboards",
    "🔔 Notification Systems",
    "📊 Analytics Widgets"
  ];

  return (
    <section className="py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        
        {/* Section number */}
        <div className="mb-8">
          <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">09</span>
          <span className="text-sm text-gray-400 font-light ml-4">/project focus</span>
        </div>
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Themes & Project Focus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Work on real products that ship to users
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            
            {/* Main description */}
            <div className="prose prose-lg">
              <p className="text-xl text-gray-700 leading-relaxed">
                Each team will work on <strong className="text-[#38BDF8]">???Guess???</strong>, 
                building tools and features that will ship to real users. Tools and apps for 
                <strong> Integrations, Form Builders, to Admin Tools, etc,.</strong>.
              </p>
            </div>

            {/* Plugin examples grid */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Example Plugin Ideas:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {pluginExamples.map((example, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <span className="text-lg">{example.split(' ')[0]}</span>
                    <span>{example.substring(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call-to-action text */}
            <div className="bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-xl p-6">
              <p className="text-lg text-gray-800 font-medium">
                💡 Your code will be used by real customers, giving you genuine product development experience 
                and portfolio pieces that demonstrate real-world impact.
              </p>
            </div>
          </div>
          
          {/* Right Column - Illustration */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[450px]">
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/10 to-[#3B82F6]/10 rounded-2xl"></div>
              
              {/* Plugin illustration */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                <Image
                  src="/plugin-illustration.png"
                  alt="Plugin Development Illustration - Interconnected Tools"
                  width={350}
                  height={350}
                  className="object-contain filter drop-shadow-lg"
                />
              </div>
              
              {/* Floating plugin icons */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">📅</span>
              </div>
              <div className="absolute bottom-12 left-8 w-10 h-10 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center">
                <span className="text-lg">📝</span>
              </div>
              <div className="absolute top-1/2 right-4 w-8 h-8 bg-white/80 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-sm">⚙️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}