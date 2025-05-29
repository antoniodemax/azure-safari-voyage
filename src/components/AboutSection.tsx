
import { TreePalm, Users, Plane, Map, Zap, Cpu, Rocket } from 'lucide-react';
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
            
            {/* TSM Event Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/a6a7536e-c99e-44df-b49b-873a965f3afd.png"
                  alt="TSM Team Celebration Event"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-semibold">TSM Team Celebration</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/1227b7a4-9cdc-480c-a18e-f0d423dfba32.png"
                  alt="TSM Leadership Team"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-semibold">TSM Leadership Excellence</p>
                </div>
              </div>
            </div>
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

        {/* Futuristic Learn More Section */}
        <div className="mb-20">
          <div 
            className="relative rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `url('/lovable-uploads/3b4fd6df-9762-4512-a7ec-94d708c742a9.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-green-900/90"></div>
            <div className="relative z-10 p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  The Future of Travel is Here
                </h3>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Step into tomorrow with TSM Tours & Travel's revolutionary approach to exploration
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Zap className="h-12 w-12 text-cyan-400 mb-4 mx-auto" />
                  <h4 className="text-xl font-bold mb-3 text-center">AI-Powered Itineraries</h4>
                  <p className="text-sm text-gray-200 text-center">
                    Our advanced AI algorithms create personalized safari experiences based on wildlife migration patterns, weather predictions, and your unique preferences.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Cpu className="h-12 w-12 text-purple-400 mb-4 mx-auto" />
                  <h4 className="text-xl font-bold mb-3 text-center">Virtual Reality Previews</h4>
                  <p className="text-sm text-gray-200 text-center">
                    Experience your destination before you travel with immersive VR tours of safari camps, wildlife encounters, and breathtaking landscapes.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Rocket className="h-12 w-12 text-green-400 mb-4 mx-auto" />
                  <h4 className="text-xl font-bold mb-3 text-center">Smart Conservation Tech</h4>
                  <p className="text-sm text-gray-200 text-center">
                    Track your positive impact through blockchain-verified conservation contributions and real-time wildlife protection updates.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-green-500 rounded-full p-8 max-w-2xl mx-auto">
                  <h4 className="text-2xl font-bold mb-4">Coming Soon: Holographic Guides</h4>
                  <p className="text-lg">
                    Be among the first to experience safari adventures with holographic wildlife experts 
                    who appear right beside you in the wilderness, sharing insights that bring nature to life like never before.
                  </p>
                </div>
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
