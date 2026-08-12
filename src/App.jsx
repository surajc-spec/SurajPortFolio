import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// A lightweight floating particles background using simple divs and keyframe-like motion
function ParticlesBackground() {
  const particles = Array.from({ length: 20 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        return (
          <div
            key={i}
            className="absolute rounded-full bg-violet-400/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animation: `floatParticle ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`
            }}
          />
        );
      })}
      <style>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-40px) translateX(20px);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
}

function App() {
  // Clear any default template css if imported elsewhere
  useEffect(() => {
    // Check if App.css is in document and disable it or make sure it doesn't break styling
    // We already removed unnecessary base containers in index.css
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-300 selection:bg-violet-600/30 selection:text-white">
      
      {/* Ambient background animations */}
      <ParticlesBackground />
      
      {/* Main Grid backdrop overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Floating Header */}
      <Navbar />

      {/* Structured Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

export default App;
