'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { interiorStyles, InteriorStyle } from '@/data/styles';
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const StyleHorizontalItem = ({ style, index }: { style: InteriorStyle; index: number }) => {
  return (
    <motion.div
      className="relative shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] h-[60vh] lg:h-[70vh] group ml-32 first:ml-0"
    >
      <Link href={`/styles/${style.slug}`} className="block w-full h-full relative overflow-hidden rounded-[20px] lg:rounded-[40px] border border-white/5 md:hover:border-white/20 transition-colors duration-700">
        {/* Background Image with Parallax effect could be added here later */}
        <div className="absolute inset-0 z-0">
          <Image
            src={style.previewImage}
            alt={style.nameEn}
            fill
            className="object-cover transition-transform duration-1000 md:group-hover:scale-110 opacity-100 md:opacity-60 md:group-hover:opacity-100 grayscale-0 md:grayscale-[40%] md:group-hover:grayscale-0"
            sizes="(max-width: 1200px) 100vw, 80vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 p-8 md:p-16 flex flex-col justify-end md:justify-between pointer-events-none">
          {/* 화살표: 항상 우상단 고정 — 이름 길이에 영향받지 않음 */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 45 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-6 right-6 md:top-10 md:right-10 w-9 h-9 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 pointer-events-auto z-20"
          >
            <ArrowUpRight size={16} className="md:hidden" />
            <ArrowUpRight size={24} className="hidden md:block" />
          </motion.div>

          {/* 영문 이름 박스 — 모바일에서 숨김, 데스크탑에서 상단 표시 */}
          <div className="hidden md:flex items-start">
            <div className="space-y-4 min-w-0 max-w-[calc(100%-5rem)]">
              <span className="text-[10px] font-black tracking-[0.5em] text-accent-gold uppercase block ml-2">
                Style Case {String(index + 1).padStart(2, '0')}
              </span>
              <div className="glass-pill-premium px-10 py-6 inline-block rounded-[3rem] border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-700 group-hover:border-accent-gold/40 max-w-full overflow-hidden">
                <h3
                  className="font-black text-white uppercase tracking-tighter leading-none"
                  style={{ fontSize: 'clamp(1.1rem, 4.5vw, 4rem)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}
                >
                  {style.nameEn}
                </h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8">
            <div className="max-w-xl space-y-6">
              <div className="flex flex-wrap gap-2">
                {style.keywords.map((kw: string, i: number) => (
                  <span key={i} className="text-[10px] font-bold px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white/80">
                    #{kw}
                  </span>
                ))}
              </div>
              <p className="text-white/80 md:text-white/60 text-xs md:text-base leading-relaxed font-light line-clamp-3">
                {style.description}
              </p>
            </div>

            <div className="glass-pill-premium p-4 md:p-6 rounded-[2rem] border-white/5 backdrop-blur-lg flex items-center gap-6 shadow-xl transition-all duration-700 group-hover:border-white/20">
              <div 
                className="w-4 h-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                style={{ backgroundColor: style.bgColor }}
              />
              <span className="text-sm lg:text-xl font-bold tracking-tight text-white break-keep line-clamp-1">{style.nameKo}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const flagshipStyles = interiorStyles.filter((s) => !s.isNew);
const newStyles = interiorStyles.filter((s) => s.isNew);

export default function StylesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const newStylesTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-85%"]);

  // Parallax for the background title
  const titleX = useTransform(smoothProgress, [0, 1], [0, -400]);

  // Row 1 (flagship) prev/next — steps the page's scroll-jacked progress by ~one card
  const goRow1 = (direction: 1 | -1) => {
    if (!containerRef.current) return;
    const scrollableHeight = containerRef.current.offsetHeight - window.innerHeight;
    const steps = flagshipStyles.length + 1;
    const step = scrollableHeight / steps;
    window.scrollBy({ top: direction * step, behavior: 'smooth' });
  };

  // Row 2 (new styles) — plain scrollLeft based drag-to-scroll + prev/next,
  // kept independent from row 1's page-scroll-jacking track
  const dragStateRef = useRef({ dragging: false, startX: 0, startScroll: 0, moved: 0 });
  const suppressClickRef = useRef(false);

  const goRow2 = (direction: 1 | -1) => {
    const el = newStylesTrackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  const handleRow2PointerDown = (e: React.MouseEvent) => {
    const el = newStylesTrackRef.current;
    if (!el) return;
    dragStateRef.current = { dragging: true, startX: e.pageX, startScroll: el.scrollLeft, moved: 0 };
  };
  const handleRow2PointerMove = (e: React.MouseEvent) => {
    const state = dragStateRef.current;
    const el = newStylesTrackRef.current;
    if (!state.dragging || !el) return;
    const dx = e.pageX - state.startX;
    state.moved = Math.abs(dx);
    el.scrollLeft = state.startScroll - dx;
  };
  const handleRow2PointerUp = () => {
    const state = dragStateRef.current;
    if (state.dragging && state.moved > 5) {
      suppressClickRef.current = true;
    }
    dragStateRef.current.dragging = false;
  };
  const handleRow2ClickCapture = (e: React.MouseEvent) => {
    if (suppressClickRef.current) {
      e.preventDefault();
      e.stopPropagation();
      suppressClickRef.current = false;
    }
  };

  return (
    <>
    <main
      ref={containerRef}
      className="relative h-[600vh] bg-[#0A0A0A] text-white"
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
          <p className="text-accent-gold text-[9px] md:text-xs tracking-[0.8em] font-black uppercase">
            Style Collections
          </p>
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
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
            <div className="w-[85vw] md:w-[50vw] max-w-2xl shrink-0 mr-32 flex flex-col justify-center space-y-10">
              <p className="text-sm md:text-lg lg:text-2xl text-white/50 max-w-xl font-light leading-relaxed">
                공간은 단순한 물리적 장소를 넘어 삶의 철학을 담는 그릇입니다. <br className="hidden md:block" />
                라올실내건축이 제안하는 15가지 프리미엄 스타일 보드를 통해 당신만의 감각을 발견해 보세요.
              </p>
              <div className="flex gap-4 items-center text-accent-gold">
                <span className="text-xs font-black tracking-[0.4em] uppercase">Scroll to explore</span>
                <ArrowRight size={20} />
              </div>
            </div>

            {flagshipStyles.map((style, index) => (
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
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-5 md:px-12 md:py-6 rounded-full bg-white text-black font-black uppercase tracking-[0.4em] text-xs md:text-sm md:group-hover:bg-accent-gold md:group-hover:text-white transition-all duration-500 shadow-2xl"
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
            <div className="flex items-center gap-6">
              <span className="hidden md:inline text-[10px] font-black text-white/10 uppercase tracking-[0.5em]">Laol Interior Design</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goRow1(-1)}
                  aria-label="이전 스타일"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full glass-pill-premium border-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/10 hover:border-accent-gold/40 transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => goRow1(1)}
                  aria-label="다음 스타일"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full glass-pill-premium border-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/10 hover:border-accent-gold/40 transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-white/5 relative">
            <motion.div 
              style={{ scaleX: smoothProgress, transformOrigin: "left" }}
              className="absolute inset-0 bg-accent-gold shadow-[0_0_15px_rgba(197,160,89,0.4)]"
            />
          </div>
        </div>
      </div>
    </main>

    {/* 추가 스타일 5종 — 기존 15개짜리와 동일한 카드지만, 시각적으로 구분되는 독립된 두 번째 가로 스크롤 라인 */}
    <section className="relative bg-[#050505] text-white py-24 md:py-40 overflow-hidden border-t border-white/10">
      <div className="px-[10vw] mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-accent-gold text-xs md:text-sm tracking-[0.6em] font-black uppercase mb-6">
            Line 02 — Newly Added
          </p>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            추가로 만나보는 <span className="text-white/30">5가지 스타일</span>
          </h2>
          <div className="flex gap-3 items-center text-accent-gold mt-6">
            <span className="text-xs font-black tracking-[0.4em] uppercase">Drag or scroll sideways</span>
            <ArrowRight size={18} />
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => goRow2(-1)}
            aria-label="이전 스타일"
            className="w-11 h-11 md:w-12 md:h-12 rounded-full glass-pill-premium border-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/10 hover:border-accent-gold/40 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goRow2(1)}
            aria-label="다음 스타일"
            className="w-11 h-11 md:w-12 md:h-12 rounded-full glass-pill-premium border-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/10 hover:border-accent-gold/40 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={newStylesTrackRef}
        onMouseDown={handleRow2PointerDown}
        onMouseMove={handleRow2PointerMove}
        onMouseUp={handleRow2PointerUp}
        onMouseLeave={handleRow2PointerUp}
        onClickCapture={handleRow2ClickCapture}
        className="overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="flex items-center gap-16 px-[10vw] w-max">
          {newStyles.map((style, index) => (
            <StyleHorizontalItem
              key={style.slug}
              style={style}
              index={flagshipStyles.length + index}
            />
          ))}
        </div>
      </div>
    </section>
    </>
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
    <span className="text-accent-gold font-black text-xl tabular-nums">
      {val}
    </span>
  );
};
