import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HexagonLogo from './HexagonLogo';
import WaitlistForm from './WaitlistForm';
import SuccessMessage from './SuccessMessage';

const hexClip = 'polygon(50% 4%, 89.8% 27%, 89.8% 73%, 50% 96%, 10.2% 73%, 10.2% 27%)';
const rectClip = 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%, 0% 0%)';

export default function WaitlistOrchestrator({ phase, onSubmitSuccess }) {
  return (
    <AnimatePresence mode="wait">
      
      {(phase === 'idle' || phase === 'filling') && (
        <HexagonLogo phase={phase} />
      )}

      {phase === 'morphing' && (
        <motion.div 
          key="morphing"
          layoutId="center-container"
          initial={{ 
            width: 100, height: 100, 
            clipPath: hexClip,
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: 0
          }}
          animate={{ 
            clipPath: rectClip,
            borderRadius: 0,
            width: 'min(90vw, 450px)',
            height: 300 
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        />
      )}

      {phase === 'unmorphing' && (
        <motion.div 
          key="unmorphing"
          layoutId="center-container"
          initial={{ 
            width: 'min(90vw, 450px)', height: 250, 
            clipPath: rectClip,
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: 0
          }}
          animate={{ 
            clipPath: hexClip,
            borderRadius: 0,
            width: 100,
            height: 100
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        />
      )}

      {phase === 'open' && (
        <WaitlistForm onSubmitSuccess={onSubmitSuccess} />
      )}

      {phase === 'submitted' && (
        <SuccessMessage />
      )}

    </AnimatePresence>
  );
}
