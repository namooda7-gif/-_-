'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function PortfolioPage() {
  return (
    <main className="pt-32 pb-40 px-6 md:px-12 xl:px-24 max-w-[1800px] mx-auto min-h-screen bg-transparent text-white">
      <div className="mb-24">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[var(--accent-page)] text-xs md:text-sm tracking-[0.5em] font-black uppercase mb-6"
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
                <div className="h-[1px] w-12 bg-[var(--accent-page)]" />
                <p className="text-[var(--accent-page)] text-[12px] font-black tracking-[0.5em] uppercase">Transformation Gallery</p>
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
                   <span className="text-accent-page text-[10px] font-black tracking-[0.3em] uppercase opacity-50">CASE 01 / LIVING ROOM</span>
                   <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">COLOR ACCENT<br /><span className="text-accent-page italic font-light lowercase">modern</span></h3>
                 </div>
                 <div className="h-[1px] w-12 bg-white/10" />
                 <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                   오래된 아파트의 전형적인 거실에서, 세련된 컬러 포인트와 모던한 가구 배치를 통해 예술적인 휴식 공간으로 탈바꿈했습니다. 라올만의 감각으로 탄생한 공간의 재발견을 확인해 보세요.
                 </p>
                 <div className="pt-4">
                   <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Construction Period</span>
                     <span className="text-[10px] text-accent-page font-bold uppercase">4 Weeks</span>
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
                   <span className="text-accent-page text-[10px] font-black tracking-[0.3em] uppercase opacity-50">CASE 02 / KITCHEN</span>
                   <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">WARM<br /><span className="text-accent-page italic font-light lowercase">minimalist</span></h3>
                 </div>
                 <div className="h-[1px] w-12 bg-white/10" />
                 <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                   기능 중심의 평범한 주방을 워밀 미니멀리즘 감성의 프리미엄 키친으로 재설계하여, 요리하는 시간이 즐거움이 되는 공간을 만들었습니다. 일상이 특별해지는 미학적 가치를 추구합니다.
                 </p>
                 <div className="pt-4">
                   <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Premium Finish</span>
                     <span className="text-[10px] text-accent-page font-bold uppercase">Natural Wood</span>
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
                   <span className="text-accent-page text-[10px] font-black tracking-[0.3em] uppercase opacity-50">CASE 03 / BATHROOM</span>
                   <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">HOTEL-STYLE<br /><span className="text-accent-page italic font-light lowercase">luxury</span></h3>
                 </div>
                 <div className="h-[1px] w-12 bg-white/10" />
                 <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                   노후된 욕실을 호텔 수준의 럭셔리한 배스룸으로 변화시켜, 하루의 피로를 푸는 프라이빗한 힐링 공간을 완성했습니다. 최고급 자재와 조명이 만났을 때 생기는 감동을 선사합니다.
                 </p>
                 <div className="pt-4">
                   <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Detail</span>
                     <span className="text-[10px] text-accent-page font-bold uppercase">Indirect Lighting</span>
                   </div>
                 </div>
               </div>
             </div>
          </div>
          
          {/* Case 04 / Dog Bath 01 (Text Left, Image Right 1:2.5) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] items-stretch gap-0 overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[auto]">
             <div className="p-10 md:p-16 xl:p-20 bg-zinc-950 border-white/5 flex flex-col justify-center order-2 lg:order-1">
               <div className="space-y-6">
                 <div className="space-y-2">
                   <span className="text-accent-page text-[10px] font-black tracking-[0.3em] uppercase opacity-50">CASE 04 / DOG BATH GUMI</span>
                   <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">PREMIUM<br /><span className="text-accent-page italic font-light lowercase">pet care salon</span></h3>
                 </div>
                 <div className="h-[1px] w-12 bg-white/10" />
                 <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                   단순한 목욕 시설을 넘어, 반려동물과 반려인 모두가 편안함을 느끼는 프리미엄 펫 케어 살롱으로 거듭났습니다. 습기에 강한 자재와 세심한 조닝(Zoning)을 통해 기능성과 미학을 동시에 잡았습니다.
                 </p>
                 <div className="pt-4">
                   <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Location</span>
                     <span className="text-[10px] text-accent-page font-bold uppercase">GUMI</span>
                   </div>
                 </div>
               </div>
             </div>
             <div className="w-full h-full order-1 lg:order-2">
               <BeforeAfterSlider 
                 beforeImage="/images/portfolio/dog_bath_04_before.png" 
                 afterImage="/styles/시공사례/구미 강아지목욕탕 시공사례.jpg" 
               />
             </div>
          </div>

          {/* Case 05 / Dog Bath 02 (Image Left, Text Right 2.5:1) */}
          <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] items-stretch gap-0 overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[auto]">
             <div className="w-full h-full">
               <BeforeAfterSlider 
                 beforeImage="/images/portfolio/dog_bath_02_before.png" 
                 afterImage="/styles/시공사례/반포 강아지목욕탕 시공사례1.jpg" 
               />
             </div>
             <div className="p-10 md:p-16 xl:p-20 bg-zinc-950 border-white/5 flex flex-col justify-center">
               <div className="space-y-6">
                 <div className="space-y-2">
                   <span className="text-accent-page text-[10px] font-black tracking-[0.3em] uppercase opacity-50">CASE 05 / DOG BATH BANPO</span>
                   <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">HIGH-END<br /><span className="text-accent-page italic font-light lowercase">boutique bath</span></h3>
                 </div>
                 <div className="h-[1px] w-12 bg-white/10" />
                 <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                   반포의 하이엔드 주거 감성에 맞춘 세련된 부티크 스타일의 강아지 목욕탕입니다. 최고급 타일 마감과 정교한 라이팅 설계를 통해 위생적이면서도 럭셔리한 분위기를 연출했습니다.
                 </p>
                 <div className="pt-4">
                   <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Concept</span>
                     <span className="text-[10px] text-accent-page font-bold uppercase">Luxury Boutique</span>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Case 06 / Studio (Text Left, Image Right 1:2.5) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] items-stretch gap-0 overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[auto]">
             <div className="p-10 md:p-16 xl:p-20 bg-zinc-950 border-white/5 flex flex-col justify-center order-2 lg:order-1">
               <div className="space-y-6">
                 <div className="space-y-2">
                   <span className="text-accent-page text-[10px] font-black tracking-[0.3em] uppercase opacity-50">CASE 06 / UNMANNED STUDIO</span>
                   <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">CREATIVE<br /><span className="text-accent-page italic font-light lowercase">unmanned space</span></h3>
                 </div>
                 <div className="h-[1px] w-12 bg-white/10" />
                 <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                   노후된 상가 공간을 감각적인 무인 사진 스튜디오로 재탄생시켰습니다. 효율적인 가구 배치와 포토제닉한 코너 설계를 통해 방문객들에게 특별한 경험과 가치 있는 순간을 선사합니다.
                 </p>
                 <div className="pt-4">
                   <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Type</span>
                     <span className="text-[10px] text-accent-page font-bold uppercase">Photo Studio</span>
                   </div>
                 </div>
               </div>
             </div>
             <div className="w-full h-full order-1 lg:order-2">
               <BeforeAfterSlider 
                 beforeImage="/images/portfolio/studio_before.png" 
                 afterImage="/styles/시공사례/구미 무인스튜디오 시공사례.jpg" 
               />
             </div>
          </div>
          {/* Case 07 / Dog Bath Amsadong (Image Left, Text Right 2.5:1) */}
          <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] items-stretch gap-0 overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[auto]">
             <div className="w-full h-full">
               <BeforeAfterSlider 
                 beforeImage="/images/portfolio/dog_bath_01_before.png" 
                 afterImage="/styles/시공사례/암사동 강아지목욕탕 시공사례.jpg" 
               />
             </div>
             <div className="p-10 md:p-16 xl:p-20 bg-zinc-950 border-white/5 flex flex-col justify-center">
               <div className="space-y-6">
                 <div className="space-y-2">
                   <span className="text-accent-page text-[10px] font-black tracking-[0.3em] uppercase opacity-50">CASE 07 / DOG BATH AMSA</span>
                   <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">CLEAN & COZY<br /><span className="text-accent-page italic font-light lowercase">comfort wash</span></h3>
                 </div>
                 <div className="h-[1px] w-12 bg-white/10" />
                 <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                   암사동의 지역적 특성을 고려하여 따뜻하고 친근한 분위기로 설계된 강아지 목욕 시설입니다. 전문가의 시선으로 설계된 배수 시스템과 반려견의 심리적 안정을 돕는 조도 조절을 통해 완성도 높은 공간을 구현했습니다.
                 </p>
                 <div className="pt-4">
                   <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                     <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Year</span>
                     <span className="text-[10px] text-accent-page font-bold uppercase">2023</span>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </motion.div>
      
    </main>
  );
}
