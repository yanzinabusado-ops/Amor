import React, { useState } from 'react';
import { X } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    {
      src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Our first adventure together'
    },
    {
      src: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Sunset moments'
    },
    {
      src: 'https://images.pexels.com/photos/2133982/pexels-photo-2133982.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Coffee dates and conversations'
    },
    {
      src: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Dancing under the stars'
    },
    {
      src: 'https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Beach walks and laughter'
    },
    {
      src: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Cozy evenings together'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
          Our Memories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-purple-500/25"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">{image.caption}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].caption}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-xl">
              {images[selectedImage].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};