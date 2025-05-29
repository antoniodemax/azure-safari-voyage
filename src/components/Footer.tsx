
import { TreePalm, Plane, Users, Map } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nature-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TreePalm className="h-8 w-8 text-nature-green-300" />
              <Plane className="h-6 w-6 text-nature-blue-300" />
              <div>
                <h3 className="text-xl font-bold">TSM</h3>
                <p className="text-sm text-nature-green-300">TOURS & TRAVEL</p>
              </div>
            </div>
            <p className="text-nature-green-100 text-sm">
              Creating unforgettable travel experiences that connect you with nature's wonders 
              while supporting sustainable tourism.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-nature-green-100 text-sm">
              <li>Safari Tours</li>
              <li>Flight Booking</li>
              <li>Custom Travel Packages</li>
              <li>Group Adventures</li>
              <li>Wildlife Photography Tours</li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Destinations</h4>
            <ul className="space-y-2 text-nature-green-100 text-sm">
              <li>Kenya Safari</li>
              <li>Tanzania Expeditions</li>
              <li>South Africa Tours</li>
              <li>Botswana Adventures</li>
              <li>Rwanda Gorilla Trekking</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-2 text-nature-green-100 text-sm">
              <p>info@tsmtoursandtravel.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Adventure Street<br />Safari City, SC 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-nature-green-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-nature-green-200 text-sm">
              © 2024 TSM Tours & Travel. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-nature-green-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-nature-green-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-nature-green-200 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
