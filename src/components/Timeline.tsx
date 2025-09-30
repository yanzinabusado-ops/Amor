import React, { useEffect, useRef, useState } from 'react';
import { Heart, Calendar, Star, Sparkles } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Timeline: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const events: TimelineEvent[] = [
    {
      date: '25/06/2024',
      title: 'Our Beginning',
      description: 'The day our hearts found each other and our beautiful journey began.',
      icon: <Heart className="w-6 h-6" />
    },
    {
      date: '25/07/2024',
      title: 'One Month of Love',
      description: 'Celebrating our first month together with endless smiles and butterflies.',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      date: '25/09/2024',
      title: 'Growing Stronger',
      description: 'Three months of discovering each other and building something beautiful.',
      icon: <Star className="w-6 h-6" />
    },
    {
      date: '25/12/2024',
      title: 'First Christmas',
      description: 'Our first Christmas together, creating memories that will last forever.',
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
          Our Love Story
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 to-purple-500 rounded-full"></div>
          
          {events.map((event, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`relative mb-16 transition-all duration-1000 ${
                visibleItems.has(index) 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-10'
              }`}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-300">
                    <div className="text-pink-300 text-lg font-semibold mb-2">{event.date}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-purple-200 leading-relaxed">{event.description}</p>
                  </div>
                </div>
                
                {/* Icon */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-110 transform">
                    {event.icon}
                  </div>
                </div>
                
                {/* Empty space */}
                <div className="w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};