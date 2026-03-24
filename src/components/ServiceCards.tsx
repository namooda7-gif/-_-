'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: "01",
    title: "인테리어 디자인",
    subtitle: "Interior Design",
    description: "사용자의 동선과 감정의 변화까지 계산한 입체적 설계로, 일상이 예술이 되는 최적의 공간을 제안합니다.",
    image: "/images/services/design.png",
    link: "/services#design",
  },
  {
    id: "02",
    title: "시공 및 감리",
    subtitle: "Construction & Supervision",
    description: "라올의 기술력은 보이지 않는 곳에서 증명됩니다. 엄격한 감리 시스템을 통해 설계의 의도를 완벽한 현실로 구현합니다.",
    image: "/images/services/construction.png",
    link: "/services#construction",
  },
  {
    id: "03",
    title: "우먼픽스 홈케어",
    subtitle: "WomanFix Homecare",
    description: "공사가 끝난 후가 진짜 시작입니다. 여성 전문가의 섬세한 시선으로 공간의 건강을 지속적으로 유지하는 프리미엄 솔루션입니다.",
    image: "/images/services/womanfix_v2.png",
    link: "/womanfix",
    highlight: true
  },
];

function MagneticButton({ children, href }: { children: React.ReactNode, href: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.4);
    y.set(distanceY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className="relative z-20"
    >
      <Link href={href} className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/[0.03] backdrop-blur-md text-white text-xs md:text-sm font-black border border-white/20 hover:bg-white/[0.08] hover:border-white/40 transition-all group/btn shadow-xl text-accent-page uppercase tracking-widest">
        {children}
        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
      </Link>
    </motion.div>
  );
}

export default function ServiceCards() {
  return (
    <section className="py-48 bg-[#0F0E0D] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-accent-page/5 blur-[150px] rounded-full -z-10 animate-pulse" />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-accent-page" />
              <p className="text-accent-page text-xs tracking-[0.4em] font-bold uppercase">Precision in Execution</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] mb-8 uppercase">
              실체적 변화를 만드는<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">전문 서비스</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md"
          >
            <p className="text-white/50 text-lg leading-relaxed mb-4 border-l-2 border-accent-page/30 pl-6">
              철학은 도면에 머물지 않습니다. 정교한 시공과 진심 어린 관리가 실제의 삶이 됩니다.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative h-[800px] rounded-[3rem] overflow-hidden glass-pill-premium border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)] transition-all duration-1000"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-[3s] md:group-hover:scale-110 opacity-70 md:opacity-40 md:group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100" />
              </div>

              {/* Content Overlay - ULTRACLEAR GLASS SYSTEM */}
              <div className="absolute inset-x-6 bottom-6 z-10 p-2 md:p-4 flex flex-col justify-end">
                <motion.div 
                  className="p-10 md:p-12 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-2xl transition-all duration-1000 md:group-hover:bg-white/[0.08] md:group-hover:border-white/20 flex flex-col h-[640px]"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <div className="px-8 py-4 rounded-3xl bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl transition-all duration-700 md:group-hover:scale-110 md:group-hover:border-accent-page/40">
                      <span className="text-3xl font-black text-accent-page tracking-tighter tabular-nums drop-shadow-[0_0_10px_rgba(197,160,89,0.3)]">
                        {service.id}
                      </span>
                    </div>
                    {service.highlight && (
                      <motion.span 
                        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="px-5 py-2 rounded-full bg-accent-page/10 backdrop-blur-3xl border border-accent-gold/30 text-accent-gold text-[10px] font-black tracking-[0.3em] uppercase shadow-[0_0_20px_rgba(197,160,89,0.2)]"
                      >
                        Signature
                      </motion.span>
                    )}
                  </div>

                  <div className="transform transition-transform duration-1000 md:group-hover:-translate-y-2">
                    <p className="text-accent-gold/60 text-[10px] tracking-[0.4em] font-black uppercase mb-4">
                      {service.subtitle}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tighter drop-shadow-lg break-keep">
                      {service.title}
                    </h3>
                    <div className="h-[1px] w-full md:w-16 bg-white/20 md:group-hover:w-full transition-all duration-1000 mb-8" />
                    <p className="text-white/60 text-base md:text-lg leading-relaxed font-light mb-10 max-w-[320px] break-keep">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto flex justify-start opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 z-20 pointer-events-auto">
                    <MagneticButton href={service.link}>
                      Discover
                    </MagneticButton>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
