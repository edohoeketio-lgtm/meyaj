import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const rectClip = 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%, 0% 0%)';

export default function SuccessMessage() {
  return (
    <motion.div 
      key="success"
      layoutId="center-container"
      initial={{ borderRadius: 0, backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', width: 450, height: 250, clipPath: rectClip }}
      animate={{ width: 450, height: 250 }}
      style={{
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        clipPath: rectClip
      }}
    >
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}>
        <Sparkles size={32} style={{ marginBottom: '1rem', color: 'white' }} />
      </motion.div>
      <motion.h3 initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ fontSize: '1.5rem', margin: 0, marginBottom: '0.5rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'white' }}>You're on the list.</motion.h3>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>We'll notify you when your portal opens.</motion.p>
    </motion.div>
  );
}
