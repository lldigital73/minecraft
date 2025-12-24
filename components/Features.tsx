
import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'survival',
    title: 'Hardcore Survival',
    description: 'Preži v nehostinnom svete s vlastnými receptami a unikátnymi monštrami.',
    icon: '⚔️'
  },
  {
    id: 'economy',
    title: 'Kráľovský Trh',
    description: 'Obchoduj s ostatnými hráčmi a staň sa najbohatším magnátom Vanixidie.',
    icon: '💎'
  },
  {
    id: 'skills',
    title: 'Mystický Rozvoj',
    description: 'Získavaj XP v rôznych profesiách a odomykaj si epické schopnosti.',
    icon: '🧪'
  },
  {
    id: 'land',
    title: 'Tvoj Hrad',
    description: 'Zabezpeč si svoje územie a postav monumenty, ktoré prežijú veky.',
    icon: '🏰'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-mc text-emerald-500 uppercase tracking-[0.2em] mb-4">Unikátne Vlastnosti</h2>
          <p className="text-5xl font-mc font-bold text-white drop-shadow-lg">PREČO HRAŤ U NÁS?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="mc-panel p-8 group hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon as any}
              </div>
              <h3 className="text-3xl font-mc font-bold text-emerald-400 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-300 font-mc text-xl leading-tight">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
