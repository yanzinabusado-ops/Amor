import React, { useEffect, useState } from 'react';
import { Heart, Calendar } from 'lucide-react';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-06-25T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <Calendar className="w-16 h-16 mx-auto mb-4 text-pink-300" />
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            Our First Anniversary
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Counting down to our special day
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-pink-300 text-lg font-semibold">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-2">
          <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
          <p className="text-2xl text-white font-semibold">
            June 25, 2025
          </p>
          <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
};