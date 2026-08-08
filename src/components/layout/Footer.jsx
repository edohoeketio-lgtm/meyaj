import React from 'react';
import { motion } from 'framer-motion';

export default function Footer({ onJoinClick }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '0',
        right: '0',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgba(255,255,255,0.7)',
        fontFamily: '"FK Grotesk", sans-serif',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '650px', padding: '0 5vw' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: 400, color: 'white', letterSpacing: '-0.02em' }}>
          Hire on proof. Skip the essays.
        </h3>
        <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.5, fontWeight: 300 }}>
          Skip the endless cover letters and platform taxes. Founders get direct, zero-fee access to elite talent. Creators keep 100% of what they earn without ever having to pitch themselves. Because the work is the proposal. <span onClick={onJoinClick} style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>Join waitlist.</span>
        </p>
      </div>
    </motion.div>
  );
}
