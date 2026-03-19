"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <main className="bg-[#0A0A0A] min-h-screen text-white overflow-hidden pb-40">
        <div className="h-[80vh] w-full flex items-center justify-center">
          <div className="text-white/20 uppercase tracking-[1em] text-xs">Loading...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white overflow-hidden pb-40">
      {/* 1. Hero Section */}
      <section 
        className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Interior Atmosphere"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-90" />
        </motion.div>

        {/* Sunlight Effect Overlay */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
              style={{
                background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 230, 150, 0.2), rgba(255, 200, 100, 0.05) 50%, transparent 100%)`,
                filter: 'blur(40px)',
              }}
            />
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
            className="text-5xl md:text-7xl font-black uppercase leading-[1.1] tracking-tighter"
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

      {/* 2. Core Philosophy: The Ergonomics of Women */}
      <section className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          
          <div className="flex-1 w-full order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] w-full max-w-lg mx-auto overflow-hidden"
            >
              <Image
                src="/images/portfolio/04.png"
                alt="Detail Oriented Architecture"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              {/* Highlight Box */}
              <div className="absolute -bottom-10 -right-10 bg-[#141414] p-10 hidden md:block border border-white/5">
                <p className="text-accent-pink font-black text-4xl mb-2">01</p>
                <p className="text-[10px] tracking-[0.5em] uppercase text-white/40 font-bold">Ergonomics</p>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">
                여성의 <span className="text-accent-pink">체형과 동선</span>에<br />
                완벽히 맞춰진 디테일
              </h2>
              <div className="space-y-8 text-white/60 text-lg font-light leading-relaxed">
                <p>
                  집안에서의 노동과 쉼은 단 1cm의 차이로 성질이 바뀝니다. 부엌 조리대의 높이, 
                  자주 쓰는 수납장의 깊이, 욕실에서 화장대까지 이어지는 찰나의 동선까지.
                </p>
                <p>
                  라올 실내건축은 여성 대표가 직접 현장에서 경험하고 고민한 데이터를 바탕으로,
                  가사를 전담하거나 집에서 가장 많은 시간을 보내는 **여성의 신체 구조와 동선을 최우선으로 고려**하여 설계합니다.
                </p>
                <p className="text-xl text-white font-medium border-l-2 border-white/20 pl-6 py-2 mt-8">
                  &quot;불필요한 걸음을 줄이고, 자연스러운 움직임을 유도하는 것.<br />
                  그것이 우리가 정의하는 진짜 럭셔리입니다.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto border-t border-white/5 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[10px] font-black tracking-[0.8em] text-white/30 uppercase block mb-4">Core Principles</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase">라올을 움직이는 세 가지 원칙</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {[
            {
              num: "I.",
              title: "Obsessive Detail",
              kor: "눈에 띄지 않는 섬세함",
              desc: "사용자만이 체감할 수 있는 1mm의 마감, 빛의 온도, 손끝에 닿는 자재의 질감까지 변태적으로 집착합니다."
            },
            {
              num: "II.",
              title: "Absolute Safety",
              kor: "보이지 않는 안전성",
              desc: "화려한 인테리어 이면에 숨겨진 배관, 전기, 단열 등 기초 공사에 가장 많은 시간과 비용을 투자합니다."
            },
            {
              num: "III.",
              title: "Transparent Trust",
              kor: "투명한 소통과 정직함",
              desc: "거품을 뺀 명확한 견적서와 시공 과정의 실시간 공유를 통해, 고객의 불안감을 완전한 신뢰로 바꿉니다."
            }
          ].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="text-accent-pink font-serif text-5xl mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                {val.num}
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase">{val.title}</h3>
              <p className="text-sm font-bold text-white/40 tracking-widest mb-6">{val.kor}</p>
              <p className="text-white/60 leading-relaxed font-light">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
