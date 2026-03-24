"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

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
    if (videoRef.current && !isExpanded) {
      videoRef.current.play().catch(err => {
        console.warn("Video autoplay failed:", err);
      });
    }
  }, [mounted, isExpanded]);

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
    const bgColor = currentStyle?.bgColor || "#0F0E0D";
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

  const handleNextImage = (e?: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent | PointerEvent | Event) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const currentStyle = interiorStyles[activeIndex >= 0 ? activeIndex : 0];
    const imgs = currentStyle.galleryImages || [];
    if (imgs.length > 0) {
      setCurrentImageIndex(prev => (prev + 1) % imgs.length);
    }
  };

  const handlePrevImage = (e?: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent | PointerEvent | Event) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const currentStyle = interiorStyles[activeIndex >= 0 ? activeIndex : 0];
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
    // Extra conservative for laptop (1280px) to ensure absolute single-line
    if (len > 13) return { fontSize: 'clamp(1.2rem, 3.8vw, 5rem)', spacing: '1.5vw' };
    if (len > 11) return { fontSize: 'clamp(1.8rem, 4.5vw, 6rem)', spacing: '2vw' };
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
          animate={{ opacity: 1, backgroundColor: currentStyle.bgColor || "#0F0E0D" }}
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
                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(e, { offset }) => {
                  const swipe = offset.x;
                  if (swipe < -50) {
                    handleNextImage(e);
                  } else if (swipe > 50) {
                    handlePrevImage(e);
                  }
                }}
              >
                <OptimizedImage
                  src={activeImage}
                  alt={currentStyle.nameEn}
                  fill
                  className="w-full h-full object-cover pointer-events-none"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none" style={{ 
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 50%, rgba(0,0,0,0.6) 100%)'
                }} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Close Button */}
          <div style={{ position: 'fixed', top: '40px', left: '40px', zIndex: 100 }}>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
              className="flex items-center gap-5 glass-pill-premium px-6 py-3 rounded-full border-white/10 backdrop-blur-xl text-white hover:bg-white/10 transition-all group pointer-events-auto"
            >
              <X size={20} strokeWidth={2} className="group-hover:rotate-90 transition-transform" />
              <span className="text-[10px] font-black tracking-[0.5em] uppercase mt-0.5">Close</span>
            </button>
          </div>

          {/* Top-Right Style Switcher (User Request) */}
          <div style={{ position: 'fixed', top: '40px', right: '40px', zIndex: 100 }}>
            <div className="flex gap-6 items-center glass-pill-premium px-6 py-3 rounded-2xl border-white/10 backdrop-blur-xl text-white pointer-events-auto">
              <button 
                onClick={(e) => { e.stopPropagation(); handlePrev(); }} 
                className="hover:text-accent-gold transition-all hover:scale-110 p-1"
                title="Previous Style"
              >
                <ChevronLeft size={24} strokeWidth={2} />
              </button>
              <div className="flex flex-col items-center min-w-[4em] border-x border-white/10 px-6">
                <span className="text-[9px] font-black tracking-[0.4em] text-accent-gold mb-1 leading-none uppercase">Style</span>
                <span className="text-xl font-black tracking-widest leading-none">{String(activeIndex + 1).padStart(2, '0')}</span>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); handleNext(); }} 
                className="hover:text-accent-gold transition-all hover:scale-110 p-1"
                title="Next Style"
              >
                <ChevronRight size={24} strokeWidth={2} />
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
                style={{ fontSize: fontSize, lineHeight: '0.9', whiteSpace: 'nowrap' }}
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
                  className="glass-pill-premium p-6 rounded-full border-white/10 backdrop-blur-xl text-white hover:bg-white/10 transition-all hover:scale-110 group pointer-events-auto shadow-2xl"
                  title="Previous Scene"
                >
                  <ChevronLeft size={32} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                
                {/* Visual Ticker Indicator (Premium) - Glass Removed */}
                <div className="flex flex-col items-center min-w-[180px] py-5">
                  <span className="text-[9px] font-black tracking-[0.6em] text-accent-gold mb-4 uppercase leading-none opacity-40">Perspective</span>
                  <div className="flex items-center gap-6">
                    <div className="flex gap-1.5 h-1 items-end">
                      {Array.from({ length: Math.max(1, galleryImages.length) }).map((_, i) => (
                        <div 
                          key={i} 
                          className={cn(
                            "w-6 h-px transition-all duration-500",
                            i === currentImageIndex ? "bg-accent-gold h-1 w-8" : "bg-white/10"
                          )}
                        />
                      ))}
                    </div>
                    <div className="flex items-baseline gap-1.5 pl-4 border-l border-white/10">
                      <span className="text-4xl font-black tracking-tighter text-white leading-none">{String(currentImageIndex + 1).padStart(2, '0')}</span>
                      <span className="text-[10px] text-white/20 font-black">/ {String(Math.max(1, galleryImages.length)).padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleNextImage} 
                  className="glass-pill-premium p-6 rounded-full border-white/10 backdrop-blur-xl text-white hover:bg-white/10 transition-all hover:scale-110 group pointer-events-auto shadow-2xl"
                  title="Next Scene"
                >
                  <ChevronRight size={32} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
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
      className="relative w-full h-full overflow-hidden"
      style={{ 
        zIndex: 70,
        backgroundColor: '#0F0E0D',
      }}
    >
      {/* Step 1: Premium Background Video & Fog Layers */}
      {!isExpanded && (
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="/videos/hero/hero_bg_video.webm" type="video/webm" />
            <source src="/videos/hero/hero_bg_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
      )}

      {!isExpanded && (
        <div className="absolute inset-0 z-[10] pointer-events-none">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-full relative">
            <div className="absolute top-28 md:top-32 left-4 md:left-10 pointer-events-auto flex flex-row gap-2.5 items-end h-8 px-4 py-2">
              {interiorStyles.map((_, i) => (
                <motion.div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  animate={{
                    height: activeIndex === i ? 24 : 12,
                    width: activeIndex === i ? 4 : 2,
                    backgroundColor: activeIndex === i ? (interiorStyles[i].bgColor || '#C5A059') : 'rgba(255,255,255,0.2)',
                  }}
                  whileHover={{ scaleY: 1.5, backgroundColor: 'rgba(255,255,255,0.5)' }}
                  className="cursor-pointer transition-all shrink-0 rounded-full"
                />
              ))}
            </div>

            <div className="absolute top-1/2 -translate-y-[120px] left-0 w-[25vw] hidden xl:block z-[100] opacity-30 hover:opacity-100 transition-all duration-1000 pl-4 md:pl-8 pointer-events-auto">
              <MarqueeBrand />
            </div>
          </div>
        </div>
      )}

      {/* CRITICAL DESIGN RULE: Gallery MUST remain Vertically Centered and Pushed to the Right Edge. DO NOT RELOCATE. */}
      {!isExpanded && (
        <div 
          className="absolute inset-y-0 left-0 right-0 overflow-hidden flex flex-col justify-center items-end z-10 pr-2 md:pr-4 lg:pr-6 pointer-events-none" 
          ref={carouselRef}
        >
          <motion.div 
            drag="x"
            dragConstraints={carouselRef}
            dragElastic={0.2}
            className="flex gap-2 lg:gap-4 items-center pointer-events-auto cursor-grab active:cursor-grabbing w-max mr-0 md:mr-0 pl-[50vw] md:pl-0"
          >
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
                  }
                  
                  setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  width: isActive ? '45vw' : '3.5vw',
                  height: isActive ? '60vh' : '40vh',
                  y: isActive ? 0 : [0, -25, 0],
                }}
                whileHover={!isActive ? { y: -50, scale: 1.05 } : {}}
                whileTap={!isActive ? { scale: 0.95 } : {}}
                transition={{
                  y: !isActive ? { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 } : { duration: 0.5 },
                  width: { type: "spring", stiffness: 200, damping: 25 },
                  height: { type: "spring", stiffness: 200, damping: 25 },
                }}
                className={cn(
                  "relative cursor-pointer overflow-hidden rounded-none group shadow-2xl border-none outline-none p-0 shrink-0",
                  isActive ? "z-20 w-[45vw] h-[60vh]" : "z-10 w-[3.5vw] h-[40vh]",
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
                  <OptimizedImage
                    src={style.previewImage}
                    alt={style.nameEn}
                    fill
                    className="object-cover w-full h-full transition-transform duration-700 md:group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i < 3}
                  />
                </motion.div>
                {/* Custom Cursor Effect for the hovered style bar */}
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: mousePos.x - 50,
                      y: mousePos.y - 50
                    }}
                    transition={{ type: "spring", stiffness: 800, damping: 30, mass: 0.1 }}
                    className="absolute top-0 left-0 w-28 h-28 border border-white/30 rounded-full flex flex-col items-center justify-center backdrop-blur-xl z-50 pointer-events-none origin-center shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  >
                    <span className="text-[9px] font-black tracking-[0.4em] text-white uppercase mt-1 drop-shadow-md">
                      {isActive ? "Explore" : "View More"}
                    </span>
                    <div className="w-6 h-px bg-white/40 mt-2" />
                  </motion.div>
                )}
                {/* Step 3: Vertical Label for IDLE (Restored) */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="glass-pill-premium px-1.5 py-6 rounded-full border-white/5 backdrop-blur-[4px] transition-opacity duration-500 opacity-100 md:opacity-40 md:group-hover:opacity-100 flex items-center justify-center">
                      <span 
                        className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black tracking-[0.3em] text-white uppercase"
                      >
                        {style.nameEn}
                      </span>
                    </div>
                  </div>
                )}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-end pb-12 z-20 pointer-events-none"
                  >
                    <div className="glass-pill-premium px-8 py-4 md:px-12 md:py-6 rounded-[1.5rem] border-white/10 backdrop-blur-xl">
                      <h2 className="text-white text-lg md:text-xl lg:text-3xl font-black uppercase text-center leading-tight drop-shadow-lg px-2 whitespace-nowrap overflow-hidden text-ellipsis">
                        {style.nameEn}
                      </h2>
                    </div>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
          </motion.div>
        </div>
      )}

      {mounted && createPortal(overlayJSX, document.body)}
    </div>
  );
}
