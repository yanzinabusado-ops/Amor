import React from 'react';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="w-8 h-8 text-pink-400" />
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Yan & Fernanda
            </h3>
            <Heart className="w-8 h-8 text-pink-400" />
          </div>
          
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed italic">
            "In you, I've found the love of my life and my closest, truest friend."
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Instagram, label: 'Instagram' },
              { icon: Facebook, label: 'Facebook' },
              { icon: Twitter, label: 'Twitter' }
            ].map(({ icon: Icon, label }, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-pink-300 hover:text-white hover:bg-pink-500 transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-purple-300">
            Made with 💕 for our eternal love story
          </p>
          <p className="text-purple-400 text-sm mt-2">
            © 2024 - Forever and Always
          </p>
        </div>
      </div>
    </footer>
  );
};