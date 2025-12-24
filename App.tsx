
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ServerStatus from './components/ServerStatus';
import NewsSection from './components/NewsSection';
import LoreSection from './components/LoreSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30 selection:text-emerald-300">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Grass Transition */}
        <div className="grass-top"></div>
        
        <Features />

        <LoreSection />
        
        <NewsSection />

        <section id="rules" className="py-24 bg-[#0d0d0d] relative">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mc-panel p-8 bg-[#1a1a1a]">
              <h2 className="text-4xl font-mc font-bold text-white text-center mb-8 uppercase tracking-widest">Kódex Čestného Hráča</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mc text-2xl">
                <div className="flex gap-4">
                  <span className="text-emerald-500 font-bold">01.</span>
                  <p className="text-slate-300">Nenič cudzie stavby (Griefing je zakázaný).</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-emerald-500 font-bold">02.</span>
                  <p className="text-slate-300">Používanie cheatov znamená okamžitý ban.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-emerald-500 font-bold">03.</span>
                  <p className="text-slate-300">Správaj sa k ostatným slušne a čestne.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-emerald-500 font-bold">04.</span>
                  <p className="text-slate-300">Rešpektuj pokyny administrátorov.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServerStatus />
      </main>

      <footer className="py-16 bg-[#000] border-t-8 border-[#3a6b0f] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600 border-4 border-black flex items-center justify-center shadow-[inset_2px_2px_0_#82d134]">
                <span className="text-xl font-mc font-bold text-white">V</span>
              </div>
              <span className="text-3xl font-mc font-bold tracking-widest text-white uppercase">VANIXIDIA.EU</span>
            </div>
            
            <p className="text-slate-500 font-mc text-xl max-w-xl mx-auto leading-tight">
              Nie sme oficiálny produkt Minecraftu. Nie sme schválení ani spojení so spoločnosťou Mojang alebo Microsoft.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-lg font-mc uppercase tracking-widest text-emerald-500/80 pt-4">
              <a href="#rules" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-emerald-500">Pravidlá</a>
              <a href="#" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-emerald-500">Obchod</a>
              <a href="https://discord.gg/vanixidia" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-emerald-500">Discord</a>
            </div>
            
            <p className="text-slate-600 font-mc text-lg pt-12 opacity-40">
              &copy; {new Date().getFullYear()} Vanixidia.eu &bull; Managed by Vagonbrei Operations
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
