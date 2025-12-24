
import React, { useState, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { LoreEntry } from '../types';

const LoreSection: React.FC = () => {
  const [lore, setLore] = useState<LoreEntry | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchLore = async () => {
    setLoading(true);
    const data = await geminiService.generateLore();
    setLore(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchLore();
  }, []);

  return (
    <section id="lore" className="py-32 relative">
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="mc-panel bg-slate-900/90 p-12 text-center border-emerald-900/50">
          <div className="inline-block p-4 bg-black/50 border-4 border-emerald-500 mb-8 rounded-full">
            <svg className="w-12 h-12 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z" />
            </svg>
          </div>
          
          <h2 className="text-5xl font-mc font-bold text-white mb-8 tracking-tighter">PROROCTVÁ VANIXIDIE</h2>
          
          <div className="min-h-[160px] flex flex-col items-center justify-center">
            {loading ? (
              <div className="text-emerald-500 font-pixel text-xs animate-pulse">Čítam staroveké zvitky...</div>
            ) : lore ? (
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-mc font-bold text-emerald-400 mb-6 tracking-wide uppercase">
                  &quot;{lore.title}&quot;
                </h3>
                <p className="text-2xl text-slate-300 font-mc leading-relaxed italic px-4 md:px-20">
                  {lore.content}
                </p>
              </div>
            ) : null}
          </div>

          <button 
            onClick={fetchLore}
            className="mt-12 mc-button px-8 py-3 font-mc text-xl text-emerald-400 border-emerald-500/30"
          >
            PRIVOLAŤ NOVÚ VÍZIU
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoreSection;
