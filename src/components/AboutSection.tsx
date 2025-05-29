
import { TreePalm, Users, Airplane, Map } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nature-green-800 mb-6">
            About TSM Tours & Travel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connecting you with nature's wonders through exceptional travel experiences 
            and sustainable tourism practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-nature-green-800">Our Story</h3>
            <p className="text-gray-700 leading-relaxed">
              TSM Tours & Travel was founded with a passion for connecting people with the 
              breathtaking beauty of nature. We specialize in creating unforgettable safari 
              experiences and seamless travel arrangements that respect both wildlife and 
              local communities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of experienced guides and travel experts work tirelessly to ensure 
              every journey with us becomes a cherished memory. From the vast savannas 
              to pristine beaches, we bring you closer to nature's most spectacular displays.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-nature-green-100 to-nature-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <TreePalm className="h-24 w-24 text-nature-green-600 mx-auto mb-4 animate-float" />
                <p className="text-nature-green-800 font-semibold">
                  Preserving Nature's Beauty
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-nature-green-800 text-center mb-12">
            Our Challenges & Growth
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-nature-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-nature-green-700 mb-4">
                  Current Challenges
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-nature-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Balancing tourism growth with wildlife conservation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-nature-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Adapting to post-pandemic travel requirements
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-nature-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Supporting local communities through sustainable tourism
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-nature-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Integrating technology for enhanced travel experiences
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-nature-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-nature-blue-700 mb-4">
                  Future Vision (Next 5 Years)
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-nature-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Expand to 15+ African safari destinations
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-nature-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Launch eco-luxury lodge partnerships
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-nature-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop virtual reality preview experiences
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-nature-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Achieve carbon-neutral travel operations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-nature-green-50 to-nature-blue-50 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-nature-green-600 mb-2">500+</div>
              <p className="text-gray-700">Happy Travelers</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-nature-blue-600 mb-2">25+</div>
              <p className="text-gray-700">Destinations</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-nature-green-600 mb-2">50+</div>
              <p className="text-gray-700">Safari Tours</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-nature-blue-600 mb-2">5</div>
              <p className="text-gray-700">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
