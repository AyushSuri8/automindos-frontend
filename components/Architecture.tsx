import React from 'react';
import { Target, Cpu, Play, GitMerge } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <section id="system" className="w-full py-24 px-6 border-y border-slate-200 bg-slate-100/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-slate-900 mb-4">System Logic</h2>
          <p className="text-slate-600 max-w-xl">
            AutomindOS is designed for long-running autonomous operation, adapting continuously to changing environments and unexpected states.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-300 -translate-y-1/2 z-0" />

            <StepCard 
              icon={<Target className="text-slate-700" size={20} />} 
              title="1. Intent" 
              desc="Aligns high-level objectives with available system capabilities."
            />
             <StepCard 
              icon={<GitMerge className="text-slate-700" size={20} />} 
              title="2. Strategy" 
              desc="Formulates execution paths and determines necessary dependencies."
            />
             <StepCard 
              icon={<Play className="text-slate-700" size={20} />} 
              title="3. Operation" 
              desc="Interacts directly with the environment to effect change."
            />
             <StepCard 
              icon={<Cpu className="text-slate-700" size={20} />} 
              title="4. Adaptation" 
              desc="Monitors outcomes and dynamically adjusts the approach."
            />
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xs text-slate-400 font-mono">Further technical details are shared selectively with early access users.</p>
        </div>
      </div>
    </section>
  );
};

const StepCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="relative z-10 glass-panel p-6 bg-white hover:border-slate-300 transition-colors h-full flex flex-col items-start justify-between min-h-[180px]">
    <div className="mb-4 bg-slate-50 p-2 rounded-sm border border-slate-200">
      {icon}
    </div>
    <div>
      <h3 className="text-sm font-mono text-slate-900 mb-2 uppercase tracking-wide">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);