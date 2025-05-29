
import { Button } from '@/components/ui/button';
import { Airplane, TreePalm, Map } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nature-sky-300 via-nature-blue-200 to-nature-green-100"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Airplane className="h-12 w-12 text-nature-blue-600 opacity-20" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <TreePalm className="h-16 w-16 text-nature-green-600 opacity-20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Map className="h-10 w-10 text-nature-blue-500 opacity-20" />
        </div>
      </div>

      {/* Safari vehicles illustration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-nature-green-200 to-transparent">
        <div className="absolute bottom-4 left-10 w-16 h-8 bg-nature-green-800 rounded-lg opacity-30 transform rotate-12"></div>
        <div className="absolute bottom-6 right-20 w-12 h-6 bg-nature-green-700 rounded-lg opacity-25 transform -rotate-6"></div>
      </div>

      {/* Airplane illustration */}
      <div className="absolute top-1/4 right-10">
        <div className="relative">
          <Airplane className="h-24 w-24 text-nature-blue-600 animate-float" />
          <div className="absolute -bottom-2 -right-2 w-8 h-1 bg-white rounded-full opacity-60"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-1 bg-white rounded-full opacity-40"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            TSM
            <span className="block text-3xl md:text-4xl text-nature-green-200 mt-2">
              TOURS & TRAVEL
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Discover the beauty of nature with unforgettable safari adventures and seamless travel experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-nature-green-600 hover:bg-nature-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <TreePalm className="mr-2 h-5 w-5" />
              Explore Safaris
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-nature-blue-600 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Airplane className="mr-2 h-5 w-5" />
              Book Flight
            </Button>
          </div>
        </div>

        {/* Features highlight */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white">
            <Airplane className="h-8 w-8 text-nature-blue-200 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Flight Booking</h3>
            <p className="text-sm opacity-90">Seamless airline reservations worldwide</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white">
            <TreePalm className="h-8 w-8 text-nature-green-200 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Safari Adventures</h3>
            <p className="text-sm opacity-90">Unforgettable wildlife experiences</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white">
            <Map className="h-8 w-8 text-nature-blue-200 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Custom Tours</h3>
            <p className="text-sm opacity-90">Personalized travel experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
