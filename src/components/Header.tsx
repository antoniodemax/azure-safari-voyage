
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TreePalm, Users, Map, Plane } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-nature-green-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <TreePalm className="h-8 w-8 text-nature-green-600" />
              <Plane className="h-6 w-6 text-nature-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-nature-green-800">TSM</h1>
              <p className="text-xs text-nature-blue-600 -mt-1">TOURS & TRAVEL</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-nature-green-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-nature-green-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-nature-green-600 transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-nature-green-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-nature-green-600 hover:bg-nature-green-700 text-white">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className="block h-0.5 w-6 bg-gray-600"></span>
              <span className="block h-0.5 w-6 bg-gray-600"></span>
              <span className="block h-0.5 w-6 bg-gray-600"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-nature-green-100">
            <nav className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-nature-green-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-nature-green-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-nature-green-600 transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-nature-green-600 transition-colors"
              >
                Contact
              </button>
              <Button className="bg-nature-green-600 hover:bg-nature-green-700 text-white w-full mt-4">
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
