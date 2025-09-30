import React, { useState } from 'react';
import { Heart, Mail } from 'lucide-react';

interface Letter {
  title: string;
  content: string;
  author: string;
  date: string;
}

export const LoveLetters: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const letters: Letter[] = [
    {
      title: 'To My Beloved Fernanda',
      content: 'Every morning I wake up grateful for having you in my life. Your smile lights up my world and your love gives meaning to everything I do. You are my dream come true.',
      author: 'Yan',
      date: '25/06/2024'
    },
    {
      title: 'My Dearest Yan',
      content: 'You came into my life like a gentle breeze that became a beautiful storm of love. Every moment with you feels like a fairytale I never want to end.',
      author: 'Fernanda',
      date: '30/06/2024'
    },
    {
      title: 'Forever Yours',
      content: 'Six months ago, I found not just a partner, but my best friend, my confidant, and my greatest love. Here\'s to forever and always, my darling.',
      author: 'Yan',
      date: '25/12/2024'
    },
    {
      title: 'My Heart\'s Song',
      content: 'In your eyes, I found my home. In your arms, I found my peace. In your heart, I found my love. You are everything I ever dreamed of and more.',
      author: 'Fernanda',
      date: '01/01/2025'
    }
  ];

  const toggleCard = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-rose-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
          Love Letters
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {letters.map((letter, index) => (
            <div
              key={index}
              className="relative h-80 perspective-1000 cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div
                className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${
                  flippedCards.has(index) ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 border border-pink-200">
                  <Mail className="w-16 h-16 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold text-purple-800 mb-2 text-center">
                    {letter.title}
                  </h3>
                  <p className="text-purple-600 text-center">Click to open</p>
                  <Heart className="w-8 h-8 text-pink-500 mt-4 animate-pulse" />
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-2xl p-8 border border-purple-200">
                  <div className="h-full flex flex-col">
                    <div className="text-sm text-purple-600 mb-2">{letter.date}</div>
                    <div className="flex-1 overflow-y-auto">
                      <p className="text-purple-800 leading-relaxed text-lg font-medium italic">
                        "{letter.content}"
                      </p>
                    </div>
                    <div className="mt-4 text-right">
                      <p className="text-purple-700 font-semibold">
                        With all my love,<br />
                        {letter.author} 💕
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};