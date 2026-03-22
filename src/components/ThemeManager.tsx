'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ThemeManager({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [themeClass, setThemeClass] = useState('theme-home');

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/$/, '') || '/';
    console.log('[ThemeManager] Current Path:', pathname, 'Normalized:', normalizedPath);
    
    let newClass = 'theme-home';
    if (normalizedPath === '/') {
      newClass = 'theme-home';
    } else if (normalizedPath.startsWith('/portfolio')) {
      newClass = 'theme-portfolio';
    } else if (normalizedPath.startsWith('/services')) {
      newClass = 'theme-services';
    } else if (normalizedPath.startsWith('/about')) {
      newClass = 'theme-about';
    } else {
      newClass = 'theme-home';
    }

    console.log('[ThemeManager] Setting Theme Class:', newClass);
    setThemeClass(newClass);

    // Apply to body for absolute global coverage
    const body = document.body;
    body.classList.remove('theme-home', 'theme-portfolio', 'theme-services', 'theme-about');
    body.classList.add(newClass);

    return () => {
      body.classList.remove(newClass);
    };
  }, [pathname]);

  return (
    <div className={`${themeClass} min-h-screen transition-colors duration-1000`}>
      {/* Subtle Background Glows */}
      <div className="bg-theme-glow" />
      <div className="bg-theme-glow-bottom" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
