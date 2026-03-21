'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check } from 'lucide-react';

const themes = [
  { id: 'cream',    bg: '#F5F0E8', label: '미색',        dark: true  },
  { id: 'olive',    bg: '#4A5240', label: '올리브 그린',  dark: false },
  { id: 'burgundy', bg: '#5C1A2E', label: '버건디',       dark: false },
  { id: 'gold',     bg: '#B8860B', label: '골드',         dark: true  },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('cream');

  const applyTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId) || themes[0];
    const root = document.documentElement;
    
    root.style.setProperty('--bg-primary', theme.bg);
    root.style.setProperty('--accent-gold', theme.id === 'cream' ? '#C5A059' : '#FFFFFF'); 
    root.setAttribute('data-theme', theme.dark ? 'light' : 'dark');
    localStorage.setItem('laol-theme', themeId);
    setCurrentTheme(themeId);
  };

  useEffect(() => {
    const saved = localStorage.getItem('laol-theme');
    if (saved) {
      applyTheme(saved);
    }
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[150]">
      <div className="relative flex flex-col items-center">
        {/* Expanded Buttons */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="flex flex-col gap-4 mb-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  onClick={() => {
                    applyTheme(theme.id);
                    setIsOpen(false);
                  }}
                  variants={{
                    open: { scale: 1, opacity: 1, y: 0 },
                    closed: { scale: 0, opacity: 0, y: 20 }
                  }}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 relative group"
                  style={{ backgroundColor: theme.bg }}
                  title={theme.label}
                >
                  {currentTheme === theme.id && <Check size={20} className={theme.dark ? "text-black" : "text-white"} />}
                  
                  {/* Tooltip */}
                  <span className="absolute right-full mr-4 px-2 py-1 bg-black/80 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {theme.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Palette Toggler */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-accent-gold text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-50"
          animate={{ rotate: isOpen ? -15 : 0 }}
        >
          <Palette size={28} />
        </motion.button>
      </div>

      {/* Backdrop for closing */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-transparent" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
