import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WaitlistOrchestrator from '../components/waitlist/WaitlistOrchestrator';
import '../index.css';

export default function LandingPage() {
  const [phase, setPhase] = useState('idle');

  const handleJoinClick = () => {
    if (phase === 'idle') {
      setPhase('filling');
    }
  };

  useEffect(() => {
    if (phase === 'filling') {
      const timer1 = setTimeout(() => {
        setPhase('morphing');
      }, 1500);
      return () => clearTimeout(timer1);
    }
    if (phase === 'morphing') {
      const timer2 = setTimeout(() => {
        setPhase('open');
      }, 600);
      return () => clearTimeout(timer2);
    }
    if (phase === 'submitted') {
      const timer3 = setTimeout(() => {
        setPhase('unmorphing');
      }, 3000);
      return () => clearTimeout(timer3);
    }
    if (phase === 'unmorphing') {
      const timer4 = setTimeout(() => {
        setPhase('idle');
      }, 600);
      return () => clearTimeout(timer4);
    }
  }, [phase]);

  const handleSubmitSuccess = () => {
    setPhase('submitted');
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, left: 0, right: 0, bottom: 0, 
          backgroundImage: 'url(/fynie.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.15)',
          zIndex: 1
        }}
      />


      <Header phase={phase} onJoinClick={handleJoinClick} />

      <motion.div 
        layout
        className="hero-container"
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          minHeight: '100vh', 
          padding: '0 5vw',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        <motion.div layout className="hero-text-left" style={{ flex: 1 }}>
          <motion.h1 layout style={{ 
            fontFamily: '"FK Grotesk", sans-serif',
            fontSize: 'clamp(3rem, 6vw, 8rem)', 
            fontWeight: 400, 
            letterSpacing: '-0.05em',
            margin: 0,
            lineHeight: 1
          }}>
            meyaj.
          </motion.h1>
        </motion.div>

        <motion.div layout style={{ 
          flex: phase === 'open' || phase === 'submitted' ? 2 : 1, 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10
        }}>
          <WaitlistOrchestrator phase={phase} onSubmitSuccess={handleSubmitSuccess} />
        </motion.div>

        <motion.div layout className="hero-text-right" style={{ flex: 1, alignItems: 'center', textAlign: 'left', whiteSpace: 'nowrap' }}>
          <motion.p layout style={{ 
            fontSize: 'clamp(1.2rem, 2vw, 2.5rem)', 
            fontWeight: 300, 
            color: 'rgba(255, 255, 255, 0.9)',
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: '-0.01em'
          }}>
            The work is the proposal.
          </motion.p>
        </motion.div>

      </motion.div>
      
      <Footer onJoinClick={handleJoinClick} />
    </div>
  );
}
