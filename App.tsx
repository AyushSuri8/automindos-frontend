import React from 'react';
import { Hero } from './components/Hero';
import { Architecture } from './components/Architecture';
import { Capabilities } from './components/Capabilities';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen grid-bg relative overflow-x-hidden selection:bg-slate-200 selection:text-slate-900">
      <Navigation />
      
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Architecture />
        <Capabilities />
      </main>

      <Footer />
    </div>
  );
};

export default App;