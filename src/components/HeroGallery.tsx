"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { interiorStyles } from "@/data/styles";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import MarqueeBrand from "./MarqueeBrand";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function HeroGallery() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringActive, setIsHoveringActive] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeIndex >= 0 && !isExpanded) {
      const timer = setTimeout(() => {
        setActiveIndex(-1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, isExpanded]);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
      document.body.classList.add('hero-portal-active');
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove('hero-portal-active');
    }
  }, [isExpanded]);

  useEffect(() => {
    if (!mounted) return;
    const currentStyle = activeIndex >= 0 ? interiorStyles[activeIndex] : null;
    const bgColor = currentStyle?.bgColor || "#0A0A0A";
    const isDark = currentStyle?.isDark ?? true;
    
    document.body.style.setProperty('background-color', bgColor, 'important');
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.documentElement.style.setProperty('--bg-primary', bgColor);
  }, [activeIndex, mounted]);

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % interiorStyles.length);
    setCurrentImageIndex(0);
  };
  
  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + interiorStyles.length) % interiorStyles.length);
    setCurrentImageIndex(0);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentStyle = interiorStyles[activeIndex];
    const imgs = currentStyle.galleryImages || [];
    if (imgs.length > 0) {
      setCurrentImageIndex(prev => (prev + 1) % imgs.length);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentStyle = interiorStyles[activeIndex];
    const imgs = currentStyle.galleryImages || [];
    if (imgs.length > 0) {
      setCurrentImageIndex(prev => (prev - 1 + imgs.length) % imgs.length);
    }
  };

  const currentStyle = activeIndex >= 0 ? interiorStyles[activeIndex] : interiorStyles[0];
  const galleryImages = currentStyle.galleryImages || [];
  const activeImage = galleryImages.length > 0 ? galleryImages[currentImageIndex] : currentStyle.previewImage;

  const getTypography = (name: string) => {
    const len = name.length;
    if (len > 11) return { fontSize: 'clamp(2rem, 5.5vw, 6.5rem)', spacing: '2vw' };
    if (len > 8) return { fontSize: 'clamp(2.5rem, 8vw, 9rem)', spacing: '3vw' };
    if (len > 6) return { fontSize: 'clamp(3rem, 10vw, 11rem)', spacing: '4.5vw' };
    return { fontSize: 'clamp(3.5rem, 15vw, 14rem)', spacing: '8vw' };
  };

  const { fontSize, spacing } = getTypography(currentStyle.nameEn);

  const overlayJSX = (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          id="HERO_ABSOLUTE_PORTAL"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backgroundColor: currentStyle.bgColor || "#0A0A0A" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 999999,
            overflow: 'hidden',
          }}
        >
          {/* Main Background Image (with Fade) */}
          <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <AnimatePresence>
              <motion.div
                key={`${currentStyle.slug}-${currentImageIndex}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={activeImage}
                  alt={currentStyle.nameEn}
                  fill
                  className="w-full h-full object-cover"
                  priority
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 50%, rgba(0,0,0,0.6) 100%)'
                }} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Close Button */}
          <div style={{ position: 'fixed', top: '40px', left: '40px', zIndex: 100 }}>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
              className="flex items-center gap-4 text-white hover:text-white/70 transition-all group pointer-events-auto"
            >
              <X size={28} strokeWidth={1.5} className="group-hover:rotate-90 transition-transform" />
              <span className="text-xs font-black tracking-[0.4em] uppercase">Close</span>
            </button>
          </div>

          {/* Top-Right Style Switcher (User Request) */}
          <div style={{ position: 'fixed', top: '40px', right: '40px', zIndex: 100 }}>
            <div className="flex gap-8 items-center text-white pointer-events-auto">
              <button 
                onClick={(e) => { e.stopPropagation(); handlePrev(); }} 
                className="hover:text-white/70 transition-transform hover:scale-125 p-2"
                title="Previous Style"
              >
                <ChevronLeft size={32} strokeWidth={1.5} />
              </button>
              <div className="flex flex-col items-center min-w-[4em]">
                <span className="text-[10px] font-black tracking-[0.4em] opacity-40 mb-1 leading-none uppercase">Style</span>
                <span className="text-2xl font-black tracking-widest leading-none">{String(activeIndex + 1).padStart(2, '0')}</span>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); handleNext(); }} 
                className="hover:text-white/70 transition-transform hover:scale-125 p-2"
                title="Next Style"
              >
                <ChevronRight size={32} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Central UI - High visibility for Laptop */}
          <div className="absolute inset-0 flex items-center justify-center px-[8vw] z-[100] pointer-events-none">
            <div className="flex flex-col items-center">
              {/* Style Name */}
              <motion.h2
                key={currentStyle.nameEn + "-expanded"}
                initial={{ letterSpacing: "1vw", opacity: 0, y: 50 }}
                animate={{ letterSpacing: spacing, opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-black uppercase text-center leading-[1] drop-shadow-2xl max-w-full"
                style={{ fontSize: fontSize, lineHeight: '0.9', whiteSpace: currentStyle.nameEn.includes(' ') ? 'normal' : 'nowrap' }}
              >
                {currentStyle.nameEn}
              </motion.h2>

              {/* Step 4: Refined Image Navigation Arrows & Indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-12 flex gap-20 items-center text-white/90 pointer-events-auto"
              >
                <button 
                  onClick={handlePrevImage} 
                  className="hover:text-white transition-all hover:scale-125 p-4 group"
                  title="Previous Scene"
                >
                  <ChevronLeft size={48} strokeWidth={1} className="group-hover:-translate-x-2 transition-transform" />
                </button>
                
                {/* Visual Ticker Indicator (Premium) */}
                <div className="flex flex-col items-center min-w-[160px]">
                  <span className="text-[10px] font-black tracking-[0.6em] opacity-40 mb-3 uppercase">Scene</span>
                  <div className="flex items-center gap-6">
                    <div className="flex gap-1.5 h-1 items-end">
                      {Array.from({ length: Math.max(1, galleryImages.length) }).map((_, i) => (
                        <div 
                          key={i} 
                          className={cn(
                            "w-8 h-px transition-all duration-500",
                            i === currentImageIndex ? "bg-white h-0.5" : "bg-white/20"
                          )}
                        />
                      ))}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black tracking-tighter">{String(currentImageIndex + 1).padStart(2, '0')}</span>
                      <span className="text-xs opacity-30 font-bold">/ {String(Math.max(1, galleryImages.length)).padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleNextImage} 
                  className="hover:text-white transition-all hover:scale-125 p-4 group"
                  title="Next Scene"
                >
                  <ChevronRight size={48} strokeWidth={1} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Step 3: Expanded Description (Relocated to bottom for better visibility) */}
          <div className="absolute bottom-12 md:bottom-20 left-0 w-full flex justify-center z-20 pointer-events-none">
            <motion.p
              key={currentStyle.slug + "-desc-expanded"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.2 }}
              className="text-center text-sm md:text-lg font-bold tracking-[0.4em] text-white/50 max-w-none px-12 leading-none uppercase whitespace-nowrap"
            >
              {currentStyle.description}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div
      className="relative w-full h-full bg-[#0A0A0A] overflow-hidden"
      style={{ 
        zIndex: 70,
        backgroundColor: currentStyle.bgColor || "#0A0A0A",
        transition: 'background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1)' 
      }}
    >
      {/* Step 2: Brand Identity Elements (Ticker & Marquee) */}
      {!isExpanded && (
        <div className="absolute inset-0 z-[60] pointer-events-none">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-full relative">
            {/* CRITICAL DESIGN RULE: Ticker MUST remain Top-Left, Horizontal Row under Logo. DO NOT RELOCATE. */}
            <div className="absolute top-24 left-4 md:left-10 pointer-events-auto">
              <div className="flex flex-row gap-1.5 items-end h-4">
                {interiorStyles.map((_, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    animate={{
                      height: activeIndex === i ? 20 : 8,
                      width: 1,
                      backgroundColor: activeIndex === i ? (interiorStyles[i].bgColor || '#FF8BA7') : 'rgba(255,255,255,0.2)',
                    }}
                    className="cursor-pointer hover:bg-white/50 transition-colors"
                  />
                ))}
              </div>
            </div>

            {/* Philosophy Marquee (Remaining) */}
            <div className="absolute top-1/2 -translate-y-[120px] left-0 w-[25vw] hidden xl:block z-[100] opacity-30 hover:opacity-100 transition-all duration-1000 pl-4 md:pl-8 pointer-events-auto">
              <MarqueeBrand />
            </div>
          </div>
        </div>
      )}

      {/* CRITICAL DESIGN RULE: Gallery MUST remain Vertically Centered and Pushed to the Right Edge. DO NOT RELOCATE. */}
      {!isExpanded && (
        <div className="absolute inset-y-0 left-0 right-0 flex flex-col justify-center items-end z-10 pr-2 md:pr-4 lg:pr-6 pointer-events-none">
          <div className="flex gap-2 lg:gap-4 items-center pointer-events-auto">
            {interiorStyles.map((style, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.button
                key={style.slug}
                type="button"
                onClick={() => {
                  if (isActive) {
                    setIsExpanded(true);
                  } else {
                    setActiveIndex(i);
                  }
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  
                  if (!isActive) {
                    e.currentTarget.style.setProperty('--mouseX', x.toString());
                    e.currentTarget.style.setProperty('--mouseY', y.toString());
                  } else {
                    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                  }
                }}
                onMouseEnter={() => isActive && setIsHoveringActive(true)}
                onMouseLeave={() => isActive && setIsHoveringActive(false)}
                animate={{
                  width: isActive ? '45vw' : '3.5vw',
                  height: isActive ? '60vh' : '40vh',
                  y: isActive ? 0 : [0, -25, 0],
                }}
                whileHover={!isActive ? { y: -50, scale: 1.05 } : {}}
                transition={{
                  y: !isActive ? { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 } : { duration: 0.5 },
                  width: { type: "spring", stiffness: 200, damping: 25 },
                  height: { type: "spring", stiffness: 200, damping: 25 },
                }}
                className={cn(
                  "relative cursor-pointer overflow-hidden rounded-none group shadow-2xl border-none outline-none p-0",
                  isActive ? "z-20" : "z-10",
                  style.isDark ? "bg-neutral-800" : "bg-neutral-100"
                )}
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d' as React.CSSProperties['transformStyle'],
                  transform: isActive ? 'none' : 'rotateY(calc(var(--mouseX, 0) * 15deg)) rotateX(calc(var(--mouseY, 0) * -10deg))'
                }}
              >
                <motion.div 
                  className="absolute inset-0 w-full h-full"
                  animate={{
                    scale: isActive ? 1 : 1.2,
                    filter: isActive ? "grayscale(0%) brightness(100%)" : "grayscale(100%) brightness(60%)",
                  }}
                  whileHover={!isActive ? {
                    filter: "grayscale(0%) brightness(100%)",
                    transition: { duration: 0.5 }
                  } : {}}
                  style={{
                    transform: isActive ? 'none' : 'translateX(calc(var(--mouseX, 0) * -30px)) translateY(calc(var(--mouseY, 0) * -30px))'
                  }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                  <Image
                    src={style.previewImage}
                    alt={style.nameEn}
                    fill
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i < 3}
                  />
                </motion.div>
                {/* Explore Cursor Effect */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: isHoveringActive ? 1 : 0, 
                      scale: isHoveringActive ? 1 : 0.5,
                      x: mousePos.x - 50,
                      y: mousePos.y - 50
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                    className="absolute top-0 left-0 w-24 h-24 border border-white/50 rounded-full flex items-center justify-center backdrop-blur-sm z-50 pointer-events-none origin-center"
                  >
                    <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase mt-1">Explore</span>
                  </motion.div>
                )}
                {/* Step 3: Vertical Label for IDLE (Restored) */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span 
                      className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold tracking-[0.5em] text-white/40 uppercase transition-opacity duration-500 group-hover:opacity-100"
                    >
                      {style.nameEn}
                    </span>
                  </div>
                )}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-end pb-12 bg-black/20 pointer-events-none"
                  >
                    <h2 className="text-white text-3xl lg:text-5xl font-black uppercase text-center leading-tight drop-shadow-lg px-4">
                      {style.nameEn}
                    </h2>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
          </div>
        </div>
      )}

      {mounted && createPortal(overlayJSX, document.body)}
    </div>
  );
}
