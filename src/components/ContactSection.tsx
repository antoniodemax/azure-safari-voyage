
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TreePalm, Airplane, Users, Map } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-nature-blue-50 to-nature-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nature-green-800 mb-6">
            Start Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to explore the world with TSM Tours & Travel? 
            Get in touch and let us create your perfect adventure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-nature-green-800 mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-nature-green-100 rounded-full flex items-center justify-center">
                    <Airplane className="h-6 w-6 text-nature-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Flight Bookings</h4>
                    <p className="text-gray-600">Worldwide airline reservations</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-nature-blue-100 rounded-full flex items-center justify-center">
                    <TreePalm className="h-6 w-6 text-nature-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Safari Tours</h4>
                    <p className="text-gray-600">Customized wildlife experiences</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-nature-green-100 rounded-full flex items-center justify-center">
                    <Map className="h-6 w-6 text-nature-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Custom Tours</h4>
                    <p className="text-gray-600">Personalized travel planning</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-nature-green-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-nature-green-800 mb-4">Contact Information</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> info@tsmtoursandtravel.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Adventure Street, Safari City</p>
                  <p><strong>Business Hours:</strong> Mon-Fri 9AM-6PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-nature-green-800 mb-6">
                Plan Your Adventure
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Travel Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-transparent">
                    <option>Select your interest</option>
                    <option>Safari Tours</option>
                    <option>Flight Booking</option>
                    <option>Custom Travel Package</option>
                    <option>Group Tours</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-transparent"
                    placeholder="Tell us about your dream adventure..."
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-nature-green-600 hover:bg-nature-green-700 text-white py-3 text-lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
