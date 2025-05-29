
import { Button } from '@/components/ui/button';
import { Plane, TreePalm, Map } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Safari vehicles at sunset during wildlife tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-500/20 to-amber-400/20"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Plane className="h-8 w-8 md:h-12 md:w-12 text-white opacity-30" />
        </div>
        <div className="absolute top-32 md:top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <TreePalm className="h-12 w-12 md:h-16 md:w-16 text-white opacity-30" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Map className="h-8 w-8 md:h-10 md:w-10 text-white opacity-30" />
        </div>
      </div>

      {/* Airplane illustration */}
      <div className="absolute top-1/4 right-4 md:right-10">
        <div className="relative">
          <Plane className="h-16 w-16 md:h-24 md:w-24 text-white opacity-40 animate-float" />
          <div className="absolute -bottom-2 -right-2 w-6 h-1 md:w-8 md:h-1 bg-white rounded-full opacity-60"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-1 md:w-12 md:h-1 bg-white rounded-full opacity-40"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
            TSM
            <span className="block text-2xl md:text-3xl lg:text-4xl text-amber-200 mt-2 drop-shadow-xl">
              TOURS & TRAVEL
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Discover the beauty of nature with unforgettable safari adventures and seamless travel experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-nature-green-600 hover:bg-nature-green-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <TreePalm className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Explore Safaris
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 w-full sm:w-auto"
            >
              <Plane className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Book Flight
            </Button>
          </div>
        </div>

        {/* Features highlight */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 text-white border border-white/20">
            <Plane className="h-6 w-6 md:h-8 md:w-8 text-amber-200 mb-3 md:mb-4 mx-auto" />
            <h3 className="font-semibold text-base md:text-lg mb-2">Flight Booking</h3>
            <p className="text-sm opacity-90">Seamless airline reservations worldwide</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 text-white border border-white/20">
            <TreePalm className="h-6 w-6 md:h-8 md:w-8 text-nature-green-200 mb-3 md:mb-4 mx-auto" />
            <h3 className="font-semibold text-base md:text-lg mb-2">Safari Adventures</h3>
            <p className="text-sm opacity-90">Unforgettable wildlife experiences</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 text-white border border-white/20">
            <Map className="h-6 w-6 md:h-8 md:w-8 text-amber-200 mb-3 md:mb-4 mx-auto" />
            <h3 className="font-semibold text-base md:text-lg mb-2">Custom Tours</h3>
            <p className="text-sm opacity-90">Personalized travel experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
