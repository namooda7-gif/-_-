'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function ScrollIndicator() {
  const pathname = usePathname();
  
  // Don't show on contact page or other minimal pages if necessary
  if (pathname === '/contact') return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-difference z-50 pointer-events-none"
    >
      <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
        <motion.div 
          animate={{ y: [0, 48, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-full h-1/2 bg-[var(--accent-page)]"
        />
      </div>
      <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent-page)] font-black">
        Scroll
      </span>
    </motion.div>
  );
}
