import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';

export default function HexagonLogo({ phase }) {
  return (
    <motion.div 
      key="logo"
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          width: 100, height: 100,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div style={{ position: 'absolute', zIndex: 2 }}>
          <Hexagon size={100} strokeWidth={1} color="white" />
        </div>
        {phase === 'filling' && (
          <motion.div 
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ position: 'absolute', zIndex: 1 }}
          >
            <Hexagon size={100} strokeWidth={0} fill="rgba(255, 255, 255, 0.4)" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
