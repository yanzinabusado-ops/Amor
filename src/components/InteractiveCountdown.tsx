import React, { useEffect, useState, useRef } from 'react';
import { Heart, Calendar, Sparkles, Star, Gift } from 'lucide-react';

interface TimeUnit {
  value: number;
  label: string;
  color: string;
  icon: React.ReactNode;
}

export const InteractiveCountdown: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickedUnit, setClickedUnit] = useState<string | null>(null);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const createDaisyCascade = () => {
    // Create 25 daisy flowers that fall down the page
    for (let i = 0; i < 25; i++) {
      setTimeout(() => {
        const daisy = document.createElement('div');
        daisy.innerHTML = '🌼';
        daisy.style.position = 'fixed';
        daisy.style.left = Math.random() * 100 + '%';
        daisy.style.top = '-50px';
        daisy.style.fontSize = (20 + Math.random() * 30) + 'px';
        daisy.style.zIndex = '9999';
        daisy.style.pointerEvents = 'none';
        daisy.style.animation = `daisyFall ${2 + Math.random() * 3}s linear forwards`;
        
        document.body.appendChild(daisy);
        
        // Remove daisy after animation completes
        setTimeout(() => {
          if (daisy.parentNode) {
            daisy.parentNode.removeChild(daisy);
          }
        }, 8000);
      }, i * 100); // Stagger the daisies
    }
  };

  useEffect(() => {
    // Set start date to June 25, 2024 at midnight UTC
    const startDate = new Date('2024-06-25T00:00:00Z').getTime();

    const updateElapsedTime = () => {
      const now = new Date().getTime();
      const difference = now - startDate;

      if (difference > 0) {
        setTimeElapsed({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // If somehow the current time is before the start date, show zeros
        setTimeElapsed({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    // Update immediately, then every second
    updateElapsedTime();
    const interval = setInterval(updateElapsedTime, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const timeUnits: TimeUnit[] = [
    { 
      value: timeElapsed.days, 
      label: 'Dias', 
      color: 'from-lavender-400 to-purple-500',
      icon: <Calendar className="w-8 h-8" />
    },
    { 
      value: timeElapsed.hours, 
      label: 'Horas', 
      color: 'from-purple-400 to-lavender-500',
      icon: <Star className="w-8 h-8" />
    },
    { 
      value: timeElapsed.minutes, 
      label: 'Minutos', 
      color: 'from-lavender-300 to-purple-400',
      icon: <Sparkles className="w-8 h-8" />
    },
    { 
      value: timeElapsed.seconds, 
      label: 'Segundos', 
      color: 'from-purple-300 to-lavender-400',
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const handleUnitClick = (label: string, e: React.MouseEvent) => {
    setClickedUnit(label);
    
    // Create explosion effect
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: centerX + (Math.random() - 0.5) * 200,
      y: centerY + (Math.random() - 0.5) * 200
    }));
    
    setParticles(prev => [...prev, ...newParticles]);
    
    // Clear clicked state and particles
    setTimeout(() => {
      setClickedUnit(null);
      setParticles(prev => prev.filter(p => !newParticles.includes(p)));
    }, 2000);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-lavender-100 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Interactive background */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-lavender-300/20 to-transparent rounded-full blur-3xl transition-all duration-300"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          transform: `scale(${1 + Math.sin(Date.now() * 0.001) * 0.3})`
        }}
      />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          >
            {i % 5 === 0 ? (
              <Heart className="w-6 h-6 text-lavender-400" />
            ) : i % 5 === 1 ? (
              <Star className="w-5 h-5 text-purple-400" />
            ) : i % 5 === 2 ? (
              <Sparkles className="w-4 h-4 text-lavender-300" />
            ) : i % 5 === 3 ? (
              <Gift className="w-5 h-5 text-purple-300" />
            ) : (
              <div className="w-3 h-3 bg-gradient-to-r from-lavender-400 to-purple-400 rounded-full" />
            )}
          </div>
        ))}
      </div>

      {/* Explosion particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed w-4 h-4 pointer-events-none z-50 animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        >
          <Heart className="w-4 h-4 text-lavender-400" />
        </div>
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-12">
          <div 
            className="inline-block mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110"
            style={{
              transform: window.innerWidth > 768 ? `rotate(${Math.sin(Date.now() * 0.002) * 5}deg)` : 'none'
            }}
          >
            <Calendar className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-lavender-400" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-lavender-400 via-purple-400 to-lavender-300 bg-clip-text text-transparent font-cursive px-4">
            Tempo Juntos
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-purple-700 mb-3 sm:mb-4 px-4">
            Cada momento desde que nosso amor começou
          </p>
          
          <div 
            className="text-base sm:text-lg text-lavender-500 font-semibold px-4"
            style={{
              transform: window.innerWidth > 768 ? `translateY(${Math.sin(Date.now() * 0.003) * 5}px)` : 'none'
            }}
          >
            🌼 Desde 25 de junho de 2024 🌼
          </div>
        </div>

        {/* Interactive elapsed time units */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16 px-4">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className="group relative cursor-pointer touch-manipulation"
              onClick={(e) => handleUnitClick(unit.label, e)}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div 
                className={`relative bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-lavender-200 transition-all duration-500 hover:scale-110 hover:bg-white/90 shadow-2xl overflow-hidden ${
                  clickedUnit === unit.label ? 'scale-125 shadow-3xl' : ''
                }`}
                style={{
                  transform: `
                    scale(${clickedUnit === unit.label ? 1.25 : 1}) 
                    ${window.innerWidth > 768 ? `rotateY(${mousePosition.x * 0.01}deg) rotateX(${mousePosition.y * 0.01}deg)` : ''}
                    translateY(${window.innerWidth > 768 ? Math.sin(Date.now() * 0.001 + index) * 10 : 0}px)
                  `,
                  boxShadow: clickedUnit === unit.label ? '0 0 50px rgba(196, 132, 252, 0.5)' : '0 10px 40px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${unit.color} opacity-10 transition-opacity duration-500 group-hover:opacity-20`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-2 sm:mb-4 text-purple-600 group-hover:text-lavender-500 transition-colors duration-300">
                  {unit.icon}
                </div>
                
                {/* Value */}
                <div className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-purple-700 mb-2 sm:mb-3 group-hover:text-lavender-500 transition-colors duration-300">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                
                {/* Label */}
                <div className="relative z-10 text-lavender-500 text-sm sm:text-base md:text-lg lg:text-xl font-semibold group-hover:text-purple-600 transition-colors duration-300">
                  {unit.label}
                </div>
                
                {/* Sparkle effects on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Sparkles
                      key={i}
                      className="absolute w-4 h-4 text-lavender-400 animate-ping"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + (i % 2) * 60}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Click explosion effect */}
                {clickedUnit === unit.label && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <Heart
                        key={i}
                        className="absolute w-4 h-4 sm:w-6 sm:h-6 text-lavender-400 animate-ping"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive message */}
        <div 
          className="bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto border border-lavender-200 hover:bg-white/70 transition-all duration-500 cursor-pointer group"
          style={{
            transform: window.innerWidth > 768 ? `translateY(${Math.sin(Date.now() * 0.002) * 8}px)` : 'none'
          }}
        >
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-3 sm:mb-4">
            <Heart className="w-6 h-6 sm:w-8 sm:w-10 sm:h-10 text-lavender-400 animate-pulse group-hover:scale-125 transition-transform duration-300" />
            <p className="text-xl sm:text-2xl md:text-3xl text-purple-700 font-bold group-hover:text-lavender-500 transition-colors duration-300 font-cursive text-center">
              Nossa História de Amor Continua
            </p>
            <Heart className="w-6 h-6 sm:w-8 sm:w-10 sm:h-10 text-lavender-400 animate-pulse group-hover:scale-125 transition-transform duration-300" />
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-purple-600 leading-relaxed group-hover:text-purple-700 transition-colors duration-300 text-center">
            Cada segundo que passa é mais um momento de nossa bela jornada juntos. 
            Como flores que desabrocham a cada nascer do sol, nosso amor cresce mais forte a cada batimento do coração! 🌸💜
          </p>
          
          {/* Hidden surprise message */}
          <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-gradient-to-r from-lavender-300/20 to-purple-300/20 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-lavender-300/30">
              <button
                onClick={createDaisyCascade}
                className="w-full bg-gradient-to-r from-yellow-300 to-green-300 hover:from-yellow-400 hover:to-green-400 text-green-800 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base touch-manipulation"
              >
                🌼 CLIQUE AQUI PARA UMA SURPRESA DE MARGARIDAS 🌼
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};