import React, { useEffect, useState } from 'react';
import { Heart, ArrowDown } from 'lucide-react';
import { AnimatedText } from './AnimatedText';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <Heart className="w-20 h-20 mx-auto mb-6 text-pink-400 animate-pulse" />
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
            Yan & Fernanda
          </h1>
          
          <div className="text-2xl md:text-4xl text-white mb-8 font-light leading-relaxed">
            <AnimatedText 
              text="All of me loves all of you"
              className="block mb-4"
              speed={150}
            />
            <AnimatedText 
              text="Since June 25, 2024"
              delay={3500}
              speed={100}
              className="text-pink-300"
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
            A love story written in the stars, told through moments that take our breath away
          </p>
          
          <button
            onClick={scrollToContent}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl mt-8"
          >
            <span>Explore Our Journey</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-400 opacity-20 animate-bounce"
            size={Math.random() * 20 + 10}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};