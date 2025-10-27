import React from 'react';
import { Map, Clock } from 'lucide-react';

const trails = [
  {
    id: 1,
    title: 'Bronze Casters of Chickpet',
    duration: '2.5 hrs',
    description:
      'Meet metal artisans who keep an age-old casting tradition alive. Hear guild stories and see live demos.',
    image:
      'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1600&auto=format&fit=crop',
    tags: ['Indigenous Craft', 'Workshop Access'],
  },
  {
    id: 2,
    title: "Bengaluru's Lost Lakes & Legends",
    duration: '2 hrs',
    description:
      'Walk across ancient tank sites and learn how communities shaped water, folklore, and festivals.',
    image:
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1600&auto=format&fit=crop',
    tags: ['Eco Heritage', 'Story Walk'],
  },
  {
    id: 3,
    title: 'The Woodcrafters of Channapatna',
    duration: '3 hrs',
    description:
      'Inside lacquer toy studios — meet makers, try turning, and take home a handcrafted keepsake.',
    image:
      'https://images.unsplash.com/photo-1518459031867-a89b944bffe0?q=80&w=1600&auto=format&fit=crop',
    tags: ['Hands-on', 'Family Friendly'],
  },
];

const TrailsShowcase = () => {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">Curated Trails</h2>
          <p className="text-sm text-neutral-500">Themed, community-led walks that go beyond monuments.</p>
        </div>
        <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition text-sm">
          <Map size={16} /> View all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trails.map((trail) => (
          <div key={trail.id} className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={trail.image} alt={trail.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-3 left-3 flex gap-2">
                {trail.tags.map((t) => (
                  <span key={t} className="text-xs bg-white/90 backdrop-blur px-2 py-1 rounded-full border border-white/60">{t}</span>
                ))}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{trail.title}</h3>
                <span className="inline-flex items-center gap-1 text-xs text-neutral-600">
                  <Clock size={14} /> {trail.duration}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600 line-clamp-3">{trail.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <button className="text-sm font-medium text-emerald-700 hover:text-emerald-800">VR Preview</button>
                <button className="text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-md">Book</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrailsShowcase;
