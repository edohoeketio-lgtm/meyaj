import React from 'react';

export default function Header({ phase, onJoinClick }) {
  return (
    <div 
      className="animate-fade-in delay-300"
      onClick={onJoinClick}
      style={{
        position: 'absolute',
        top: '2.5rem',
        right: '4vw',
        zIndex: 10,
        fontSize: '1rem',
        fontWeight: 400,
        color: 'white',
        cursor: phase === 'idle' ? 'pointer' : 'default',
        opacity: phase === 'idle' ? 0.8 : 0,
        letterSpacing: '0.02em',
        transition: 'opacity 0.2s ease',
        pointerEvents: phase === 'idle' ? 'auto' : 'none'
      }}
      onMouseEnter={(e) => { if(phase === 'idle') e.currentTarget.style.opacity = '1' }}
      onMouseLeave={(e) => { if(phase === 'idle') e.currentTarget.style.opacity = '0.8' }}
    >
      Join waitlist
    </div>
  );
}
