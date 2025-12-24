
import React from 'react';

const beats = [
  {
    title: 'Dobrodružná Sezóna',
    text: 'Každý mesiac nový mini-event: build-off, dungeon raid alebo PvP turnaj s unikátnymi kozmetikami.',
  },
  {
    title: 'Ekonomika hráčov',
    text: 'Trh formovaný hráčmi, aukcie a barter. Žiadne pay-to-win, všetko si vybuduješ vo svete.',
  },
  {
    title: 'Spolu sme komunita',
    text: 'Discord questy, hlasovania o budúcich updatoch a screenshot wall z vašich najlepších stavieb.',
  },
];

const LoreSection: React.FC = () => {
  return (
    <section id="lore" className="py-32 relative">
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="mc-panel bg-slate-900/90 p-12 border-emerald-900/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-pixel text-emerald-400 tracking-[0.3em] uppercase mb-2">Komunitná Energia</p>
              <h2 className="text-5xl font-mc font-bold text-white tracking-tight">Čo Ťa čaká na Vanixidii</h2>
            </div>
            <div className="text-right">
              <p className="text-lg font-mc text-slate-400 leading-tight">Žiadne proroctvá. Len živý svet, ktorý tvoríš s ostatnými hráčmi.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beats.map((item) => (
              <div key={item.title} className="mc-panel bg-[#0f1a0f]/80 p-6 border border-emerald-700/40">
                <h3 className="text-3xl font-mc font-bold text-emerald-400 mb-4">{item.title}</h3>
                <p className="text-xl font-mc text-slate-200 leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoreSection;
