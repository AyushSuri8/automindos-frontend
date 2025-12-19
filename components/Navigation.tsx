import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel border-b border-slate-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Terminal className="w-6 h-6 text-slate-800" />
          <span className="font-mono font-medium text-lg tracking-tight text-slate-900">AutomindOS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#system" className="hover:text-slate-900 transition-colors">System</a>
          <a href="#capabilities" className="hover:text-slate-900 transition-colors">Capabilities</a>
        </div>

        <a 
          href="mailto:support@automindos.site?subject=Early Access Request – AutomindOS"
          className="text-sm font-medium text-slate-700 border border-slate-300 bg-white/50 px-4 py-2 hover:bg-white hover:border-slate-400 transition-colors rounded-sm shadow-sm"
        >
          Join Early Access
        </a>
      </div>
    </nav>
  );
};