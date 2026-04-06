"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useCursor } from "@/context/CursorContext";
import OptimizedImage from "@/components/OptimizedImage";

import { editorialProjects as projects } from "@/data/projects";

const PortfolioItem = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const { setCursorType } = useCursor();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorImageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const pointsRef = useRef<{ x: number, y: number, age: number }[]>([]);

  useEffect(() => {
    if (!isHovered || !canvasRef.current || !colorImageRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    };
    resize();
    window.addEventListener('resize', resize);

    let animationFrameId: number;

    const render = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update ages and filter points
      pointsRef.current = pointsRef.current.filter(p => p.age < 180);
      pointsRef.current.forEach(p => p.age += 1);

      if (pointsRef.current.length > 1) {
        ctx.lineWidth = 300; 
        ctx.beginPath();
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);
        for (let i = 1; i < pointsRef.current.length; i++) {
          ctx.lineTo(pointsRef.current[i].x, pointsRef.current[i].y);
        }
        ctx.strokeStyle = 'white';
        ctx.stroke();
      }

      if (colorImageRef.current) {
        const dataUrl = canvas.toDataURL('image/png', 0.5); // Slightly lower quality for better speed
        const style = colorImageRef.current.style;
        style.maskImage = `url(${dataUrl})`;
        style.webkitMaskImage = `url(${dataUrl})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    pointerX.set(x);
    pointerY.set(y);
    
    if (isHovered) {
      pointsRef.current.push({ x, y, age: 0 });
    }
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => {
        setIsHovered(true);
        setCursorType("view");
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCursorType("default");
      }}
      onMouseMove={handleMouseMove}
      className="relative shrink-0 w-[85vw] md:w-[48vw] lg:w-[48vw] aspect-[16/10] overflow-hidden bg-neutral-900 cursor-auto ml-4 md:ml-24 first:ml-[0vw] last:mr-[10vw] pointer-events-auto z-50 group"
    >
      {/* Base grayscale layer */}
      <div className="absolute inset-0 z-0 grayscale contrast-125 brightness-75">
        <OptimizedImage
          src={project.mainImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Color layer (Masked by Canvas on Desktop, visible on Mobile) */}
      <div 
        ref={colorImageRef}
        className="absolute inset-0 z-10 pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
        style={{
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
      >
        <OptimizedImage
          src={project.mainImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <canvas ref={canvasRef} className="pointer-events-none opacity-0 absolute inset-0" />

      {/* Text Info (Always visible on mobile) */}
      <div className="absolute inset-x-4 bottom-8 md:inset-x-10 md:bottom-12 z-20 flex flex-col justify-end pointer-events-none">
        <motion.div className="overflow-hidden glass-pill-premium px-5 py-3 md:px-8 md:py-4 rounded-[1rem] border-white/20 w-[min(260px,72vw)] md:w-[460px] min-h-[60px] md:min-h-[80px] flex flex-col justify-center backdrop-blur-md">
          <span className="text-[9px] font-black tracking-[0.4em] text-white/30 uppercase block mb-0 italic">
            Showcase {index + 1}
          </span>
          <h3 className="text-[15px] md:text-[18px] font-black text-white uppercase tracking-tighter leading-none mb-1.5 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-700">
            {project.title}
          </h3>
          <div className="w-10 md:w-0 md:group-hover:w-10 h-0.5 bg-accent-page transition-all duration-700 md:delay-100" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function PortfolioEditorial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragConstraintRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // High-reliability scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // 1500vh로 높이를 늘려 더욱 차분하고 세밀한 스크롤 감각 제공
  // [0.1, 0.9] 데드존을 넓혀 진입 시 쇼케이스 1번을 확실히 인지하게 함
  // -80%는 48vw 이미지 16개를 한 화면에 2개씩 보여주며 끝까지 완주하는 최적의 거리입니다.
  const x = useTransform(smoothProgress, [0.1, 0.9], ["0%", "-80%"]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-auto min-h-[60vh] md:h-[1000vh] bg-[#0F0E0D] z-20 overflow-hidden md:overflow-visible"
      style={{ isolation: 'isolate' }}
    >
      <div className="md:sticky top-0 h-auto md:h-screen w-full flex flex-col justify-center overflow-visible md:overflow-hidden pointer-events-none">
        {/* Background Highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-accent-page/5 blur-[150px] rounded-full pointer-events-none" />

        {/* Header Section */}
        <div className="px-[8vw] md:px-[10vw] pt-16 md:pt-24 mb-6 md:mb-12 relative z-[60] pointer-events-none">
          <div className="space-y-6">
            <motion.p 
              className="text-xs font-black tracking-[0.8em] text-white/20 uppercase"
            >
              Selected Works
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-6xl font-black text-white uppercase leading-none tracking-tighter break-keep"
            >
              찾아가는 가치, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white/10 uppercase">포트폴리오</span>
            </motion.h2>
          </div>
        </div>

        {/* Horizontal Track - THE CORE INTERACTION AREA */}
        <div className="flex-1 flex items-center relative z-10 pointer-events-auto overflow-hidden md:overflow-visible w-full" ref={dragConstraintRef}>
          <motion.div 
            style={isMobile ? {} : { x, opacity }} 
            drag={isMobile ? "x" : false}
            dragConstraints={dragConstraintRef}
            dragElastic={0.1}
            className="flex items-center gap-10 md:gap-40 min-w-max pl-4 md:px-[10vw] cursor-grab active:cursor-grabbing md:cursor-auto"
          >
            {projects.map((project, index) => (
              <PortfolioItem 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
            
            {/* View Full Archive Card at the end */}
            <div className="shrink-0 w-[50vw] h-[400px] flex items-center justify-center mr-[20vw]">
              <Link href="/portfolio" className="group text-center pointer-events-auto">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-40 h-40 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-accent-page transition-colors relative"
                >
                  <div className="w-3 h-3 bg-accent-page rounded-full group-hover:scale-150 transition-transform shadow-[0_0_20px_var(--accent-page)]" />
                </motion.div>
                <div className="space-y-2">
                  <span className="text-2xl font-black text-white uppercase tracking-[0.5em] block group-hover:text-accent-page transition-colors">
                    Full Archive
                  </span>
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium block">
                    + Explore all construction cases
                  </span>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="px-[10vw] pb-8 md:pb-20 relative z-30 pointer-events-none">
          <div className="flex justify-between items-end mb-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-accent-page tracking-[0.4em] uppercase block">Progress</span>
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-bold text-white/20 uppercase tracking-widest">Active Insight</span>
              </div>
            </div>
            <span className="text-[10px] font-black text-white/20 tracking-widest uppercase pb-1">Scroll to explore projects</span>
          </div>
          <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
            <motion.div 
              style={{ scaleX: smoothProgress, transformOrigin: "left" }}
              className="absolute inset-0 bg-accent-page shadow-[0_0_20px_var(--accent-page)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
