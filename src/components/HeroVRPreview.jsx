import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play, Map, Calendar } from 'lucide-react';

const HeroVRPreview = () => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden rounded-2xl bg-neutral-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/rG6J3oAq8q8w5vQF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-10 text-white">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-emerald-300/90 bg-emerald-950/40 border border-emerald-700/40 px-3 py-1 rounded-full mb-4">
            <Map size={16} /> Kadam • First Step VR Preview
          </span>
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            Step into Bengaluru’s living heritage
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80">
            Explore artisan studios and indigenous trails before you go. Take a First Step in VR, then book your walk in a tap.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition">
              <Play size={18} /> Try VR Preview
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/90 text-white font-medium hover:bg-emerald-600 transition">
              <Calendar size={18} /> Book a Trail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVRPreview;
