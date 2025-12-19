import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-slate-200 bg-white text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <div className="font-mono mb-4 md:mb-0 text-slate-600">
          AutomindOS &copy; {new Date().getFullYear()}
        </div>
        <div className="flex gap-4">
             <span className="text-slate-400">Contact ·</span>
            <a href="mailto:support@automindos.site" className="hover:text-slate-900 transition-colors">support@automindos.site</a>
        </div>
      </div>
    </footer>
  );
};