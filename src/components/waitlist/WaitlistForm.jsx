import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const rectClip = 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%, 0% 0%)';

export default function WaitlistForm({ onSubmitSuccess }) {
  const [role, setRole] = useState('founder');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      setError(null);
      
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert([{ email, role }]);

      setIsSubmitting(false);

      if (insertError) {
        // If it's a unique constraint violation, they are already on the list (Code 23505 in Postgres)
        if (insertError.code === '23505') {
          onSubmitSuccess();
        } else {
          setError('Failed to join waitlist. Please try again.');
          console.error(insertError);
        }
      } else {
        onSubmitSuccess();
      }
    }
  };

  return (
    <motion.div 
      key="form"
      layoutId="center-container"
      initial={{ borderRadius: 0, backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', width: 450, height: 300, opacity: 1, clipPath: rectClip }}
      animate={{ width: 450, height: 'auto', opacity: 1 }}
      transition={{ type: "spring", bounce: 0.15, duration: 0.8 }}
      style={{
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        clipPath: rectClip
      }}
    >
      <motion.form 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
      >
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em' }}>Join the waitlist</h2>
        
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <label style={{
            flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 0, cursor: 'pointer', transition: 'all 0.2s',
            backgroundColor: role === 'founder' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)'
          }}>
            <input type="radio" name="role" value="founder" checked={role === 'founder'} onChange={() => setRole('founder')} 
              style={{ 
                appearance: 'none', WebkitAppearance: 'none',
                width: '16px', height: '16px', 
                border: '1px solid white', 
                backgroundColor: role === 'founder' ? 'white' : 'transparent',
                borderRadius: '50%', margin: 0, cursor: 'pointer' 
              }} 
            />
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Founder</span>
          </label>

          <label style={{
            flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 0, cursor: 'pointer', transition: 'all 0.2s',
            backgroundColor: role === 'creator' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)'
          }}>
            <input type="radio" name="role" value="creator" checked={role === 'creator'} onChange={() => setRole('creator')} 
              style={{ 
                appearance: 'none', WebkitAppearance: 'none',
                width: '16px', height: '16px', 
                border: '1px solid white', 
                backgroundColor: role === 'creator' ? 'white' : 'transparent',
                borderRadius: '50%', margin: 0, cursor: 'pointer' 
              }} 
            />
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Creator</span>
          </label>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required 
            style={{ padding: '0.75rem 1rem', borderRadius: 0, border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none', fontSize: '1rem', transition: 'all 0.2s' }} 
            onFocus={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)' }}
            onBlur={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
          />
          
          {error && <span style={{ color: '#ff6b6b', fontSize: '0.875rem' }}>{error}</span>}
          
          <button type="submit" disabled={isSubmitting} style={{ marginTop: '0.5rem', padding: '0.875rem', borderRadius: 0, backgroundColor: 'white', color: 'black', border: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: isSubmitting ? 'wait' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}>
            {isSubmitting ? 'Joining...' : 'Submit'} {!isSubmitting && <ArrowRight size={16} />}
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}
