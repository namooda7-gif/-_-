'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { constructionProjects as projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function PortfolioPage() {
  return (
    <main className="pt-32 pb-40 px-6 md:px-12 xl:px-24 max-w-[1800px] mx-auto min-h-screen bg-[#0A0A0A] text-white">
      <div className="mb-24">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-accent-gold text-xs md:text-sm tracking-[0.5em] font-black uppercase mb-6"
        >
          Project Archive
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter"
        >
          시공 사례
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-white/50 max-w-2xl mt-8 font-light"
        >
          라올실내건축의 철학이 담긴 실제 시공 리스트입니다. <br />
          상업 공간부터 주거 공간까지, 디테일의 차이가 만드는 공간의 가치를 확인해 보세요.
        </motion.p>
      </div>

      {/* Featured Transformation Slider Section - Expanded to Full Width */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-32 md:mb-64 -mx-6 md:-mx-12 xl:-mx-24"
      >
        <div className="px-6 md:px-12 xl:px-24">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 text-center md:text-left">
            <div className="max-w-3xl mx-auto md:mx-0">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                <div className="h-[1px] w-12 bg-accent-gold" />
                <p className="text-accent-gold text-[12px] font-black tracking-[0.5em] uppercase">Transformation Gallery</p>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
                평범한 일상이<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10 italic">예술이 되는 순간</span>
              </h2>
            </div>
            <div className="hidden md:block">
              <p className="text-white/40 text-lg font-light max-w-sm border-l border-white/10 pl-8">
                오차 없는 설계와 최고급 자재가 만났을 때 생기는 공간의 기적을 확인하세요.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-32 md:gap-48 xl:gap-64">
          {/* Living Room Transformation */}
          <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] items-stretch gap-0 overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[auto]">
             <div className="w-full h-full">
               <BeforeAfterSlider 
                 beforeImage="/images/portfolio/transformation_before_v2.png" 
                 afterImage="/images/portfolio/transformation_after_v2.png" 
               />
             </div>
             <div className="p-10 md:p-16 xl:p-20 bg-zinc-950 border-white/5 flex flex-col justify-center">
               <div className="space-y-6">
                 <div className="space-y-2">
                   <span className="text-accent-gold text-[10px] font-black tracking-[0.3em] uppercase opacity-50">CASE 01 / LIVING ROOM</span>
                   <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">COLOR ACCENT<br /><span className="text-accent-gold italic font-light lowercase">modern</span></h3>
                 </div>
                 <div className="h-[1px] w-12 bg-white/10" />
                 <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                   오래된 아파트의 전형적인 거실에서, 세련된 컬러 포인트와 모던한 가구 배치를 통해 예술적인 휴식 공간으로 탈바꿈했습니다. 라올만의 감각으로 탄생한 공간의 재발견을 확인해 보세요.
                 </p>
                 <div className="pt-4">
                   <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Construction Period</span>
                     <span className="text-[10px] text-accent-gold font-bold uppercase">4 Weeks</span>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Kitchen Transformation - Text Left, Image Right (1:2.5) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] items-stretch gap-0 overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[auto]">
             <div className="p-10 md:p-16 xl:p-20 bg-zinc-950 border-white/5 flex flex-col justify-center order-2 lg:order-1">
               <div className="space-y-6">
                 <div className="space-y-2">
                   <span className="text-accent-gold text-[10px] font-black tracking-[0.3em] uppercase opacity-50">CASE 02 / KITCHEN</span>
                   <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">WARM<br /><span className="text-accent-gold italic font-light lowercase">minimalist</span></h3>
                 </div>
                 <div className="h-[1px] w-12 bg-white/10" />
                 <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                   기능 중심의 평범한 주방을 워밀 미니멀리즘 감성의 프리미엄 키친으로 재설계하여, 요리하는 시간이 즐거움이 되는 공간을 만들었습니다. 일상이 특별해지는 미학적 가치를 추구합니다.
                 </p>
                 <div className="pt-4">
                   <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Premium Finish</span>
                     <span className="text-[10px] text-accent-gold font-bold uppercase">Natural Wood</span>
                   </div>
                 </div>
               </div>
             </div>
             <div className="w-full h-full order-1 lg:order-2">
               <BeforeAfterSlider 
                 beforeImage="/images/portfolio/kitchen_before.png" 
                 afterImage="/images/portfolio/kitchen_after.png" 
               />
             </div>
          </div>

          {/* Bathroom Transformation */}
          <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] items-stretch gap-0 overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[auto]">
             <div className="w-full h-full">
               <BeforeAfterSlider 
                 beforeImage="/images/portfolio/bathroom_before.png" 
                 afterImage="/images/portfolio/bathroom_after.png" 
               />
             </div>
             <div className="p-10 md:p-16 xl:p-20 bg-zinc-950 border-white/5 flex flex-col justify-center">
               <div className="space-y-6">
                 <div className="space-y-2">
                   <span className="text-accent-gold text-[10px] font-black tracking-[0.3em] uppercase opacity-50">CASE 03 / BATHROOM</span>
                   <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">HOTEL-STYLE<br /><span className="text-accent-gold italic font-light lowercase">luxury</span></h3>
                 </div>
                 <div className="h-[1px] w-12 bg-white/10" />
                 <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                   노후된 욕실을 호텔 수준의 럭셔리한 배스룸으로 변화시켜, 하루의 피로를 푸는 프라이빗한 힐링 공간을 완성했습니다. 최고급 자재와 조명이 만났을 때 생기는 감동을 선사합니다.
                 </p>
                 <div className="pt-4">
                   <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Detail</span>
                     <span className="text-[10px] text-accent-gold font-bold uppercase">Indirect Lighting</span>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </motion.div>
      
      <div className="space-y-32 md:space-y-64">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
          >
            {/* Image Container - Larger Scale */}
            <div className="w-full lg:w-3/5 xl:w-[65%] group relative">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden shadow-2xl shadow-black/50"
              >
                <Image 
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  priority={index < 2}
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                
                {/* Floating Icon */}
                <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 -rotate-45 group-hover:rotate-0">
                  <ArrowUpRight className="w-7 h-7" />
                </div>
              </motion.div>
            </div>
            
            {/* Text Content - Refined Staggered Typography */}
            <div className={`w-full lg:w-2/5 xl:w-[35%] ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'} px-4 md:px-0`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <div className={`flex items-center gap-3 mb-6 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <span className="text-accent-gold/50 text-sm font-black tracking-widest">0{index + 1}</span>
                  <div className="h-[1px] w-8 bg-accent-gold/30" />
                  <p className="text-accent-gold text-[11px] font-black tracking-[0.4em] uppercase">
                    {project.category}
                  </p>
                </div>
                
                <h3 className="text-4xl md:text-5xl xl:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                  {project.title}
                </h3>
                
                <div className={`flex flex-col gap-6 ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                  <p className="text-white/60 text-lg leading-relaxed font-light max-w-md">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-white/30 text-xs font-bold tracking-widest uppercase">{project.location}</span>
                    <span className="text-accent-gold/40 text-[10px] font-black tracking-widest uppercase">{project.year}</span>
                  </div>
                  
                  <motion.div 
                    whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                    className="mt-4 flex items-center gap-4 text-white/40 hover:text-white transition-colors cursor-pointer group/link"
                  >
                    <span className="text-xs font-black tracking-[0.2em] uppercase">View Project Detail</span>
                    <div className="w-12 h-[1px] bg-white/20 group-hover/link:w-24 transition-all duration-500" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
