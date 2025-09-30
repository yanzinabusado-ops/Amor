import React, { useEffect, useState, useRef } from 'react';
import { Heart, ArrowDown, Sparkles } from 'lucide-react';

export const CinematicHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger load animation
    setTimeout(() => setIsLoaded(true), 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
    >
      {/* Dynamic background layers */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-lavender-200 via-purple-100 to-white transition-all duration-1000"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0005})`,
          filter: `hue-rotate(${mousePosition.x * 0.1}deg)`
        }}
      />
      
      {/* Interactive light orbs */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-lavender-300/40 to-transparent rounded-full blur-3xl transition-all duration-300"
        style={{
          left: mousePosition.x * 0.05,
          top: mousePosition.y * 0.05,
          transform: `scale(${1 + Math.sin(Date.now() * 0.001) * 0.2})`
        }}
      />
      <div 
        className="absolute w-80 h-80 bg-gradient-radial from-yellow-200/30 to-transparent rounded-full blur-3xl transition-all duration-500"
        style={{
          right: mousePosition.x * 0.03,
          bottom: mousePosition.y * 0.03,
          transform: `scale(${1 + Math.cos(Date.now() * 0.0015) * 0.3})`
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="w-6 h-6 text-pink-400" />
            ) : i % 3 === 1 ? (
              <Sparkles className="w-5 h-5 text-lavender-400" />
            ) : (
              <div className="w-2 h-2 bg-yellow-300 rounded-full" />
            )}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-2000 ${
        isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
      }`}>
        
        {/* Animated heart */}
        <div className="mb-8 relative">
          <Heart 
            className="w-24 h-24 mx-auto mb-6 text-lavender-400 transition-all duration-300 hover:scale-125 cursor-pointer"
            style={{
              filter: `drop-shadow(0 0 20px rgba(196, 132, 252, 0.5))`,
              transform: `scale(${1 + Math.sin(Date.now() * 0.003) * 0.1}) rotate(${mousePosition.x * 0.01}deg)`
            }}
          />
          
          {/* Pulsing rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-lavender-400/40 rounded-full animate-ping" />
            <div className="absolute w-40 h-40 border border-purple-300/30 rounded-full animate-pulse" />
          </div>
        </div>
        
        {/* Main title with cinematic effect */}
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-lavender-400 via-purple-400 to-lavender-300 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 cursor-default text-center px-4"
          style={{
            textShadow: '0 0 40px rgba(196, 132, 252, 0.4)',
            transform: window.innerWidth > 768 ? `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)` : 'none'
          }}
        >
          Yan & Fernanda
        </h1>
        
        {/* Animated subtitle */}
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-purple-700 mb-6 sm:mb-8 font-light leading-relaxed px-4">
          <div 
            className="block mb-2 sm:mb-4 transition-all duration-300 hover:text-lavender-500 cursor-default font-cursive"
            style={{
              transform: window.innerWidth > 768 ? `translateX(${Math.sin(Date.now() * 0.002) * 10}px)` : 'none'
            }}
          >
            🤍All of me loves all of you🤍
          </div>
          <div 
            className="text-lavender-500 text-lg sm:text-xl md:text-2xl lg:text-3xl"
            style={{
              transform: window.innerWidth > 768 ? `translateX(${Math.cos(Date.now() * 0.0025) * 8}px)` : 'none'
            }}
          >
            Desde 25 de junho de 2024 
          </div>
        </div>

        {/* Interactive description */}
        <p 
          className="text-base sm:text-lg md:text-xl text-purple-600 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 transition-all duration-300 hover:text-purple-700 cursor-default italic px-4"
          style={{
            transform: window.innerWidth > 768 ? `translateY(${Math.sin(Date.now() * 0.001) * 5}px)` : 'none'
          }}
        >
          Entre em nosso jardim de amor, onde cada momento floresce como margaridas na primavera, 
          cada toque carrega a suave fragrância da lavanda, e cada batimento do coração escreve poesia em pétalas.
        </p>
        
        {/* Interactive CTA button */}
        <button
          onClick={scrollToContent}
          className="group relative inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-lavender-400 to-purple-500 hover:from-lavender-500 hover:to-purple-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-white font-semibold text-lg sm:text-xl transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-lavender-400/30 overflow-hidden font-cursive touch-manipulation"
          style={{
            transform: window.innerWidth > 768 ? `translateY(${Math.sin(Date.now() * 0.003) * 3}px)` : 'none'
          }}
        >
          {/* Button background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-lavender-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <span className="relative z-10">Entre em Nosso Jardim</span>
          <ArrowDown className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-1 group-hover:scale-110 transition-all duration-300" />
          
          {/* Sparkle effects */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {Array.from({ length: 6 }).map((_, i) => (
              <Sparkles
                key={i}
                className="absolute w-4 h-4 text-white animate-ping"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + (i % 2) * 60}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-purple-500/70 animate-bounce cursor-pointer"
        onClick={scrollToContent}
      >
        <div className="flex flex-col items-center space-y-1 sm:space-y-2">
          <span className="text-xs sm:text-sm">Role para explorar</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
    </section>
  );
};