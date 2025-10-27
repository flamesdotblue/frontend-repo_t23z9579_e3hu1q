import React from 'react';
import { Play } from 'lucide-react';

const artisans = [
  {
    id: 1,
    name: 'Sharada Devi',
    craft: 'Lacquer Toy Artisan — Channapatna',
    image: 'https://images.unsplash.com/photo-1513346940221-6f673d962e97?q=80&w=1600&auto=format&fit=crop',
    blurb: 'Her studio carries forward a 200-year lineage of eco-friendly woodcraft and natural dyes.',
  },
  {
    id: 2,
    name: 'M. Raju',
    craft: 'Bronze Caster — Chickpet',
    image: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?q=80&w=1600&auto=format&fit=crop',
    blurb: 'From temple bells to ritual lamps, Raju-sir shapes metal with gravity-cast precision.',
  },
  {
    id: 3,
    name: 'Haseena Begum',
    craft: 'Bidri Inlay — Shivajinagar',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1600&auto=format&fit=crop',
    blurb: 'A master of silver on blackened alloy, preserving a Deccan legacy in contemporary forms.',
  },
];

const ArtisanSpotlight = () => {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">Artisan’s Digital Studio</h2>
          <p className="text-sm text-neutral-500">Meet the makers. Watch, learn, and support directly.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artisans.map((a) => (
          <div key={a.id} className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
            <div className="relative aspect-[16/10]">
              <img src={a.image} alt={a.name} className="h-full w-full object-cover" />
              <button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 text-white backdrop-blur">
                <Play size={16} /> Watch process
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{a.name}</h3>
              <p className="text-sm text-neutral-600">{a.craft}</p>
              <p className="mt-2 text-sm text-neutral-700 line-clamp-3">{a.blurb}</p>
              <div className="mt-3 flex items-center gap-2">
                <button className="text-sm font-medium text-white bg-neutral-900 hover:bg-black px-3 py-1.5 rounded-md">View profile</button>
                <button className="text-sm font-medium text-emerald-700 hover:text-emerald-800">Support</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtisanSpotlight;
