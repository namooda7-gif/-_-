'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const { setCursorType } = useCursor();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] overflow-hidden cursor-ew-resize select-none border-y border-white/10 group shadow-2xl shadow-black/50"
      onMouseEnter={() => setCursorType("drag")}
      onMouseLeave={() => {
        setCursorType("default");
        setIsDragging(false);
      }}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseMove={onMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={onTouchMove}
    >
      {/* Before Image (Bottom Layer) */}
      <div className="absolute inset-0">
        <Image 
          src={beforeImage}
          alt="Before Transformation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-10 right-10 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-black tracking-[0.3em] uppercase">
          BEFORE
        </div>
      </div>

      {/* After Image (Top Layer with Mask) */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 w-[100vw] lg:w-[1400px]"> {/* Fixed width to prevent shrinking */}
          <Image 
            src={afterImage}
            alt="After Transformation"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-10 left-10 px-4 py-2 rounded-full bg-accent-gold/80 backdrop-blur-md border border-white/30 text-white text-[10px] font-black tracking-[0.3em] uppercase min-w-[100px] text-center">
          AFTER
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-black/10 group-active:scale-110 transition-transform">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-black/20 rounded-full" />
            <div className="w-1 h-5 bg-black/40 rounded-full" />
            <div className="w-1 h-3 bg-black/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Helper Pulse */}
      {sliderPosition === 50 && !isDragging && (
        <motion.div 
          animate={{ x: [0, 20, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100px] pointer-events-none z-30 flex flex-col items-center gap-2"
        >
          <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] text-white/50 font-bold uppercase tracking-widest whitespace-nowrap">
            Drag to compare
          </div>
        </motion.div>
      )}
    </div>
  );
}
