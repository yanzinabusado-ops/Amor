import React, { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, Heart, Star, Camera, Play } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  caption: string;
  date: string;
  category: 'adventure' | 'romantic' | 'fun' | 'special';
}

export const DynamicGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const galleryRef = useRef<HTMLDivElement>(null);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      src: 'https://i.ibb.co/9mqYCh7g/20250121-184403.jpg',
      caption: 'Parque passaúna',
      date: '2025-01-22',
      category: 'adventure'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://i.ibb.co/Vpxt20m7/20240929-134834.jpg',
      caption: 'O brilho nos olhos dizia mais que mil palavras era amor em sua forma mais pura.',
      date: '2024-09-30',
      category: 'romantic'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://i.ibb.co/JwSt4wf7/IMG-20240718-WA0052.jpg',
      caption: 'Impulso Park',
      date: '2024-07-19',
      category: 'fun'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://i.ibb.co/cKcrVRns/20250125-154819.jpg',
      caption: 'Nossas mãos se encontraram como quem já sabia o caminho.',
      date: '2025-01-26',
      category: 'romantic'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://i.ibb.co/RkWym4gf/IMG-20241124-WA0159.jpg',
      caption: 'Pico anhangava',
      date: '2024-11-25',
      category: 'adventure'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://i.ibb.co/psyWT54/IMG-20240930-WA0013.jpg',
      caption: 'Sob o céu pintado de promessas, nossos corpos se encontraram. Um beijo e o mundo inteiro desapareceu!',
      date: '2024-10-24',
      category: 'romantic'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://i.ibb.co/Y4vp2s8q/IMG-20240622-WA0078.jpg',
      caption: 'Nosso primeiro encontro foi mais que um momento, foi o início de tudo',
      date: '2024-06-23',
      category: 'special'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://i.ibb.co/271kXD08/20240827-162639.jpg',
      caption: 'Momento aleatório em cima da árvore',
      date: '2024-08-28',
      category: 'fun'
    }
  ];

  const categories = [
    { key: 'all', label: 'Todas as Memórias', icon: <Camera className="w-5 h-5" /> },
    { key: 'romantic', label: 'Romântico', icon: <Heart className="w-5 h-5" /> },
    { key: 'adventure', label: 'Aventuras', icon: <Star className="w-5 h-5" /> },
    { key: 'fun', label: 'Diversão', icon: <Play className="w-5 h-5" /> },
    { key: 'special', label: 'Especial', icon: <ZoomIn className="w-5 h-5" /> }
  ];

  const filteredItems = filter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === filter);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (galleryRef.current) {
        const rect = galleryRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'romantic': return 'from-pink-500 to-rose-600';
      case 'adventure': return 'from-blue-500 to-cyan-600';
      case 'fun': return 'from-purple-500 to-indigo-600';
      case 'special': return 'from-yellow-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section 
      ref={galleryRef}
      className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden"
    >
      {/* Interactive background */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-3xl transition-all duration-500"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          transform: `scale(${1 + Math.sin(Date.now() * 0.001) * 0.2})`
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent px-4">
          Nosso Jardim de Memórias
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-purple-200 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          Cada foto conta uma história, cada momento capturado é uma flor em nosso jardim de amor
        </p>

        {/* Dynamic filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-16 px-4">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`group relative flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-500 hover:scale-110 touch-manipulation ${
                filter === category.key
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm text-purple-200 hover:bg-white/20 border border-white/20'
              }`}
              style={{
                transform: filter === category.key && window.innerWidth > 768 ? 'scale(1.1)' : 'scale(1)',
                boxShadow: filter === category.key ? '0 0 30px rgba(236, 72, 153, 0.4)' : 'none'
              }}
            >
              <div className="scale-75 sm:scale-100">
                {category.icon}
              </div>
              <span>{category.label}</span>
              
              {/* Sparkle effect on active */}
              {filter === category.key && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${20 + (i % 2) * 60}%`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>
        
        {/* Dynamic grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto px-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl cursor-pointer transition-all duration-700 hover:scale-105 touch-manipulation"
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: hoveredItem === item.id && window.innerWidth > 768 ? 'scale(1.05) rotateY(5deg)' : hoveredItem === item.id ? 'scale(1.05)' : 'scale(1)'
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onTouchStart={() => setHoveredItem(item.id)}
              onTouchEnd={() => setTimeout(() => setHoveredItem(null), 2000)}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image container */}
              <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125"
                  style={{
                    filter: hoveredItem === item.id ? 'brightness(1.1) saturate(1.2)' : 'brightness(1)'
                  }}
                />
                
                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                {/* Category badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(item.category)} shadow-lg`}>
                  {item.category}
                </div>
                
                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 touch-manipulation">
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2 line-clamp-2">
                    {item.caption}
                  </h3>
                  <p className="text-purple-200 text-xs sm:text-sm">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                
                {/* Floating hearts on hover */}
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <Heart
                        key={i}
                        className="absolute w-4 h-4 text-pink-400 animate-bounce opacity-60"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${20 + (i % 3) * 30}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm">
          <div className="relative max-w-6xl w-full animate-fadeIn">
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 sm:-top-16 right-0 text-white hover:text-pink-300 transition-colors z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 touch-manipulation"
            >
              <X size={window.innerWidth > 640 ? 24 : 20} />
            </button>
            
            {/* Image */}
            <div className="relative rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedItem.src}
                alt={selectedItem.caption}
                className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain"
              />
              
              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-30"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Caption */}
            <div className="text-center mt-4 sm:mt-8 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                {selectedItem.caption}
              </h3>
              <p className="text-purple-200 text-sm sm:text-base md:text-lg">
                {new Date(selectedItem.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};