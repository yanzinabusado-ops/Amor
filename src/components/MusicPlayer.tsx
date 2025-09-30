import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1); // 🔊 controle de volume (0 a 1)
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.error('Erro ao reproduzir áudio:', error);
          });
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
    }
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <>
      {/* Floating Music Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setShowPlayer(!showPlayer)}
          className="group relative w-16 h-16 bg-gradient-to-r from-purple-400 to-lavender-300 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white/30 hover:border-white/50"
          style={{ boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)' }}
        >
          <Music className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-full border-2 border-purple-300 animate-ping opacity-30" />
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Play "All of Me" 🎵
          </div>
        </button>
      </div>

      {/* Music Player Modal */}
      {showPlayer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-white via-lavender-50 to-purple-100 rounded-3xl p-8 shadow-2xl border border-purple-200 max-w-md w-full relative overflow-hidden">
            <button
              onClick={() => setShowPlayer(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-purple-200 hover:bg-purple-300 rounded-full flex items-center justify-center text-purple-700 transition-colors duration-300"
            >
              ×
            </button>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-200 rounded-full opacity-30" />
              <div className="absolute bottom-6 right-6 w-6 h-6 bg-green-200 rounded-full opacity-40" />
              <div className="absolute top-1/2 left-2 w-4 h-4 bg-purple-300 rounded-full opacity-25" />
            </div>

            <div className="relative z-10 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-lavender-300 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Music className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-800 mb-2 font-cursive">
                  All of Me
                </h3>
                <p className="text-purple-600 text-lg">by John Legend</p>
                <p className="text-purple-500 text-sm mt-2 italic">
                  "All of me loves all of you" 💜
                </p>
              </div>

              {/* Controls */}
              <div className="flex flex-col items-center justify-center space-y-4 mb-6">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={toggleMute}
                    className="w-12 h-12 bg-purple-200 hover:bg-purple-300 rounded-full flex items-center justify-center text-purple-700 transition-all duration-300 hover:scale-110"
                  >
                    {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                  </button>

                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-lavender-400 hover:from-purple-600 hover:to-lavender-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </button>

                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <div className={`w-3 h-3 bg-purple-500 rounded-full ${isPlaying ? 'animate-pulse' : ''}`} />
                  </div>
                </div>

                {/* Volume Slider */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-40 accent-purple-500 cursor-pointer"
                />
              </div>

              <p className="text-purple-600 text-sm leading-relaxed">
                Our song that captures the essence of our love – every word, every note speaks of how completely we belong to each other 🌸
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 🔊 Hidden audio element (sempre fora do modal para continuar tocando) */}
      <audio
        ref={audioRef}
        onEnded={handleAudioEnd}
        preload="auto"
      >
        <source src="/allofme.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};
