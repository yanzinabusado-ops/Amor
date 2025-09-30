import React, { useEffect, useRef, useState } from 'react';
import { Heart, Calendar, Star, Sparkles, Camera, Music, Gift } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  media?: {
    type: 'image' | 'video';
    url: string;
  };
  color: string;
  surprise?: string;
}

export const InteractiveTimeline: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const events: TimelineEvent[] = [
    {
      date: '25/06/2024',
      title: 'O Início do Para Sempre',
      description: 'Dois corações se encontraram na dança cósmica do destino. O universo conspirou para nos unir neste dia.',
      icon: <Heart className="w-8 h-8" />,
      media: {
        type: 'image',
        url: 'https://i.ibb.co/ymNqPCQD/20240622-220701.jpg'
      },
      color: 'from-pink-500 to-rose-600',
      surprise: '💕 Primeira faísca do amor!'
    },
    {
      date: '05/08/2024',
      title: 'A caminho do 2° mês juntos',
      description: 'Quase dois meses descobrindo um ao outro, de olhares roubados e sonhos sussurrados. Cada momento parecia uma bela canção.',
      icon: <Music className="w-8 h-8" />,
      media: {
        type: 'image',
        url: 'https://i.ibb.co/ymsSnQQX/IMG-20240805-WA0053.jpg'
      },
      color: 'from-purple-500 to-indigo-600',
      surprise: '🎵 Nossa música começou a tocar!'
    },
    {
      date: '25/09/2024',
      title: 'Crescendo Mais Fortes',
      description: 'Três meses construindo algo lindo juntos. Cada desafio nos tornou mais fortes, cada alegria dobrou ao compartilhar.',
      icon: <Star className="w-8 h-8" />,
      media: {
        type: 'image',
        url: 'https://i.ibb.co/rKQ1fs0x/IMG-20240929-WA0064.jpg'
      },
      color: 'from-blue-500 to-cyan-600',
      surprise: '⭐ Nos tornamos as estrelas um do outro!'
    },
    {
      date: '25/12/2024',
      title: 'Primeiro Natal Juntos',
      description: 'Nosso primeiro Natal juntos marcou mais que uma celebração, foi o início de uma promessa. O pedido oficial tornou-se uma memória que aquecerá nossos corações por toda a vida.',
      icon: <Gift className="w-8 h-8" />,
      media: {
        type: 'image',
        url: 'https://i.ibb.co/5WRbLc8m/IMG-20241225-WA0010.jpg'
      },
      color: 'from-emerald-500 to-teal-600',
      surprise: '💍🎄Magia do Natal com você🎄💍'
    },
    {
      date: '25/06/2025',
      title: 'Nosso Primeiro Aniversário',
      description: 'Um ano completo de amor, risadas e aventuras infinitas. Um brinde a muitos mais anos escrevendo nossa história de amor juntos.',
      icon: <Camera className="w-8 h-8" />,
      media: {
        type: 'image',
        url: 'https://i.ibb.co/BHFLFdw2/upscalemedia-transformed.jpg'
      },
      color: 'from-violet-500 to-purple-600',
      surprise: '🎉 Um ano de pura magia!'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => new Set(prev).add(index));
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Interactive background elements */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-3xl transition-all duration-300"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 md:mb-20 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent px-4">
          Nossa História de Amor Floresce
        </h2>
        
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Dynamic timeline line */}
          <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 sm:w-2 h-full bg-gradient-to-b from-pink-400 via-purple-500 to-blue-500 rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-400 via-purple-500 to-blue-500 rounded-full animate-pulse opacity-50" />
          </div>
          
          {events.map((event, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`relative mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
                visibleItems.has(index) 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-20'
              }`}
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <div className={`flex items-center ${window.innerWidth > 640 ? (index % 2 === 0 ? 'flex-row' : 'flex-row-reverse') : 'flex-row'}`}>
                {/* Content card */}
                <div className={`w-full sm:w-5/12 ${window.innerWidth > 640 ? (index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12') : 'text-left pl-12'}`}>
                  <div 
                    className={`relative bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/15 cursor-pointer overflow-hidden ${
                      activeItem === index ? 'transform scale-105 shadow-3xl' : ''
                    }`}
                    style={{
                      transform: activeItem === index && window.innerWidth > 768 ? 'scale(1.05) rotateY(5deg)' : activeItem === index ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-10 transition-opacity duration-500 ${
                      activeItem === index ? 'opacity-20' : 'opacity-10'
                    }`} />
                    
                    {/* Floating particles on hover */}
                    {activeItem === index && (
                      <div className="absolute inset-0 pointer-events-none">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <Sparkles
                            key={i}
                            className="absolute w-4 h-4 text-pink-400 animate-ping opacity-60"
                            style={{
                              left: `${20 + i * 10}%`,
                              top: `${20 + (i % 3) * 30}%`,
                              animationDelay: `${i * 0.2}s`
                            }}
                          />
                        ))}
                      </div>
                    )}
                    
                    <div className="relative z-10">
                      <div className="text-pink-300 text-lg font-semibold mb-3 flex items-center justify-between">
                        <span>{event.date}</span>
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 transition-colors duration-300 hover:text-pink-300">
                        {event.title}
                      </h3>
                      
                      <p className="text-purple-200 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                        {event.description}
                      </p>
                      
                      {/* Media preview */}
                      {event.media && (
                        <div className="mb-3 sm:mb-4 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <img
                            src={event.media.url}
                            alt={event.title}
                            className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      )}
                      
                      {/* Surprise message */}
                      {event.surprise && activeItem === index && (
                        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-pink-400/30 animate-fadeIn">
                          <p className="text-pink-300 font-semibold text-center text-sm sm:text-base">
                            {event.surprise}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Interactive icon */}
                <div className="hidden sm:flex w-2/12 justify-center">
                  <div 
                    className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-500 hover:scale-125 cursor-pointer ${
                      activeItem === index ? 'scale-125 shadow-3xl' : ''
                    }`}
                    style={{
                      transform: `scale(${activeItem === index ? 1.25 : 1}) rotate(${activeItem === index && window.innerWidth > 768 ? 360 : 0}deg)`,
                      boxShadow: activeItem === index ? '0 0 40px rgba(236, 72, 153, 0.5)' : '0 10px 30px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div className="scale-75 sm:scale-100">
                      {event.icon}
                    </div>
                    
                    {/* Pulsing ring */}
                    <div className={`absolute inset-0 rounded-full border-2 border-white/30 transition-all duration-500 ${
                      activeItem === index ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
                    }`} />
                  </div>
                </div>
                
                {/* Empty space */}
                <div className="hidden sm:block w-5/12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};