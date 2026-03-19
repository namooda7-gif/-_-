'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Layout, PenTool, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: "인테리어 디자인",
    subtitle: "Interior Design",
    description: "사용자의 동선과 감정의 변화까지 계산한 입체적 설계로, 일상이 예술이 되는 최적의 공간을 제안합니다.",
    image: "/images/services/design.png",
    icon: PenTool,
    link: "/services#design",
    accent: "text-blue-400"
  },
  {
    title: "시공 및 감리",
    subtitle: "Construction & Supervision",
    description: "라올의 기술력은 보이지 않는 곳에서 증명됩니다. 엄격한 감리 시스템을 통해 설계의 의도를 완벽한 현실로 구현합니다.",
    image: "/images/services/construction.png",
    icon: Layout,
    link: "/services#construction",
    accent: "text-amber-400"
  },
  {
    title: "우먼픽스 홈케어",
    subtitle: "WomanFix Homecare",
    description: "공사가 끝난 후가 진짜 시작입니다. 여성 전문가의 섬세한 시선으로 공간의 건강을 지속적으로 유지하는 프리미엄 솔루션입니다.",
    image: "/images/services/womanfix.png",
    icon: ShieldCheck,
    link: "/womanfix",
    accent: "text-rose-400",
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
      <Link href={href} className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black text-sm font-bold hover:bg-white/90 transition-all group/btn shadow-xl">
        {children}
        <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
      </Link>
    </motion.div>
  );
}

export default function ServiceCards() {
  return (
    <section className="py-40 bg-[#0A0A0A] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-accent-pink/5 blur-[150px] rounded-full -z-10 animate-pulse" />
      
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
              <div className="h-[1px] w-12 bg-accent-pink" />
              <p className="text-accent-pink text-xs tracking-[0.4em] font-bold uppercase">Precision in Execution</p>
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
            <p className="text-white/50 text-lg leading-relaxed mb-4 border-l-2 border-accent-pink/30 pl-6">
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
              className="group relative h-[650px] rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-50 group-hover:opacity-100"
                />
                {/* Overlay Graident */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-700 opacity-90 group-hover:opacity-100" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 p-12 flex flex-col justify-end">
                <div className="mb-8 flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                    <service.icon className={service.accent} size={32} />
                  </div>
                  {service.highlight && (
                    <motion.span 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="px-4 py-1.5 rounded-full bg-accent-pink text-white text-[11px] font-black tracking-widest uppercase shadow-lg shadow-accent-pink/40"
                    >
                      Signature
                    </motion.span>
                  )}
                </div>

                <div className="mb-10 transform transition-transform duration-700 group-hover:-translate-y-4">
                  <p className="text-white/40 text-[10px] tracking-[0.3em] font-black uppercase mb-3">
                    {service.subtitle}
                  </p>
                  <h3 className="text-4xl font-black text-white mb-6 leading-tight tracking-tighter">
                    {service.title}
                  </h3>
                  <div className="h-[2px] w-0 bg-white/20 group-hover:w-full transition-all duration-700 mb-6" />
                  <p className="text-white/60 text-[15px] leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 max-w-[300px]">
                    {service.description}
                  </p>
                </div>

                <div className="flex justify-start opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0 delay-200">
                  <MagneticButton href={service.link}>
                    Discover More
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
