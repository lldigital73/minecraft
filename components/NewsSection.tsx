
import React, { useState, useEffect } from 'react';
import { geminiService, NewsUpdate } from '../services/geminiService';

const NewsSection: React.FC = () => {
  const [news, setNews] = useState<NewsUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await geminiService.generateServerNews();
      setNews(data);
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <section id="news" className="py-24 bg-[#111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-mc text-emerald-500 uppercase mb-2">Čo je nové?</h2>
          <p className="text-5xl font-mc font-bold text-white uppercase drop-shadow-lg">KRÁĽOVSKÝ SPRAVODAJ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="mc-panel p-8 bg-black/40 animate-pulse">
                <div className="h-6 w-20 bg-emerald-900 mb-4"></div>
                <div className="h-8 w-full bg-slate-800 mb-4"></div>
                <div className="h-16 w-full bg-slate-800/50"></div>
              </div>
            ))
          ) : (
            news.map((item, idx) => (
              <div key={idx} className="mc-panel p-8 bg-[#1e1e1e] group hover:border-emerald-500 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-emerald-600 px-3 py-1 font-pixel text-[10px] text-white">
                    {item.tag}
                  </span>
                  <span className="font-mc text-slate-500 text-lg uppercase">{item.time}</span>
                </div>
                <h3 className="text-3xl font-mc font-bold text-white mb-4 group-hover:text-emerald-400">
                  {item.title}
                </h3>
                <p className="text-xl font-mc text-slate-400 leading-tight">
                  {item.description}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
