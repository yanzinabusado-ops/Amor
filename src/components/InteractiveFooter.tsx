import React, { useState, useRef, useEffect } from 'react';
import { Heart, Sparkles, Star, Gift, Music } from 'lucide-react';

export const InteractiveFooter: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickedHeart, setClickedHeart] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, type: string}>>([]);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleHeartClick = (e: React.MouseEvent) => {
    setClickedHeart(true);
    
    // Criar explosão de partículas
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      x: centerX + (Math.random() - 0.5) * 300,
      y: centerY + (Math.random() - 0.5) * 300,
      type: ['heart', 'star', 'sparkle'][Math.floor(Math.random() * 3)]
    }));
    
    setParticles(prev => [...prev, ...newParticles]);
    
    setTimeout(() => {
      setClickedHeart(false);
      setParticles(prev => prev.filter(p => !newParticles.includes(p)));
    }, 3000);
  };

  const getParticleIcon = (type: string) => {
    switch (type) {
      case 'heart': return <Heart className="w-4 h-4 text-pink-400" />;
      case 'star': return <Star className="w-4 h-4 text-purple-400" />;
      case 'sparkle': return <Sparkles className="w-4 h-4 text-blue-400" />;
      default: return <Heart className="w-4 h-4 text-pink-400" />;
    }
  };

  return (
    <footer 
      ref={footerRef}
      className="bg-gradient-to-r from-purple-900 via-indigo-900 to-pink-900 text-white py-20 relative overflow-hidden"
    >
      {/* Fundo interativo */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-pink-500/15 to-transparent rounded-full blur-3xl transition-all duration-500"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          transform: `scale(${1 + Math.sin(Date.now() * 0.001) * 0.2})`
        }}
      />
      
      {/* Elementos flutuantes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          >
            {i % 4 === 0 ? (
              <Heart className="w-8 h-8 text-pink-400" />
            ) : i % 4 === 1 ? (
              <Star className="w-6 h-6 text-purple-400" />
            ) : i % 4 === 2 ? (
              <Sparkles className="w-7 h-7 text-blue-400" />
            ) : (
              <Gift className="w-6 h-6 text-rose-400" />
            )}
          </div>
        ))}
      </div>

      {/* Partículas da explosão */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-50 animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        >
          {getParticleIcon(particle.type)}
        </div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Título interativo */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8 px-4">
            <Heart 
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-400 cursor-pointer transition-all duration-300 hover:scale-125 touch-manipulation ${
                clickedHeart ? 'animate-ping scale-150' : 'animate-pulse'
              }`}
              onClick={handleHeartClick}
              style={{
                filter: clickedHeart ? 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.8))' : 'none'
              }}
            />
            <h3 
              className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-lavender-400 via-purple-400 to-lavender-300 bg-clip-text text-transparent cursor-default hover:scale-105 transition-transform duration-300"
              style={{
                transform: window.innerWidth > 768 ? `perspective(1000px) rotateY(${mousePosition.x * 0.01}deg)` : 'none'
              }}
            >
              Yan & Fernanda
            </h3>
            <Heart 
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-400 cursor-pointer transition-all duration-300 hover:scale-125 touch-manipulation ${
                clickedHeart ? 'animate-ping scale-150' : 'animate-pulse'
              }`}
              onClick={handleHeartClick}
              style={{
                filter: clickedHeart ? 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.8))' : 'none'
              }}
            />
          </div>
          
          {/* Frase animada */}
          <div 
            className="relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 max-w-4xl mx-auto border border-white/20 hover:bg-white/15 transition-all duration-500 cursor-default group"
            style={{
              transform: window.innerWidth > 768 ? `translateY(${Math.sin(Date.now() * 0.002) * 5}px)` : 'none'
            }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-200 mb-3 sm:mb-4 leading-relaxed italic font-light group-hover:text-white transition-colors duration-300 text-center">
              "Em você, encontrei o amor da minha vida e meu amigo mais próximo e verdadeiro. 
              Cada dia com você é uma nova página em nossa bela história de amor."
            </p>
            
            <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-pink-300 group-hover:text-pink-200 transition-colors duration-300">
              <Star className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-sm sm:text-base">Para Sempre e Sempre</span>
              <Star className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>
        
        {/* Seção inferior */}
        <div className="border-t border-white/20 pt-8 sm:pt-12 text-center px-4">
          <div 
            className="mb-4 sm:mb-6 cursor-default hover:scale-105 transition-transform duration-300"
            style={{
              transform: window.innerWidth > 768 ? `translateX(${Math.sin(Date.now() * 0.003) * 10}px)` : 'none'
            }}
          >
            <p className="text-purple-300 text-base sm:text-lg font-semibold">
              Feito com 💕 para nossa eterna história de amor
            </p>
          </div>
          
          <div 
            className="text-purple-400 cursor-default hover:text-pink-300 transition-colors duration-300"
            style={{
              transform: window.innerWidth > 768 ? `translateX(${Math.cos(Date.now() * 0.0025) * 8}px)` : 'none'
            }}
          >
            <p className="text-xs sm:text-sm">© 2024 - Para Sempre e Sempre ✨</p>
            <p className="text-xs mt-1 sm:mt-2 opacity-70">
              Cada pixel criado com amor, cada animação cheia dos nossos sonhos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
