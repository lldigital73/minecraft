
import React from 'react';

const Navbar: React.FC = () => {
  const navLinks = [
    { label: 'Domov', href: '#home' },
    { label: 'Vlastnosti', href: '#features' },
    { label: 'Lore', href: '#lore' },
    { label: 'Novinky', href: '#news' },
    { label: 'Stav', href: '#status' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-600 border-4 border-black shadow-[inset_2px_2px_0_#82d134] flex items-center justify-center">
              <span className="text-2xl font-mc font-bold text-white">V</span>
            </div>
            <span className="text-3xl font-mc font-bold tracking-tight text-white uppercase">VANIXIDIA</span>
          </div>
          
          <div className="hidden lg:flex space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-xl font-mc text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="/vip" className="mc-button mc-button-green px-6 py-2 font-mc text-xl">
            VIP
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
