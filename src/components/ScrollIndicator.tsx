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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      <div className="glass-pill-premium px-4 py-2.5 md:px-6 md:py-4 rounded-full flex flex-col items-center gap-2 md:gap-3 backdrop-blur-2xl border-white/10 bg-white/5 shadow-2xl">
        <div className="w-[1.5px] h-6 md:h-10 bg-white/10 overflow-hidden rounded-full">
          <motion.div
            animate={{
              y: [-24, 24],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full bg-accent-gold shadow-[0_0_10px_var(--accent-gold)]"
          />
        </div>
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/50 font-black">
          Scroll
        </span>
      </div>
    </motion.div>
  );
}
