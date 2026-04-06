"use client";

import React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  const bgImages = [
    "/images/about/about_philosophy_bg1.png",
    "/images/about/about_philosophy_bg.png",
    "/images/about/about_principles_bg.png"
  ];

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // about 페이지에서는 글로벌 footer를 숨겨 3섹션 스냅 구조 유지
  React.useEffect(() => {
    const footer = document.querySelector('footer') as HTMLElement | null;
    if (footer) footer.style.display = 'none';
    return () => {
      if (footer) footer.style.display = '';
    };
  }, []);

  if (!isMounted) {
    return (
      <main className="bg-[#0F0E0D] min-h-screen text-white overflow-x-hidden">
        <div className="h-[80vh] w-full flex items-center justify-center">
          <div className="text-white/20 uppercase tracking-[1em] text-xs">Loading...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative bg-transparent min-h-screen text-white overflow-x-hidden">
      {/* 1. Hero Section */}
      <section 
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden snap-start"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0 bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <OptimizedImage
              src={bgImages[0]}
              alt="Laol Premium Architecture"
              fill
              className="object-cover opacity-60"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0F0E0D] via-[#0F0E0D]/20 to-transparent opacity-90" />
        </motion.div>

        {/* Sunlight Effect Overlay: Layered for intensity and realism */}
        <AnimatePresence>
          {isHovering && (
            <>
              {/* 1. Core Brightness (Hot Spot) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
                style={{
                  background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 220, 0.4), rgba(255, 200, 100, 0.1) 40%, transparent 100%)`,
                  filter: 'blur(20px)',
                }}
              />
              {/* 2. Soft Warm Glow (Atmosphere) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
                style={{
                  background: `radial-gradient(circle 800px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 180, 50, 0.15), rgba(255, 100, 0, 0.05) 60%, transparent 100%)`,
                  filter: 'blur(60px)',
                }}
              />
              {/* 3. Subtle Light Rays / Flare Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay"
                style={{
                  background: `radial-gradient(circle 1200px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 240, 200, 0.1), transparent 70%)`,
                }}
              />
            </>
          )}
        </AnimatePresence>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-black tracking-[1em] text-white/50 uppercase mb-8"
          >
            About Laol
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-7xl font-black uppercase leading-[1.1] tracking-tighter"
          >
            단순히 머무는 곳이 아닌, <br />
            <span 
              className="text-transparent bg-clip-text transition-all duration-700 font-black"
              style={{ 
                backgroundImage: isHovering 
                  ? `radial-gradient(circle at ${mousePos.x - (typeof window !== 'undefined' ? window.innerWidth/2 : 0)}px 0px, #FFFFFF, #FFE4B5 30%, rgba(255,255,255,0.2))` 
                  : "linear-gradient(to right, white, rgba(255,255,255,0.4))",
                WebkitBackgroundClip: "text",
                filter: isHovering ? 'drop-shadow(0 0 20px rgba(255,220,150,0.4))' : 'none',
              }}
            >
              당신을 둥글게 감싸는 공간
            </span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Core Philosophy: The Ergonomics of Women (Cinematic Full Background) */}
      <section className="min-h-screen w-full relative flex flex-col snap-start scroll-mt-[32px] md:scroll-mt-[40px] overflow-hidden">
        {/* Full Section Background */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/about/about_philosophy_bg.png"
            alt="Ergonomics & Space Philosophy"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle Darkening Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        <div className="flex-1 flex flex-col justify-center px-4 md:px-12 xl:px-24 max-w-[1600px] mx-auto w-full relative z-10 pt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            
            {/* Left Decorative Element (Architectural Detail) */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="hidden xl:flex flex-col items-start gap-4"
            >
              <div className="h-64 w-px bg-accent-gold/40" />
              <div className="glass-pill-premium p-6 rounded-2xl border-white/10 backdrop-blur-xl">
                <span className="text-accent-gold text-4xl font-black">01</span>
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-black mt-2 leading-none whitespace-nowrap">Space Archetype</p>
              </div>
            </motion.div>

            {/* Main Content Card (Floating Glass Plate) */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl glass-pill-premium p-10 md:p-16 lg:p-20 rounded-[3rem] border-white/10 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
            >
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-accent-gold" />
                  <span className="text-accent-gold text-[10px] font-black tracking-[0.6em] uppercase block">Philosophy</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
                  여성의 <span className="text-white/40">체형과 동선</span>에<br />
                  완벽히 맞춰진 디테일
                </h2>
              </motion.div>
              
              <div className="space-y-8 text-white/70 text-lg lg:text-xl font-light leading-relaxed tracking-tight">
                <p className="break-keep">
                  집안에서의 노동과 쉼은 단 1cm의 차이로 성질이 바뀝니다. 부엌 조리대의 높이, 
                  자주 쓰는 수납장의 깊이, 욕실에서 화장대까지 이어지는 찰나의 동선까지.
                </p>
                <p className="break-keep text-white/90">
                  라올 실내건축은 여성 대표가 직접 현장에서 경험하고 고민한 데이터를 바탕으로,
                  가사를 전담하거나 집에서 가장 많은 시간을 보내는 <strong className="text-white font-black underline decoration-accent-gold/40 underline-offset-4">여성의 신체 구조와 동선을 최우선으로 고려</strong>하여 설계합니다.
                </p>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="relative pt-12 mt-16 border-t border-white/10"
                >
                  <p className="text-2xl md:text-3xl text-white font-black italic leading-tight break-keep opacity-90 tracking-tighter">
                    &quot;불필요한 걸음을 줄이고, 자연스러운 움직임을 유도하는 것.<br />
                    그것이 우리가 정의하는 진짜 럭셔리입니다.&quot;
                  </p>
                  <div className="absolute top-12 left-0 w-12 h-1 bg-accent-gold" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid (Cinematic Full Background) */}
      <section className="min-h-screen w-full relative flex flex-col snap-start scroll-mt-[32px] md:scroll-mt-[40px] overflow-hidden">
        {/* Full Section Background */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/about/about_principles_bg.png"
            alt="Laol Core Principles"
            fill
            className="object-cover"
          />
          {/* Subtle Darkening Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0D] via-transparent to-transparent" />
        </div>

        <div className="flex-1 flex flex-col justify-center px-4 md:px-12 xl:px-24 max-w-[1600px] mx-auto w-full relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-accent-gold" />
              <span className="text-accent-gold text-[10px] font-black tracking-[0.8em] uppercase block">Core Values</span>
              <div className="w-12 h-px bg-accent-gold" />
            </div>
            <h2 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter">라올을 움직이는 <br className="md:hidden"/> <span className="text-white/20">세 가지 원칙</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                num: "I.",
                title: "Obsessive Detail",
                kor: "눈에 띄지 않는 섬세함",
                desc: "1mm의 마감, 빛의 온도, 손끝에 닿는 자재의 질감까지 지독하리만치 집착합니다.",
                icon: "✨"
              },
              {
                num: "II.",
                title: "Absolute Safety",
                kor: "보이지 않는 안전성",
                desc: "아름다움 이면에 숨겨진 배관, 전기, 단열 등 기초에 가장 많은 투자를 아끼지 않습니다.",
                icon: "🛡️"
              },
              {
                num: "III.",
                title: "Transparent Trust",
                kor: "투명한 소통과 정직함",
                desc: "거품 없는 견적과 시공 과정의 투명한 공유로 완전한 신뢰의 경험을 선물합니다.",
                icon: "🤝"
              }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="glass-pill-premium p-10 md:p-14 h-full rounded-[3rem] border-white/10 backdrop-blur-xl transition-all duration-700 hover:border-accent-gold/40 hover:bg-white/[0.05] flex flex-col shadow-2xl">
                  <div className="text-accent-gold font-black text-5xl md:text-6xl mb-10 group-hover:scale-110 transition-transform duration-700 origin-left">
                    {val.num}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black mb-2 uppercase tracking-tight text-white">{val.title}</h3>
                  <p className="text-[10px] font-black text-accent-gold/50 tracking-[0.4em] uppercase mb-10">{val.kor}</p>
                  <p className="text-white/60 leading-relaxed font-light break-keep text-lg italic">&quot;{val.desc}&quot;</p>
                  
                  {/* Decorative Architectural Line */}
                  <div className="mt-auto pt-12 opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="w-16 h-1 bg-accent-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* 4. Refined Footer */}
          <div className="mt-24 pt-12 border-t border-white/5 opacity-50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12">
              <div className="text-2xl font-black tracking-tighter uppercase grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default">
                LAOL <span className="font-light">| 실내건축</span>
              </div>
              <div className="flex gap-12">
                {['Instagram', 'Blog', 'Contact'].map((link) => (
                  <span key={link} className="text-[10px] tracking-[0.4em] uppercase text-white/30 hover:text-accent-gold transition-colors cursor-pointer font-black">{link}</span>
                ))}
              </div>
              <p className="text-[9px] tracking-[0.2em] text-white/20 uppercase font-black tracking-widest text-center">© 2026 Laol Interior. Precision Planning, Premium Execution.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
