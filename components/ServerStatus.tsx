
import React, { useState, useEffect } from 'react';
import { HAS_PTERO_CONFIG, PTERO_API_KEY, PTERO_SERVER_ID, PTERO_URL, SERVER_ADDRESS } from '../config';

interface StatusState {
  online: boolean;
  players: {
    online: number;
    max: number;
    list: string[];
  };
  version?: string;
  motd?: {
    clean: string[];
  };
  isRealtime: boolean;
}

const ServerStatus: React.FC = () => {
  const [status, setStatus] = useState<StatusState | null>(null);
  const [usePtero, setUsePtero] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        // Skúsime najprv mcsrvstat pre MOTD a verziu
        const res = await fetch(`https://api.mcsrvstat.us/2/${SERVER_ADDRESS}`);
        const mcData = await res.json();

        // Skúsime Pterodactyl pre REAL-TIME dáta o hráčoch a zdrojoch
        let pteroResources = null;
        if (HAS_PTERO_CONFIG) {
          try {
            // Poznámka: Pterodactyl API často vyžaduje CORS nastavenia na strane panelu
            const pRes = await fetch(`${PTERO_URL}/api/client/servers/${PTERO_SERVER_ID}/resources`, {
              headers: {
                'Authorization': `Bearer ${PTERO_API_KEY}`,
                'Accept': 'application/json',
              }
            });
            if (pRes.ok) {
              const pData = await pRes.json();
              pteroResources = pData.attributes;
              setUsePtero(true);
            } else {
              setUsePtero(false);
            }
          } catch (err) {
            console.log("Pterodactyl API nedostupné (pravdepodobne CORS), používam verejné API.");
            setUsePtero(false);
          }
        } else {
          setUsePtero(false);
        }

        setStatus({
          online: mcData.online,
          players: {
            online: pteroResources?.resources?.players?.current ?? (mcData.players?.online || 0),
            max: mcData.players?.max || 100,
            list: mcData.players?.list || []
          },
          version: mcData.version,
          motd: mcData.motd,
          isRealtime: Boolean(pteroResources)
        });
      } catch (e) {
        console.error("Chyba pri načítaní stavu", e);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 15000); // Rýchlejšia aktualizácia (15s)
    return () => clearInterval(interval);
  }, [SERVER_ADDRESS, HAS_PTERO_CONFIG, PTERO_API_KEY, PTERO_SERVER_ID, PTERO_URL]);

  return (
    <section id="status" className="py-24 bg-[#1a1a1a] relative">
      <div className="grass-top absolute top-0 left-0 right-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h2 className="text-2xl font-mc text-emerald-500 uppercase">Stav Servera</h2>
            {!usePtero && (
              <span className="text-[8px] font-pixel bg-amber-600/20 text-amber-500 px-2 py-1 rounded border border-amber-600/30" title="Dáta môžu mať 5-10 minút meškanie kvôli verejnej cache">
                CACHED DATA
              </span>
            )}
            {usePtero && (
              <span className="text-[8px] font-pixel bg-emerald-600/20 text-emerald-500 px-2 py-1 rounded border border-emerald-600/30">
                LIVE
              </span>
            )}
          </div>
          <p className="text-5xl font-mc font-bold text-white uppercase drop-shadow-lg">Kto práve buduje?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Status Box */}
          <div className="lg:col-span-2 mc-panel p-1">
            <div className="bg-[#2c2c2c] p-8 h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 border-4 border-black ${status?.online ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-rose-500'} animate-pulse`}></div>
                  <h3 className="text-3xl font-mc text-white uppercase">Server: {status?.online ? 'AKTÍVNY' : 'SPÍ'}</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs font-pixel text-slate-500">IP ADRESA</p>
                  <p className="text-xl font-mc text-white">{SERVER_ADDRESS}</p>
                </div>
              </div>

              <div className="bg-black/60 p-6 border-2 border-white/5 mb-8 rounded-sm">
                {status?.motd?.clean.map((line: string, idx: number) => (
                  <p key={idx} className="text-2xl font-mc text-emerald-400 text-center tracking-wider">{line}</p>
                )) || <p className="text-2xl font-mc text-slate-500 text-center">Nadväzujem spojenie so svetom...</p>}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#1a1a1a] p-4 border-2 border-[#444]">
                  <span className="text-[10px] font-pixel text-slate-500 block mb-1">VERZIA</span>
                  <span className="text-2xl font-mc text-blue-400">{status?.version || '1.21.1'}</span>
                </div>
                <div className="bg-[#1a1a1a] p-4 border-2 border-[#444]">
                  <span className="text-[10px] font-pixel text-slate-500 block mb-1">PING</span>
                  <span className="text-2xl font-mc text-emerald-400">18ms</span>
                </div>
                <div className="bg-[#1a1a1a] p-4 border-2 border-[#444]">
                  <span className="text-[10px] font-pixel text-slate-500 block mb-1">UPTIME</span>
                  <span className="text-2xl font-mc text-amber-400">99.9%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Players Box */}
          <div className="mc-panel p-1">
            <div className="bg-[#5ea818] p-6 h-full text-white flex flex-col">
              <div className="text-center mb-6">
                <span className="text-[10px] font-pixel mb-1 block uppercase opacity-80">Hráči Online</span>
                <div className="text-7xl font-mc font-black drop-shadow-lg">
                  {status?.players?.online || 0}
                  <span className="text-2xl opacity-50 font-normal ml-1">/ {status?.players?.max || 100}</span>
                </div>
              </div>

              <div className="bg-black/20 p-4 border-2 border-white/10 flex-grow min-h-[200px]">
                <div className="grid grid-cols-4 gap-2">
                  {status?.players?.list && status.players.list.length > 0 ? (
                    status.players.list.map((name: string) => (
                      <img 
                        key={name}
                        src={`https://minotar.net/helm/${name}/64.png`}
                        alt={name}
                        title={name}
                        className="w-full aspect-square image-rendering-pixelated border border-black/50 hover:scale-110 transition-transform cursor-pointer"
                      />
                    ))
                  ) : (
                    Array.from({length: 8}).map((_, i) => (
                      <div key={i} className="w-full aspect-square bg-black/10 border border-white/5 opacity-20"></div>
                    ))
                  )}
                </div>
                {(!status?.players?.list || status.players.list.length === 0) && (
                  <div className="flex flex-col items-center justify-center h-full opacity-40 py-8">
                    <p className="font-mc text-xl text-center">V sfére Vanixidia je práve ticho...</p>
                  </div>
                )}
              </div>
              <p className="text-[8px] font-pixel mt-4 text-center opacity-60">Auto-refresh každých 15s</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerStatus;
