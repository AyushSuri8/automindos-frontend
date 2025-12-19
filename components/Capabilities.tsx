import React from 'react';
import { TerminalSquare, Network, Layers, Zap } from 'lucide-react';

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="w-full py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl font-medium text-slate-900 mb-4">Core Capabilities</h2>
        <p className="text-slate-600 max-w-2xl">
          Built for builders. AutomindOS provides the primitives necessary for complex autonomous agent behavior in real-world environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        
        {/* Large Card */}
        <div className="md:col-span-2 row-span-1 glass-panel bg-white p-8 flex flex-col justify-between group hover:border-slate-300 transition-colors">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <TerminalSquare className="text-slate-700" />
               <h3 className="text-lg font-medium text-slate-900">Direct Execution</h3>
            </div>
            <p className="text-slate-600 max-w-lg leading-relaxed">
              AutomindOS operates directly within the runtime environment, enabling close interaction with systems to achieve outcomes efficiently.
            </p>
          </div>
        </div>

        {/* Tall Card */}
        <div className="md:col-span-1 md:row-span-2 glass-panel bg-white p-8 flex flex-col group hover:border-slate-300 transition-colors">
          <div className="mb-6">
            <Network className="text-slate-700 mb-4 h-8 w-8" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">Context Awareness</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              It maintains situational awareness across long-running sessions, preserving context before and during execution.
            </p>
          </div>
          <div className="flex-1 w-full bg-slate-50 border border-slate-200 rounded relative overflow-hidden">
             {/* Abstract Visualization */}
             <div className="absolute inset-0 grid grid-cols-4 gap-1 p-1 opacity-50">
                {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="bg-slate-200 rounded-sm"></div>
                ))}
             </div>
          </div>
        </div>

         {/* Standard Card */}
         <div className="glass-panel bg-white p-8 flex flex-col justify-between group hover:border-slate-300 transition-colors">
            <div>
               <Layers className="text-slate-700 mb-4 h-6 w-6" />
               <h3 className="text-lg font-medium text-slate-900 mb-2">Composable Design</h3>
               <p className="text-slate-600 text-sm">
                 Extensible by nature. The system is designed to be integrated into existing infrastructure without requiring a complete re-architecture.
               </p>
            </div>
         </div>

         {/* Standard Card */}
         <div className="glass-panel bg-white p-8 flex flex-col justify-between group hover:border-slate-300 transition-colors">
            <div>
               <Zap className="text-slate-700 mb-4 h-6 w-6" />
               <h3 className="text-lg font-medium text-slate-900 mb-2">Adaptive Resilience</h3>
               <p className="text-slate-600 text-sm">
                 The system monitors its own output. If an action fails to produce the expected result, it adapts its strategy and attempts an alternative path.
               </p>
            </div>
         </div>

      </div>
    </section>
  );
};