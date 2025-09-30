import React from 'react';
import { InteractiveParticles } from './components/InteractiveParticles';
import { CinematicHero } from './components/CinematicHero';
import { InteractiveTimeline } from './components/InteractiveTimeline';
import { DynamicGallery } from './components/DynamicGallery';
import { InteractiveLoveLetters } from './components/InteractiveLoveLetters';
import { InteractiveCountdown } from './components/InteractiveCountdown';
import { InteractiveFooter } from './components/InteractiveFooter';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-100 via-white to-purple-50 relative">
      <InteractiveParticles />

      <main className="relative z-10">
        <CinematicHero />
        <InteractiveTimeline />
        <DynamicGallery />
        <InteractiveLoveLetters />
        <InteractiveCountdown />
        <InteractiveFooter />
      </main>

      {/* Music player flutuante */}
      <MusicPlayer />
    </div>
  );
}

export default App;