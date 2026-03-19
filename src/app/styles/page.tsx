'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { interiorStyles, InteriorStyle } from '@/data/styles';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const StyleHorizontalItem = ({ style, index }: { style: InteriorStyle; index: number }) => {
  return (
    <motion.div
      className="relative shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] h-[60vh] lg:h-[70vh] group ml-32 first:ml-0"
    >
      <Link href={`/styles/${style.slug}`} className="block w-full h-full relative overflow-hidden rounded-[20px] lg:rounded-[40px] border border-white/5 hover:border-white/20 transition-colors duration-700">
        {/* Background Image with Parallax effect could be added here later */}
        <div className="absolute inset-0 z-0">
          <Image
            src={style.previewImage}
            alt={style.nameEn}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale-[40%] group-hover:grayscale-0"
            sizes="(max-width: 1200px) 100vw, 80vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 p-8 md:p-16 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <span className="text-[10px] font-black tracking-[0.5em] text-accent-pink uppercase block">
                Style Case {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                {style.nameEn}
              </h3>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 45 }}
              className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-auto"
            >
              <ArrowUpRight size={32} />
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl space-y-6">
              <div className="flex flex-wrap gap-2">
                {style.keywords.map((kw: string, i: number) => (
                  <span key={i} className="text-[10px] font-bold px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white/80">
                    #{kw}
                  </span>
                ))}
              </div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed font-light line-clamp-3">
                {style.description}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div 
                className="w-4 h-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                style={{ backgroundColor: style.bgColor }}
              />
              <span className="text-base lg:text-xl font-bold tracking-tight text-white">{style.nameKo}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function StylesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-85%"]);
  
  // Parallax for the background title
  const titleX = useTransform(smoothProgress, [0, 1], [0, -400]);

  return (
    <main 
      ref={containerRef}
      className="relative h-[800vh] bg-[#0A0A0A] text-white"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Background Ambient Text */}
        <motion.div 
          style={{ x: titleX }}
          className="absolute top-[35%] left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none z-[-1] select-none opacity-[0.03]"
        >
          <span className="text-[30vh] font-black uppercase tracking-tighter leading-none text-white/10">
            Editorial Perspectives Style Collections Premium Design
          </span>
        </motion.div>

        {/* Page Header (Responsive & Flexible) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-30 px-[10vw] pt-20 lg:pt-32 pb-4 lg:pb-8 space-y-2 lg:space-y-4 shrink-0"
        >
          <p className="text-accent-pink text-[9px] md:text-xs tracking-[0.8em] font-black uppercase">
            Style Collections
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none whitespace-nowrap">
            Editorial <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-transparent">Styles</span>
          </h1>
        </motion.div>

        {/* Horizontal Track Container */}
        <div className="relative z-20 flex-1 flex items-center min-h-0">
          <motion.div 
            style={{ x }}
            className="flex items-center gap-16 px-[10vw] min-w-max"
          >
            {/* Introductory Slide */}
            <div className="w-[85vw] md:w-[50vw] shrink-0 mr-32 flex flex-col justify-center space-y-10">
              <p className="text-sm md:text-lg lg:text-2xl text-white/50 max-w-xl font-light leading-relaxed">
                공간은 단순한 물리적 장소를 넘어 삶의 철학을 담는 그릇입니다. <br className="hidden md:block" />
                라올실내건축이 제안하는 15가지 프리미엄 스타일 보드를 통해 당신만의 감각을 발견해 보세요.
              </p>
              <div className="flex gap-4 items-center text-accent-pink">
                <span className="text-xs font-black tracking-[0.4em] uppercase">Scroll to explore</span>
                <ArrowRight size={20} />
              </div>
            </div>

            {interiorStyles.map((style, index) => (
              <StyleHorizontalItem 
                key={style.slug} 
                style={style} 
                index={index} 
              />
            ))}

            {/* Final Slide / Call to Action */}
            <div className="w-[85vw] md:w-[60vw] shrink-0 ml-32 flex items-center justify-center">
              <Link href="/contact" className="group text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-12 py-6 rounded-full bg-white text-black font-black uppercase tracking-[0.4em] text-sm group-hover:bg-accent-pink group-hover:text-white transition-all duration-500 shadow-2xl"
                >
                  Start Your Project
                </motion.div>
                <p className="mt-8 text-white/30 text-xs font-medium tracking-[0.3em] uppercase">
                  Let&apos;s reimagine your perspective
                </p>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="absolute bottom-16 left-[10vw] right-[10vw] z-30">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Style Board</span>
              <StyleCounter progress={scrollYProgress} />
            </div>
            <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em]">Laol Interior Design</span>
          </div>
          <div className="h-px w-full bg-white/5 relative">
            <motion.div 
              style={{ scaleX: smoothProgress, transformOrigin: "left" }}
              className="absolute inset-0 bg-accent-pink shadow-[0_0_15px_rgba(255,139,167,0.4)]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

// Separate component to handle numerical update without re-rendering parent
const StyleCounter = ({ progress }: { progress: MotionValue<number> }) => {
  const [val, setVal] = React.useState("01");
  
  React.useEffect(() => {
    return progress.on("change", (latest: number) => {
      const num = Math.min(15, Math.floor(latest * 16) + 1);
      setVal(String(num).padStart(2, '0'));
    });
  }, [progress]);

  return (
    <span className="text-accent-pink font-black text-xl tabular-nums">
      {val}
    </span>
  );
};
