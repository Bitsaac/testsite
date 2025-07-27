import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white py-12 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left Side - Logo and Info */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-24 h-12">
              <Image
                src="/hng-logo.png"
                alt="HNG Logo"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="text-center md:text-left space-y-1">
              <p className="text-gray-300 font-medium">hng.tech/advanced-hng</p>
              <p className="text-gray-400">+234-91-3413-5226</p>
              <p className="text-gray-400">@hnginternship</p>
            </div>
          </div>
          
          {/* Right Side - Legal Links */}
          <div className="text-center md:text-right">
            <div className="flex gap-4 text-sm text-gray-400">
              <a 
                href="/privacy" 
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a 
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} HNG Advanced. Building the future, one product at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}