"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { editorialProjects as projects } from "@/data/projects";

const PortfolioItem = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInit, setIsInit] = useState(false);
  
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 150, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 150, damping: 20 });

  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const colorImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const resizeCanvas = () => {
      const { width, height } = containerRef.current!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);
      setIsInit(true);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !ctxRef.current || !isInit) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    pointerX.set(x);
    pointerY.set(y);

    const ctx = ctxRef.current;
    const brushSize = 100;

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, brushSize);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.globalCompositeOperation = "source-over";
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    
    if (colorImageRef.current && canvasRef.current) {
      const dataUrl = canvasRef.current.toDataURL();
      colorImageRef.current.style.maskImage = `url(${dataUrl})`;
      (colorImageRef.current.style as any).webkitMaskImage = `url(${dataUrl})`;
    }
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative shrink-0 w-[85vw] md:w-[65vw] lg:w-[45vw] aspect-[16/10] overflow-hidden bg-neutral-900 cursor-none ml-12 first:ml-[10vw] last:mr-[20vw]"
    >
      <div className="absolute inset-0 z-0 grayscale contrast-125 brightness-75">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[3s] group-hover:scale-105"
        />
      </div>

      <div 
        ref={colorImageRef}
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
      >
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[3s] group-hover:scale-105"
        />
      </div>

      <canvas ref={canvasRef} className="hidden" />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
            className="absolute top-0 left-0 w-[400px] h-[400px] border border-white/10 rounded-full z-30 pointer-events-none flex items-center justify-center bg-white/[0.01] backdrop-blur-[2px]"
          >
             <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="overflow-hidden"
        >
          <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase block mb-2">
            Selection {index + 1}
          </span>
          <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-4 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
            {project.title}
          </h3>
          <div className="w-0 group-hover:w-16 h-1 bg-white transition-all duration-700 delay-100" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function PortfolioEditorial() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#0A0A0A]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header Section */}
        <div className="px-[10vw] mb-12">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xs font-black tracking-[0.8em] text-white/20 uppercase"
            >
              Selected Works
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tighter"
            >
              찾아가는 가치,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">포트폴리오</span>
            </motion.h2>
          </div>
        </div>

        {/* Horizontal Track */}
        <div className="relative">
          <motion.div style={{ x }} className="flex items-center">
            {projects.map((project, index) => (
              <PortfolioItem 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
            
            {/* View Full Archive Card at the end */}
            <div className="shrink-0 w-[40vw] h-[400px] flex items-center justify-center ml-24 mr-[30vw]">
              <Link href="/portfolio" className="group text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:border-white transition-colors"
                >
                  <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform" />
                </motion.div>
                <span className="text-xl font-black text-white/40 uppercase tracking-[0.4em] group-hover:text-white transition-colors">
                  Full Archive
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-12 left-[10vw] right-[10vw] h-px bg-white/10 overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            className="w-full h-full bg-accent-pink"
          />
        </div>
      </div>
    </section>
  );
}
