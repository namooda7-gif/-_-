"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

const PortfolioItem = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInit, setIsInit] = useState(false);
  
  // Custom pointer motion values
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 150, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 150, damping: 20 });

  // Canvas context cache
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const colorImageRef = useRef<HTMLDivElement | null>(null); // Ref for the colored overlay div

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const resizeCanvas = () => {
      const { width, height } = containerRef.current!.getBoundingClientRect();
      // Increase resolution for retina displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      // Normalize coordinate system to use css pixels
      ctx.scale(dpr, dpr);
      
      // 마스크 초기화: 캔버스를 완전히 투명하게 만듦 (CSS mask에서 투명=안보임. 즉 기본 상태는 안 보임)
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

    // Update custom pointer
    pointerX.set(x);
    pointerY.set(y);

    const ctx = ctxRef.current;
    const brushSize = 100; // 브러시 크기

    // 캔버스에 그리는 것은 마스크의 "불투명한" 영역을 만드는 것 (보이는 영역)
    // 부드러운 가장자리를 위해 방사형 그라데이션 사용
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, brushSize);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)"); // 중심은 완전 불투명 (컬러 보임)
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // 끝은 투명하게 (부드러운 테두리)

    ctx.globalCompositeOperation = "source-over"; // 기본 방식으로 누적해서 그림
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // 핵심: 그릴 때마다 캔버스를 데이터 URL로 변환하여 color 이미지의 CSS maskImage로 설정
    // requestAnimationFrame 등을 쓰면 성능 향상이 가능하지만 현재는 단순 적용해봅니다.
    const canvas = canvasRef.current;
    if (colorImageRef.current && canvas) {
      colorImageRef.current.style.maskImage = `url(${canvas.toDataURL()})`;
      (colorImageRef.current.style as CSSStyleDeclaration & { webkitMaskImage: string }).webkitMaskImage = `url(${canvas.toDataURL()})`;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // 마우스를 뗏을 때 궤적을 유지하려면 아래 초기화 코드를 주석 처리/삭제
    // if (ctxRef.current && containerRef.current) {
    //   const { width, height } = containerRef.current.getBoundingClientRect();
    //   ctxRef.current.clearRect(0, 0, width, height);
    //   if (colorImageRef.current) {
    //      colorImageRef.current.style.maskImage = 'none';
    //      colorImageRef.current.style.WebkitMaskImage = 'none';
    //   }
    // }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden bg-neutral-900 rounded-none cursor-none ${
        index % 6 === 0 ? 'col-span-12 md:col-span-8 h-[600px] mb-8' :
        index % 6 === 1 ? 'col-span-12 md:col-span-4 h-[750px] md:-mt-20' :
        index % 6 === 2 ? 'col-span-12 md:col-span-4 h-[400px] md:mt-8' :
        index % 6 === 3 ? 'col-span-12 md:col-span-4 h-[550px]' :
        index % 6 === 4 ? 'col-span-12 md:col-span-4 h-[450px] md:mt-24' :
        'col-span-12 h-[500px] mt-8'
      }`}
    >
      {/* Base Layer: Black & White */}
      <div className="absolute inset-0 z-0 grayscale contrast-125 brightness-75">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[3s] group-hover:scale-105"
        />
      </div>

      {/* Colored Layer: WebkitMasked by the hidden Canvas DataURL overlay */}
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

      {/* Actual Canvas: Hidden, used only to generate the mask image */}
      <canvas
        ref={canvasRef}
        className="hidden" // Do not render the canvas visually
      />

      {/* Custom Lens Pointer (only visible on hover) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="absolute top-0 left-0 w-[400px] h-[400px] border border-white/10 rounded-full z-30 pointer-events-none flex items-center justify-center bg-white/[0.01] backdrop-blur-[2px] transition-opacity duration-300"
          >
             <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Text/Info */}
      <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase block mb-2">
            {project.category} | {project.location}
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
  return (
    <section className="py-40 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-6 max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-black tracking-[0.8em] text-white/20 uppercase"
            >
              Selected Works
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter"
            >
              찾아가는 가치,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">포트폴리오</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:text-right"
          >
             <p className="text-white/40 text-sm max-w-sm leading-relaxed">
               마우스를 움직여 공간의 숨겨진 생동감을 찾아보세요.<br />
               모든 흑백의 기록은 라올을 만나 비로소 완성된 색을 갖습니다.
             </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {projects.map((project, index) => (
            <PortfolioItem 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 text-center"
        >
            <Link href="/portfolio" className="inline-block group">
                <span className="text-2xl font-black text-white uppercase tracking-widest border-b border-white/20 pb-2 group-hover:border-white transition-all">
                    View Full Archive
                </span>
            </Link>
        </motion.div>
      </div>
    </section>
  );
}
