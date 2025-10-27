import React from 'react';
import HeroVRPreview from './components/HeroVRPreview';
import TrailsShowcase from './components/TrailsShowcase';
import DailyQuizTeaser from './components/DailyQuizTeaser';
import ArtisanSpotlight from './components/ArtisanSpotlight';
import { Map } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 font-semibold">
            <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-emerald-600 text-white">
              <Map size={18} />
            </span>
            <span>Kadam</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600">
            <a href="#trails" className="hover:text-neutral-900">Trails</a>
            <a href="#quiz" className="hover:text-neutral-900">Quiz</a>
            <a href="#artisans" className="hover:text-neutral-900">Artisans</a>
            <a href="#book" className="hover:text-neutral-900">Book</a>
          </nav>
          <button className="px-3 py-1.5 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-black">
            Sign in
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <HeroVRPreview />
        <div id="trails"><TrailsShowcase /></div>
        <div id="quiz"><DailyQuizTeaser /></div>
        <div id="artisans"><ArtisanSpotlight /></div>

        <section id="book" className="mt-14 rounded-2xl border border-neutral-200 p-6 bg-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Plan your next step</h3>
              <p className="text-sm text-neutral-600 mt-1">Choose a date and we’ll match you with a guide and available slots.</p>
            </div>
            <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700">Open scheduler</button>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Kadam — Walk with wisdom.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-neutral-900" href="#">Privacy</a>
            <a className="hover:text-neutral-900" href="#">Terms</a>
            <a className="hover:text-neutral-900" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
