import React from 'react';
import { Database, Lock, Cpu } from 'lucide-react';

export const TechnicalDeepDive: React.FC = () => {
  return (
    <section id="runtime" className="w-full py-24 px-6 border-t border-slate-900 bg-slate-950">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="flex-1">
          <h2 className="text-2xl font-medium text-white mb-8">System Runtime</h2>
          <div className="space-y-8">
            <FeatureRow 
              icon={<Cpu size={20} />}
              title="Sandboxed Execution"
              desc="All tool invocations occur within isolated micro-VMs or Docker containers to ensure host system safety."
            />
            <FeatureRow 
              icon={<Database size={20} />}
              title="Vector Memory"
              desc="Long-term persistence using high-dimensional vector embeddings for efficient context retrieval across sessions."
            />
            <FeatureRow 
              icon={<Lock size={20} />}
              title="Permission Gating"
              desc="Granular access controls allow operators to whitelist specific domains, file paths, and system calls."
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="font-mono text-xs text-slate-500 mb-2">config.yaml</div>
          <div className="w-full bg-[#0d1117] border border-slate-800 p-6 rounded-md overflow-hidden text-sm font-mono leading-relaxed text-slate-300">
            <span className="text-pink-400">system:</span><br/>
            &nbsp;&nbsp;<span className="text-blue-400">version:</span> "0.9.2"<br/>
            &nbsp;&nbsp;<span className="text-blue-400">mode:</span> "autonomous"<br/>
            <br/>
            <span className="text-pink-400">permissions:</span><br/>
            &nbsp;&nbsp;<span className="text-blue-400">filesystem:</span> ["/app/data", "/tmp"]<br/>
            &nbsp;&nbsp;<span className="text-blue-400">network:</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- "api.aws.amazon.com"<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- "github.com"<br/>
            <br/>
            <span className="text-pink-400">tools:</span><br/>
            &nbsp;&nbsp;- <span className="text-green-400">"browser_automation"</span><br/>
            &nbsp;&nbsp;- <span className="text-green-400">"python_interpreter"</span><br/>
            &nbsp;&nbsp;- <span className="text-green-400">"file_manager"</span><br/>
            <br/>
            <span className="text-slate-600"># Memory configuration</span><br/>
            <span className="text-pink-400">memory:</span><br/>
            &nbsp;&nbsp;<span className="text-blue-400">backend:</span> "vector_db"<br/>
            &nbsp;&nbsp;<span className="text-blue-400">retention:</span> "persistent"
          </div>
        </div>

      </div>
    </section>
  );
};

const FeatureRow: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1 text-slate-500">{icon}</div>
    <div>
      <h3 className="text-white font-medium mb-1">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);