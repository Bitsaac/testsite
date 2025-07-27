export default function WhatIsHNG() {
  return (
    <section className="py-32 bg-white w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        
        {/* Section number */}
        <div className="mb-8">
          <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">01</span>
          <span className="text-sm text-gray-400 font-light ml-4">/what is advanced</span>
        </div>

        {/* Main content */}
        <div className="max-w-5xl pb-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-300 leading-tight mb-12">
            <span className="font-normal text-gray-600">HNG Advanced</span> is a{" "}
            <span className="font-bold text-[#38BDF8]">4-week elite challenge</span>{" "}
            designed to take participants from{" "}
            <span className="font-normal text-gray-600">idea to market</span>. 
            Finalists from HNGi11 get to work on{" "}
            <span className="font-bold text-gray-900">Product</span>, collaborate across tracks, and build{" "}
            <span className="font-bold text-gray-900">real, usable tools</span>{" "}
            for launch.
          </h2>
        </div>

        {/* Supporting sections */}
        <div className="mt-10 w-full flex justify-end">
          <div className="grid md:grid-cols-2 gap-12 max-w-2xl">
            <div className="group hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#38BDF8] transition-colors duration-300">
                The Experience
              </h3>
              <p className="text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Immerse yourself in authentic startup dynamics with cross-functional teams, 
                tight deadlines, and real market pressures. Learn how top-tier companies 
                actually build and ship products.
              </p>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#38BDF8] transition-colors duration-300">
                The Impact
              </h3>
              <p className="text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Beyond code – build products that matter, gain industry recognition, 
                and create portfolio pieces that demonstrate your ability to deliver 
                market-ready solutions that scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}