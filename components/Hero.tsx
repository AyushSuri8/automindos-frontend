import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Initialize execution environment...";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full pt-32 pb-24 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center max-w-5xl mx-auto">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/40 via-transparent to-transparent pointer-events-none" />
      
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
        </span>
        <span className="text-xs font-mono text-slate-600 uppercase tracking-wider">System Operational</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-medium text-center tracking-tight text-slate-900 mb-6 leading-[1.1]">
        The Operating System <br />
        <span className="text-slate-500">for Autonomous Systems</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-600 text-center max-w-2xl mb-10 font-light leading-relaxed">
        AutomindOS thinks, plans, executes, and improves. <br className="hidden md:block"/>
        It is designed to operate on goals with minimal supervision.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
        <a 
          href="mailto:support@automindos.site?subject=Early Access Request – AutomindOS"
          className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-slate-900 border border-transparent hover:bg-slate-800 transition-all duration-200 w-full sm:w-auto shadow-md"
        >
          <span>Join Early Access</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
        <div className="hidden sm:block text-xs text-slate-500 font-mono">Preview Release</div>
      </div>

      {/* Hero Terminal - Abstracted Content */}
      <div className="w-full max-w-3xl bg-slate-900 rounded-lg overflow-hidden shadow-2xl shadow-slate-200 mx-auto transform transition-transform hover:scale-[1.005] duration-500">
        <div className="bg-slate-800/50 px-4 py-2 flex items-center gap-2 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-slate-600"></div>
          <div className="w-3 h-3 rounded-full bg-slate-600"></div>
          <div className="w-3 h-3 rounded-full bg-slate-600"></div>
          <div className="ml-2 text-xs font-mono text-slate-500 flex-1 text-center opacity-50">automindd — active</div>
        </div>
        <div className="p-6 font-mono text-sm md:text-sm text-slate-300 space-y-3 h-[320px] overflow-y-auto custom-scrollbar">
          <div className="flex gap-2">
            <span className="text-slate-500">➜</span>
            <span className="text-white">automind run --objective "AutonomousWorkflow"</span>
          </div>
          
          <div className="pl-4 border-l-2 border-slate-700/50 mt-4 space-y-3">
             <div className="flex items-center gap-2 text-slate-400">
                <Activity size={14} />
                <span>Initializing autonomous execution environment...</span>
             </div>
             <div className="text-slate-500 pl-6">
                &gt; Context loaded.<br/>
                &gt; Environment constraints verified.
             </div>
             
             <div className="flex items-center gap-2 text-blue-400 mt-2">
                <ChevronRight size={14} />
                <span>Formulating execution strategy...</span>
             </div>
             <div className="text-slate-500 pl-6"> 
               &gt; Analyzing state space... <br/>
               &gt; 4 potential paths identified. <br/>
               &gt; Strategy selected (Confidence: 98.4%)
             </div>

             <div className="flex items-center gap-2 text-blue-400">
                <ChevronRight size={14} />
                <span>Executing sequence...</span>
             </div>
             <div className="text-slate-500 pl-6"> &gt; Action set 1/3 completed successfully.</div>
             
             <div className="flex items-center gap-2 text-slate-500 mt-4 animate-pulse">
                <span className="w-2 h-4 bg-slate-500 block"></span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
