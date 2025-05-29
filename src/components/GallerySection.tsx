
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Camera } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using the uploaded images
  const galleryImages = [
    {
      src: '/lovable-uploads/963e8edd-a832-4e18-a55b-c88b0e4e1ec0.png',
      title: 'TechSpaceMasters Anniversary Celebration',
      description: 'Team celebration with awards and recognition ceremony'
    },
    {
      src: '/lovable-uploads/ddab65b9-6424-4688-8999-d882b46d31c3.png',
      title: 'TSM Affiliate Program Launch',
      description: 'Launching our exciting affiliate program for partners'
    }
  ];

  // Placeholder images for additional gallery items
  const additionalImages = [
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800',
      title: 'Safari Wildlife Experience',
      description: 'Magnificent wildlife encounters in their natural habitat'
    },
    {
      src: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800',
      title: 'African Safari Adventure',
      description: 'Breathtaking moments from our safari expeditions'
    },
    {
      src: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=800',
      title: 'Mountain Wildlife',
      description: 'Stunning wildlife photography from mountain regions'
    },
    {
      src: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800',
      title: 'Desert Safari',
      description: 'Camel trekking adventures across desert landscapes'
    }
  ];

  const allImages = [...galleryImages, ...additionalImages];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-nature-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nature-green-800 mb-6">
            Our Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating milestones, adventures, and the incredible moments 
            shared with our TechSpaceMasters community and travel enthusiasts.
          </p>
        </div>

        {/* Featured Anniversary Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-nature-green-700 text-center mb-8 flex items-center justify-center">
            <Users className="mr-3 h-6 w-6" />
            TechSpaceMasters Anniversary Events
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-semibold text-lg mb-2">{image.title}</h4>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Travel Adventures Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-nature-blue-700 text-center mb-8 flex items-center justify-center">
            <Camera className="mr-3 h-6 w-6" />
            Travel Adventures Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
                    <p className="text-xs opacity-90">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-nature-green-800 mb-4">
              Join Our Next Adventure
            </h3>
            <p className="text-gray-600 mb-6">
              Be part of our growing community and create your own unforgettable memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-nature-green-600 hover:bg-nature-green-700 text-white">
                Book Your Safari
              </Button>
              <Button variant="outline" className="border-nature-blue-600 text-nature-blue-600 hover:bg-nature-blue-50">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
