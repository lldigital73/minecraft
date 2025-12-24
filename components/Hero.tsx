
import React, { useState } from 'react';
import { HERO_IMAGE_URL, HERO_VIDEO_URL, SERVER_ADDRESS } from '../config';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const serverIp = SERVER_ADDRESS;
  const heroImage = HERO_IMAGE_URL;
  const heroVideo = HERO_VIDEO_URL;
  const useVideo = Boolean(heroVideo);

  const handleCopy = () => {
    navigator.clipboard.writeText(serverIp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Epic Minecraft wallpaper / video background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {useVideo ? (
          <video
            className="w-full h-full object-cover"
            src={heroVideo}
            poster={heroImage}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={heroImage}
            alt="Minecraft epic landscape"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#1a1a1a]"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
        {/* Creeper was removed from here */}
        
        <h1 className="text-7xl md:text-9xl font-mc font-bold text-white mb-2 tracking-tighter drop-shadow-[0_8px_0px_#000]">
          VANIXIDIA<span className="text-emerald-500">.EU</span>
        </h1>
        
        <p className="text-2xl md:text-4xl font-mc text-emerald-300 mb-12 max-w-4xl mx-auto tracking-widest drop-shadow-[2px_2px_0px_#000] uppercase">
          Epické Survival Dobrodružstvo Čaká
        </p>
        
        <div className="flex flex-col items-center space-y-8">
          {/* IP Container */}
          <div className="mc-panel p-1 max-w-xl w-full border-emerald-500/50">
            <div className="bg-[#1e1e1e]/95 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <span className="text-[10px] font-pixel text-emerald-500 mb-2 block uppercase">Adresa Servera</span>
                <span className="text-3xl font-mc text-white tracking-[0.1em]">{serverIp}</span>
              </div>
              <button 
                onClick={handleCopy}
                className={`mc-button px-8 py-3 font-mc text-2xl min-w-[180px] ${copied ? 'mc-button-green' : ''}`}
              >
                {copied ? 'SKOPÍROVANÉ' : 'KOPÍROVAŤ'}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#status" className="mc-button mc-button-green px-12 py-5 font-mc text-3xl hover:scale-105 shadow-2xl">
              HRAŤ TERAZ
            </a>
            <a href="https://discord.gg/vanixidia" target="_blank" className="mc-button px-12 py-5 font-mc text-3xl hover:scale-105 shadow-2xl">
              DISCORD
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
    </section>
  );
};

export default Hero;
