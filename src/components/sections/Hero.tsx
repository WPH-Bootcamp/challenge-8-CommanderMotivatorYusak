import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="bg-[#0F0F12] text-white min-h-[calc(100vh-80px)] flex items-center py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Build Your <br />
            <span className="text-[#FF6B35]">Digital Presence</span> Fast
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We deliver top-notch, highly scalable websites and web apps using cutting-edge technologies to step up your business game.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <Button variant="primary">
              Button <span className="ml-1">➔</span>
            </Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>

        {/* Right Content - Mockup Frame */}
        <div className="flex justify-center items-center relative">
          <div className="absolute w-72 h-72 bg-[#FF6B35]/10 rounded-full blur-3xl -z-10"></div>
          {/* Box representasi visual gelap/terang dari gambar Hero Figma */}
          <div className="w-full max-w-md aspect-square bg-[#18181C] border border-gray-800 rounded-3xl p-4 shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="text-gray-600 text-sm font-mono">[ Image Hero Frame ]</div>
          </div>
        </div>
      </div>
    </section>
  );
};